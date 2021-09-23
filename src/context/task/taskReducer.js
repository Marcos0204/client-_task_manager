import { TASKS_PROJECT,
        ADD_TASK
        } from "../../types";



export default (state, action) =>{
    switch(action.type) {

        case TASKS_PROJECT:
            return{
                ...state,
                taskProject: state.tasks.filter(item => item.projectId === action.payload)
            };
        case ADD_TASK :
            return{
                ...state,
                tasks : [...state.tasks, action.payload]
            }

        default:
            return state
    }
}