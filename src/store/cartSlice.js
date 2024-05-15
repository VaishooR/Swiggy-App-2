import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({

    name : "cart",
    initialState : {
        cartItems : []
    },
    reducers : {
        addCartItem : (state, action)=>{
            state.cartItems.push(action.payload);
        },
        removeCartItem : (state, action)=>{
            // state.cartItems.pop();
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload)
        },
        clearCart : (state) =>{
            state.cartItems.length = 0;
        }
    }

})

export const {addCartItem, removeCartItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;