import { FORMAULARIO_PROYECTO } from "../../types"

export default (state, action) => {
    switch(action.type){
        case FORMAULARIO_PROYECTO:
            return {
                ...state,
                formulario: !action.payload
            }
        default:
            return state
    }
}