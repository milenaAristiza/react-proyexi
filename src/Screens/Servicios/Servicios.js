// import logo from './logo.svg';
import './Servicios.css';
// import {Nav} from './components/Nav'; 
// import { Nav } from '../src/components/nav/Nav';
// import Footer from '../src/components/Footer/Footer';
// import fondo from './home.jpeg';
// import img1 from './home.jpeg';
// import fondoCards from './fondo_servicios.jpg';
// import img_principal from './img_principalF.jpeg';
// import img_principal2 from './img_principal2.jpeg';
// import img_principal3 from './img_principal3.jpeg';
// import img2 from './home.jpeg';
// import img3 from './home.jpeg';

function App() {
  return (
    <div className="">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Nav></Nav> */}

      <section className='container__portada__index'>
        {/* <h2>skjdvnkhdsjv </h2> */}
      </section>

      <section className="servicios">
        <div className="container__servicios">
            <div>
                {/* <img className="img__container__servicios" src={img_principal} alt="" /> */}
                <h3>MANTENIMIENTO DE FACHADAS </h3>
                <a href="./Fachadas.html"><button className="button_ver_mas">
                        VER MÁS
                    </button></a>
            </div>
            <div>
                {/* <img className="img__container__servicios" src={img_principal2} alt="" /> */}
                <h3>REMODELACION DE ESPACIOS</h3>
                <a href="./Remodelación_comercial.html"><button className="button_ver_mas">
                        VER MÁS
                    </button></a>
            </div>
            <div>
                {/* <img className="img__container__servicios" src={img_principal3} alt="" /> */}
                <h3>CONSTRUCCIÓN DE OBRAS CIVILES</h3>
                <a href="./Obras_civiles.html"><button className="button_ver_mas">
                        VER MÁS
                    </button></a>
            </div>
        </div>
    </section>
{/* <Footer></Footer> */}
    </div>
  );
}

export default App;