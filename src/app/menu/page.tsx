"use client"
import Image from "next/image"
const Menu = () => {
  const coffees = [
    {
      name: "Orangeno",
      price: 70,
      image: "/coffee-menu-2.png",
    },
    {
      name: "Matcha Espresso",
      price: 70,
      image: "/coffee-menu-1.png",
    },
    {
      name: "ชานมบราวน์ชูการ์ วิปชีสพ่นไฟ",
      price: 60,
      image: "/coffee-menu-4.png",
    },
    {
      name: "OREO FRAPPE",
      price: 60,
      image: "/coffee-menu-5.png",
    },
  ]
  return (
    <div className="pt-[100px] lg:px-20 px-2 min-h-screen ">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 place-content-evenly">
        {coffees.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center flex-col items-center bg-white/70 p-4 rounded-md"
            >
              <Image
                src={item.image}
                alt={item.image}
                height={200}
                width={150}
              />
              <div className="flex justify-between w-full">
                <div className="font-bold text-coffee">{item.name}</div>
                <div className="font-bold text-coffee">{item.price} บาท</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
