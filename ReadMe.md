# Ömer Çetinadam | Full-Stack Developer Portfolio

Personal portfolio of Ömer Çetinadam, Computer Engineer and Full-Stack Developer based in Bremen, Germany.
It is a single-page application: every section (home, featured projects, about, education, experience,
projects, skills, references, contact) is rendered on one scrolling page.

## Live

| Branch | Hosting | URL |
| ------ | ------- | --- |
| `main` | GitHub Pages (via GitHub Actions) | https://omeradm27.github.io/github-portfolio |
| `test` | Vercel | https://www.omercetinadam.com |

---

## Features

- Fast, responsive SPA built with React and Vite
- Seven languages (EN, TR, DE, ES, FR, PL, RU) with `i18next` / `react-i18next`, loaded on demand from `public/locales`
- Language-aware CV: the "Show CV" / "Download CV" buttons serve the German CV for `de`, the English CV otherwise
- Featured-projects carousel and project detail modals built with Ant Design
- Section animations with `framer-motion`
- Contact form via EmailJS, protected by Google reCAPTCHA
- Deploy-agnostic asset paths (`import.meta.env.BASE_URL`), so the same data files work on GitHub Pages and Vercel

## Tech Stack

- **UI:** React 18, Ant Design 5, react-icons, utility CSS (Tailwind/WindiCSS classes) and plain CSS per section
- **Build:** Vite 6, ESLint 9
- **Routing:** React Router (`HashRouter`, required for GitHub Pages)
- **i18n:** i18next + react-i18next + i18next-http-backend (7 languages)
- **Animation:** framer-motion
- **Contact:** EmailJS, react-google-recaptcha
- **CI/CD:** GitHub Actions + `peaceiris/actions-gh-pages` (main), Vercel (test)

---

## Project Structure

```
├── .github/workflows/deploy.yml  # Build and deploy main to GitHub Pages
├── public/
│   ├── assets/                   # Project covers, company logos, CV PDFs (mostly WebP)
│   ├── locales/                  # Translation files: en, tr, de, es, fr, pl, ru (.json)
│   └── .nojekyll                 # Serve files as-is on GitHub Pages
├── src/
│   ├── components/               # Header, footer, carousel, language selector, buttons, ...
│   ├── data/                     # Content builders: getProjectsData(t), getExperienceData(t),
│   │                             # getEducationData(t), getPeopleRefs(t), getCompanyRefs()
│   ├── layout/                   # Main layout (header, footer, social links)
│   ├── pages/                    # Sections: Home, About, Education, Experience, Projects,
│   │                             # Skills, References, Contact
│   ├── i18n.js                   # i18next configuration
│   ├── App.jsx                   # Router and layout
│   └── index.jsx                 # Entry point
├── index.html
└── vite.config.js                # base: '/github-portfolio/' for GitHub Pages
```

Texts live in `public/locales/*.json`; the files in `src/data` only hold keys, links,
technologies and image paths (relative to `public/`, prefixed with `import.meta.env.BASE_URL` at render time).

---

## Development

```bash
git clone https://github.com/omeradm27/github-portfolio.git
cd github-portfolio
npm ci
npm run dev      # start the dev server
npm run lint     # lint
npm run build    # production build into dist/
```

## Deployment

- **GitHub Pages (`main`):** every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm run build`,
  copies `dist/index.html` to `dist/404.html` (SPA fallback) and publishes `dist/` to the `gh-pages` branch.
  The workflow writes the repository secrets `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
  `VITE_EMAILJS_PUBLIC_KEY` and `VITE_RECAPTCHA_SITE_KEY` into `.env.production` before building.
- **Vercel (`test`):** deployed automatically by Vercel from the `test` branch (`vercel.json` rewrites all routes to the SPA).

---

## Contact

- Email: [omercetinadam.de@gmail.com](mailto:omercetinadam.de@gmail.com)
- Phone: +49 178 4671335
- LinkedIn: [linkedin.com/in/omercetinadam](https://www.linkedin.com/in/omercetinadam/)
- GitHub: [github.com/omeradm27](https://github.com/omeradm27)
- Website: [omercetinadam.com](https://www.omercetinadam.com)

## License

This project is licensed under the MIT License — feel free to use and adapt it.
