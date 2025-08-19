import React, { useState } from 'react';
import backImage from './assets/downloads_page/background_dowloads.png';
import androidImage from './assets/downloads_page/android.PNG';
import windowsImage from './assets/downloads_page/windows.png';
import linuxImage from './assets/downloads_page/linux.png';
import appleImage from './assets/downloads_page/apple.PNG';
import './Downloads.css';

function Downloads() {

    const [searchText, setSearchText] = useState('Oneirophobia');
    const [backgroundImage, setBackgroundImage] = useState(backImage);
    const [visible, setVisible] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.');

    const descriptions = {
    android: 'perimenta terror en la palma de tu mano. Optimizado para dispositivos móviles con controles táctiles intuitivos y gráficos adaptados.',
    windows: 'La experiencia completa de terror en PC. Aprovecha al máximo los gráficos y el audio envolvente para una inmersión total en el mundo onírico.',
    linux: 'Para los usuarios más técnicos que buscan la personalización. Disfruta de una experiencia optimizada en tu distribución favorita.',
    macos:'Experimenta el Terror en tu elegante Mac. Diseñado específicamente para aprovechar el hardware Apple y su ecosistema integrado.',
    };

    const [currentImage, setCurrentImage] = useState("");

    const images = {
      android: androidImage,
      windows: windowsImage,
      linux: linuxImage,
      macos: appleImage
    };

    const handleDownload = (platform) => {      //si, todos son los mismos, por mientras. tenerlo por aca en las carpetas no renta
      const downloadLinks = {
        android: 'https://www.mediafire.com/file/8j1mdfpjfa5xeka/OneiroPhobia.zip/file',
        windows: 'https://www.mediafire.com/file/8j1mdfpjfa5xeka/OneiroPhobia.zip/file',
        linux: 'https://www.mediafire.com/file/8j1mdfpjfa5xeka/OneiroPhobia.zip/file',
        macos: 'https://www.mediafire.com/file/8j1mdfpjfa5xeka/OneiroPhobia.zip/file'
      };

      const link = document.createElement('a');
      link.href = downloadLinks[platform];
      link.download = `oneirophobia-${platform}`;
      link.target = '_blank'; //si
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (

     <div
      className="downloads-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
    <div className="title-input-container">
    <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="title-input"
    />
    </div>

      <div className="downloads-left">
        <div className="downloads-header">
          <h1 className="downloads-title">Plataformas Disponibles</h1>
          <p className="downloads-description">
            {currentDescription}
          </p>
        </div>
      </div>

      <div className="preview-container">
        <img
          src={currentImage}
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
               onMouseEnter={() => {
                  setCurrentDescription(descriptions.android);
                  setCurrentImage(images.android);
                  setVisible(true);
                }}
                onMouseLeave={() => {
                  setCurrentDescription('Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.');
                  setVisible(false);
                }}
                onClick={() => handleDownload('android')}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/174/174836.png" alt="Android" className="download-icon" />
              <div className="download-info">
                <h4>Android</h4>
                <p>Para dispositivos Android</p>
              </div>
            </div>

            <div className="download-option"
              onMouseEnter={() => {
                  setCurrentDescription(descriptions.windows);
                  setCurrentImage(images.windows);
                  setVisible(true);
                }}
              onMouseLeave={() => {
                  setCurrentDescription('Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.');
                  setVisible(false);
                }}
                onClick={() => handleDownload('windows')}
            >
              <img src="https://images.icon-icons.com/643/PNG/512/windows-square-shape-brand_icon-icons.com_59257.png" alt="Windows" className="download-icon" />
              <div className="download-info">
                <h4>Windows</h4>
                <p>Para PC Windows</p>
              </div>
            </div>

            <div
              className="download-option"
              onMouseEnter={() => {
                  setCurrentDescription(descriptions.linux);
                  setCurrentImage(images.linux);
                  setVisible(true);
                }}
              onMouseLeave={() => {
                  setCurrentDescription('Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.');
                  setVisible(false);
                }}
                onClick={() => handleDownload('linux')}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/518/518713.png" alt="Linux" className="download-icon" />
              <div className="download-info">
                <h4>Linux</h4>
                <p>Para distribuciones Linux</p>
              </div>
            </div>

            <div
              className="download-option"
              onMouseEnter={() => {
                  setCurrentDescription(descriptions.macos);
                  setCurrentImage(images.macos);
                  setVisible(true);
                }}
              onMouseLeave={() => {
                  setCurrentDescription('Por esta vez, los sueños te otorgan la decisión. Para tu plataforma preferida, Compatible con todos los sistemas operativos principales para que puedas disfrutar de la mejor experiencia sin importar tu dispositivo.');
                  setVisible(false);
                }}
                onClick={() => handleDownload('macos')}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" alt="Apple" className="download-icon" />
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
}

export default Downloads;
