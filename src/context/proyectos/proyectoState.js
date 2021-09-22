
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMAULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO
    } from "../../types";



const ProyectoState = props => {

    const proyectos = [
        {id:1, nombre:'intranet'},
        {id:2, nombre:'tienda virtual'},
        {id:3, nombre:'Diseño de Sitio web'}
    ]
    

    const stateInitial = {
        formulario: false,
        proyectos : [],
        errorformulario: false
    }
    //Dispath para ejecutar las acciones
    const [state, disptch] = useReducer(proyectoReducer, stateInitial);

    //serie de funciones para el CRUD
    const mostarFormulario = (value) =>{
        disptch({
            type:FORMAULARIO_PROYECTO,
            payload:value
        })
    }

    //obtener proyectos
    const obtenerProyectos = () => {
        disptch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //AGREGAR PROYECTOS
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4()

        disptch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //VALIDAR FORMULARIO
    const mostrarError = () =>{
        disptch({
            type: VALIDAR_FORMULARIO
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                mostarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
