const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'src', 'components');

const form = `
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FormView({ goHome, formStep, totalSteps, stepLabel, step1, step2, step3, step4, step5, progressDots, serviceOptions, industries, formData, errors, handlers, labelStyle, errStyle, inputStyle, selectStyle, contactMethods, showBack, nextLabel, formNext, formBack, summaryRows }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <main data-screen-label="Lead Qualification Form" style={{ minHeight: '80vh', background: '#F7F8FA', padding: 'clamp(28px,5vw,48px) clamp(16px,5vw,24px) 72px' }}>
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
          style={{ background: '#fff', border: '1px solid #E9EAED', borderRadius: '12px', padding: 'clamp(24px,4vw,36px)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
        >
          <AnimatePresence mode="wait">
            {step1 && (
              <motion.div key="1" variants={fadeUp} initial="hidden" animate="visible" exit="exit">
                <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>What do you need?</h2>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {serviceOptions.map((opt, i) => (
                    <motion.button key={i} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={opt.onSelect} style={{ textAlign: 'left', padding: '18px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', minHeight: '44px', border: \`1.5px solid \${opt.selected ? '#2452F0' : '#E9EAED'}\`, background: opt.selected ? '#EEF1FE' : '#fff', color: '#16181C' }}>
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
                        <select value={formData.ctcRange} onChange={handlers.ctcRange} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: '#fff' }}>
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
                    <select value={formData.timeline} onChange={handlers.timeline} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: '#fff' }}>
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
                    <select value={formData.industry} onChange={handlers.industry} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: '#fff' }}>
                      <option value="">Select industry</option>
                      {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    {errors.industry && <p style={{ color: '#C42B2B', fontSize: '13px', margin: '7px 0 0' }}>{errors.industry}</p>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#4B4F58', marginBottom: '7px' }}>Company size</label>
                    <select value={formData.companySize} onChange={handlers.companySize} style={{ width: '100%', padding: '12px 14px', border: '1px solid #D8DAE0', borderRadius: '6px', fontSize: '14.5px', fontFamily: 'inherit', minHeight: '44px', boxSizing: 'border-box', background: '#fff' }}>
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
                        <motion.button key={cm.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={cm.onPick} style={{ flex: 1, padding: '11px', borderRadius: '6px', border: \`1.5px solid \${cm.selected ? '#2452F0' : '#E9EAED'}\`, background: cm.selected ? '#EEF1FE' : '#fff', color: '#16181C', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>{cm.label}</motion.button>
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
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={formBack} style={{ background: '#fff', border: '1px solid #D8DAE0', color: '#16181C', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Back</motion.button>
          ) : <span></span>}
          <motion.button whileHover={{ scale: 1.03, boxShadow: '0 4px 14px rgba(36,82,240,0.4)' }} whileTap={{ scale: 0.97 }} onClick={formNext} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '13px 26px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>{nextLabel}</motion.button>
        </div>
      </div>
    </main>
  );
}
`;

const thankYou = `
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
`;

