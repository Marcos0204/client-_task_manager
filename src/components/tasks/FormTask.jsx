import React, { useContext } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';

const FormTask = () => {
    const proyectosContext = useContext(ProjectContext);
    const { project } = proyectosContext;
    if(!project) return null
    const [proyectoActual] = project;

    const hanledSubmit = (e)=>{
        e.preventDefault();

        ///validate

        //add task to state

        // reset form
    }
    return (
        <div className='formulario'>
            <form
                onSubmit={hanledSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre tarea'
                        name='nombre'
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className='btn btn-primario btn-block btn-submit'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask
