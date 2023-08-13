const Navbar = () => {
  return (
    <div className="flex gap-4 justify-center">
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        หน้าแรก
      </div>
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        เมนูทั้งหมด
      </div>
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        เกี่ยวกับเรา
      </div>
      <div className="font-bold text-lg text-coffee hover:text-coffee-hover hover:cursor-pointer">
        ติดต่อ
      </div>
    </div>
  )
}

export default Navbar
