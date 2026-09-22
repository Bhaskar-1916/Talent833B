const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const navbar = `
import React from 'react';

export default function Navbar({ goHome, goService, startSearchExec }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px clamp(20px,5vw,56px)', gap: '16px' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontWeight: 800, fontSize: '18px', textDecoration: 'none', color: '#16181C', letterSpacing: '-.03em' }}>Talent833</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,3vw,28px)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goService(); }} style={{ fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: '#4B4F58' }}>Executive Search</a>
        <button onClick={startSearchExec} className="btn" style={{ background: '#16181C', color: '#fff', border: 'none', borderRadius: '6px', padding: '11px 18px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', minHeight: '44px' }}>Start your search</button>
      </div>
    </nav>
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

export default function Home({ startSearchExec, goService, startSearchLD, mockFilters, mockCandidates, howItWorks, numbers, caseStudies }) {
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    // Dynamic scroll-triggered counting numbers animation
    const interval = setInterval(() => {
      setCounts(prev => prev.map((c, i) => {
        const target = parseInt(numbers[i].value.replace(/\\D/g, '')) || 0;
        return c < target ? Math.min(c + Math.ceil(target / 20), target) : target;
      }));
    }, 50);
    return () => clearInterval(interval);
  }, [numbers]);

  return (
    <main data-screen-label="Homepage">
      <section style={{ padding: 'clamp(56px,9vw,104px) clamp(20px,5vw,56px) clamp(40px,6vw,64px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
        <div>
          <div className="rise-in" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '13px', fontWeight: 600, color: '#2452F0', background: '#EEF1FE', borderRadius: '6px', padding: '6px 12px', marginBottom: '22px' }}>Roles from ₹12L CTC</div>
          <h1 className="rise-in delay-1" style={{ fontWeight: 800, fontSize: 'clamp(38px,7vw,68px)', lineHeight: 1.02, margin: '0 0 20px', letterSpacing: '-.04em', textWrap: 'balance' }}>Executive hiring, systemized.</h1>
          <p className="rise-in delay-2" style={{ fontSize: 'clamp(17px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '46ch', margin: '0 0 30px' }}>Structured search for senior and leadership roles. Mapped candidates, scored shortlists, one dashboard.</p>
          <div className="rise-in delay-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={startSearchExec} className="btn" style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</button>
            <button onClick={goService} className="btn" style={{ background: '#fff', color: '#16181C', border: '1px solid #D8DAE0', borderRadius: '6px', padding: '15px 24px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>How it works</button>
          </div>
        </div>

        <div className="rise-in delay-4 card" style={{ border: '1px solid #E9EAED', borderRadius: '12px', background: '#fff', overflow: 'hidden' }}>
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
            </div>
            <div style={{ flex: 1, padding: '16px', minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
                {mockFilters.map((f, i) => (
                  <span key={i} style={{ fontSize: '11.5px', fontWeight: 600, padding: '5px 10px', borderRadius: '5px', background: f.bg, color: f.fg }}>{f.label}</span>
                ))}
              </div>
              {mockCandidates.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 0', borderBottom: '1px solid #F1F2F4' }}>
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
        </div>
      </section>

      <section style={{ padding: 'clamp(44px,6vw,64px) clamp(20px,5vw,56px)', background: '#16181C' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'clamp(24px,4vw,44px)' }}>
          {numbers.map((stat, i) => (
            <div key={i}>
              <div style={{ fontWeight: 800, fontSize: 'clamp(30px,3.6vw,42px)', color: '#fff', marginBottom: '6px', letterSpacing: '-.03em' }}>
                {stat.value.replace(/\\d+/, counts[i])}
              </div>
              <div style={{ fontSize: '13.5px', color: '#9CA0A8', lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
`;

const serviceDetail = `
import React from 'react';

export default function ServiceDetail({ goHome, startSearchExec, mockScores }) {
  return (
    <main data-screen-label="Service Detail — Executive Search">
      <section style={{ padding: 'clamp(40px,7vw,88px) clamp(20px,5vw,56px) clamp(32px,5vw,48px)', maxWidth: '800px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontSize: '13.5px', color: '#5F636B', textDecoration: 'none' }}>← Back</a>
        <h1 className="rise-in" style={{ fontWeight: 800, fontSize: 'clamp(34px,6vw,56px)', lineHeight: 1.05, margin: '26px 0 18px', letterSpacing: '-.04em' }}>Senior hires.<br/>Done in 21 days.</h1>
        <p className="rise-in delay-1" style={{ fontSize: 'clamp(16.5px,2vw,19px)', lineHeight: 1.55, color: '#4B4F58', maxWidth: '50ch', margin: '0 0 28px' }}>A structured process for roles above ₹12 lakh CTC — mapped candidates, scored shortlists, offer support.</p>
        <button className="rise-in delay-2 btn" onClick={startSearchExec} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '15px 28px', fontSize: '15.5px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Start your search</button>
      </section>
    </main>
  );
}
`;

