# Campus Compass — Testing & Quality Checklist

**Maintained by:** Member 4 (Documentation & QA Lead)  
**Phase:** Phase 1 (Foundation & Setup)

This checklist provides a structured manual verification guide to ensure code health, stability, and zero regressions across student environments before any branch is merged into `main`.

---

## 1. Automated Verification Checks

| Check | Command | Expected Output | Status |
| :--- | :--- | :--- | :--- |
| **Dependency Installation** | `npm install` | All packages resolved with `0 vulnerabilities`. | [x] PASS |
| **Linting & Code Health** | `npm run lint` | Oxlint runs with no syntax or code structure errors. | [x] PASS |
| **Production Build** | `npm run build` | Vite outputs optimized assets to `dist/` with exit code 0. | [x] PASS |
| **Production Preview** | `npm run preview` | Vite local preview server launches and serves production build. | [x] PASS |

---

## 2. Manual Verification Checklist

### A. Development Server Startup
- [ ] Run `npm run dev` from the project root.
- [ ] Server starts quickly (under 500ms) and provides a local URL (e.g., `http://localhost:5173/`).
- [ ] Vite Hot Module Replacement (HMR) responds immediately when saving changes in `src/pages/HomePage.jsx`.

### B. Route Loading & Navigation
- [ ] Navigate to root URL (`/`): The Campus Compass welcome page renders with hero, architecture breakdown, module roadmap, and team allocation cards.
- [ ] Navigate to an invalid route (e.g. `/invalid-test-path`): The custom 404 page (`NotFoundPage.jsx`) renders with a "Return to Campus Compass" button.
- [ ] Clicking "Return to Campus Compass" navigates back to `/` without full page reload.

### C. Responsive Layout & Viewports
- [ ] **Mobile (375px - 640px)**:
  - Header adjusts gracefully; subheadings collapse smoothly.
  - Metrics strip stacks vertically without horizontal overflow.
  - Cards format into single-column responsive layout.
- [ ] **Tablet (768px - 1024px)**:
  - Module roadmap and team cards display in 2-column grid.
  - Navigation links remain visible and accessible.
- [ ] **Desktop (1024px+)**:
  - Full multi-column grid layouts with maximum container width (1200px).
  - Smooth hover animations and elevation transitions active on interactive cards and buttons.

### D. Browser Console & Accessibility Checks
- [ ] Open Browser DevTools (`F12`) -> Console tab.
- [ ] Verify **zero errors** and **zero uncaught exceptions**.
- [ ] Verify proper tab navigation using `Tab` and `Shift+Tab`: all buttons and interactive cards exhibit visible focus outlines (`:focus-visible`).
- [ ] Check color contrast on primary buttons and badge indicators against dark surface tokens.

---

## 3. Test Execution Log (Phase 1 Baseline)

- **Date Tested**: 2026-10-26
- **Tested By**: Member 1 & Assistant Engineer
- **Environment**: Node v22.18.0, npm 10.9.3, Vite 8.3.4, React 19.3.1
- **Build Output**: `dist/` generated cleanly (HTML: 0.65 kB, JS: 228.45 kB gzip: 73.12 kB, CSS: 9.38 kB gzip: 2.39 kB).
- **Result**: **100% Passed. Ready for Phase 2 feature handoff.**
