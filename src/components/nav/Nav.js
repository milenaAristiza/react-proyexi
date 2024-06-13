import React, { useEffect, useState } from 'react';
import './Nav.css';
import logoBlanco from './LOGOBLANCO.png';
import menuHamburguesa from './menu_hamburguesa.png';
import flechaAbajo from './flechaAbajo.png';
import proyectos from '../../Screens/Proyectos/Proyectos';
import { Link } from 'react-router-dom';
export const Nav = (str) => {
    const [location, setLocation] = useState("");
    useEffect(() => {
        setLocation(str.str)
    }, [str])
    console.log(location);
    return <div>
        <Link to='' className="btn-wsp" target="_blank">
            <i className="fa fa-whatsapp icono"></i>
        </Link>
        <header>
            <img className="logo" src={logoBlanco} alt="" />
            <input type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar"><img className='img_menu_h' src={menuHamburguesa} alt="" /></label>
            <nav className="navbar">
                <ul>
                    <li className={typeof location === "undefined" ? "indicator" : ""}><Link to='/'>Inicio</Link></li>
                    <li className={location === "proyectos" ? "indicator" : ""}><Link to='/proyectos'>Proyectos</Link></li>
                    <li className={location === "fachadas" || location === "remodelacion_comercial" || location === "remodelacion_residencial" || location === "obras_civiles" ? "indicator" : ""}><Link to='' className="services">Servicios <img className="flechaAbajo" src={flechaAbajo} alt="" /></Link>
                        <ul>
                            <li><Link to='/fachadas'>Fachadas</Link></li>
                            <li><Link to='/remodelacion_comercial'>Remodelación comercial</Link></li>
                            <li><Link to='/remodelacion_residencial'>Remodelación residencial</Link></li>
                            <li><Link to='/obras_civiles'>Obras civiles</Link></li>
                        </ul>
                    </li>
                    <li className={location === "quienes_somos" ? "indicator" : ""}><Link to='/quienes_somos'>Quienes somos</Link></li>
                    <li><button className="button_nav"><Link to="#footer" className="button">Contacto</Link></button></li>
                </ul>
            </nav>
        </header>
    </div>
}

export default Nav;