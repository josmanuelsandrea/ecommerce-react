import MobileNavbar from "../MobileNavbar/MobileNavbar"

const Content = () => {
  return (
    <div className="flex flex-auto relative">
      <MobileNavbar/>
      <div className="z-10 w-full h-full flex justify-center items-center">
        <button className="font-Inter-Bold rounded-2xl border-solid border-2 px-8 py-6 text-xl font-bold bg-shark-950 border-shark-950 text-white">BUY</button>
      </div>
      <div className="h-full w-full absolute bg-no-repeat bg-cover bg-center bg-[url('/images/online_shopping_2.jpg')]" />
      <div className="h-full w-full bg-green-600 absolute bg-opacity-50" />
    </div>
  )
}

export default Content