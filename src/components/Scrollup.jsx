import React, { useEffect, useState } from 'react'
import './Scrollup.css'
import { FaArrowUp } from 'react-icons/fa'

const Scrollup = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY >= 560)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // smooth scroll
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scrollup ${show ? 'show-scroll' : ''}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="scrollup__icon" />
    </button>
  )
}

export default Scrollup
