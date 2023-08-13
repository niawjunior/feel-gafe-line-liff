import Liff from "./components/Liff"

export default function Home() {
  return (
    <div>
      <Liff liffID={process.env.LIFF_ID!} />
    </div>
  )
}
