import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "../services/orderService";

export const fetchOrdersForUser = createAsyncThunk(
  "orders/fetchOrdersForUser",
  async () => {
    try {
      const response = await orderService.myOrders();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchOrderForUser = createAsyncThunk(
  "orders/fetchOrderForUser",
  async (orderId: number) => {
    try {
      const response = await orderService.myOrder(orderId);
      console.log("Order slice ", response)
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  orders: [],
  order: null,
  status: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearOrder: (state) => {
      state.order = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersForUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrdersForUser.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrdersForUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message || "Order fetching failed.";
      });
    builder
      .addCase(fetchOrderForUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderForUser.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.order = action.payload;
      })
      .addCase(fetchOrderForUser.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message || "Order fetching failed.";
      });
  },
});
export const { setOrders,clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
