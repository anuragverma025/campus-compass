import React from 'react';
import {
  CheckCircle2,
  Calendar,
  BookOpen,
  Briefcase,
  Code2,
  TrendingUp,
  Users,
  Terminal,
  Layers,
  ArrowRight,
  Shield,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import './HomePage.css';

export default function HomePage() {

  const coreModules = [
    {
      id: 'planner',
      icon: BookOpen,
      title: 'Academic Deadlines & Planner',
      tagline: 'Never miss another assignment, quiz, or project submission.',
      features: ['Prioritized assignment board', 'Exam countdown ticker', 'Course-wise organization'],
      status: 'Phase 2 Pipeline',
      statusVariant: 'info',
      owner: 'Member 1 & 2',
    },
    {
      id: 'calendar',
      icon: Calendar,
      title: 'Daily Schedules & Timetable',
      tagline: 'Class schedules, lab sessions, and club events in one place.',
      features: ['Dynamic weekly timetable', 'Recurring class reminders', 'Free-slot discovery'],
      status: 'Phase 2 Pipeline',
      statusVariant: 'info',
      owner: 'Member 2 & 3',
    },
    {
      id: 'opportunities',
      icon: Briefcase,
      title: 'Opportunities & Hackathons',
      tagline: 'Curated internships, scholarships, and technical challenges.',
      features: ['Application deadline tracker', 'Category filtering', 'Custom bookmarking'],
      status: 'Phase 2 Pipeline',
      statusVariant: 'warning',
      owner: 'Member 3 & 4',
    },
    {
      id: 'placement',
      icon: Code2,
      title: 'DSA & Placement Tracker',
      tagline: 'Structured practice logs for coding rounds and interview prep.',
      features: ['Topic-wise problem matrix', 'Revision intervals', 'Company target checklists'],
      status: 'Phase 2 Pipeline',
      statusVariant: 'warning',
      owner: 'Member 1 & 4',
    },
    {
      id: 'analytics',
      icon: TrendingUp,
      title: 'Goals & Progress Analytics',
      tagline: 'Visual insights into your academic milestones and habits.',
      features: ['Weekly completion metrics', 'Study streaks', 'Burnout warning flags'],
      status: 'Phase 3 Pipeline',
      statusVariant: 'neutral',
      owner: 'Full Team',
    },
  ];

  const teamAssignments = [
    {
      role: 'Member 1',
      title: 'Foundation & Integration Lead',
      focus: 'Project scaffolding, React Router configuration, build validation, and Phase releases.',
      files: 'src/app/, src/pages/, vite.config.js, package.json',
      badgeVariant: 'primary',
    },
    {
      role: 'Member 2',
      title: 'Design System & UI Components',
      focus: 'CSS design tokens, responsive typography, global theming, and reusable UI building blocks.',
      files: 'src/styles/, src/components/ui/',
      badgeVariant: 'info',
    },
    {
      role: 'Member 3',
      title: 'Navigation & App Shell',
      focus: 'App layout wrapper, responsive sidebar, top navigation bar, and collapsible controls.',
      files: 'src/components/layout/, layout stylesheets',
      badgeVariant: 'warning',
    },
    {
      role: 'Member 4',
      title: 'Documentation & QA Lead',
      focus: 'Project documentation, setup instructions, manual testing checklist, and verification logs.',
      files: 'docs/, README.md, test checklists',
      badgeVariant: 'success',
    },
  ];

  const foundationHighlights = [
    { label: 'Core Framework', value: 'React 19 + Vite 8 (Ultra-fast HMR)' },
    { label: 'Client Routing', value: 'React Router v7 (Ready for deep links)' },
    { label: 'Styling System', value: 'Maintainable CSS Custom Properties & Design Tokens' },
    { label: 'Data Architecture', value: 'Client-first (localStorage in Phase 2, Zero Backend)' },
    { label: 'Deployment Ready', value: 'Production Vite bundle verified & linted' },
  ];

  return (
    <div className="home" id="home-page">
      {/* Background radial glow */}
      <div className="home__glow-bg" aria-hidden="true" />

      {/* Hero Section */}
      <section className="home__hero container" aria-labelledby="hero-heading">
        <div className="home__hero-badge animate-fade-in">
          <Badge variant="primary" dot>
            Phase 1: Project Foundation & Collaboration
          </Badge>
        </div>

        <h1 id="hero-heading" className="home__title animate-fade-in">
          Navigate Your Campus Life with <span className="gradient-text">Campus Compass</span>
        </h1>

        <p className="home__subtitle animate-fade-in">
          The all-in-one frontend student assistant designed to streamline academic deadlines,
          timetables, internships, hackathons, and DSA placement preparation.
        </p>

        <div className="home__hero-cta animate-fade-in">
          <a href="#architecture-section">
            <Button variant="primary" size="lg" icon={Layers}>
              Explore Foundation
            </Button>
          </a>
          <a href="#team-section">
            <Button variant="secondary" size="lg" icon={Users}>
              Team Work Allocation
            </Button>
          </a>
        </div>

        {/* Foundation Metric Badges */}
        <div className="home__metrics-strip">
          <div className="home__metric-item">
            <CheckCircle2 size={18} className="home__metric-icon" />
            <span>React 19 & Vite 8 Initialized</span>
          </div>
          <div className="home__metric-item">
            <CheckCircle2 size={18} className="home__metric-icon" />
            <span>Client-Side Routing Ready</span>
          </div>
          <div className="home__metric-item">
            <CheckCircle2 size={18} className="home__metric-icon" />
            <span>CSS Token System Configured</span>
          </div>
          <div className="home__metric-item">
            <CheckCircle2 size={18} className="home__metric-icon" />
            <span>Multi-Member File Ownership Set</span>
          </div>
        </div>
      </section>

      {/* Foundation Architecture Section */}
      <section id="architecture-section" className="home__section container">
        <div className="home__section-header">
          <Badge variant="info">Architecture Baseline</Badge>
          <h2 className="home__section-title">Clean, Modular Frontend Structure</h2>
          <p className="home__section-desc">
            Designed to allow 4 student developers to build modules in parallel without merge conflicts.
          </p>
        </div>

        <div className="home__foundation-grid">
          <Card variant="glass" className="home__arch-card">
            <div className="home__arch-header">
              <Terminal size={22} className="home__arch-icon" />
              <h3>Foundation Specifications</h3>
            </div>
            <ul className="home__arch-list">
              {foundationHighlights.map((item, idx) => (
                <li key={idx} className="home__arch-item">
                  <span className="home__arch-label">{item.label}:</span>
                  <span className="home__arch-value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card variant="glass" className="home__arch-card">
            <div className="home__arch-header">
              <Shield size={22} className="home__arch-icon" />
              <h3>Phase 1 Quality Guarantees</h3>
            </div>
            <p className="home__arch-text">
              Zero backend or database requirement. No bloated dependencies. Verified Vite production
              build with 100% clean bundle compilation.
            </p>
            <div className="home__arch-status-box">
              <div className="home__pulse-dot" />
              <span>Production Build Status: <strong>PASSING (0 errors)</strong></span>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Modules Roadmap */}
      <section className="home__section container">
        <div className="home__section-header">
          <Badge variant="warning">Product Scope</Badge>
          <h2 className="home__section-title">Planned Application Modules</h2>
          <p className="home__section-desc">
            The five core areas Campus Compass will address as subsequent phases unfold.
          </p>
        </div>

        <div className="home__modules-grid">
          {coreModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.id} variant="interactive" className="home__module-card">
                <div className="home__module-top">
                  <div className="home__module-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <Badge variant={mod.statusVariant}>{mod.status}</Badge>
                </div>

                <h3 className="home__module-title">{mod.title}</h3>
                <p className="home__module-tagline">{mod.tagline}</p>

                <div className="home__module-features">
                  <span className="home__module-features-title">Planned Highlights:</span>
                  <ul>
                    {mod.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <ArrowRight size={12} className="home__feature-arrow" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="home__module-owner">
                  <span>Assigned:</span>
                  <span className="home__owner-name">{mod.owner}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Ownership Section */}
      <section id="team-section" className="home__section container">
        <div className="home__section-header">
          <Badge variant="success">Team Workflow</Badge>
          <h2 className="home__section-title">Role & File Ownership Distribution</h2>
          <p className="home__section-desc">
            Each team member owns distinct directories to eliminate git merge conflicts and ensure clear accountability.
          </p>
        </div>

        <div className="home__team-grid">
          {teamAssignments.map((member, idx) => (
            <Card key={idx} variant="default" className="home__team-card">
              <div className="home__team-header">
                <Badge variant={member.badgeVariant}>{member.role}</Badge>
                <h3 className="home__team-member-title">{member.title}</h3>
              </div>

              <p className="home__team-focus">{member.focus}</p>

              <div className="home__team-files">
                <span className="home__team-files-label">Primary File Ownership:</span>
                <code>{member.files}</code>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
