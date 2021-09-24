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
                formNewProject: !action.payload
            }
        case GET_PROJECTS :
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT :
            return {
                ...state, 
                projects: [ action.payload, ...state.projects],
                formulario: false,
                errorForm: false
            }
        case VALIDAR_FORMULARY :
            return {
                ...state,
                errorForm: true
            }
        case ACTUAL_PROJECT:
            return{
                ...state,
                project: state.projects.filter((item) => item.id === action.payload)
            }
        case DELETE_PROJECT: 
            return{
                ...state,
                projects: state.projects.filter((item) => item.id !== action.payload),
                project: null
            }
        default:
            return state
    }
}