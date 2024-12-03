import { Category } from "./Category";
import { Restaurant} from "./Restaurant";



export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    foodImageUrls: string[];
    restaurantId: number;
    sizes: string[];
    category: string;
    colors: string[];
    isAvailable: boolean;
    quantity: number;
}
