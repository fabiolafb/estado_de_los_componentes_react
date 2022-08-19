import React from 'react'

const Button = ({clickBoton}) => {
  //const [habilitar, setHabilitar = useState('')]
  return (
    <button type="submit" variant="primary" disabled={!clickBoton}>Iniciar sesión</button>
      )
}
 
export default Button;

/*{pass === "252525" ? (
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Iniciar Sesión
          </Button>
        )}*/