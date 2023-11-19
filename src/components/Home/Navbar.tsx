import Burger from "./Burger"

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 text-3xl bg-shark-950 text-white px-5 items-center flex-initial">
        <div>
          <h1 className="font-Inter-Bold"><span className="text-green-500 mr-1">$</span>Compra<span className="text-green-500">E</span>xpress</h1>
        </div>
        <div className="flex items-center text-5xl gap-10">
          <Burger />
        </div>
    </div>
  )
} 

export default Navbar