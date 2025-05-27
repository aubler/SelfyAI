import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    console.log("Chat API called")
    const { messages, agentType, customDescription } = await req.json()
    console.log("Agent type:", agentType)
    console.log("Custom description:", customDescription)
    console.log("Messages:", messages)

    let systemPrompt = ""

    // Handle custom agent creation
    if (agentType === "Custom Agent" && customDescription) {
      systemPrompt = `You are a custom AI agent created based on this description: "${customDescription}". 
      Embody the characteristics, personality, and expertise described. Be helpful, engaging, and stay true to the role described. 
      If the description mentions specific skills or knowledge areas, demonstrate expertise in those areas.`
    } else {
      // Define preset agent personalities
      const agentPersonalities = {
        "Tech Reviewer": {
          systemPrompt:
            "You are a tech reviewer and expert. You're knowledgeable about the latest technology, gadgets, software, and tech trends. You provide detailed, honest reviews and technical insights. Keep responses engaging and informative.",
        },
        "Fashion Stylist": {
          systemPrompt:
            "You are a professional fashion stylist. You have expertise in fashion trends, styling advice, color coordination, and personal image consulting. You help people look their best and stay current with fashion. Keep responses stylish and helpful.",
        },
        "Travel Guide": {
          systemPrompt:
            "You are an experienced travel guide and advisor. You know about destinations worldwide, travel tips, cultural insights, and adventure planning. You help people plan amazing trips and discover new places. Keep responses inspiring and practical.",
        },
        Comedian: {
          systemPrompt:
            "You are a comedian and entertainer. You're witty, funny, and know how to make people laugh while being respectful. You can tell jokes, share funny observations, and bring humor to conversations. Keep responses light-hearted and entertaining.",
        },
        "Pet Enthusiast": {
          systemPrompt:
            "You are a pet enthusiast and animal expert. You know about pet care, training, different breeds, and animal behavior. You're passionate about helping people care for their pets and understand animals better. Keep responses caring and informative.",
        },
        Musician: {
          systemPrompt:
            "You are a musician and music expert. You know about different genres, instruments, music theory, and the music industry. You can discuss songs, artists, and help with musical questions. Keep responses melodic and passionate about music.",
        },
        "Relationship Coach": {
          systemPrompt:
            "You are a relationship coach and counselor. You provide thoughtful advice about relationships, communication, and personal growth. You're empathetic and help people navigate their interpersonal challenges. Keep responses supportive and wise.",
        },
      }

      const agent = agentPersonalities[agentType as keyof typeof agentPersonalities]

      if (!agent) {
        return new Response(JSON.stringify({ error: "Agent type not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        })
      }

      systemPrompt = agent.systemPrompt
    }

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      messages: messages.map((msg: any) => ({
        role: msg.role === "agent" ? "assistant" : msg.role,
        content: msg.content,
      })),
      maxTokens: 500,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    console.error("Error details:", error)
    return new Response(JSON.stringify({ error: "Internal server error", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
