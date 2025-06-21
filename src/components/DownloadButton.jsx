import React from 'react'
import { useTranslation } from 'react-i18next'
import { DownloadOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { Button } from 'antd'

const MotionButton = motion(Button)

const DownloadButton = ({ cv }) => {
    const { t } = useTranslation()

    return (
        <MotionButton
            href={cv}
            download
            type='primary'
            color="cyan"
            icon={<DownloadOutlined />}
            size="large"
            variant='solid'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
            style={{
                marginTop: '1rem',
            }}
        >
            {t('ABOUT_DOWNLOAD')}
        </MotionButton>
    )
}

export default DownloadButton
