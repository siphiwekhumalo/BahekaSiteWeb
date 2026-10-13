# Baheka Technology Website

The marketing website for Baheka Technology, built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion** and **Lucide** icons.

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/content.js     # All site copy: services, industries, stats, case studies, etc.
  components/         # One component per page section
  App.jsx             # Page composition
  index.css           # Tailwind layers and shared component classes
tailwind.config.js    # Brand colours, fonts and animations
```

Most content changes only need edits to `src/data/content.js`.

## Before going live

- Replace the placeholder statistics, case studies, testimonials and team/office figures with verified company data.
- Update contact details (email, phone, address) in `src/components/Contact.jsx`.
- Connect the contact form to a backend or CRM. See the `TODO` in `Contact.jsx`; it is currently simulated.
- Add real social media URLs in `src/components/Footer.jsx`.
