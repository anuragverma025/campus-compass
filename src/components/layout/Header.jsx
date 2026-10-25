import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import { APP_CONFIG } from '../../utils/config';
import './Header.css';

/**
 * Header Component
 * Campus Compass Top Bar - Member 3 will extend with dynamic shell navigation
 */
export default function Header() {
  return (
    <header className="header" id="main-header">
      <div className="container header__container">
        <Link to="/" className="header__brand" id="brand-logo-link">
          <div className="header__icon-wrapper">
            <Compass className="header__brand-icon" size={24} />
          </div>
          <div className="header__title-group">
            <span className="header__title">{APP_CONFIG.appName}</span>
            <span className="header__subtitle">{APP_CONFIG.tagline}</span>
          </div>
        </Link>

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
