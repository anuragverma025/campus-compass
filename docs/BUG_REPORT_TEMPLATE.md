# Campus Compass — Bug & Issue Report Template

Use this template to document software defects, UI/UX regressions, or console errors identified during testing. Submit new issues using the format below to ensure actionable triaging across the team.

---

## Issue Overview

- **Bug Title:** `[Short, descriptive summary of the bug]`
- **Issue ID:** `BUG-YYYYMMDD-XX` *(e.g. BUG-20261027-01)*
- **Date Reported:** `YYYY-MM-DD`
- **Reported By:** `[Your Name / Team Role]`
- **Assigned To:** `Member 1 | Member 2 | Member 3 | Member 4`
- **Current Status:** `[ ] Open  |  [ ] In Progress  |  [ ] Under Review  |  [ ] Resolved  |  [ ] Closed`

---

## Environment & Client Specifications

| Property | Value |
| :--- | :--- |
| **Operating System** | macOS / Windows 11 / Linux (Ubuntu / Fedora) |
| **Browser & Version** | Google Chrome (v131+) / Firefox (v132+) / Safari (v18+) / Edge |
| **Device / Viewport** | Desktop (1920x1080) / Laptop (1440x900) / Tablet (768x1024) / Mobile (375x667) |
| **Node.js Version** | `v20.x` / `v22.x` |
| **npm Version** | `10.x` |
| **Branch / Commit** | `[e.g. main @ f701d6b]` |

---

## Defect Classification

### Severity
- [ ] **Critical (Blocker):** Application fails to compile, crash on startup, or unhandled fatal exception halting execution.
- [ ] **High:** Core navigation broken, state corruption, or key feature completely inaccessible.
- [ ] **Medium:** Visual layout defect, broken alignment at specific breakpoints, or component prop warning.
- [ ] **Low / Trivial:** Minor cosmetic imperfection, typo in copy, or non-breaking CSS notice.

### Reproducibility
- [ ] **Always (100%):** Occurs every time reproduction steps are performed.
- [ ] **Intermittent:** Occurs inconsistently under specific timing or viewport resizing.
- [ ] **Once:** Observed once and could not be reproduced after cache clear.

---

## Detailed Steps to Reproduce

1. Open the application at `http://localhost:5173/`.
2. Navigate to `[specific URL or click component]`.
3. Perform action: `[e.g., Click button X / resize viewport to 375px]`.
4. Observe the unexpected behavior.

---

## Expected Behavior
*A clear, concise description of what should have occurred according to project specifications.*

---

## Actual Behavior
*A clear, concise description of what actually happened, including visual anomalies or unhandled side effects.*

---

## Console Errors & Logs
```text
// Paste DevTools console warnings, errors, or stack traces here
```

---

## Visual Evidence / Screenshots
*Attach screenshots, animated GIFs, or DevTools inspection screenshots illustrating the issue.*

---

## Suspected Root Cause & Recommended Fix
*(Optional but highly recommended if known)*
- **Component / File Involved:** `src/...`
- **Suggested Resolution:** `[e.g., Add overflow-x: hidden or update route definition]`
