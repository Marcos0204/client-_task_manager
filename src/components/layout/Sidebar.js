import React from 'react';
import NuevoProyectos from '../proyectos/NuevoProyectos';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN <span>tasks</span> </h1>
            <NuevoProyectos/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
            </div>
        </aside>
    )
}

export default Sidebar