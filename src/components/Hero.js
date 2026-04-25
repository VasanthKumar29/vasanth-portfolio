import React, { useEffect, useRef, useState } from 'react';
import vasanthImg from '../assets/vasanth.jpeg';
import './Hero.css';

const roles = ['Backend Java Engineer', 'SQL Developer', 'Cloud Migration Expert', 'GenAI Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 80;

    typingRef.current = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (isDeleting && displayed.length === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(typingRef.current);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background grid */}
      <div className="hero-grid" />
      <div className="hero-gradient" />

      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-inner">
        {/* Left: Text */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name animate-fade-in-up delay-1">
            Vasanth<br />
            <span className="name-highlight">Kumar BM</span>
          </h1>

          <div className="hero-role animate-fade-in-up delay-2">
            <span className="role-prefix">I build </span>
            <span className="role-typed">{displayed}</span>
            <span className="cursor" />
          </div>

          <p className="hero-description animate-fade-in-up delay-3">
            Backend-focused engineer at <strong>TCS × Avis Budget Group</strong> — crafting secure enterprise batch systems, optimizing Oracle SQL at scale, and accelerating delivery with Generative AI tools.
          </p>

          <div className="hero-stats animate-fade-in-up delay-4">
            <div className="stat">
              <span className="stat-number">700+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">9.01</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years at TCS</span>
            </div>
          </div>

          <div className="hero-ctas animate-fade-in-up delay-5">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Let's Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('experience')}>
              View Work
            </button>
          </div>

          <div className="hero-social animate-fade-in-up delay-6">
            <a href="https://linkedin.com/in/VasanthKumar" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://github.com/vasanthkumar29" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/Vasanth_Kumar_29_19/" target="_blank" rel="noreferrer" className="social-link" aria-label="LeetCode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.129a5.083 5.083 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
            <a href="mailto:vasanthkumarbm29@gmail.com" className="social-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-image-wrap animate-fade-in-up delay-3">
          <div className="hero-image-card">
            <div className="image-glow" />
            <img src={vasanthImg} alt="Vasanth Kumar BM" className="hero-photo" />
            <div className="image-badge">
              <span className="badge-icon">☕</span>
              Java Dev
            </div>
          </div>
          <div className="hero-tech-stack">
            {['Java', 'Oracle SQL', 'Python', 'AWS', 'React'].map((t, i) => (
              <span key={t} className="tech-pill" style={{ animationDelay: `${i * 0.1 + 0.8}s` }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
