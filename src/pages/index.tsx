import Navbar from "@/components/Home/Navbar"
import Content from "@/components/Home/Content"
import Head from "next/head"

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Content />
    </div>
  )
}