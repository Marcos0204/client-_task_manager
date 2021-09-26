import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    SUCCESSFUL_REGISTRARION,
    REGISTRATION_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    SIGN_OF
} from '../../types';


const AuthState = (props) =>{

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,

    };

    const [ state, dispatch ] = useReducer(authReducer, initialState);
    // funtions
    // add user
    const registerUser = async (data) =>{
        
        try {
            const answer = await clientAxios.post('/api/usuario', data);
           // console.log(answer.data);
            dispatch({
                type: SUCCESSFUL_REGISTRARION,
                payload: answer.data
            })
            //obtener el usuario
            authenticatedUser()
        } catch (error) {
            // console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGISTRATION_ERROR,
                payload: alert
            })
        }
    }

    // authenticated user
    const authenticatedUser =async ()=>{
        const token = localStorage.getItem('token');
        //console.log('este es')
        //console.log(token)
        if(token){
            tokenAuth(token)
        }

        try {
            const answer = await clientAxios.get('/api/auth');
            //console.log(answer.data)
            dispatch({
                type:GET_USER,
                payload: answer.data
            })
        } catch (error) {
            console.log(error)
            console.log(error.response)
            dispatch({
                type:LOGIN_ERROR
            })
        }
    } 
    

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;