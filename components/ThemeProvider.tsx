"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeProvider = ({ children}: React.ComponentProps<typeof NextThemesProvider>) => {


  return <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
  >
    {children}
  </NextThemesProvider>
}

export default ThemeProvider;