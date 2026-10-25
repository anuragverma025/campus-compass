import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * Variants: 'default' | 'interactive' | 'glass'
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      className={`card card--${variant} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
