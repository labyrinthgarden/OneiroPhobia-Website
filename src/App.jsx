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

  // Calculamos qué imágenes deben estar visibles
  const showImage2 = scrollY > 400;
  const showImage3 = scrollY > 800;

  return (
    <div className="app-container">
      {/* Contenedor de imágenes (ahora es lo primero que se ve) */}
      <div className="scroll-container">
        {/* Imagen 1 - Base */}
        <div
          className="image-container"
          style={{
            transform:'translateY(0)',
            zIndex: 1
          }}
        >
          <img src={Imagen1} alt="Imagen 1" className="sliding-image" />
        </div>

        {/* Imagen 2 - Media */}
        <div
          className="image-container"
          style={{
            transform: showImage2 ? 'translateY(0)' : 'translateY(100vh)',
            zIndex: 2,
            transitionDelay: '0s'
          }}
        >
          <img src={Imagen2} alt="Imagen 2" className="sliding-image" />
        </div>

        {/* Imagen 3 - Superior */}
        <div
          className="image-container"
          style={{
            transform: showImage3 ? 'translateY(0)' : 'translateY(100vh)',
            zIndex: 3,
            transitionDelay: '0s'
          }}
        >
          <img src={Imagen3} alt="Imagen 3" className="sliding-image" />
        </div>
      </div>

      {/* Espacio para hacer scroll */}
      <div className="end-spacer" style={{ height: '200vh' }}></div>
    </div>
  );
}

export default App;
