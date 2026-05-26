import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Volume2, VolumeX } from 'lucide-react';

// Sub-component for individual Reels (encapsulates muted states and direct links)
function ReelCard({ reel }) {
  const [isMuted, setIsMuted] = useState(true); // Default muted for browser autoplay safety
  const videoRef = useRef(null);

  // Sync state with HTML5 video muted DOM property (bypasses React attribute update lag)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div className="story-reel-card video-card">
      {/* Autoplaying HTML5 Video */}
      <video 
        ref={videoRef}
        src={reel.videoSrc} 
        poster={reel.fallbackImage}
        className="reel-video"
        autoPlay 
        loop 
        defaultMuted={true}
        playsInline 
      />
      
      {/* Clean, separate click target leading directly to the Instagram profile page */}
      <a 
        href={reel.reelUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="reel-card-click-link"
        title="View on Instagram"
      ></a>
      
      {/* Independent Mute Button (Sits above the click-link and toggles only this card) */}
      <button 
        className="reel-mute-button" 
        onClick={toggleMute} 
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default function Story() {
  const reelsData = [
    {
      id: 1,
      videoSrc: "/reel1.mp4",
      fallbackImage: "/the barrel.jpg",
      reelUrl: "https://www.instagram.com/thepointmarket/"
    },
    {
      id: 2,
      videoSrc: "/reel2.mp4",
      fallbackImage: "/Fresh organic hemp açaí bowl..jpg",
      reelUrl: "https://www.instagram.com/thepointmarket/"
    },
    {
      id: 3,
      videoSrc: "/reel3.mp4",
      fallbackImage: "/684992420_18392997172152846_3757775233535858853_n.jpg",
      reelUrl: "https://www.instagram.com/thepointmarket/"
    }
  ];

  return (
    <section id="story" className="story-section">
      <div className="container">
        
        {/* Narrative Block - Centered Editorial */}
        <div className="story-narrative-centered reveal">
          <span className="story-subtitle">
            ESTABLISHED 1999 • PLEASURE POINT
          </span>
          
          <h2 className="story-heading">
            A Santa Cruz Surf-Side <br />
            <span className="text-gradient">Culinary Legend.</span>
          </h2>

          <div className="story-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-accent">✦</span>
            <span className="ornament-line"></span>
          </div>
          
          <p className="story-lead">
            Perched on the cliffs of East Cliff Drive directly across from the world-famous Pleasure Point reef breaks, The Point Market was born out of a simple, honest vision: to serve hot, hearty, and authentic griddle food to the coastal community of Santa Cruz.
          </p>

          <div className="story-narrative-columns">
            <p className="story-paragraph">
              Founded in 1999 by <strong>Hassan Ayyad</strong>, the kitchen quickly evolved from a simple beachside deli into a legendary local institution. Surfers coming out of the cold water needed something substantial to warm them up, and Hassan met that need with absolute dedication—rolling massive, hot, foil-wrapped breakfast burritos loaded with scrambled eggs, melted cheese, and golden-crisp hash potatoes.
            </p>
            
            <p className="story-paragraph">
              Today, Hassan's original flagship kitchen is widely celebrated as the <em>"Home of the Best Breakfast Burritos in the 831."</em> Every burrito is rolled thick, griddled fresh to order on the hot iron skillet, and handed over the counter with classic neighborhood warmth.
            </p>
          </div>
        </div>

        {/* 3 Best Instagram Reels - High Fidelity Portrait Cards */}
        <div className="story-reels-grid reveal reveal-delay-1">
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
        
        {/* Beautiful full-width quote card */}
        <div className="story-quote-card reveal reveal-delay-2">
          <p className="story-quote-text">
            "The Barrel Burrito is named after the legendary barrel waves right across the road. It's rolled thick and packed full, designed to keep you fueled all day."
          </p>
          <span className="story-quote-author">— Hassan Ayyad, Founder & Owner</span>
        </div>
        
      </div>
    </section>
  );
}
