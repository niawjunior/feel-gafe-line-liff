import { ILogin } from "../../interfaces/ILine"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ILogin = {
  isLoggedIn: false,
  token: "",
}

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: () => initialState,
    setLogin: (state, action: PayloadAction<ILogin>) => {
      return { state, ...action.payload }
    },
  },
})

export const { setLogin, reset } = login.actions
export default login.reducer
