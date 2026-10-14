import { makeOrderDataDTO } from "../dto/order.dto";
import { listOrders, makeOrder } from "../repositories/order.repository";

export async function makeOrderService(makeOrderData:makeOrderDataDTO){
 
    const order = await makeOrder(makeOrderData)
    return order
}


export async  function listOrdersSerivce(){

    const orders = await listOrders( )
    return orders
}