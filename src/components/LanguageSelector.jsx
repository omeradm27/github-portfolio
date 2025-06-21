import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags"; // Flag component for flag icons
import './LanguageSelector.css'; // Make sure this CSS is updated
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector">
      <button onClick={() => setIsOpen(!isOpen)} className="lang-btn">
        {/* Display selected language and flag */}
        <Flag
          code={i18n.language === "en" ? "GB" : "TR"}
          alt={i18n.language}
          style={{
            width: '1.5rem',
            height: '1.5rem'
          }} />
        <span
          className={`text-lg ${i18n.language === "en" ? "text-gray-800" : "text-green-500"}`}
        >
          {i18n.language === "en" ? "EN" : "TR"}
        </span>
        {isOpen?<FaCaretUp />:
        <FaCaretDown />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown show">
          <button onClick={() => changeLanguage("en")} className="lang-option">
            <Flag code="GB" alt="EN" className="w-5 h-5 mr-2" />
            EN
          </button>
          <button onClick={() => changeLanguage("tr")} className="lang-option">
            <Flag code="TR" alt="TR" className="w-5 h-5 mr-2" />
            TR
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
