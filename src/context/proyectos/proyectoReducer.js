import { FORMAULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types"

export default (state, action) => {
    switch(action.type){
        case FORMAULARIO_PROYECTO:
            return {
                ...state,
                formulario: !action.payload
            }
        case OBTENER_PROYECTOS :
            return {
                ...state,
                proyectos: action.payload
            }
        default:
            return state
    }
}