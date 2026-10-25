import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer Component
 * Phase 1 foundational footer displaying project authorship and team workflow
 */
export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="container footer__container">
        <div className="footer__brand-side">
          <div className="footer__logo">
            <Compass size={20} className="footer__compass" />
            <span className="footer__title">Campus Compass</span>
          </div>
          <p className="footer__desc">
            The Student Life Assistant — built collaboratively by students for students.
          </p>
        </div>

        <div className="footer__info-side">
          <div className="footer__badge">
            <ShieldCheck size={16} />
            <span>Phase 1: Foundation & Team Work</span>
          </div>
          <p className="footer__copyright">
            &copy; {CURRENT_YEAR} Campus Compass Team. Apache 2.0 Licensed.
          </p>
        </div>
      </div>
    </footer>
  );
}
