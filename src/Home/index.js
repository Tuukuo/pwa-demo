import React, { useState, useEffect } from 'react';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div id='home'>
      <nav className="nav">
        <div className="logo">
          <img src="/Images/ubora-cbc-logo.png" alt="Ubora Cbc Logo, Hello" />
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item"><a>Home</a></li>
          <li className="nav-item"><a>Features</a></li>
          <li className="nav-item"><a>About</a></li>
          <li className="nav-item"><a>FAQ's</a></li>
          <li className="nav-item"><a>Team</a></li>
          <li className="nav-item"><a>Contacts</a></li>
          <li className="close-menu-item" onClick={closeMenu}>
            <span className="close-button">&times;</span>
          </li>
        </ul>
        <button
          className={`hamburger-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <div>
            <p className="ubora">Ubora CBC,</p>
            <p className="unlocking">Unlocking practical knowledge</p>
            <button className="learn-more" onClick={() => {}}>
              Learn More...
            </button>
          </div>
          <img src="/images/cbckids.png" alt="Kids" className="kidsImage" />
        </div>
        <div className="features">
          <div className="features-content">
            <h3 className="qa-post">Q&A Post</h3>
            <p className="practicals">Practicals</p>
          </div>
          <div className="image-row">
            <img src="/images/girl.png" alt="Girl" />
            <img src="/images/boy.png" alt="Boy" className="boy-image" />
            <img src="/images/cooking.png" alt="Cooking" />
            <img src="/images/planting.png" alt="Planting" />
          </div>
        </div>
      </div>

     
      {deferredPrompt && (
        <button className="install-button" onClick={handleInstallClick}>
          Install App
        </button>
      )}
    </div>
  );
};

export default Navbar;