import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Generative AI Chat Platform',
    period: 'Jun 2024',
    description: 'A full-stack AI-powered web application integrating the Gemini API for intelligent conversational backend processing. Features asynchronous API handling with structured service-layer integration.',
    highlights: [
      'Integrated Gemini API for intelligent conversational backend processing',
      'Built responsive React.js front-end using modular component architecture and API-driven state management',
      'Implemented asynchronous API handling and structured service-layer integration for seamless client–server communication',
    ],
    tech: ['React.js', 'Gemini API', 'JavaScript', 'REST API', 'Async/Await'],
    gradient: 'linear-gradient(135deg, #38bdf8, #818cf8)',
    icon: '🤖',
    featured: true,
    repoUrl: 'https://github.com/VasanthKumar29/Gemini_Clone',
  },
  {
    title: 'Custom Alexa Skills — Home Automation',
    period: 'Mar 2024',
    description: 'Voice-controlled home appliance automation system using custom Alexa Skills integrated with AWS IoT Core for real-time device communication.',
    highlights: [
      'Architected custom Alexa Skills integrated with AWS IoT Core for voice-controlled automation',
      'Developed backend logic in Python for intent recognition and real-time device communication',
      'Configured secure cloud-to-device interaction workflows using AWS services',
    ],
    tech: ['Python', 'AWS IoT Core', 'Alexa Skills Kit', 'Lambda', 'MQTT'],
    gradient: 'linear-gradient(135deg, #fb923c, #f43f5e)',
    icon: '🏠',
    featured: false,
    repoUrl: 'https://github.com/VasanthKumar29/Custom_Alexa_Skills_Python',
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className={`projects-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-label">04 — Projects</div>
        <h2 className="section-title">Things I've <span>built</span></h2>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`project-card ${proj.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="project-header">
                <div className="project-icon" style={{ background: proj.gradient }}>
                  {proj.icon}
                </div>
                <div className="project-title-wrap">
                  {proj.featured && <span className="featured-badge">Featured</span>}
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-period">{proj.period}</span>
                </div>
              </div>

              <p className="project-desc">{proj.description}</p>

              <ul className="project-highlights">
                {proj.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="highlight-dot" style={{ background: proj.gradient }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {proj.tech.map(t => (
                  <span key={t} className="project-tech-pill">{t}</span>
                ))}
              </div>

              {proj.repoUrl && (
                <div className="project-actions">
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    View Source
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
