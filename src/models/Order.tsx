import { Basket } from "../features/Cart/types/cartTypes";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { Product } from "./Product";
import { User } from "./User";

export interface Order {
    id: number
    orderReferenceNumber: string
    totalAmount: number
    status: string
    orderDate: Date
    items: OrderItem[]
    user: User
    payments: Payment[]
    basket: Basket
    shippingAddress: Address
}
export interface OrderItem {
    id: number
    order: Order
    product: Product
    quantity: number
    unitPrice: number
    totalPrice: number
}