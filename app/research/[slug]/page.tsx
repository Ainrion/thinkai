import { ArrowLeft, Calendar, FileText, Download, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a CMS or database
const getResearchPaper = (slug: string) => {
  // For demo purposes, we'll just return a mock research paper
  return {
    title: "Multi-agent Cognitive Processing: A New Paradigm for Distributed AI Reasoning",
    slug: "multi-agent-cognitive-processing",
    date: "March 15, 2025",
    authors: [
      {
        name: "Dr. Sarah Chen",
        role: "Chief AI Officer",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. Michael Rodriguez",
        role: "Principal Researcher",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    journal: "Journal of Artificial Intelligence Research",
    abstract:
      "This paper introduces the Multi-agent Cognitive Processing (MCP) framework, enabling complex distributed reasoning across multiple specialized AI agents. We demonstrate how this approach leads to more robust problem-solving capabilities and improved performance on complex tasks requiring diverse forms of reasoning.",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
      
      <p class="mb-4">Artificial intelligence systems have traditionally been designed as monolithic entities, processing all inputs and generating outputs through a unified architecture. While this approach has yielded impressive results, it faces inherent limitations when dealing with complex, multi-faceted problems that require diverse forms of reasoning.</p>
      
      <p class="mb-4">In this paper, we introduce Multi-agent Cognitive Processing (MCP), a novel framework for distributing cognitive workloads across multiple specialized agents. By decomposing complex tasks into subtasks that can be handled by specialized agents, MCP systems can collectively solve problems that would be challenging for any single agent.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Related Work</h2>
      
      <p class="mb-4">The concept of multi-agent systems has been explored in various contexts within AI research. Early work by Smith and Davis (1981) introduced the contract net protocol for distributed problem solving. More recently, research on multi-agent reinforcement learning (Busoniu et al., 2008) has demonstrated how multiple agents can learn to coordinate their actions in shared environments.</p>
      
      <p class="mb-4">Our work builds upon these foundations but differs in its focus on cognitive processing tasks that require diverse forms of reasoning, rather than physical actions in shared environments. In this respect, our approach is more closely related to ensemble methods in machine learning (Dietterich, 2000) and mixture-of-experts architectures (Jacobs et al., 1991).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. MCP Framework</h2>
      
      <p class="mb-4">The MCP framework consists of three primary components:</p>
      
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Coordinator:</strong> Responsible for decomposing tasks, assigning subtasks to appropriate agents, and integrating results.</li>
        <li><strong>Specialized Agents:</strong> Individual AI systems designed to excel at specific types of reasoning or knowledge domains.</li>
        <li><strong>Communication Protocol:</strong> A standardized mechanism for agents to share information, request assistance, and provide feedback.</li>
      </ol>
      
      <p class="mb-4">Figure 1 illustrates the overall architecture of an MCP system.</p>
      
      <div class="bg-slate-800 p-4 rounded-lg mb-6 text-center">
        [Figure 1: MCP System Architecture]
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Experimental Results</h2>
      
      <p class="mb-4">We evaluated the MCP framework on a diverse set of tasks requiring multiple forms of reasoning, including:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Complex question answering requiring both factual knowledge and logical reasoning</li>
        <li>Multi-modal understanding tasks combining text, images, and structured data</li>
        <li>Planning problems with constraints across multiple domains</li>
      </ul>
      
      <p class="mb-4">Table 1 summarizes the performance of MCP systems compared to monolithic baselines.</p>
      
      <div class="bg-slate-800 p-4 rounded-lg mb-6 text-center">
        [Table 1: Performance Comparison]
      </div>
      
      <p class="mb-4">As shown in the results, MCP systems consistently outperformed monolithic approaches, with the most significant improvements observed on tasks requiring diverse reasoning capabilities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Case Studies</h2>
      
      <p class="mb-4">We present three case studies demonstrating the application of MCP systems in different domains:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5.1 Healthcare Diagnosis</h3>
      
      <p class="mb-4">An MCP system for medical diagnosis combined specialized agents for medical knowledge, patient data analysis, and treatment planning. The system demonstrated a 23% improvement in diagnostic accuracy compared to a monolithic approach, particularly for cases involving comorbidities.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5.2 Financial Risk Assessment</h3>
      
      <p class="mb-4">In the financial domain, an MCP system integrated agents specializing in market analysis, regulatory compliance, and customer behavior modeling. The system achieved a 17% reduction in false positives when identifying high-risk transactions.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5.3 Manufacturing Optimization</h3>
      
      <p class="mb-4">A manufacturing MCP system combined agents for supply chain optimization, quality control, and predictive maintenance. This integration resulted in a 15% improvement in overall operational efficiency.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Conclusion and Future Work</h2>
      
      <p class="mb-4">The Multi-agent Cognitive Processing framework represents a significant advancement in AI architecture, enabling more sophisticated reasoning and problem-solving capabilities. Our experiments demonstrate that MCP systems consistently outperform monolithic approaches on complex tasks requiring diverse forms of reasoning.</p>
      
      <p class="mb-4">Future work will explore several promising directions:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Dynamic agent creation, where new specialized agents can be instantiated on-demand</li>
        <li>Improved coordination mechanisms that optimize resource allocation based on task requirements</li>
        <li>Enhanced learning capabilities that allow agents to continuously improve based on feedback</li>
      </ul>
      
      <p class="mb-4">We believe that MCP systems represent an important step toward more capable and flexible AI architectures that can address the complex challenges of real-world applications.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">References</h2>
      
      <div class="space-y-2 text-sm">
        <p>Busoniu, L., Babuska, R., & De Schutter, B. (2008). A comprehensive survey of multiagent reinforcement learning. IEEE Transactions on Systems, Man, and Cybernetics, Part C, 38(2), 156-172.</p>
        <p>Dietterich, T. G. (2000). Ensemble methods in machine learning. In International workshop on multiple classifier systems (pp. 1-15).</p>
        <p>Jacobs, R. A., Jordan, M. I., Nowlan, S. J., & Hinton, G. E. (1991). Adaptive mixtures of local experts. Neural computation, 3(1), 79-87.</p>
        <p>Smith, R. G., & Davis, R. (1981). Frameworks for cooperation in distributed problem solving. IEEE Transactions on Systems, Man, and Cybernetics, 11(1), 61-70.</p>
      </div>
    `,
    keywords: ["Multi-agent Systems", "Distributed AI", "Cognitive Processing", "AI Architecture"],
    citations: 42,
    downloads: 1287,
    relatedPapers: [
      {
        title: "Efficient Fine-Tuning of Large Language Models for Domain Adaptation",
        slug: "efficient-fine-tuning-llms",
        authors: "Dr. James Wilson, Dr. Emily Taylor",
        journal: "Computational Linguistics Journal",
        year: "2025",
      },
      {
        title: "Personalized AI Assistants: Adaptive Learning from User Interactions",
        slug: "personalized-ai-assistants",
        authors: "Dr. Alex Johnson, Dr. Lisa Wang",
        journal: "Human-Computer Interaction Review",
        year: "2025",
      },
      {
        title: "Neural Architecture Search for Custom Agent Development",
        slug: "neural-architecture-search",
        authors: "Dr. Robert Kim, Dr. Sophia Martinez",
        journal: "Neural Computation",
        year: "2024",
      },
    ],
  }
}

// Define correct params type
type ResearchParams = {
  params: {
    slug: string;
  };
};

export default function ResearchPaperPage({ params }: ResearchParams) {
  const paper = getResearchPaper(params.slug)

  return (
    <div className="pt-24 pb-16">
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/research"
            className="inline-flex items-center text-slate-400 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to research
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              {paper.keywords.map((keyword, index) => (
                <span key={index} className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{paper.title}</h1>

            <div className="flex items-center gap-6 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{paper.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span>{paper.journal}</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-primary" />
                <span>{paper.downloads} downloads</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {paper.authors.map((author, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">{author.name}</div>
                    <div className="text-sm text-slate-400">{author.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold mb-3">Abstract</h2>
            <p className="text-slate-300">{paper.abstract}</p>
          </div>

          <div className="rounded-xl overflow-hidden mb-10 relative aspect-[2/1]">
            <Image src={paper.image || "/placeholder.svg"} alt={paper.title} fill className="object-cover" />
          </div>

          <div
            className="prose prose-invert prose-cyan max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: paper.content }}
          />

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="outline" className="border-slate-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="border-slate-700">
              Cite This Paper
            </Button>
            <Button variant="outline" className="border-slate-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Journal Website
            </Button>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Related Research</h2>
            <div className="space-y-4">
              {paper.relatedPapers.map((relatedPaper, index) => (
                <Card
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border-slate-800 hover:border-primary/30 transition-all"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{relatedPaper.title}</CardTitle>
                    <CardDescription>
                      {relatedPaper.authors} • {relatedPaper.journal} • {relatedPaper.year}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={`/research/${relatedPaper.slug}`}
                      className="text-primary inline-flex items-center hover:underline"
                    >
                      View Paper
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
