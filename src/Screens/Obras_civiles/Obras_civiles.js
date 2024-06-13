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
import img1 from '../../assets/images/obras_civiles/1.png'
import img2 from '../../assets/images/obras_civiles/2.png'
import img3 from '../../assets/images/obras_civiles/3.png'
import img4 from '../../assets/images/obras_civiles/4.png'
import img5 from '../../assets/images/obras_civiles/5.png'
import img6 from '../../assets/images/obras_civiles/6.png'
import img7 from '../../assets/images/obras_civiles/7.png'
import img8 from '../../assets/images/obras_civiles/8.png'
import img9 from '../../assets/images/obras_civiles/9.png'
import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
// import img10 from '../../assets/images/obras_civiles/10.png'
import img11 from '../../assets/images/remodelacion_residencial/11.png'
import './Obras_civiles.css'
import 'react-responsive-modal/styles.css';
import Servicios from '../../components/Servicios/Servicios';

function Obras_civiles() {
    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    }, [])
    const [args, setArgs] = useState({
        title: "Obras civiles",
        text: "¡Descubre la magia de construir tus sueños! ¿Quieres convertir tus ideas en realidad? En nuestro servicio de construcción, hacemos posible lo imposible. Deja que nuestros expertos arquitectos y constructores den vida a tus proyectos, con un toque de innovación y calidad que te sorprenderá. Edificios - Bodegas - Casas y mas.",
        image: img10,
        slider: [img_3, img_18, fondo_section2, img_4, img_8]
    });
    return (
        <div>
            <Nav str={url}></Nav>
            <Servicios args={args}></Servicios>
            <Footer></Footer>
        </div>
    );
}

export default Obras_civiles;