
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ goHome, goService, startSearchExec }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px clamp(20px,5vw,56px)', gap: '16px' }}
    >
      <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontWeight: 800, fontSize: '18px', textDecoration: 'none', color: '#fff', letterSpacing: '-.03em' }}>Talent833</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,3vw,28px)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}>Executive Search</a>
        <motion.button
          className="neural-btn-primary"
          whileTap={{ scale: 0.97 }}
          onClick={startSearchExec}
          style={{ padding: '11px 18px', fontSize: '14px', whiteSpace: 'nowrap', minHeight: '44px' }}
        >
          Start your search
        </motion.button>
      </div>
    </motion.nav>
  );
}
