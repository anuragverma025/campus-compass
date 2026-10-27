import React, { useState, useRef, useEffect, useId, useMemo } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './Dropdown.css';

/**
 * Reusable Accessible Dropdown Component
 * Supports option lists, keyboard navigation (Arrows/Enter/Escape),
 * click-outside dismiss, custom triggers, and accessible ARIA listbox roles.
 */
export default function Dropdown({
  options = [],
  value,
  onChange,
  onSelect,
  placeholder = 'Select an option...',
  label,
  disabled = false,
  trigger,
  align = 'left',
  size = 'md',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const generatedId = useId();
  const listId = `dropdown-list-${generatedId}`;
  const labelId = label ? `dropdown-label-${generatedId}` : undefined;

  // Normalize options to object format
  const normalizedOptions = useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === 'string' || typeof opt === 'number') {
        return { value: opt, label: String(opt) };
      }
      return opt;
    });
  }, [options]);

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  function openDropdown() {
    const selectedIdx = normalizedOptions.findIndex((opt) => opt.value === value);
    setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0);
    setIsOpen(true);
  }

  function closeDropdown() {
    setIsOpen(false);
    setHighlightedIndex(-1);
  }

  function toggleDropdown() {
    if (disabled) return;
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function handleSelect(option) {
    if (option.disabled) return;
    onChange?.(option.value);
    onSelect?.(option);
    closeDropdown();
    triggerRef.current?.focus();
  }

  function handleKeyDown(event) {
    if (disabled) return;

    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDropdown();
      }
      return;
    }

    const enabledOptions = normalizedOptions.map((opt, i) => ({ opt, index: i })).filter((x) => !x.opt.disabled);
    const currentEnabledPos = enabledOptions.findIndex((x) => x.index === highlightedIndex);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextPos = (currentEnabledPos + 1) % enabledOptions.length;
      setHighlightedIndex(enabledOptions[nextPos]?.index ?? 0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevPos = (currentEnabledPos - 1 + enabledOptions.length) % enabledOptions.length;
      setHighlightedIndex(enabledOptions[prevPos]?.index ?? 0);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (highlightedIndex >= 0 && normalizedOptions[highlightedIndex]) {
        handleSelect(normalizedOptions[highlightedIndex]);
      }
    } else if (event.key === 'Escape' || event.key === 'Tab') {
      closeDropdown();
      if (event.key === 'Escape') {
        event.preventDefault();
        triggerRef.current?.focus();
      }
    }
  }

  return (
    <div
      ref={dropdownRef}
      className={`dropdown-container dropdown-container--${size} ${disabled ? 'dropdown-container--disabled' : ''} ${className}`}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <span id={labelId} className="dropdown-label">
          {label}
        </span>
      )}

      {trigger ? (
        <div
          ref={triggerRef}
          onClick={toggleDropdown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listId}
          aria-labelledby={labelId}
          className="dropdown-custom-trigger"
        >
          {trigger({ isOpen, selectedOption, disabled })}
        </div>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          onClick={toggleDropdown}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listId}
          aria-labelledby={labelId}
          className={`dropdown-trigger ${isOpen ? 'dropdown-trigger--open' : ''}`}
        >
          <span className="dropdown-trigger__content">
            {selectedOption?.icon && (
              <span className="dropdown-trigger__icon" aria-hidden="true">
                <selectedOption.icon size={size === 'sm' ? 14 : 16} />
              </span>
            )}
            <span className={`dropdown-trigger__text ${!selectedOption ? 'dropdown-trigger__placeholder' : ''}`}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </span>
          <ChevronDown
            size={16}
            className={`dropdown-trigger__chevron ${isOpen ? 'dropdown-trigger__chevron--open' : ''}`}
            aria-hidden="true"
          />
        </button>
      )}

      {isOpen && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          tabIndex={-1}
          className={`dropdown-menu dropdown-menu--${align}`}
        >
          {normalizedOptions.length === 0 ? (
            <li className="dropdown-empty">No options available</li>
          ) : (
            normalizedOptions.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;
              const OptionIcon = option.icon;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled ? 'true' : undefined}
                  className={`dropdown-item ${isSelected ? 'dropdown-item--selected' : ''} ${
                    isHighlighted ? 'dropdown-item--highlighted' : ''
                  } ${option.disabled ? 'dropdown-item--disabled' : ''}`}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
                >
                  <div className="dropdown-item__main">
                    {OptionIcon && (
                      <span className="dropdown-item__icon" aria-hidden="true">
                        <OptionIcon size={16} />
                      </span>
                    )}
                    <div className="dropdown-item__text-wrap">
                      <span className="dropdown-item__label">{option.label}</span>
                      {option.description && (
                        <span className="dropdown-item__description">{option.description}</span>
                      )}
                    </div>
                  </div>

                  {isSelected && (
                    <Check size={16} className="dropdown-item__check" aria-hidden="true" />
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
