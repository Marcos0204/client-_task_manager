import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';
import TaskContext from '../../context/task/taskContext';

const FormTask = () => {
    const proyectosContext = useContext(ProjectContext);
    const { project } = proyectosContext;

    // get Funtion addtask
    const taskContext = useContext(TaskContext);
    const { addTask } = taskContext;
    console.log('this is')
    console.log(addTask)

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

        //add task to state
        task.projectId = projectActual.id;
        task.state = false
        console.log(task)
        addTask(task)

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
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask
