import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <section className="features">
        <div className="feature">
          <h2>High Conversion</h2>
          <p>Our landing pages are optimized for high conversion rates.</p>
        </div>
        <div className="feature">
          <h2>Responsive Design</h2>
          <p>Looks great on all devices, from desktops to mobile phones.</p>
        </div>
        <div className="feature">
          <h2>Easy Customization</h2>
          <p>Customize your landing page with ease using our tools.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
