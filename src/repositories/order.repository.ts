import { makeOrderDataDTO } from "../dto/order.dto";
import { prisma } from "../lib/prisma";

export async function listOrders(){
    const orders = await prisma.order.findMany()

    return orders
}


export async function makeOrder(makeOrderData:makeOrderDataDTO){
    // const order =await  prisma.order.create({
    //     data:{ 
    //             totalPrice:makeOrderData.totalPrice,
    //             userId     :makeOrderData.userId,
    //             status    :makeOrderData.status
    //     }
    // }) 


    // const orderitems = await prisma.orderItem.createMany({
    //     data:makeOrderItemData.map(obj:Object => ({
    //         ...obj,
    //         orderId:order.id
    //     }))
    // })

    // return order
}