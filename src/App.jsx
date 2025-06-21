import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './i18n';

import MainLayout from './layout/MainLayout';
import SocialMedia from './components/SocialMedia';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Education = React.lazy(() => import('./pages/Education/Education'));
const Experience = React.lazy(() => import('./pages/Experience/Experience'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));
const Skills = React.lazy(() => import('./pages/Skills/Skills'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<Loading />}>
        <AnimatePresence exitBeforeEnter>
          <MainLayout>
            <AnimatedRoutes />
          </MainLayout>
        </AnimatePresence>
      </Suspense>
      <SocialMedia />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
