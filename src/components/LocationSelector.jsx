import React from 'react';
import { MapPin, Clock, Phone, Banknote, CreditCard, ChevronRight } from 'lucide-react';

export default function LocationSelector({ activeLocation, setActiveLocation }) {
  
  const locations = [
    {
      id: 'pleasure-point',
      name: 'The Point Market',
      area: 'Pleasure Point Flagship',
      address: '23040 East Cliff Drive, Santa Cruz, CA 95062',
      mapUrl: 'https://maps.google.com/?q=23040+East+Cliff+Drive+Santa+Cruz+CA',
      phone: '(831) 475-3356',
      hours: '7:00 AM - 9:00 PM Daily',
      cashOnly: true,
      features: ['Original Breakfast Burritos', 'Direct Ocean Views', 'Grab & Go Market', 'ATM On-Site'],
    },
    {
      id: 'black-point',
      name: 'Black Point Market',
      area: 'Black Point Sister Spot',
      address: '1405 East Cliff Drive, Santa Cruz, CA 95062',
      mapUrl: 'https://maps.google.com/?q=1405+East+Cliff+Drive+Santa+Cruz+CA',
      phone: '(831) 475-3357',
      hours: '7:00 AM - 8:00 PM Daily',
      cashOnly: true,
      features: ['Deli & Sandwiches', 'Espresso Bar', 'Surf Snacks & Wax', 'Relaxed Garden Patio'],
    },
    {
      id: 'pacific-point',
      name: 'Pacific Point Market',
      area: 'Downtown SC Cafe',
      address: '302 Pacific Avenue, Santa Cruz, CA 95060',
      mapUrl: 'https://maps.google.com/?q=302+Pacific+Avenue+Santa+Cruz+CA',
      phone: '(831) 420-1234',
      hours: '8:00 AM - 9:00 PM Daily',
      cashOnly: false,
      features: ['Credit Cards Accepted', 'Smash Burger Exclusive', 'UCSC Student Fuel', 'Spacious Seating'],
    }
  ];

  return (
    <section id="locations" className="locations-section">
      <div className="container">
        
        {/* Title Header */}
        <div className="section-header animate-slide-up">
          <div className="section-badge">
            <MapPin className="w-4 h-4 text-[#f59e0b]" />
            <span className="section-badge-text">Our Neighborhood Locations</span>
          </div>
          <h2 className="section-title">
            Find Your Point of <br />
            <span className="text-gradient">Surf & Burritos</span>
          </h2>
          <p className="section-desc">
            We have dotted the coastline and downtown blocks of Santa Cruz to make sure you are never far from hot, heavy food. Discover our three unique locations below.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="locations-grid animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {locations.map((loc) => {
            const isActive = activeLocation === loc.id;
            return (
              <div 
                key={loc.id}
                onClick={() => setActiveLocation(loc.id)}
                className={`location-card ${isActive ? 'active' : ''}`}
              >
                
                {/* Glow ring overlay */}
                {isActive && <div className="location-card-glow"></div>}

                <div>
                  {/* Card Header area */}
                  <div className="location-card-header">
                    <span className={`location-card-tag ${isActive ? 'active' : 'inactive'}`}>
                      {loc.area}
                    </span>
                    {loc.cashOnly ? (
                      <span className="location-card-ops-badge cash">
                        <Banknote className="w-3.5 h-3.5" /> CASH ONLY
                      </span>
                    ) : (
                      <span className="location-card-ops-badge credit">
                        <CreditCard className="w-3.5 h-3.5" /> CREDIT OK
                      </span>
                    )}
                  </div>

                  {/* Location Title */}
                  <h3 className="location-card-title">
                    {loc.name}
                  </h3>

                  {/* Operational details */}
                  <div className="location-details-list">
                    <a 
                      href={loc.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="location-detail-item"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{loc.address}</span>
                    </a>
                    
                    <div className="location-detail-item">
                      <Clock className="w-4 h-4" />
                      <span>{loc.hours}</span>
                    </div>

                    <a 
                      href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="location-detail-item"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{loc.phone}</span>
                    </a>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="location-highlights-title">SPOT HIGHLIGHTS</div>
                  <div className="location-highlights-list">
                    {loc.features.map((feat, idx) => (
                      <div key={idx} className="location-highlight-item">
                        <span className="location-highlight-dot"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select spot button */}
                <button
                  className={`location-select-btn ${isActive ? 'active' : 'inactive'}`}
                >
                  {isActive ? 'CURRENTLY SELECTED' : 'SWITCH TO THIS SPOT'}
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
