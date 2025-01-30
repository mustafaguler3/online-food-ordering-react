import axios from "axios";
import orderApi from "../api/orderApi";
import { Order } from "../models/Order";
import { env } from "process";
import { headers } from "next/headers";
import axiosClient from "../api/axiosClient";


class OrderService {

  async createOrder(data: any) {
    try {
      const response = await orderApi.create(data)
      console.log("order service :",response)
      return response
    } catch (error) {
        console.log("Error order service ",error)
        throw error
    }
  }
}

export default new OrderService();
