"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="bg-transparent flex items-center py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About SelfyAI
          </h2>

          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            SelfyAI is a platform where you can create, own and trade personalized AI agents - turning intelligence into
            digital assets. These agents grow with you, work for you, and represent your presence in the virtual world.
          </p>

          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            We are building the future of Virtual World Assets (VWA) - where identity, intelligence and ownership
            converge.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Personalized Artificial Intelligence Agents
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Building AI that reflects your personality, purpose and vision.
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">💎</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                True Ownership and Transactions
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Own AI as a digital asset. Trade or license freely on the open market.
              </p>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🌐</div>
              <h3
                className="text-xl font-semibold mb-3 text-white"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Explore the Virtual World Asset Ecosystem
              </h3>
              <p className="text-white/90" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                Every Selfy contributes to the growing virtual world asset ecosystem, shaping the future of digital
                ownership and value creation.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
