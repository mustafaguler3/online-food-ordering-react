import axios from "axios";
import orderApi from "../api/orderApi";
import { Order } from "../models/Order";
import { env } from "process";
import { headers } from "next/headers";
import axiosClient from "../api/axiosClient";


const apiUrl = process.env.REACT_APP_API_URL;

class OrderService {

  async createOrder(data: any) {
    try {
      const response = await axiosClient.post(data)
      console.log("order service :",response)
      return response
    } catch (error) {
        console.log("Error order service ",error)
        throw error
    }
  }
}

export default new OrderService();
