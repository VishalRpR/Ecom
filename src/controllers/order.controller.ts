
import {Request,Response, NextFunction} from "express"
import { listOrdersSerivce, makeOrderService } from "../services/order.service";


export async function listOrdersHandler(req:Request,res:Response,next:NextFunction){

    const orders = await listOrdersSerivce()

    res.status(201).json({
        data:orders,
        success:true})
}

export async function makeOrderHandler(req:Request,res:Response,next:NextFunction){
    const order = await makeOrderService(req.body)
    res.status(201).json({
        data:order,
        success:true
    })
}