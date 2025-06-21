import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Typography, Card, Space } from 'antd'
import './About.css'
import { FaAward, FaBrain, FaBriefcase } from 'react-icons/fa'
import DownloadButton from '../../components/DownloadButton'

const { Title, Text } = Typography

const About = () => {
  const { t } = useTranslation()

  return (
    <motion.section
      className="about section py-20 bg-gray-50"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="about__container">
        <div className="max-w-3xl p-4 bg-white rounded-xl shadow-lg text-center">
          <Title level={2} className="text-primary mb-2">
            {t('ABOUT_TITLE')}
          </Title>
          <Title level={5} className="text-gray-500 mb-4">
            {t('ABOUT_SUBTITLE')}
          </Title>
          <Space size="large" style={{margin: '1rem auto'}}>
            <Card className="aboutCard">
              <FaAward size={20}/>
              <Title level={4} className="text-primary">
                {t('ABOUT_CARD_TITLE_1')}
              </Title>
              <Title level={5} className="text-primary">
                {t('ABOUT_CARD_SUBTITLE_1')}
              </Title>
            </Card>
            <Card className="aboutCard">
              <FaBriefcase size={20}/>
              <Title level={4} className="text-primary">
                {t('ABOUT_CARD_TITLE_2')}
              </Title>
              <Title level={5} className="text-primary">
                {t('ABOUT_CARD_SUBTITLE_2')}
              </Title>
            </Card>
            <Card className="aboutCard">
              <FaBrain size={20}/>
              <Title level={4} className="text-primary">
                {t('ABOUT_CARD_TITLE_3')}
              </Title>
              <Title level={5} className="text-primary">
                {t('ABOUT_CARD_SUBTITLE_3')}
              </Title>
            </Card>
          </Space>
          <Text className="text-base text-gray-700 about__description">
            {t('ABOUT_PROFILE')}
          </Text>
        </div>
        <DownloadButton cv={"/github-portfolio/assets/Ömer_Çetinadam_Resume.pdf"} />
      </Card>
    </motion.section>
  )
}

export default About
