import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * Variants: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'neutral'
 */
export default function Badge({
  children,
  variant = 'primary',
  dot = false,
  className = '',
}) {
  return (
    <span className={`badge badge--${variant} ${className}`}>
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  );
}
