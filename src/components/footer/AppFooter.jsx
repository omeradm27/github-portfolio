import React from 'react'
import { Layout, Typography } from 'antd'
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    WhatsAppOutlined
} from '@ant-design/icons'
import './Footer.css'
import { t } from 'i18next'

const { Footer } = Layout
const { Text, Link } = Typography

const AppFooter = () => {
    return (
        <Footer className="app__footer">
            <div className="footer__social">
                <Link href="https://github.com/omeradm27" target="_blank">
                    <GithubOutlined />
                </Link>
                <Link href="https://www.linkedin.com/in/omer-cetinadam/" target="_blank">
                    <LinkedinOutlined />
                </Link>
                <Link href="mailto:omercetinadam1993@gmail.com">
                    <MailOutlined />
                </Link>
                <Link href="https://wa.me/905518687754" target="_blank">
                    <WhatsAppOutlined />
                </Link>
            </div>
            <Text type="secondary" className="footer__copyright">
                {t('FOOTER_COPYRIGHT')}
            </Text>
        </Footer>
    )
}

export default AppFooter
