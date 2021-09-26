import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios';

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
            console.log(answer);
            dispatch({
                type: SUCCESSFUL_REGISTRARION
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: REGISTRATION_ERROR,
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