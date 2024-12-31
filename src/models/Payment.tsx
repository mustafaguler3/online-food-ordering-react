import { Order } from "./Order";

export interface Payment {
    id: number
    order: Order
    paymentReferenceNumber: string
    status: string
    amountPaid: number
    paymentMethod: string
    paymentDate: Date
    // Kredi kartı
    cardNumber: string
    cardHolderName: string
    expiryDate: string
    cvv: string
    // Banka transferi
    bankName: string
    accountNumber: string
    // PayPal
    paypalEmail: string
}