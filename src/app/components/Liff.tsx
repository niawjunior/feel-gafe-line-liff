"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import liff from "@line/liff"
import Image from "next/image"
interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [liffError, setLiffError] = useState<any>(null)
  const [pageValue, setPageValue] = useState<any>(null)
  const router = useRouter()

  const handleLogin = () => {
    const destinationUrl = window?.location?.search

    const pattern = /\?page=(\w+)/
    const match = destinationUrl?.match(pattern)

    if (match) {
      const extractedValue = match[1]
      setPageValue(extractedValue)
      liff.login({
        redirectUri: `https://feel-gafe-line-liff.vercel.app/${extractedValue}`,
      })
      // liff.login()
    }
  }
  useEffect(() => {
    // Get the value of the "page" parameter within liff.state
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile: any) => {
            setProfile(profile)

            const destinationUrl = window?.location?.search

            const pattern = /\?page=(\w+)/
            const match = destinationUrl?.match(pattern)

            if (match) {
              const extractedValue = match[1]
              router.push(extractedValue)
            }
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
  }, [liffID, liffObject, pageValue, router])

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
          <div>
            <Image
              src={
                "https://profile.line-scdn.net/0huvEeTMRQKlloHD9N3qZUJhhMKTNLbXNLRHxnbVhOc2EFez0KQChgbFlMJGhVfz5YFi9lbVsYI2FkD10_dkrWbW8sdG5RK2kOTXhluA"
              }
              alt="profile"
              height={100}
              width={100}
              className="rounded-full mt-4"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Liff
