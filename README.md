# Harsh Kamboj — Premium Software Engineer Portfolio

> **Building software. Exploring AI. Solving real problems.**  
> A high-performance, dark-themed, production-ready portfolio built with React 18, TypeScript, Vite, and Tailwind CSS.

---

## 🌟 Overview

This repository contains the complete production source code for **Harsh Kamboj's** personal portfolio website. Harsh is a Computer Science and Engineering student at UPES, Dehradun (CGPA: 8.24/10), with hands-on experience in full-stack engineering, backend systems, and AI-powered applications.

Every detail in this website is grounded in Harsh's verified resume and authentic profile assets:
- **Verified Profile Portrait**: Harsh's authentic professional portrait in a formal black blazer and white shirt, framed in an illuminated dark card with subtle cyan radial highlights.
- **Accurate Resume Metrics**: 100% faithful to his UPES B.Tech education (8.24 CGPA), Class XII (80.5%), Class X (92%), Xebia Full-Stack internship, Ultimez Backend internship, and verified certifications.
- **Direct Resume Download**: `Harsh_Kamboj_Resume.pdf` served directly from the `/public` root.

---

## 🚀 Key Features

### 1. Two-Column Hero with Verified Portrait
- Left column showcases an academic achievement badge (`CGPA: 8.24/10 | UPES Dehradun`), headline, concise bio, primary CTAs (*Explore My Work*, *Download Resume*, *Contact Me*), and verified GitHub/LinkedIn badges.
- Right column presents Harsh's authentic photo in an elegant rounded-rectangle frame with animated status indicator (`Active • Available for Roles`), subtle cyan backdrop glow, and floating tech badges.

### 2. Strategic "About Me" & Focus Areas
- Clear articulation of technical interests across 3 core pillars:
  - **Software Engineering & Full-Stack Development**
  - **AI, Gen-AI & Intelligent Automation**
  - **Product Thinking & User-Centered Experiences**
- Key metrics highlights: 8.24 CGPA, 2 Industry Internships, 3 Flagship Projects, and 100% Verified Credentials.

### 3. Filterable Projects Gallery with Deep-Dive Modals
- Filter projects dynamically: `All`, `Full-Stack`, `Backend Systems`, and `AI & Gen-AI`.
- **Flagship Projects**:
  1. **Clinic Front Desk Management System** (Node.js, Express, MongoDB, JWT RBAC, REST APIs, Postman, Swagger)
  2. **HR Resume & LinkedIn Shortlisting Agent** (Python, Streamlit, Claude API, NLP, LangChain/LangGraph, RAG, Prompt Injection Guardrails)
  3. **WorkForce AI** (Node.js, Express, MongoDB, Tableau BI, API Pipelines, Documentation at Xebia)
- Each card features custom UI mockups, real architectural tags, and an **Inspect Architecture & Specs** modal detailing problem statements, key features, and verified links.

### 4. Experience Timeline
- Chronological career pathway highlighting:
  - **Full Stack Developer Intern @ Xebia** (June 2026 – August 2026) — WorkForce AI, scalable backend workflows, Tableau data visualization, and AI integration.
  - **Backend Developer Intern @ Ultimez Technology Pvt Ltd** (June 2026 – July 2026) — REST API architecture, JWT authentication, RBAC, appointment scheduling, and Postman API test suites.

### 5. Verified Skills Matrix
- Grouped cleanly across 6 functional disciplines:
  - Programming Languages (`Java`, `Python`, `JavaScript`, `TypeScript`, `HTML`, `CSS`, `SQL`)
  - Backend & Systems (`Node.js`, `Express.js`, `REST APIs`, `MVC Architecture`, `JWT Auth`, `Postman`, `Swagger`)
  - AI, Gen-AI & Data (`LLMs`, `Claude API`, `LangChain`, `LangGraph`, `RAG`, `NLP`, `Prompt Engineering`)
  - Databases & Storage (`MongoDB`, `MySQL`, `PostgreSQL`)
  - Testing, DevOps & Tools (`Git`, `GitHub`, `Antigravity`, `CI/CD Pipelines`)
  - Data & Product Tools (`Tableau`, `Figma`)

