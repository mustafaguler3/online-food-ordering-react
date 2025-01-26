import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "../services/cartService";
import { Basket } from "../features/Cart/types/cartTypes";

// load basket
export const fetchBasket = createAsyncThunk<Basket, void>(
  "basket/fetchBasket",
  async () => {
    try {
      const basket = await cartService.getBasket();
      return basket;
    } catch (error) {
      console.error("Error fetching basket:", error);
      throw error;
    }
  }
);
export const updateBasketItem = createAsyncThunk(
  "basket/updateBasketItem",
  async ({ productId, quantity }: { productId: number; quantity: number },{dispatch}) => {
    const updatedBasket = await cartService.updateCart(productId, quantity);
    dispatch(setBasket(updatedBasket))
    return updatedBasket;
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: {
      items: [],
    },
    loading: false,
    error: null,
  },
  reducers: {
    // Sepet öğesini artırma/azaltma (yalnızca frontend'de güncellenir)
    incrementItem: (state:any, action) => {
      const item = state.items.find((i: any) => i.id === action.payload.productId);
      if (item) {
        item.quantity += action.payload.quantity;
      }
    },
    decrementItem: (state:any, action) => {
      const item = state.items.find((i: any) => i.id === action.payload.productId);
      if (item && item.quantity > 1) {
        item.quantity -= action.payload.quantity;
      }
    },
    setBasket(state, action) {
      state.basket = action.payload; // Backend'den dönen güncellenmiş basket bilgisi
    },
    clearBasket(state: any) {
      state.basket = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBasket.fulfilled, (state, action: any) => {
        state.loading = false;
        state.basket = action.payload; // API'den gelen veriyi state'e kaydet
      })
      .addCase(fetchBasket.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message || "Basket fetching failed.";
      });
    builder
      .addCase(updateBasketItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBasketItem.fulfilled, (state, action: any) => {
        state.loading = false;
        state.basket = action.payload;
      })
      .addCase(updateBasketItem.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.error.message || "Updating basket item failed.";
      });
  },
});

export const { clearBasket,setBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
