import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Star Wars Characters",
  description: "A list of Star Wars characters",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
