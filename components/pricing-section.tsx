"use client"

import { useState } from "react"
import { Check, Zap, Bot, Server, Brain, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "For individuals and small teams exploring AI capabilities",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "1 Personalized AI Assistant",
        "Basic MCP Server access (shared)",
        "5 model fine-tuning runs/month",
        "1 custom agent development",
        "Community support",
        "API access (100 requests/day)",
      ],
      icon: <Bot className="h-6 w-6" />,
      popular: false,
    },
    {
      name: "Professional",
      description: "For professionals and growing businesses",
      monthlyPrice: 129,
      annualPrice: 99,
      features: [
        "5 Personalized AI Assistants",
        "Dedicated MCP Server instance",
        "20 model fine-tuning runs/month",
        "3 custom agent developments",
        "Priority email support",
        "API access (1,000 requests/day)",
        "Advanced analytics dashboard",
      ],
      icon: <Brain className="h-6 w-6" />,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced AI needs",
      monthlyPrice: 399,
      annualPrice: 349,
      features: [
        "20 Personalized AI Assistants",
        "Multiple dedicated MCP Server instances",
        "Unlimited model fine-tuning runs",
        "10 custom agent developments",
        "24/7 dedicated support",
        "Unlimited API access",
        "Custom integration services",
        "On-premise deployment options",
      ],
      icon: <Server className="h-6 w-6" />,
      popular: false,
    },
  ]

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Pricing</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the plan that fits your AI needs, from individual assistants to enterprise-grade infrastructure
          </p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-2 ${isAnnual ? "text-slate-400" : "text-white"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
            <span className={`ml-2 ${isAnnual ? "text-white" : "text-slate-400"}`}>
              Annual <span className="text-primary text-sm">(20% off)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-black/50 backdrop-blur-sm relative overflow-hidden flex flex-col h-full
                ${
                  plan.popular
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : "border-slate-800 hover:border-primary/30"
                } 
                transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-full ${plan.popular ? "bg-primary/20" : "bg-slate-800"}`}>
                    {plan.icon}
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-slate-400 ml-1">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-primary mt-1">Billed annually (${plan.annualPrice * 12}/year)</div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/80" : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Need a custom plan?</h3>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Contact our sales team for a tailored solution that meets your specific requirements
          </p>
          <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/10">
            Contact Sales
          </Button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">MCP Server Infrastructure</h3>
                <p className="text-sm text-slate-300">
                  All plans include access to our Multi-agent Cognitive Processing servers
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Model Fine-Tuning</h3>
                <p className="text-sm text-slate-300">
                  Customize foundation models for your specific domain and use cases
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Custom AI Agents</h3>
                <p className="text-sm text-slate-300">
                  Develop specialized AI agents tailored to your business processes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center gap-1 text-slate-400 text-sm cursor-help">
                  <Info className="h-4 w-4" />
                  <span>All plans include a 14-day free trial. No credit card required.</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Start your 14-day trial today and experience the full capabilities of our AI platform with no
                  commitment.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}

