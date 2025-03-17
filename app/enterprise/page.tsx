import { Brain, Server, Zap, ChevronRight, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterprisePage() {
  const benefits = [
    {
      title: "Advanced AI Infrastructure",
      description: "Enterprise-grade MCP servers and AI processing infrastructure",
      icon: <Server className="h-8 w-8 text-primary" />,
    },
    {
      title: "Custom AI Development",
      description: "Dedicated AI research and development for your specific needs",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI Integration Services",
      description: "Seamless integration of AI solutions into your existing systems",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
  ]

  const plans = [
    {
      name: "AI Deployment Suite",
      price: "$999",
      description: "For businesses starting their AI journey",
      features: [
        "5 Personalized AI Assistants",
        "Basic MCP Server access",
        "1 Custom Agent development",
        "Standard model fine-tuning",
        "Email support",
        "99.5% uptime SLA",
      ],
    },
    {
      name: "Advanced AI Platform",
      price: "$2,499",
      description: "For organizations with sophisticated AI needs",
      features: [
        "20 Personalized AI Assistants",
        "Dedicated MCP Server cluster",
        "5 Custom Agent developments",
        "Advanced model fine-tuning",
        "Priority support",
        "99.9% uptime SLA",
        "Custom integration services",
      ],
    },
    {
      name: "Enterprise AI Ecosystem",
      price: "Custom",
      description: "For enterprises requiring comprehensive AI solutions",
      features: [
        "Unlimited AI Assistants",
        "Multiple dedicated MCP Server clusters",
        "Unlimited Custom Agent development",
        "Enterprise-grade model fine-tuning",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "Custom AI research & development",
        "On-premise deployment options",
      ],
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300">
            Comprehensive AI infrastructure and services for enterprise-scale deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {benefit.icon}
                  <CardTitle>{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all ${index === 1 ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 ml-1">/month</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${index === 1 ? "bg-primary hover:bg-primary/80" : "bg-slate-800 hover:bg-slate-700"} group`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Need a custom enterprise solution?</h2>
              <p className="text-slate-300">
                Our team will work with you to design a solution that meets your specific requirements.
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

