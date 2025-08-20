"use client";
import React, { useState, useEffect, useCallback } from 'react';

interface ScrollProgressBarProps {
  color?: string;
  height?: string;
  zIndex?: number;
  showGlow?: boolean;
  animationDuration?: string;
  trackOpacity?: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  color = 'bg-gradient-to-r from-amber-500 to-orange-600',
  height = '4px',
  zIndex = 9999,
  showGlow = true,
  animationDuration = 'duration-150',
  trackOpacity = 0.2
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const calculateScrollProgress = useCallback(() => {
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate the maximum scrollable distance
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate progress percentage (0-100)
      const progress = maxScroll > 0 ? Math.min((scrollTop / maxScroll) * 100, 100) : 0;
      
      setScrollProgress(progress);
      
      // Show/hide progress bar based on scroll position
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    });
  }, []);

  useEffect(() => {
    // Set initial progress
    calculateScrollProgress();

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(calculateScrollProgress);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16); // ~60fps
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full transition-opacity ${animationDuration} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        zIndex,
        height: height,
        pointerEvents: 'none' // Prevent interference with page interactions
      }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background track */}
      <div 
        className="w-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
        style={{ 
          height: height,
          opacity: trackOpacity
        }}
      />
      
      {/* Progress bar */}
      <div
        className={`${color} transition-all ${animationDuration} ease-out`}
        style={{
          width: `${scrollProgress}%`,
          height: height,
          position: 'absolute',
          top: 0,
          left: 0,
          transformOrigin: 'left center',
          willChange: 'width', // Optimize for animations
        }}
      />
      
      {/* Optional glow effect */}
      {showGlow && (
        <div
          className={`${color} opacity-30 blur-sm transition-all ${animationDuration} ease-out`}
          style={{
            width: `${scrollProgress}%`,
            height: height,
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'left center',
            willChange: 'width',
          }}
        />
      )}
      
      {/* Subtle shadow for depth */}
      <div
        className="absolute top-0 left-0 w-full shadow-sm"
        style={{
          height: height,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)',
          opacity: isVisible ? 0.5 : 0,
          transition: `opacity ${animationDuration.replace('duration-', '')}ms ease-out`
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
