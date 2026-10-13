import { useState } from 'react'
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
import { getProjectsData } from '../../data/projectData'
const { Title, Text, Paragraph } = Typography
const { Meta } = Card

export default function Projects() {
  const { t } = useTranslation()
  const [selectedKey, setSelectedKey] = useState(null)
  const projectsData = getProjectsData(t)
  // Look the project up on every render so the modal follows language changes.
  const selected = projectsData.find((p) => p.key === selectedKey) || null
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
        <Card className="projects__container">
          <Title level={2} className="projects__header">
            {t('PROJECTS_TITLE')}
          </Title>

          <Row gutter={[24, 24]} justify="start" className="projects__grid">
            {projectsData.map((proj) => (
              <Col key={proj.key} xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  className="projects__card-preview"
                  cover={
                    <img
                      alt={proj.title}
                      src={import.meta.env.BASE_URL + proj.logo}
                      loading="lazy"
                      className="projects__cover"
                    />
                  }
                  actions={[
                    <Button
                      key="live"
                      type={proj.live ? 'primary' : 'secondary'}
                      disabled={!proj.live}
                      icon={<LinkOutlined />}
                      href={proj.live}
                      className='projects__button'
                      target="_blank"
                      style={{ paddingTop: '0.2rem', color: proj.live ? 'white' : 'gray' }}
                    >
                      {t('PROJECTS_LIVE')}
                    </Button>,
                    <Button
                      key="code"
                      type={proj.github ? 'primary' : 'secondary'}
                      disabled={!proj.github}
                      icon={<GithubOutlined />}
                      href={proj.github}
                      className='projects__button'
                      target="_blank"
                      style={{ paddingTop: '0.2rem' }}
                    >
                      {t('PROJECTS_CODE')}
                    </Button>,
                    <Button
                      key="details"
                      type="text"
                      icon={<InfoCircleOutlined />}
                      onClick={() => setSelectedKey(proj.key)}
                    >
                      {t('PROJECTS_DETAIL')}
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
        </Card>
      </motion.section>

      <Modal
        open={!!selected}
        title={selected?.title}
        onCancel={() => setSelectedKey(null)}
        footer={[
          <Button key="close" onClick={() => setSelectedKey(null)}>
            {t('PROJECTS_CLOSE')}
          </Button>
        ]}
        width={800}
      >
        {selected?.company && (
          <Paragraph>
            <Text strong>{t('PROJECTS_LABEL_COMPANY')}:</Text> {selected.company}
          </Paragraph>
        )}
        {selected?.period && (
          <Paragraph>
            <Text strong>{t('PROJECTS_LABEL_PERIOD')}:</Text> {selected.period}
          </Paragraph>
        )}
        <Paragraph>
          <Text strong>{t('PROJECTS_LABEL_DETAILS')}:</Text>
        </Paragraph>
        <ul>
          {selected?.details?.map((d, idx) => (
            <li key={idx}>
              <Text>{d}</Text>
            </li>
          ))}
        </ul>
        <Paragraph>
          <Text strong>{t('PROJECTS_LABEL_TECHNOLOGIES')}:</Text>
        </Paragraph>
        <Space wrap>
          {selected?.technologies?.map((tech, i) => (
            <Tag key={i}>{tech}</Tag>
          ))}
        </Space>
      </Modal>
    </>
  )
}
