import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Card, Typography, Flex } from 'antd'
import './Education.css'
import Link from 'antd/es/typography/Link'
import {educationData} from '../../data/educationData'
const { Title } = Typography

const Education = () => {
  const { t } = useTranslation()

  return (
    <motion.section
      id="education"
      className="education__section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="education__container">
        <Title level={2} className="education__title">
          {t('EDUCATION_TITLE')}
        </Title>

        <div className="education__list">
          {educationData.map((item, idx) => (
            <Link href={item.link} target="_blank" key={idx}>
              <div className="education__item" key={idx}>
                <div className="education__left">
                  <img src={item.logo} alt="logo" className="education__logo" />
                  <div className="education__period">{item.period}</div>
                </div>
                <div className="education__center">
                  {idx !== educationData.length - 1 && (
                    <div className="education__line" />
                  )}
                </div>
                <Card className="education__card">
                  <h3 className="education__degree">{item.degree}</h3>
                  <p className="education__institution">{item.institution}</p>
                  <p className="education__grade">{item.grade}</p>
                  <p className="education__location">{item.location}</p>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </motion.section>
  )
}

export default Education
