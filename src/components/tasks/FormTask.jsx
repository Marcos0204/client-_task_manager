import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';
import TaskContext from '../../context/task/taskContext';

const FormTask = () => {
    const proyectosContext = useContext(ProjectContext);
    const { project } = proyectosContext;

    // get Funtion addtask
    const taskContext = useContext(TaskContext);
    const { addTask, validateTask, errorTask, getTask, taskSelect, upgradeTask, cleanTask } = taskContext;

    //effect to load task to edit
    useEffect(()=>{
        if(taskSelect !== null){
            setTask(taskSelect)
        } else {
            setTask({
                name:''
            })
        }
    },[taskSelect])

    //state form
    const [task, setTask] = useState({
        name:''
    })
    //extract name task
    const { name } = task;


    if(!project) return null
    const [projectActual] = project;


    const hanledChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const hanledSubmit = (e)=>{
        e.preventDefault();
        

        ///validate
        if(name.trim() === ''){
            validateTask()
            return null
        }
        
        //add task to state
        if (taskSelect=== null) {
            task.projectId = projectActual.id;
            task.state = false
            addTask(task)
        } else{
            //upgrade task
            upgradeTask(task)
            
            //clean up task select
            cleanTask()
        }
        

        ///
        getTask(projectActual.id)

        // reset form
        setTask({
            ...task,
            name:''
        })
    }
    return (
        <div className='formulario'>
            <form
                onSubmit={hanledSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre tarea'
                        name='name'
                        value={name}
                        onChange={hanledChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className='btn btn-primario btn-block btn-submit'
                        value={taskSelect ?'Editar' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTask && <p className='mensaje error'>El nombre de la tarea es obligatorio</p>}
        </div>
    )
}

export default FormTask
