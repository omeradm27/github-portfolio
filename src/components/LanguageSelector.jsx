import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN", flag: "US" },
    { code: "tr", label: "TR", flag: "TR" },
    { code: "de", label: "DE", flag: "DE" },
    { code: "es", label: "ES", flag: "ES" },
    { code: "fr", label: "FR", flag: "FR" },
    { code: "pl", label: "PL", flag: "PL" },
    { code: "ru", label: "RU", flag: "RU" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className="lang-selector">
      <button onClick={() => setIsOpen(!isOpen)} className="lang-btn">
        <Flag code={currentLang.flag} alt={currentLang.label} style={{ width: '1.5rem', height: '1.5rem' }} />
        <span className="text-lg text-gray-800">{currentLang.label}</span>
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>

      {isOpen && (
        <div className="dropdown show">
          {languages.map((lang) => (
            <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="lang-option">
              <Flag code={lang.flag} alt={lang.label} className="w-5 h-5 mr-2" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
