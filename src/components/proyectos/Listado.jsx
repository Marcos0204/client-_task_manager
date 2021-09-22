import React, { useContext, useEffect} from 'react';
import Proyecto from './proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Listado = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
    useEffect(() => {
        obtenerProyectos()
    }, [])

    return (
        <ul className='listado-proyectos'>
            { proyectos.length > 0 &&
                proyectos.map((proyecto, index) =>(
                  <Proyecto proyecto={proyecto} key={index}/>
                ))
            }
        </ul>
    )
}

export default Listado
