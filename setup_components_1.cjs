const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const navbar = `
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
`;

const footer = `
import React from 'react';

export default function Footer({ goHome, goService }) {
  return (
    <footer style={{ padding: '30px clamp(20px,5vw,56px)', borderTop: '1px solid #E9EAED', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '14px', fontSize: '13px', color: '#5F636B' }}>
      <div>© 2026 Talent833 Partners</div>
      <div style={{ display: 'flex', gap: '18px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ color: '#5F636B', textDecoration: 'none' }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ color: '#5F636B', textDecoration: 'none' }}>Executive Search</a>
      </div>
    </footer>
  );
}
`;

const home = `
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home({ startSearchExec, goService, startSearchLD, mockFilters, mockCandidates, howItWorks, numbers, caseStudies }) {
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => prev.map((c, i) => {
        const target = parseInt(numbers[i].value.replace(/\\D/g, '')) || 0;
        return c < target ? Math.min(c + Math.ceil(target / 15), target) : target;
      }));
    }, 50);
    return () => clearInterval(interval);
  }, [numbers]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main data-screen-label="Homepage">
      <section style={{ padding: 'clamp(56px,9vw,104px) clamp(20px,5vw,56px) clamp(40px,6vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', fontSize: '13px', fontWeight: 600, color: '#2452F0', background: '#EEF1FE', borderRadius: '6px', padding: '6px 12px', marginBottom: '22px' }}>Roles from ₹12L CTC</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(38px,7vw,68px)', lineHeight: 1.02, margin: '0 0 20px', letterSpacing: '-.04em', textWrap: 'balance' }}>Executive hiring, systemized.</motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: 'clamp(17px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '46ch', margin: '0 0 30px' }}>Structured search for senior and leadership roles. Mapped candidates, scored shortlists, one dashboard.</motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.button whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={goService} style={{ background: '#fff', color: '#16181C', border: '1px solid #D8DAE0', borderRadius: '6px', padding: '15px 24px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>How it works</motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(36,82,240,0.15)' }}
          style={{ border: '1px solid rgba(233,234,237,0.5)', borderRadius: '12px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 20px 48px rgba(22,24,28,.08)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid #E9EAED', background: '#FBFBFC' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5F636B' }}>Active search — VP Finance</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '46px', borderRight: '1px solid #E9EAED', padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', background: '#FBFBFC' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#2452F0', display: 'block' }}></span>
              <span style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#E1E3E8', display: 'block' }}></span>
            </div>
            <div style={{ flex: 1, padding: '16px', minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {mockFilters.map((f, i) => (
                  <span key={i} style={{ fontSize: '11.5px', fontWeight: 600, padding: '5px 10px', borderRadius: '5px', background: f.bg, color: f.fg }}>{f.label}</span>
                ))}
              </div>
              {mockCandidates.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 0', borderBottom: i === mockCandidates.length - 1 ? 'none' : '1px solid #F1F2F4' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2452F0', color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{c.initials}</span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#16181C' }}>{c.name}</span>
                    <span style={{ display: 'block', fontSize: '11.5px', color: '#5F636B' }}>{c.meta}</span>
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, padding: '4px 9px', borderRadius: '5px', background: c.scoreBg, color: c.scoreFg, flex: 'none' }}>{c.score}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 10px', letterSpacing: '-.025em' }}>How it runs</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '15.5px', color: '#5F636B', margin: '0 0 32px', maxWidth: '48ch' }}>Four stages, same structure every time.</motion.p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1px', background: '#fff', border: '1px solid #E9EAED', borderRadius: '12px', overflow: 'hidden' }}>
          {howItWorks.map((step, i) => (
            <motion.div key={i} whileHover={{ backgroundColor: '#FBFBFC', scale: 1.02 }} style={{ padding: '26px 22px', background: '#fff', boxShadow: '0 0 0 1px #E9EAED' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4B4F58', margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(44px,6vw,64px) clamp(20px,5vw,56px)', background: '#16181C' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'clamp(24px,4vw,44px)' }}>
          {numbers.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
              <div style={{ fontWeight: 800, fontSize: 'clamp(30px,3.6vw,42px)', color: '#fff', marginBottom: '6px', letterSpacing: '-.03em' }}>
                {stat.value.replace(/\\d+/, counts[i] || stat.value.match(/\\d+/))}
              </div>
              <div style={{ fontSize: '13.5px', color: '#9CA0A8', lineHeight: 1.4 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 32px', letterSpacing: '-.025em' }}>Two ways we help</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>
          <motion.div whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(36,82,240,0.3)' }} style={{ background: '#2452F0', color: '#fff', borderRadius: '12px', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '240px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#DDE4FD', marginBottom: '16px' }}>Primary service</div>
              <h3 style={{ fontSize: 'clamp(22px,2.8vw,28px)', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-.025em' }}>Executive Search</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#DDE4FD', margin: 0, maxWidth: '40ch' }}>Leadership and senior specialist hiring, ₹12L+ CTC. Mapped, scored, guaranteed.</p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ color: '#fff', fontWeight: 600, fontSize: '14.5px', textDecoration: 'none', marginTop: '24px', borderBottom: '1px solid rgba(255,255,255,.45)', paddingBottom: '2px', alignSelf: 'flex-start' }}>See how it works</a>
          </motion.div>
          <motion.div whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }} style={{ background: '#F7F8FA', border: '1px solid #E9EAED', borderRadius: '12px', padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5F636B', marginBottom: '16px' }}>Also available</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-.02em' }}>L&amp;D Solutions</h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: '#4B4F58', margin: 0 }}>Leadership development for teams already in place.</p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); startSearchLD(); }} style={{ color: '#2452F0', fontWeight: 600, fontSize: '14.5px', textDecoration: 'none', marginTop: '20px', borderBottom: '1px solid rgba(36,82,240,.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>Learn more</a>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,80px) 0' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 24px', padding: '0 clamp(20px,5vw,56px)', letterSpacing: '-.025em' }}>Recent searches</motion.h2>
        <div style={{ display: 'flex', gap: '14px', padding: '0 clamp(20px,5vw,56px)', overflowX: 'auto' }}>
          {caseStudies.map((cs, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} style={{ flex: 'none', width: '250px', border: '1px solid #E9EAED', borderRadius: '12px', padding: '22px', background: '#F7F8FA' }}>
              <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#2452F0', marginBottom: '12px' }}>{cs.industry}</div>
              <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-.015em' }}>{cs.role}</div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '13.5px', color: '#5F636B' }}>
                <span>{cs.ctc}</span>
                <span>{cs.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,56px)', textAlign: 'center', borderTop: '1px solid #E9EAED', background: '#F7F8FA' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(26px,3.6vw,36px)', margin: '0 0 14px', letterSpacing: '-.03em', textWrap: 'balance' }}>Ready to fill your next senior role?</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '16px', color: '#4B4F58', margin: '0 0 28px' }}>Three minutes to a qualified intake.</motion.p>
        <motion.button initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '16px 32px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>
    </main>
  );
}
`;

