import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaFolderOpen,
  FaCog,
  FaEnvelope
} from 'react-icons/fa';
import LanguageSelector from '../LanguageSelector';
import './Header.css';

const SECTIONS = [
  { id: 'about',     labelKey: 'HEADER_ABOUT',     icon: <FaUser />         },
  { id: 'education', labelKey: 'HEADER_EDUCATION', icon: <FaGraduationCap /> },
  { id: 'experience',labelKey: 'HEADER_EXPERIENCE',icon: <FaBriefcase />    },
  { id: 'projects',  labelKey: 'HEADER_PROJECTS',   icon: <FaFolderOpen />   },
  { id: 'skills',    labelKey: 'HEADER_SKILLS',     icon: <FaCog />          },
  { id: 'contact',   labelKey: 'HEADER_CONTACT',    icon: <FaEnvelope />      },
];

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  const menuRef = useRef(null);

  // 1) Scroll listener to toggle 'scroll-header' class
  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector('.header')
        .classList.toggle('scroll-header', window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2) Close mobile menu if you click outside it
  useEffect(() => {
    const onClickOutside = e => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = id => e => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        {/* logo + mobile toggle */}
        <div className="nav__mobile-wrapper">
          <a href="#about" className="nav__logo" onClick={scrollTo('about')}>
            <img src="/assets/logo.png" alt="Logo" className="logo" />
          </a>
          <div className="nav__actions">
            {window.innerWidth <= 768 && <LanguageSelector />}
            <button
              className="nav__toggle"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* menu */}
        <div
          ref={menuRef}
          className={`nav__menu ${open ? 'show-menu' : ''}`}
        >
          <ul className="nav__list">
            {SECTIONS.map(({ id, labelKey, icon }) => (
              <li key={id} className="nav__item">
                <a
                  href={`#${id}`}
                  className={`nav__link${active === id ? ' active-link' : ''}`}
                  onClick={scrollTo(id)}
                >
                  <span className="nav__icon">{icon}</span>
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* desktop language selector */}
        {window.innerWidth > 768 && <LanguageSelector />}
      </nav>
    </header>
  );
}
