import React, { useContext } from 'react';
import Task from './Task';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, iliminaProyecto } = proyectosContext;
    
    if(!proyecto) return <h2>seleccione un proyecto</h2>

    const [proyectoActual] = proyecto


    const tasks = [
        {name:'elegir plataforma', state:true},
        {name:'elegir colores', state:false },
        {name:'elegir plataformas de pago', state:false },
        {name:'elegir Hosting', state: true}
    ]

    const onClickEliminar = () => {
        
        iliminaProyecto(proyectoActual.id)
    }


    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
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

export default ListadoTareas
