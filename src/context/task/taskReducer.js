import { TASKS_PROJECT 
        } from "../../types";



export default (state, action) =>{
    switch(action.type) {

        case TASKS_PROJECT:
            return{
                ...state,
                taskProject: state.tasks.filter(item => item.projectId === action.payload)
            }

        default:
            return state
    }
}