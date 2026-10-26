import React, { useState } from 'react';
import {
  Search,
  Bell,
  Mail,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
} from 'lucide-react';
import Button from './Button';
import Card from './Card';
import Badge from './Badge';
import Input from './Input';
import Modal from './Modal';
import Tabs from './Tabs';
import Dropdown from './Dropdown';
import './Showcase.css';

/**
 * Component Showcase & Developer Preview
 * Handled by: Member 2 (Design System & UI Components)
 * Isolated preview component demonstrating all design system building blocks.
 */
export default function Showcase() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState('md');

  // Input states
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  // Dropdown state
  const [selectedSemester, setSelectedSemester] = useState('fall-2026');

  // Button loading state
  const [isLoading, setIsLoading] = useState(false);

  // Dropdown options
  const semesterOptions = [
    { value: 'fall-2026', label: 'Fall Semester 2026', description: 'Active Term (Aug - Dec)' },
    { value: 'spring-2027', label: 'Spring Semester 2027', description: 'Upcoming Term (Jan - May)' },
    { value: 'summer-2027', label: 'Summer Term 2027', description: 'Accelerated Session' },
    { value: 'archive-2025', label: 'Fall 2025 (Archived)', description: 'Historical records', disabled: true },
  ];

  // Tab items
  const demoTabs = [
    {
      id: 'tab-overview',
      label: 'Overview',
      icon: Sparkles,
      badge: 'New',
      content: (
        <div className="showcase-tab-content">
          <p>
            The <strong>Campus Compass Design System</strong> provides accessible, cohesive,
            and high-performance UI primitives crafted for the Student Life Assistant.
          </p>
        </div>
      ),
    },
    {
      id: 'tab-tokens',
      label: 'Design Tokens',
      icon: Layers,
      content: (
        <div className="showcase-tab-content">
          <p>
            Standardized CSS custom properties for deep indigo palette, dark surfaces,
            spacing scale, typography weights, and accessible focus outlines.
          </p>
        </div>
      ),
    },
    {
      id: 'tab-notifications',
      label: 'Alerts',
      icon: Bell,
      badge: 3,
      content: (
        <div className="showcase-tab-content">
          <p>
            Semantic feedback badges (Success, Warning, Danger, Info) give students instant
            glanceable updates on coursework, deadlines, and placements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="showcase-wrapper">
      <header className="showcase-header">
        <Badge variant="primary" dot size="sm">
          Design System v1.0
        </Badge>
        <h1 className="showcase-title">Campus Compass UI Components</h1>
        <p className="showcase-subtitle">
          Interactive preview and usage guide for shared building blocks (Member 2 deliverables).
        </p>
      </header>

      {/* 1. BUTTONS */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>1. Button Component</h2>
          <p>Variants, sizing scale, loading indicators, and disabled behaviors.</p>
        </div>

        <Card className="showcase-card">
          <h3 className="showcase-subhead">Variants</h3>
          <div className="showcase-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <h3 className="showcase-subhead">Sizes</h3>
          <div className="showcase-row">
            <Button size="sm" variant="primary">Small (32px)</Button>
            <Button size="md" variant="primary">Medium (40px)</Button>
            <Button size="lg" variant="primary">Large (48px)</Button>
          </div>

          <h3 className="showcase-subhead">States & Icons</h3>
          <div className="showcase-row">
            <Button variant="primary" icon={Calendar}>With Icon</Button>
            <Button
              variant="secondary"
              loading={isLoading}
              loadingText="Saving..."
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }}
            >
              {isLoading ? 'Saving...' : 'Click to Load'}
            </Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="danger" disabled>Disabled Danger</Button>
          </div>
        </Card>
      </section>

      {/* 2. BADGES */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>2. Status Badges</h2>
          <p>Semantic tags to communicate status with accessible color contrast.</p>
        </div>

        <Card className="showcase-card">
          <h3 className="showcase-subhead">Semantic Variants</h3>
          <div className="showcase-row">
            <Badge variant="default">Default / Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>

          <h3 className="showcase-subhead">With Status Dot & Sizes</h3>
          <div className="showcase-row">
            <Badge variant="success" dot size="sm">Active (sm)</Badge>
            <Badge variant="success" dot size="md">Active (md)</Badge>
            <Badge variant="warning" dot size="md">Pending Review</Badge>
            <Badge variant="danger" dot size="md">Action Required</Badge>
            <Badge variant="info" dot size="md">In Progress</Badge>
          </div>
        </Card>
      </section>

      {/* 3. INPUTS */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>3. Form Inputs</h2>
          <p>Label/ID association, accessible helper text, validation errors, and prefix icons.</p>
        </div>

        <Card className="showcase-card">
          <div className="showcase-grid-2">
            <Input
              label="Course Search"
              placeholder="Search by course code or title..."
              icon={Search}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="E.g. CS101, Data Structures, Algorithms"
            />

            <Input
              label="Student Email Address"
              placeholder="student@university.edu"
              icon={Mail}
              required
              value={inputError ? 'invalid-email' : ''}
              error={inputError}
              helperText={!inputError ? "We'll send schedule notifications here." : undefined}
            />
          </div>

          <div className="showcase-row" style={{ marginTop: 'var(--space-4)' }}>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setInputError((prev) => (prev ? '' : 'Please enter a valid academic email address.'))}
            >
              Toggle Validation Error
            </Button>
            <Input
              placeholder="Disabled input..."
              disabled
              value="Read-only system value"
              className="showcase-inline-input"
            />
          </div>
        </Card>
      </section>

      {/* 4. DROPDOWN */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>4. Dropdown Selector</h2>
          <p>Keyboard-friendly options menu with listbox semantics and outside click dismiss.</p>
        </div>

        <Card className="showcase-card">
          <div className="showcase-grid-2">
            <div>
              <Dropdown
                label="Academic Semester"
                options={semesterOptions}
                value={selectedSemester}
                onChange={(val) => setSelectedSemester(val)}
              />
              <p className="showcase-note">
                Current selection: <code>{selectedSemester}</code>
              </p>
            </div>

            <div>
              <Dropdown
                label="Disabled State"
                options={semesterOptions}
                value="spring-2027"
                disabled
              />
              <p className="showcase-note">Disabled dropdown ignores interaction</p>
            </div>
          </div>
        </Card>
      </section>

      {/* 5. TABS */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>5. Tabs Component</h2>
          <p>Accessible tablist with Arrow keys / Home / End keyboard navigation.</p>
        </div>

        <Card className="showcase-card">
          <h3 className="showcase-subhead">Underline Variant (Default)</h3>
          <Tabs tabs={demoTabs} variant="underline" />

          <h3 className="showcase-subhead" style={{ marginTop: 'var(--space-6)' }}>
            Pills Variant
          </h3>
          <Tabs tabs={demoTabs} variant="pills" />
        </Card>
      </section>

      {/* 6. CARDS */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>6. Card Containers</h2>
          <p>Surfaces, borders, elevation depths, and hoverable micro-interactions.</p>
        </div>

        <div className="showcase-grid-3">
          <Card variant="default">
            <h4>Default Card</h4>
            <p>Clean card surface with subtle border and standard shadow.</p>
          </Card>
          <Card variant="interactive" hoverable>
            <h4>Interactive Card</h4>
            <p>Subtle translateY elevation and glow on hover. Clickable.</p>
          </Card>
          <Card variant="glass">
            <h4>Glass Card</h4>
            <p>Backdrop-filter blur with translucent surface styling.</p>
          </Card>
        </div>
      </section>

      {/* 7. MODAL */}
      <section className="showcase-section">
        <div className="showcase-section__header">
          <h2>7. Modal Dialog</h2>
          <p>Portal rendering, focus restoration, backdrop dismiss, and Escape listener.</p>
        </div>

        <Card className="showcase-card">
          <div className="showcase-row">
            <Button
              variant="primary"
              onClick={() => {
                setModalSize('md');
                setIsModalOpen(true);
              }}
            >
              Open Standard Modal (md)
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setModalSize('sm');
                setIsModalOpen(true);
              }}
            >
              Open Small Modal (sm)
            </Button>
          </div>
        </Card>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Academic Course"
          description="Register a new lecture or lab into your timetable."
          size={modalSize}
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                icon={CheckCircle2}
                onClick={() => setIsModalOpen(false)}
              >
                Confirm Course
              </Button>
            </>
          }
        >
          <div className="modal-demo-body">
            <Input
              label="Course Title"
              placeholder="e.g. Operating Systems"
              className="modal-demo-input"
            />
            <Input
              label="Course Code"
              placeholder="e.g. CS301"
              className="modal-demo-input"
            />
            <Dropdown
              label="Term"
              options={semesterOptions}
              value={selectedSemester}
              onChange={setSelectedSemester}
            />
            <div className="modal-demo-alert">
              <AlertTriangle size={18} />
              <span>Press <strong>Escape</strong> or click the backdrop to dismiss.</span>
            </div>
          </div>
        </Modal>
      </section>
    </div>
  );
}
