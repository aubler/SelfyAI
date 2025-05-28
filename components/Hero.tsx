"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const fullText = "Welcome to SelfyAI"

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(fullText.slice(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          } else {
            // Start typing again
            setIsDeleting(false)
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, fullText])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-transparent">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center z-20 px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {displayText}
            <span className="animate-pulse text-white">|</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience the future of virtual agents onchain with our stunning globe interface
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection("ai-agent")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create AI Agents
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AI Agent Market
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
