import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Home.css';

const HomeContent = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      className="home section bg-gray-100 py-16"
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home__container container mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 px-4">

        {/* Left side: Text Content */}
        <div className=" flex flex-row justify-center items-start flex-1 text-center lg:text-left">
          <h1 className="home__title text-3xl lg:text-4xl font-bold text-primary mb-4">{t('HOME_TITLE')}</h1>
          <p className="home__subtitle text-lg text-gray-600 mb-6">{t('HOME_SUBTITLE')}</p>
          <p className="home__description text-gray-700 mb-6">{t('HOME_CONTENT')}</p>

          {/* Ant Design Button with Tailwind Styling */}
          <Button
            type="primary"
            shape="round"
            icon={<ArrowRightOutlined />}
            size="large"
            onClick={e => {
              e.preventDefault();
              const target = document.getElementById('contract');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('HOME_BUTTON')}
          </Button>
        </div>

        {/* Right side: Profile Image */}
        <div className="home__right flex justify-center items-center flex-1">
          <div className="home__img w-40 h-40 rounded-full shadow-xl bg-cover bg-center"
            style={{ backgroundImage: 'url("/github-portfolio/assets/profile.jpg")' }}>
          </div>
        </div>

      </div>
    </motion.section>

  );
};

export default HomeContent;
