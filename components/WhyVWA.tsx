"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyVWA() {
  return (
    <section className="bg-transparent flex items-center justify-center py-12 relative z-10" id="why-vwa">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Why VWA Image */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/why-vwa-updated.png"
              alt="Why VWA - Virtual World Assets characteristics: Scalable, Composable, Liquid, Future-Proof"
              width={800}
              height={600}
              className="mx-auto w-full max-w-4xl h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
