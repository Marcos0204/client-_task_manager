import { FORMAULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELINAR_PROYECTO
        } from "../../types"

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
        case AGREGAR_PROYECTO :
            return {
                ...state, 
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO :
            return {
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        case ELINAR_PROYECTO: 
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }
        default:
            return state
    }
}