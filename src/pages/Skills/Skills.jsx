// src/pages/Skills/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Typography, Divider } from 'antd'
import {
  FaNodeJs,
  FaJava,
  FaDocker,
  FaReact
} from 'react-icons/fa'
import {
  SiExpress,
  SiTypescript,
  SiVuedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiRabbitmq,
  SiGithubactions,
  SiAzurepipelines,
  SiOpenai,
  SiVercel,
  SiFastify,
  SiDotnet,
  SiAwsamplify,
  SiMicrosoftsqlserver,
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiWindicss,
  SiAntdesign,
  SiNextdotjs,
  SiPrisma,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux
} from 'react-icons/si'
import './Skills.css'

const { Title, Text } = Typography

const frontendCI = [
  { name: 'ReactJS', icon: <FaReact size={32} /> },
  { name: 'Redux', icon: <SiRedux size={32} /> },
  { name: 'VueJS', icon: <SiVuedotjs size={32} /> },
  { name: 'NextJS', icon: <SiNextdotjs size={32} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
  { name: 'Windmill UI', icon: <SiWindicss size={32} /> },
  { name: 'Antdesign', icon: <SiAntdesign size={32} /> },
  { name: 'HTML', icon: <SiHtml5 size={32} /> },
  { name: 'CSS', icon: <SiCss3 size={32} /> },
  { name: 'OpenAI API', icon: <SiOpenai size={32} /> },
  { name: 'Docker', icon: <FaDocker size={32} /> },
  { name: 'GitHub Actions', icon: <SiGithubactions size={32} /> },
  { name: 'Azure Pipelines', icon: <SiAzurepipelines size={32} /> },
  { name: 'AWS Cloud', icon: <SiAwsamplify size={32} /> },
  { name: 'Vercel CI', icon: <SiVercel size={32} /> },
]

const backendDB = [
  { name: 'NodeJS', icon: <FaNodeJs size={32} /> },
  { name: 'ExpressJS', icon: <SiExpress size={32} /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} /> },
  { name: 'Fastify', icon: <SiFastify size={32} /> },
  { name: '.NET Core', icon: <SiDotnet size={32} /> },
  { name: 'Javascript', icon: <SiJavascript size={32} /> },
  { name: 'PHP', icon: <SiPhp size={32} /> },
  { name: 'Prisma', icon: <SiPrisma size={32} /> },
  { name: 'Sequelize', icon: <SiSequelize size={32} /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
  { name: 'MSSQL Server', icon: <SiMicrosoftsqlserver size={32} /> },
  { name: 'MySQL', icon: <SiMysql size={32} /> },
  { name: 'Redis', icon: <SiRedis size={32} /> },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={32} /> },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="skills"
      className="skills__section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills__container">
        <Title level={2} style={{ marginBottom: '2rem' }}>
          {t('SKILLS_TITLE')}
        </Title>

        <Row gutter={24}>
          {/* Backend & Database */}
          <Col xs={24} md={12}>
            <Card className="skills__group">
              <Title level={4}>Backend & Database</Title>
              <Divider />
              <Row gutter={[16, 16]}>
                {backendDB.map(({ name, icon }, i) => (
                  <Col key={i} xs={12} sm={8} lg={8}>
                    <Card hoverable className="skills__card">
                      <div className="skills__icon">{icon}</div>
                      <Text className="skills__text">{name}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          {/* Frontend & CI/CD */}
          <Col xs={24} md={12}>
            <Card className="skills__group">
              <Title level={4}>Frontend & CI/CD</Title>
              <Divider />
              <Row gutter={[16, 16]}>
                {frontendCI.map(({ name, icon }, i) => (
                  <Col key={i} xs={12} sm={8} lg={8}>
                    <Card hoverable className="skills__card">
                      <div className="skills__icon">{icon}</div>
                      <Text className="skills__text">{name}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    </motion.section>
  )
}
