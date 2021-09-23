import React, { useContext } from 'react';
import ProjectContext from '../../context/proyectos/ProjectContext';

const FormTarea = () => {
    const proyectosContext = useContext(ProjectContext);
    const { proyecto } = proyectosContext;
    if(!proyecto) return null
    const [proyectoActual] = proyecto
    return (
        <div className='formulario'>
            <form>
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

export default FormTarea
