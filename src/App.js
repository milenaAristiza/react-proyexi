import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Screens/index/index";
// import Servicios from "./Screens/Servicios/Servicios";
import Proyectos from './Screens/Proyectos/Proyectos';
import Fachadas from './Screens/Fachadas/Fachadas';
import Quienes_somos from './Screens/Quienes_somos/Quienes_somos';
import Remodelacion_comercial from "./Screens/Remodelacion_comercial/Remodelacion_comercial";
import Remodelacion_residencial from "./Screens/Remodelacion_residencial/Remodelacion_residencial";
import Obras_civiles from "./Screens/Obras_civiles/Obras_civiles";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/fachadas" element={<Fachadas />} />
          <Route path="/quienes_somos" element={<Quienes_somos />} />
          <Route path="/remodelacion_comercial" element={<Remodelacion_comercial />} />
          <Route path="/remodelacion_residencial" element={<Remodelacion_residencial />} />
          <Route path="/obras_civiles" element={<Obras_civiles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
