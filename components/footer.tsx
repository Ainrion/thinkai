import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/50 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">ThinkAI</span>
            </div>
            <p className="text-slate-400 text-sm">
              Advanced AI solutions including MCP servers, custom agents, and fine-tuned models for tomorrow's
              challenges.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/products/ai-assistant">Personalized AI Assistant</FooterLink>
              </li>
              <li>
                <FooterLink href="/products/neural-studio">Neural Architecture Studio</FooterLink>
              </li>
              <li>
                <FooterLink href="/products/mcp-server">MCP Server Cluster</FooterLink>
              </li>
              <li>
                <FooterLink href="/products/fine-tuning">Model Fine-Tuning Platform</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="/blog">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/documentation">API Documentation</FooterLink>
              </li>
              <li>
                <FooterLink href="/tutorials">AI Model Tutorials</FooterLink>
              </li>
              <li>
                <FooterLink href="/support">Technical Support</FooterLink>
              </li>
              <li>
                <FooterLink href="/research">Research Papers</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ThinkAI. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-slate-400 hover:text-white transition-colors text-sm">
      {children}
    </Link>
  )
}

