import React, { useEffect, useRef, useId } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './Modal.css';

/**
 * Reusable Accessible Modal Component
 * Supports controlled open state, backdrop dismiss, Escape key dismiss,
 * body scroll lock, focus restoration, and accessible dialog semantics.
 */
export default function Modal({
  isOpen = false,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
}) {
  const generatedId = useId();
  const titleId = `modal-title-${generatedId}`;
  const descId = description ? `modal-desc-${generatedId}` : undefined;
  const dialogRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape' && closeOnEscape) {
        event.stopPropagation();
        onClose?.();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  // Lock body scroll and manage focus
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus the dialog or the close button inside it
      requestAnimationFrame(() => {
        if (dialogRef.current) {
          dialogRef.current.focus();
        }
      });

      return () => {
        document.body.style.overflow = originalOverflow;
        if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget && closeOnBackdropClick) {
      onClose?.();
    }
  }

  const modalContent = (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      data-testid="modal-overlay"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={descId}
        tabIndex={-1}
        className={`modal-dialog modal-dialog--${size} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-header__text">
            {title && (
              <h2 id={titleId} className="modal-title">
                {title}
              </h2>
            )}
            {description && (
              <p id={descId} className="modal-description">
                {description}
              </p>
            )}
          </div>

          {showCloseButton && (
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Render into body via portal if document is defined
  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
}
