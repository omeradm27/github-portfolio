import React from 'react'
import { motion } from 'framer-motion'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1
        }}
      />
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg font-medium">
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
