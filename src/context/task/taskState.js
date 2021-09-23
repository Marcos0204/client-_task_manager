
import React, {useReducer} from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT
        
        } from "../../types";


const TaskState = props => {

    const initialSate = {
        task:[
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
        ]
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

    return(
        <TaskContext.Provider
            value={{
                task:state.task,
                getTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;