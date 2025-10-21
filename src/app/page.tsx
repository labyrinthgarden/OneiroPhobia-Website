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

  const showLayer2 = scrollY > 50;
  const showLayer3 = scrollY > 1000;
  const showLayer4 = scrollY > 1700;

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
              transform: showLayer2 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.8s ease-out',
              left: 0
            }}
          >
            <Image src="/images/layers/Layer2-1.PNG" alt="Árbol izquierdo" fill className="object-cover" />
          </div>
          <div
            className="fixed h-screen w-full max-w-full object-cover"
            style={{
              transform: showLayer2 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.8s ease-out',
              right: 0
            }}
          >
            <Image src="/images/layers/Layer2-2.PNG" alt="Árbol derecho" fill className="object-cover" />
          </div>
        </div>

        {/* Capa calaveras - fade in */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-30"
          style={{
            opacity: showLayer3 ? 1 : 0,
            transition: 'opacity 2s ease-in-out'
          }}
        >
          <Image src="/images/layers/Layer3.PNG" alt="Imagen 3" fill className="object-cover" />
        </div>

        {/* Capa titulo - fade in */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-40"
          style={{
            opacity: showLayer4 ? 1 : 0,
            transition: 'opacity 3s ease-in-out'
          }}
        >
          <Image src="/images/layers/Layer4.PNG" alt="Imagen 4" fill className="object-cover" />
        </div>

        {/* Espacio para scroll */}
        <div style={{ height: '4000px' }}></div>
      </div>

      <div className="relative w-[100%] max-w-[100%] h-screen p-10 z-50 bg-black/80 mx-auto mt-10">
        <h2 className="text-3xl font-bold italic">Oneirophobia</h2>
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
        <div style={{ height: '30vh' }}></div>
        <div className="flex flex-row items-center justify-center flex-wrap my-1">
          <div className="max-w-[100px] max-h-[100px] mx-4 relative" style={{ width: 100, height: 100 }}>
            <Image src="/images/icons/logo.PNG" alt="logo image" fill className="object-contain" />
          </div>
          <div className="max-w-[100px] max-h-[100px] mx-4 relative" style={{ width: 100, height: 100 }}>
            <Image src="/images/icons/godot.PNG" alt="godot image" fill className="object-contain" />
          </div>
        </div>
        <span className="text-xs block mb-1">Equipo:</span>
        <span className="text-xs block mb-1"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@labyrinthgarden</span>
        <span className="text-xs block mb-1"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@berserk-24</span>
        <span className="text-xs block mb-1"><FontAwesomeIcon icon={faGithub} className="inline mr-1" />@daniela</span>
      </div>
    </div>
  );
};

export default Homepage;
