import React, { useReducer } from "react";
import alertReducer from './alertReducer';
import alertContext from "./alertContext";
import { SHOW_ALERT, HILE_ALERT } from '../../types';

const AlertState = props =>{
    const InitialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(alertReducer, InitialState);

    //show alert
    const showAlert = (msg, category) =>{
        dispatch({
            type:SHOW_ALERT,
            payload:{
                msg,
                category
            }
        });

        setTimeout(() => {
            dispatch({
                type: HILE_ALERT
            })
        }, 5000);
    }


    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                showAlert
                

            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;