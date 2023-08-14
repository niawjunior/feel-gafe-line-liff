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
  const userLogin = useAppSelector((state) => state.loginReducer)

  const dispatch = useAppDispatch()
  const handleLogin = () => {
    liff.login()
  }
  useEffect(() => {
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
        <div className="mt-[100px] flex flex-col justify-center items-center">
          <div className="font-semibold text-coffee">
            สวัสดีค่ะ คุณ {userProfile?.displayName || "N/A"}
          </div>
          <div className="mt-4  mb-4 rounded-full w-[100px] h-[100px] flex justify-center items-center">
            <Image
              src={userProfile?.pictureUrl || "/cat.png"}
              alt="profile"
              height={80}
              width={80}
              className="rounded-full mt-4"
            />
          </div>
          <a
            href="https://lin.ee/qAGMKwx"
            className="font-bold mb-2 text-coffee underline underline-offset-4"
          >
            ไปยังหน้าสะสมแต้ม
          </a>
        </div>
      )}
    </div>
  )
}

export default Liff
