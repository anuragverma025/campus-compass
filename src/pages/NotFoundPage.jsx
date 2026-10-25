import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import './NotFoundPage.css';

/**
 * NotFoundPage (404)
 * Handles undefined routes gracefully with a return home action.
 */
export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__card">
        <div className="not-found__icon-wrapper">
          <Compass size={48} className="not-found__icon" />
        </div>
        <h1 className="not-found__title">404 — Waypoint Not Found</h1>
        <p className="not-found__message">
          Your compass couldn't find this destination. Let's head back to the main campus base.
        </p>
        <Link to="/">
          <Button variant="primary" icon={ArrowLeft}>
            Return to Campus Compass
          </Button>
        </Link>
      </div>
    </div>
  );
}
