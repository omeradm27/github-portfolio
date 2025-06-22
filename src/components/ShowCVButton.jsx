import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const MotionButton = motion(Button)

const ShowCVButton = ({ cv }) => {
  const { t } = useTranslation()

  return (
    <MotionButton
      href={cv}
      target="_blank"
      type="default"
      icon={<EyeOutlined />}
      size="large"
      whileHover={{ scale: 1.05, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
      style={{ marginTop: '1rem' }}
    >
      {t('ABOUT_SHOWCV')}
    </MotionButton>
  )
}

export default ShowCVButton