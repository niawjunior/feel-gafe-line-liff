"use client"
import { useEffect, useState } from "react"
import liff from "@line/liff"

interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState<any>(null)
  const [liffError, setLiffError] = useState<any>(null)

  const handleLogin = () => {
    // liff.login()
  }

  useEffect(() => {
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile: any) => {
            console.log(profile)
          })
        } else {
          handleLogin()
        }
        console.log("liff.init() done")
      })
      .catch((e: any) => {
        console.log(`LIFF error: ${e.message}`)
        setLiffError(e.message.toString())
      })
  }, [liffID, liffObject])

  return (
    <div className="flex justify-center items-center">
      {liffObject?.isLoggedIn() && (
        <div className="font-semibold text-coffee">
          สวัสดีค่ะ คุณ {liffObject?.displayName}
        </div>
      )}
      {!liffObject?.isLoggedIn() && (
        <div className="font-bold text-2xl text-coffee hover:text-coffee-hover">
          เรากำลังพาคุณไปยังหน้า Login...
        </div>
      )}
    </div>
  )
}

export default Liff
