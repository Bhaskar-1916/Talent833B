
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/* ── Animated counter ───────────────────────────────────────── */
function AnimatedNumber({ value, label, delayIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, '')) || 0;

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate(v) { setCount(Math.round(v)); },
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delayIndex * 0.12 }}
    >
      <div style={{ fontWeight: 800, fontSize: 'clamp(30px,3.6vw,42px)', color: '#fff', marginBottom: '6px', letterSpacing: '-.03em' }}>
        {value.replace(/\d+/, count)}
      </div>
      <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{label}</div>
    </motion.div>
  );
}

/* ── Home ───────────────────────────────────────────────────── */
export default function Home({ startSearchExec, goService, startSearchLD, mockFilters, mockCandidates, howItWorks, numbers, caseStudies }) {

  const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
  };

  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <main data-screen-label="Homepage" style={{ position: 'relative', zIndex: 2 }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(72px,10vw,120px) clamp(20px,5vw,56px) clamp(48px,6vw,72px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 'clamp(40px,5vw,72px)',
        alignItems: 'center',
      }}>
        {/* Left copy */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={stagger}>

          {/* Badge */}
          <motion.div variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center',
            fontSize: '12.5px', fontWeight: 600,
            color: '#8eb4ff',
            background: 'rgba(79,125,255,0.14)',
            border: '1px solid rgba(79,125,255,0.3)',
            borderRadius: '6px', padding: '6px 12px', marginBottom: '26px',
          }}>
            Roles from ₹12L CTC
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontWeight: 800,
            fontSize: 'clamp(38px,7vw,72px)',
            lineHeight: 1.02,
            margin: '0 0 22px',
            letterSpacing: '-.04em',
            textWrap: 'balance',
            color: '#fff',
          }}>
            Executive hiring,<br />systemized.
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontSize: 'clamp(16px,2vw,18.5px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '44ch',
            margin: '0 0 36px',
          }}>
            Structured search for senior and leadership roles. Mapped candidates, scored shortlists, one dashboard.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.button
              className="neural-btn-primary"
              whileTap={{ scale: 0.97 }}
              onClick={startSearchExec}
              style={{ padding: '15px 30px', fontSize: '15.5px', minHeight: '44px' }}
            >
              Start your search
            </motion.button>
            <motion.button
              className="neural-btn-secondary"
              whileTap={{ scale: 0.97 }}
              onClick={goService}
              style={{ padding: '15px 24px', fontSize: '15.5px', minHeight: '44px' }}
            >
              How it works
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right — candidate pipeline card */}
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06) inset' }}
        >
          {/* Titlebar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.15)', 'rgba(255,255,255,0.15)'].map((bg, i) => (
                <span key={i} style={{ width: '9px', height: '9px', borderRadius: '50%', background: bg, display: 'block' }} />
              ))}
            </div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.45)' }}>Active search — VP Finance</div>
          </div>

          <div style={{ display: 'flex' }}>
            {/* Sidebar icons */}
            <div style={{ width: '46px', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              {[true, false, false, false].map((active, i) => (
                <span key={i} style={{ width: '20px', height: '20px', borderRadius: '5px', background: active ? 'rgba(79,125,255,0.7)' : 'rgba(255,255,255,0.08)', display: 'block' }} />
              ))}
            </div>

            {/* Candidate rows */}
            <div style={{ flex: 1, padding: '16px', minWidth: 0 }}>
              {/* Filters */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {mockFilters.map((f, i) => (
                  <span key={i} style={{ fontSize: '11.5px', fontWeight: 600, padding: '5px 10px', borderRadius: '5px', background: 'rgba(79,125,255,0.15)', color: '#8eb4ff', border: '1px solid rgba(79,125,255,0.25)' }}>
                    {f.label}
                  </span>
                ))}
              </div>

              {mockCandidates.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 0', borderBottom: i === mockCandidates.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(79,125,255,0.6)', color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    {c.initials}
                  </span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#f4f4f5' }}>{c.name}</span>
                    <span style={{ display: 'block', fontSize: '11.5px', color: 'rgba(255,255,255,0.45)' }}>{c.meta}</span>
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, padding: '4px 9px', borderRadius: '5px', background: 'rgba(16,185,129,0.18)', color: '#34d399', flex: 'none' }}>
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── How it runs ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 10px', letterSpacing: '-.025em', color: '#fff' }}>
          How it runs
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontSize: '15.5px', color: 'rgba(255,255,255,0.45)', margin: '0 0 36px', maxWidth: '48ch' }}>
          Four stages, same structure every time.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: '1px' }}>
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              className="glass-panel"
              initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } } }}
              whileHover={{ y: -4 }}
              style={{ borderRadius: '12px', padding: '26px 22px' }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(79,125,255,0.8)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em', color: '#fff' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(44px,6vw,64px) clamp(20px,5vw,56px)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle glow behind stats */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(79,125,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 'clamp(24px,4vw,44px)', position: 'relative' }}>
          {numbers.map((stat, i) => (
            <AnimatedNumber key={i} value={stat.value} label={stat.label} delayIndex={i} />
          ))}
        </div>
      </section>

      {/* ── Two ways we help ─────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,56px)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 32px', letterSpacing: '-.025em', color: '#fff' }}>
          Two ways we help
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>

          {/* Executive Search card */}
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            style={{
              padding: 'clamp(28px,4vw,44px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '240px',
              background: 'linear-gradient(135deg, rgba(79,125,255,0.18) 0%, rgba(14,14,18,0.6) 100%)',
            }}
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(79,125,255,0.8)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Primary service</div>
              <h3 style={{ fontSize: 'clamp(22px,2.8vw,28px)', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-.025em', color: '#fff' }}>Executive Search</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'rgba(255,255,255,0.55)', margin: 0, maxWidth: '40ch' }}>
                Leadership and senior specialist hiring, ₹12L+ CTC. Mapped, scored, guaranteed.
              </p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); goService(); }}
              style={{ color: '#8eb4ff', fontWeight: 600, fontSize: '14px', textDecoration: 'none', marginTop: '24px', borderBottom: '1px solid rgba(79,125,255,0.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
              See how it works →
            </a>
          </motion.div>

          {/* L&D card */}
          <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            style={{ padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Also available</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, margin: '0 0 10px', letterSpacing: '-.02em', color: '#fff' }}>L&amp;D Solutions</h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                Leadership development for teams already in place.
              </p>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); startSearchLD(); }}
              style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', marginTop: '20px', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
              Learn more →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Recent searches ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontWeight: 700, fontSize: 'clamp(24px,2.8vw,30px)', margin: '0 0 24px', padding: '0 clamp(20px,5vw,56px)', letterSpacing: '-.025em', color: '#fff' }}>
          Recent searches
        </motion.h2>
        <div style={{ display: 'flex', gap: '14px', padding: '0 clamp(20px,5vw,56px) 8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              style={{ flex: 'none', width: '250px', padding: '22px' }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#8eb4ff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '.06em' }}>{cs.industry}</div>
              <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', letterSpacing: '-.015em', color: '#fff' }}>{cs.role}</div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                <span>{cs.ctc}</span>
                <span>{cs.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,56px)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontWeight: 800, fontSize: 'clamp(26px,3.6vw,38px)', margin: '0 0 14px', letterSpacing: '-.03em', textWrap: 'balance', color: '#fff' }}>
          Ready to fill your next senior role?
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', margin: '0 0 32px' }}>
          Three minutes to a qualified intake.
        </motion.p>
        <motion.button
          className="neural-btn-primary"
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeUp}
          whileTap={{ scale: 0.97 }}
          onClick={startSearchExec}
          style={{ padding: '16px 36px', fontSize: '16px', minHeight: '48px' }}
        >
          Start your search
        </motion.button>
      </section>
    </main>
  );
}
