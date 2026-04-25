import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>VK<span className="logo-bracket">/&gt;</span>
          </span>
          <span className="footer-copy">© {new Date().getFullYear()} Vasanth Kumar BM. All rights reserved.</span>
        </div>
        <div className="footer-center">
          <span className="footer-made">Built with React & ❤️</span>
        </div>
        <div className="footer-right">
          <a href="https://github.com/vasanthkumar29" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/VasanthKumar" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:vasanthkumarbm29@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
