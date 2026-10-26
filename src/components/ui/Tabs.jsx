import React, { useState, useRef, useId } from 'react';
import './Tabs.css';

/**
 * Reusable Accessible Tabs Component
 * Supports keyboard navigation (Left/Right/Home/End), custom icons, badges,
 * controlled or uncontrolled active state, and semantic ARIA tablist patterns.
 *
 * @param {Array<{id: string, label: string, icon?: any, badge?: string|number, content?: React.ReactNode, disabled?: boolean}>} tabs
 */
export default function Tabs({
  tabs = [],
  activeTab: controlledActiveTab,
  defaultTab,
  onChange,
  variant = 'underline', // 'underline' | 'pills' | 'enclosed'
  className = '',
  tabListClassName = '',
  tabContentClassName = '',
}) {
  const generatedId = useId();
  const tabRefs = useRef({});

  // Support both controlled and uncontrolled states
  const initialTab = defaultTab || (tabs.length > 0 ? tabs[0].id : '');
  const [internalActiveTab, setInternalActiveTab] = useState(initialTab);
  const currentTabId = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const currentTab = tabs.find((t) => t.id === currentTabId) || tabs[0];

  function handleTabSelect(tabId, isDisabled) {
    if (isDisabled) return;
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  }

  function handleKeyDown(event, currentIndex) {
    const enabledTabs = tabs.filter((t) => !t.disabled);
    const enabledIndex = enabledTabs.findIndex((t) => t.id === tabs[currentIndex].id);
    let nextTab = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (enabledIndex + 1) % enabledTabs.length;
      nextTab = enabledTabs[nextIndex];
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (enabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
      nextTab = enabledTabs[prevIndex];
    } else if (event.key === 'Home') {
      event.preventDefault();
      nextTab = enabledTabs[0];
    } else if (event.key === 'End') {
      event.preventDefault();
      nextTab = enabledTabs[enabledTabs.length - 1];
    }

    if (nextTab) {
      handleTabSelect(nextTab.id, false);
      const ref = tabRefs.current[nextTab.id];
      if (ref) {
        ref.focus();
      }
    }
  }

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={`tabs-container tabs-container--${variant} ${className}`}>
      <div
        className={`tabs-list tabs-list--${variant} ${tabListClassName}`}
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === currentTabId;
          const tabElementId = `tab-${generatedId}-${tab.id}`;
          const panelElementId = `panel-${generatedId}-${tab.id}`;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              id={tabElementId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelElementId}
              aria-disabled={tab.disabled ? 'true' : undefined}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              className={`tab-item ${isActive ? 'tab-item--active' : ''} ${
                tab.disabled ? 'tab-item--disabled' : ''
              }`}
              onClick={() => handleTabSelect(tab.id, tab.disabled)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {Icon && <Icon className="tab-item__icon" size={16} />}
              <span className="tab-item__label">{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={`tab-item__badge ${isActive ? 'tab-item__badge--active' : ''}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {currentTab && currentTab.content && (
        <div
          id={`panel-${generatedId}-${currentTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${generatedId}-${currentTab.id}`}
          tabIndex={0}
          className={`tab-panel ${tabContentClassName}`}
        >
          {currentTab.content}
        </div>
      )}
    </div>
  );
}
