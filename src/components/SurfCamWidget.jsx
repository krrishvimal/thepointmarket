import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw, Eye, EyeOff, Wind, Compass, Waves, Sun } from 'lucide-react';

export default function SurfCamWidget() {
  const [activeCam, setActiveCam] = useState('Pleasure Point Reef');
  const [camFeedOn, setCamFeedOn] = useState(true);
  const [waveHeight, setWaveHeight] = useState('4 - 6 ft');
  const [surfQuality, setSurfQuality] = useState('Epic');
  const [windSpeed, setWindSpeed] = useState('6 mph (Offshore)');
  const [waterTemp, setWaterTemp] = useState('56 °F');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString() + ' | ' + now.toLocaleDateString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const cameraAngles = [
    { name: 'Pleasure Point Reef', waves: '4 - 6 ft', quality: 'Epic', wind: '5 mph (Offshore)' },
    { name: 'East Cliff Overlook', waves: '3 - 5 ft', quality: 'Glassy', wind: '4 mph (Offshore)' },
    { name: 'Sewers Break', waves: '5 - 7 ft', quality: 'Clean', wind: '8 mph (Cross-shore)' }
  ];

  const refreshFeed = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const waveOpts = ['3 - 5 ft', '4 - 6 ft', '5 - 7 ft', '6 - 8 ft'];
      const qualOpts = ['Epic', 'Glassy', 'Clean', 'Fun', 'Fair'];
      const windOpts = ['4 mph (Offshore)', '6 mph (Offshore)', '8 mph (Side)', '10 mph (Onshore)'];
      
      setWaveHeight(waveOpts[Math.floor(Math.random() * waveOpts.length)]);
      setSurfQuality(qualOpts[Math.floor(Math.random() * qualOpts.length)]);
      setWindSpeed(windOpts[Math.floor(Math.random() * windOpts.length)]);
    }, 800);
  };

  const handleCamChange = (cam) => {
    setActiveCam(cam.name);
    setWaveHeight(cam.waves);
    setSurfQuality(cam.quality);
    setWindSpeed(cam.wind);
  };

  return (
    <section id="surfcam" className="surfcam-section">
      
      {/* Soft atmospheric backgrounds */}
      <div className="bg-blob bg-blob-purple" style={{ top: '40%', right: '-100px' }}></div>
      <div className="bg-blob bg-blob-orange" style={{ bottom: '10%', left: '-150px' }}></div>

      <div className="container">
        
        {/* Title Header */}
        <div className="section-header animate-slide-up">
          <div className="section-badge">
            <Waves className="w-4 h-4 text-[#06b6d4]" />
            <span className="section-badge-text">Pleasure Point Surf Cam</span>
          </div>
          <h2 className="section-title">
            Check the Waves, <br />
            <span className="text-gradient">Order Your Burrito</span>
          </h2>
          <p className="section-desc">
            The Point Market flagship is literally steps away from the water. Monitor live surf conditions across our three major viewpoints and lock in breakfast before you paddle out!
          </p>
        </div>

        {/* Surf Cam Screen Shell */}
        <div className="surfcam-grid animate-slide-up" style={{ animationDelay: '0.1s' }}>
          
          {/* Left Side: Cam Player */}
          <div className="surfcam-left">
            <div className="surfcam-viewport-box">
              
              {camFeedOn ? (
                <div className="cam-feed-active">
                  <div className="cam-sunset-sky"></div>
                  <div className="cam-sunset-glow animate-pulse"></div>

                  {/* Ocean wave drawings (using inline custom repeats for realistic presentation) */}
                  <div className="cam-waves-viewport">
                    <div className="cam-wave-element animate-wave" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 120%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1350,20 1500,60 L1500,120 L0,120 Z%22 fill=%22%230891b2%22 /%3E%3C/svg%3E")',
                      opacity: 0.35,
                      animationDuration: '10s'
                    }}></div>
                    <div className="cam-wave-element animate-wave" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 120%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0,30 C150,70 300,10 450,30 C600,70 750,10 900,30 C1050,70 1200,10 1350,30 L1350,120 L0,120 Z%22 fill=%22%230284c7%22 /%3E%3C/svg%3E")',
                      opacity: 0.25,
                      animationDuration: '15s',
                      animationDelay: '-2s'
                    }}></div>
                  </div>
                </div>
              ) : (
                <div className="cam-feed-paused">
                  <EyeOff className="w-12 h-12" />
                  <span>Feed Paused by User</span>
                </div>
              )}

              {/* Grid HUD reticle */}
              <div className="cam-grid-lines">
                <div className="cam-grid-h1"></div>
                <div className="cam-grid-h2"></div>
                <div className="cam-grid-v1"></div>
                <div className="cam-grid-v2"></div>
              </div>

              {/* UI Overlay */}
              <div className="cam-ui-overlay">
                <div className="cam-ui-header">
                  <div className="cam-live-indicator">
                    <span className="cam-live-dot"></span>
                    <span className="cam-live-text">LIVE STREAM</span>
                  </div>
                  <span className="cam-timestamp">{currentTime}</span>
                </div>

                <div className="cam-ui-footer">
                  <div className="cam-meta-text">
                    <span className="cam-meta-title">CAM: {activeCam.toUpperCase()}</span>
                    <span className="cam-meta-coords">LAT 36.9582° N | LON 121.9749° W</span>
                  </div>
                  <span className="cam-resolution-badge">HD STREAM 1080P</span>
                </div>
              </div>

              {/* Loading Calibration Layer */}
              {isRefreshing && (
                <div className="cam-calibrating-overlay">
                  <RefreshCw className="w-8 h-8 text-[#f59e0b] animate-spin" />
                  <span className="cam-calibrating-text">Calibrating Camera Lenses...</span>
                </div>
              )}

            </div>

            {/* Video Controls Bar */}
            <div className="cam-controls-bar">
              <div className="cam-controls-btns">
                <button
                  onClick={() => setCamFeedOn(!camFeedOn)}
                  className="cam-control-btn"
                  title={camFeedOn ? 'Pause Feed' : 'Play Feed'}
                >
                  {camFeedOn ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button
                  onClick={refreshFeed}
                  className="cam-control-btn"
                  title="Calibrate Metrics"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>

              <div className="cam-switchers">
                {cameraAngles.map((cam) => {
                  const isActive = activeCam === cam.name;
                  return (
                    <button
                      key={cam.name}
                      onClick={() => handleCamChange(cam)}
                      className={`cam-switcher-btn ${isActive ? 'active' : 'inactive'}`}
                    >
                      {cam.name.replace(' Reef', '').replace(' Break', '')}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Ocean Metrics Card */}
          <div className="surfcam-right">
            <div className="metrics-card glass-panel">
              <div className="metrics-glow"></div>

              <div>
                <span className="metrics-label">PLEASURE POINT METRICS</span>
                
                <div className="metrics-wave-heading">
                  <Waves className="w-4 h-4" />
                  <span>Wave Height</span>
                </div>
                <div className="metrics-wave-value">{waveHeight}</div>
                <span className="metrics-wave-quality">
                  Quality: {surfQuality}
                </span>

                <div className="metrics-dashboard">
                  <div className="metric-dash-item">
                    <div className="metric-dash-label">
                      <Wind className="w-3.5 h-3.5 text-slate-500" />
                      <span>Wind</span>
                    </div>
                    <span className="metric-dash-val">{windSpeed}</span>
                  </div>

                  <div className="metric-dash-item">
                    <div className="metric-dash-label">
                      <Compass className="w-3.5 h-3.5 text-slate-500" />
                      <span>Swell Dir</span>
                    </div>
                    <span className="metric-dash-val">WSW 220°</span>
                  </div>

                  <div className="metric-dash-item">
                    <div className="metric-dash-label">
                      <Waves className="w-3.5 h-3.5 text-slate-500" />
                      <span>Water Temp</span>
                    </div>
                    <span className="metric-dash-val">{waterTemp}</span>
                  </div>

                  <div className="metric-dash-item">
                    <div className="metric-dash-label">
                      <Sun className="w-3.5 h-3.5 text-slate-500" />
                      <span>Tide Trend</span>
                    </div>
                    <span className="metric-dash-val" style={{ color: '#10b981' }}>▲ Low to High</span>
                  </div>
                </div>

              </div>

              {/* Surfer Advisory */}
              <div className="surfcam-advisory-box">
                <span className="advisory-title">Surfer Advisory:</span>
                <p className="advisory-body">
                  Swells are peaking. Tides are pushing up high over the reef. Best breaks are active in front of 36th and 41st Ave. Fuel up with a pre-surf breakfast at the grill!
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
