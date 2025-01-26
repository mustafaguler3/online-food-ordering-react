import { Order } from "./Order";

export interface Payment {
    id: number
    order: Order
    paymentReferenceNumber: string
    status: string
    amountPaid: number
    paymentMethod: string
    paymentDate: Date
    cardNumber: string
    cardHolderName: string
    expiryDate: string
    cvv: string
}