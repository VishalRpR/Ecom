import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from 'jsonwebtoken';


dotenv.config({
    path: '../../.env'
})

declare global {
    namespace Express {
      interface Request {
        email: string;
      }
    }
  }
  
  // 2. Module Marker (Required for declare global to work)
  export {};


async function authMiddlware(req: Request, res: Response, next: NextFunction) {
    try {

        const token = req.cookies.token
        console.log("reached here in auth middleware")
        const secret = process.env["JWT_SECRET"] as Secret
        if (!token) {
            res.status(401).json({
                message: "unAutorized",
                success:false
            })
        } else {
            const verify:any = jwt.verify(token, secret)
            console.log(verify)
            console.log(verify.email!=null)
            if (verify.email!=null) {
                console.log("here i come")
                req.email=verify.email;
                
            }

       console.log('here i reached')
            next();
        }


    } catch (error) {
         console.log(error)
         res.json(
            error
         )
    }

}

export default authMiddlware;