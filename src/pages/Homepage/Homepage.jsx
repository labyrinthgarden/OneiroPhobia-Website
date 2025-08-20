import { useState, useEffect } from 'react';
import './Homepage.css';
import Imagen1 from '../../assets/images/layers/Layer1.PNG';
import ArbolIzquierdo from '../../assets/images/layers/Layer2-1.PNG';
import ArbolDerecho from '../../assets/images/layers/Layer2-2.PNG';
import Imagen3 from '../../assets/images/layers/Layer3.PNG';
import Imagen4 from '../../assets/images/layers/Layer4.PNG';
import logoImg from '../../assets/images/icons/logo.PNG';
import godotImg from '../../assets/images/icons/godot.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Homepage() {
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

  return (
    <div className="homepage-container">
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

        {/* Espacio para scroll */}
        <div className="scroll-spacer" style={{ height: '4000px' }}></div>
      </div>

      <div className="main-content">
        <h2 className="title">Oneirophobia</h2>
        <p className='description'>
          Oneirophobia es un proyecto desarrollado con godot engine
          que busca ofrecer una calidad visual, argumentativa y tener un propuesta interesante de
          jugabilidad.
          <br /><br />
          En el equipo de Oneirophobia tenemos la intencion de crear un proyecto interesante, que llegue a satisfacer nuestras
          expectativas y objetivos.
          <br /><br />
          Al jugar, deberás enfrentarte a las manifestaciones de lo mas profundo de la conciencia, las precupaciones e impedimentos
         y desentrañar la complejidad de los sueños al enfrentar una realidad despiadada. Pero ten cuidado: cuanto más
          profundices, más te perseguirá la misma pregunta… ¿y si despertar es solo el principio de la pesadilla?
          <br /><br />
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
          <a className="github-link" href="https://github.com/labyrinthgarden/Oneirophobia-Showcase" target="_blank" rel="noopener noreferrer">
            https://github.com/labyrinthgarden/Oneirophobia-Showcase
          </a>
          <br /><br />
        </p>
        <div style={{ height: '7vh' }}></div>
        <div className="logos-container">
          <div className="logos-wrapper">
            <img src={logoImg} alt="logo image" />
          </div>
          <div className="logos-wrapper">
            <img src={godotImg} alt="godot image" />
          </div>
        </div>
        <span className="team">Equipo:</span>
        <span className="team"><FontAwesomeIcon icon={faGithub} className="github-icon" />@labyrinthgarden</span>
        <span className="team"><FontAwesomeIcon icon={faGithub} className="github-icon" />@berserk-24</span>
        <span className="team"><FontAwesomeIcon icon={faGithub} className="github-icon" />@daniela</span>
        <span className="team"><FontAwesomeIcon icon={faGithub} className="github-icon" />@salcedo</span>
      </div>
    </div>
  );
}

export default Homepage;
