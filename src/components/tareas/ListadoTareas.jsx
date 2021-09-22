import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareas = [
        {nombre:'elegir plataforma', estado:true},
        {nombre:'elegir colores', estado:false },
        {nombre:'elegir plataformas de pago', estado:false },
        {nombre:'elegir Hosting', estado: true}
    ]
    return (
        <>
            <h2>Proyecto: Tienda virtual</h2>
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
                >
                    eliminar Proyecto &time;
                </button>
            </ul>
            
        </>
    )
}

export default ListadoTareas
