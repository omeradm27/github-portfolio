# 🌐 Ömer Çetinadam | Full-Stack Developer Portfolio

Welcome to my personal portfolio built with modern web technologies. This project showcases my professional background, tech stack, featured projects, and contact information — all in a smooth, SPA (Single Page Application) experience.


## 🚀 Live Demo
🔗 [Visit Portfolio](https://omeradm27.github.io/github-portfolio)

---

## ✨ Features

- ⚡ **Fast & Responsive SPA** using React & Vite
- 🌐 Multi-language support with `react-i18next`
- 🧩 Animated transitions powered by `framer-motion`
- 💼 Dynamic project carousel built with Ant Design
- 🛠️ CI/CD deployment via GitHub Pages & Actions
- ☁️ Deployed on [GitHub Pages](https://pages.github.com)

---

## 🧪 Tech Stack

**Frontend**
- React, React Router, Redux
- Tailwind CSS, Ant Design
- i18n (multi-language)


**CI/CD**
- GitHub Actions, Vercel

---

## 📂 Project Structure

```
├── public/
│   └── assets/             # Logos, images
│   └── locales/            # JSON files for translations
├── src/
│   ├── components/         # Reusable UI components (e.g. Header, Footer)
│   ├── pages/              # Main sections: Home, About, Projects...
│   ├── layout/             # Layout wrapper
│   ├── i18n/               # Internationalization config
│   ├── App.jsx             # Router & layout
│   └── index.jsx            # App entry        
├── vite.config.js          # Vite config with base path
└── README.md
```

---

## 🛠️ Setup & Development

```bash
# 1. Clone the repo
git clone https://github.com/omeradm27/github-portfolio.git
cd github-portfolio

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
```

> Ensure `vite.config.js` has the correct `base: '/github-portfolio/'` for GitHub Pages.

---

## 🚀 Deployment (GitHub Pages)

The project is deployed using GitHub Actions and `peaceiris/actions-gh-pages`.

**To deploy manually:**

```bash
npm run build
npx gh-pages -d dist
```

**To deploy automatically:**

Update your `.github/workflows/deploy.yml` to build and push `dist/` to the `gh-pages` branch.

---

## 📬 Contact

Have a question or want to collaborate?

📧 [omeradm27@gmail.com](mailto:omeradm27@gmail.com)  
🌐 [LinkedIn](https://linkedin.com/in/omer-cetinadam)

---

## 📄 License

This project is licensed under the MIT License — feel free to use and adapt it.
