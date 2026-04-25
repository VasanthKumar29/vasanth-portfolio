import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Assistant System Engineer',
    subtitle: 'Java & SQL Developer',
    company: 'Tata Consultancy Services',
    client: 'deployed to Avis Budget Group',
    period: 'Aug 2024 – Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    bullets: [
      'Designed and maintained enterprise-grade Java batch applications for automated file ingestion, validation, transformation, and database persistence across multi-vendor pipelines.',
      'Engineered secure PGP encryption/decryption workflows for inbound and outbound file transfers involving sensitive customer PII.',
      'Developed and optimized complex Oracle stored procedures, functions, and queries using execution plan analysis and indexing strategies.',
      'Performed deep production troubleshooting on Linux servers — log analysis and root cause investigation for critical batch workflows.',
      'Executed end-to-end migration of applications and databases from on-premise infrastructure to cloud, including deployment validation.',
      'Leveraged Amazon Q and Kiro (GenAI tools) to accelerate code development, optimize SQL queries, and automate debugging workflows.',
      'Tracked user stories in Jira; participated in Agile sprint planning, reviews, and retrospectives within cross-functional teams.',
    ],
    tech: ['Java', 'Oracle SQL', 'PGP', 'Linux', 'AWS', 'Jira', 'Amazon Q', 'Kiro'],
  },
];

const internships = [
  {
    company: 'Tata Consultancy Services',
    period: 'Feb – Apr 2024',
    role: 'IoT Intern',
    type: 'Internship',
    description: '3-month in-house internship under the guidance of experienced IoT practitioners at TCS. Developed a custom Alexa Skills project integrating AWS IoT Core for voice-controlled home automation.',
    highlights: [
      'Designed and developed custom Alexa Skills for voice-controlled device automation',
      'Integrated AWS IoT Core and Lambda for backend processing and real-time device communication',
      'Worked alongside experienced IoT professionals, gaining hands-on exposure to enterprise-grade development workflows',
    ],
    tech: ['Python', 'AWS IoT Core', 'Alexa Skills Kit', 'Lambda', 'MQTT'],
  },
  {
    company: 'BSNL',
    period: 'Jan 2023',
    role: 'In-plant Training',
    type: 'Training',
    description: 'Gained practical exposure to telecom infrastructure, focusing on core networking concepts including OSI model architecture, TCP/IP protocol stack, and data transmission fundamentals.',
    highlights: [
      'Studied the OSI 7-layer model — Physical, Data Link, Network, Transport, Session, Presentation, and Application layers',
      'Explored TCP and UDP transport protocols, understanding socket communication, flow control, and congestion management',
      'Hands-on with BSNL switching equipment and structured cabling, understanding signal propagation and packet routing',
    ],
    tech: ['OSI Model', 'TCP/IP', 'UDP', 'Network Routing', 'Structured Cabling'],
  },
  {
    company: 'Roots Industry Ltd',
    period: 'Jun 2020',
    role: 'In-plant Training',
    type: 'Training',
    description: 'Industrial exposure at a manufacturing facility specializing in horn systems. Gained end-to-end understanding of horn production — from coil winding and PCB assembly to powder coating and final quality checks.',
    highlights: [
      'Learned horn manufacturing fundamentals covering both mechanical and electronic horn systems',
      'Hands-on experience with coil winding, PCB assembly, and electronic circuit troubleshooting',
      'Observed powder coating, vibration mechanism calibration, assembly line operations, and manual quality intervention processes',
    ],
    tech: ['Coil Winding', 'PCB Assembly', 'Powder Coating', 'Assembly Line', 'Quality Control'],
  },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className={`exp-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-label">02 — Experience</div>
        <h2 className="section-title">Where I've <span>worked</span></h2>

        <div className="exp-layout">
          {experiences.map((exp) => (
            <div key={exp.company} className="exp-card">
              <div className="exp-header">
                <div className="exp-meta">
                  <span className="exp-type">{exp.type}</span>
                  <span className="exp-period">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {exp.period}
                  </span>
                  <span className="exp-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {exp.location}
                  </span>
                </div>
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-subtitle">{exp.subtitle}</p>
                  <div className="exp-company">
                    <strong>{exp.company}</strong>
                    <span className="exp-client">— {exp.client}</span>
                  </div>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                    <span className="bullet-arrow">→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tech.map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Internships */}
          <div className="internship-section">
            <h3 className="internship-title">Internships & Training</h3>
            <div className="internship-grid">
              {internships.map((intern) => (
                <div key={intern.company} className="internship-card">
                  <div className="internship-card-header">
                    <div>
                      <div className="intern-type-badge">{intern.type}</div>
                      <div className="intern-company">{intern.company}</div>
                      <div className="intern-role">{intern.role}</div>
                    </div>
                    <div className="intern-period">{intern.period}</div>
                  </div>
                  <p className="intern-description">{intern.description}</p>
                  <ul className="intern-highlights">
                    {intern.highlights.map((h, k) => (
                      <li key={k}>
                        <span className="intern-bullet">▹</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="intern-tech">
                    {intern.tech.map(t => (
                      <span key={t} className="intern-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
