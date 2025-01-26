import axios from "axios";
import cartApi from "../api/cartApi";
import { Basket } from "../features/Cart/types/cartTypes";


class CartService {
    async getBasket(): Promise<Basket> {
        try {
          const response = await cartApi.getBasket();
          return response;
        } catch (error: any) {
          throw error;
        }
    }
    async addToCart(productId: number, quantity: number) {
      try {
        await cartApi.addToCart(productId,quantity);
        console.log("Product added to cart successfully.");
      }catch (error) {
        console.error("Error fetching basket:", error);
        throw error;
      }
    }
    async updateCart(productId: number,quantity: number) {
      try {
        const response = await cartApi.updateCart(productId,quantity);
        console.log("Product updated successfully.");
        return response;
      }catch (error) {
        throw error;
      }
    }
}

export default new CartService();