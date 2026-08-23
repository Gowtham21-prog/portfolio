# Gowtham M — Developer Portfolio

A modern, responsive developer portfolio built with **React, TypeScript, Vite, Tailwind CSS, and Framer Motion**.

The portfolio presents my technical skills, selected full-stack projects, development experience, certifications, and contact information through a single interactive interface.

**Live Portfolio:** https://gowthamportfolio-ten.vercel.app/

---

## Overview

This portfolio is designed as a single-page developer profile with a strong focus on:

* Clear presentation of technical skills
* Full-stack project showcase
* Professional experience
* Certifications
* Direct contact and social links
* Responsive desktop and mobile layouts
* Interactive navigation and motion effects

The application is entirely frontend-based. It does not use a backend or database.

---

## Features

### Portfolio Sections

The application includes dedicated sections for:

* **Home** — introduction and primary profile information
* **Skills** — categorized technical stack
* **Projects** — selected development projects with technology details and links
* **Experience** — internship and hackathon experience
* **Certifications** — certification and achievement showcase
* **Contact** — email, GitHub, LinkedIn, portfolio, and resume links

The navigation is defined centrally and maps directly to these sections.

### Interactive UI

* Animated boot screen
* Responsive navigation
* Desktop sidebar navigation
* Mobile navigation
* Command palette
* Keyboard shortcuts
* Scroll progress indicator
* Cursor-following glow effect
* Animated background effects
* Magnetic buttons
* 3D tilt effects on cards
* Certification lightbox
* Smooth section navigation
* Skip-to-content accessibility link

The main application composes these interactive components around the portfolio sections.

### Keyboard Navigation

The command palette can be opened using:

```text
/
```

or:

```text
Ctrl + K
```

on Windows/Linux and:

```text
⌘ + K
```

on macOS.

The shortcut is handled globally by the main React application while avoiding interference when typing into inputs or textareas.

### Responsive Design

The interface adapts between desktop and mobile layouts.

On larger screens, the main content uses a persistent sidebar layout. On smaller screens, navigation switches to a mobile-friendly top navigation pattern.

### Accessibility

The application includes:

* Skip-to-content navigation
* Keyboard-accessible command palette
* Keyboard navigation support
* Reduced-motion consideration
* Semantic section navigation

---

## Technology Stack

### Core

* React 18
* TypeScript
* Vite

### Styling

* Tailwind CSS
* Custom CSS
* Responsive layouts
* Glassmorphism-inspired UI
* CSS animations and visual effects

### Animation & Interaction

* Framer Motion
* Custom cursor effects
* Scroll-based effects
* 3D card interactions
* Magnetic interactions

### Icons

* Lucide React

The dependency configuration is intentionally lightweight and contains React, React DOM, Framer Motion, Lucide React, Tailwind CSS, TypeScript, Vite, and the required build tooling.

---

## Project Structure

