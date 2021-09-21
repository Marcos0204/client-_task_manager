
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        email:'',
        password:'',
        nombre:'',
        confirmar:''
    })

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, email, password, confirmar } = usuario;

    const onSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Nueva Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text" 
                            id='nombre'
                            name='nombre'
                            placeholder='nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" 
                            id='email'
                            name='email'
                            placeholder='email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" 
                            id='password'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirma tu Password</label>
                        <input
                            type="password" 
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrar me'
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>Volver a iniciar Sesion</Link>
            </div>
        </div>
    )
}

export default NuevaCuenta;