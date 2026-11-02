import { Request, Response, NextFunction } from "express"
import { createProductService, listProductService, listProductsService } from "../services/product.service"
import { StatusCodes } from "http-status-codes"
export async function createProductHandler(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    const useremail = req.email;
    const price = Number(req.body.price)
    const quantity = Number(req.body.stockQuantity)
    const category = Number(req.body.categoryId)
    const seller = Number(req.body.sellerId)
    if (req.file) {
        const imageUrl = (req.file as Express.MulterS3.File).location
        const productResponse = await createProductService({
            ...req.body,
            price: price,
            categoryId: category,
            sellerId: seller,
            stockQuantity: quantity,
            useremail: useremail,
            image: imageUrl
        })
        if (productResponse != null) {
            res.status(StatusCodes.OK).json({
                message: "product created successfully",
                data: productResponse,
                success: true
            })
        }



    } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: "this user cannot perform this action",
            success: false
        })
    }


}


export async function listProductsHandler(req: Request, res: Response, next: NextFunction) {
    const productsResponse = await listProductsService()

    res.status(StatusCodes.OK).json({
        message: "all products listed successfully",
        data: productsResponse,
        success: true
    })

}


export async function listProductHandler(req: Request, res: Response, next: NextFunction) {
    const productResponse = await listProductService(Number(req.params.id))

    res.status(StatusCodes.OK).json({
        message: "all products listed successfully",
        data: productResponse,
        success: true
    })

}