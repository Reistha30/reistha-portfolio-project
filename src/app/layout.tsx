"use client"
import "../app/globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
