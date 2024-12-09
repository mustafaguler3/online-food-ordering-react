import axios from "axios";
import { Product } from "../models/Product";


const apiUrl = process.env.REACT_APP_API_URL;

class ProductService {

    async getProducts(): Promise<Product[] | void>{
        try {
            const response = await axios.get<Product[]>(`${apiUrl}/products`)
            console.log("Products -> ",response.data)
            return response.data;
        }catch(error) {
            console.log("Error ",error)
        }
    }

    async getProductsByCategory(id: number) : Promise<Product[] | void> {
        try {
            const response = await axios.get<Product[]>(`${apiUrl}/products/category/${id}`)

            return response.data;
        }catch(error) {
            throw error;
        }
    }

    async getProduct(id: any): Promise<Product | void> {
        try {
            const response = await axios.get<Product>(`${apiUrl}/products/${id}`)

            return response.data;
        }catch(error) {
            console.log("Error ",error)
        }
    } 

    getProductImage(image: string) {
        return `${apiUrl}/auth/uploads/products/${image}`;
    }
}

export default new ProductService();