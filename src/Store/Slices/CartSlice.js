import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice(
    {
        initialState:[
          
        ],
        name:"cartSlice",
        reducers:{
         
            addToCart : (state , action)=>{
                const {id} = action.payload;
                const findProduct =  state.find(( item ) => item.id == id );
                if (findProduct) {
                    findProduct.quanitiy += 1;
                }else{
                    const productClone = {...action.payload , quanitiy : 1 };
                    return [...state ,productClone];
                }
                
            },
            removeItemFromCart : (state , action)=>{
                const {id} = action.payload;
                return  state.filter((item)=> item.id !== id) ;
                
               
            },
            clearCart : (state , action)=>{
                
            }
        }
    }
)

export default cartSlice.reducer; 
export  const {addToCart , removeItemFromCart , clearCart} = cartSlice.actions ;
