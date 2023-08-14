import {
  Middleware,
  MiddlewareAPI,
  applyMiddleware,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

import lineReducer from "./features/lineSlice"
import loginSlice from "./features/loginSlice"

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    const { dispatch } = api

    return next(action)
  }

const middlewareEnhancer = applyMiddleware(rtkQueryErrorLogger)

export const store = configureStore({
  reducer: {
    lineReducer,
    loginSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
  enhancers: [middlewareEnhancer],
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
