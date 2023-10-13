import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts" , async ()=>{
//     const res = await fetch ( 'https://fakestoreapi.com/products');
//     const data = res.json();
//     console.log(data);
// });
   export const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts",async ()=>{
      const response =  await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      return response.data ;
    })
const ProductSlice = createSlice({
     name:"ProductSlice",
     initialState: [],
     reducers:{
        increament : (state ,action)=>{
            return state + action.payload ; 
        },
        decrement : (state ,action)=>{
            return state - action.payload ; 
        }
     },
        extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled , (state,action)=>{
             return action.payload ;
        })
     }
     
});

  export default ProductSlice.reducer;
  export  const {increament ,decrement } = ProductSlice.actions;