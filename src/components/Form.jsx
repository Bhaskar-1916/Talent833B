
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FormView({ goHome, formStep, totalSteps, stepLabel, step1, step2, step3, step4, step5, progressDots, serviceOptions, industries, formData, errors, handlers, labelStyle, errStyle, inputStyle, selectStyle, contactMethods, showBack, nextLabel, formNext, formBack, summaryRows }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <main data-screen-label="Lead Qualification Form" style={{ minHeight: '80vh', background: 'transparent', padding: 'clamp(28px,5vw,48px) clamp(16px,5vw,24px) 72px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontSize: '13.5px', color: '#5F636B', textDecoration: 'none' }}>← Back</a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '24px 0 8px' }}>
          {progressDots.map((dot, i) => (
            <div key={i} style={{ height: '3px', borderRadius: '2px', flex: 1, background: dot.bg, transition: 'background 250ms ease' }}></div>
          ))}
        </div>
        <div style={{ fontSize: '13px', color: '#5F636B', marginBottom: '28px', fontWeight: 500 }}>Step {formStep} of {totalSteps} — {stepLabel}</div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          style={{ background: 'transparent', border: '1px solid #E9EAED', borderRadius: '12px', padding: 'clamp(24px,4vw,36px)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
        >
          <AnimatePresence mode="wait">
            {step1 && (
              <motion.div key="1" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>What do you need?</h2>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {serviceOptions.map((opt, i) => (
                    <motion.button key={i} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={opt.onSelect} style={{ textAlign: 'left', padding: '18px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', minHeight: '44px', border: `1.5px solid ${opt.selected ? '#2452F0' : '#E9EAED'}`, background: opt.selected ? '#EEF1FE' : '#fff', color: 'var(--color-ink)' }}>
                      <div style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '3px' }}>{opt.label}</div>
                      <div style={{ fontSize: '13.5px', color: '#5F636B' }}>{opt.desc}</div>
                    </motion.button>
                  ))}
                </div>
                {errors.service && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.service}</p>}
              </motion.div>
            )}
            {step2 && (
              <motion.div key="2" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>Role details</h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {formData.service !== 'ld' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Designation you're hiring for</label>
                      <input value={formData.designation} onChange={handlers.designation} placeholder="e.g. VP – Sales" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                      {errors.designation && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.designation}</p>}
                    </div>
                  )}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Department</label>
                    <input value={formData.department} onChange={handlers.department} placeholder="e.g. Sales & Marketing" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.department && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.department}</p>}
                  </div>
                  {formData.service !== 'ld' && (
                    <>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>CTC range</label>
                        <select value={formData.ctcRange} onChange={handlers.ctcRange} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: 'transparent' }}>
                          <option value="">Select a range</option>
                          <option value="12-18">₹12L – 18L</option>
                          <option value="18-30">₹18L – 30L</option>
                          <option value="30-50">₹30L – 50L</option>
                          <option value="50+">₹50L+</option>
                        </select>
                        {errors.ctcRange && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.ctcRange}</p>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Number of positions</label>
                        <input type="number" min="1" value={formData.positions} onChange={handlers.positions} placeholder="1" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                        {errors.positions && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.positions}</p>}
                      </div>
                    </>
                  )}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Timeline</label>
                    <select value={formData.timeline} onChange={handlers.timeline} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: 'transparent' }}>
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">Within 3 months</option>
                      <option value="exploratory">Just exploring</option>
                    </select>
                    {errors.timeline && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.timeline}</p>}
                  </div>
                </div>
              </motion.div>
            )}
            {step3 && (
              <motion.div key="3" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>About your company</h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Company name</label>
                    <input value={formData.companyName} onChange={handlers.companyName} placeholder="Company Pvt. Ltd." style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.companyName && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.companyName}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Industry</label>
                    <select value={formData.industry} onChange={handlers.industry} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: 'transparent' }}>
                      <option value="">Select industry</option>
                      {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    {errors.industry && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.industry}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Company size</label>
                    <select value={formData.companySize} onChange={handlers.companySize} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: 'transparent' }}>
                      <option value="">Select size</option>
                      <option value="1-50">1 – 50</option>
                      <option value="51-200">51 – 200</option>
                      <option value="201-1000">201 – 1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                    {errors.companySize && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.companySize}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>City</label>
                    <input value={formData.city} onChange={handlers.city} placeholder="e.g. Mumbai" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.city && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.city}</p>}
                  </div>
                </div>
              </motion.div>
            )}
            {step4 && (
              <motion.div key="4" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>Your contact details</h2>
                <div style={{ display: 'grid', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Full name</label>
                    <input value={formData.name} onChange={handlers.name} placeholder="Your name" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.name && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Phone number</label>
                    <input value={formData.phone} onChange={handlers.phone} placeholder="10-digit mobile number" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.phone && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Email (optional)</label>
                    <input value={formData.email} onChange={handlers.email} placeholder="you@company.com" style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box' }} />
                    {errors.email && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Preferred contact method</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {contactMethods.map(cm => (
                        <motion.button key={cm.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={cm.onPick} style={{ flex: 1, padding: '11px', borderRadius: '6px', border: `1.5px solid ${cm.selected ? '#2452F0' : '#E9EAED'}`, background: cm.selected ? '#EEF1FE' : '#fff', color: 'var(--color-ink)', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>{cm.label}</motion.button>
                      ))}
                    </div>
                    {errors.contactMethod && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.contactMethod}</p>}
                  </div>
                </div>
              </motion.div>
            )}
            {step5 && (
              <motion.div key="5" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>Review & submit</h2>
                <div style={{ display: 'grid', gap: 0 }}>
                  {summaryRows.map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '14px', padding: '12px 0', borderBottom: i === summaryRows.length - 1 ? 'none' : '1px solid #F1F2F4' }}>
                      <span style={{ fontSize: '13.5px', color: '#5F636B' }}>{row.label}</span>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, textAlign: 'right' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '20px' }}>
          {showBack ? (
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={formBack} style={{ background: 'transparent', border: '1px solid #D8DAE0', color: 'var(--color-ink)', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Back</motion.button>
          ) : <span></span>}
          <motion.button whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={formNext} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '13px 26px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>{nextLabel}</motion.button>
        </div>
      </div>
    </main>
  );
}
