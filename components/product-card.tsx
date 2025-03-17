"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductProps {
  product: {
    id: number
    name: string
    description: string
    icon: React.ReactNode
    category: string
    price: number
  }
}

export default function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all h-full flex flex-col">
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
          <div className="h-24 w-full bg-gradient-to-br from-black to-slate-900 rounded-md flex items-center justify-center">
            <div className="text-primary/50 text-xs">Product visualization</div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-slate-800 pt-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-bold">${product.price}</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <Info className="h-4 w-4" />
              </Button>
              <Button className="bg-primary hover:bg-primary/80 group">
                <span>Details</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </CardFooter>

        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/20 z-0"></div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}

