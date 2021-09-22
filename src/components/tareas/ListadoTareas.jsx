import React, { useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, iliminaProyecto } = proyectosContext;
    
    if(!proyecto) return <h2>seleccione un proyecto</h2>

    const [proyectoActual] = proyecto


    const tareas = [
        {nombre:'elegir plataforma', estado:true},
        {nombre:'elegir colores', estado:false },
        {nombre:'elegir plataformas de pago', estado:false },
        {nombre:'elegir Hosting', estado: true}
    ]

    const onClickEliminar = () => {
        
        iliminaProyecto(proyectoActual.id)
    }


    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                { tareas.length === 0
                    ? (<li className='tarea'><p>No Hay Tareas</p> </li>)
                    : tareas.map((tarea, index) =>(
                        <Tarea tarea={tarea} key={index}/>
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
