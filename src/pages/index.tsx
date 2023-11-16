import Navbar from "@/components/Home/Navbar"
import Content from "@/components/Home/Content"
import Head from "next/head"
import { Provider } from "react-redux"
import store from '@/store'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Navbar />
        <Content />
      </Provider>
    </div>
  )
}