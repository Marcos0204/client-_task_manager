import React from "react";
import Sidebar from "../layout/Sidebar";
import NavBar from '../layout/NavBar';
import FormTarea from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";

const Projects = () => {
    return(
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <NavBar />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects;