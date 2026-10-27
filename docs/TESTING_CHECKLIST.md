# Campus Compass — Testing & Quality Assurance Checklist

**Maintained by:** Member 4 (Documentation & QA Lead)  
**Project Phase:** Phase 1 (Foundation & Setup)  
**Target Release:** `v0.1.0-alpha`

This document defines the formal QA testing checklist for **Campus Compass — The Student Life Assistant**. All tests follow a standardized verification protocol to ensure system stability, cross-device responsiveness, accessibility compliance, and regression-free merges across team contributions.

---

## Testing Protocol & Status Definitions

- **Pass:** The test case was actively executed and met 100% of the acceptance criteria with zero fatal defects.
- **Fail:** The test case was actively executed and produced an unexpected result, visual defect, console error, or broken behavior.
- **Blocked:** The test cannot be executed because a prerequisite component or environment dependency is missing or defective.
- **Not Run:** An implemented feature or configuration test that is defined but has not yet been executed in the current QA cycle.
- **Pending (Future Scope):** Tests written in advance for Phase 2 or Phase 3 feature modules that have not yet been implemented. *Under no circumstances are planned tests marked as Pass.*

---

## Category A: Project Setup & Build Environment

| Test ID | Feature / Area | Steps to Execute | Expected Result | Status | Notes / Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-SET-01** | Dependency Installation | 1. Clone fresh repository.<br>2. Run `npm install`. | All packages resolve without errors or high-severity vulnerabilities. `node_modules` is populated cleanly. | Not Run | Verify lockfile integrity with `package-lock.json`. |
| **TC-SET-02** | Development Server Startup | 1. Run `npm run dev`.<br>2. Observe terminal output.<br>3. Note startup duration and local server URL. | Local development server starts in `< 500ms` at `http://localhost:5173/` with Hot Module Replacement (HMR) active. | Not Run | Check for port conflict fallback. |
| **TC-SET-03** | Application Load (Zero Fatal Errors) | 1. Launch browser to `http://localhost:5173/`.<br>2. Open DevTools Console.<br>3. Inspect initial render. | Application mounts root DOM node (`#root`) cleanly without runtime crashes, fatal exceptions, or React warnings. | Not Run | DevTools Console must show 0 errors. |
| **TC-SET-04** | Production Build Execution | 1. Run `npm run build` from project root.<br>2. Inspect exit code.<br>3. Check output directory `dist/`. | Vite bundles code into `dist/` with exit code 0. Chunks are minified and assets compiled cleanly. | Not Run | Check bundle asset sizes and gzip breakdown. |
| **TC-SET-05** | Static Code Linting | 1. Run `npm run lint` from project root. | Oxlint scans all JS/JSX files and exits with 0 errors and 0 warnings. | Not Run | Enforces code formatting and prevents syntax regressions. |

---

## Category B: Navigation & Client Routing

| Test ID | Feature / Area | Steps to Execute | Expected Result | Status | Notes / Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-NAV-01** | Root Route (`/`) Loading | 1. Open browser to `http://localhost:5173/`.<br>2. Observe rendered view. | `HomePage` component mounts with hero section, metric indicators, architecture breakdown, and team ownership cards. | Not Run | Verify that main container matches design tokens. |
| **TC-NAV-02** | Active Navigation States | 1. Inspect top `Header` component.<br>2. Inspect logo brand link.<br>3. Verify active state indication if present. | Brand logo links back to `/`. Active links visually reflect the current route state without full page refresh. | Not Run | Phase 1 Header currently contains brand link and status badge. |
| **TC-NAV-03** | Homepage Internal Navigation Links | 1. On `/`, click "Explore Foundation" button.<br>2. Click "Team Work Allocation" button. | Browser smoothly scrolls to `#architecture-section` and `#team-section` anchors on the page without jumping or error. | Not Run | Smooth scroll behavior verified via CSS `scroll-behavior: smooth`. |
| **TC-NAV-04** | Fallback 404 Route Handling | 1. Navigate to an unmapped path (e.g., `http://localhost:5173/unmapped-path`).<br>2. Inspect rendered page. | `NotFoundPage` renders with 404 header, spinning compass icon, user explanation, and "Return to Campus Compass" button. | Not Run | Verifies `*` wildcard route in `AppRoutes`. |
| **TC-NAV-05** | 404 Return Home Navigation | 1. From `/unmapped-path`, click "Return to Campus Compass".<br>2. Check URL bar and rendered view. | URL returns to `/` immediately using client-side React Router navigation without triggering a full page reload. | Not Run | Check that browser history is properly updated. |

---

## Category C: Responsive Layout & Viewports

