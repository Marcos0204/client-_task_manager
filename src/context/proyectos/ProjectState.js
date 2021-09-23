
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

    const projects = [
        {id:1, name:'intranet'},
        {id:2, name:'tienda virtual'},
        {id:3, name:'Diseño de Sitio web'}
    ]
    

    const stateInitial = {
        formNewProject: false,
        projects : [],
        errorForm: false,
        project: null
    }
    //Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(ProjectReducer, stateInitial);

    //serie de funciones para el CRUD
    const show_form = (value) =>{
        dispatch({
            type:PROJECT_FORM,
            payload:value
        })
    }

    //obtener proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //AGREGAR PROYECTOS
    const addProject = project =>{
        project.id = uuidv4()

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //VALIDAR FORMULARIO
    const showError = () =>{
        dispatch({
            type: VALIDAR_FORMULARY
        })
    }

    ///SELECION EL PROYECTO AL QUE EL USUARI LE DA CLICK
    const actualProject = (proyectoID) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: proyectoID
        })
    }

    ///ELIMINAR PROYECTO 
    const deleteProject = proyectoID =>{
        dispatch({
            type: DELETE_PROJECT,
            payload: proyectoID
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                projects: state.projects,
                formNewProject: state.formNewProject,
                errorForm: state.errorForm,
                project: state.project,
                show_form,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProjectState;
