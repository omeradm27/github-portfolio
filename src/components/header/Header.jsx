import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaFolderOpen, FaCog, FaEnvelope } from 'react-icons/fa';
import LanguageSelector from './../LanguageSelector';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hdr = document.querySelector('.header');
      if (window.scrollY > 100) {
        hdr.classList.add('scroll-header');
      } else {
        hdr.classList.remove('scroll-header');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <img src="/logo.png" alt="Ömer Çetinadam" className='logo'/>
        </NavLink>
        <div className={open ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list">
            {[
              { key: 'about', label: t('HEADER_ABOUT'), icon: <FaUser /> },
              { key: 'education', label: t('HEADER_EDUCATION'), icon: <FaGraduationCap /> },
              { key: 'experience', label: t('HEADER_EXPERIENCE'), icon: <FaBriefcase /> },
              { key: 'projects', label: t('HEADER_PROJECTS'), icon: <FaFolderOpen /> },
              { key: 'skills', label: t('HEADER_SKILLS'), icon: <FaCog /> },
              { key: 'contact', label: t('HEADER_CONTACT'), icon: <FaEnvelope /> },
            ].map(({ key, label, icon }) => (
              <li key={key} className="nav__item">
                <NavLink
                  to={key === 'home' ? '/' : `/${key}`}
                  className={({ isActive }) => isActive ? 'nav__link active-link' : 'nav__link '}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav__icon">{icon}</span>
                  <span  className="nav__icon">{t(label)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="nav__close" onClick={() => setOpen(false)}>×</button>
        </div>
        <button className="nav__toggle" onClick={() => setOpen(!open)}>☰</button>
        <LanguageSelector />
      </nav>
    </header>
  );
};

export default Header;