const app = `
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import FormView from './components/Form';
import ThankYou from './components/ThankYou';
import { howItWorks, mockFilters, mockCandidates, mockScores, numbers, includedItems, processStages, caseStudies, faqDefs, industries } from './data';
import './index.css';

export default function App() {
  const [view, setView] = useState('home');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ service:'', designation:'', department:'', ctcRange:'', positions:'', timeline:'', companyName:'', industry:'', companySize:'', city:'', name:'', phone:'', email:'', contactMethod:'' });
  const [errors, setErrors] = useState({});
  const [faqOpen, setFaqOpen] = useState({ f1: true });
  const [referenceId, setReferenceId] = useState('');

  const goHome = () => setView('home');
  const goService = () => setView('service');
  const startSearchExec = () => { setView('form'); setFormStep(1); setFormData(s => ({ ...s, service: 'exec' })); };
  const startSearchLD = () => { setView('form'); setFormStep(1); setFormData(s => ({ ...s, service: 'ld' })); };

  const toggleFaqFor = (id) => setFaqOpen(s => ({ ...s, [id]: !s[id] }));

  const setField = (key) => (e) => {
    const val = e && e.target ? e.target.value : e;
    setFormData(s => ({ ...s, [key]: val }));
    setErrors(s => ({ ...s, [key]: null }));
  };
  const setContactMethod = (id) => { setFormData(s => ({ ...s, contactMethod: id })); setErrors(s => ({ ...s, contactMethod: null })); };
  const selectService = (id) => { setFormData(s => ({ ...s, service: id })); setErrors(s => ({ ...s, service: null })); };

  const validateCurrentStep = () => {
    const s = formData;
    const errs = {};
    const step = formStep;
    if (step === 1) { if (!s.service) errs.service = 'Please pick one option to continue.'; }
    if (step === 2) {
      if (s.service !== 'ld') {
        if (!s.designation) errs.designation = 'Required.';
        if (!s.department) errs.department = 'Required.';
        if (!s.ctcRange) errs.ctcRange = 'Please select a CTC range.';
        if (!s.positions || Number(s.positions) < 1) errs.positions = 'Enter at least 1.';
        if (!s.timeline) errs.timeline = 'Please select a timeline.';
      } else {
        if (!s.department) errs.department = 'Required.';
        if (!s.timeline) errs.timeline = 'Please select a timeline.';
      }
    }
    if (step === 3) {
      if (!s.companyName) errs.companyName = 'Required.';
      if (!s.industry) errs.industry = 'Please select an industry.';
      if (!s.companySize) errs.companySize = 'Please select a size.';
      if (!s.city) errs.city = 'Required.';
    }
    if (step === 4) {
      if (!s.name) errs.name = 'Required.';
      if (!/^[6-9]\\d{9}$/.test(s.phone || '')) errs.phone = 'Enter a valid 10-digit Indian mobile number.';
      if (s.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s.email)) errs.email = 'Enter a valid email address.';
      if (!s.contactMethod) errs.contactMethod = 'Please pick a preferred contact method.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitForm = () => {
    const ref = 'T833-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setView('thankyou');
    setFormStep(1);
  };

  const formNext = () => {
    if (formStep === 5) { submitForm(); return; }
    if (!validateCurrentStep()) return;
    setFormStep(s => Math.min(5, s + 1));
  };
  const formBack = () => setFormStep(s => Math.max(1, s - 1));

  const handlers = {};
  ['designation','department','ctcRange','positions','timeline','companyName','industry','companySize','city','name','phone','email'].forEach(k => { handlers[k] = setField(k); });

  const faqs = faqDefs.map(f => ({ ...f, open: !!faqOpen[f.id], symbol: faqOpen[f.id] ? '−' : '+' }));

  const stepLabels = ['What you need','Role details','Your company','Contact details','Review & submit'];
  if (formData.service === 'ld') stepLabels[1] = 'L&D details';
  const progressDots = [1,2,3,4,5].map(n => ({ bg: n <= formStep ? '#2452F0' : '#E9EAED' }));

  const serviceOptions = [
    { id:'exec', label:'Executive Search', desc:'Hire a senior leader (₹12L+ CTC).', selected: formData.service === 'exec', onSelect: () => selectService('exec') },
    { id:'ld', label:'L&D Solutions', desc:'Build leadership capability.', selected: formData.service === 'ld', onSelect: () => selectService('ld') },
    { id:'both', label:'Both', desc:'Hire and develop the team.', selected: formData.service === 'both', onSelect: () => selectService('both') },
  ];

  const contactMethods = [
    { id:'call', label:'Call', selected: formData.contactMethod === 'call', onPick: () => setContactMethod('call') },
    { id:'whatsapp', label:'WhatsApp', selected: formData.contactMethod === 'whatsapp', onPick: () => setContactMethod('whatsapp') },
    { id:'email', label:'Email', selected: formData.contactMethod === 'email', onPick: () => setContactMethod('email') },
  ];

  const ctcLabels = { '12-18':'₹12L – 18L','18-30':'₹18L – 30L','30-50':'₹30L – 50L','50+':'₹50L+' };
  const timelineLabels = { immediate:'Immediate', '1month':'Within 1 month', '3months':'Within 3 months', exploratory:'Just exploring' };
  const serviceLabels = { exec:'Executive Search', ld:'L&D Solutions', both:'Both' };
  
  const summaryRows = [{ label:'Service', value: serviceLabels[formData.service] || '—' }];
  if (formData.service !== 'ld') {
    summaryRows.push(
      { label:'Designation', value: formData.designation || '—' },
      { label:'Department', value: formData.department || '—' },
      { label:'CTC range', value: ctcLabels[formData.ctcRange] || '—' },
      { label:'Positions', value: formData.positions || '—' },
      { label:'Timeline', value: timelineLabels[formData.timeline] || '—' },
    );
  } else {
    summaryRows.push(
      { label:'Department', value: formData.department || '—' },
      { label:'Timeline', value: timelineLabels[formData.timeline] || '—' },
    );
  }
  summaryRows.push(
    { label:'Company', value: formData.companyName || '—' },
    { label:'Industry', value: formData.industry || '—' },
    { label:'Company size', value: formData.companySize || '—' },
    { label:'City', value: formData.city || '—' },
    { label:'Name', value: formData.name || '—' },
    { label:'Phone', value: formData.phone || '—' },
    { label:'Email', value: formData.email || '—' },
    { label:'Preferred contact', value: formData.contactMethod || '—' },
  );

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <Navbar goHome={goHome} goService={goService} startSearchExec={startSearchExec} />
      
      {view === 'home' && (
        <Home 
          startSearchExec={startSearchExec}
          goService={goService}
          startSearchLD={startSearchLD}
          mockFilters={mockFilters}
          mockCandidates={mockCandidates}
          howItWorks={howItWorks}
          numbers={numbers}
          caseStudies={caseStudies}
        />
      )}

      {view === 'service' && <ServiceDetail 
        goHome={goHome} 
        startSearchExec={startSearchExec} 
        mockScores={mockScores} 
        includedItems={includedItems}
        processStages={processStages}
        caseStudies={caseStudies}
        faqs={faqs}
        toggleFaqFor={toggleFaqFor}
      />}
      
      {view === 'form' && (
        <FormView 
          goHome={goHome} 
          formStep={formStep} 
          totalSteps={5} 
          stepLabel={stepLabels[formStep - 1]}
          step1={formStep === 1} step2={formStep === 2} step3={formStep === 3} step4={formStep === 4} step5={formStep === 5}
          progressDots={progressDots}
          serviceOptions={serviceOptions}
          industries={industries}
          formData={formData}
          errors={errors}
          handlers={handlers}
          contactMethods={contactMethods}
          showBack={formStep > 1}
          nextLabel={formStep === 5 ? 'Submit' : 'Continue'}
          formNext={formNext}
          formBack={formBack}
          summaryRows={summaryRows}
        />
      )}

      {view === 'thankyou' && <ThankYou goHome={goHome} referenceId={referenceId} />}

      {(view === 'home' || view === 'service') && <Footer goHome={goHome} goService={goService} />}
    </div>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Form.jsx'), form);
fs.writeFileSync(path.join(componentsDir, 'ThankYou.jsx'), thankYou);
fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), app);
