import { Request,Response, NextFunction } from "express"
import { createProductService, listProductService, listProductsService } from "../services/product.service"
import { StatusCodes } from "http-status-codes"
export async function createProductHandler(req:Request , res:Response ,next:NextFunction){
    const productResponse= await createProductService(req.body)

    res.status(StatusCodes.OK).json({
        message:"product created successfully",
        data:productResponse,
        success:true
    })
}


export async function listProductsHandler(req:Request , res:Response ,next:NextFunction){
    const productsResponse= await listProductsService()

    res.status(StatusCodes.OK).json({
        message:"all products listed successfully",
        data:productsResponse,
        success:true
    })

}


export async function listProductHandler(req:Request , res:Response ,next:NextFunction){
    const productResponse= await listProductService(Number(req.params.id))

    res.status(StatusCodes.OK).json({
        message:"all products listed successfully",
        data:productResponse,
        success:true
    })

}