
import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYou({ goHome, referenceId }) {
  return (
    <main data-screen-label="Thank You" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: '#16181C', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '460px' }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 10 }} style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#2452F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '23px', margin: '0 auto 24px', fontWeight: 700 }}>✓</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontWeight: 800, fontSize: 'clamp(26px,3.6vw,34px)', margin: '0 0 14px', letterSpacing: '-.03em' }}>Thanks — we're on it.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: '15px', lineHeight: 1.6, color: '#C7CAD1', margin: '0 0 8px' }}>A search consultant will call you within one business day.</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ fontSize: '13.5px', color: '#9CA0A8', margin: '0 0 28px' }}>Reference: {referenceId}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/919999999999" target="_blank" rel="noreferrer" style={{ background: '#25D366', color: '#0B2B14', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>WhatsApp us</motion.a>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={goHome} style={{ background: 'transparent', border: '1px solid #4B4F58', color: '#fff', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Back to home</motion.button>
        </motion.div>
      </div>
    </main>
  );
}
