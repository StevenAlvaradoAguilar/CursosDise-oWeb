import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // Guarda en memoria las funciones 
    const incrementFather = useCallback(
        // si enviamos argumentos estos deben de ir en los parentesis
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    )

    useEffect(() => {
      //incrementFather();
    }, [incrementFather])
    
    
    
    /* const incrementFather = () => {
        setCounter( counter + 1 );
    } */

  return (
    <>
        <h1>useCallBack Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ incrementFather }/>

    </>
  )
}
