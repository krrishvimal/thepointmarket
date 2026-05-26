import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import InteractiveMenu from './components/InteractiveMenu';
import VibeGallery from './components/VibeGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="section-divider-icon"></div>
    </div>
  );
}

export default function App() {
  const pleasurePointOrderUrl = "https://www.order.online/store/the-point-market-santa-cruz-24294025/";

  const openOrderModal = () => {
    window.open(pleasurePointOrderUrl, '_blank', 'noopener,noreferrer');
  };

  // Scroll Reveal Observer — animates elements as they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    // Observe all current .reveal elements
    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    };

    observeAll();

    // Watch for newly added .reveal elements (React re-renders)
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Safety net: re-scan after a short delay
    const timer = setTimeout(observeAll, 300);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar openOrderModal={openOrderModal} />
      <Hero openOrderModal={openOrderModal} />
      <SectionDivider />
      <Story />
      <SectionDivider />
      <InteractiveMenu openOrderModal={openOrderModal} />
      <SectionDivider />
      <VibeGallery />
      <SectionDivider />
      <Newsletter />
      <Footer />
    </div>
  );
}
