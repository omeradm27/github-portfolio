import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUser, FaGraduationCap, FaBriefcase, FaFolderOpen, FaCog, FaEnvelope } from 'react-icons/fa';
import LanguageSelector from './../LanguageSelector';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__mobile-wrapper">
          <NavLink to="/" className="nav__logo">
            <img src='/assets/logo.png' alt="Ömer Çetinadam" className='logo' />
          </NavLink>
          <div className="nav__actions">
            {isMobile && <LanguageSelector />}
            <button className="nav__toggle" onClick={() => setOpen(!open)}>☰</button>
          </div>
        </div>
        <div ref={menuRef} className={open ? 'nav__menu show-menu' : 'nav__menu'}>
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
                  <span className="nav__icon">{t(label)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {!isMobile && <LanguageSelector />}
      </nav>
    </header>
  );
};

export default Header;
