'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Homepage: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const layer2Factor = 0.3;
  const layer3Factor = 0.1;
  const layer4Factor = 0.1;

  const layer2LeftX = Math.max(-500, Math.min(0, -500 + scrollY * layer2Factor));
  const layer2RightX = Math.min(500, Math.max(0, 500 - scrollY * layer2Factor));
  const layer3Progress = Math.max(0, ((scrollY-2500) * layer3Factor)/300);
  const layer4Progress = Math.max(0, ((scrollY-5100) * layer4Factor)/600);

  return (
    <div className="relative w-full">
      <div className="min-h-screen relative">
        {/* Capa base - siempre visible */}
        <div className="fixed top-0 left-0 w-full h-screen z-10">
          <Image src="/images/layers/Layer1.PNG" alt="Imagen 1" fill className="object-cover" priority />
        </div>

        {/* Árboles - animación lateral */}
        <div className="fixed top-0 left-0 w-full h-screen z-20 flex justify-center">
          <div
            className="fixed h-screen w-full max-w-full object-cover"
            style={{
              transform: `translateX(${layer2LeftX}px)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <Image src="/images/layers/Layer2-1.PNG" alt="Árbol izquierdo" fill className="object-cover" />
          </div>
          <div
            className="fixed h-screen w-full max-w-full object-cover"
            style={{
              transform: `translateX(${layer2RightX}px)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <Image src="/images/layers/Layer2-2.PNG" alt="Árbol derecho" fill className="object-cover" />
          </div>
        </div>

        {/* Capa calaveras - fade in */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-30"
          style={{
            opacity: layer3Progress,
            transition: 'opacity 0.1s linear'
          }}
        >
          <Image src="/images/layers/Layer3.PNG" alt="Imagen 3" fill className="object-cover" />
        </div>

        {/* Capa titulo - fade in */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-40"
          style={{
            opacity: layer4Progress,
            transition: 'opacity 0.1s linear'
          }}
        >
          <Image src="/images/layers/Layer4.PNG" alt="Imagen 4" fill className="object-cover" />
        </div>

        {/* Espacio para scroll */}
        <div style={{ height: '9500px' }}></div>
      </div>

      <div className="relative w-[100%] max-w-[100%] h-screen p-20 z-50 bg-black/80 mx-auto mt-20">
        <h2 className="text-3xl font-bold italic mb-10">Oneirophobia</h2>
        <p className="text-base leading-6 mb-4">
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
          <FontAwesomeIcon icon={faGithub} className="inline mr-2" />
          <a className="underline text-white hover:text-gray-400" href="https://github.com/labyrinthgarden/Oneirophobia-Showcase" target="_blank" rel="noopener noreferrer">
            https://github.com/labyrinthgarden/Oneirophobia-Showcase
          </a>
          <br /><br />
        </p>
        <div style={{ height: '20vh' }}></div>
        <div className="flex flex-row items-center justify-center flex-wrap my-1">
          <div className="max-w-[100px] max-h-[100px] mx-4 relative" style={{ width: 100, height: 100 }}>
            <Image src="/images/icons/logo.PNG" alt="logo image" fill className="object-contain" />
          </div>
          <div className="max-w-[100px] max-h-[100px] mx-4 relative" style={{ width: 100, height: 100 }}>
            <Image src="/images/icons/godot.PNG" alt="godot image" fill className="object-contain" />
          </div>
        </div>
        <span className="text-xs block mb-1">Equipo:</span>
        <span className="text-xs block mb-0"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@labyrinthgarden</span>
        <span className="text-xs block mb-0"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@berserk-24</span>
        <span className="text-xs block mb-0"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@daniela</span>
      </div>
    </div>
  );
};

export default Homepage;
