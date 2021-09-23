import React from 'react'

const NavBar = () => {
    return (
        <header className='app-header'>
            <p className="nombre-usuario">Hola <span>Marcos Bastidas</span> </p>
            <nav className="nav-principal">
                <a href="#!">cerrar sesion</a>
            </nav>
        </header>
    )
}

export default NavBar
