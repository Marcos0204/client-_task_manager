import { TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK,
        DELETE_TASK
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
                tasks : [...state.tasks, action.payload],
                errorTask: false
            };
        case VALIDATE_TASK :
            return{
                ...state,
                errorTask:true
            };
        case DELETE_TASK :
            return{
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload )
            }

        default:
            return state
    }
}