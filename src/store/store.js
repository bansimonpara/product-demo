import { configureStore } from '@reduxjs/toolkit'

import ProductReducer from "../product/ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
})
