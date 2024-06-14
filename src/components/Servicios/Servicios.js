import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Servicios(args) {
    const [params, setParams] = useState(args.args);
    return (
        <div>
            <section className="fachadas">
                <div className="div1__fachadas">
                    <div className="container__text">
                        <h2 className='title__fachadas'>{params.title}</h2>
                        <p className='text__principal__fachadas'>
                            {params.text}
                        </p>
                        <p>¡Echa un vistazo a nuestro portafolio!</p>

                        <div className="container_button_portafolio">
                            <a href="./img/Portafolio PROYEXI.pdf" download="Portafolio" className="button_portafolio"><button>
                                <p>Portafolio</p>
                            </button> </a>
                        </div>


                    </div>
                    <div className='image_principal_facahadas'>
                        <img src={params.image}></img>
                    </div>
                </div>
            </section>
            <section class="section2__fachadas">
                <div class="div1__section2__fachadas">
                    <div class="container__text__div1__section2__fachadas">
                        <h3>Aquí tienes una ventana a nuestro trabajo</h3>

                        {/* <div class="red-social__services">
                            <Link to="https://www.facebook.com/proyexidisenoycontruccion/?ref=pages_you_manage"
                                target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to="https://www.instagram.com/proyexi_diseno_y_construccion?utm_source=qr&igsh=NGhoYTg1ZDkzZXp6"
                                target="_blank" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to="https://api.whatsapp.com/send?phone=+573125883290&text=Hola,%20deseo%20una%20cotizacion."
                                target="_blank" className="fa fa-whatsapp"><FontAwesomeIcon icon={faYoutube} /></Link>
                            <Link to="https://www.youtube.com/channel/UCwwO_LuUHTsqp_L5Kd1NdaQ" target="_blank" className="fa fa-youtube"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                        </div> */}
                    </div>
                    <div class="container__slider__div1__section2__fachadas">
                        <div class="container_slider_fachadas">
                            <Swiper
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {params.slider.map((img, i) => {
                                    return <SwiperSlide key={i}><img className="img_cards" src={img} alt="" /></SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Servicios;