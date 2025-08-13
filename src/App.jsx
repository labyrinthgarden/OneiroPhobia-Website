import { useState, useEffect } from 'react';
import './App.css';
import Imagen1 from './assets/1.png';
import ArbolIzquierdo from './assets/arbol-izquierdo.png';
import ArbolDerecho from './assets/arbol-derecho.png';
import Imagen3 from './assets/3.png';
import Imagen4 from './assets/4.png';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showLayer2 = scrollY > 50;
  const showLayer3 = scrollY > 300;
  const showLayer4 = scrollY > 600;
  const showNavbar = scrollY > 999;

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
            transition: 'transform 0.8s ease-out',
            left: 0
          }}
        />
        <img
          src={ArbolDerecho}
          alt="Árbol derecho"
          className="arbol-derecho"
          style={{
            transform: showLayer2 ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.8s ease-out',
            right: 0
          }}
        />
      </div>

      {/* Capa calaveras - fade in */}
      <div
        className="image-container layer3"
        style={{
          opacity: showLayer3 ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <img src={Imagen3} alt="Imagen 3" />
      </div>

      {/* Capa titulo - fade in */}
      <div
        className="image-container layer4"
        style={{
          opacity: showLayer4? 1 : 0,
          transition: 'opacity 1.5s ease-in-out'
        }}
      >
        <img src={Imagen4} alt="Imagen 4" />
      </div>

      {/* Barra de navegación - aparece después de la animación */}
      <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
        <a href="#home">Homepage</a>
        <a href="#downloads">Downloads</a>
        {/* Agrega más opciones si necesitas */}
      </nav>

      {/* Espacio para scroll */}
      <div className="scroll-spacer" style={{ height: '1000px' }}></div>
    </div>
  );
}

export default App;
