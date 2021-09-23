import React from 'react';
import NewProjects from '../projects/NewProjects';
import List from '../projects/List';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN <span>tasks</span> </h1>
            <NewProjects/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <List/>
            </div>
        </aside>
    )
}

export default Sidebar
