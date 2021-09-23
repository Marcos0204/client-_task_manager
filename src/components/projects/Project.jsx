import React, {useContext} from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';

const Project = ({project}) => {
    const proyectosContext = useContext(ProjectContext);
    const { proyectoActual } = proyectosContext;
    
    return (
        <li>
            <button
                className='btn btn-blank'
                onClick={()=> proyectoActual(project.id)}
            >
                {project.name}
            </button>
        </li>
    )
}

export default Project
