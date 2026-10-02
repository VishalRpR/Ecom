import { Request,Response, NextFunction } from "express"
import { createProductService, listProductService, listProductsService } from "../services/product.service"
export async function createProductHandler(req:Request , res:Response ,next:NextFunction){
    const productResponse= await createProductService(req.body)

    res.status(201).json({
        message:"product created successfully",
        data:productResponse,
        success:true
    })
}


export async function listProductsHandler(req:Request , res:Response ,next:NextFunction){
    const productsResponse= await listProductsService()

    res.status(201).json({
        message:"all products listed successfully",
        data:productsResponse,
        success:true
    })

}


export async function listProductHandler(req:Request , res:Response ,next:NextFunction){
    const productResponse= await listProductService(Number(req.params.id))

    res.status(201).json({
        message:"all products listed successfully",
        data:productResponse,
        success:true
    })

}