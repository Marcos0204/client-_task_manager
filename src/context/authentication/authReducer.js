import { 
    SUCCESSFUL_REGISTRARION,
    REGISTRATION_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    SIGN_OF
 } from '../../types'

export default (state, action) =>{
    switch (action.type) {
        case SUCCESSFUL_REGISTRARION:
        case  SUCCESSFUL_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message : null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case LOGIN_ERROR:
        case REGISTRATION_ERROR :
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                message: action.payload
            }
    
        default:
            break;
    }
}