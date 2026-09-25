import React from 'react';

export default function VideoBackground() {
  return (
    <>
      {/* Dark cinematic looping background video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Dark radial veil overlay */}
      <div className="video-veil" />
      {/* Film-grain noise overlay */}
      <svg className="noise-overlay" viewBox="0 0 200 200" preserveAspectRatio="none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </>
  );
}
