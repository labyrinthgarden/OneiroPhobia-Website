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
  const showLayer3 = scrollY > 1000;
  const showLayer4 = scrollY > 1700;
  const showNavbar = scrollY > 3000;

  return (
    <div className="app-container">
      <div className="animation-container">
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
            transition: 'opacity 2s ease-in-out'
          }}
        >
          <img src={Imagen3} alt="Imagen 3" />
        </div>

        {/* Capa titulo - fade in */}
        <div
          className="image-container layer4"
          style={{
            opacity: showLayer4? 1 : 0,
            transition: 'opacity 3s ease-in-out'
          }}
        >
          <img src={Imagen4} alt="Imagen 4" />
        </div>

        {/* Barra de navegación - aparece después de la animación */}
        <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
          <a href="#home">Homepage</a>
          <a href="#downloads">Downloads</a>
        </nav>

        {/* Espacio para scroll */}
        <div className="scroll-spacer" style={{ height: '4000px' }}></div>
      </div>

      <div className="main-content">
        <h2>OneiroPhobia Project</h2>
        <p>

          Lorem ipsum dolor sit amet. Et dolores neque et praesentium optio sed possimus molestiae et omnis facere. Et natus mollitia non dignissimos atque id dolorem internos. Non tenetur eaque qui blanditiis laborum qui delectus adipisci non sint dicta. Est pariatur praesentium et illum officia et eius porro.

          Nam possimus quasi qui sunt perspiciatis et nihil atque est repellat similique. Et velit voluptatem et tempora magni sed nobis voluptas qui placeat iure. Ea eligendi tenetur aut iste quia et quia sequi. Vel deserunt numquam ut consequatur temporibus quo molestiae odit in consequatur beatae qui obcaecati ipsam est autem dolore.

          Ut possimus quisquam hic eligendi eaque qui voluptate omnis? Sit quas sapiente ea perferendis officia est adipisci quos ab voluptas deserunt sit quia beatae.</p>
        <div style={{ height: '49vh' }}></div> {/* Espacio adicional de ejemplo */}
      </div>
    </div>
  );
}

export default App;
