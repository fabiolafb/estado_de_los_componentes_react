import "./index.css"
import { useState } from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Button  from "./components/Button";

function App() {
  const [nombre, setNombre] = useState('')
  const [pass, setPass] = useState('')
  const deshabilitarBoton = pass === "252525";
  const [error, setError] = useState(false)

  const validarNombre = (e) => {
  e.preventDefault();
  if (nombre === "") {
  setError(true)
  return
  }
  //Eliminar mensaje de error
  setError(false)
  }

  return (
    <div className="App">
      <Titulo />
      <form className='formulario' onSubmit={validarNombre}> 
      {error ? <p className="error" class="alerta" > <i>Debes ingresar nombre de usuario</i></p> : null}
      <Formulario 
        nombre={nombre}
        setNombre={setNombre}
        pass={pass}
        setPass={setPass} />
      <Button deshabilitarBoton={deshabilitarBoton} />
      </form>
    </div>
  );
}

export default App;
