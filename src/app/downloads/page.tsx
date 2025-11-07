'use client'
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

type Platform = 'android' | 'windows' | 'linux' | 'macos';

const descriptions: Record<Platform, string> = {
  android: 'Experimenta terror en la palma de tu mano. Optimizado para dispositivos móviles con controles táctiles intuitivos y gráficos adaptados.',
  windows: 'La experiencia completa de terror en PC. Aprovecha al máximo los gráficos y el audio envolvente para una inmersión total en el mundo onírico.',
  linux: 'Para los usuarios más técnicos que buscan la personalización. Disfruta de una experiencia optimizada en tu distribución favorita.',
  macos: 'Experimenta el Terror en tu elegante Mac. Diseñado específicamente para aprovechar el hardware Apple y su ecosistema integrado.',
};

const images: Record<Platform, string> = {
  android: '/images/icons/android.PNG',
  windows: '/images/icons/windows.PNG',
  linux: '/images/icons/linux.PNG',
  macos: '/images/icons/apple.PNG',
};

const downloadLinks: Record<Platform, string> = {
  android: 'https://www.dropbox.com/scl/fi/fvva3njtwtea7fr005wow/OneiroPhobia.zip?rlkey=0l92setoeuppq1lbl9aeh52yq&st=s49bwx0i&dl=1',
  windows: 'https://www.dropbox.com/scl/fi/fvva3njtwtea7fr005wow/OneiroPhobia.zip?rlkey=0l92setoeuppq1lbl9aeh52yq&st=s49bwx0i&dl=1',
  linux: 'https://www.dropbox.com/scl/fi/fvva3njtwtea7fr005wow/OneiroPhobia.zip?rlkey=0l92setoeuppq1lbl9aeh52yq&st=s49bwx0i&dl=1',
  macos: 'https://www.dropbox.com/scl/fi/fvva3njtwtea7fr005wow/OneiroPhobia.zip?rlkey=0l92setoeuppq1lbl9aeh52yq&st=s49bwx0i&dl=1',
};

const defaultDescription =
  'Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.';

const Downloads: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [currentDescription, setCurrentDescription] = useState<string>(defaultDescription);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleDownload = (platform: Platform) => {
    const link = document.createElement('a');
    link.href = downloadLinks[platform];
    link.download = `oneirophobia-${platform}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseEnter = (platform: Platform) => {
    setCurrentDescription(descriptions[platform]);
    setCurrentImage(images[platform]);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setCurrentDescription(defaultDescription);
    setVisible(false);
  };

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-[#2c1810] to-[#1a0f08] text-white font-sans relative justify-between"
      style={{
        backgroundImage: "url('/images/downloads/background_download.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-5 left-15 z-10">
        <h1
          className=" text-white text-[10vw]"
          style={{
            fontFamily: "'Ghastly Panic', sans-serif",
          }}
        >
          Oneirophobia
        </h1>
      </div>

      <div className="flex-1 p-16 flex flex-col">
        <div className="mb-10 mt-10 min-h-[200px]">
          <h1 className="text-4xl font-bold mb-5 mt-32">Plataformas Disponibles</h1>
          <p className="text-lg leading-relaxed opacity-90 min-h-[100px]">{currentDescription}</p>
        </div>
      </div>

      <div className="absolute left-[36%] top-[60%] -translate-x-[20%] -translate-y-[20%] w-[200px] h-[200px] z-5 bg-transparent">
        {currentImage && (
          <Image
            src={currentImage}
            alt="Preview"
            fill
            className={`rounded-xl transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>

      <div className="w-[400px] bg-black/20 p-10 backdrop-blur-lg border border-transparent">
        <div>
          <h3 className="text-3xl mt-10 mb-8 font-semibold">Selecciona tu plataforma</h3>
          <div className="flex flex-col gap-5">
            {(['android', 'windows', 'linux', 'macos'] as Platform[]).map(platform => (
              <div
                key={platform}
                className="flex items-center p-5 bg-white/10 rounded-xl border-2 border-transparent cursor-pointer transition-all hover:border-white hover:bg-black/10"
                onMouseEnter={() => handleMouseEnter(platform)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleDownload(platform)}
                role="button"
                tabIndex={0}
              >
                <div className="w-[60px] h-[60px] mr-5 rounded-lg relative">
                  <Image
                    src={images[platform]}
                    alt={platform}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg mb-1 font-semibold capitalize">{platform}</h4>
                  <p className="text-sm opacity-70 m-0">
                    {platform === 'android' && 'Para dispositivos Android'}
                    {platform === 'windows' && 'Para PC Windows'}
                    {platform === 'linux' && 'Para distribuciones Linux'}
                    {platform === 'macos' && 'Para Mac y dispositivos Apple'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
