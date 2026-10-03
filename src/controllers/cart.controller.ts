import { Request,Response, NextFunction } from "express"
import { createCartItemService, createCartService, listCartItemsService} from "../services/cart.service"
import { StatusCodes } from "http-status-codes"


export async function createCartItemHandler(req:Request , res:Response ,next:NextFunction){
    const cartItem= await createCartItemService(req.body)

    res.status(StatusCodes.OK).json({
        message:"CartItem created successfully",
        data:cartItem,
        success:true
    })
}


export async function listCartItemsHandler(req:Request , res:Response ,next:NextFunction){
    const CartItemsResponse= await listCartItemsService()

    res.status(StatusCodes.OK).json({
        message:"all CartItems listed successfully",
        data:CartItemsResponse,
        success:true
    })

}


export async function createCartHandler(req:Request , res:Response ,next:NextFunction){
    const cartResponse= await createCartService(Number(req.params.id))
    res.status(StatusCodes.OK).json({
        message:"all CartItems listed successfully",
        data:cartResponse,
        success:true
    })

}