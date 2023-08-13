import Liff from "./components/Liff"
import Navbar from "./components/Navbar"
import Image from "next/image"
import { Mitr } from "next/font/google"
import clsx from "clsx"
const inter = Mitr({ subsets: ["latin"], weight: "400" })

export default function Home() {
  return (
    <div className="min-h-screen bg-feelgafe bg-cover bg-center bg-no-repeat flex flex-col justify-center">
      <div className=" absolute z-10 w-full lg:top-10 top-2">
        <Navbar />
      </div>

      <div className="lg:w-[60] w-[80vw] mx-auto mt-[100px]">
        <div
          className={clsx(
            inter.className,
            `h-full lg:flex lg:flex-row flex-col justify-around  text-center bg-white/50 shadow-xl rounded-md px-4 py-8 `
          )}
        >
          <div className="relative">
            <div className="lg:text-5xl text-4xl  text-coffee font-bold ">
              FEEL <span className="text-neutral-800">Gafé</span>
            </div>
            <div className="lg:text-5xl text-4xl text-white font-bold ">-</div>
            <div className="lg:text-5xl text-4xl text-coffee font-bold ">
              ฟีล <span className="text-neutral-800">กาเฟ</span>
            </div>
            {/* <div className="text-2xl text-red-400 mt-8 font-bold ">
              พระราม 2
            </div> */}
            <div className="flex justify-center mt-10">
              <Image
                src={"/logo.jpeg"}
                alt="logo"
                height={"100"}
                width={"100"}
                className="rounded-full shadow-xl border-4 border-white"
              />
            </div>
          </div>
          <div className=" lg:mt-0 mt-[50px] flex flex-col items-center justify-center">
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
            <Image
              src={"/coffee-menu-1.png"}
              alt="coffee"
              height={"400"}
              width={"200"}
            />
          </div>
        </div>
      </div>
      {/* <div>
        <Liff liffID={process.env.LIFF_ID!} />
      </div> */}
    </div>
  )
}
