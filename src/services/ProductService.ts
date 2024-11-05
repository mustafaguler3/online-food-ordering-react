import axios from "axios";
import { Product } from "../models/restaurant";


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

    getProductImage(image: string) {
        return `${apiUrl}/uploads/products/${image}`;
    }
}

export default new ProductService();