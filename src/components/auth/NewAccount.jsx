
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from "../../context/authentication/authContext";

const NewAccount = (props) => {
    /// context aler
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;
    // console.log(`la alert is ${alert}` )

    //context auth
    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

    /// 
    useEffect(()=>{
        if(authenticated){
            props.history.push('/proyectos')
        }
        if(message){
            showAlert(message.msg, message.category)
        }

    }, [message, authenticated,  props.history])

    const [user, saveUser] = useState({
        email:'',
        password:'',
        name:'',
        confirm:''
    })

    const onChange = e =>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const { name, email, password, confirm } = user;

    const onSubmit = (e) =>{
        e.preventDefault()

        // validar
        if (name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirm.trim() === '' ){
                showAlert('Todos los campos son obligatorios', 'alerta-error')
                return;
            }
        //validar password 
        if (password.length < 6 ) {
            showAlert('el password debbe ser de almenos 6 caracteres', 'alerta-error')
            return;
        }
        if (password !== confirm){
            showAlert('los password no son iguales', 'alerta-error')
            return;
        }
        /*/saveUser({
            email:'',
            password:'',
            name:'',
            confirm:''
        })*/
        // action
        registerUser({
            name,
            password,
            email
        })
    }
    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div> ): null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Nueva Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text" 
                            id='nombre'
                            name='name'
                            placeholder='nombre'
                            value={name}
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
                            name='confirm'
                            placeholder='Repite tu password'
                            value={confirm}
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

export default NewAccount