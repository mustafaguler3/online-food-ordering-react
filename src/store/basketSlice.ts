import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";


// load basket
export const fetchBasket = createAsyncThunk('basket/create', async () => {
    const basket = await cartService.getBasket();
    return basket;
  });

const basketSlice = createSlice({
    name: "basket",
    initialState: {basket: null,loading: false},
    reducers: {
        clearBasket(state) {
            state.basket = null
        }
    }
})

export const {clearBasket} = basketSlice.actions;
export default basketSlice.reducer