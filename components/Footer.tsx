"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-transparent py-8 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/pixel-s-logo.png"
              alt="SelfyAI Pixel Logo"
              width={400}
              height={400}
              className="mx-auto w-full max-w-sm h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/llm-providers.png"
              alt="Powered by leading LLM providers including Anthropic"
              width={600}
              height={100}
              className="mx-auto w-full max-w-lg h-auto opacity-80"
              priority
            />
          </motion.div>

          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 SelfyAI. Tokenize The Virtual Agents Onchain.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
