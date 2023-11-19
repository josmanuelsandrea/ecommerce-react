import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'
import { useAppSelector } from "@/hook"

const MobileNavbar = () => {
    const navbar_status = useAppSelector(state => state.navbarState.active)
    return (
        <ul className={`flex flex-col gap-4 font-Inter-Bold text-2xl bg-shark-950 p-10 justify-center absolute z-30 w-full h-full transition-all bottom-0 ${navbar_status ? 'right-0' : 'right-full'}`}>
            <li className="flex bg-shark-900 items-center rounded-md p-2">
                <Link href={'/login'}>
                    <div className='flex items-center'>
                        <span className="text-green-500 text-3xl">
                            <AiOutlineUser />
                        </span>
                        <span className="ml-3 text-white">Log in</span>
                    </div>
                </Link>
            </li>
            <li className="flex bg-shark-900 items-center rounded-md p-2">
                <Link href={'/cart'}>
                    <div className='flex items-center'>
                        <span className="text-green-500 text-3xl">
                            <AiOutlineShoppingCart />
                        </span>
                        <span className="ml-3 text-white">Cart</span>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default MobileNavbar