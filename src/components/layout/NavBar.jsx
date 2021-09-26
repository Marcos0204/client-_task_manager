import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

const NavBar = () => {

    //extraer la informacion
    const authContext = useContext(AuthContext);
    const { user, authenticatedUser, SIGN_OF } = authContext;
    let history = useHistory();

    console.log({ history })
    useEffect(()=>{
        authenticatedUser()
    },[])

    const singOf = () =>{
        SIGN_OF()
        //history.push('/')
        console.log('cerrando')
    }
    return (
        <header className='app-header'>
            {user && <p className="nombre-usuario">Hola <span>{user.name}</span> </p>}
            <nav className="nav-principal">
                <button
                    className='btn btn-blank cerrar-sesion'
                    //onClick= {() =>singOf()}
                >
                    cerrar sesion
                </button>
            </nav>
        </header>
    )
}

export default NavBar
