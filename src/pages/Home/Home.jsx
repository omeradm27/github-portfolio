// src/pages/Home/Home.jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import HomeContent from './HomeContent'
import ProjectCarousel from '../../components/projectCarousel/ProjectCarousel'
import About from '../About/About'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Scrollup from '../../components/Scrollup'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Home = () => {
  const { t } = useTranslation()
  const projectsData = [
    {
      title: t('PROJECTS_FELIXO_TITLE'),
      company: t('PROJECTS_FELIXO_COMPANY'),
      period: t('PROJECTS_FELIXO_PERIOD'),
      details: [
        t('PROJECTS_FELIXO_DETAILS_1'),
        t('PROJECTS_FELIXO_DETAILS_2'),
        t('PROJECTS_FELIXO_DETAILS_3')
      ],
      technologies: ['.NET Core', 'Node.js', 'Vue.js', 'Redis', 'RabbitMQ'],
      live: 'https://felixo.com',
      logo: '/assets/Felixo.png'
    },
    {
      title: t('PROJECTS_ZEROWASTEGPT_TITLE'),
      period: t('PROJECTS_ZEROWASTEGPT_PERIOD'),
      details: [
        t('PROJECTS_ZEROWASTEGPT_DETAILS_1'),
        t('PROJECTS_ZEROWASTEGPT_DETAILS_2')
      ],
      technologies: ['Next.js', 'Redis', 'Vercel', 'OpenAI GPT-4'],
      live: 'https://zerowastegpt.org/',
      logo: '/assets/ZerowasteGPT.png'
    },
    {
      title: t('PROJECTS_EASYCRM_TITLE'),
      period: t('PROJECTS_EASYCRM_PERIOD'),
      details: [
        t('PROJECTS_EASYCRM_DETAILS_1'),
        t('PROJECTS_EASYCRM_DETAILS_2')
      ],
      technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      live: 'https://crm-test-frontend.vercel.app/',
      logo: '/assets/Easy_Crm.png'
    },
    {
      title: t('PROJECTS_PERSIY_TITLE'),
      period: t('PROJECTS_PERSIY_PERIOD'),
      details: [
        t('PROJECTS_PERSIY_DETAILS_1'),
        t('PROJECTS_PERSIY_DETAILS_2'),
        t('PROJECTS_PERSIY_DETAILS_3'),
        t('PROJECTS_PERSIY_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Next.js', 'Prisma', 'PostgreSQL', 'GitHub Actions', 'Vercel'],
      github: 'https://github.com/yourusername/persiy',
      live: 'https://persiy-frontend.vercel.app/',
      logo: '/assets/Persiy.png'
    },
    {
      title: t('PROJECTS_VARTUR_TITLE'),
      company: t('PROJECTS_VARTUR_COMPANY'),
      period: t('PROJECTS_VARTUR_PERIOD'),
      details: [
        t('PROJECTS_VARTUR_DETAILS_1'),
        t('PROJECTS_VARTUR_DETAILS_2'),
        t('PROJECTS_VARTUR_DETAILS_3'),
        t('PROJECTS_VARTUR_DETAILS_4')
      ],
      technologies: ['PHP', 'Laravel', 'Vue.js', 'Prisma', 'Docker', 'Redis', 'RabbitMQ', 'MongoDB', 'MySQL'],
      live: 'http://vartur.com/',
      logo: '/assets/Vartur.png'
    },
    {
      title: t('PROJECTS_RASOFT_TITLE'),
      period: t('PROJECTS_RASOFT_PERIOD'),
      details: [
        t('PROJECTS_RASOFT_DETAILS_1'),
        t('PROJECTS_RASOFT_DETAILS_2'),
        t('PROJECTS_RASOFT_DETAILS_3'),
        t('PROJECTS_RASOFT_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'],
      live: 'https://pys.rasoft.com.tr/',
      logo: '/assets/Rasoft_PYS.png'
    },
    {
      title: t('PROJECTS_LIBRARY_TITLE'),
      details: [
        t('PROJECTS_LIBRARY_DETAILS_1'),
        t('PROJECTS_LIBRARY_DETAILS_2'),
        t('PROJECTS_LIBRARY_DETAILS_3'),
        t('PROJECTS_LIBRARY_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'TypeScript'],
      live: 'https://library-app-web.vercel.app/',
      github: 'https://github.com/omeradm27/library-app-web',
      logo: '/assets/libraryApp.png'
    }
  ]
  const sections = [
    { id: 'home', Component: HomeContent },
    { id: 'featured', Component: () => <ProjectCarousel projects={projectsData} /> },
    { id: 'about', Component: About },
    { id: 'education', Component: Education },
    { id: 'experience', Component: Experience },
    { id: 'projects', Component: Projects },
    { id: 'skills', Component: Skills },
    { id: 'contact', Component: Contact }
  ]

  return (
    <AnimatePresence mode="wait">
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
        >
          <Component id={id} />
        </motion.section>
      ))}
      <Scrollup />
    </AnimatePresence>
  )
}

export default Home
