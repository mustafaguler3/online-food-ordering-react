import axios from "axios";
import cartApi from "../api/cartApi";
import { Basket } from "../features/Cart/types/cartTypes";


class CartService {

    async getBasket(userId: number): Promise<Basket | null> {
        try {
          const response = await cartApi.getBasket(userId);
          return response; // Sepet verisini döndür
        } catch (error: any) {
          console.error("Error fetching basket:", error);
    
          if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 404) {
              throw new Error("Basket not found for the user.");
            } else if (error.response) {
              throw new Error(`Failed to fetch basket. Status: ${error.response.status}`);
            }
          }
          return null;
        }
    }
    async addToCart(productId: number, quantity: number) {
      try {
        await cartApi.addToCart(productId,quantity);
        console.log("Product added to cart successfully.");
      }catch (error) {
        console.error("Error fetching basket:", error);
    
          if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 404) {
              throw new Error("Basket not found for the user.");
            } else if (error.response) {
              throw new Error(`Failed to fetch basket. Status: ${error.response.status}`);
            }
          }
      }
    }
}

export default new CartService();