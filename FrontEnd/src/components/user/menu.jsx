import React from 'react';
import '../../style/menu.css';
import { useDash } from '../../context/dashContext';

const Menu = () => {

    const {menuOption, setMenuOption } = useDash();

    const botones = [{titulo: 'Home', icono: 'bi bi-house'}, 
        {titulo: 'Capitulos', icono: 'bi bi-file-earmark-medical'},
        {titulo: 'Orders', icono: 'bi bi-file-earmark-medical'}, 
        {titulo: 'Products', icono: 'bi bi-file-earmark-medical'}, 
        {titulo: 'Customers', icono: 'bi bi-file-earmark-medical'}];

    const activate =(boton) =>  {
        return menuOption === boton.titulo ? 'nav-link active' : 'nav-link';
    }


    return (
        <>
            <div className="menu d-flex flex-column flex-shrink-0 p-3">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        <img src="src/assets/img/KonRules.png" alt="" style={{ width: '100%' }} />
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {botones.map((boton, index) => (
                            <li className="nav-item" key={index}>
                                <button onClick={() => {
                                    setMenuOption(boton.titulo);   
                                }
                                } className={activate(boton)} aria-current="page" style={{color:'white'}}>
                                    <i className={boton.icono}> </i>
                                    {boton.titulo}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
        </>
    )


}

export default Menu;
