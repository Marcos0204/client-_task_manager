import React, {useContext, useState, } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyectos = () => {

    //obtener el state del formaulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, 
            mostarFormulario,
            agregarProyecto,
            errorformulario,
            mostrarError
            } = proyectosContext;

   
    //state para proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre:''
    })
    const {nombre} = proyecto;

    const onChangeProyecto = (e) =>{

        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProyetos=(e)=>{
        e.preventDefault()

        //validar el state
        if(nombre===''){
            return mostrarError()
        }

        //adding in the state
        agregarProyecto(proyecto)

        //Reiniciar form
        guardarProyecto({
            nombre:''
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
                    onSubmit={onSubmitProyetos}
                >
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre del Proyect'
                        name='nombre'
                        value={nombre}
                        onChange={onChangeProyecto}
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

export default NuevoProyectos
