import Navbar from "@/components/Home/Navbar"
import Head from "next/head"
import { Provider } from "react-redux"
import store from '@/store'
import Container from "@/components/Register/Container"

const register = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Navbar />
        <Container />
      </Provider>
    </div>
  )
}

export default register