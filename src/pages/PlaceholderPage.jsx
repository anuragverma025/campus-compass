import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import './PlaceholderPage.css';

/**
 * Reusable Minimal Placeholder Page
 * Handled by: Member 1 (Project foundation, routing, integration)
 * Ensures navigation routes resolve cleanly without implementing future domain functionality prematurely.
 */
export default function PlaceholderPage({
  title,
  description,
  icon: Icon,
  moduleName,
  phase = 'Phase 2 Pipeline',
}) {
  return (
    <div className="placeholder-page container animate-fade-in">
      <div className="placeholder-page__header">
        <Link to="/" className="placeholder-page__back-link">
          <ArrowLeft size={16} />
          <span>Back to Overview</span>
        </Link>
        <div className="placeholder-page__title-row">
          <div className="placeholder-page__icon-box">
            {Icon && <Icon size={28} className="placeholder-page__icon" />}
          </div>
          <div>
            <div className="placeholder-page__meta-badge">
              <Badge variant="warning" dot>
                {phase}
              </Badge>
            </div>
            <h1 className="placeholder-page__title">{title}</h1>
            <p className="placeholder-page__desc">{description}</p>
          </div>
        </div>
      </div>

      <Card variant="glass" className="placeholder-page__card">
        <div className="placeholder-page__card-content">
          <div className="placeholder-page__status-icon">
            <Clock size={36} />
          </div>
          <h2>{moduleName} Scheduled for Implementation</h2>
          <p>
            The navigation shell and route connections are active. Core features for{' '}
            <strong>{title}</strong> will be implemented incrementally in upcoming project phases.
          </p>
          <div className="placeholder-page__footer-badge">
            <ShieldCheck size={16} />
            <span>Navigation active & verified</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
