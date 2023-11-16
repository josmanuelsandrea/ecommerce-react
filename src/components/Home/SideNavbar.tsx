import Cart from "./Cart"
import User from "./User"
import { useAppSelector, useAppDispatch } from "@/hook"
import { toggleNavState } from "@/features/NavSlide/NavSlice"

const SideNavbar = () => {
    const navbarState = useAppSelector(state => state.navbarState.active)
    const dispatch = useAppDispatch()
    return (
        <div className={`absolute sideNavbar w-screen bg-shark-950 h-screen list-none flex flex-col ${navbarState ? 'bottom-0 left-0' : 'bottom-full left-0' }`}>
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
                    <button onClick={() => dispatch(toggleNavState())}>Salir</button>
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar