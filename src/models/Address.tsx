import { EnumType } from "typescript";

export interface Address {
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    state?: string;
    city: string;
    country: string;
    zipCode: string;
    phone: string;
    type: any
    userId: number
}