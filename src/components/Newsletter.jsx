import React, { useState } from 'react';
import { Send, Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="newsletter-section reveal">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-badge">
            <Mail className="w-4 h-4 text-[#C87A53]" />
            <span className="newsletter-badge-text">JOIN THE CIRCLE</span>
          </div>
          
          {!subscribed ? (
            <>
              <h2 className="newsletter-heading">
                Weekly Griddle Specials <br />
                & <span className="text-gradient">Surf Updates.</span>
              </h2>
              
              <p className="newsletter-desc">
                Subscribe to receive Hassan's weekly kitchen specials, exclusive burrito discount codes, and Pleasure Point surf advisories delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    <span>SUBSCRIBE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="newsletter-success-state animate-zoom-in">
              <CheckCircle className="w-12 h-12 text-[#7E8E7C] mb-4" />
              <h3 className="newsletter-success-title">You're in the Circle!</h3>
              <p className="newsletter-success-desc">
                Thanks for subscribing. We will send Pleasure Point griddle specials and surf advisories directly to your inbox.
              </p>
              <button 
                onClick={() => setSubscribed(false)} 
                className="newsletter-reset-btn"
              >
                Subscribe another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
