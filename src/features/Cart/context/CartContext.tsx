import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { Product } from "../../../models/Product";
import { Basket } from "../types/cartTypes";
import cartApi from "../../../api/cartApi";


interface CartContextType {
    basket: Basket | null;
    loadBasket: (userId: number) => Promise<void>
    addToCart: (productId: number, quantity: number) => Promise<void>;
    totalCount: number
    //removeFromCart: (id: number) => void;
    updateQuantity: (productId: number,quantity: number) => void;
    //clearCart: () => void; 
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [basket, setBasket] = useState<Basket | null>(null);
    const [totalCount, setTotalCount] = useState<number>(0)

    const loadBasket = async (userId: number) => {
        const data = await cartApi.getBasket(userId);
        setBasket(data);
        setTotalCount(data.items.length)
    }

    const addToCart = async (productId: number,quantity: number) => {
        await cartApi.addToCart(productId,quantity)
        if(basket) loadBasket(basket.user.id)
    }
    const updateQuantity = async (productId: number, quantity: number) => {
        const updatedBasket = await cartApi.updateCart(productId,quantity);
        setBasket(updatedBasket)
        if(basket) loadBasket(basket.user.id);
    }


    return (   
        <CartContext.Provider value={{basket,addToCart,loadBasket,totalCount,updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCart must be used within a CartProvider")
    }
    return context;
}

export default CartContext;