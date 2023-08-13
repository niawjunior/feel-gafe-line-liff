"use client"
import { useEffect, useState } from "react"
import liff from "@line/liff"

interface ILiffProps {
  liffID: string
}
const Liff = ({ liffID }: ILiffProps) => {
  const [liffObject, setLiffObject] = useState(null)
  const [liffError, setLiffError] = useState(null)

  useEffect(() => {
    console.log("start liff.init()...")
    liff
      .init({ liffId: liffID || "" })
      .then(() => {
        setLiffObject(liff)
        // console.log(liff.getVersion())

        console.log("liff.init() done")
      })
      .catch((e: any) => {
        console.log(`LIFF error: ${e.message}`)
        setLiffError(e.message.toString())
      })
  }, [liffID])

  return <div>hello</div>
}

export default Liff
