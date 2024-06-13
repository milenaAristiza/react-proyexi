
import './Styles_quienes_somos.css';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import img_text_quienes_somos from '../../assets/images/quienes_somos/img_text.jpg'
import img_11 from '../../assets/images/fachadas/11.jpeg'
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const Quienes_somos = () => {
    const [url, setUrl] = useState();
    useEffect(() => {
        setUrl(document.URL.split("/")[document.URL.split("/").length - 1]);
    }, [])
    return <div>
        <Nav str={url}></Nav>
        <section className="section2_quienes_comos">
            <div className="div1_section2_quienes_comos">
                <img src={img_text_quienes_somos} alt="" />
            </div>
            <div className="div2_section2_quienes_comos">
                <h2 className='title_quienesS'>¿POR QUÉ ELEGIRNOS?</h2>

                <p>Nuestros servicios incluyen:

                    Construcción residencial: Desde hogares acogedores hasta mansiones de lujo, hacemos de cada casa
                    un
                    verdadero hogar.

                    Construcción comercial: Potencia tu negocio con espacios funcionales y atractivos que cautivarán
                    a
                    tus clientes.

                    Remodelaciones: Renovamos y transformamos cualquier espacio para que se ajuste a tus necesidades
                    cambiantes.

                    Diseño arquitectónico: Nuestros expertos dan forma a tus ideas, creando planos precisos y
                    estéticamente impresionantes.
                </p>
                
                <a href="#footer">
                    <div className="container__button2">
                        <button>Contacto</button>
                    </div>
                </a>
            </div>
        </section>
        <section className="section1_quienes_comos">
            <div className="div1_section1_quienes_comos">
                <div className="container_text_button">
                    <h2 className='title_container2_quienesS'>¡Contáctanos ahora y descubre la diferencia!</h2>
                    <p className='text_quienesS'>Experiencia incomparable : Con años de trayectoria en el mercado, hemos construido un legado
                        de
                        éxitos y clientes satisfechos. ¡Tú podrías ser el próximo!

                        Profesionales apasionados : Nuestro equipo de expertos ama lo que hace. Cada proyecto se
                        maneja
                        con
                        la pasión y dedicación que merece, sin importar su magnitud.

                        Calidad insuperable : Utilizamos los materiales más confiables y las técnicas de
                        construcción
                        más
                        avanzadas para garantizar resultados de primera clase.

                        Diseños personalizados : Entendemos que cada cliente es único, por lo que adaptamos nuestros
                        diseños
                        a tus gustos y necesidades, ¡siempre superando expectativas!</p>
                    <a href="#footer">
                        <div className="container__button">
                            <button>Contacto</button>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
}

export default Quienes_somos;