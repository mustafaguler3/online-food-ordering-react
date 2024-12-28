import { Address } from "./Address"
import { SavedCard } from "./SavedCard"


export interface User {
    id: number
    username:string
    email:string
    password: number
    phoneNumber:string
    profileImage:string
    firstName:string
    lastName:string
    isEnabled:boolean
    addresses: Address[]
    cards: SavedCard[]
}