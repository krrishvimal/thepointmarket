import React, { useState } from 'react';
import { Camera, ArrowUpRight, X } from 'lucide-react';

export default function VibeGallery() {
  const [lightbox, setLightbox] = useState(null);

  const vibeItems = [
    {
      id: 1,
      title: "THE FLAGSHIP PATIO",
      subtitle: "Dog-Friendly Deck on East Cliff Drive",
      image: "/681289444_18392297038152846_3526439693766489439_n.jpg",
      desc: "Our cozy ocean-breeze patio sits directly across from the legendary Pleasure Point surf breaks. Fully dog-friendly — bring your pup and grab a morning burrito on the sun-drenched benches while watching the waves roll in.",
      detail: "Open Daily",
      detailValue: "7:00 AM – 9:00 PM"
    },
    {
      id: 2,
      title: "THE BARREL BURRITO",
      subtitle: "Signature Breakfast Legend",
      image: "/the barrel.jpg",
      desc: "Take a look inside the legend that put us on the map. Fluffy scrambled eggs, thick-cut bacon, golden-crisp hash potatoes, fresh sliced avocado, and loaded melted cheddar — all rolled thick in a toasted flour tortilla.",
      detail: "Since",
      detailValue: "1999"
    },
    {
      id: 3,
      title: "THE SPECIALS BOARD",
      subtitle: "Hand-Drawn Pleasure Point Chalk Art",
      image: "/701681405_18395148853152846_3998551061168301617_n.jpg",
      desc: "'Home of the Best Breakfast Burritos in Town. Open Daily.' Our iconic hand-drawn chalkboard has guided generations of surfers, locals, and coastal travelers to the hot griddle counter.",
      detail: "Featured In",
      detailValue: "The New York Times"
    },
    {
      id: 4,
      title: "ORGANIC AÇAÍ BOWLS",
      subtitle: "Fresh Morning Fuel",
      image: "/Fresh organic hemp açaí bowl..jpg",
      desc: "Perfect morning fuel after a dawn patrol session. Loaded with organic sliced strawberries, fresh bananas, local blueberries, hemp granola, shredded coconut, and a sweet golden honey drizzle.",
      detail: "Style",
      detailValue: "Organic & Vegan"
    },
    {
      id: 5,
      title: "HOT PRESSED DELIS",
      subtitle: "Lunch Favorites from the Iron Grill",
      image: "/684992420_18392997172152846_3757775233535858853_n.jpg",
      desc: "Thick, locally sourced sourdough pressed on the hot iron grill, filled with premium oven-roasted turkey, rich basil pesto, crispy bacon, melted provolone, and fresh baby spinach.",
      detail: "Bread",
      detailValue: "Dutch Crunch & Sourdough"
    },
    {
      id: 6,
      title: "LEGENDARY CALI BURRITO",
      subtitle: "Grill Fresh, Every Single Time",
      image: "/Legendary Cali burrito.jpg",
      desc: "Tender grilled carne asada, crispy golden fries, fluffy scrambled eggs, melted jack cheese, and fresh pico de gallo — all rolled together in our signature oversized flour tortilla.",
      detail: "Rating",
      detailValue: "4.8 ★ Local Favorite"
    }
  ];

  return (
    <section id="vibe" className="vibe-section">
      <div className="container">
        
        {/* Title Header */}
        <div className="section-header reveal">
          <div className="section-badge">
            <Camera className="w-4 h-4 text-[#C87A53]" />
            <span className="section-badge-text">Flagship Vibe</span>
          </div>
          <h2 className="section-title">
            The Point Market Vibe
          </h2>
          <p className="section-desc">
            We source local ingredients and cook everything fresh to order. Explore the daily griddles, organic acai bowls, dog-friendly patio, and chalkboard updates that define our East Cliff presence.
          </p>
        </div>

        {/* Zigzag Editorial Gallery */}
        <div className="vibe-editorial-grid">
          {vibeItems.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={item.id} 
                className={`vibe-editorial-row reveal ${isReversed ? 'reversed' : ''}`}
              >
                {/* Photo Side */}
                <div 
                  className="vibe-editorial-photo"
                  onClick={() => setLightbox(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="vibe-photo-overlay">
                    <span className="vibe-photo-zoom">View</span>
                  </div>
                </div>

                {/* Text Side */}
                <div className="vibe-editorial-text">
                  <div className="vibe-editorial-text-inner">
                    <span className="vibe-editorial-tag">{item.subtitle}</span>
                    
                    <h3 className="vibe-editorial-title">{item.title}</h3>
                    
                    <div className="vibe-editorial-accent"></div>
                    
                    <p className="vibe-editorial-desc">{item.desc}</p>

                    <div className="vibe-editorial-meta">
                      <span className="vibe-meta-label">{item.detail}</span>
                      <span className="vibe-meta-value">{item.detailValue}</span>
                    </div>

                    <button 
                      className="vibe-editorial-cta"
                      onClick={() => setLightbox(item)}
                    >
                      EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div 
            className="modal-overlay animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <div 
              className="vibe-lightbox-panel animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="vibe-lightbox-close" onClick={() => setLightbox(null)}>
                <X className="w-5 h-5" />
              </button>
              <img 
                src={lightbox.image} 
                alt={lightbox.title} 
                className="vibe-lightbox-img"
              />
              <div className="vibe-lightbox-info">
                <span className="vibe-editorial-tag">{lightbox.subtitle}</span>
                <h3 className="vibe-lightbox-title">{lightbox.title}</h3>
                <p className="vibe-lightbox-desc">{lightbox.desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
