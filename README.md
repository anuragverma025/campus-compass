# Campus Compass — The Student Life Assistant

[![React](https://img.shields.io/badge/React-19.3.1-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.5-646cff?logo=vite)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7.18.4-ca4245?logo=react-router)](https://reactrouter.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint_1.88-brightgreen)](https://oxc.rs/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

> A modern, frontend-first college web application designed to empower students to balance academic deadlines, daily timetables, career opportunities, hackathons, and placement preparation — engineered with zero backend complexity.

---

## 1. Problem Statement

College students face severe cognitive overload while navigating university life. Crucial academic schedules, coursework assignment deadlines, lab submissions, off-campus internship openings, hackathons, and data structures & algorithms (DSA) preparation are scattered across disparate platforms — university portals, chat groups, email chains, and physical notices.

This fragmentation leads to:
- Missed assignment deadlines and last-minute submission panics.
- Inefficient time management with schedule clashes between classes and extracurriculars.
- Overlooked career, internship, and hackathon opportunities due to information dispersion.
- Lack of structured tracking for technical placement preparation and coding practice.

---

## 2. Project Objectives

**Campus Compass** delivers an integrated, intuitive student productivity platform with the following core objectives:
1. **Unified Academic Dashboard:** Centralize coursework deadlines, class timetables, and career tracking into a single responsive web interface.
2. **Zero Backend Overhead:** Build a lightweight, high-performance client-first application utilizing modern browser capabilities and `localStorage` persistence, avoiding fragile external servers or database hosting costs.
3. **Collaborative FSD Architecture:** Provide a clean modular architecture allowing four student developers to collaborate in parallel through Git without merge conflicts.
4. **Responsive Accessibility:** Ensure seamless usability across mobile phones, tablets, laptops, and desktop displays with WCAG AA compliance.

---

## 3. Target Users

- **Undergraduate & Graduate College Students:** Needing a unified personal dashboard to balance academics, projects, and daily life.
- **Student Class Representatives & Club Leads:** Coordinating class schedules, assignment alerts, and campus tech events.
- **Placement & Internship Seekers:** Tracking target companies, technical interview topics, coding practice, and application deadlines.
- **Academic Evaluators & Instructors:** Reviewing the code quality, design system, and testing rigor of an academic Full Stack Development (FSD) project.

---

## 4. Key Planned Features

The application roadmap is organized into five functional modules:

1. **Academic Deadlines & Planner:**
   - Course-wise assignment and project submission tracking.
   - Dynamic urgency sorting (Urgent, High, Normal) with visual deadline countdowns.
   - Completed assignment archiving with progress percentages.
2. **Daily Schedules & Timetable:**
   - Interactive weekly timetable grid (Monday through Friday).
   - Class, lab, and club event blocks with venue and room numbers.
   - Dynamic "Next Class" indicator widget highlighting upcoming lectures.
3. **Opportunities & Hackathons:**
   - Curated directory of internships, scholarships, and coding competitions.
   - Category filtering (e.g., Software Engineering, AI/ML, Cloud, Open Source).
   - Custom bookmarking and application deadline reminders.
4. **DSA Practice & Placement Tracker:**
   - Structured topic-by-topic problem matrix (Arrays, Linked Lists, Trees, Graphs, DP).
   - Target company application status tracker (Applied, OA, Technical Round, HR).
   - Spaced-repetition revision log for challenging coding problems.
5. **Personal Goals & Progress Analytics:**
   - Weekly task completion rates and study streak metrics.
   - Visual milestone progress bars and workload balance indicators.

---

## 5. Technology Stack & Architectural Purpose

| Layer | Technology | Purpose & Architectural Rationale |
| :--- | :--- | :--- |
| **UI Framework** | [React 19](https://react.dev/) (`v19.3.1`) | Component-driven declarative UI architecture, modular lifecycle hooks, and optimized concurrent rendering. |
| **Build Tool & Dev Server** | [Vite 8](https://vite.dev/) (`v8.3.5`) | Ultra-fast native ES-module development server with sub-millisecond Hot Module Replacement (HMR) and optimized production Rollup bundling. |
| **Client Routing** | [React Router v7](https://reactrouter.com/) (`v7.18.4`) | Multi-page client-side routing (`BrowserRouter`), URL-driven route handling (`Routes`, `Route`), dynamic page transitions, and 404 fallback matching. |
| **Styling Architecture** | Pure CSS Custom Properties & Design Tokens | Zero-runtime CSS custom properties (`src/styles/tokens.css` and `global.css`). Provides a cohesive dark-slate palette, responsive typography, and glassmorphism without heavy third-party CSS dependencies. |
| **Iconography** | [Lucide React](https://lucide.dev/) (`v1.61.0`) | Lightweight, accessible SVG icons with uniform stroke width and customizable sizing across all UI states. |
| **Quality & Linting** | [Oxlint](https://oxc.rs/) (`v1.88.0`) | High-performance Rust-based static code linter providing instantaneous syntax verification, import validation, and React best practice enforcement. |
| **Data Persistence** *(Phase 2/3)* | Browser `localStorage` | Client-side persistent storage key-namespaced via `APP_CONFIG.storagePrefix` to ensure zero database dependency and offline availability. |

---

## 6. Current Implementation Status vs. Planned Roadmap

To maintain engineering integrity, implemented features are strictly distinguished from planned features:

| Module / Layer | Component / Feature | Implementation Status | Responsible Lead |
| :--- | :--- | :--- | :--- |
| **Scaffolding & Tooling** | React 19 + Vite 8 build setup, NPM scripts, Oxlint | **Implemented & Verified** | Member 1 |
| **Client Routing** | `BrowserRouter`, `/` (Home), `*` (404 Fallback) | **Implemented & Verified** | Member 1 |
| **Design System** | CSS tokens (`tokens.css`), typography scale, resets (`global.css`) | **Implemented & Verified** | Member 2 |
| **UI Components** | `Button` (4 variants, 3 sizes), `Card` (3 variants), `Badge` (6 variants) | **Implemented & Verified** | Member 2 |
| **Application Shell** | Sticky `Header`, responsive `Footer`, container layouts | **Implemented & Verified** | Member 3 |
| **Welcome Page** | `HomePage` with hero, architecture cards, and roadmap grids | **Implemented & Verified** | Member 1 |
| **Error Handling** | `NotFoundPage` with return navigation link | **Implemented & Verified** | Member 1 |
| **Documentation & QA** | Testing checklist, bug template, collaboration guide, audit log | **Implemented & Verified** | Member 4 |
| **Sidebar Navigation** | Collapsible drawer menu for multi-page routing | *Planned — Phase 2* | Member 3 |
| **Academic Planner** | Interactive assignment board & deadline countdowns | *Planned — Phase 2* | Member 1 & 2 |
| **Timetable Grid** | Weekly recurring class schedule view | *Planned — Phase 2* | Member 2 & 3 |
| **Opportunities Hub** | Hackathons & internships directory with bookmarks | *Planned — Phase 2* | Member 3 & 4 |
| **Placement Tracker** | DSA problem matrix & company application tracker | *Planned — Phase 2* | Member 1 & 4 |
| **Analytics & Themes** | Weekly study streaks, dark/light theme toggle | *Planned — Phase 3* | Full Team |

> **Note on Backend & APIs:** Campus Compass is intentionally engineered as a client-first frontend application. There are currently **no** backend servers, databases, external authentication endpoints, or live network APIs in Phase 1. All configuration flags and mock switches are safely controlled in client environment variables.

---

## 7. Project Folder Structure

```
campus-compass/
├── docs/                           # Team collaboration, testing checklists & QA logs
│   ├── BUG_REPORT_TEMPLATE.md      # Standardized defect reporting form
│   ├── QA_AUDIT_REPORT.md          # Comprehensive QA findings & presentation audit
│   ├── TEAM_WORK.md                # Member responsibilities, branch rules, and workflow
│   └── TESTING_CHECKLIST.md        # Formal test matrix & verification execution log
├── public/                         # Static assets (Favicons, web manifests)
│   ├── favicon.svg                 # SVG browser tab icon
│   └── icons.svg                   # Reusable icon definitions
├── src/
│   ├── app/                        # Application root & routing shell
│   │   ├── App.jsx                 # Top-level shell with Header, Router, Footer
│   │   └── routes.jsx              # Centralized route definitions
│   ├── assets/                     # Media assets (Hero images, logos)
│   ├── components/
│   │   ├── layout/                 # Layout shell (Header, Footer, future Sidebar)
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   └── ui/                     # Atomic reusable UI components
│   │       ├── Badge.css & Badge.jsx
│   │       ├── Button.css & Button.jsx
│   │       └── Card.css & Card.jsx
│   ├── features/                   # Self-contained feature modules (Phase 2)
│   │   ├── planner/                # Academic assignments & deadlines
│   │   ├── calendar/               # Daily schedule & timetable
│   │   ├── opportunities/          # Internships & hackathons
│   │   └── placement/              # DSA practice & placement tracker
│   ├── hooks/                      # Custom React hooks (e.g., useLocalStorage)
│   ├── pages/                      # Application route pages
│   │   ├── HomePage.css & HomePage.jsx
│   │   └── NotFoundPage.css & NotFoundPage.jsx
│   ├── styles/                     # CSS design tokens & stylesheets
│   │   ├── global.css              # Resets, layout utilities, animations
│   │   └── tokens.css              # Color tokens, typography, radii, shadows
│   ├── utils/                      # Helper utilities & configuration
│   │   └── config.js               # Type-safe environment variable mapping
│   ├── index.css                   # Root stylesheet entry
│   └── main.jsx                    # React 19 DOM mounting entry
├── .env.example                    # Safe environment template for local setup
├── .gitignore                      # Git exclusion rules (Excludes .env, node_modules)
├── .oxlintrc.json                  # Oxlint linter configuration
├── index.html                      # HTML5 entry document with web fonts
├── package.json                    # Project manifest, scripts, and dependencies
├── package-lock.json               # Deterministic dependency lockfile
├── vite.config.js                  # Vite configuration with React plugin
└── LICENSE                         # Apache 2.0 Open Source License
```

---

## 8. Getting Started & Installation

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20.x` or `v22.x` recommended)
- **npm**: `v9.0.0` or higher
- **Git**: `v2.30` or higher

Verify your installation:
```bash
node -v
npm -v
git --version
```

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd campus-compass
   ```

2. **Check out your working branch:**
   ```bash
   git checkout <branch-name>
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

4. **Configure environment variables:**
   Copy the safe environment template to create your local `.env`:
   ```bash
   cp .env.example .env
   # On Windows PowerShell: Copy-Item .env.example .env
   ```
   > **Security Note:** The `.env` file is excluded from Git tracking via `.gitignore`. Never commit real secrets, personal keys, or private credentials to Git. `.env.example` contains only safe placeholder configuration values.

---

## 9. Available NPM Scripts

| Command | Action | Output / Description |
| :--- | :--- | :--- |
| `npm run dev` | Starts Vite local development server | Serves app at `http://localhost:5173/` with instantaneous Hot Module Replacement (HMR). |
| `npm run build` | Compiles production bundle | Generates minified, production-ready assets in the `dist/` folder. |
| `npm run preview` | Previews production build | Locally serves the compiled `dist/` directory at `http://localhost:4173/` for QA verification. |
| `npm run lint` | Runs static code analysis | Scans all JS/JSX files using Oxlint and reports syntax or structural defects. |

---

## 10. Team Collaboration & Member Roles

The project is developed by four collaborative student members with strict file ownership to prevent merge conflicts:

| Member | Assigned Role | Primary Focus & Domain | File Ownership Scope |
| :--- | :--- | :--- | :--- |
| **Member 1** | **Project Foundation & Release Lead** | Project scaffolding, React Router configuration, core app routing, integration oversight, and build validation. | `src/app/`, `src/pages/`, `vite.config.js`, `package.json` |
| **Member 2** | **Design System & UI Component Lead** | CSS design tokens, responsive typography, global theming, and atomic UI building blocks (`Button`, `Card`, `Badge`, future inputs/modals). | `src/styles/`, `src/components/ui/` |
| **Member 3** | **App Shell & Navigation Lead** | Responsive application shell, header, footer, future collapsible sidebar navigation, and mobile drawer controls. | `src/components/layout/` |
| **Member 4** | **Documentation & QA Lead** | Project documentation, setup guides, QA testing checklists, automated test runs, bug tracking, and release readiness audits. | `docs/`, `README.md` |

For full Git workflows, branch conventions, and code review rules, refer to [`docs/TEAM_WORK.md`](docs/TEAM_WORK.md).

---

## 11. Testing & Quality Assurance

All code contributions undergo rigorous automated and manual verification before merging into `main`.

### Running Automated Checks Locally
```bash
# 1. Run static linting
npm run lint

# 2. Run production build compilation
npm run build
```

### Manual Testing Matrix
Formal testing procedures are tracked in [`docs/TESTING_CHECKLIST.md`](docs/TESTING_CHECKLIST.md), organized into:
- **Category A:** Project Setup & Build Environment (`TC-SET-01` to `05`)
- **Category B:** Navigation & Client Routing (`TC-NAV-01` to `05`)
- **Category C:** Responsive Layout & Viewports (`TC-RES-01` to `05`)
- **Category D:** Reusable UI Components (`TC-UI-01` to `06`)
- **Category E:** Future Feature Modules (`TC-FUT-01` to `06`)

### Reporting Bugs
Defects, styling issues, and broken behaviors must be reported using the standardized form in [`docs/BUG_REPORT_TEMPLATE.md`](docs/BUG_REPORT_TEMPLATE.md) and assigned to the component owner.

---

## 12. Future Scope & Phase Roadmap

- **Phase 2 (Next Milestone):**
  - Implement collapsible sidebar navigation with dynamic routing.
  - Deliver interactive Academic Planner with assignment countdowns and prioritization.
  - Implement weekly Timetable Grid with "Next Class" indicators.
  - Deploy Opportunities Directory with internship category filtering and bookmarking.
  - Introduce DSA Problem Matrix with difficulty filters and company tags.
  - Add reusable form inputs, modal dialogs, and dropdown components.
- **Phase 3 (Final Polish & Presentation):**
  - Connect all feature states to browser `localStorage` with automated serialization.
  - Add personal goal completion analytics and weekly study streaks.
  - Implement dark/light theme switcher using CSS custom properties.
  - Package final demo walkthrough for academic evaluation.

---

## 13. License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for complete details.
