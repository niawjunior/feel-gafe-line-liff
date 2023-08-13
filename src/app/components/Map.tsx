"use client"
import { BiLogoFacebook, BiPhoneCall } from "react-icons/bi"
import Image from "next/image"
const Map = () => {
  const handleClickFacebook = () => {
    window.open("https://web.facebook.com/profile.php?id=100094097204204")
  }
  const handleClickLine = () => {
    window.open("https://lin.ee/xi9bIR2")
  }
  return (
    <div className="shadow-md bg-white/70 p-4 rounded-md ">
      <div className="font-bold text-coffee mb-2">
        FEEL Gafé - ฟีล กาเฟ่ พระราม 2
      </div>
      <div className="flex gap-2">
        <div className="bg-blue-200 w-8 h-8 flex justify-center items-center rounded-full mb-2 hover:cursor-pointer">
          <a
            href="https://web.facebook.com/profile.php?id=100094097204204"
            target="_blank"
          >
            <BiLogoFacebook />
          </a>
        </div>
        <div className="bg-green-200 w-8 h-8 flex justify-center items-center rounded-full mb-2 hover:cursor-pointer">
          <a href="tel:090-926-4747">
            <BiPhoneCall />
          </a>
        </div>
        <div className="bg-green-400 w-8 h-8 flex justify-center items-center rounded-full mb-2 hover:cursor-pointer">
          <a href="https://lin.ee/xi9bIR2" target="_blank">
            <Image
              src={"/line-icon.png"}
              alt="line-icon"
              height={"20"}
              width={"20"}
            />
          </a>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.30859840459817!2d100.4340951922245!3d13.661559788304647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bddbe622f14b%3A0xc18883772e5ce6b3!2z8J2QhfCdkITwnZCE8J2QiyDwnZCG8J2QmvCdkJ_DqSAtIOC4n-C4teC4pSDguIHguLLguYDguJ_guYgg4Lie4Lij4Liw4Lij4Liy4LihIDI!5e0!3m2!1sen!2sth!4v1691938469952!5m2!1sen!2sth"
        width="100%"
        height="450"
        className="border-none"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Map
