
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import FormView from './components/Form';
import ThankYou from './components/ThankYou';
import VideoBackground from './components/VideoBackground';
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
      if (!/^[6-9]\d{9}$/.test(s.phone || '')) errs.phone = 'Enter a valid 10-digit Indian mobile number.';
      if (s.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) errs.email = 'Enter a valid email address.';
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
      <VideoBackground />
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
