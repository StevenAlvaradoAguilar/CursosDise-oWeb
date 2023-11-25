import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    // isLoading es una variable de carga el objeto y el hasError es por si hay algún error
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(() => {
      getFetch();
    }, [url])
    

  return {
    data:      state.data,
    isLoading: state.isLoading ,
    hasError:  state.hasError,
  }
}
