import Liff from "../components/Liff"

const Page = () => {
  return (
    <div className="min-h-screen">
      <Liff liffID={process.env.LIFF_ID!} />
    </div>
  )
}

export default Page
