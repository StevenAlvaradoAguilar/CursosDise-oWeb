import React from 'react'
import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    // Sí existe información en la data lo mostramos, condicional ya que hacemos doble negación la data para saber
    // si tiene información en la posición x
    const { author, quote } = !!data && data[0];

    // console.log({ data, isLoading, hasError })

    // Nunca poner hooks acá los hooks no deben de ser renderizados de manera
    // condicional

    /*Bloque de código ternario, sólo código pequenno
    {

    }
    */

  return (
    <>
    <h1> Breaking Bad Quotes </h1>
    <hr />

    {
        isLoading
            ? <LoadingQuote></LoadingQuote>
            : <Quote author={ author } quote={ quote }/>
    } 

    <button className='btn btn-primary' disable='isLoading' onClick={ () => increment() }>
        Next quote
    </button>

    </>
  )
}
