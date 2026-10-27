import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from 'jsonwebtoken';

dotenv.config({
    path: '../../.env'
})



async function authMiddlware(req: Request, res: Response, next: NextFunction) {
    try {

        const token = req.cookies.token
        console.log("reached here")
        const secret = process.env["JWT_SECRET"] as Secret
        if (!token) {
            res.status(401).json({
                message: "unAutorized"
            })
        } else {
            const verify: any = jwt.verify(token, secret)
            console.log(verify.email)
            if (verify.email) {
                req.body.email = verify.email
                next();
            }
        }


    } catch (error) {

    }

}

export default authMiddlware;