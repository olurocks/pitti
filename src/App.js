import React, { useState, useEffect } from 'react';
import './App.css';

// Import images
import meme1 from './Components/meme1.png';
import meme2 from './Components/meme2.png';
import meme3 from './Components/meme3.png';
import meme4 from './Components/meme4.png';
import meme5 from './Components/meme5.png';
import meme6 from './Components/meme6.png';
import meme7 from './Components/meme7.png';
import meme8 from './Components/meme8.png';
import meme9 from './Components/meme9.png';
import meme10 from './Components/meme10.png';
import meme12 from './Components/meme12.png';
import meme13 from './Components/meme13.png';
import meme14 from './Components/meme14.png';
import tgIcon from './Components/telegramIcon.png';
import dexscreenerIcon from './Components/dexscreenerIcon.png';
import twitterIcon from './Components/twitterIcon.png';
import pitti from './Components/pitti.jpg'; // Import your banner image


const images = [
  meme1,
  meme2,
  meme3,
  meme4,
  meme5,
  meme6,
  meme7,
  meme8,
  meme9,
  meme10,
  meme12,
  meme13,
  meme14,
];

function App() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0" style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /> 
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
      </svg>
      
      <div className="goo">
        <h1>drip.</h1>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
      
      <h1 style={{ textAlign: 'center', fontSize: '60px', marginBottom: '20px', marginTop: '20px' }}>$PITTI</h1>
      <div className='App-header-container'>
      <img src={pitti} alt='headerImage' className='header-image'/>
        <header className='App-header'>
          <div className='App-header-div'>
            <a href='https://buy-link.com' target='_blank' rel='noopener noreferrer'>
              <button className='App-header-link'>
                Buy
              </button>
            </a>
            <a href='https://links-link.com' target='_blank' rel='noopener noreferrer'>
              <button className='App-header-link'>
                Links
              </button>
            </a>
            <a href='https://chart-link.com' target='_blank' rel='noopener noreferrer'>
              <button className='App-header-link'>
                Chart
              </button>
            </a>
          </div>
        </header>

      </div>
      <div className='description'>
        <p> There are Cute cats on Solana and There's $Pitti;<br/> 
        <span className='spaced-text'>The cutest of them all</span></p>
      </div>
      <div className="App-content">
        <img src={currentImage} alt="Random Meme" className="App-meme" />
      </div>

      <div className='links'>
        <a href='https://t.me/yourchannel' target='_blank' rel='noopener noreferrer'>
            <button className='link-prop'>
              <img src={tgIcon} alt="Telegram Icon" />
            </button>
          </a>
          <a href='https://dexscreener.com' target='_blank' rel='noopener noreferrer'>
            <button className='link-prop'>
              <img src={dexscreenerIcon} alt="Dexscreener Icon" />
            </button>
          </a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <button className='link-prop'>
              <img src={twitterIcon} alt="Twitter Icon" />
            </button>
          </a>
      </div>
    </div>
  );
}

export default App;
