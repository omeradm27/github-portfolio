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
import {getProjectsData} from '../../data/projectData'
const { Title, Text, Paragraph } = Typography
const { Meta } = Card

export default function Projects() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const projectsData = getProjectsData(t)

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
                    style={{ paddingTop: '0.2rem' ,color:proj.live ? 'white':'gray' }}
                  >
                    {t('PROJECTS_LIVE')}
                  </Button>,
                  <Button
                    key="code"
                    type={proj.github ? 'primary' : 'default'}
                    disabled={!proj.github}
                    icon={<GithubOutlined />}
                    href={proj.github}
                    target="_blank"
                    style={{ paddingTop: '0.2rem',color:proj.github ? 'white':'gray' }}
                  >
                    {t('PROJECTS_CODE')}
                  </Button>,
                  <Button
                    key="details"
                    type="text"
                    icon={<InfoCircleOutlined />}
                    onClick={() => setSelected(proj)}
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
