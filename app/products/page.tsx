import { Cpu, Zap, Brain, Bot, ChevronRight, ArrowRight, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Personalized AI Assistant",
      description: "Advanced AI assistant that adapts to your preferences and work patterns",
      icon: <Bot className="h-8 w-8 text-primary" />,
      category: "Assistant",
      price: 49.99,
      features: [
        "Personalized interaction patterns",
        "Context-aware responses",
        "Multi-domain knowledge",
        "Continuous learning from feedback",
      ],
    },
    {
      id: 2,
      name: "Neural Architecture Studio",
      description: "Design and train custom neural networks for your specific AI applications",
      icon: <Brain className="h-8 w-8 text-primary" />,
      category: "Development",
      price: 129.99,
      features: [
        "Visual neural network designer",
        "Automated architecture search",
        "Performance optimization tools",
        "Model deployment utilities",
      ],
    },
    {
      id: 3,
      name: "MCP Server Cluster",
      description: "High-performance server infrastructure for running complex multi-agent systems",
      icon: <Server className="h-8 w-8 text-primary" />,
      category: "Infrastructure",
      price: 299.99,
      features: [
        "Multi-agent coordination framework",
        "Distributed cognitive processing",
        "Real-time agent communication",
        "Scalable agent environments",
      ],
    },
    {
      id: 4,
      name: "Model Fine-Tuning Platform",
      description: "Specialized platform for fine-tuning foundation models on your proprietary data",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      category: "Development",
      price: 199.99,
      features: [
        "Efficient fine-tuning pipelines",
        "Domain adaptation tools",
        "Parameter-efficient tuning methods",
        "Model evaluation framework",
      ],
    },
    {
      id: 5,
      name: "Reinforcement Learning Studio",
      description: "Comprehensive environment for training AI agents through reinforcement learning",
      icon: <Zap className="h-8 w-8 text-primary" />,
      category: "Development",
      price: 149.99,
      features: [
        "Custom environment creation",
        "Policy optimization algorithms",
        "Reward function designer",
        "Agent behavior analysis",
      ],
    },
    {
      id: 6,
      name: "AI Data Processing Pipeline",
      description: "End-to-end pipeline for preparing and processing data for AI model training",
      icon: <Database className="h-8 w-8 text-primary" />,
      category: "Infrastructure",
      price: 179.99,
      features: [
        "Automated data cleaning",
        "Feature engineering tools",
        "Data augmentation capabilities",
        "Dataset version control",
      ],
    },
  ]

  const categories = ["All", "Assistant", "Development", "Infrastructure"]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Products</span>
          </h1>
          <p className="text-xl text-slate-300">Cutting-edge AI tools and technologies to power your innovation</p>
        </div>

        <Tabs defaultValue="All" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/50 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) => category === "All" || product.category === category)
                  .map((product) => (
                    <Card
                      key={product.id}
                      className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all h-full flex flex-col"
                    >
                      <div className="h-1 w-full bg-gradient-to-r from-primary to-purple-500"></div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            {product.icon}
                            <CardTitle>{product.name}</CardTitle>
                          </div>
                          <Badge variant="outline" className="bg-primary/20 text-primary">
                            {product.category}
                          </Badge>
                        </div>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="border-t border-slate-800 pt-4">
                        <div className="flex items-center justify-between w-full">
                          <div className="text-xl font-bold">${product.price}</div>
                          <Button className="bg-primary hover:bg-primary/80 group">
                            <span>Details</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Ready to transform your business?</h2>
              <p className="text-slate-300">
                Get started with our AI products today and stay ahead of the competition.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

