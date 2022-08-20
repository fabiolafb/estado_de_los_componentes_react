import React from 'react'

const Button = ({deshabilitarBoton}) => {

  return (
    <button type="submit" variant="primary" disabled={!deshabilitarBoton}>Iniciar sesión</button>
      )
}
 
export default Button;
