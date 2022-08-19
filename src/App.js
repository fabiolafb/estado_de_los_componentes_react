import "./index.css"
import { useState } from "react";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import Button  from "./components/Button";

function App() {
  const [nombre, setNombre] = useState('')
  const [pass, setPass] = useState('')
  const clickBoton = pass === "252525";
  
  const validarNombre = (e) => {
  // Prevenimos el comportamiento por defecto
  e.preventDefault();
  // Validación input
  if (nombre === "") {
    alert('Ingresa tu nombre de usuario')
    } 
  };

  return (
    <div className="App">
      <Titulo />
      <form className='formulario' onSubmit={validarNombre}> 
      <Formulario 
        nombre={nombre}
        setNombre={setNombre}
        pass={pass}
        setPass={setPass} />
      <Button clickBoton={clickBoton} />
      </form>
    </div>
  );
}

export default App;
