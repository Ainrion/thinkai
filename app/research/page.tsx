import { BookOpen, FileText, Globe, ChevronRight, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
  const publications = [
    {
      title: "Multi-Agent Cognitive Processing: A New Paradigm",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      date: "March 2025",
      journal: "Journal of Artificial Intelligence Research",
      abstract:
        "This paper introduces the Multi-agent Cognitive Processing (MCP) framework, enabling complex distributed reasoning across multiple specialized AI agents.",
      category: "Multi-Agent Systems",
    },
    {
      title: "Efficient Fine-Tuning of Large Language Models for Domain Adaptation",
      authors: "Dr. James Wilson, Dr. Emily Taylor",
      date: "February 2025",
      journal: "Computational Linguistics Journal",
      abstract:
        "We present novel techniques for parameter-efficient fine-tuning of large language models that reduce computational requirements while maintaining performance.",
      category: "Model Fine-Tuning",
    },
    {
      title: "Personalized AI Assistants: Adaptive Learning from User Interactions",
      authors: "Dr. Alex Johnson, Dr. Lisa Wang",
      date: "January 2025",
      journal: "Human-Computer Interaction Review",
      abstract:
        "This research demonstrates how AI assistants can build personalized user models through interaction, significantly improving user satisfaction and productivity.",
      category: "AI Assistants",
    },
    {
      title: "Neural Architecture Search for Custom Agent Development",
      authors: "Dr. Robert Kim, Dr. Sophia Martinez",
      date: "December 2024",
      journal: "Neural Computation",
      abstract:
        "We introduce an automated framework for discovering optimal neural architectures for domain-specific AI agents with minimal human intervention.",
      category: "Custom Agents",
    },
  ]

  const events = [
    {
      title: "MCP Server Architecture Workshop",
      date: "May 15-17, 2025",
      location: "San Francisco, CA",
      description: "Deep dive into the architecture and implementation of Multi-agent Cognitive Processing servers.",
    },
    {
      title: "Advanced Model Fine-Tuning Techniques",
      date: "April 10, 2025",
      location: "Virtual Event",
      description:
        "Learn cutting-edge techniques for fine-tuning large language models for specific domains and tasks.",
    },
    {
      title: "Custom AI Agent Development Summit",
      date: "March 22, 2025",
      location: "New York, NY",
      description:
        "Explore methodologies for designing and implementing specialized AI agents for complex business processes.",
    },
  ]

  const categories = ["All", "Multi-Agent Systems", "Model Fine-Tuning", "AI Assistants", "Custom Agents"]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Research</span>
          </h1>
          <p className="text-xl text-slate-300">
            Exploring the frontiers of multi-agent systems, model fine-tuning, and personalized AI
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <BookOpen className="h-8 w-8 text-primary mr-2" />
            Publications
          </h2>

          <Tabs defaultValue="All" className="mb-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {publications
                    .filter((pub) => category === "All" || pub.category === category)
                    .map((publication, index) => (
                      <Card
                        key={index}
                        className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all"
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{publication.title}</CardTitle>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <FileText className="h-4 w-4" />
                            <span>{publication.journal}</span>
                            <span>•</span>
                            <span>{publication.date}</span>
                          </div>
                          <CardDescription className="text-sm">{publication.authors}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-300">{publication.abstract}</p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="link"
                            className="px-0 text-primary group-hover:translate-x-1 transition-transform"
                          >
                            Read Paper <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Globe className="h-8 w-8 text-primary mr-2" />
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-primary hover:bg-primary/80 text-white group">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Interested in collaborating?</h2>
              <p className="text-slate-300">
                We&apos;re always looking for research partners to push the boundaries of AI technology.
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              Contact Research Team <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
