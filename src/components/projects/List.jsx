import React, { useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/proyectos/ProjectContext';

const List = () => {

    const projectContext = useContext(ProjectContext);
    const { proyectos, obtenerProyectos } = projectContext;
    useEffect(() => {
        obtenerProyectos()
    }, [])

    if(proyectos.length===0) return <p>No hay proyectos, comienza creando uno.</p>

    return (
        <ul className='listado-proyectos'>
            { proyectos.length > 0 &&
                proyectos.map((project, index) =>(
                    <Project project={project} key={index}/>
                ))
            }
        </ul>
    )
}

export default List
