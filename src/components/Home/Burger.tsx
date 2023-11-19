import { CiMenuBurger } from 'react-icons/ci'
import { RxCross1 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/hook"
import { toggleNavState } from "@/features/NavSlide/NavSlice"

const Burger = () => {
  const dispatch = useAppDispatch()
  const navbar_status = useAppSelector(status => status.navbarState.active)

  return (
    <div>
      <button onClick={() => dispatch(toggleNavState())}>
        {navbar_status ? <RxCross1 /> : <CiMenuBurger />}
      </button>
    </div>
  )
}

export default Burger