### 6. Education & Official Certifications
- UPES B.Tech CSE (8.24/10), CBSE Class XII (80.5%), ICSE Class X (92%).
- Direct, verified Google Drive certificate credential links:
  - **AWS Certification**
  - **B.U.I.L.D — Building Reliable Infrastructure & Deployment in Global Environments**
  - **Generative AI Fundamentals**

### 7. Interactive Developer Terminal CLI
- Fully functional in-browser terminal emulator supporting keyboard navigation, history buffers (Up/Down arrow keys), and commands:
  - `help`, `about`, `projects`, `skills`, `experience`, `education`, `resume`, `contact`, `clear`

### 8. Direct Contact & Message Composer
- 1-click email copy for `harshkamboj413@gmail.com`.
- Direct mailto form composer formatting messages with validation.
- Direct links to GitHub (`Harsh123-k`) and LinkedIn (`hkamboj`).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Bundler / Tooling**: Vite 5
- **Styling**: Tailwind CSS 3.4 with custom color palette (`#030712`, `#080E1A`, `#0B132B`, `#00F2FE`, `#2563EB`)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 📂 Project Directory Structure

```
portfolio/
├── public/
│   ├── Harsh_Kamboj_Resume.pdf          # Official resume PDF for direct download
│   ├── images/
│   │   ├── harsh-kamboj-portrait.png    # Centered portrait used in Hero & About
│   │   └── harsh-kamboj-profile.png     # Full-resolution source portrait
│   └── favicon.svg                      # Custom terminal code bracket favicon
├── src/
│   ├── components/
│   │   ├── About.tsx                    # Bio & 3 core focus areas
│   │   ├── Contact.tsx                  # Email copy, social cards, message form
│   │   ├── Education.tsx                # Degree, schooling & verified cert links
│   │   ├── Experience.tsx               # Xebia & Ultimez timeline
│   │   ├── Footer.tsx                   # Brand footer, nav links, copyright
│   │   ├── Hero.tsx                     # Two-column hero with verified portrait
│   │   ├── Navbar.tsx                   # Glassmorphic navbar with active indicator
│   │   ├── ProjectModal.tsx             # Deep-dive architecture modal
│   │   ├── Projects.tsx                 # Filterable project gallery
│   │   ├── Skills.tsx                   # 6-category technical skills grid
│   │   └── Terminal.tsx                 # Interactive CLI terminal
│   ├── data/
│   │   └── portfolioData.ts             # Single source of truth (resume-verified)
│   ├── App.tsx                          # Main app layout with scroll spy
│   ├── index.css                        # Tailwind directives & custom utilities
│   └── main.tsx                         # React entrypoint
├── index.html                           # SEO meta tags, OpenGraph, title
├── package.json                         # Dependencies & npm scripts
├── tailwind.config.js                   # Custom theme, glows, fonts & colors
├── tsconfig.json                        # TypeScript strict compiler options
└── vite.config.ts                       # Vite build configuration
```

---

## 💻 Local Development & Setup

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Quick Start

1. **Clone or Navigate to the Directory**:
   ```bash
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Production Build**:
   ```bash
   npm run build
   ```
   This compiles the optimized production bundles into `dist/`.

5. **Preview the Production Build Locally**:
   ```bash
   npm run preview
   ```
   View the built application at `http://localhost:4173`.

---

## 🚢 Deployment Guidelines

### Option A: Deploy to Vercel (Recommended)
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Option B: Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Add a `_redirects` file or rule for single-page routing if needed: `/* /index.html 200`.

### Option C: Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/portfolio/'` (matching your repo name).
2. Install `gh-pages`: `npm install -D gh-pages`.
3. Add `"deploy": "gh-pages -d dist"` to `package.json`.
4. Run `npm run build && npm run deploy`.

---

## 📄 License & Attribution

Designed and developed for **Harsh Kamboj**. All personal information, credentials, and project details are verified against his professional resume and profile assets.
