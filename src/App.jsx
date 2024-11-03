import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './componentes/nabvar/Nadvar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroSection from './componentes/HeroSection/HeroSection';
import Mostrador from './componentes/MostradorImg/Mostrador';
import Carrusel from './componentes/Carrusel/Carrusel';
import Footer from './componentes/Footer/Footer';
import CarruselInfinito from './componentes/CarruselInfinito/CarruselInfinito';
import Trabajadores from './componentes/CarruselInfinito/CarruselInfinito';
import HowWeDoIt from './componentes/Preguntas/Preguntas';
import Carru from './componentes/Carru/Carru';
import MapSection from './componentes/MapSection/MapSection';
function App() {


  return (
    <div >
      <Navbar />
      <HeroSection />
      
        <Mostrador />
        <Carrusel />
        <Trabajadores />
        <HowWeDoIt />
        <Carru/>
        <MapSection/>
      <Footer />

    </div>
  )
}

export default App
