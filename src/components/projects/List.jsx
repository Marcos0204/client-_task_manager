import React, { useContext, useEffect} from 'react';
import Project from './Project';
import ProjectContext from '../../context/proyectos/ProjectContext';

const List = () => {

    const projectContext = useContext(ProjectContext);
    const { projects, getProjects } = projectContext;
    useEffect(() => {
        getProjects()
        // eslint-disable-next-line
    }, [])

    if(projects.length===0) return <p>No hay proyectos, comienza creando uno.</p>

    return (
        <ul className='listado-proyectos'>
            { projects.length > 0 &&
                projects.map((project, index) =>(
                    <Project project={project} key={index}/>
                ))
            }
        </ul>
    )
}

export default List
