
import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = props => {
    const stateInitial = {
        formulario: false
    }
    //Dispath para ejecutar las acciones
    const [state, disptch] = useReducer(proyectoReducer, stateInitial);

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;
