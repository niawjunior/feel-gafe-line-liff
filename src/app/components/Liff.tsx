"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import liff from "@line/liff"

interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [liffError, setLiffError] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Get the value of the "page" parameter within liff.state
    const handleLogin = () => {
      const destinationUrl = window.location.href
      liff.login({
        redirectUri: destinationUrl,
      })
    }
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile: any) => {
            setProfile(profile)
            liff
              .sendMessages([
                {
                  type: "text",
                  text: `สวัสดีค่ะ คุณ ${profile.displayName}`,
                },
              ])
              .then(() => {
                console.log("message sent")
              })
              .catch((err: any) => {
                console.log("error", err)
              })
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
  }, [liffID, liffObject, router])

  return (
    <div className="flex justify-center items-center flex-col">
      {!liffObject?.isLoggedIn() && (
        <div className="font-bold text-2xl text-coffee hover:text-coffee-hover mt-[100px]">
          เรากำลังพาคุณไปยังหน้า Login...
        </div>
      )}
      {liffObject?.isLoggedIn() && (
        <div className="mt-[100px]">
          <div className="font-semibold text-coffee">
            สวัสดีค่ะ คุณ {profile?.displayName || "N/A"}
          </div>
        </div>
      )}
    </div>
  )
}

export default Liff
