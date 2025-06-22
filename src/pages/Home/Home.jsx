// src/pages/Home/Home.jsx
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomeContent from './HomeContent'
import ProjectCarousel from '../../components/projectCarousel/ProjectCarousel'
import About from '../About/About'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Scrollup from '../../components/Scrollup'
import {projectsData} from '../../data/projectData'
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Home = () => {

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
