// import logo from './logo.svg';
import './Styles_index.css';
// import {Nav} from './components/Nav';
// import { Nav } from '../src/components/nav/Nav';
// import Footer from '../src/components/Footer/Footer';
import fondo from './home.jpeg';
import img1 from './home.jpeg';
import fondoCards from './fondo_servicios.jpg';
import img_principal from './img_principalF.jpeg';
import img_principal2 from './img_principal2.jpeg';
import img_principal3 from './img_principal3.jpeg';
import remodelacionR from '../../assets/images/remodelacion_residencial/11.png'
import obras from '../../assets/images/obras_civiles/5.png'
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import Button_whatsApp from '../../components/Button_whatsApp/Button_whatsApp';
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Servicios from './Screens/Servicios/Servicios'
import img2 from './home.jpeg';
import img3 from './home.jpeg';

function Index() {
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    console.log(url);
  }, [])
  return (
    <div className="">
      <Nav></Nav>
      <section className="container_portada_index">
        <div className="portada">
          <div className="curva__azul">
            <div className="content__curva__azul">
              <h1 className="title">Proyexi diseño y construcción s.a.s</h1>
              <p className="text">Todo lo que necesitas para ejecutar tu proyecto de
                construcción en un solo lugar, y lo encuentras aquí, llámanos
                para asesorarte sin costo. Haz clic en el botón de abajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios1">
        <div className="container__servicios">
          <div>
            <img className="img_cards" src={fondoCards} alt="" />
            <h3>MANTENIMIENTO DE FACHADAS </h3>
            <Link to=''>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
          <div>
            <img className="img_cards" src={remodelacionR} alt="" />
            <h3>REMODELACION DE ESPACIOS</h3>
            <Link to=''>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
          <div>
            <img className="img_cards" src={obras} alt="" />
            <h3>CONSTRUCCIÓN DE OBRAS CIVILES</h3>
            <Link to=''>
              <button className="button_ver_mas">
                VER MÁS
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Index;