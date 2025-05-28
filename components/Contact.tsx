"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="bg-transparent flex items-center justify-center py-12 relative z-10" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Agent Market
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            Freely trade AI Agents across Solana's biggest marketplaces
          </p>

          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Coming Soon
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
