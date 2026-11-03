import { createCartItemDTO } from "../dto/cart.dto";
import { createCart, createCartItem, listCart, listCartItems } from "../repositories/cart.repository";

export async function createCartItemService(cartData:createCartItemDTO){
    const product = await createCartItem(cartData)
    return product 
}

export async function listCartItemsService(){
    const cartItems = await listCartItems()
    return cartItems
}

export async function listCartService(userId:number){

const cart = await listCart(userId)

return cart;

}

export async function createCartService(userId:number){
    const cartItems = await createCart(userId)
    return cartItems
}  