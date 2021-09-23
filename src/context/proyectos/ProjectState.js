
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import { PROJECT_FORM,
        GET_PROJECTS,
        ADD_PROJECT,
        VALIDAR_FORMULARY,
        ACTUAL_PROJECT,
        DELETE_PROJECT
    } from "../../types";



const ProjectState = props => {

    const proyectos = [
        {id:1, name:'intranet'},
        {id:2, name:'tienda virtual'},
        {id:3, name:'Diseño de Sitio web'}
    ]
    

    const stateInitial = {
        formulario: false,
        proyectos : [],
        errorformulario: false,
        proyecto: null
    }
    //Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(ProjectReducer, stateInitial);

    //serie de funciones para el CRUD
    const mostarFormulario = (value) =>{
        dispatch({
            type:PROJECT_FORM,
            payload:value
        })
    }

    //obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: proyectos
        })
    }

    //AGREGAR PROYECTOS
    const agregarProyecto = project =>{
        project.id = uuidv4()

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //VALIDAR FORMULARIO
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARY
        })
    }

    ///SELECION EL PROYECTO AL QUE EL USUARI LE DA CLICK
    const proyectoActual = (proyectoID) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: proyectoID
        })
    }

    ///ELIMINAR PROYECTO 
    const iliminaProyecto = proyectoID =>{
        dispatch({
            type: DELETE_PROJECT,
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

export default ProjectState;
