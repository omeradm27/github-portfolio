import React from 'react'
import { motion } from 'framer-motion'
import { Spin } from 'antd'
import './Loading.css' // External CSS file

const Loading = () => {
  return (
    <div className="loading__wrapper">
      <motion.div
        className="loading__spinner"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1
        }}
      />
      <p className="loading__text">
        Loading...
      </p>

      {/* Optional Ant Design fallback */}
      <div className="hidden">
        <Spin size="large" />
      </div>
    </div>
  )
}

export default Loading
