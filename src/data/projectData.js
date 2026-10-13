// Project data. Texts come from i18n (public/locales/*.json), so this is a
// function of `t` and must be called inside a component (re-renders on language change).
// `logo` paths are relative to the public folder; components prefix them with
// import.meta.env.BASE_URL so the same file works on GitHub Pages and Vercel.

const details = (t, key, count) =>
    Array.from({ length: count }, (_, i) => t(`PROJECTS_${key}_DETAILS_${i + 1}`));

const project = (t, key, count, rest) => ({
    key,
    title: t(`PROJECTS_${key}_TITLE`),
    company: t(`PROJECTS_${key}_COMPANY`),
    period: t(`PROJECTS_${key}_PERIOD`),
    details: details(t, key, count),
    ...rest,
});

export const getProjectsData = (t) => [
    project(t, 'MULTIVIA', 4, {
        technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'PostGIS', 'React', 'TanStack Router/Query', 'MapLibre', 'Flutter', 'OpenAPI', 'Vitest', 'Playwright', 'Railway'],
        logo: 'assets/multivia.webp',
    }),
    project(t, 'NEVASCHOLAR', 4, {
        technologies: ['NestJS', 'Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Bull', 'Stripe', 'Supabase', 'Railway', 'Vercel'],
        live: 'https://nevascholar.com',
        logo: 'assets/nevascholar.webp',
    }),
    project(t, 'ALBAMEDIA', 4, {
        technologies: ['NestJS', 'MongoDB', 'React', 'Vite', 'MUI', 'TanStack Query', 'Google Cloud Storage', 'Shotstack', 'Docker', 'Railway', 'Vercel'],
        live: 'https://albamedia.nl',
        logo: 'assets/albamedia.webp',
    }),
    project(t, 'LOSTANDFOUND', 4, {
        technologies: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'iyzico', 'Docker', 'Nginx', 'GitHub Actions', 'Vercel'],
        live: 'https://lostandfound.com.tr',
        logo: 'assets/lostandfound.webp',
    }),
    project(t, 'NDK', 4, {
        technologies: ['Node.js', 'Express', 'React', 'Vite', 'Prisma', 'PostgreSQL', 'Supabase', 'MySQL', 'Zustand', 'Tailwind CSS', 'Vercel'],
        live: 'https://ndkdanismanlik.com',
        logo: 'assets/ndk.webp',
    }),
    project(t, 'MTLMS', 3, {
        technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'TanStack Query', 'Cloudinary', 'Nodemailer'],
        logo: 'assets/multitransport-lms.webp',
    }),
    project(t, 'DESIGNSMILE', 3, {
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl', 'Docker', 'GitHub Actions', 'Nginx', 'PM2'],
        live: 'https://designsmileturkey.com',
        logo: 'assets/designsmile.webp',
    }),
    project(t, 'PERSIY', 3, {
        technologies: ['Next.js', 'React', 'TypeScript', 'MUI', 'Zustand', 'Express', 'Prisma', 'PostgreSQL', 'Firebase Auth', 'Vercel'],
        live: 'https://persiy.com',
        logo: 'assets/Persiy.webp',
    }),
    project(t, 'EASYCRM', 3, {
        technologies: ['React', 'Ant Design', 'Redux Toolkit', 'Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Firebase'],
        live: 'https://crm-test-frontend.vercel.app/',
        logo: 'assets/Easy_Crm.webp',
    }),
    project(t, 'ZEROWASTE', 3, {
        technologies: ['React', 'Vite', 'MUI', 'TanStack Query', 'Formik', 'i18next', 'Nginx', 'PM2'],
        live: 'https://zerowastegpt.org',
        logo: 'assets/ZerowasteGPT.webp',
    }),
    project(t, 'FELIXO', 3, {
        technologies: ['.NET Core', 'Node.js', 'Vue.js', 'Redis', 'RabbitMQ', 'Azure DevOps'],
        live: 'https://felixo.com',
        logo: 'assets/Felixo.webp',
    }),
    project(t, 'VARTUR', 3, {
        technologies: ['PHP', 'Laravel', 'Vue.js', 'TypeScript', 'Prisma', 'Docker', 'Redis', 'RabbitMQ', 'MySQL', 'MongoDB'],
        live: 'http://vartur.com',
        logo: 'assets/vartur.webp',
    }),
    project(t, 'CATERING', 3, {
        technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Socket.IO', 'Cloudinary'],
        live: 'https://pys.rasoft.com.tr/',
        logo: 'assets/Rasoft_PYS.webp',
    }),
    project(t, 'LIBRARY', 4, {
        technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'TypeScript'],
        live: 'https://library-app-web.vercel.app/',
        github: 'https://github.com/omeradm27/library-app-web',
        logo: 'assets/libraryApp.webp',
    }),
    project(t, 'WATERFOOTPRINT', 4, {
        technologies: ['React', 'Tailwind CSS', 'Vercel'],
        live: 'https://ayakizi.suverimliligi.gov.tr/',
        logo: 'assets/water-footprint.webp',
    }),
];
