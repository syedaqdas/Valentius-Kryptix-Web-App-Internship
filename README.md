# Professional Personal Portfolio Website — Valentius Kryptix Internship WA-1

A modern, high-performance, dark-mode-first personal portfolio website built from scratch using pure semantic **HTML5**, **CSS3**, and **Vanilla JavaScript**. 

Designed and engineered for **Syed Aqdas** for the **Valentius Kryptix Web App Internship — Task WA-1: Portfolio Website**.

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Key Features](#-key-features)
3. [Technology Stack](#-technology-stack)
4. [Folder Structure](#-folder-structure)
5. [How to Run Locally](#-how-to-run-locally)
6. [Personalization & Placeholder Guide](#-personalization--placeholder-guide)
7. [Updating Project Repositories](#-updating-project-repositories)
8. [Connecting Live Form Submissions (Optional)](#-connecting-live-form-submissions-optional)
9. [Responsive Design & Testing Guide](#-responsive-design--testing-guide)
10. [GitHub Publishing Instructions](#-github-publishing-instructions)
11. [Enabling GitHub Pages](#-enabling-github-pages)
12. [Valentius Kryptix WA-1 Submission Checklist](#-valentius-kryptix-wa-1-submission-checklist)

---

## 🌟 Project Overview

This website is a polished, recruiter-ready personal portfolio representing Syed Aqdas as an **Aspiring Data Analyst & Web Developer**.

The application strictly adheres to the technical constraints of the Valentius Kryptix WA-1 task:
- **Zero Frameworks/Libraries:** No React, Next.js, Vue, Angular, Bootstrap, Tailwind, or jQuery.
- **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Responsive & Accessible:** Pixel-perfect across mobile (375px), tablet (768px), and desktop (1280px+), adhering to WCAG standards.
- **Honest & Verifiable:** Contains strictly genuine information with cleanly identified placeholders for details yet to be completed.

---

## ✨ Key Features

- **Polished Dark Theme First:** Deep navy / near-black palette (`#080c14`) accented with subtle violet (`#8b5cf6`), royal blue (`#3b82f6`), and cyber cyan (`#06b6d4`).
- **Clean Theme Switcher:** Fully functional, accessible toggle between dark and light modes, persisted via `localStorage`.
- **Sticky Blur Navigation:** Frosted glass navbar with active section detection and smooth scrolling offset.
- **Responsive Hamburger Drawer:** Mobile drawer with full ARIA accessibility, backdrop overlay, Esc-key listener, and auto-close upon link selection.
- **Hero Showcase:** Headline, call-to-action buttons, status badges, and an SVG tech illustration that never breaks or relies on external CDN assets.
- **About Me & Philosophy Cards:** 3 core pillars (*Problem Solving*, *Continuous Learning*, *Building Projects*) plus an editable personal details card.
- **Categorized Draft Skills:** Programming, Web Development, Data Analysis, and Tools presented with clean badges (no misleading percentage bars).
- **Interactive Project Filtering:** Instant Vanilla JS filtering across *All*, *Web Development*, *Data Analysis*, and *SQL* categories with animated transitions.
- **Direct Mailto & Contact Interface:** Direct 1-click email client launcher (`mailto:aqdasssm@gmail.com`) and an interactive client-side form with input validation.
- **Reduced Motion Support:** Full accessibility compliance via `@media (prefers-reduced-motion: reduce)`.
- **Dynamic Copyright:** JavaScript automatically keeps the footer year current.

---

## 🛠 Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| **Styling** | CSS3 | Custom properties, CSS Grid, Flexbox, `clamp()` fluid typography, zero preprocessors |
| **Scripting** | Vanilla JavaScript (ES6+) | `"use strict"`, DOM manipulation, event delegation, ARIA state management |
| **Graphics** | Pure Vector SVG | Custom monogram logo, favicon, and hero tech illustration |

---

## 📂 Folder Structure

```text
valentius-kryptix-portfolio/
│
├── index.html              # Main semantic HTML5 document
├── style.css               # Complete responsive CSS3 stylesheet & design tokens
├── script.js               # Vanilla JavaScript interactivity & filtering
├── README.md               # Documentation, setup, and submission guide
│
└── assets/                 # Local vector assets (zero external dependencies)
    ├── favicon.svg         # High-DPI browser favicon
    └── hero-visual.svg     # Custom vector illustration (Data & Web Development)
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (No tools required)
1. Navigate to the project directory:
   ```text
   c:\Users\DELL\OneDrive\Desktop\Valentius Kryptix Internship
   ```
2. Double-click **`index.html`** or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**:
   ```bash
   code .
   ```
2. If you have the **Live Server** extension installed (`ritwickdey.liveserver`), right-click on `index.html` and select **"Open with Live Server"**.
3. The portfolio will automatically open at `http://127.0.0.1:5500/index.html` with hot reloading enabled.

---

## ✏️ Personalization & Placeholder Guide

Per internship guidelines, placeholders have been cleanly highlighted so you can update them with your real credentials as you progress:

| File | Line / Section | Current Placeholder | Description / Action |
| :--- | :--- | :--- | :--- |
| `index.html` | About Section | `[Degree / Field of Study, University Name — Expected Year]` | Enter your degree name, university, and graduation year |
| `index.html` | About Section | `[e.g., Advanced SQL Queries, Python for Data Science...]` | Enter your current learning focus |
| `index.html` | About Section | `[City, Country / Open to Remote]` | Enter your current location |
| `index.html` | Projects & Contact | `https://github.com/syedaqdas` | Connected to your real GitHub profile |
| `index.html` | Contact & Footer | `https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/` | Replace `YOUR-LINKEDIN-USERNAME` with your real LinkedIn handle |
| `index.html` | Skills Section | Categorized skills | Add or remove draft skills to match your learning journey |

---

## 🔗 Updating Project Repositories

In the **Featured Projects** section (`index.html`), project links are configured as follows:

1. **Project 1: Personal Portfolio Website**
   - Repository: `https://github.com/syedaqdas/Valentius-Kryptix-Web-App-Internship`
   - Live View: Links to `#home` (this portfolio)
2. **Project 2: Data Analysis Dashboard**
   - Repository: `https://github.com/syedaqdas/data-analysis-dashboard`
   - Status: Marked as *Proposed Showcase* with *"Repository coming soon"*
3. **Project 3: SQL Data Exploration**
   - Repository: `https://github.com/syedaqdas/sql-data-exploration`
   - Status: Marked as *Proposed Showcase* with *"Repository coming soon"*

*When you create repositories for Projects 2 and 3, simply replace the placeholder links and remove the "Repository coming soon" label.*

---

## 📬 Connecting Live Form Submissions (Optional)

The contact form is built with full client-side HTML5 & JavaScript validation and provides an immediate fallback to draft an email via the user's default email client.

If you wish to receive live form submissions directly into your inbox (`aqdasssm@gmail.com`) without creating a custom backend server:

### Free Service: Formspree
1. Create a free account at [https://formspree.io/](https://formspree.io/).
2. Create a new form and copy your Form ID (e.g., `https://formspree.io/f/xvonzxyz`).
3. In `index.html`, update the `<form>` opening tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
4. Submissions will now be delivered directly to `aqdasssm@gmail.com`.

---

## 📱 Responsive Design & Testing Guide

This website has been tested for clean layouts, readable typography, and zero horizontal scrolling at all standard viewport widths:

| Viewport | Typical Device | Layout Behavior |
| :--- | :--- | :--- |
| **375px** | Mobile (iPhone SE, Pixel) | 1-column layout, mobile hamburger menu, stacked action buttons |
| **768px** | Tablet (iPad, Surface) | 2-column skills grid, adapted hero column, collapsible navigation |
| **1280px+**| Laptop & Desktop | Full multi-column grid, sticky desktop navbar, side-by-side hero layout |

### How to test using DevTools:
1. Open the website in Google Chrome or Microsoft Edge.
2. Press `F12` (or `Ctrl + Shift + I`) to open Developer Tools.
3. Click the **Toggle device toolbar** button (`Ctrl + Shift + M`).
4. Select **iPhone SE (375px)**, **iPad Mini (768px)**, and **Responsive (1280px)**.
5. Verify that:
   - There is no horizontal scrollbar.
   - Text is crisp and legible without zooming.
   - The hamburger navigation opens, closes, and navigates seamlessly.

---

## 🌐 GitHub Publishing Instructions

Follow these exact Git commands in your terminal or PowerShell inside the project directory:

### Step 1: Initialize Git and Commit
```bash
# Initialize local repository
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: complete Valentius Kryptix WA-1 portfolio website"
```

### Step 2: Create a Public GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **+** icon in the top right corner and select **New repository**.
3. Set the repository name to: **`syed-portfolio`**.
4. Set the visibility to: **Public** (required by internship criteria).
5. **Do NOT** check "Add a README file", ".gitignore", or "license" (we already created them).
6. Click **Create repository**.

### Step 3: Link and Push to GitHub
```bash
# Set primary branch to main
git branch -M main

# Link remote repository
git remote add origin https://github.com/syedaqdas/Valentius-Kryptix-Web-App-Internship.git

# Push files to GitHub
git push -u origin main
```

---

## 🚀 Enabling GitHub Pages

To host your portfolio live on the web for free:

1. Navigate to your repository on GitHub: `https://github.com/syedaqdas/Valentius-Kryptix-Web-App-Internship`.
2. Click **Settings** (tab at the top right of the repo).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and keep the folder as `/ (root)`.
   - Click **Save**.
5. Wait 1–2 minutes, then refresh the page.
6. Your live portfolio URL will be shown at the top:
   ```text
   https://syedaqdas.github.io/Valentius-Kryptix-Web-App-Internship/
   ```

---

## ✅ Valentius Kryptix WA-1 Submission Checklist

Before submitting your project link to the internship portal, verify each of the following:

- [x] Pure HTML5, CSS3, and Vanilla JavaScript (No React, Tailwind, Bootstrap, etc.)
- [x] Semantic tags used throughout (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] Responsive navigation bar with SA initials logo, links, and "Let's Connect" button
- [x] Functional mobile hamburger menu with smooth scroll and auto-close
- [x] Hero section with Syed Aqdas, headline, supporting text, 2 CTA buttons, and vector visual
- [x] About section with 3 cards (*Problem Solving*, *Continuous Learning*, *Building Projects*) and editable info placeholders
- [x] Categorized skills section (*Programming*, *Web Development*, *Data Analysis*, *Tools*) with no misleading progress bars
- [x] Featured projects section with 3 required projects and working category filter (*All*, *Web*, *Data*, *SQL*)
- [x] Contact section with email (`aqdasssm@gmail.com`), GitHub/LinkedIn placeholders, and direct email draft action
- [x] Footer with dynamic copyright year, tagline, navigation, and social links
- [x] Accessible dark theme default with clean light theme toggle
- [x] Zero horizontal overflow at 375px, 768px, and 1280px
- [ ] Personalize placeholders in `index.html` with your actual details
- [x] Push to public GitHub repository `Valentius-Kryptix-Web-App-Internship`
- [ ] Copy the public GitHub repository URL into the Valentius Kryptix WA-1 submission field:
  ```text
  https://github.com/syedaqdas/Valentius-Kryptix-Web-App-Internship
  ```

---

**Crafted for Syed Aqdas** • *Valentius Kryptix Internship WA-1: Portfolio Website*
