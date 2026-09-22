
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
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(34px,6vw,56px)', lineHeight: 1.05, margin: '26px 0 18px', letterSpacing: '-.04em' }}>Senior hires.<br/>Done in 21 days.</motion.h1>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: 'clamp(16.5px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '50ch', margin: '0 0 28px' }}>A structured process for roles above ₹12 lakh CTC — mapped candidates, scored shortlists, offer support.</motion.p>
        <motion.button initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} transition={{ delay: 0.2 }} whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>

      <section style={{ padding: '0 clamp(20px,5vw,56px) clamp(40px,6vw,72px)', maxWidth: '900px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }}
          style={{ border: '1px solid rgba(233,234,237,0.5)', borderRadius: '12px', background: 'transparent', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '16px 22px', borderBottom: '1px solid #E9EAED', background: 'transparent', flexWrap: 'wrap' }}>
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
                  <motion.span initial={{ width: 0 }} whileInView={{ width: s.pct }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1, delay: i * 0.1 }} style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: '4px', background: '#2452F0', display: 'block' }}></motion.span>
                </span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-ink)', width: '28px', textAlign: 'right', flex: 'none' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 28px', letterSpacing: '-.025em' }}>What's included</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'transparent', border: '1px solid #E9EAED', borderRadius: '12px', overflow: 'hidden' }}>
          {includedItems.map((item, i) => (
            <motion.div key={i} whileHover={{ backgroundColor: '#FBFBFC', scale: 1.02 }} style={{ padding: '24px 22px', background: 'transparent', boxShadow: '0 0 0 1px #E9EAED' }}>
              <h3 style={{ fontSize: '15.5px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em' }}>{item.title}</h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#4B4F58', margin: 0 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(32px,5vw,56px) 0' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 24px', padding: '0 clamp(20px,5vw,56px)', letterSpacing: '-.025em' }}>The process</motion.h2>
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto', padding: '0 clamp(20px,5vw,56px)' }}>
          {processStages.map((stage, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} style={{ flex: 'none', width: '170px', borderTop: '3px solid #2452F0', padding: '16px 18px 0 0' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px', letterSpacing: '-.01em' }}>{stage.title}</div>
              <div style={{ fontSize: '13px', color: '#5F636B', lineHeight: 1.5 }}>{stage.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,56px)', background: 'transparent' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 24px', letterSpacing: '-.025em' }}>Recent closes</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.1 }} style={{ overflowX: 'auto', background: 'transparent', border: '1px solid #E9EAED', borderRadius: '12px' }}>
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
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 20px', letterSpacing: '-.025em' }}>Common questions</motion.h2>
        {faqs.map((faq) => (
          <div key={faq.id} style={{ borderBottom: '1px solid #E9EAED' }}>
            <button onClick={() => toggleFaqFor(faq.id)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', cursor: 'pointer', fontFamily: 'inherit', minHeight: '44px', transition: 'opacity 180ms ease' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-.01em' }}>{faq.q}</span>
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

      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)', textAlign: 'center', background: 'var(--color-ink)', color: '#fff' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(24px,3.2vw,32px)', margin: '0 0 12px', letterSpacing: '-.03em' }}>Tell us who you're hiring for</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontSize: '15.5px', color: '#9CA0A8', margin: '0 0 26px' }}>A short intake — three minutes.</motion.p>
        <motion.button initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} whileHover={{ scale: 1.03, backgroundColor: '#E9EAED' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: 'transparent', color: 'var(--color-ink)', border: 'none', borderRadius: '6px', padding: '16px 32px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>
    </main>
  );
}
