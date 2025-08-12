import { useState, useEffect } from 'react';
import './App.css';
import Imagen1 from './assets/1.png';
import Imagen2 from './assets/2.png';
import Imagen3 from './assets/3.png';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculamos la posición de cada imagen basada en el scroll
  const image1Offset = Math.max(0, (500 - scrollY) / 500);
  const image2Offset = Math.max(0, (800 - scrollY) / 800);
  const image3Offset = Math.max(0, (1100 - scrollY) / 1100);

  return (
    <div className="app-container">
      {/* Sección inicial */}
      <div className="intro-section">
        <h1>Desplázate hacia abajo</h1>
      </div>

      {/* Contenedor de imágenes */}
      <div className="scroll-container">
        {/* Imagen 1 - Primera en aparecer */}
        <div
          className="image-container"
          style={{
            transform: `translateY(${image1Offset * 100}vh)`,
            zIndex: 3
          }}
        >
          <img src={Imagen1} alt="Imagen 1" className="sliding-image" />
        </div>

        {/* Imagen 2 */}
        <div
          className="image-container"
          style={{
            transform: `translateY(${image2Offset * 100}vh)`,
            zIndex: 2,
            transitionDelay: '0.2s'
          }}
        >
          <img src={Imagen2} alt="Imagen 2" className="sliding-image" />
        </div>

        {/* Imagen 3 */}
        <div
          className="image-container"
          style={{
            transform: `translateY(${image3Offset * 100}vh)`,
            zIndex: 1,
            transitionDelay: '0.4s'
          }}
        >
          <img src={Imagen3} alt="Imagen 3" className="sliding-image" />
        </div>
      </div>

      {/* Espacio final */}
      <div className="end-spacer" style={{ height: '150vh' }}></div>
    </div>
  );
}

export default App;
