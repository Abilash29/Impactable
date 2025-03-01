import React, { useState } from 'react';
import './MobileMenu.css';

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setCurrentMenu('main');
    }
  };
  
  const navigateToSubmenu = (submenu) => {
    setCurrentMenu(submenu);
  };
  
  const goBack = () => {
    setCurrentMenu('main');
  };
  
  return (
    <div className="mobile-menu-container">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/white-logo.svg`} alt="IMPACTABLE" />
        <span>IMPACTABLE</span>
      </div>
      
      {/* Menu toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">✕</span>
        ) : (
            <span className="menu-icon">
            <img 
              src={`${process.env.PUBLIC_URL}/mobile-menu-icon.png`} 
              alt="Menu Icon" 
              className="menu-img"
            />
          </span>
        )}
      </button>
      
      {menuOpen && (
        <div className="menu-overlay">
          {currentMenu === 'main' && (
            <ul className="main-menu">
              <li><a href="/Impactable">Home</a></li>
              <li><a href="/Impactable">About Us</a></li>
              <li className="has-submenu" onClick={() => navigateToSubmenu('investment')}>
                Investment
                <span className="arrow">›</span>
              </li>
              <li className="has-submenu" onClick={() => navigateToSubmenu('impact')}>
                Impact Industry Building
                <span className="arrow">›</span>
              </li>
              <li><a href="/Impactable">News & Insights</a></li>
              <li><a href="/Impactable">Terms of Use</a></li>
              <li><a href="/Impactable">Privacy Policy</a></li>
              <li className="contact-button-container">
                <a href="/Impactable" className="contact-button">Contact Us</a>
              </li>
            </ul>
          )}
          
          {currentMenu === 'investment' && (
            <div className="submenu">
              <div className="back-row">
                <div className="back-button" onClick={goBack}>
                  ‹ Back
                </div>
              </div>
              <ul>
                <li><a href="/Impactable">Investment</a></li>
                <li><a href="/Impactable">Why Impactable?</a></li>
                <li><a href="/Impactable">Impactable EM products</a></li>
              </ul>
              <div className="contact-button-container">
                <a href="/Impactable" className="contact-button">Contact Us</a>
              </div>
            </div>
          )}
          
          {currentMenu === 'impact' && (
            <div className="submenu">
              <div className="back-row">
                <div className="back-button" onClick={goBack}>
                  ‹ Back
                </div>
              </div>
              <ul>
                <li><a href="/Impactable">Impact Industry Building</a></li>
                <li><a href="/Impactable">Impactable Network</a></li>
                <li><a href="/Impactable">Impactable Technical Assistance</a></li>
              </ul>
              <div className="contact-button-container">
                <a href="/Impactable" className="contact-button">Contact Us</a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MobileMenu;