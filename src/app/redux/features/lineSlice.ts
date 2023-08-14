import { ILine } from "../../interfaces/ILine"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ILine = {
  userId: "",
  displayName: "",
  pictureUrl: "",
}

export const line = createSlice({
  name: "line",
  initialState,
  reducers: {
    reset: () => initialState,
    setProfile: (state, action: PayloadAction<ILine>) => {
      return { state, ...action.payload }
    },
  },
})

export const { setProfile, reset } = line.actions
export default line.reducer
