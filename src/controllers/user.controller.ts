import { Request,Response, NextFunction } from "express"
import { createUserService, listUserService, listUsersService } from "../services/user.service"
import { StatusCodes } from "http-status-codes"
export async function createUserHandler(req:Request , res:Response ,next:NextFunction){
    const UserResponse= await createUserService(req.body)

    res.status(StatusCodes.OK).json({
        message:"User created successfully",
        data:UserResponse,
        success:true
    })
}


export async function listUsersHandler(req:Request , res:Response ,next:NextFunction){
    const UsersResponse= await listUsersService()

    res.status(StatusCodes.OK).json({
        message:"all Users listed successfully",
        data:UsersResponse,
        success:true
    })

}


export async function listUserHandler(req:Request , res:Response ,next:NextFunction){
    const UserResponse= await listUserService(Number(req.params.id))

    res.status(StatusCodes.OK).json({
        message:"all Users listed successfully",
        data:UserResponse,
        success:true
    })

}