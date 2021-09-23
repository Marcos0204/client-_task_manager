import { PROJECT_FORM,
        GET_PROJECTS,
        ADD_PROJECT,
        VALIDAR_FORMULARY,
        ACTUAL_PROJECT,
        DELETE_PROJECT
        } from "../../types"

export default (state, action) => {
    switch(action.type){
        case PROJECT_FORM:
            return {
                ...state,
                formulario: !action.payload
            }
        case GET_PROJECTS :
            return {
                ...state,
                proyectos: action.payload
            }
        case ADD_PROJECT :
            return {
                ...state, 
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARY :
            return {
                ...state,
                errorformulario: true
            }
        case ACTUAL_PROJECT:
            return{
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        case DELETE_PROJECT: 
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }
        default:
            return state
    }
}