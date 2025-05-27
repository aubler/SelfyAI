"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Real-time Rendering",
      description: "Experience smooth 60fps rendering with WebGL acceleration",
      icon: "🚀",
    },
    {
      title: "Dynamic Colors",
      description: "Watch as the globe transitions through beautiful color palettes",
      icon: "🌈",
    },
    {
      title: "Responsive Design",
      description: "Perfect experience across all devices and screen sizes",
      icon: "📱",
    },
    {
      title: "Interactive Controls",
      description: "Intuitive orbit controls for exploring every angle",
      icon: "🎮",
    },
    {
      title: "Atmospheric Effects",
      description: "Stunning glow and particle effects for immersion",
      icon: "✨",
    },
    {
      title: "Modern Tech Stack",
      description: "Built with React, Three.js, and Next.js for performance",
      icon: "⚙️",
    },
  ]

  return (
    <section id="features" className="min-h-screen bg-transparent py-20">
      <div className="container mx-auto px-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Features
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover the powerful features that make The Orb a unique and engaging experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-xl font-semibold mb-3 text-white"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
