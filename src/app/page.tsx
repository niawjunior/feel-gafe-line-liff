"use client"
import Image from "next/image"
import { Mitr } from "next/font/google"
import clsx from "clsx"
import Slide from "./components/Slide"
const inter = Mitr({ subsets: ["latin"], weight: "400" })
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get("page")
  const router = useRouter()

  useEffect(() => {
    console.log("search", search)
    if (search === "contact") {
      router.push("contact")
    }
    if (search === "menu") {
      router.push("menu")
    }
  }, [router, search])
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="lg:w-[70vw] w-[90vw] min-h-[50vh] mx-auto  lg:mt-[100px] mt-[0px]">
        <div
          className={clsx(
            inter.className,
            `h-full lg:flex lg:flex-row flex-col justify-around  text-center bg-white/50 shadow-xl rounded-md px-4 lg:py-8 py-6 lg:mt-[20px] mt-[100px] `
          )}
        >
          <div className="relative m-auto">
            <div className="lg:text-5xl text-4xl  text-coffee font-bold ">
              DevStart <span className="text-neutral-800">Cafe</span>
            </div>

            <div className="lg:text-5xl text-4xl mt-4 text-coffee font-bold ">
              กาแฟสำหรับ <span className="text-neutral-800">Developer</span>
            </div>
          </div>
          <div className=" lg:mt-0 mt-[20px] flex flex-col items-center justify-center">
            <div className="flex text-center">
              <div
                className={clsx(
                  inter.className,
                  `text-2xl text-rose-400 font-bold px-8 py-2 `
                )}
              >
                เมนูแนะนำ
              </div>
            </div>
            <div className="lg:w-[20vw] w-[70vw]">
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
