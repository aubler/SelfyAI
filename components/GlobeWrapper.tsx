"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Globe = dynamic(() => import("@/components/Globe"), { ssr: false })

export default function GlobeWrapper() {
  return (
    <Suspense
      fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}
    >
      <Globe />
    </Suspense>
  )
}
