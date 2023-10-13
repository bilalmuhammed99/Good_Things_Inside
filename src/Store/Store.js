import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import { cartSlice } from "./Slices/CartSlice";


export const Store = configureStore({
    reducer :{
        products : ProductsSlice ,
        cart : cartSlice.reducer,
    },
});