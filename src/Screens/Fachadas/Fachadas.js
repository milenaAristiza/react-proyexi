import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from '../../components/nav/Nav';
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import img_3 from '../../assets/images/fachadas/3.jpeg';
import img_18 from '../../assets/images/fachadas/18.jpeg';
import img_4 from '../../assets/images/fachadas/4.jpeg';
import fondo_section2 from '../../assets/images/fachadas/fondo_section2.jpeg';
import img_8 from '../../assets/images/fachadas/8.jpeg';
import img15 from '../../assets/images/fachadas/15.jpeg'
import imgPrincipal from '../../assets/images/fachadas/imgPrincipal.jpeg'
import img_22 from '../../assets/images/fachadas/22.jpeg'
import img_23 from '../../assets/images/fachadas/23.jpeg'
import img_24 from '../../assets/images/fachadas/24.jpeg'
import img_25 from '../../assets/images/fachadas/25.jpeg'
import img_26 from '../../assets/images/fachadas/26.jpeg'
import img_27 from '../../assets/images/fachadas/27.jpeg'
import img_28 from '../../assets/images/fachadas/28.jpeg'
import img_29 from '../../assets/images/fachadas/29.jpeg'
import './Styles_fachadas.css'
import 'react-responsive-modal/styles.css';
import Servicios from '../../components/Servicios/Servicios';

function Fachadas() {
    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    }, [])
    const [args, setArgs] = useState({
        title: "Fachadas",
        text: "¡Eleva la imagen de tu edificio con nuestro servicio de Mantenimiento de Fachadas y cubiertas! Quieres que tu edificio brille con todo su esplendor? Nuestro equipo de expertos en mantenimiento de fachadas y cubiertas está aquí para hacerlo posible. Con un enfoque en la excelencia y la atención al detalle, dejaremos tus fachadas y cubiertas impecables, resaltando la belleza arquitectónica y asegurando una impresión duradera.",
        image: imgPrincipal,
        slider: [img_3, img_18, fondo_section2, img_4, img_8, img_22, img_23,img_24,img_25,img_26,img_27,img_28,img_29 ]
    });
    return (
        <div>
            <Nav str={url}></Nav>
            <Servicios args={args}></Servicios>
            <Footer></Footer>
        </div>
    );
}

export default Fachadas;