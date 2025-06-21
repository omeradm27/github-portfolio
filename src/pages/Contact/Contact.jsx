import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Row, Col, Card, Typography, Button, message } from 'antd'
import { MailOutlined, WhatsAppOutlined, PhoneOutlined, SendOutlined } from '@ant-design/icons'
import './Contact.css'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const { Title, Text } = Typography

const contactData = {
  email: 'omercetinadam1993@gmail.com',
  phone: '+905518687754',
  whatsapp: '+905518687754'
}

const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef()
  const recaptchaRef = useRef()
  const [isVerified, setIsVerified] = useState(false)
  const [formValid, setFormValid] = useState(false)

  const validateForm = () => {
    const form = formRef.current
    if (!form) return setFormValid(false)
    const name = form.name?.value.trim()
    const email = form.email?.value.trim()
    const message = form.message?.value.trim()
    setFormValid(!!(name && email && message && isVerified))
  }
  useEffect(() => {
    validateForm()
  }, [isVerified])

  const handleRecaptchaChange = (token) => {
    setIsVerified(!!token)
    validateForm()
  }
const handleRecaptchaExpire = () => {
  setIsVerified(false)
  message.warning(t('CONTACT_RECAPTCHA_EXPIRED')) // İsteğe bağlı
}
  const sendMessage = (e) => {
    e.preventDefault()
    console.log("formRef.current", { ...formRef.current });
    emailjs.sendForm(
      "service_lstau89",
      "template_iuaeqv8",
      formRef.current,
      "iYkn6E1Ri_UXU4Qq7"
    ).then(() => {
      message.success(t('CONTACT_SUCCESS'))
    }).catch((err) => {
      console.error(err)
      message.error(t('CONTACT_FAILURE'))
    })
  }
  return (
    <motion.section
      id="contact"
      className="contact__section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact__container">
        <Title level={2}>{t('CONTACT_HEADER')}</Title>

        <Row gutter={[32, 32]} className="contact__row" justify="center" align="stretch">
          <Col xs={24} md={10} style={{ height: '100%' }}>
            <Title level={4}>{t('CONTACT_TALK_TO_ME')}</Title>

            <SpaceCard
              icon={<MailOutlined style={{ fontSize: 24 }} />}
              label={t('CONTACT_EMAIL')}
              value={contactData.email}
              href={`mailto:${contactData.email}`}
              actionText={t('CONTACT_WRITE')}
            />

            <SpaceCard
              icon={<WhatsAppOutlined style={{ fontSize: 24 }} />}
              label="WhatsApp"
              value={contactData.whatsapp}
              href={`https://wa.me/${contactData.whatsapp.replace('+', '')}`}
              actionText={t('CONTACT_WRITE')}
            />

            <SpaceCard
              icon={<PhoneOutlined style={{ fontSize: 24 }} />}
              label={t('CONTACT_PHONE')}
              value={contactData.phone}
              href={`tel:${contactData.phone}`}
              actionText={t('CONTACT_CALL')}
            />
          </Col>

          <Col xs={24} md={12} style={{ height: '100%' }}>
            <Title level={4} style={{ textAlign: 'center' }}>
              {t('CONTACT_WRITE_TO_ME')}
            </Title>
            <form className="contact__form" ref={formRef} onSubmit={sendMessage}>
              <div className="form__field">
                <label htmlFor="name">{t('CONTACT_FORM_NAME')}</label>
                <input type="text" id="name" name="name" className="form__input" placeholder={t('CONTACT_FORM_NAME_PLACEHOLDER')} onChange={validateForm} />
              </div>
              <div className="form__field">
                <label htmlFor="email">{t('CONTACT_FORM_EMAIL')}</label>
                <input type="email" id="email" name="email" className="form__input" placeholder={t('CONTACT_FORM_EMAIL_PLACEHOLDER')} onChange={validateForm} />
              </div>
              <div className="form__field">
                <label htmlFor="message">{t('CONTACT_FORM_MESSAGE')}</label>
                <textarea id="message" className="form__input" rows="7" name="message" placeholder={t('CONTACT_FORM_MESSAGE_PLACEHOLDER')} onChange={validateForm} />
              </div>
              <div className='recaptcha'>
                <ReCAPTCHA
                  sitekey="6LeTzmgrAAAAAAAlf1AOSCPDkVGiGd9bbJ99tqUn"
                  ref={recaptchaRef}
                  onChange={handleRecaptchaChange}
                  onExpired={handleRecaptchaExpire}
                />
              </div>
              <Button icon={<SendOutlined />} className="contact__submit" htmlType='submit' disabled={!formValid}>
                {t('CONTACT_FORM_SUBMIT')}
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    </motion.section>
  )
}

function SpaceCard({ icon, label, value, href, actionText }) {
  return (
    <Card className="contact__card">
      <div className="contact__card-icon">{icon}</div>
      <Title level={5}>{label}</Title>
      <Text type="secondary">{value}</Text>
      <div className="contact__card-action">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {actionText} →
        </a>
      </div>
    </Card>
  )
}

export default Contact
