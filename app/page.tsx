import GlobeWrapper from "@/components/GlobeWrapper"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AIAgent from "@/components/AIAgent"
import About from "@/components/About"
import WhyVWA from "@/components/WhyVWA"
import Features from "@/components/Features"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="relative min-h-screen bg-black overflow-hidden">
          <GlobeWrapper />
          <Hero />
        </div>
        <AIAgent />
        <About />
        <WhyVWA />
        <Features />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
