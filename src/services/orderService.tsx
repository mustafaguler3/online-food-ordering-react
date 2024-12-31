import axios from "axios";
import orderApi from "../api/orderApi";
import { Order } from "../models/Order";


class OrderService {
  async createOrder(data: Order) {
    try {
      const response = await orderApi.create(data);

      return response
    } catch (error) {
        console.log("Error order service ",error)
        throw error
    }
  }
}

export default new OrderService();
