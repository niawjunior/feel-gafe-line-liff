import Link from "next/link"
const Navbar = () => {
  return (
    <div className="flex gap-4 justify-center mt-2">
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        <Link href={"/"}>หน้าแรก</Link>
      </div>
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        <Link href={"/menu"}>เมนูทั้งหมด</Link>
      </div>
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        <Link href={"/contact"}>ติดต่อ</Link>
      </div>
    </div>
  )
}

export default Navbar
