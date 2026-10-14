import { createCartItemDTO } from "../dto/cart.dto";
import { prisma } from "../lib/prisma";

export async function listCartItems(){

    const allCartItems = await prisma.product.findMany({});
    return allCartItems
}




export async function createCartItem(CartData:createCartItemDTO){

    const cartItem= await prisma.cartItem.create({
        data:{
            productId:CartData.productId,
            cartId:CartData.cartId,
            quantity:CartData.quantity

        }
        });

         return cartItem
}


export async function createCart(userId:number){

    const cartItem= await prisma.cart.create({
        data:{
            userId:userId

        }
        });

         return cartItem
}