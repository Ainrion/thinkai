import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "info@thinkai.com",
      description: "For general inquiries",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      details: "123 AI Boulevard, Tech City, TC 10101",
      description: "Our headquarters",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Support",
      details: "support@thinkai.com",
      description: "24/7 technical support",
    },
  ]

  const faqs = [
    {
      question: "What is an MCP Server?",
      answer:
        "MCP (Multi-agent Cognitive Processing) servers are specialized infrastructure designed to run multiple AI agents simultaneously, enabling complex distributed reasoning and coordination between agents.",
    },
    {
      question: "How does model fine-tuning work?",
      answer:
        "Model fine-tuning adapts pre-trained foundation models to specific domains or tasks using your proprietary data, resulting in AI models that are specialized for your unique requirements.",
    },
    {
      question: "Can I customize my AI assistants?",
      answer:
        "Yes, our personalized AI assistants can be customized to your specific needs, learning from interactions to provide increasingly relevant and helpful responses.",
    },
    {
      question: "Do you offer on-premise solutions?",
      answer:
        "Yes, our Enterprise plan includes options for on-premise deployment of our AI infrastructure, ensuring data security and compliance with your organization's policies.",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-300">Have questions about our AI solutions? Our team is here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-white mb-1">{item.details}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Our team of AI experts can design a tailored solution to address your specific business challenges.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

