"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted on the client before rendering
  // This prevents hydration mismatch between server and client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Optional: Create a custom hook for accessing the theme
export const useTheme = () => {
  const context = useContext(createContext(null))
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}