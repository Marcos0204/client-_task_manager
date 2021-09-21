import React, {useState} from 'react'

const NuevoProyectos = () => {

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
        </>
    )
}

export default NuevoProyectos
