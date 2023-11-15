import Cart from "./Cart"
import User from "./User"

const SideNavbar = () => {
    return (
        <div className="absolute w-screen bg-shark-950 h-screen top-0 left-0 list-none flex flex-col">
            <ul className="m-10 flex flex-col gap-4 font-Inter-Bold text-2xl">
                <li className="flex bg-shark-900 items-center rounded-md p-2">
                    <span className="text-green-500 text-3xl">
                        <User />
                    </span>
                    <span className="ml-3">Iniciar sesión</span>
                </li>
                <li className="flex bg-shark-900 items-center rounded-md p-2">
                    <span className="text-green-500 text-3xl">
                        <Cart />
                    </span>
                    <span className="ml-3">Carrito</span>
                </li>
                <li className="flex bg-red-500 items-center rounded-md p-2 justify-center">
                    Salir
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar