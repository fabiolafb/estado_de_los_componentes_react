import React from 'react'


const Formulario = ({nombre, setNombre, pass, setPass }) => {

  
  return (
    <form>
        <div className='form-group'>
            <label>Nombre de usuario</label>
            <input 
            type="text"  
            name="nombre" 
            className='form-control' 
            placeholder='Ingresa nombre de usuario' 
            onChange={(e) => setNombre(e.target.value)} 
            value={nombre} />
        </div>
        <div className='form-group'>
            <label>Contraseña</label>
            <input 
            type="password" 
            name="pass" 
            className='form-control' 
            placeholder='Ingresa contraseña' 
            onChange={(e) => setPass(e.target.value)} 
            value={pass} />
        </div>
    </form>
  )  
}

export default Formulario