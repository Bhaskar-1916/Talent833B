
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ goHome, goService, startSearchExec }) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(233,234,237,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px clamp(20px,5vw,56px)', gap: '16px' }}
    >
      <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontWeight: 800, fontSize: '18px', textDecoration: 'none', color: '#16181C', letterSpacing: '-.03em' }}>Talent833</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,3vw,28px)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#4B4F58', transition: 'color 0.2s' }}>Executive Search</a>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: '#2E323A' }} 
          whileTap={{ scale: 0.97 }}
          onClick={startSearchExec} 
          style={{ background: '#16181C', color: '#fff', border: 'none', borderRadius: '6px', padding: '11px 18px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', minHeight: '44px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
        >
          Start your search
        </motion.button>
      </div>
    </motion.nav>
  );
}
