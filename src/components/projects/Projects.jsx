import React, { useContext, useEffect, useEffecte } from "react";
import Sidebar from "../layout/Sidebar";
import NavBar from '../layout/NavBar';
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";
import AuthContext from "../../context/authentication/authContext";

const Projects = () => {

    //extraer la informacion
    const authContext = useContext(AuthContext);
    const { authenticatedUser } = authContext;
    useEffect(()=>{
        authenticatedUser()
    },[])
    return(
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <NavBar />
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects;