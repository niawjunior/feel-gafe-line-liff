"use client"
import Image from "next/image"

import { Carousel } from "react-responsive-carousel"

const Slide = () => {
  return (
    <Carousel
      autoPlay={true}
      centerMode={true}
      infiniteLoop={true}
      showIndicators={false}
      showArrows={false}
      className="h-[300px]"
    >
      <div>
        <Image
          src={"/coffee-menu-1.png"}
          alt="coffee"
          height={"300"}
          width={"200"}
        />
      </div>
      <div>
        <Image
          src={"/coffee-menu-2.png"}
          alt="coffee"
          height={"300"}
          width={"200"}
        />
      </div>
      <div>
        <Image
          src={"/coffee-menu-3.png"}
          alt="coffee"
          height={"300"}
          width={"200"}
        />
      </div>
      <div>
        <Image
          src={"/coffee-menu-4.png"}
          alt="coffee"
          height={"300"}
          width={"200"}
        />
      </div>
      <div>
        <Image
          src={"/coffee-menu-5.png"}
          alt="coffee"
          height={"300"}
          width={"200"}
        />
      </div>
    </Carousel>
  )
}

export default Slide
