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

export interface Product {
    id: number
    name: string
    price: number
    description: string
    foodImageUrls: String[] | any
    restaurant: Restaurant,
}