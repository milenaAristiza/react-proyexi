import Nav from '../../components/nav/Nav';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import slider1 from '../../assets/images/imagenes carrusel/1.png'
import slider2 from '../../assets/images/imagenes carrusel/2.png'
import slider3 from '../../assets/images/imagenes carrusel/3.png'
import slider4 from '../../assets/images/imagenes carrusel/4.png'
import slider5 from '../../assets/images/imagenes carrusel/5.png'
import slider6 from '../../assets/images/imagenes carrusel/6.png'
import slider7 from '../../assets/images/imagenes carrusel/7.png'
import slider8 from '../../assets/images/imagenes carrusel/8.png'
import slider9 from '../../assets/images/imagenes carrusel/9.png'
import slider10 from '../../assets/images/imagenes carrusel/10.png'
import slider11 from '../../assets/images/imagenes carrusel/11.png'
import slider12 from '../../assets/images/imagenes carrusel/12.png'
import slider13 from '../../assets/images/imagenes carrusel/13.png'
import slider14 from '../../assets/images/imagenes carrusel/14.png'
import slider15 from '../../assets/images/imagenes carrusel/15.jpeg'
import slider16 from '../../assets/images/imagenes carrusel/16.png'
import slider17 from '../../assets/images/imagenes carrusel/17.png'
import slider18 from '../../assets/images/imagenes carrusel/18.png'
import slider19 from '../../assets/images/imagenes carrusel/19.png'
import slider20 from '../../assets/images/imagenes carrusel/20.png'
import Slider from '../../components/Slider/Slider'
import './Styles_proyectos.css'

function Proyectos() {
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
  }, [])
  const [argsSlider, setArgsSlider] = useState({
    slider: [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12, slider13, slider14, slider15, slider16, slider17, slider18, slider19, slider20]
  });
  return (
    <div>
      <Nav str={url}></Nav>
      <section className="content_proyectos">
        <div className="container_text_proyectos">
          <h2>Te mostramos algunos de nuestros proyectos</h2>
          <p>
            PROYEXI DISEÑO Y CONSTRUCCIÓN SAS está listo para ayudarte con todas las
            necesidades de su proyecto.Estamos a la vanguardia de la industria, ya
            que siempre ofrecemos una amplia variedad de servicios profesionales a
            clientes cercanos y lejanos.Garantizamos la fiabilidad y calidad de nuestro
            trabajo. en las imágenes te presentamos algunos de nuestros proyectos. </p>
          <div className="container_button_portafolio">
            <a href="./img/Portafolio PROYEXI.pdf" download="Portafolio"
              className="button_portafolio"><button>portafolio</button> </a>
          </div>
        </div>

        <Slider argsSlider={argsSlider}></Slider>

        {/* <div class="container_slider_proyectos">

          <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="img_cards" src={slider1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider9} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider10} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider11} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider12} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider13} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider14} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider15} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider16} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider17} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider18} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="img_cards" src={slider19} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="img_cards" src={slider20} alt="" />
            </SwiperSlide>
          </Swiper>
        </div> */}
      </section>
      <Footer></Footer>
    </div>


  );
}

export default Proyectos;