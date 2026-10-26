import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * Supported variants: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
 * Supported sizes: 'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  loadingText,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${loading ? 'btn--loading' : ''} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading ? 'true' : undefined}
      {...props}
    >
      {loading ? (
        <span className="btn__spinner" aria-hidden="true" />
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon className="btn__icon" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        )
      )}

      {loading && loadingText ? (
        <span>{loadingText}</span>
      ) : (
        children && <span>{children}</span>
      )}

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="btn__icon" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      )}
    </button>
  );
}
