import { Basket } from "../features/Cart/types/cartTypes";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { Product } from "./Product";
import { Restaurant } from "./Restaurant";
import { User } from "./User";

export interface Order {
    id: number
    orderReferenceNumber: string
    totalAmount: number
    status: string
    orderDate: Date
    items: OrderItem[]
    user: User
    restaurant: Restaurant
    payments: Payment[]
    basket: Basket
    shippingAddress: Address
}
export interface OrderItem {
    id: number
    order: Order
    product: Product
    productName: string
    quantity: number
    unitPrice: number
    totalPrice: number
    
}