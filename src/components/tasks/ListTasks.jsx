import React, { useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/proyectos/ProjectContext';

const ListTasks = () => {
    const proyectosContext = useContext(ProjectContext);
    const { project, deleteProject } = proyectosContext;
    
    if(!project) return <h2>seleccione un proyecto</h2>

    const [actualProject] = project


    const tasks = [
        {name:'elegir plataforma', state:true},
        {name:'elegir colores', state:false },
        {name:'elegir plataformas de pago', state:false },
        {name:'elegir Hosting', state: true}
    ]

    const onClickEliminar = () => {
        
        deleteProject(actualProject.id)
    }


    return (
        <>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="listado-tareas">
                { tasks.length === 0
                    ? (<li className='tarea'><p>No Hay Tareas</p> </li>)
                    : tasks.map((task, index) =>(
                        <Task task={task} key={index}/>
                    ))
                }
                <button
                    type='button'
                    className='btn btn-eliminar'
                    onClick={()=> onClickEliminar()}
                >
                    eliminar Proyecto &time;
                </button>
            </ul>
        </>
    )
}

export default ListTasks
