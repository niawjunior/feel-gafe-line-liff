"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import liff from "@line/liff"
import { useSearchParams } from "next/navigation"

interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [liffError, setLiffError] = useState<any>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const queryString = window.location.search
  const page = searchParams.get("page")

  // Parse the query string into an object
  const queryParams = new URLSearchParams(queryString)

  // Get the value of the "liff.state" parameter
  const liffStateValue = queryParams.get("liff.state")

  // Parse the nested query parameters in liff.state
  const nestedParams = new URLSearchParams(liffStateValue!)
  const pageValue = nestedParams.get("page")

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
            // router.push("contact")
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
          <div>{pageValue}</div>
          <div>{page}</div>
        </div>
      )}
    </div>
  )
}

export default Liff
