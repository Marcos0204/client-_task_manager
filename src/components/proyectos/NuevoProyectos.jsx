import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyectos = () => {
    //obtener el state del formaulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario } = proyectosContext;

    //state para proyecto
    const [ proyectos, guardarProyectos ] = useState({
        nombre:''
    })
    const {nombre} = proyectos;

    const onChangeProyecto = (e) =>{

        guardarProyectos({
            ...proyectos,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyetos=(e)=>{
        e.preventDefaul()
    }
    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >
                Nuevo Proyecto
            </button>
            {formulario ? (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyetos}
                >
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre del Proyectos'
                        name='nombre'
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
                    <input
                        type="submit"
                        className='btn btn-block btn-primario'
                    />

                </form>
            ) : null
        }
        </>
    )
}

export default NuevoProyectos
