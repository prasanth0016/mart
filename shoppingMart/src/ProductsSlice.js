import { createSlice } from "@reduxjs/toolkit";
const initialState = { cart: [], cartCount: 0 };
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.length == 0) {
                const newCartProduct = {
                    ...action.payload,
                    cartQuantity: 1,
                    cartAmount: action.payload.price
                }
                state.cart.push(newCartProduct);
                state.cartCount += 1;
            } else {
                const productsToUpdate = []
                state.cart.forEach((product, index) => {
                    if (product.id == action.payload.id) {
                        const item={
                            ...product,
                            indexValue:index
                        }
                        productsToUpdate.push(item);
                    }
                })
                if (productsToUpdate.length > 0) {
                    productsToUpdate.forEach((product) => {
                        state.cart[product.indexValue].cartQuantity += 1
                        state.cart[product.indexValue].cartAmount += product.price
                        state.cartCount += 1;
                    })
                }
                if (productsToUpdate.length == 0) {
                    const newCartProduct = {
                        ...action.payload,
                        cartQuantity: 1,
                        cartAmount: action.payload.price
                    }
                    state.cart.push(newCartProduct);
                    state.cartCount += 1;
                }
            }
        },
        removeFromCart: (state, action) => {
          state.cartCount=(state.cartCount-action.payload.cartQuantity)
            state.cart = state.cart.filter((item) => item.id != action.payload.id)
        }
    }
})
export const { addToCart, removeFromCart } = productSlice.actions;
export const productReducer = productSlice.reducer;
export default productSlice;


