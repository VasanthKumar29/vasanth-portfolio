import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 72 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Java Batch Processing', level: 88 },
      { name: 'PGP Encryption', level: 85 },
      { name: 'REST API Integration', level: 80 },
      { name: 'Production Support', level: 86 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄',
    skills: [
      { name: 'Oracle SQL', level: 90 },
      { name: 'Stored Procedures', level: 88 },
      { name: 'Query Optimization', level: 87 },
      { name: 'Performance Tuning', level: 85 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Linux Server', level: 82 },
      { name: 'Cloud Migration', level: 78 },
      { name: 'Deployment Support', level: 80 },
    ],
  },
  {
    category: 'Tools',
    icon: '🔧',
    skills: [
      { name: 'Jira / Agile', level: 85 },
      { name: 'Amazon Q / Kiro', level: 82 },
      { name: 'Bitbucket / Git', level: 78 },
      { name: 'Oracle SQL Developer', level: 88 },
    ],
  },
  {
    category: 'Frontend / Data',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 72 },
      { name: 'Python (pandas)', level: 68 },
      { name: 'ETL Concepts', level: 75 },
    ],
  },
];

function SkillBar({ name, level, visible }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const highlights = ['Java', 'Oracle SQL', 'Python', 'AWS', 'React.js', 'Linux', 'PGP', 'Jira', 'Amazon Q', 'Postman', 'WinSCP', 'PuTTY', 'Bitbucket', 'FileZilla', 'Kiro'];

  return (
    <section id="skills" ref={ref} className={`skills-section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-label">03 — Skills</div>
        <h2 className="section-title">Technical <span>arsenal</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-group" style={{ animationDelay: `${gi * 0.1}s` }}>
              <div className="group-header">
                <span className="group-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="group-skills">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} visible={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cloud">
          <h3 className="cloud-title">All Technologies</h3>
          <div className="cloud-pills">
            {highlights.map((t, i) => (
              <span key={t} className="cloud-pill" style={{ animationDelay: `${i * 0.04}s` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
