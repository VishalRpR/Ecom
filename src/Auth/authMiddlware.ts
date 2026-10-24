import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";
import { listUserByEmailService } from '../services/user.service';
import jwt,{ Secret } from 'jsonwebtoken';

dotenv.config({
    path: '../../.env'
})



async function authMiddlware(req: Request, res: Response, next: NextFunction) {
    try {



        const email = req.body.email;
        const user = await listUserByEmailService(req.body.email)
        const secret = process.env["JWT_SECRET"] as Secret
        console.log("inside the auth middleware")
        if (user != null) {
            if (user.email != null) {


                const token = jwt.sign(
                    { email },
                    secret,
                    { expiresIn: '1h' }



                );

                res.locals.token = token

                console.log(res)
                next()
            } 

        }









    } catch (error) {

    }

}

export default authMiddlware;