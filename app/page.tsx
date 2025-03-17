"use client"

import { useState, useEffect } from "react"
import { Brain, Cpu, Bot, Server, Zap, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ProductCard from "@/components/product-card"
import HeroSection from "@/components/hero-section"
import FloatingParticles from "@/components/floating-particles"
import PricingSection from "@/components/pricing-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const products = [
    {
      id: 1,
      name: "Personalized AI Assistant",
      description: "Advanced AI assistant that adapts to your preferences and work patterns",
      icon: <Bot className="h-8 w-8 text-primary" />,
      category: "Assistant",
      price: 49.99,
    },
    {
      id: 2,
      name: "Neural Architecture Studio",
      description: "Design and train custom neural networks for your specific AI applications",
      icon: <Brain className="h-8 w-8 text-primary" />,
      category: "Development",
      price: 129.99,
    },
    {
      id: 3,
      name: "MCP Server Cluster",
      description: "High-performance server infrastructure for running complex multi-agent systems",
      icon: <Server className="h-8 w-8 text-primary" />,
      category: "Infrastructure",
      price: 299.99,
    },
    {
      id: 4,
      name: "Model Fine-Tuning Platform",
      description: "Specialized platform for fine-tuning foundation models on your proprietary data",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      category: "Development",
      price: 199.99,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white relative overflow-hidden">
      <FloatingParticles />

      <HeroSection />

      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span>AI Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" />
          <span>Advanced AI Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturedCard
            icon={<Brain className="h-6 w-6 text-primary" />}
            title="Custom Model Fine-Tuning"
            description="Adapt foundation models to your specific domain with our efficient fine-tuning platform"
          />

          <FeaturedCard
            icon={<Server className="h-6 w-6 text-primary" />}
            title="MCP Server Infrastructure"
            description="Deploy multi-agent cognitive processing servers for complex distributed AI tasks"
          />

          <FeaturedCard
            icon={<Bot className="h-6 w-6 text-primary" />}
            title="Specialized AI Agents"
            description="Custom-built AI agents designed for your specific business processes and workflows"
          />
        </div>
      </section>

      <PricingSection />

      <section className="container mx-auto px-4 py-16 relative z-10" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Touch</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions about our AI solutions? Our team is here to help.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 pb-32 relative z-10">
        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Transform Your Business with AI</h2>
              <p className="text-slate-300">
                Join industry leaders who are leveraging our cutting-edge AI tools to drive innovation and efficiency.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeaturedCard({ icon, title, description }) {
  return (
    <Card className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="link" className="px-0 text-primary group-hover:translate-x-1 transition-transform">
          Learn more <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

