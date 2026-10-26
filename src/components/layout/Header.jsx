import React from 'react';
import { Compass, Sparkles, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { APP_CONFIG } from '../../utils/config';
import './Header.css';

/**
 * Header Component
 * Campus Compass Top Bar with accessible mobile drawer trigger
 * Handled by: Member 3 (App Shell & Navigation Lead)
 */
export default function Header({ onToggleMobileMenu, isMobileMenuOpen = false }) {
  return (
    <header className="header" id="main-header">
      <div className="container header__container">
        <div className="header__left">
          <button
            type="button"
            className="header__mobile-toggle"
            onClick={onToggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="app-sidebar"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="header__brand" id="brand-logo-link">
            <div className="header__icon-wrapper">
              <Compass className="header__brand-icon" size={24} />
            </div>
            <div className="header__title-group">
              <span className="header__title">{APP_CONFIG.appName}</span>
              <span className="header__subtitle">{APP_CONFIG.tagline}</span>
            </div>
          </Link>
        </div>

        <div className="header__meta">
          <Badge variant="primary" dot>
            Phase 1 Active
          </Badge>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="header__tag"
          >
            <Sparkles size={14} className="header__sparkle" />
            v{APP_CONFIG.version}
          </a>
        </div>
      </div>
    </header>
  );
}
