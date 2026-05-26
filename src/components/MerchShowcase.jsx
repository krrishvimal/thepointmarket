import React from 'react';
import { ShoppingBag, Star, ArrowUpRight } from 'lucide-react';

export default function MerchShowcase() {
  
  const merchItems = [
    {
      id: 'sunset-hoodie',
      name: 'Pleasure Point Sunset Hoodie',
      price: '$58.00',
      rating: 4.9,
      reviews: 42,
      desc: 'Heavyweight organic cotton fleece in deep ocean navy, featuring a retro screenprinted Point Sunset circle graphic on the back.',
      tag: 'Best Seller',
      colorBadge: 'bg-amber-500'
    },
    {
      id: 'classic-surf-tee',
      name: 'Classic Point Surf Tee',
      price: '$28.00',
      rating: 4.8,
      reviews: 57,
      desc: 'Super soft, sun-bleached cream cotton crewneck. Small classic surfboard breast print and large coastal wave art on the reverse.',
      tag: 'New Release',
      colorBadge: 'bg-cyan-500'
    },
    {
      id: 'corduroy-cap',
      name: 'Retro Corduroy Dad Hat',
      price: '$32.00',
      rating: 4.7,
      reviews: 29,
      desc: 'Unstructured vintage mustard yellow corduroy dad hat with embroidered "THE POINT SC" surfboard front emblem and adjustable brass clasp.',
      tag: 'Limited Edition',
      colorBadge: 'bg-rose-500'
    },
    {
      id: 'surf-sticker-pack',
      name: 'Pleasure Point Sticker Pack',
      price: '$8.00',
      rating: 5.0,
      reviews: 118,
      desc: 'Pack of 5 heavy duty weather-resistant vinyl die-cut stickers. Perfect for water bottles, surfboards, cars, and laptops.',
      tag: 'Classic',
      colorBadge: 'bg-[#10b981]'
    }
  ];

  return (
    <section id="merch" className="merch-section">
      <div className="container">
        
        {/* Title Header */}
        <div className="section-header animate-slide-up">
          <div className="section-badge">
            <ShoppingBag className="w-4 h-4 text-[#ec4899]" />
            <span className="section-badge-text">Coastal Lifestyle Gear</span>
          </div>
          <h2 className="section-title">
            Point Market <br />
            <span className="text-gradient">Surf Shop</span>
          </h2>
          <p className="section-desc">
            Take a piece of Pleasure Point with you. Our limited-edition, premium custom merchandise is designed locally in Santa Cruz to reflect our authentic beach-roots heritage.
          </p>
        </div>

        {/* Product Grid */}
        <div className="merch-grid animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {merchItems.map((item) => (
            <div 
              key={item.id}
              className="merch-card"
            >
              
              {/* Product Media Area */}
              <div className="merch-card-media">
                <div className="merch-media-tag-wrapper">
                  <span className={`merch-media-tag ${item.colorBadge}`}>
                    {item.tag}
                  </span>
                </div>

                <div className="merch-graphic-wrapper">
                  <div className="merch-graphic-inner"></div>
                  
                  {item.id === 'sunset-hoodie' && (
                    <div className="graphic-hoodie">
                      <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                  )}

                  {item.id === 'classic-surf-tee' && (
                    <div className="graphic-tee">
                      <span className="graphic-tee-text">SURF CO</span>
                    </div>
                  )}

                  {item.id === 'corduroy-cap' && (
                    <div className="graphic-cap">
                      <span className="graphic-cap-text">SC</span>
                    </div>
                  )}

                  {item.id === 'surf-sticker-pack' && (
                    <div className="graphic-stickers">
                      <div className="graphic-sticker-circle cyan">🏄‍♂️</div>
                      <div className="graphic-sticker-circle rose">🌯</div>
                    </div>
                  )}
                </div>

                <div className="merch-media-bottom-fade"></div>
              </div>

              {/* Product Info Section */}
              <div className="merch-card-body">
                <div>
                  
                  {/* Rating row */}
                  <div className="merch-rating-row">
                    <div className="merch-rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="merch-rating-label">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="merch-card-title">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="merch-card-desc">
                    {item.desc}
                  </p>
                </div>

                {/* Footer and Pricing */}
                <div className="merch-card-footer">
                  <span className="merch-card-price">
                    {item.price}
                  </span>

                  <button 
                    onClick={() => alert('🛒 This is a mockup shop! The Point Market merchandise is sold in-person at our Pleasure Point and Black Point physical stores. Make sure to ask our cashiers when you pick up your burritos!')}
                    className="merch-card-buy-btn"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
