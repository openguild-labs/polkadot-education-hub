"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight - window.innerHeight
      const scrollProgress = scrollTop / docHeight
      setProgress(scrollProgress)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-pink-500 to-purple-600"
      style={{ width: `${progress * 100}%` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 0 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  )
}
