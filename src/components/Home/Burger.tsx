import { CiMenuBurger } from 'react-icons/ci'
import { useAppSelector, useAppDispatch } from "@/hook"
import { toggleNavState } from "@/features/NavSlide/NavSlice"

const Burger = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(toggleNavState())}>
        <CiMenuBurger />
      </button>
    </div>
  )
}

export default Burger