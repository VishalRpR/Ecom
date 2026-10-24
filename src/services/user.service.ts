import jwt,{ Secret } from "jsonwebtoken";
import { createUserDTO, listuserDTO } from "../dto/user.dto";
import { createUser, listUser, listUserByEmail, listUsers } from "../repositories/user.repository";
import bcrypt from 'bcrypt'

export async function createUserService(UserData:createUserDTO){

      const hashedpassword  = await bcrypt.hash(UserData.password,10)
      const user = await createUser({...UserData,password:hashedpassword})
    return user 
}


export async function listUsersService(){


    const users = await listUsers()
    return users
}


export async function listUserService(id:number){


    const user = await listUser(id)
    return user 
}

export async function listUserByEmailService(email:string){


    const user = await listUserByEmail(email)
    return user 
}


export async function authenticateUserService(data:listuserDTO){
    const email=data.email
    const user = await listUserByEmail(email);
    if(user){  
   
   const compare=  await bcrypt.compare(data.password,user?.password)
  
   if(compare){
    const secret = process.env["JWT_SECRET"] as Secret
    console.log("inside the authuserservice")
            const token = jwt.sign(
                { email },
                secret,
                { expiresIn: '1h' }



            );

            console.log(token)
            return token

   }else{
    return null
   }
    

}

   
}