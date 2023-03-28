import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        addItem: (state, {payload}) => {
            state.cartItems.push(payload)
        },
        removeItem: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
        },
        updateTotal: (state) => {
            state.amount = state.cartItems.reduce((acc, curr) => acc + curr.amount , 0)
            state.total = state.cartItems.reduce((acc, curr) => acc + (+curr.amount * +curr.price) , 0)
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    } 
})


export const {increase, decrease, addItem, removeItem, updateTotal, clearCart} = cartSlice.actions;
export default cartSlice.reducer
