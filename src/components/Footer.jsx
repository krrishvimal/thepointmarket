import React from 'react';
import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand Details */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrapper">
              <img src="/logo/logo.jpg" alt="The Point Market Logo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-logo-main">THE POINT MARKET</span>
                <span className="footer-logo-sub">Pleasure Point Flagship</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              For over two decades, Hassan Ayyad's flagship kitchen on the East Cliff surf line has stood as the legendary home of Santa Cruz's best breakfast burritos and fresh beach eats.
            </p>
            <div className="footer-social-row">
              <a 
                href="https://www.instagram.com/thepointmarket/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span className="social-label">Instagram</span>
              </a>
              <a 
                href="https://www.google.com/search?q=The+Point+Market+Santa+Cruz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                title="View on Google Maps"
              >
                <MapPin className="w-4 h-4" />
                <span className="social-label">Directions</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-nav-links">
              <li>
                <button onClick={() => scrollToSection('hero-banner')} className="footer-nav-link">
                  Top of Page
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('story')} className="footer-nav-link">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="footer-nav-link">
                  Flagship Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('vibe')} className="footer-nav-link">
                  Flagship Vibe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Details */}
          <div className="footer-details-col">
            <h3 className="footer-title">Flagship Location</h3>
            <div className="footer-badge-est">EST. 1999 • SANTA CRUZ</div>
            <h4 className="footer-location-title">The Point Market</h4>
            <p className="footer-address">
              23040 East Cliff Drive<br />
              Santa Cruz, CA 95062
            </p>
            <a href="tel:8314753356" className="footer-phone">
              (831) 475-3356
            </a>
            <span className="footer-hours">
              Open Daily 7:00 AM – 9:00 PM
            </span>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="footer-bottom-row">
          <span className="footer-copy-text">
            © {currentYear} THE POINT MARKET. ALL RIGHTS RESERVED.
          </span>
          <span className="footer-author-text">
            Locally designed in Santa Cruz, CA 🏄‍♂️
          </span>
        </div>

      </div>
    </footer>
  );
}
