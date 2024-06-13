import React from 'react';
import LOGO_PROYEXI_TRANSPARENTE from './LOGO_PROYEXI_TRANSPARENTE.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import './Styles_footer.css';

export const Footer = () => {
    return <footer className="pie-pagina" id="footer">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <Link to="#">
                        <img src={LOGO_PROYEXI_TRANSPARENTE} alt="" />
                    </Link>
                </figure>
            </div>
            <div className="box">
                <h2>Telefonos</h2>
                <p>3052532537</p>
                <p>3125883290</p>
                <p>6615971</p>

                <h2>Correo</h2>
                <p>administraciondc@proyexidisenoyconstruccion.com</p>
                <p>Proyexidc@gmail.com</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <Link to="https://www.facebook.com/proyexidisenoycontruccion/?ref=pages_you_manage"
                        target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to="https://www.instagram.com/proyexi_diseno_y_construccion?utm_source=qr&igsh=NGhoYTg1ZDkzZXp6"
                        target="_blank" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link to="https://api.whatsapp.com/send?phone=+573125883290&text=Hola,%20deseo%20una%20cotizacion."
                        target="_blank" className="fa fa-whatsapp"><FontAwesomeIcon icon={faYoutube} /></Link>
                    <Link to="https://www.youtube.com/channel/UCwwO_LuUHTsqp_L5Kd1NdaQ" target="_blank" className="fa fa-youtube"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                    <h2>Dirección</h2>
                    <p>Dg 67 B #28-21 Candelaria la nueva
                        ciudad Bogotá</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;