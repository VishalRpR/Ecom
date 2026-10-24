import { Request,Response, NextFunction } from "express"
import { authenticateUserService, createUserService, listUserByEmailService, listUserService, listUsersService } from "../services/user.service"
import { StatusCodes } from "http-status-codes"
export async function createUserHandler(req:Request , res:Response ,next:NextFunction){
    const UserResponse= await createUserService(req.body)

    const tkn=res.locals.token
    res.status(StatusCodes.OK).json({
        message:"User created successfully",
        data:UserResponse,
        success:true, 
        tkn
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
        message:"User listed successfully",
        data:UserResponse,
        success:true
    })

}

export async function listUserByEmailHandler(req:Request , res:Response ,next:NextFunction){
   
    console.log("inside the controller checking if request is comming or now",req.body.email)
   
    const UserResponse= await listUserByEmailService(String(req.body.email))
      
    console.log("inside the controller checking if request is comming or now",req.body.email)

    const token=res.locals.token
    res.status(StatusCodes.OK).json({
        message:"user listed successfully",
        data:UserResponse,
        success:true,
        tkn:token
    })

}


export async function authenticateUserHandler(req:Request,res:Response,next:NextFunction){
    const token = await authenticateUserService(req.body);

    res.status(200).json({
        message:"token generate successfully",
        data:token
    })

}