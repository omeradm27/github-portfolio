import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Modal,
  Space,
  Tag
} from 'antd'
import {
  GithubOutlined,
  LinkOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import './Projects.css'

const { Title, Text, Paragraph } = Typography
const { Meta } = Card

export default function Projects() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)

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
      logo: '/src/assets/felixo.png'
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
      logo: '/src/assets/ZeroWasteGPT.png'
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
      logo: '/src/assets/Easy_Crm.png'
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
      logo: '/src/assets/Persiy.png'
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
      logo: '/src/assets/Vartur.png'
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
      logo: '/src/assets/Rasoft_PYS.png'
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
      logo: '/src/assets/libraryApp.png'
    }
  ]

  return (
    <>
      <motion.section
        id="projects"
        className="projects__section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={2} className="projects__header">
          {t('PROJECTS_TITLE')}
        </Title>

        <Row gutter={[24, 24]} justify="center" className="projects__grid">
          {projectsData.map((proj, i) => (
            <Col key={i} xs={24} sm={12} lg={8}>
              <Card
                hoverable
                className="projects__card-preview"
                cover={
                  <img
                    alt={proj.title}
                    src={proj.logo}
                    className="projects__cover"
                  />
                }
                actions={[
                  <Button
                    key="live"
                    type={proj.live ? 'primary' : 'default'}
                    disabled={!proj.live}
                    icon={<LinkOutlined />}
                    href={proj.live}

                    target="_blank"
                    style={{ paddingTop: '0.2rem',color:proj.live ? 'white':'gray' }}
                  >
                    Live
                  </Button>,
                  <Button
                    key="code"
                    type={proj.github ? 'primary' : 'default'}
                    disabled={!proj.github}
                    icon={<GithubOutlined />}
                    href={proj.github}
                    target="_blank"
                    style={{ paddingTop: '0.2rem' }}
                  >
                    Code
                  </Button>,
                  <Button
                    key="details"
                    type="text"
                    icon={<InfoCircleOutlined />}
                    onClick={() => setSelected(proj)}
                  >
                    Details
                  </Button>
                ]}
              >
                <Meta
                  title={<Text strong>{proj.title}</Text>}
                  description={<Text type="secondary">{proj.period}</Text>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </motion.section>

      <Modal
        open={!!selected}
        title={selected?.title}
        onCancel={() => setSelected(null)}
        footer={[
          <Button key="close" onClick={() => setSelected(null)}>
            Close
          </Button>
        ]}
        width={800}
      >
        {selected?.company && (
          <Paragraph>
            <Text strong>Company:</Text> {selected.company}
          </Paragraph>
        )}
        {selected?.period && (
          <Paragraph>
            <Text strong>Period:</Text> {selected.period}
          </Paragraph>
        )}
        <Paragraph>
          <Text strong>Details:</Text>
        </Paragraph>
        <ul>
          {selected?.details.map((d, idx) => (
            <li key={idx}>
              <Text>{d}</Text>
            </li>
          ))}
        </ul>
        <Paragraph>
          <Text strong>Technologies:</Text>
        </Paragraph>
        <Space wrap>
          {selected?.technologies.map((tech, i) => (
            <Tag key={i}>{tech}</Tag>
          ))}
        </Space>
      </Modal>
    </>
  )
}
