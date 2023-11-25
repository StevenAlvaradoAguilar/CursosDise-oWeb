import React, { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iteratioNumber = 100 ) => {
    for (let i = 0; i < iteratioNumber; i++) {
        console.log('Ahí vamos...')
    }

    return `${ iteratioNumber } iteraciones realizadas`; 
}

export const MemoHook = () => {

    const { increment, counter } = useCounter( 4000 );
    const [show, setShow] = useState(true);

    // Memoriza un valor, arreglo vacío sólo lo memoriza la primera vez 
    const memorizedValue = useMemo(() => heavyStuff( counter ), [counter])

  return (
    <>
    
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ heavyStuff( memorizedValue ) }</h4>

        <button
            className='btn btn-primary'
            // se llama como argumento el increment
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={ () => setShow( !show )}
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    
    </>
  )
}
