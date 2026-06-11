# Umesh Rathod — Portfolio

A manga-panel inspired developer portfolio built with React.
Designed to feel like reading a manga — not browsing a website.

## Live Demo
> Coming soon — deploying to Vercel

## Concept
Instead of the usual hero + scroll layout, this portfolio is structured
like a manga page. Each section is a panel. Clicking a panel triggers
a chapter title card animation and opens a full chapter page.

Inspired by Jujutsu Kaisen's panel composition — asymmetric layouts,
heavy ink blacks, dramatic typography, and intentional negative space.

## Tech Stack
- React + Vite
- React Router v6
- Redux Toolkit
- Plain CSS (no Tailwind — manga effects need custom CSS)

## Features
- Manga grid layout with asymmetric panels
- Typing animation with red cursed energy aura
- Chapter title card page transition on panel click
- Per-panel hover effects — red border draw, gloss shine, hint text
- Dedicated chapter pages for About, Skills, Projects, Blog
- Links page with categorized social links
- Visitor counter + time spent tracker
- Responsive footer with beating heart icon

## Project Structure
```
src/
├── app/
│   └── store.js
├── features/
│   └── manga/
│       └── mangaSlice.js
├── components/
│   ├── MangaGrid.jsx
│   ├── MangaGrid.css
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── PageTurn.jsx
│   └── PageTurn.css
├── pages/
│   ├── MainPage.jsx
│   ├── About.jsx
│   ├── About.css
│   ├── Skills.jsx
│   ├── Skills.css
│   ├── Links.jsx
│   ├── Links.css
│   ├── projects/
│   │   ├── MegaBlog.jsx
│   │   ├── EcoSangam.jsx
│   │   └── Project.css
│   └── blogs/
│       ├── CppBlog.jsx
│       └── Blog.css
└── index.css
```

## Run Locally
```bash
git clone https://github.com/UMESHRATHOD16/portfolio
cd portfolio
npm install
npm run dev
```

## Author
Rathod Umesh · NIT Jalandhar · 2nd Year IT Undergraduate
github.com/UMESHRATHOD16

Made With ❤️ By Rathod Umesh