import React from 'react';
import './Badge.css';

/**
 * Reusable Badge Component
 * Semantic variants: 'default' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
 * Sizes: 'sm' | 'md'
 */
export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  ...props
}) {
  // Normalize 'neutral' to 'default' or vice versa for semantic consistency
  const normalizedVariant = variant === 'error' ? 'danger' : variant;

  return (
    <span
      className={`badge badge--${normalizedVariant} badge--${size} ${className}`}
      {...props}
    >
      {dot && <span className="badge__dot" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
