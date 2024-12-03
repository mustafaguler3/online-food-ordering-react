import { Product } from "./Product"

export interface Restaurant {
    id: number
    name: string
    rating: number
    location: string
    distance: number // in km
    deliveryTime: number // in minutes
    bestSeller: boolean
    discountDescription: string
    discountPercent: number
    maxDiscountAmount: number
    restaurantIcon: string
    products: Product[]
}

