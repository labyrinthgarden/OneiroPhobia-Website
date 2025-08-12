import { useState, useEffect } from 'react';
import './App.css';
import Imagen1 from './assets/1.png';
import ArbolIzquierdo from './assets/arbol-izquierdo.png';
import ArbolDerecho from './assets/arbol-derecho.png';
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

  // Ajusta estos valores según necesites
  const showLayer2 = scrollY > 300;
  const showLayer3 = scrollY > 800;

  return (
    <div className="app-container">
      {/* Capa base - siempre visible */}
      <div className="image-container layer1">
        <img src={Imagen1} alt="Imagen 1" />
      </div>

      {/* Árboles - animación lateral */}
      <div className="image-container layer2">
        <img
          src={ArbolIzquierdo}
          alt="Árbol izquierdo"
          className="arbol-izquierdo"
          style={{
            transform: showLayer2 ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 1s ease-out',
            left: 0
          }}
        />
        <img
          src={ArbolDerecho}
          alt="Árbol derecho"
          className="arbol-derecho"
          style={{
            transform: showLayer2 ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 1s ease-out',
            right: 0
          }}
        />
      </div>

      {/* Capa superior - fade in */}
      <div
        className="image-container layer3"
        style={{
          opacity: showLayer3 ? 1 : 0,
          transition: 'opacity 1.2s ease-in-out'
        }}
      >
        <img src={Imagen3} alt="Imagen 3" />
      </div>

      {/* Espacio para scroll */}
      <div className="scroll-spacer" style={{ height: '1000px' }}></div>
    </div>
  );
}

export default App;
