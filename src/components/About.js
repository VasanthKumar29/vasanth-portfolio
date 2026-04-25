import React, { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const traits = [
    { icon: '🔒', title: 'Security-First', desc: 'PGP encryption workflows for sensitive PII data across enterprise pipelines.' },
    { icon: '⚡', title: 'Performance Tuning', desc: 'Oracle SQL optimization via execution plan analysis and indexing strategies.' },
    { icon: '🤖', title: 'GenAI Practitioner', desc: 'Daily use of Amazon Q & Kiro to accelerate development and cut turnaround time.' },
    { icon: '☁️', title: 'Cloud Migration', desc: 'End-to-end on-premise to cloud migrations with deployment validation.' },
  ];

  return (
    <section id="about" ref={ref} className={`about-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">
              Engineered for <span>reliability</span>
            </h2>
            <p>
              I'm a backend engineer at <strong>Tata Consultancy Services</strong>, deployed to <strong>Avis Budget Group</strong> — one of the world's largest vehicle rental companies. My work sits at the intersection of enterprise Java, data integrity, and operational excellence.
            </p>
            <p>
              I design and maintain batch processing systems that ingest, validate, transform, and persist data across multi-vendor pipelines. Every line of code I ship touches critical business operations, so reliability isn't a buzzword — it's a requirement.
            </p>
            <p>
              Outside production systems, I actively explore Generative AI tooling to reshape how developers work. I'm also a consistent LeetCode practitioner with 700+ problems solved, keeping my DSA fundamentals sharp.
            </p>
            <div className="about-chips">
              <span>Java Batch</span>
              <span>Oracle SQL</span>
              <span>Linux Production</span>
              <span>PGP Encryption</span>
              <span>AWS Cloud</span>
              <span>Agile / Jira</span>
            </div>
          </div>

          <div className="about-cards">
            {traits.map((t, i) => (
              <div key={t.title} className="trait-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="trait-icon">{t.icon}</span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
