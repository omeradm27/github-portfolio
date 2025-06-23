import React from 'react';
import { Card, Typography, Row, Col, Space, Button } from 'antd';
import { LinkedinOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './References.css';
import Paragraph from 'antd/es/typography/Paragraph';
import { peopleRefs, companyRefs } from '../../data/referenceData';

const { Title, Text } = Typography;

export default function References() {
  const { t } = useTranslation();

  return (
    <div className="references__section" id="references">
      <Title level={2}>{t('REFERENCES_TITLE')}</Title>

      {/* People Section */}
      <div className="references__block">
        <Title level={4} style={{ marginBottom: '2rem' }}>{t('REFERENCES_PEOPLE')}</Title>
        <Row gutter={[16, 16]} justify="center">
          {peopleRefs.map((p, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Card
                hoverable
                onClick={() => window.open(p.linkedin, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <Row align="middle" justify="space-between">
                  <Col span={18}>
                    <Space direction="vertical" size="small">
                      <Text strong>{p.name}</Text>
                      <Text>{t(p.title)}</Text>
                      {p.company && <Text type="secondary">{p.company}</Text>}
                    </Space>
                  </Col>
                  <Col span={4} style={{ textAlign: 'right' }}>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedinOutlined style={{ fontSize: '28px', color: '#0077B5' }} />
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Companies Section */}
      <div className="references__block">
        <Title level={4} style={{ marginBottom: '2rem' }}>{t('REFERENCES_COMPANIES')}</Title>
        <Row gutter={[16, 16]} justify="center">
          {companyRefs.map((c, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Card
                hoverable
                onClick={() => window.open(c.website, '_blank')}
                cover={
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="references__logo"
                    style={{ padding: c.name === 'Vartur Real State' ? '2rem' : '1rem',  objectFit: 'contain' }}
                  />
                }
                style={{ cursor: 'pointer' }}
                align="center"
              >
                <Text strong>{c.name}</Text>
                <br />
                <Button
                  type="link"
                  href={c.website}
                  icon={<GlobalOutlined />}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  Website
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
