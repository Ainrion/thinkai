"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Brain, Bot, ArrowRight, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Badge className="px-3 py-1 bg-primary/20 text-primary border-primary/30">
                <Zap className="h-3 w-3 mr-1" />
                <span>Advanced AI Technology</span>
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                The Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  AI Innovation
                </span>
              </h1>
            </div>

            <p className="text-xl text-slate-300 max-w-xl">
              Discover cutting-edge MCP servers, custom AI agents, fine-tuned models, and personalized assistants for
              your specific needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-white hover:bg-primary/10 transition-colors"
              >
                Request Demo
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                  JD
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
                  MK
                </div>
                <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold">
                  TS
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">
                  +5
                </div>
              </div>
              <p className="text-sm text-slate-400">Trusted by 10,000+ organizations</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-4 group"
                >
                  <Brain className="h-12 w-12 text-primary group-hover:text-white transition-colors" />
                  <div className="text-center">
                    <h3 className="font-bold">Fine-Tuned Models</h3>
                    <p className="text-xs text-slate-400">Domain-specific AI</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-4 group"
                >
                  <Bot className="h-12 w-12 text-primary group-hover:text-white transition-colors" />
                  <div className="text-center">
                    <h3 className="font-bold">Custom AI Agents</h3>
                    <p className="text-xs text-slate-400">Specialized assistants</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-4 group"
                >
                  <Cpu className="h-12 w-12 text-primary group-hover:text-white transition-colors" />
                  <div className="text-center">
                    <h3 className="font-bold">Neural Architecture</h3>
                    <p className="text-xs text-slate-400">Custom AI design</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 flex flex-col items-center justify-center gap-4 group"
                >
                  <Server className="h-12 w-12 text-primary group-hover:text-white transition-colors" />
                  <div className="text-center">
                    <h3 className="font-bold">MCP Servers</h3>
                    <p className="text-xs text-slate-400">Multi-agent systems</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

