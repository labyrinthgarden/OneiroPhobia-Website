import React, { useState, ChangeEvent } from 'react';
import backImage from '../../assets/images/downloads/background_download.png';
import androidImage from '../../assets/images/icons/android.PNG';
import windowsImage from '../../assets/images/icons/windows.PNG';
import linuxImage from '../../assets/images/icons/linux.PNG';
import appleImage from '../../assets/images/icons/apple.PNG';
import './Downloads.css';

type Platform = 'android' | 'windows' | 'linux' | 'macos';

const descriptions: Record<Platform, string> = {
  android: 'Experimenta terror en la palma de tu mano. Optimizado para dispositivos móviles con controles táctiles intuitivos y gráficos adaptados.',
  windows: 'La experiencia completa de terror en PC. Aprovecha al máximo los gráficos y el audio envolvente para una inmersión total en el mundo onírico.',
  linux: 'Para los usuarios más técnicos que buscan la personalización. Disfruta de una experiencia optimizada en tu distribución favorita.',
  macos: 'Experimenta el Terror en tu elegante Mac. Diseñado específicamente para aprovechar el hardware Apple y su ecosistema integrado.',
};

const images: Record<Platform, string> = {
  android: androidImage,
  windows: windowsImage,
  linux: linuxImage,
  macos: appleImage,
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
  const [searchText, setSearchText] = useState<string>('Oneirophobia');
  const [backgroundImage] = useState<string>(backImage);
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
      className="downloads-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="title-input-container">
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          className="title-input"
        />
      </div>

      <div className="downloads-left">
        <div className="downloads-header">
          <h1 className="downloads-title">Plataformas Disponibles</h1>
          <p className="downloads-description">{currentDescription}</p>
        </div>
      </div>

      <div className="preview-container">
        <img
          src={currentImage || ''}
          alt="Preview"
          className={`preview-image ${visible ? 'visible' : ''}`}
        />
      </div>

      <div className="downloads-right">
        <div className="downloads-section">
          <h3>Selecciona tu plataforma</h3>
          <div className="downloads-options">
            <div
              className="download-option"
              onMouseEnter={() => handleMouseEnter('android')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDownload('android')}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174836.png"
                alt="Android"
                className="download-icon"
              />
              <div className="download-info">
                <h4>Android</h4>
                <p>Para dispositivos Android</p>
              </div>
            </div>
            <div
              className="download-option"
              onMouseEnter={() => handleMouseEnter('windows')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDownload('windows')}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://images.icon-icons.com/643/PNG/512/windows-square-shape-brand_icon-icons.com_59257.png"
                alt="Windows"
                className="download-icon"
              />
              <div className="download-info">
                <h4>Windows</h4>
                <p>Para PC Windows</p>
              </div>
            </div>
            <div
              className="download-option"
              onMouseEnter={() => handleMouseEnter('linux')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDownload('linux')}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/518/518713.png"
                alt="Linux"
                className="download-icon"
              />
              <div className="download-info">
                <h4>Linux</h4>
                <p>Para distribuciones Linux</p>
              </div>
            </div>
            <div
              className="download-option"
              onMouseEnter={() => handleMouseEnter('macos')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDownload('macos')}
              role="button"
              tabIndex={0}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                alt="Apple"
                className="download-icon"
              />
              <div className="download-info">
                <h4>macOS</h4>
                <p>Para Mac y dispositivos Apple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