| Test ID | Feature / Area | Steps to Execute | Expected Result | Status | Notes / Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-RES-01** | Desktop Layout Usability (1200px+) | 1. Set viewport to 1280x800 or 1920x1080.<br>2. Inspect header, hero, module cards grid, and footer. | Content is centered within 1200px container (`--container-max-width`). Multi-column grids display in 2 or 3 columns without overflow. | Not Run | Spacing matches design token scales. |
| **TC-RES-02** | Tablet Viewport Stability (768px - 1024px) | 1. Set viewport to 768px (iPad Mini/Air).<br>2. Scroll through all sections.<br>3. Check horizontal scrollbars. | Grid layouts adapt to 2 columns. No content is clipped, and horizontal overflow is completely prevented (`overflow-x: hidden`). | Not Run | Check metrics strip wrapping. |
| **TC-RES-03** | Mobile Viewport Adaptability (375px - 640px) | 1. Set viewport to 375px (iPhone SE/13).<br>2. Inspect header subheadings and tags.<br>3. Inspect metrics strip. | Header hides subtitle and tag cleanly to prevent title collision. Metrics strip stacks vertically without horizontal spilling. | Not Run | Responsive CSS media query tested in `Header.css` and `HomePage.css`. |
| **TC-RES-04** | Mobile Navigation Drawer / Menu | 1. Check for mobile navigation menu toggle at < 640px.<br>2. Test open/close states. | When implemented by Member 3 in Phase 2, drawer opens smoothly, displays navigation links, and closes on destination select. | Pending | Not implemented in Phase 1 (Member 3 Phase 2 milestone). |
| **TC-RES-05** | Narrow-Width Button & Control Accessibility | 1. Test buttons at 320px - 375px width.<br>2. Verify minimum touch target size (>= 40px height). | Primary and secondary action buttons wrap gracefully, maintain touch accessibility (min 40px height), and remain legible. | Not Run | Check `Button--md` and `Button--lg` touch boundaries. |

---

## Category D: Reusable UI Components

| Test ID | Feature / Area | Steps to Execute | Expected Result | Status | Notes / Observations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-UI-01** | Button Variant Rendering | 1. Inspect `Button` component with variants: `primary`, `secondary`, `outline`, `ghost`.<br>2. Inspect sizes: `sm`, `md`, `lg`. | Each variant applies the correct background, gradient, border, and typography. Lucide icons align vertically with text. | Not Run | Verifies `src/components/ui/Button.jsx`. |
| **TC-UI-02** | Disabled Button State Behavior | 1. Pass `disabled={true}` to `Button`.<br>2. Attempt mouse click and keyboard activation. | Button exhibits 50% opacity, `cursor: not-allowed`, no hover transformation, and does not fire `onClick` handler. | Not Run | Verifies CSS `:disabled` and React event cancellation. |
| **TC-UI-03** | Badge State & Dot Indicators | 1. Inspect `Badge` component with variants: `primary`, `success`, `warning`, `info`, `neutral`.<br>2. Inspect `dot` property. | Badges render corresponding semantic pill colors and border tints. Pulsing/solid status dot renders when `dot={true}`. | Not Run | Verifies `src/components/ui/Badge.jsx`. |
| **TC-UI-04** | Card Variants & Hover Elevation | 1. Test `Card` with `variant="default"`, `variant="interactive"`, and `variant="glass"`.<br>2. Hover over interactive cards. | `interactive` cards elevate with `translateY(-4px)` and subtle glowing shadow. `glass` cards exhibit backdrop blur. | Not Run | Verifies `src/components/ui/Card.jsx`. |
| **TC-UI-05** | Form Inputs & Validation (Future) | 1. Test text inputs, search fields, labels, and error messages. | Inputs render clear floating or static labels, display red error borders and helper text when invalid. | Pending | Not implemented in Phase 1 (Member 2 Phase 2 milestone). |
| **TC-UI-06** | Keyboard Focus Ring Visibility | 1. Navigate entire page using `Tab` and `Shift+Tab`.<br>2. Verify focus outline on all interactive elements. | Focused links, buttons, and cards display visible 2px focus ring (`:focus-visible` with `var(--color-primary)`). | Not Run | Meets WCAG 2.1 AA focus indication guidelines. |

---

## Category E: Future Feature Modules (Phase 2 & Phase 3 Roadmap)

*Note: In accordance with project governance rules, unimplemented feature modules are categorized as **Pending**. They will be unlocked and tested during Phase 2 sprint handoffs.*

| Test ID | Feature Module | Planned Acceptance Criteria | Status | Assigned Sub-Team |
| :--- | :--- | :--- | :--- | :--- |
| **TC-FUT-01** | Academic Deadlines & Planner | Add, edit, delete coursework assignments. Priority sorting (Urgent, High, Normal). Days-left countdown timer. LocalStorage persistence. | Pending | Member 1 & Member 2 |
| **TC-FUT-02** | Daily Timetable & Calendar | Weekly schedule grid Monday–Friday. Recurring classes, lab sessions, room numbers. "Next class" dynamic indicator widget. | Pending | Member 2 & Member 3 |
| **TC-FUT-03** | Opportunities & Hackathons | Filterable catalog of tech internships and hackathons. Deadline countdowns, category tags (AI, Web, Cloud), and custom bookmarks. | Pending | Member 3 & Member 4 |
| **TC-FUT-04** | DSA & Placement Tracker | Problem solving log categorized by topic (Arrays, DP, Graphs). Revision spaced-repetition reminder and target company checklist. | Pending | Member 1 & Member 4 |
| **TC-FUT-05** | Collapsible Sidebar Navigation | Left-side collapsible drawer menu linking to all feature routes with active URL highlighting and persistent collapsed state. | Pending | Member 3 |
| **TC-FUT-06** | Goals & Progress Analytics | Aggregated study completion metrics, weekly streak counter, and visual progress bars (Phase 3). | Pending | Full Team |

---

## QA Execution Summary Log

- **QA Lead:** Member 4 (Documentation & QA Lead)
- **Last Verification Run:** Pending Execution
- **Pass Rate:** `0 / 22 executed` (Awaiting active test run)
- **Pending Features:** 7 future scope items
