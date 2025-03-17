"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { User, Bell, Menu, Zap, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Products", href: "/products" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Research", href: "/research" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md shadow-primary/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">ThinkAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-40 pl-8 h-9 bg-black/30 border-slate-700 focus:border-primary"
                />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </Button>

              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>

              <Button className="bg-primary hover:bg-primary/80 text-white group">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 border-slate-800">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-primary" />
                      <span className="font-bold text-xl">ThinkAI</span>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-8 bg-black/30 border-slate-700 focus:border-primary"
                    />
                  </div>

                  <nav className="space-y-6">
                    {navLinks.map((link, index) => (
                      <Button key={index} variant="ghost" className="w-full justify-start">
                        {link.name}
                      </Button>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    <Button className="w-full bg-primary hover:bg-primary/80 text-white group">
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="relative text-slate-200 hover:text-white transition-colors py-2 group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
    </a>
  )
}

