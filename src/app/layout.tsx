import "./globals.css"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import Navbar from "./components/Navbar"
import clsx from "clsx"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Providers } from "./redux/provider"

const inter = Kanit({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "DevStart Cafe - กาแฟสำหรับ Developer",
  description: "DevStart Cafe - กาแฟสำหรับ Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={clsx(
          inter.className,
          `bg-feelgafe bg-cover bg-center bg-no-repeat relative`
        )}
      >
        <Providers>
          <div className=" absolute z-10 w-full lg:top-10 top-2">
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
