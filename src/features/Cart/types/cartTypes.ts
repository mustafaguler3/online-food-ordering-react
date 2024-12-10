import { User } from "../../../models/User"

export interface Basket {
    id: number
    items : BasketItem[]
    user: User
    totalPrice: number
    discount: number
    tax: number
    grandTotal: number 
    status: number
    currency: number
    createdAt : Date
    updatedAt: Date
}

export interface BasketItem {
    id: number
    productId: number
    basket: Basket
    quantity: number     
    unitPrice: number  
    discount: number   
    totalPrice: number
}
