//import { memo } from 'react';
import React from "react"

// el memo memoriza el componente y se renderiza sólo cuando los componentes cambian
export const Small = React.memo(( { value } ) => {

    console.log('Me volvi a dibujar :(')

  return (
    <small>{ value }</small>
  )
})
