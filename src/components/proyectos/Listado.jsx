import React from 'react';
import Proyecto from './proyecto';

const Listado = () => {
    const proyectos = [
        {nombre:'intranet'},
        {nombre:'tienda virtual'},
        {nombre:'Diseño de Sitio web'}
    ]
    return (
        <ul className='listado-proyectos'>
            {
                proyectos.map((proyecto, index) =>(
                  <Proyecto proyecto={proyecto} key={index}/>
                ))
            }
        </ul>
    )
}

export default Listado
