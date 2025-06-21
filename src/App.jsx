import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import './i18n';

import MainLayout from './layout/MainLayout';
import SocialMedia from './components/SocialMedia';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <Router>
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
    <Routes location={location} key={location.key}>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
