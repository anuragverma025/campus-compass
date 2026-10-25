# Team Work & Collaboration Guide — Campus Compass

This document defines the roles, responsibilities, file ownership rules, and Git collaboration workflows for the four-member development team building **Campus Compass — The Student Life Assistant**.

---

## 1. Team Role Assignments

| Member | Primary Focus | Core Responsibility | Primary File Ownership |
| :--- | :--- | :--- | :--- |
| **Member 1** | **Project Foundation & Release Lead** | Application scaffolding, React Router setup, module integration, build validation, and release coordination. | `src/app/`, `src/pages/`, `vite.config.js`, `package.json` |
| **Member 2** | **Design System & UI Component Lead** | CSS design tokens, responsive typography, global styling variables, and reusable UI components (Buttons, Cards, Badges, Modals). | `src/styles/`, `src/components/ui/` |
| **Member 3** | **App Shell & Navigation Lead** | App layout shell, responsive sidebar, top navigation bar, drawer controls, and mobile navigation states. | `src/components/layout/` |
| **Member 4** | **Documentation & QA Lead** | README guides, dependency setup documentation, manual testing checklist, test runs, and verification logs. | `docs/`, `README.md` |

---

## 2. Granular File Ownership Matrix

To prevent merge conflicts and redundant edits, team members must only commit to their assigned directories:

```
campus-compass/
├── docs/                           --> Member 4 (Docs & QA Lead)
├── public/                         --> Shared (Assets: Favicons, SVGs)
├── src/
│   ├── app/                        --> Member 1 (App shell, routing, integration)
│   ├── assets/                     --> Shared (Images, brand assets)
│   ├── components/
│   │   ├── layout/                 --> Member 3 (Header, Footer, Sidebar, Navigation)
│   │   └── ui/                     --> Member 2 (Button, Card, Badge, Modal, Input)
│   ├── features/                   --> Feature-based ownership (Phase 2)
│   │   ├── planner/                --> Member 1 & Member 2
│   │   ├── calendar/               --> Member 2 & Member 3
│   │   ├── opportunities/          --> Member 3 & Member 4
│   │   └── placement/              --> Member 1 & Member 4
│   ├── hooks/                      --> Shared utility hooks (peer-reviewed)
│   ├── pages/                      --> Member 1 & Page owners
│   ├── styles/                     --> Member 2 (tokens.css, global.css)
│   ├── utils/                      --> Shared helpers (peer-reviewed)
│   ├── index.css                   --> Member 2
│   └── main.jsx                    --> Member 1
├── index.html                      --> Member 1 & Member 4
├── package.json                    --> Member 1 (Lead coordination)
└── README.md                       --> Member 4
```

---

## 3. Conflict Prevention & Git Workflow

### A. Feature Branching Strategy
- No team member pushes directly to `main`.
- All development must happen on designated feature branches using the naming convention:
  - `feature/<feature-name>` (e.g. `feature/sidebar-navigation`, `feature/ui-modal-component`)
  - `fix/<bug-name>` (e.g. `fix/mobile-header-padding`)
  - `docs/<doc-name>` (e.g. `docs/update-qa-checklist`)

### B. Pull Request (PR) & Code Review Protocol
1. **One Feature per Branch**: Keep branches small and focused on a single responsibility.
2. **Pull the Latest `main` Before Pushing**:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git rebase main   # or git merge main
   ```
3. **Mandatory Peer Review**:
   - Every PR requires review and approval from at least one other team member.
   - Member 1 performs final integration review before merging into `main`.
4. **Build Verification**:
   - PR author must verify that `npm run build` exits with code 0 before requesting review.

### C. Rules for Shared Files (`package.json`, `index.html`)
- If a member requires a new dependency, they must notify Member 1 in team chat and receive consensus before updating `package.json`.
- Do not reformat shared files entirely; only edit the relevant lines to keep git diffs minimal.

---

## 4. Immediate Next Steps for Each Member (Phase 2 Handoff)

- **Member 1 (Foundation & Integration)**:
  - Maintain route configurations in `src/app/routes.jsx` as new feature routes are added.
  - Review integration pull requests from Members 2, 3, and 4.
- **Member 2 (Design System & UI Components)**:
  - Expand `src/styles/tokens.css` with dark/light mode toggles and spacing refinements.
  - Build next reusable UI components in `src/components/ui/`: `Input.jsx`, `Modal.jsx`, `Tabs.jsx`.
- **Member 3 (App Shell & Navigation)**:
  - Implement collapsible sidebar (`Sidebar.jsx`) in `src/components/layout/`.
  - Connect navigation routes to sidebar links (Dashboard, Planner, Calendar, Opportunities, Placement).
- **Member 4 (Documentation & QA)**:
  - Execute the Phase 1 checklist in `docs/TESTING_CHECKLIST.md`.
  - Maintain changelog in `README.md` and log test results after every major feature integration.
