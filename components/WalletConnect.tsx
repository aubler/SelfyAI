"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean
      connect: () => Promise<{ publicKey: { toString: () => string } }>
      disconnect: () => Promise<void>
      publicKey?: { toString: () => string }
      isConnected?: boolean
    }
  }
}

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string>("")
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false)

  useEffect(() => {
    // Check if Phantom wallet is installed
    if (typeof window !== "undefined" && window.solana?.isPhantom) {
      setIsPhantomInstalled(true)

      // Check if already connected
      if (window.solana.isConnected && window.solana.publicKey) {
        setIsConnected(true)
        setPublicKey(window.solana.publicKey.toString())
      }
    }
  }, [])

  const connectWallet = async () => {
    try {
      if (window.solana?.isPhantom) {
        const response = await window.solana.connect()
        setIsConnected(true)
        setPublicKey(response.publicKey.toString())
      } else {
        // If Phantom is not installed, redirect to install page
        window.open("https://phantom.app/", "_blank")
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect()
        setIsConnected(false)
        setPublicKey("")
      }
    } catch (error) {
      console.error("Failed to disconnect wallet:", error)
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      {isConnected ? (
        <div className="flex items-center gap-2">
          <div className="px-3 py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="hidden sm:inline">{formatAddress(publicKey)}</span>
            <span className="sm:hidden">Connected</span>
          </div>
          <motion.button
            onClick={disconnectWallet}
            className="px-3 py-2 bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-medium rounded-full hover:bg-red-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Disconnect
          </motion.button>
        </div>
      ) : (
        <motion.button
          onClick={connectWallet}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect Wallet
        </motion.button>
      )}
    </motion.div>
  )
}
