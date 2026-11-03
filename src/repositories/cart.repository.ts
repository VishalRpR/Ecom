import { createCartItemDTO } from "../dto/cart.dto";
import { prisma } from "../lib/prisma";

export async function listCartItems() {

    const allCartItems = await prisma.cartItem.findMany({
    });
    return allCartItems
}


export async function listCart(userId: number) {
    const cart = await prisma.cart.findFirst({
        where: {
            userId: userId
        }
    })

    console.log(cart)

    var cartId = -1000
    if (cart) {
        cartId = cart.id
    }



    console.log(cartId)
    const allCartItems = await prisma.cartItem.findMany({
        where: {
            cartId: cartId
        },
        include: {
            Product: true
        }
    });




    return allCartItems
}



export async function createCartItem(CartData: createCartItemDTO) {

    const cartItem = await prisma.cartItem.create({
        data: {
            productId: CartData.productId,
            cartId: CartData.cartId,
            quantity: CartData.quantity

        }
    });

    return cartItem
}


export async function createCart(userId: number) {

    const cartItem = await prisma.cart.create({
        data: {
            userId: userId

        }
    });

    return cartItem
}