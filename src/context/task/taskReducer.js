import { TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK,
        DELETE_TASK,
        TASK_STATUS,
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
        case TASK_STATUS:
            return{
                    ...state,
                    tasks:state.tasks.map(item =>item.id=== action.payload.id ? action.payload: item)
                }
            

        default:
            return state
    }
}