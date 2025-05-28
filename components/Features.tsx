"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Create Your Own AI Agent",
      description:
        "Design a fully personalized AI with your chosen appearance, personality, skills, and use-case — no coding required.",
      icon: "🎨",
    },
    {
      title: "True Digital Ownership",
      description:
        "Every Selfy is a tokenized, verifiable Virtual World Asset (VWA) stored on-chain. You own it, control it, and can monetize it freely.",
      icon: "🔐",
    },
    {
      title: "AI Marketplace",
      description:
        "Trade, sell, or license your AI Agents in an open marketplace. Each Selfy is a living digital asset with real market value.",
      icon: "🏪",
    },
    {
      title: "Lifelong Learning & Evolution",
      description:
        "Your Selfy grows with time. It adapts through usage, interactions, and fine-tuning — becoming more capable and valuable.",
      icon: "🧠",
    },
    {
      title: "Composable & Interoperable",
      description:
        "Agents can be upgraded, cloned, combined, or integrated into third-party platforms and tools. SelfyAI supports a modular ecosystem.",
      icon: "🔗",
    },
    {
      title: "Pioneering the VWA Economy",
      description:
        "SelfyAI isn't just a tool — it's a movement. We're building the foundation for a future where AI is a new form of personal capital, and Virtual World Assets become the next major asset class.",
      icon: "🚀",
    },
  ]

  return (
    <section id="features" className="bg-transparent py-12">
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
              Discover the powerful features that make SelfyAI the future of personalized AI agents and Virtual World
              Assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 text-center"
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
