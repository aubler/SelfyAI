"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-transparent flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About The Orb
          </h2>

          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            The Orb represents the pinnacle of interactive 3D web experiences. Built with cutting-edge technologies
            including Three.js, React, and Next.js, it showcases the possibilities of modern web development and
            immersive user interfaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🌍</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Interactive Globe
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Explore our dynamic 3D globe with smooth controls and stunning visual effects
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                High Performance
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Optimized rendering and smooth animations for the best user experience
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🎨</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Beautiful Design
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Carefully crafted visuals with attention to detail and modern aesthetics
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
