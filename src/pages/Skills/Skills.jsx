// src/pages/Skills/Skills.jsx
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Typography, Divider } from 'antd'
import {
  FaCubes,
  FaLayerGroup,
  FaLanguage,
  FaMapMarkedAlt,
  FaDatabase,
  FaCloud,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaSms,
  FaEnvelope,
  FaMicrophone,
  FaVial,
  FaKey,
  FaProjectDiagram,
  FaUserShield,
  FaTasks
} from 'react-icons/fa'
import {
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiFastify,
  SiLaravel,
  SiPython,
  SiOpenapiinitiative,
  SiSocketdotio,
  SiRabbitmq,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSequelize,
  SiSupabase,
  SiDocker,
  SiGithubactions,
  SiAzuredevops,
  SiVercel,
  SiRailway,
  SiNginx,
  SiPm2,
  SiLinux,
  SiGooglecloud,
  SiAmazons3,
  SiStripe,
  SiFirebase,
  SiOpenai,
  SiGoogle,
  SiJest,
  SiVitest,
  SiPlaywright
} from 'react-icons/si'
import './Skills.css'

const { Title, Text } = Typography

const ICON_SIZE = 32

// Generic icons (Fa*) are used where no brand icon exists.
const SKILL_GROUPS = [
  {
    key: 'SKILLS_GROUP_BACKEND',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'NestJS', Icon: SiNestjs },
      { name: 'Express', Icon: SiExpress },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: '.NET Core (C#)', Icon: SiDotnet },
      { name: 'Fastify', Icon: SiFastify },
      { name: 'PHP / Laravel', Icon: SiLaravel },
      { name: 'Python (FastAPI)', Icon: SiPython },
      { name: 'REST / OpenAPI', Icon: SiOpenapiinitiative },
      { name: 'Microservices', Icon: FaProjectDiagram },
      { name: 'RBAC / Multi-tenant', Icon: FaUserShield },
      { name: 'SSE / WebSockets', Icon: SiSocketdotio },
      { name: 'RabbitMQ', Icon: SiRabbitmq },
      { name: 'Bull Queues', Icon: FaTasks },
    ],
  },
  {
    key: 'SKILLS_GROUP_FRONTEND',
    items: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Vue.js', Icon: SiVuedotjs },
      { name: 'Redux Toolkit', Icon: SiRedux },
      { name: 'Zustand', Icon: FaCubes },
      { name: 'TanStack Query', Icon: SiReactquery },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'MUI', Icon: SiMui },
      { name: 'Ant Design', Icon: SiAntdesign },
      { name: 'shadcn/ui', Icon: FaLayerGroup },
      { name: 'i18next / next-intl', Icon: FaLanguage },
      { name: 'Flutter (Riverpod)', Icon: SiFlutter },
    ],
  },
  {
    key: 'SKILLS_GROUP_DATABASE',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'PostGIS', Icon: FaMapMarkedAlt },
      { name: 'MySQL', Icon: SiMysql },
      { name: 'MSSQL', Icon: SiMicrosoftsqlserver },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Redis', Icon: SiRedis },
      { name: 'Prisma', Icon: SiPrisma },
      { name: 'Sequelize', Icon: SiSequelize },
      { name: 'Knex', Icon: FaDatabase },
      { name: 'Supabase', Icon: SiSupabase },
    ],
  },
  {
    key: 'SKILLS_GROUP_DEVOPS',
    items: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'Azure DevOps', Icon: SiAzuredevops },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Railway', Icon: SiRailway },
      { name: 'Nginx', Icon: SiNginx },
      { name: 'PM2', Icon: SiPm2 },
      { name: 'Linux VPS', Icon: SiLinux },
      { name: 'Google Cloud Storage', Icon: SiGooglecloud },
      { name: 'AWS S3', Icon: SiAmazons3 },
      { name: 'Cloudinary', Icon: FaCloud },
    ],
  },
  {
    key: 'SKILLS_GROUP_INTEGRATIONS',
    wide: true,
    items: [
      { name: 'Stripe', Icon: SiStripe },
      { name: 'iyzico', Icon: FaCreditCard },
      { name: 'Ozan Pay', Icon: FaMoneyCheckAlt },
      { name: 'Firebase Auth', Icon: SiFirebase },
      { name: 'OAuth 2.0', Icon: FaKey },
      { name: 'TOTP 2FA', Icon: FaShieldAlt },
      { name: 'NetGSM SMS', Icon: FaSms },
      { name: 'Nodemailer', Icon: FaEnvelope },
      { name: 'OpenAI', Icon: SiOpenai },
      { name: 'Gemini / Veo 3', Icon: SiGoogle },
      { name: 'ElevenLabs', Icon: FaMicrophone },
      { name: 'Jest', Icon: SiJest },
      { name: 'Vitest', Icon: SiVitest },
      { name: 'Playwright', Icon: SiPlaywright },
      { name: 'Supertest', Icon: FaVial },
    ],
  },
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

        <Row gutter={[24, 24]}>
          {SKILL_GROUPS.map(({ key, items, wide }) => (
            <Col key={key} xs={24} lg={wide ? 24 : 12}>
              <Card className="skills__group">
                <Title level={4}>{t(key)}</Title>
                <Divider />
                <Row gutter={[16, 16]}>
                  {items.map((item) => {
                    const { name, Icon } = item
                    return (
                      <Col key={name} xs={12} sm={8} lg={wide ? 4 : 8}>
                        <Card hoverable className="skills__card">
                          <div className="skills__icon"><Icon size={ICON_SIZE} /></div>
                          <Text className="skills__text">{name}</Text>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    </motion.section>
  )
}
