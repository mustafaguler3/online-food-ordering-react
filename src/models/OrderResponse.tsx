import { OrderItem } from "./Order"

export interface OrderResponse {
    id: any
    orderReferenceNumber: any
    totalAmount: any
    status: any
    orderDate: any
    userId: any
    paymentId: any
    restaurantName: string
    restaurantId: any
    restaurantIcon: any
    deliveryAddress: string
    restaurantAddress: string
    orderItems: OrderItem[]
    discountPercentage: any
    taxRate:any
}