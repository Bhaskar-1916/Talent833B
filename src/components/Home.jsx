
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedNumber({ value, label, delayIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, '')) || 0;

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.round(v));
        }
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [inView, target]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: delayIndex * 0.1 }}>
      <div style={{ fontWeight: 800, fontSize: 'clamp(30px,3.6vw,42px)', color: '#fff', marginBottom: '6px', letterSpacing: '-.03em' }}>
        {value.replace(/\d+/, count)}
      </div>
      <div style={{ fontSize: '13.5px', color: '#9CA0A8', lineHeight: 1.4 }}>{label}</div>
    </motion.div>
  );
}

export default function Home({ startSearchExec, goService, startSearchLD, mockFilters, mockCandidates, howItWorks, numbers, caseStudies }) {



  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main data-screen-label="Homepage">
      <section style={{ padding: 'clamp(56px,9vw,104px) clamp(20px,5vw,56px) clamp(40px,6vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', fontSize: '13px', fontWeight: 600, color: '#2452F0', background: '#EEF1FE', borderRadius: '6px', padding: '6px 12px', marginBottom: '22px' }}>Roles from ₹12L CTC</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(38px,7vw,68px)', lineHeight: 1.02, margin: '0 0 20px', letterSpacing: '-.04em', textWrap: 'balance' }}>Executive hiring, systemized.</motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: 'clamp(17px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '46ch', margin: '0 0 30px' }}>Structured search for senior and leadership roles. Mapped candidates, scored shortlists, one dashboard.</motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.button whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={goService} style={{ background: 'transparent', color: 'var(--color-ink)', border: '1px solid #D8DAE0', borderRadius: '6px', padding: '15px 24px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>How it works</motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(36,82,240,0.15)' }}
          style={{ border: '1px solid rgba(233,234,237,0.5)', borderRadius: '12px', background: 'transparent', backdropFilter: 'blur(10px)', overflow: 'hidden', boxShadow: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid #E9EAED', background: 'transparent' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E1E3E8', display: 'block' }}></span>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5F636B' }}>Active search — VP Finance</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '46px', borderRight: '1px solid #E9EAED', padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', background: 'transparent' }}>
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
                    <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-ink)' }}>{c.name}</span>
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
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 10px', letterSpacing: '-.025em' }}>How it runs</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontSize: '15.5px', color: '#5F636B', margin: '0 0 32px', maxWidth: '48ch' }}>Four stages, same structure every time.</motion.p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1px', background: 'transparent', border: '1px solid #E9EAED', borderRadius: '12px', overflow: 'hidden' }}>
          {howItWorks.map((step, i) => (
            <motion.div key={i} whileHover={{ backgroundColor: '#FBFBFC', scale: 1.02 }} style={{ padding: '26px 22px', background: 'transparent', boxShadow: '0 0 0 1px #E9EAED' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#4B4F58', margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(44px,6vw,64px) clamp(20px,5vw,56px)', background: 'var(--color-ink)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'clamp(24px,4vw,44px)' }}>
          {numbers.map((stat, i) => (
            <AnimatedNumber key={i} value={stat.value} label={stat.label} delayIndex={i} />
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 32px', letterSpacing: '-.025em' }}>Two ways we help</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>
          <motion.div whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(36,82,240,0.3)' }} style={{ background: '#2452F0', color: '#fff', borderRadius: '12px', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '240px' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#DDE4FD', marginBottom: '16px' }}>Primary service</div>
              <h3 style={{ fontSize: 'clamp(22px,2.8vw,28px)', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-.025em' }}>Executive Search</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#DDE4FD', margin: 0, maxWidth: '40ch' }}>Leadership and senior specialist hiring, ₹12L+ CTC. Mapped, scored, guaranteed.</p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ color: '#fff', fontWeight: 600, fontSize: '14.5px', textDecoration: 'none', marginTop: '24px', borderBottom: '1px solid rgba(255,255,255,.45)', paddingBottom: '2px', alignSelf: 'flex-start' }}>See how it works</a>
          </motion.div>
          <motion.div whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }} style={{ background: 'transparent', border: '1px solid #E9EAED', borderRadius: '12px', padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 24px', padding: '0 clamp(20px,5vw,56px)', letterSpacing: '-.025em' }}>Recent searches</motion.h2>
        <div style={{ display: 'flex', gap: '14px', padding: '0 clamp(20px,5vw,56px)', overflowX: 'auto' }}>
          {caseStudies.map((cs, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} style={{ flex: 'none', width: '250px', border: '1px solid #E9EAED', borderRadius: '12px', padding: '22px', background: 'transparent' }}>
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

      <section style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,56px)', textAlign: 'center', borderTop: '1px solid #E9EAED', background: 'transparent' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontWeight: 800, fontSize: 'clamp(26px,3.6vw,36px)', margin: '0 0 14px', letterSpacing: '-.03em', textWrap: 'balance' }}>Ready to fill your next senior role?</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} style={{ fontSize: '16px', color: '#4B4F58', margin: '0 0 28px' }}>Three minutes to a qualified intake.</motion.p>
        <motion.button initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp} whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '16px 32px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</motion.button>
      </section>
    </main>
  );
}
