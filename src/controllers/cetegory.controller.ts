import { Request,Response, NextFunction } from "express"
import { createCategoryService, listCategoriesService, listCategoryService} from "../services/category.service"



export async function createCategoryHandler(req:Request , res:Response ,next:NextFunction){
    const categoryResponse= await createCategoryService(req.body)
     console.log(req.body)
    res.status(201).json({
        message:"category created successfully",
        data:categoryResponse,
        success:true
    })
}


export async function listCategoriesHandler(req:Request , res:Response ,next:NextFunction){
    const categoriesResponse= await listCategoriesService()

    res.status(201).json({
        message:"all categorys listed successfully",
        data:categoriesResponse,
        success:true
    })

}


export async function listCateogryHandler(req:Request , res:Response ,next:NextFunction){
    const categoryResponse= await listCategoryService(Number(req.params.id))

    res.status(201).json({
        message:"all categorys listed successfully",
        data:categoryResponse,
        success:true
    })

}