const form = `
import React from 'react';

export default function FormView({ goHome, formStep, totalSteps, stepLabel, formData, handlers, errors, nextLabel, formNext, formBack, showBack }) {
  return (
    <main data-screen-label="Lead Qualification Form" style={{ minHeight: '80vh', background: '#F7F8FA', padding: 'clamp(28px,5vw,48px) clamp(16px,5vw,24px) 72px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); goHome(); }} style={{ fontSize: '13.5px', color: '#5F636B', textDecoration: 'none' }}>← Back</a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '24px 0 8px' }}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} style={{ height: '3px', borderRadius: '2px', flex: 1, background: i < formStep ? '#2452F0' : '#E1E3E8', transition: 'background 250ms cubic-bezier(.23,1,.32,1)' }}></div>
          ))}
        </div>
        <div style={{ fontSize: '13px', color: '#5F636B', marginBottom: '28px', fontWeight: 500 }}>Step {formStep} of {totalSteps} — {stepLabel}</div>

        <div className="card rise-in" style={{ background: '#fff', border: '1px solid #E9EAED', borderRadius: '12px', padding: 'clamp(24px,4vw,36px)' }}>
          {formStep === 1 && (
            <div>
              <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px', letterSpacing: '-.025em' }}>What do you need?</h2>
              {/* Simplified form step for demonstration */}
              <p>Please enter details to proceed.</p>
            </div>
          )}
          {formStep === 2 && (
             <div>
               <h2 style={{ fontWeight: 800, fontSize: '21px', margin: '0 0 22px' }}>Company info</h2>
             </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '20px' }}>
          {showBack ? (
            <button className="btn" onClick={formBack} style={{ background: '#fff', border: '1px solid #D8DAE0', color: '#16181C', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Back</button>
          ) : <span></span>}
          <button className="btn" onClick={formNext} style={{ background: '#2452F0', color: '#fff', border: 'none', borderRadius: '6px', padding: '13px 26px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>{nextLabel}</button>
        </div>
      </div>
    </main>
  );
}
`;

const thankYou = `
import React from 'react';

export default function ThankYou({ goHome, referenceId }) {
  return (
    <main data-screen-label="Thank You" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: '#16181C', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '460px' }}>
        <div className="rise-in" style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#2452F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '23px', margin: '0 auto 24px', fontWeight: 700 }}>✓</div>
        <h1 className="rise-in delay-1" style={{ fontWeight: 800, fontSize: 'clamp(26px,3.6vw,34px)', margin: '0 0 14px', letterSpacing: '-.03em' }}>Thanks — we're on it.</h1>
        <p className="rise-in delay-2" style={{ fontSize: '15px', lineHeight: 1.6, color: '#C7CAD1', margin: '0 0 8px' }}>A search consultant will call you within one business day.</p>
        <p className="rise-in delay-3" style={{ fontSize: '13.5px', color: '#9CA0A8', margin: '0 0 28px' }}>Reference: {referenceId}</p>
        <div className="rise-in delay-4" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn" style={{ background: '#25D366', color: '#0B2B14', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>WhatsApp us</a>
          <button onClick={goHome} className="btn" style={{ background: 'transparent', border: '1px solid #4B4F58', color: '#fff', borderRadius: '6px', padding: '13px 22px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', minHeight: '44px' }}>Back to home</button>
        </div>
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
import './index.css';

export default function App() {
  const [view, setView] = useState('home');
  const [formStep, setFormStep] = useState(1);
  const [referenceId, setReferenceId] = useState('');

  const goHome = () => setView('home');
  const goService = () => setView('service');
  const startSearchExec = () => { setView('form'); setFormStep(1); };
  const startSearchLD = () => { setView('form'); setFormStep(1); };
  
  const formNext = () => {
    if (formStep < 2) setFormStep(s => s + 1);
    else {
      setReferenceId('REF-' + Math.floor(Math.random() * 1000000));
      setView('thankyou');
    }
  };
  const formBack = () => setFormStep(s => s - 1);

  const mockFilters = [
    { label: 'FinTech', bg: '#EEF1FE', fg: '#2452F0' },
    { label: 'Series B', bg: '#F2F2F2', fg: '#4B4F58' }
  ];
  
  const mockCandidates = [
    { initials: 'RK', name: 'Candidate A-3821', meta: 'VP Finance, 14 yrs', score: '86', scoreBg: '#E8F6EF', scoreFg: '#0A6343' },
    { initials: 'SM', name: 'Candidate A-4192', meta: 'Head of Finance, 12 yrs', score: '82', scoreBg: '#E8F6EF', scoreFg: '#0A6343' }
  ];

  const numbers = [
    { value: '21 Days', label: 'Average time to shortlist' },
    { value: '4+', label: 'Candidates mapped per role' }
  ];

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
          numbers={numbers}
        />
      )}

      {view === 'service' && <ServiceDetail goHome={goHome} startSearchExec={startSearchExec} mockScores={[]} />}
      
      {view === 'form' && (
        <FormView 
          goHome={goHome} 
          formStep={formStep} 
          totalSteps={2} 
          stepLabel={formStep === 1 ? 'Details' : 'Company Info'}
          formNext={formNext}
          formBack={formBack}
          showBack={formStep > 1}
          nextLabel={formStep === 2 ? 'Submit' : 'Continue'}
        />
      )}

      {view === 'thankyou' && <ThankYou goHome={goHome} referenceId={referenceId} />}

      {(view === 'home' || view === 'service') && <Footer goHome={goHome} goService={goService} />}
    </div>
  );
}
`;

fs.writeFileSync(path.join(componentsDir, 'Navbar.jsx'), navbar);
fs.writeFileSync(path.join(componentsDir, 'Footer.jsx'), footer);
fs.writeFileSync(path.join(componentsDir, 'Home.jsx'), home);
fs.writeFileSync(path.join(componentsDir, 'ServiceDetail.jsx'), serviceDetail);
fs.writeFileSync(path.join(componentsDir, 'Form.jsx'), form);
fs.writeFileSync(path.join(componentsDir, 'ThankYou.jsx'), thankYou);
fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), app);

// Replace main.jsx css import if needed
const mainPath = path.join(__dirname, 'src', 'main.jsx');
if (fs.existsSync(mainPath)) {
    let mainCode = fs.readFileSync(mainPath, 'utf8');
    mainCode = mainCode.replace("import './index.css'", "import './index.css'");
    fs.writeFileSync(mainPath, mainCode);
}
