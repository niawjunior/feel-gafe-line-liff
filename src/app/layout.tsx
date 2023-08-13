import "./globals.css"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"

const inter = Kanit({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "FEEL Gafé - ฟีล กาเฟ่ พระราม 2",
  description: "FEEL Gafé - ฟีล กาเฟ่ พระราม 2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  )
}
