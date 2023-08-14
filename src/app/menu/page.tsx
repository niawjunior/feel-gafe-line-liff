"use client"
import Image from "next/image"
import { useAppSelector } from "../redux/hooks"
const Menu = () => {
  const coffees = useAppSelector((state) => state.menuReducer)

  return (
    <div className="pt-[100px] lg:px-20 px-2 min-h-screen ">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 place-content-evenly">
        {coffees?.menus?.map((item, index) => {
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
