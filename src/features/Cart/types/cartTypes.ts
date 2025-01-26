import { User } from "../../../models/User"

export interface Basket {
    id: number
    items : BasketItem[]
    user: User
    totalPrice: number
    discountCode: DiscountCode
    discount: number
    tax: number
    grandTotal: number 
    status: number
    currency: number
    createdAt : Date
    updatedAt: Date
}
export interface DiscountCode {
    id: number
    code: string
    discountValue: number
    isActive: boolean
    type: any
    validFrom: any
    validUntil: any
    baskets:Basket
}
export interface BasketItem {
    id: number
    productId: number
    productName: string
    productImage: string
    description: string
    basket: Basket
    quantity: number    
    unitPrice: number  
    discount: number
    totalPrice:number
}
