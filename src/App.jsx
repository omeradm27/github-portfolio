import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './i18n';

import MainLayout from './layout/MainLayout';
import SocialMedia from './components/SocialMedia';

const Home = React.lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<div>Loading...</div>}>
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
    </Routes>
  );
}

export default App;
