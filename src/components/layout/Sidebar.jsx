import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Compass,
  LayoutDashboard,
  BookOpen,
  Calendar,
  Briefcase,
  Code2,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';
import { APP_CONFIG } from '../../utils/config';
import './Sidebar.css';

/**
 * Navigation items configuration
 * Handled by: Member 3 (App Shell & Navigation Lead)
 */
const NAV_ITEMS = [
  {
    name: 'Overview',
    path: '/',
    icon: Compass,
    end: true,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    badge: 'Phase 2',
  },
  {
    name: 'Academic Planner',
    path: '/planner',
    icon: BookOpen,
    badge: 'Phase 2',
  },
  {
    name: 'Class Timetable',
    path: '/timetable',
    icon: Calendar,
    badge: 'Phase 2',
  },
  {
    name: 'Opportunities Hub',
    path: '/opportunities',
    icon: Briefcase,
    badge: 'Phase 2',
  },
  {
    name: 'Placement Tracker',
    path: '/placement',
    icon: Code2,
    badge: 'Phase 2',
  },
];

export default function Sidebar({
  isOpen,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}) {
  // Handle keyboard Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'sidebar-backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Sidebar */}
      <aside
        id="app-sidebar"
        className={`sidebar ${isOpen ? 'sidebar--open' : ''} ${isCollapsed ? 'sidebar--collapsed' : ''}`}
        aria-label="Main Navigation"
      >
        {/* Mobile-only Drawer Header */}
        <div className="sidebar__mobile-header">
          <div className="sidebar__brand">
            <div className="sidebar__brand-icon-wrap">
              <Compass size={20} className="sidebar__brand-icon" />
            </div>
            <span className="sidebar__brand-title">{APP_CONFIG.appName}</span>
          </div>
          <button
            type="button"
            className="sidebar__close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="sidebar__content">
          <div className="sidebar__section-title">
            {isCollapsed ? '•••' : 'Core Navigation'}
          </div>

          <nav className="sidebar__nav" role="navigation">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                  }
                  title={isCollapsed ? item.name : undefined}
                >
                  <Icon size={20} className="sidebar__link-icon" />
                  <span className="sidebar__link-text">{item.name}</span>
                  {item.badge && !isCollapsed && (
                    <span className="sidebar__link-badge">{item.badge}</span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="sidebar__footer">
          {!isCollapsed ? (
            <div className="sidebar__info">
              <span className="sidebar__pulse-dot" />
              <span className="sidebar__version">
                <Sparkles size={12} className="sidebar__sparkle" />
                v{APP_CONFIG.version}
              </span>
            </div>
          ) : (
            <div className="sidebar__pulse-dot sidebar__pulse-dot--alone" />
          )}

          {onToggleCollapse && (
            <button
              type="button"
              className="sidebar__collapse-btn"
              onClick={onToggleCollapse}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