```text
portfolio/
│
├── public/
│   ├── avatar.jpg
│   ├── certs/
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── Backdrop.tsx
│   │   ├── BootScreen.tsx
│   │   ├── CertLightbox.tsx
│   │   ├── Certifications.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── Contact.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── Nav.tsx
│   │   ├── Projects.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SectionGlow.tsx
│   │   ├── SectionHead.tsx
│   │   ├── Stack.tsx
│   │   └── TiltCard.tsx
│   │
│   ├── hooks/
│   │   └── useActiveSection.ts
│   │
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── Home.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── Skills.tsx
│   │
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

The repository separates reusable UI components, page-level sections, application data, styling, and custom hooks rather than placing the entire portfolio inside a single component.

---

## Portfolio Data Architecture

Most portfolio content is centralized in:

```text
src/data.ts
```

This file contains the structured data used by the UI for:

* Navigation
* Technical skills
* Projects
* Experience
* Certifications
* Contact information

This makes the content layer independent from the presentation components.

For example, the technical stack is divided into categories such as:

```text
Frontend
Backend
Database & Infra
Tools & Craft
```

and the project collection contains structured metadata such as:

* Project name
* Tagline
* Description
* Technology stack
* Feature highlights
* GitHub URL
* Live URL
* Featured status
* Visual accent

---

## Featured Projects

The portfolio currently showcases:

### TraceBack

**Case management & reporting platform**

A role-based case-management platform evolved from a missing-persons reporting system originally built for HackIndia 2026.

**Technologies:**

* React
* Spring Boot
* MySQL
* JWT
* REST API

### Chirp

**Real-time messaging platform**

A real-time messaging application featuring one-to-one communication, presence, read receipts, typing indicators, and Redis-backed anonymous matchmaking.

**Technologies:**

* React
* TypeScript
* Spring Boot
* PostgreSQL
* Redis
* WebSocket

### MediFlow

**Healthcare workflow platform**

A healthcare workflow application designed around patient-care coordination and role-based staff workflows.

**Technologies:**

* React
* Spring Boot
* REST API

### Picksy

**Community marketplace for small sellers**

A marketplace application supporting seller listings, product discovery, buyer ordering, cart functionality, and backend authentication.

**Technologies:**

* React
* Spring Boot
* MySQL
* REST API

### SkillForge

**Course marketplace with webhook-driven enrollment**

An e-learning marketplace where instructors publish courses and students enroll, pay, and track course progress.

**Technologies:**

* React
* Spring Boot
* MySQL
* Stripe
* JWT

These project entries are driven from the portfolio's `PROJECTS` data structure.

---

## Technical Skills

The portfolio currently presents the following stack:

### Frontend

* React
* JavaScript
* TypeScript
* HTML5
* CSS3
* Responsive UI

### Backend

* Java
* Spring Boot
* Spring Security
* REST APIs
* JWT Authentication
* WebSocket / STOMP

### Database & Infrastructure

* MySQL
* PostgreSQL
* Redis
* Flyway

### Tools

* Figma
* Git
* GitHub
* Vercel
* Postman

---

## Experience

The portfolio currently records:

### Frontend Developer Intern

**OneYes Infotech Solutions Pvt. Ltd.**

December 2025 – January 2026

Completed a frontend development internship program involving real-world development work alongside an engineering team.

### HackIndia 2026

**Team Phoenix Warriors — Mailam Engineering College**

Built a missing-persons reporting system during HackIndia 2026 with a four-member team. The prototype later evolved into the TraceBack project.

---

## Certifications

The portfolio currently showcases:

* **Programming in Java** — NPTEL · IIT Kharagpur
* **CCNA: Introduction to Networks** — Cisco Networking Academy
* **Frontend Developer Internship** — OneYes Infotech Solutions
* **HackIndia 2026 — Phoenix Warriors** — HackIndia

Certification images are stored under:

```text
public/certs/
```

and displayed through the certification components.

---

## Installation

### Prerequisites

Install:

* Node.js
* npm

### Clone

```bash
git clone https://github.com/Gowtham21-prog/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The development server is provided by Vite and is available at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

The build process runs TypeScript compilation followed by the Vite production build.

The generated files are placed in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

These commands correspond directly to the scripts defined in `package.json`.

---

## Customization

Portfolio content is intentionally centralized in:

```text
src/data.ts
```

To update the portfolio, modify the corresponding data structures rather than changing individual UI components.

### Profile Photo

Place a square or approximately square image at:

```text
public/avatar.jpg
```

The hero section uses this image when available.

If the image is missing, the application falls back to the **GM** monogram.

### Resume

Place the resume at:

```text
public/resume.pdf
```

The portfolio already references this location for the resume link.

### Certifications

Certification images can be placed under:

```text
public/certs/
```

and referenced from the certification data.

---

## Design System

The interface follows a dark, developer-oriented visual style built around:

* Glass-like surfaces
* Ambient background effects
* Teal/violet/amber visual accents
* Monospace typography elements
* Responsive spacing
* Motion-driven interactions
* Subtle hover states
* Section-based navigation

The visual system is implemented using Tailwind CSS alongside custom CSS in `src/index.css`.

---

## Performance & UX Considerations

The portfolio is intentionally implemented as a static client-side application.

There is:

* No backend
* No database
* No authentication system
* No server-side application layer

This keeps deployment simple and allows the site to be served as static frontend assets.

The application also accounts for users who prefer reduced motion, allowing the content to remain accessible without relying on animations.

---

## Deployment

The application produces a standard Vite production build and can be deployed to static hosting platforms such as:

* Vercel
* Netlify
* GitHub Pages
* Other static hosting providers

For a Vercel deployment, the typical build configuration is:

```text
Build Command: npm run build
Output Directory: dist
```

---

## Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start Vite development server          |
| `npm run build`   | Type-check and create production build |
| `npm run preview` | Preview the production build           |

---

## Repository

**GitHub:** https://github.com/Gowtham21-prog/portfolio

**Live:** https://gowthamportfolio-ten.vercel.app/

---

## Contact

**Gowtham M**

* GitHub: https://github.com/Gowtham21-prog
* LinkedIn: https://www.linkedin.com/in/gowtham-m-a22416306/
* Email: [goww991@gmail.com](mailto:goww991@gmail.com)
* Portfolio: https://gowthamportfolio-ten.vercel.app/

---

## License

This repository contains a personal developer portfolio created and maintained by Gowtham M.
