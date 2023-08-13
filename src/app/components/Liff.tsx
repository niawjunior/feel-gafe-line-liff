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
    liff.login()
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
          // The user can use an API that requires an access token, such as liff.getProfile().
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
    <div>
      <div>
        {liffObject?.isLoggedIn() && <div>Hello</div>}
        {!liffObject?.isLoggedIn() && <p>User is not logged in.</p>}
      </div>
    </div>
  )
}

export default Liff
