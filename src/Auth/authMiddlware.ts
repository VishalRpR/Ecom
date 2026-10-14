import jwt, { Secret } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";

dotenv.config({
    path: '../../.env'
})

async function authMiddlware(req: Request, res: Response, next: NextFunction) {
    try {



        const email = req.body.email;
        const secret = process.env["JWT_SECRET"] as Secret 
        const token = jwt.sign(
            { email },
            secret,
            { expiresIn: '1h' }
        );
    

        res.locals.token=token
        next()




    } catch (error) {

    }

}

export default authMiddlware;