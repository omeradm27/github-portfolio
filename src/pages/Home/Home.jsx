// src/pages/Home/Home.jsx
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
import { getProjectsData } from '../../data/projectData'
import References from '../References/References'

// Defined at module level so the carousel is not remounted on every Home render;
// it re-renders with fresh translations when the language changes.
const FeaturedProjects = () => {
  const { t } = useTranslation()
  return <ProjectCarousel projects={getProjectsData(t)} />
}

const sections = [
  { id: 'home', Component: HomeContent },
  { id: 'featured', Component: FeaturedProjects },
  { id: 'about', Component: About },
  { id: 'education', Component: Education },
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
  { id: 'references', Component: References },
  { id: 'contact', Component: Contact }
]

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Home = () => {
  return (
    <AnimatePresence mode="wait">
      {sections.map((section) => {
        const { id, Component } = section
        return (
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
        )
      })}
      <Scrollup />
    </AnimatePresence>
  )
}

export default Home
