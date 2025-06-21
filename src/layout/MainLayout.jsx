import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import LanguageSelector from '../components/LanguageSelector';
import SocialMedia from '../components/SocialMedia';
import AppFooter from '../components/footer/AppFooter';

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const transition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

const MainLayout = ({ children }) => (
  <>
    <Header />
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.main>
    <SocialMedia />
    <AppFooter />
  </>
);

export default MainLayout;