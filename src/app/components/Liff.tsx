"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import liff from "@line/liff"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { ILine } from "../interfaces/ILine"
import { setProfile } from "../redux/features/lineSlice"
import { setLogin } from "../redux/features/loginSlice"
interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState<any>(null)
  const [liffError, setLiffError] = useState<any>(null)
  const [pageValue, setPageValue] = useState<any>(null)
  const router = useRouter()
  const userProfile = useAppSelector((state) => state.lineReducer)
  const userLogin = useAppSelector((state) => state.loginSlice)

  const dispatch = useAppDispatch()
  const handleLogin = () => {
    liff.login()
  }
  useEffect(() => {
    // Get the value of the "page" parameter within liff.state
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        if (liff.isLoggedIn()) {
          dispatch(setLogin({ isLoggedIn: true, token: liff.getAccessToken() }))
          liff.getProfile().then((profile: ILine) => {
            dispatch(setProfile(profile))
            const destinationUrl = window?.location?.search
            const pattern = /\?page=(\w+)/
            const match = destinationUrl?.match(pattern)

            if (match) {
              const extractedValue = match[1]
              setPageValue(extractedValue)
              router.push(extractedValue)
            }
          })
        } else {
          dispatch(setLogin({ isLoggedIn: false, token: "" }))
          handleLogin()
        }
        console.log("liff.init() done")
      })
      .catch((e: any) => {
        console.log(`LIFF error: ${e.message}`)
        setLiffError(e.message.toString())
      })
  }, [dispatch, liffID, liffObject, pageValue, router])

  return (
    <div className="flex justify-center items-center flex-col">
      {!userLogin?.isLoggedIn && (
        <div className="font-bold text-2xl text-coffee hover:text-coffee-hover mt-[100px]">
          เรากำลังพาคุณไปยังหน้าเว็บไซต์...
        </div>
      )}
      {userLogin?.isLoggedIn && pageValue === "line" && (
        <div className="mt-[100px]">
          <div className="font-semibold text-coffee">
            สวัสดีค่ะ คุณ {userProfile?.displayName || "N/A"}
          </div>
          <div>
            <Image
              src={userProfile?.pictureUrl!}
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
