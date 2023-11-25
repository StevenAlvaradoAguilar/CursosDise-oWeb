import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });

    // Precauciones del useEfect debes de renderizar una vez y una 
    // vez finalizado debe de finalizarla para no provocar una fuga de memoria.
    useEffect(() => {
      
      const onMouseMove = (({ x, y }) => {

        // const cords = { x, y };
        setCoords({ x, y });

      })

      window.addEventListener( 'mousemove', onMouseMove );
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, [])
    

  return (
    <>
        <h3>El usuario ya existe</h3>
        { JSON.stringify( coords )};
    </>
  )
}
