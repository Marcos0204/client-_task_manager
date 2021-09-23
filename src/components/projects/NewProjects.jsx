import React, {useContext, useState, } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';


const NewProjects = () => {

    //obtener el state del formaulario
    const proyectosContext = useContext(ProjectContext);
    const { formulario, 
            mostarFormulario,
            agregarProyecto,
            errorformulario,
            mostrarError,
            } = proyectosContext;

   
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
            return mostrarError()
        }

        //adding in the state
        agregarProyecto(project)

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
                onClick={()=> mostarFormulario(formulario)}
            >
                Nuevo Proyecto
            </button>
            {formulario ? (
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
            {errorformulario ?(
                <p className="mensaje error">El nombre de proyecto es obligatorio</p>
            ) : null
        }
        </>
    )
}

export default NewProjects
