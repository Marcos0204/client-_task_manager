
import React, {useReducer} from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK
        } from "../../types";


const TaskState = props => {

    const initialSate = {
        tasks:[
        {name:'elegir plataforma', state:true, projectId: 1},
        {name:'elegir colores', state:false, projectId:2},
        {name:'elegir plataformas de pago', state:false, projectId:3 },
        {name:'elegir Hosting', state: true, projectId:4},
        {name:'elegir plataforma', state:true, projectId: 1},
        {name:'elegir colores', state:false, projectId:2},
        {name:'elegir plataformas de pago', state:false, projectId:3 },
        {name:'elegir Hosting', state: true, projectId:4},
        {name:'elegir plataforma', state:true, projectId: 1},
        {name:'elegir colores', state:false, projectId:2},
        {name:'elegir plataformas de pago', state:false, projectId:3 },
        {name:'elegir Hosting', state: true, projectId:4},
        {name:'elegir uno', state:true, projectId: 1},
        {name:'elegir dos', state:false, projectId:2},
        {name:'elegir tres de pago', state:false, projectId:3 },
        {name:'elegir cuatro', state: true, projectId:4},
        ],
        taskProject:null,
        errorTask: false
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

    return(
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                taskProject: state.taskProject,
                errorTask: state.errorTask,
                getTask,
                addTask,
                validateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;