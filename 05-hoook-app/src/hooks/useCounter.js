// Un Hook es una función que tendrá valores de inserción y returna esos valores o lo 
// que el usuario vaya a ingresar

import { useState } from 'react';

export const useCounter = ( inicitialValue = 10 ) => {

    const [ counter, setCounter ] = useState( inicitialValue );

    const increment = ( value = 1 ) => {
        setCounter( counter + value);
    };

    const decrement = ( value = 1 ) => {
        setCounter( counter - value  );
    };

    const reset = () => {
        setCounter( inicitialValue );
    };

    return {
        counter, 
        increment, 
        decrement,
        reset
    }

}