const serviceDetail = `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceDetail({ goHome, startSearchExec, mockScores, includedItems, processStages, caseStudies, faqs, toggleFaqFor }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main data-screen-label="Service Detail — Executive Search">
      <section style={{ padding: 'clamp(40px,7vw,88px) clamp(20px,5vw,56px) clamp(32px,5vw,48px)', maxWidth: '800px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontSize: '13.5px', color: '#5F636B', textDecoration: 'none' }}>← Back</a>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(34px,6vw,56px)', lineHeight: 1.05, margin: '26px 0 18px', letterSpacing: '-.04em' }}>Senior hires.<br/>Done in 21 days.</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(16.5px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '50ch', margin: '0 0 28px' }}>A structured process for roles above ₹12 lakh CTC — mapped candidates, scored shortlists, offer support.</motion.p>
        <motion.button initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>

      <section style={{ padding: '0 clamp(20px,5vw,56px) clamp(40px,6vw,72px)', maxWidth: '900px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ border: '1px solid rgba(233,234,237,0.5)', borderRadius: '12px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: '0 20px 48px rgba(22,24,28,.06)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '16px 22px', borderBottom: '1px solid #E9EAED', background: '#FBFBFC', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#2452F0', color: '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>RK</span>
              <span>
                <span style={{ display: 'block', fontSize: '14.5px', fontWeight: 700 }}>Candidate A-3821</span>
                <span style={{ display: 'block', fontSize: '12.5px', color: '#5F636B' }}>VP Finance, 14 yrs, Mumbai</span>
              </span>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, padding: '6px 14px', borderRadius: '6px', background: '#E8F6EF', color: '#0A6343' }}>Score 86 / 100</span>
          </div>
          <div style={{ padding: '22px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#5F636B', marginBottom: '16px' }}>Competency benchmark</div>
            {mockScores.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '13px' }}>
                <span style={{ width: '145px', fontSize: '13px', color: '#4B4F58', flex: 'none' }}>{s.label}</span>
                <span style={{ flex: 1, height: '7px', borderRadius: '4px', background: '#F1F2F4', display: 'block', position: 'relative', minWidth: '60px' }}>
                  <motion.span initial={{ width: 0 }} whileInView={{ width: s.pct }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: '4px', background: '#2452F0', display: 'block' }}></motion.span>
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#16181C', width: '28px', textAlign: 'right', flex: 'none' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 28px', letterSpacing: '-.025em' }}>What's included</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: '#fff', border: '1px solid #E9EAED', borderRadius: '12px', overflow: 'hidden' }}>
          {includedItems.map((item, i) => (
            <motion.div key={i} whileHover={{ backgroundColor: '#FBFBFC', scale: 1.02 }} style={{ padding: '24px 22px', background: '#fff', boxShadow: '0 0 0 1px #E9EAED' }}>
              <h3 style={{ fontSize: '15.5px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em' }}>{item.title}</h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#4B4F58', margin: 0 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(32px,5vw,56px) 0' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 24px', padding: '0 clamp(20px,5vw,56px)', letterSpacing: '-.025em' }}>The process</motion.h2>
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', padding: '0 clamp(20px,5vw,56px)' }}>
          {processStages.map((stage, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} style={{ flex: 'none', width: '170px', borderTop: '3px solid #2452F0', padding: '16px 18px 0 0' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px', letterSpacing: '-.01em' }}>{stage.title}</div>
              <div style={{ fontSize: '13px', color: '#5F636B', lineHeight: 1.5 }}>{stage.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)', background: '#F7F8FA' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 24px', letterSpacing: '-.025em' }}>Recent closes</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E9EAED', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E9EAED' }}>
                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12.5px', color: '#5F636B', fontWeight: 600 }}>Role</th>
                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12.5px', color: '#5F636B', fontWeight: 600 }}>Industry</th>
                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12.5px', color: '#5F636B', fontWeight: 600 }}>CTC</th>
                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12.5px', color: '#5F636B', fontWeight: 600 }}>Time to close</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((cs, i) => (
                <motion.tr key={i} whileHover={{ backgroundColor: '#F9FAFB' }} style={{ borderBottom: i === caseStudies.length - 1 ? 'none' : '1px solid #F1F2F4' }}>
                  <td style={{ padding: '14px 20px', fontSize: '14.5px', fontWeight: 700 }}>{cs.role}</td>
                  <td style={{ padding: '14px 20px', fontSize: '14.5px', color: '#4B4F58' }}>{cs.industry}</td>
                  <td style={{ padding: '14px 20px', fontSize: '14.5px', color: '#4B4F58' }}>{cs.ctc}</td>
                  <td style={{ padding: '14px 20px', fontSize: '14.5px', color: '#4B4F58' }}>{cs.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)', maxWidth: '740px' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 20px', letterSpacing: '-.025em' }}>Common questions</motion.h2>
        {faqs.map((faq) => (
          <div key={faq.id} style={{ borderBottom: '1px solid #E9EAED' }}>
            <button onClick={() => toggleFaqFor(faq.id)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', cursor: 'pointer', fontFamily: 'inherit', minHeight: '44px', transition: 'opacity 180ms ease' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#16181C', letterSpacing: '-.01em' }}>{faq.q}</span>
              <span style={{ fontSize: '17px', color: '#5F636B', flex: 'none', width: '24px', textAlign: 'center' }}>{faq.symbol}</span>
            </button>
            <AnimatePresence>
              {faq.open && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                  <p style={{ margin: '0 0 18px', fontSize: '14.5px', lineHeight: 1.65, color: '#4B4F58', maxWidth: '60ch' }}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)', textAlign: 'center', background: '#16181C', color: '#fff' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(24px,3.2vw,32px)', margin: '0 0 12px', letterSpacing: '-.03em' }}>Tell us who you're hiring for</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ fontSize: '15.5px', color: '#9CA0A8', margin: '0 0 26px' }}>A short intake — three minutes.</motion.p>
        <motion.button initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ scale: 1.03, backgroundColor: '#E9EAED' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#fff', color: '#16181C', border: 'none', borderRadius: '6px', padding: '16px 32px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>
    </main>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Navbar.jsx'), navbar);
fs.writeFileSync(path.join(componentsDir, 'Footer.jsx'), footer);
fs.writeFileSync(path.join(componentsDir, 'Home.jsx'), home);
fs.writeFileSync(path.join(componentsDir, 'ServiceDetail.jsx'), serviceDetail);
