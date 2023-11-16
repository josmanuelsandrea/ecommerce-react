import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

// Define a type for the slice state
export interface NavbarState {
  active: boolean
}

// Define the initial state using that type
const initialState: NavbarState = {
  active: true
}

export const navSlice = createSlice({
  name: 'navActivated',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleNavState: state => {
      state.active = !state.active
    },
  }
})

export const { toggleNavState } = navSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.navbarState.active

export default navSlice.reducer