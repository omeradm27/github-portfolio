import React from 'react'
import OrbitMark from './brand/OrbitMark'
import Signature from './brand/Signature'
import './Loading.css'

const Loading = () => (
  <div className="loading__wrapper" role="status" aria-live="polite">
    <OrbitMark size={112} animate />
    <Signature size="lg" className="loading__signature brand-signature--auto" />
  </div>
)

export default Loading
