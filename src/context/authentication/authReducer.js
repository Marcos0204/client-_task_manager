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
            localStorage.setItem('tokel', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message : null
            }
        case REGISTRATION_ERROR :
            return{
                ...state,
                token: null,
                message: action.payload
            }
    
        default:
            break;
    }
}