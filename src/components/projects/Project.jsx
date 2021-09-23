import React, {useContext} from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';
import TaskContext from '../../context/task/taskContext';

const Project = ({project}) => {
    const proyectosContext = useContext(ProjectContext);
    const taskContext = useContext(TaskContext);

    const { actualProject } = proyectosContext;
    const {getTask} = taskContext;
    
    const selectProject = id =>{
        actualProject(id);
        getTask(id)
    }

    return (
        <li>
            <button
                className='btn btn-blank'
                onClick={()=> selectProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    )
}

export default Project
