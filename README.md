# Campus Compass — The Student Life Assistant

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-ca4245?logo=react-router)](https://reactrouter.com/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

> A modern, frontend-first student productivity web application helping college students manage academic deadlines, daily timetables, internships, hackathons, and DSA placement preparation — with zero backend complexity.

---

## 1. Project Overview

College students often juggle multiple disjointed tools for their academic courses, personal schedules, career opportunities, and coding preparation. **Campus Compass** brings all these domains together into an intuitive, responsive frontend platform:

- **Academic Deadlines & Planner:** Track assignments, lab records, projects, and exam dates with countdowns.
- **Daily Schedules & Timetable:** Visualize weekly class timetables, labs, and extracurricular events.
- **Opportunities & Hackathons:** Discover and bookmark internships, scholarships, and coding competitions.
- **DSA Practice & Placement Tracker:** Log coding challenges, target companies, and track interview preparation topics.
- **Personal Goals & Progress Analytics:** Gain clear visual feedback on study habits and milestones.

---

## 2. Technology Stack

- **Core Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Client Routing:** [React Router v7](https://reactrouter.com/) (BrowserRouter with multi-page route configuration)
- **Styling Architecture:** Maintainable CSS Custom Properties & Design Tokens (`src/styles/tokens.css` and `src/styles/global.css`). Avoids fragile build-time utility configurations while empowering Member 2 to maintain a cohesive, accessible dark-slate theme with zero dependency friction.
- **Iconography:** [Lucide React](https://lucide.dev/) (Lightweight, accessible SVG icons)
- **Data Persistence (Later Phases):** Browser `localStorage` (No database or backend server required)
- **Quality & Linting:** [Oxlint](https://oxc.rs/)

---

## 3. Project Structure

```
campus-compass/
├── docs/                           # Team collaboration & QA checklists
│   ├── TEAM_WORK.md                # Roles, file ownership, and git workflow
│   └── TESTING_CHECKLIST.md        # Manual & automated testing steps
├── public/                         # Public assets (favicons, icons)
├── src/
│   ├── app/                        # Application root & routing shell
│   │   ├── App.jsx                 # Top-level shell with Header, Router, Footer
│   │   └── routes.jsx              # Centralized route declarations
│   ├── assets/                     # Static media assets
│   ├── components/                 # Modular reusable components
│   │   ├── layout/                 # Layout shell (Header, Footer, future Sidebar)
│   │   └── ui/                     # Atoms: Button, Card, Badge
│   ├── features/                   # Core feature domains (Phase 2)
│   │   ├── planner/                # Academic assignments & deadlines
│   │   ├── calendar/               # Daily schedule & timetable
│   │   ├── opportunities/          # Internships & hackathons
│   │   └── placement/              # DSA & placement prep tracker
│   ├── hooks/                      # Custom hooks (e.g., useLocalStorage)
│   ├── pages/                      # Application route views
│   │   ├── HomePage.jsx            # Polished welcome screen & system roadmap
│   │   └── NotFoundPage.jsx        # Accessible 404 page with return action
│   ├── styles/                     # CSS design tokens & global stylesheets
│   │   ├── tokens.css              # Color palette, spacing, typography tokens
│   │   └── global.css              # CSS reset, utilities, animations
│   ├── utils/                      # Helper functions & formatters
│   ├── index.css                   # Stylesheet entry point
│   └── main.jsx                    # Application DOM mounting point
├── index.html                      # HTML5 entry with meta tags & typography
├── package.json                    # Project dependencies & scripts
├── vite.config.js                  # Vite configuration
└── LICENSE                         # Apache 2.0 License
```

---

## 4. Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v22+ recommended)
- **npm**: v9.0.0 or later

### Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd campus-compass
npm install

# Copy environment template if not present
cp .env.example .env     # On Windows PowerShell: Copy-Item .env.example .env
```

### Running in Development Mode
Start the Vite local development server:
```bash
npm run dev
```
The application will launch at `http://localhost:5173/` with hot module replacement (HMR).

### Building for Production
Create an optimized production bundle:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### Previewing the Production Build
Preview the generated production build locally:
```bash
npm run preview
```

### Running Linter
```bash
npm run lint
```

---

## 5. Current Implementation Status (Phase 1)

| Requirement | Implementation Details | Status |
| :--- | :--- | :--- |
| **Vite + React Foundation** | Initialized cleanly with modern React 19, zero errors. | Completed |
| **Client-Side Routing** | Configured `react-router-dom` with `/` and fallback 404 handling. | Completed |
| **Styling System** | Maintainable CSS Custom Properties (`tokens.css`, `global.css`). | Completed |
| **Initial Welcome Screen** | High-impact welcome screen showing project tagline, architecture highlights, module roadmap, and team allocation cards. | Completed |
| **Reusable UI Components** | Created `Button`, `Card`, and `Badge` with customizable variants. | Completed |
| **Team Documentation** | Defined roles & file ownership in `docs/TEAM_WORK.md`. | Completed |
| **Testing Checklist** | Documented manual & automated verification in `docs/TESTING_CHECKLIST.md`. | Completed |

---

## 6. Team Collaboration & File Ownership

The project follows strict file ownership to allow all 4 students to work simultaneously without Git conflicts:

- **Member 1 (Foundation & Integration Lead):** Owns `src/app/`, `src/pages/`, `package.json`, and release verification.
- **Member 2 (Design System & UI Components):** Owns `src/styles/` and `src/components/ui/`.
- **Member 3 (App Shell & Navigation):** Owns `src/components/layout/` and responsive sidebar/shell.
- **Member 4 (Documentation & QA Lead):** Owns `docs/`, `README.md`, and testing checklists.

Refer to [`docs/TEAM_WORK.md`](docs/TEAM_WORK.md) for full branch conventions and pull request procedures.

---

## 7. License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for details.
