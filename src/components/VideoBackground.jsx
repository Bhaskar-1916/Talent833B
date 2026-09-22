import React, { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetTime = 0;
    let currentTime = 0;

    const handleScroll = () => {
      if (!videoRef.current || !videoRef.current.duration) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (maxScroll || 1), 0), 1);
      
      // Calculate target time based on scroll progress
      targetTime = progress * videoRef.current.duration;
    };

    const updateVideo = () => {
      if (videoRef.current && videoRef.current.readyState >= 2) {
        // Lerp for smooth scrubbing
        currentTime += (targetTime - currentTime) * 0.1;
        
        // Only update if there's a meaningful difference
        if (Math.abs(videoRef.current.currentTime - currentTime) > 0.01) {
          videoRef.current.currentTime = currentTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideo);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideo);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <video 
        ref={videoRef}
        src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/45567745-d826-44a2-a5ce-7ef670944e60.mp4"
        className="video-background"
        muted 
        playsInline 
        preload="auto"
      />
      <div className="video-veil" />
      
      {/* SVG Turbulence Noise Overlay */}
      <svg className="noise-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </>
  );
}
