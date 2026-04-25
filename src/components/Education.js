import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

const certifications = [
  { name: 'Java', issuer: 'NPTEL / Udemy' },
  { name: 'Python', issuer: 'NPTEL / Udemy' },
  { name: 'Data Warehousing & Modelling', issuer: 'NPTEL' },
  { name: 'Problem Solving in C', issuer: 'NPTEL' },
];

export default function Education() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className={`edu-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-label">05 — Education</div>
        <h2 className="section-title">Academic <span>background</span></h2>

        <div className="edu-layout">
          {/* Degree card */}
          <div className="edu-degree-card">
            <div className="edu-degree-top">
              <div className="edu-icon">🎓</div>
              <div className="edu-badge-row">
                <span className="edu-badge">B.E. Degree</span>
                <span className="edu-badge cgpa">CGPA: 9.01 / 10</span>
              </div>
            </div>
            <h3 className="edu-degree">Bachelor of Engineering</h3>
            <p className="edu-branch">Electronics & Communication Engineering</p>
            <div className="edu-college">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              R.M.D. Engineering College
            </div>
            <div className="edu-period">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Nov 2020 – Mar 2024
            </div>

            {/* CGPA bar */}
            <div className="cgpa-visual">
              <div className="cgpa-label">
                <span>Academic Performance</span>
                <span className="cgpa-value">9.01 / 10</span>
              </div>
              <div className="cgpa-track">
                <div className="cgpa-fill" style={{ width: visible ? '90.1%' : '0%' }} />
              </div>
              <div className="cgpa-note">Top 5% of graduating class</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="edu-certs">
            <h3 className="certs-title">Certifications</h3>
            <div className="certs-grid">
              {certifications.map((cert, i) => (
                <div key={cert.name} className="cert-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="cert-icon">📜</div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <div className="cert-check">✓</div>
                </div>
              ))}
            </div>

            <div className="agile-card">
              <div className="agile-header">
                <span className="agile-icon">🔄</span>
                <h4>Agile Experience</h4>
              </div>
              <p>Participated in sprint planning, backlog grooming, sprint reviews, and retrospectives within cross-functional teams at TCS.</p>
              <div className="agile-chips">
                <span>Sprint Planning</span>
                <span>Backlog Grooming</span>
                <span>Sprint Reviews</span>
                <span>Retrospectives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
