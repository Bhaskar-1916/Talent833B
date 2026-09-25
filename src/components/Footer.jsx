
import React from 'react';

export default function Footer({ goHome, goService }) {
  return (
    <footer style={{ padding: '30px clamp(20px,5vw,56px)', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', position: 'relative', zIndex: 2 }}>
      <div>© 2026 Talent833 Partners</div>
      <div style={{ display: 'flex', gap: '18px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Executive Search</a>
      </div>
    </footer>
  );
}
