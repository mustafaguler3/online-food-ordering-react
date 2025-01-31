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
  async myOrders() {
    try {
      const response = await orderApi.myOrders();
      return response
    }catch (error) {
      console.log("Error my order service ",error)
      throw error
  }
  }
  async myOrder(orderId:number) {
    try {
      const response = await orderApi.myOrder(orderId);
      return response
    }catch (error) {
      console.log("Error my order service ",error)
      throw error
  }
  }
}

export default new OrderService();
