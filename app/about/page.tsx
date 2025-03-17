import { Zap, Users, Lightbulb, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "Ph.D. in Machine Learning with over 15 years of experience in AI research and development.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Former tech lead at major AI research lab with expertise in distributed systems and neural networks.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Taylor",
      role: "VP of Product",
      bio: "Product strategist with a background in cognitive science and human-computer interaction.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "James Wilson",
      role: "Head of Research",
      bio: "Leading our research initiatives in multi-agent systems and fine-tuning methodologies.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality AI solutions and services",
      icon: <Award className="h-6 w-6 text-primary" />,
    },
    {
      title: "Collaboration",
      description: "Working closely with clients to solve complex challenges",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Impact",
      description: "Creating AI solutions that drive meaningful business outcomes",
      icon: <Target className="h-6 w-6 text-primary" />,
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "ThinkAI was established with a mission to democratize advanced AI technologies.",
    },
    {
      year: "2019",
      title: "First MCP Server",
      description: "Launched our first Multi-agent Cognitive Processing server architecture.",
    },
    {
      year: "2021",
      title: "AI Assistant Platform",
      description: "Released our personalized AI assistant platform with adaptive learning capabilities.",
    },
    {
      year: "2022",
      title: "Fine-Tuning Breakthrough",
      description: "Developed proprietary techniques for efficient model fine-tuning.",
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Expanded our enterprise offerings with custom AI agent development services.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded operations to serve clients across North America, Europe, and Asia.",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">ThinkAI</span>
          </h1>
          <p className="text-xl text-slate-300">
            Pioneering the future of artificial intelligence with innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-7 w-7 text-primary" />
              Our Mission
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              At ThinkAI, we're on a mission to transform how businesses leverage artificial intelligence. We believe in
              creating AI solutions that are not just powerful, but also accessible, ethical, and tailored to specific
              business needs.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Our team of AI researchers, engineers, and business strategists work together to develop cutting-edge
              technologies that solve real-world problems. From our Multi-agent Cognitive Processing servers to our
              custom AI agents and fine-tuned models, we're building the future of AI, one innovation at a time.
            </p>
            <Button className="bg-primary hover:bg-primary/80 text-white">Learn More About Our Vision</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden border border-primary/30">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="ThinkAI Team"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-slate-800 hover:border-primary/30 rounded-xl p-6 transition-all"
              >
                <div className="bg-primary/20 p-3 rounded-full w-fit mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-slate-800 hover:border-primary/30 rounded-xl overflow-hidden transition-all"
              >
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-slate-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 to-purple-500/80"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="flex-1 md:flex-none md:w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-bold z-10">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 md:flex-none md:w-5/12 bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-slate-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about AI and want to make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/80 text-white">View Open Positions</Button>
            <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/10">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

