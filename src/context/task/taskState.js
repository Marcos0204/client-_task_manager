
import React, {useReducer} from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";


const TaskState = props => {

    const initialSate = {
        task:[
            {name:'elegir plataforma', state:true},
            {name:'elegir colores', state:false },
            {name:'elegir plataformas de pago', state:false },
            {name:'elegir Hosting', state: true}
        ]
    }

    // state and dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialSate);

    return(
        <TaskContext.Provider
            value={{
                task:state.task
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;