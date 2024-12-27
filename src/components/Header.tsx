import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Landing Page Solutions</h1>
      <p>We create stunning landing pages that convert.</p>
      <a href="#contact" className="cta-button">Get Started</a>
    </header>
  );
};

export { Header };
