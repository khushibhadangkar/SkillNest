# 🌟 SkillNest — Premium Freelance Marketplace

SkillNest is a clean, modern, and high-performance React application designed to connect businesses, startups, and clients with top-tier young professionals and freelance talents. Built on React 19 and Vite 8, the platform is designed with a premium, responsive glassmorphism aesthetic and optimized for fast page loads and smooth micro-animations.

---

## 🚀 Key Features

- **🌐 Interactive Freelancer Directory:** Advanced search, categorization, and sorting filters to browse curated freelancer profiles instantly.
- **📄 Comprehensive Freelancer Profiles:** Highlights freelancer biographies, active skillsets, client review portfolios, historical ratings, and direct contact options.
- **📝 Project Brief Posting System:** Allows clients to construct detailed project descriptions, assign categories, and select specific budgets and delivery timelines (persisted securely using React state and LocalStorage).
- **🔒 Integrated Authentication (Mock Flow):** Seamless user login/registration modal with client-side session management.
- **🎨 Elite Dark & Light Mode Support:** One-click dynamic themes utilizing CSS custom properties for a polished user experience.
- **⚡ Advanced UI/UX Animations:** High-end custom scroll progress bar, back-to-top behavior, category visual cards, dynamic testimonial carousels, and responsive FAQ accordions.
- **🔍 SEO Optimization:** Structured meta-headers using a custom `<SEOHead>` component to improve search indexability on every page.

---

## 🛠️ Tech Stack & Tooling

- **Frontend Core:** [React 19](file:///Users/khushi/mdm/package.json#L14)
- **Routing:** [React Router DOM v7](file:///Users/khushi/mdm/package.json#L16)
- **Development & Building:** [Vite 8](file:///Users/khushi/mdm/package.json#L23)
- **Icons & Graphics:** [Lucide React](file:///Users/khushi/mdm/package.json#L13)
- **Code Linter:** [Oxlint](file:///Users/khushi/mdm/package.json#L22)
- **Design System:** Custom CSS-variables design tokens with modular layout stylesheets.

---

## 📂 Codebase & File Structure

Here is a map of the repository's core directories and assets:

- 📁 **[src/components](file:///Users/khushi/mdm/src/components)**: Reusable UI widgets and interactive components:
  - [Navbar.jsx](file:///Users/khushi/mdm/src/components/Navbar.jsx) — Dynamic header navigation with responsive mobile menu.
  - [Footer.jsx](file:///Users/khushi/mdm/src/components/Footer.jsx) — Core links, newsletter signup, and branding info.
  - [AuthModal.jsx](file:///Users/khushi/mdm/src/components/AuthModal.jsx) — Modal handle for simulated user log in.
  - [SEOHead.jsx](file:///Users/khushi/mdm/src/components/SEOHead.jsx) — Injectable SEO metadata for custom route attributes.
- 📁 **[src/pages](file:///Users/khushi/mdm/src/pages)**: Application view layouts:
  - [Home.jsx](file:///Users/khushi/mdm/src/pages/Home.jsx) — Hero section, stats counters, categorized previews, and testimonials.
  - [BrowseFreelancers.jsx](file:///Users/khushi/mdm/src/pages/BrowseFreelancers.jsx) — The core directory search engine.
  - [FreelancerProfile.jsx](file:///Users/khushi/mdm/src/pages/FreelancerProfile.jsx) — Custom profiles showing skills, portfolios, and hiring triggers.
  - [PostProject.jsx](file:///Users/khushi/mdm/src/pages/PostProject.jsx) — Client job description form with localStorage synchronization.
- 📁 **[src/context](file:///Users/khushi/mdm/src/context)**: State management layers:
  - [AppContext.jsx](file:///Users/khushi/mdm/src/context/AppContext.jsx) — Manages global data for authentication, posted projects, and active recruitments.
- 📁 **[src/data](file:///Users/khushi/mdm/src/data)**: Static data objects including freelancers, testimonials, categories, and blogs.
- ⚙️ **Config Files**:
  - [vite.config.js](file:///Users/khushi/mdm/vite.config.js) — Build rules.
  - [package.json](file:///Users/khushi/mdm/package.json) — Target metadata.
  - [netlify.toml](file:///Users/khushi/mdm/netlify.toml) & [vercel.json](file:///Users/khushi/mdm/vercel.json) — Serverless deployment hooks.

---

## ⚡ Getting Started

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or above is recommended).

### 🛠️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Locally in Development Mode:**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173/` to view the live app.

3. **Build the Application for Production:**
   ```bash
   npm run build
   ```

4. **Run Code Linting Checks:**
   ```bash
   npm run lint
   ```

---

## 🛡️ License

This project is open-source and available under the MIT License.
