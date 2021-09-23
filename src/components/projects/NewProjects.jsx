import React, {useContext, useState, } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';


const NewProjects = () => {

    //obtener el state del formaulario
    const projectContext = useContext(ProjectContext);
    const { formNewProject, 
            show_form,
            addProject,
            errorForm,
            showError,
            } = projectContext;

   
    //state para proyecto
    const [ project, setProject ] = useState({
        name:''
    })
    const {name} = project;

    const onChangeProject = (e) =>{

        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject=(e)=>{
        e.preventDefault()

        //validar el state
        if(name ===''){
            return showError()
        }

        //adding in the state
        addProject(project)

        //Reiniciar form
        setProject({
            name:''
        })
        

    }
    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={()=> show_form(formNewProject)}
            >
                Nuevo Proyecto
            </button>
            {formNewProject ? (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProject}
                >
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre del Proyect'
                        name='name'
                        value={name}
                        onChange={onChangeProject}
                    />
                    <input
                        type="submit"
                        className='btn btn-block btn-primario'
                    />

                </form>
            ) : null}
            {errorForm ?(
                <p className="mensaje error">El nombre de proyecto es obligatorio</p>
            ) : null
        }
        </>
    )
}

export default NewProjects
