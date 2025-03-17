import { Zap, Brain, Bot, ChevronRight, ArrowRight, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "MCP Server Infrastructure",
      description: "High-performance Multi-agent Cognitive Processing servers for complex AI workloads",
      icon: <Server className="h-8 w-8 text-primary" />,
      features: [
        "Distributed agent coordination",
        "Real-time cognitive processing",
        "Scalable multi-agent environments",
      ],
    },
    {
      title: "Custom AI Agents",
      description: "Tailor-made AI agents designed for your specific business processes and workflows",
      icon: <Bot className="h-8 w-8 text-primary" />,
      features: ["Domain-specific knowledge integration", "Custom reasoning capabilities", "Process automation agents"],
    },
    {
      title: "Fine-Tuned Models",
      description: "Specialized AI models fine-tuned on your proprietary data for maximum performance",
      icon: <Brain className="h-8 w-8 text-primary" />,
      features: ["Domain adaptation", "Performance optimization", "Continuous learning pipelines"],
    },
    {
      title: "Personalized Assistants",
      description: "AI assistants that learn from user interactions to provide increasingly personalized support",
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: ["User behavior modeling", "Contextual awareness", "Adaptive interaction patterns"],
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300">Cutting-edge AI technologies tailored to your specific needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all group"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {solution.icon}
                  <CardTitle>{solution.title}</CardTitle>
                </div>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-primary hover:bg-primary/80 text-white group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Need a custom solution?</h2>
              <p className="text-slate-300">
                Our team of AI experts can design a tailored solution to address your specific business challenges.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              Contact Sales <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

