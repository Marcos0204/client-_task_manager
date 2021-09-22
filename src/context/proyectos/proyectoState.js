
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMAULARIO_PROYECTO,
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELINAR_PROYECTO
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
        errorformulario: false,
        proyecto: null
    }
    //Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, stateInitial);

    //serie de funciones para el CRUD
    const mostarFormulario = (value) =>{
        dispatch({
            type:FORMAULARIO_PROYECTO,
            payload:value
        })
    }

    //obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //AGREGAR PROYECTOS
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4()

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //VALIDAR FORMULARIO
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    ///SELECION EL PROYECTO AL QUE EL USUARI LE DA CLICK
    const proyectoActual = (proyectoID) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoID
        })
    }

    ///ELIMINAR PROYECTO 
    const iliminaProyecto = proyectoID =>{
        dispatch({
            type: ELINAR_PROYECTO,
            payload: proyectoID
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                iliminaProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
