import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * Variants: 'default' | 'interactive' | 'glass' | 'elevated' | 'outline'
 * Padding options: 'none' | 'sm' | 'md' | 'lg'
 */
export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) {
  const isInteractive = hoverable || variant === 'interactive' || Boolean(onClick);

  return (
    <div
      className={`card card--${variant} card--padding-${padding} ${
        isInteractive ? 'card--interactive card--clickable' : ''
      } ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}
