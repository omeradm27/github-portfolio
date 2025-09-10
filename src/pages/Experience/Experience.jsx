import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Timeline, Card, Typography, Flex } from 'antd'
import './Experience.css'

const { Title } = Typography

const Experience = () => {
  const { t } = useTranslation()

  const experienceData = [
    {
      role: t('EXPERIENCE_ENTRY_0_ROLE'),
      company: t('EXPERIENCE_ENTRY_0_COMPANY'),
      period: t('EXPERIENCE_ENTRY_0_PERIOD'),
      location: t('EXPERIENCE_ENTRY_0_LOCATION'),
      details: t('EXPERIENCE_ENTRY_0_DETAILS', { returnObjects: true }),
    },
    {
      role: t('EXPERIENCE_ENTRY_1_ROLE'),
      company: t('EXPERIENCE_ENTRY_1_COMPANY'),
      period: t('EXPERIENCE_ENTRY_1_PERIOD'),
      location: t('EXPERIENCE_ENTRY_1_LOCATION'),
      details: t('EXPERIENCE_ENTRY_1_DETAILS', { returnObjects: true }),
    },
    {
      role: t('EXPERIENCE_ENTRY_2_ROLE'),
      company: t('EXPERIENCE_ENTRY_2_COMPANY'),
      period: t('EXPERIENCE_ENTRY_2_PERIOD'),
      location: t('EXPERIENCE_ENTRY_2_LOCATION'),
      details: t('EXPERIENCE_ENTRY_2_DETAILS', { returnObjects: true }),
    },
    {
      role: t('EXPERIENCE_ENTRY_3_ROLE'),
      company: t('EXPERIENCE_ENTRY_3_COMPANY'),
      period: t('EXPERIENCE_ENTRY_3_PERIOD'),
      location: t('EXPERIENCE_ENTRY_3_LOCATION'),
      details: t('EXPERIENCE_ENTRY_3_DETAILS', { returnObjects: true }),
    },
    {
      role: t('EXPERIENCE_ENTRY_5_ROLE'),
      company: t('EXPERIENCE_ENTRY_5_COMPANY'),
      period: t('EXPERIENCE_ENTRY_5_PERIOD'),
      location: t('EXPERIENCE_ENTRY_5_LOCATION'),
      details: t('EXPERIENCE_ENTRY_5_DETAILS', { returnObjects: true }),
    },
    {
      role: t('EXPERIENCE_ENTRY_4_ROLE'),
      company: t('EXPERIENCE_ENTRY_4_COMPANY'),
      period: t('EXPERIENCE_ENTRY_4_PERIOD'),
      location: t('EXPERIENCE_ENTRY_4_LOCATION'),
      details: t('EXPERIENCE_ENTRY_4_DETAILS', { returnObjects: true }),
    },
  ]

  return (
    <motion.section
      id="experience"
      className="experience__section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="experience__container">
        <Flex align="center" justify="center">
          <Title level={2} className="experience__title">
            {t('EXPERIENCE_TITLE')}
          </Title>
        </Flex>

        {/* MASAÜSTÜ */}
        <div className="experience__timeline desktop-only">
          <Timeline mode="alternate">
            {experienceData.map((item, idx) => (
              <Timeline.Item
                key={idx}
                label={<span className="experience__period">{item.period}</span>}
                dot={<span className="experience__dot" />}
              >
                <Card className="experience__card">
                  <h3 className="experience__role">{item.role}</h3>
                  <p className="experience__company">{item.company}</p>
                  <p className="experience__location">{item.location}</p>
                  <ul className="experience__details">
                    {item.details.map((line, i) => (
                      <li key={i} className="experience__details-item">{line}</li>
                    ))}
                  </ul>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>

        {/* MOBİL */}
        <div className="experience__mobile mobile-only">
          {experienceData.map((item, idx) => (
            <div key={idx} className="experience__mobile-item">
              <span className="experience__period">{item.period}</span>
              <Card className="experience__card">
                <h3 className="experience__role">{item.role}</h3>
                <p className="experience__company">{item.company}</p>
                <p className="experience__location">{item.location}</p>
                <ul className="experience__details">
                  {item.details.map((line, i) => (
                    <li key={i} className="experience__details-item">{line}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </motion.section>
  )
}

export default Experience
