import { IMenu } from "@/app/interfaces/IMenu"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IMenu = {
  menus: [
    {
      name: "Orangeno",
      price: 70,
      image: "/coffee-menu-2.png",
    },
    {
      name: "Matcha Espresso",
      price: 70,
      image: "/coffee-menu-1.png",
    },
    {
      name: "ชานมบราวน์ชูการ์ วิปชีสพ่นไฟ",
      price: 60,
      image: "/coffee-menu-4.png",
    },
    {
      name: "OREO FRAPPE",
      price: 60,
      image: "/coffee-menu-5.png",
    },
  ],
}

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    reset: () => initialState,
    setMenu: (state, action: PayloadAction<IMenu>) => {
      return { state, ...action.payload }
    },
  },
})

export const { setMenu, reset } = menu.actions
export default menu.reducer
