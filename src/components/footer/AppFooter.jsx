import { Layout, Typography } from 'antd'
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    WhatsAppOutlined
} from '@ant-design/icons'
import './Footer.css'
import Signature from '../brand/Signature'
import { useTranslation } from 'react-i18next'

const { Footer } = Layout
const { Text, Link } = Typography

const EMAIL = 'omercetinadam.de@gmail.com'
const WHATSAPP = '491784671335'

const AppFooter = () => {
    const { t } = useTranslation()
    return (
        <Footer className="app__footer">
            <Signature size="sm" className="footer__signature" />
            <div className="footer__social">
                <Link href="https://github.com/omeradm27" target="_blank" aria-label="GitHub">
                    <GithubOutlined />
                </Link>
                <Link href="https://www.linkedin.com/in/omercetinadam/" target="_blank" aria-label="LinkedIn">
                    <LinkedinOutlined />
                </Link>
                <Link href={`mailto:${EMAIL}`} aria-label="E-mail">
                    <MailOutlined />
                </Link>
                <Link href={`https://wa.me/${WHATSAPP}`} target="_blank" aria-label="WhatsApp">
                    <WhatsAppOutlined />
                </Link>
            </div>
            <Text type="secondary" className="footer__copyright">
                {t('FOOTER_COPYRIGHT', { year: new Date().getFullYear() })}
            </Text>
        </Footer>
    )
}

export default AppFooter
