import React from 'react'

const Button = ({clickBoton}) => {

  return (
    <button type="submit" variant="primary" disabled={!clickBoton}>Iniciar sesión</button>
      )
}
 
export default Button;
