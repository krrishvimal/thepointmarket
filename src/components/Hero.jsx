import React from 'react';
import { MapPin, Clock, Phone, Star, ArrowUpRight, Quote } from 'lucide-react';

export default function Hero({ openOrderModal }) {
  return (
    <>
      <section id="hero-banner" className="hero-banner">
        {/* Background Image (enables premium zoom scroll transitions, no blur for high clarity) */}
        <div className="hero-bg-image" style={{ 
          backgroundImage: `url('/681289444_18392297038152846_3526439693766489439_n.jpg')`
        }}></div>
        
        {/* Dark cinematic overlay */}
        <div className="hero-overlay"></div>
        
        <div className="container relative" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          
          <div className="hero-centered-content animate-slide-up" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Top Badge */}
            <div className="hero-top-badge">
              <Star className="w-3.5 h-3.5" style={{ color: '#D4A574' }} />
              <span>PLEASURE POINT FLAGSHIP + SANTA CRUZ, CA</span>
              <Star className="w-3.5 h-3.5" style={{ color: '#D4A574' }} />
            </div>

            {/* Title */}
            <h1 className="hero-title">
              Home of the Best Burritos <br />
              <span className="hero-title-accent-wrapper">
                <svg className="hero-accent-wing left" width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="#D4A574" strokeWidth="1.25" strokeLinecap="round">
                  <line x1="55" y1="10" x2="5" y2="10" />
                  <line x1="55" y1="10" x2="12" y2="3.5" />
                  <line x1="55" y1="10" x2="12" y2="16.5" />
                </svg>
                <span className="hero-title-accent">in the 831.</span>
                <svg className="hero-accent-wing right" width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="#D4A574" strokeWidth="1.25" strokeLinecap="round">
                  <line x1="5" y1="10" x2="55" y2="10" />
                  <line x1="5" y1="10" x2="48" y2="3.5" />
                  <line x1="5" y1="10" x2="48" y2="16.5" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-desc">
              Proudly and locally serving the legendary Pleasure Point surfing breaks, 
              our neighborhood, and hungry travelers. Burritos that have earned 
              generations of Santa Cruz locals, surfers, and coastal travelers.
            </p>

            {/* NYT Quote */}
            <div className="hero-nyt-quote-box">
              <div className="hero-nyt-quote-content-row">
                <span className="hero-nyt-quote-large-mark">“</span>
                <div className="hero-nyt-quote-text-block">
                  <p className="hero-nyt-quote-text">
                    “Since what many call the best breakfast burritos in California.”
                  </p>
                  <span className="hero-nyt-quote-author">
                    — THE NEW YORK TIMES
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-ctas">
              <button onClick={openOrderModal} className="hero-btn-primary">
                ORDER ONLINE NOW <ArrowUpRight className="w-4 h-4 ml-1.5 inline-block relative -top-0.5" />
              </button>
              <a href="#menu" className="hero-btn-secondary">
                VIEW OUR MENU
              </a>
            </div>

            {/* Info Bar */}
            <div className="hero-info-bar">
              <a 
                href="https://www.google.com/search?q=The+Point+Market+Santa+Cruz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-info-item"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>23040 East Cliff Dr, Santa Cruz</span>
              </a>
              <div className="hero-info-divider"></div>
              <div className="hero-info-item">
                <Clock className="w-3.5 h-3.5" />
                <span>Daily: 7 AM – 9 PM</span>
              </div>
              <div className="hero-info-divider"></div>
              <a href="tel:8314753355" className="hero-info-item">
                <Phone className="w-3.5 h-3.5" />
                <span>(831) 475-3355</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
