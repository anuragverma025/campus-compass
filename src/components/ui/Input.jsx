import React, { useId } from 'react';
import './Input.css';

/**
 * Reusable Accessible Input Component
 * Supports labels, helper text, error messages, prefix/suffix icons, and sizes.
 */
export default function Input({
  label,
  id: customId,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  helperText,
  icon: Icon,
  endIcon: EndIcon,
  size = 'md',
  className = '',
  inputClassName = '',
  ...props
}) {
  const generatedId = useId();
  const inputId = customId || `input-${generatedId}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  // Determine which description ID to attach for accessibility
  const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`input-group input-group--${size} ${disabled ? 'input-group--disabled' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-group__label">
          {label}
          {required && <span className="input-group__required" aria-hidden="true">*</span>}
        </label>
      )}

      <div className={`input-control ${error ? 'input-control--error' : ''} ${Icon ? 'input-control--has-start-icon' : ''} ${EndIcon ? 'input-control--has-end-icon' : ''}`}>
        {Icon && (
          <span className="input-control__icon input-control__icon--start" aria-hidden="true">
            <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
          </span>
        )}

        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`input-control__field ${inputClassName}`}
          {...props}
        />

        {EndIcon && (
          <span className="input-control__icon input-control__icon--end" aria-hidden="true">
            <EndIcon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
          </span>
        )}
      </div>

      {error ? (
        <p id={errorId} className="input-group__feedback input-group__feedback--error" role="alert">
          {typeof error === 'string' ? error : 'This field is invalid'}
        </p>
      ) : helperText ? (
        <p id={helperId} className="input-group__feedback input-group__feedback--helper">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
