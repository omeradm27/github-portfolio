import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './Home.css';
import ProjectCarousel from '../../components/projectCarousel/ProjectCarousel';

const Home = () => {
  const { t } = useTranslation();
const projectsData = [
    {
      title: t('PROJECTS_FELIXO_TITLE'),
      company: t('PROJECTS_FELIXO_COMPANY'),
      period: t('PROJECTS_FELIXO_PERIOD'),
      details: [
        t('PROJECTS_FELIXO_DETAILS_1'),
        t('PROJECTS_FELIXO_DETAILS_2'),
        t('PROJECTS_FELIXO_DETAILS_3')
      ],
      technologies: ['.NET Core', 'Node.js', 'Vue.js', 'Redis', 'RabbitMQ'],
      live: 'https://felixo.com',
      logo: '/assets/Felixo.png'
    },
    {
      title: t('PROJECTS_ZEROWASTEGPT_TITLE'),
      period: t('PROJECTS_ZEROWASTEGPT_PERIOD'),
      details: [
        t('PROJECTS_ZEROWASTEGPT_DETAILS_1'),
        t('PROJECTS_ZEROWASTEGPT_DETAILS_2')
      ],
      technologies: ['Next.js', 'Redis', 'Vercel', 'OpenAI GPT-4'],
      live: 'https://zerowastegpt.org/',
      logo: '/assets/ZerowasteGPT.png'
    },
    {
      title: t('PROJECTS_EASYCRM_TITLE'),
      period: t('PROJECTS_EASYCRM_PERIOD'),
      details: [
        t('PROJECTS_EASYCRM_DETAILS_1'),
        t('PROJECTS_EASYCRM_DETAILS_2')
      ],
      technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      live: 'https://crm-test-frontend.vercel.app/',
      logo: '/assets/Easy_Crm.png'
    },
    {
      title: t('PROJECTS_PERSIY_TITLE'),
      period: t('PROJECTS_PERSIY_PERIOD'),
      details: [
        t('PROJECTS_PERSIY_DETAILS_1'),
        t('PROJECTS_PERSIY_DETAILS_2'),
        t('PROJECTS_PERSIY_DETAILS_3'),
        t('PROJECTS_PERSIY_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Next.js', 'Prisma', 'PostgreSQL', 'GitHub Actions', 'Vercel'],
      github: 'https://github.com/yourusername/persiy',
      live: 'https://persiy-frontend.vercel.app/',
      logo: '/assets/Persiy.png'
    },
    {
      title: t('PROJECTS_VARTUR_TITLE'),
      company: t('PROJECTS_VARTUR_COMPANY'),
      period: t('PROJECTS_VARTUR_PERIOD'),
      details: [
        t('PROJECTS_VARTUR_DETAILS_1'),
        t('PROJECTS_VARTUR_DETAILS_2'),
        t('PROJECTS_VARTUR_DETAILS_3'),
        t('PROJECTS_VARTUR_DETAILS_4')
      ],
      technologies: ['PHP', 'Laravel', 'Vue.js', 'Prisma', 'Docker', 'Redis', 'RabbitMQ', 'MongoDB', 'MySQL'],
      live: 'http://vartur.com/',
      logo: '/assets/Vartur.png'
    },
    {
      title: t('PROJECTS_RASOFT_TITLE'),
      period: t('PROJECTS_RASOFT_PERIOD'),
      details: [
        t('PROJECTS_RASOFT_DETAILS_1'),
        t('PROJECTS_RASOFT_DETAILS_2'),
        t('PROJECTS_RASOFT_DETAILS_3'),
        t('PROJECTS_RASOFT_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'],
      live: 'https://pys.rasoft.com.tr/',
      logo: '/assets/Rasoft_PYS.png'
    },
    {
      title: t('PROJECTS_LIBRARY_TITLE'),
      details: [
        t('PROJECTS_LIBRARY_DETAILS_1'),
        t('PROJECTS_LIBRARY_DETAILS_2'),
        t('PROJECTS_LIBRARY_DETAILS_3'),
        t('PROJECTS_LIBRARY_DETAILS_4')
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'TypeScript'],
      live: 'https://library-app-web.vercel.app/',
      github: 'https://github.com/omeradm27/library-app-web',
      logo: '/assets/libraryApp.png'
    }
  ]
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
            href="/contact"
            className="py-3 px-6 text-black text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            {t('HOME_BUTTON')}
          </Button>
        </div>

        {/* Right side: Profile Image */}
        <div className="home__right flex justify-center items-center flex-1">
          <div className="home__img w-40 h-40 rounded-full shadow-xl bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/profile.jpg")' }}>
          </div>
        </div>

      </div>
      <ProjectCarousel projects={projectsData} />
    </motion.section>

  );
};

export default Home;
