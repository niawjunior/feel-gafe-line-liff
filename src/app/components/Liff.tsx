"use client"
import { useEffect, useState } from "react"
import liff from "@line/liff"

interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState(null)
  const [liffError, setLiffError] = useState(null)

  const handleLogin = () => {
    liff.login()
  }

  useEffect(() => {
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        console.log("liff.isLoggedIn()", liff.isLoggedIn())
        if (liff.isLoggedIn()) {
          console.log(liff.getProfile())
          // The user can use an API that requires an access token, such as liff.getProfile().
        } else {
          handleLogin()
        }
        // console.log(liff.getVersion())
        console.log(liff.getProfile())
        console.log("liff.init() done")
      })
      .catch((e: any) => {
        console.log(`LIFF error: ${e.message}`)
        setLiffError(e.message.toString())
      })
  }, [liffID])

  return (
    <div>
      <div>
        <p>User is not logged in.</p>
      </div>
    </div>
  )
}

export default Liff
