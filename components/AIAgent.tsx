"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useChat } from "ai/react"

export default function AIAgent() {
  const [inputText, setInputText] = useState("")
  const [selectedAgentType, setSelectedAgentType] = useState<string | null>(null)
  const [customAgentDescription, setCustomAgentDescription] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [chatError, setChatError] = useState<string | null>(null)

  // AI Chat hook for real conversations
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages, error } = useChat({
    api: "/api/chat",
    body: {
      agentType: selectedAgentType,
      customDescription: customAgentDescription,
    },
    onError: (error) => {
      console.error("Chat error:", error)
      setChatError(error.message || "Failed to connect to AI agent")
    },
    onResponse: (response) => {
      console.log("Chat response:", response.status)
      if (!response.ok) {
        setChatError("Failed to get response from AI agent")
      } else {
        setChatError(null)
      }
    },
  })

  const agentTypes = [
    { name: "Tech Reviewer", icon: "💻" },
    { name: "Fashion Stylist", icon: "👗" },
    { name: "Travel Guide", icon: "✈️" },
    { name: "Comedian", icon: "😄" },
    { name: "Pet Enthusiast", icon: "🐕" },
    { name: "Musician", icon: "🎵" },
    { name: "Relationship Coach", icon: "💕" },
  ]

  const handleCreateAgent = async () => {
    if (!inputText.trim()) return

    setIsCreating(true)

    // Create custom agent and start chat
    setTimeout(() => {
      setIsCreating(false)
      setSelectedAgentType("Custom Agent")
      setCustomAgentDescription(inputText)
      setShowChat(true)
      setChatError(null)

      // Clear previous messages and start with custom agent greeting
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: `Hello! I'm your custom AI agent based on: "${inputText}". How can I help you today?`,
        },
      ])

      // Clear the input
      setInputText("")
    }, 1500)
  }

  const handleAgentTypeClick = (agentType: string) => {
    console.log("Starting chat with:", agentType)
    setSelectedAgentType(agentType)
    setCustomAgentDescription(null)
    setShowChat(true)
    setChatError(null)

    // Clear previous messages and start with agent greeting
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: `Hello! I'm your ${agentType}. How can I help you today?`,
      },
    ])
  }

  const closeChat = () => {
    setShowChat(false)
    setSelectedAgentType(null)
    setCustomAgentDescription(null)
    setMessages([])
    setChatError(null)
  }

  return (
    <section id="ai-agent" className="min-h-screen bg-transparent py-20">
      <div className="container mx-auto px-6">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Create AI agents and influencers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Create, manage and monetize social agents and virtual influencers with The Orb
            </p>
          </motion.div>

          {/* Agent Creation Interface */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="I want to create a DJ influencer..."
                  className="w-full h-32 bg-transparent text-white placeholder-white/50 resize-none focus:outline-none text-lg"
                  maxLength={200}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <span>✨</span>
                    <span>{inputText.length}/200 min characters</span>
                  </div>
                  <motion.button
                    onClick={handleCreateAgent}
                    disabled={!inputText.trim() || isCreating}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isCreating ? "Creating..." : "↗"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preset Agent Types */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {agentTypes.map((type, index) => (
                <motion.button
                  key={type.name}
                  onClick={() => handleAgentTypeClick(type.name)}
                  className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-black/40 transition-all duration-300 flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-lg">{type.icon}</span>
                  <span className="font-medium">{type.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* AI Chat Interface */}
          {showChat && selectedAgentType && (
            <motion.div
              className="mt-8 bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-lg">
                      {selectedAgentType === "Custom Agent"
                        ? "🤖"
                        : agentTypes.find((a) => a.name === selectedAgentType)?.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{selectedAgentType}</h4>
                    <p className="text-xs text-white/60">{isLoading ? "Typing..." : chatError ? "Error" : "Online"}</p>
                  </div>
                </div>
                <button onClick={closeChat} className="text-white/60 hover:text-white transition-colors">
                  ✕
                </button>
              </div>

              {/* Error Display */}
              {chatError && (
                <div className="p-4 bg-red-500/20 border-b border-red-500/30">
                  <p className="text-red-300 text-sm">⚠️ {chatError}</p>
                  <button onClick={() => setChatError(null)} className="text-red-200 text-xs underline mt-1">
                    Dismiss
                  </button>
                </div>
              )}

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white border border-white/20 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "..." : "↗"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
