
import React, {useReducer} from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK,
        DELETE_TASK,
        TASK_STATUS,
        TASK_ACTUAL
        } from "../../types";


const TaskState = props => {

    const initialSate = {
        tasks:[
        {id: 1,name:'elegir plataforma', state:true, projectId: 1},
        {id: 2,name:'elegir colores', state:false, projectId:2},
        {id: 3,name:'elegir plataformas de pago', state:false, projectId:3 },
        {id: 4,name:'elegir Hosting', state: true, projectId:4},
        {id: 5,name:'elegir plataforma', state:true, projectId: 1},
        {id: 6,name:'elegir colores', state:false, projectId:2},
        {id: 7,name:'elegir plataformas de pago', state:false, projectId:3 },
        {id: 8,name:'elegir Hosting', state: true, projectId:4},
        {id: 9,name:'elegir plataforma', state:true, projectId: 1},
        {id: 10,name:'elegir colores', state:false, projectId:2},
        {id: 11,name:'elegir plataformas de pago', state:false, projectId:3 },
        {id: 12,name:'elegir Hosting', state: true, projectId:4},
        {id: 13,name:'elegir uno', state:true, projectId: 1},
        {id: 14,name:'elegir dos', state:false, projectId:2},
        {id: 15,name:'elegir tres de pago', state:false, projectId:3 },
        {id: 16,name:'elegir cuatro', state: true, projectId:4},
        ],
        taskProject:null,
        errorTask: false,
        taskSelect: null
    }

    // state and dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialSate);


    ///funtions

    //get tasks projects
    const getTask = projectID =>
    dispatch({
        type: TASKS_PROJECT,
        payload: projectID
    })

    ///ADD TASK TO SELECT PROJECT
    const addTask = task =>{
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    //VALIDATE TASK USERS

    const validateTask = () =>{
        dispatch({
            type:VALIDATE_TASK,
        })
    }

    /// DALETE
    const deleteTask = id =>{
        dispatch({
            type:DELETE_TASK,
            payload: id
        })
    }

    // CHANGE STATUS

    const changeTaskStatus= task =>{
        dispatch({
            type: TASK_STATUS,
            payload: task
        })
    } 

    // save current task
    const saveCurrentTask = task => {
        dispatch({
            type: TASK_ACTUAL,
            payload: task
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                taskProject: state.taskProject,
                errorTask: state.errorTask,
                taskSelect: state.taskSelect,
                getTask,
                addTask,
                validateTask,
                deleteTask,
                changeTaskStatus,
                saveCurrentTask,
                
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;