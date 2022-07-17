import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
type User = { usename: string; password: string }

interface IUserState {
  user: User | null
}

const initialState: IUserState = {
  user: null
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export default userSlice.reducer

export const { logout, setUser } = userSlice.actions
