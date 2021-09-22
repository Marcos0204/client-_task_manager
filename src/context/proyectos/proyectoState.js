
import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { FORMAULARIO_PROYECTO } from "../../types";

const ProyectoState = props => {
    const stateInitial = {
        formulario: false,
        proyectos : [
            {id:1, nombre:'intranet'},
            {id:2, nombre:'tienda virtual'},
            {id:3, nombre:'Diseño de Sitio web'},
        ]
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

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
