import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from "../../context/authentication/authContext";

const Login = (props) => {
    /// context aler
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;
    // console.log(`la alert is ${alert}` )

    //context auth
    const authContext = useContext(AuthContext);
    const { logIn, message ,authenticated, } = authContext;

     /// 
    useEffect(()=>{
        if(authenticated){
            props.history.push('/proyectos')
        }
        if(message){
            showAlert(message.msg, message.category)
        }

    }, [message, authenticated,  props.history])

    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    })

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = usuario;

    const onSubmit = (e) =>{
        e.preventDefault()
        if(email.trim() === '' || password.trim() === ''){
            showAlert('Todos los campos son obligatorios', 'alerta-error')
        }
        logIn({
            email,
            password
        })
    }
    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div> ): null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={onSubmit}>
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesion'
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Obtener cuenta</Link>
            </div>
        </div>
    )
}

export default Login