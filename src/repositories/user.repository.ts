import { createUserDTO } from "../dto/user.dto";
import { prisma } from "../lib/prisma";

export async function listUsers(){

    const allUsers = await prisma.user.findMany({});
    return allUsers
}

export async function listUser(id:number){ 

    const user = await prisma.user.findUnique({
        where:{
            id:id
        }
    });
    return user
}


export async function listUserByEmail(email:string){

    const user = await prisma.user.findUnique({
        where:{

            email:email
        },
        select: {
            id: true,
            name: true,
            email: true,
            address: true,
            username: true,
            password: true
          },
    });
    return user
}




export async function createUser(userData:createUserDTO){

    const allUsers = await prisma.user.create({
        data:{
            name:userData.name,
            email:userData.email,
            address:userData.address,
            username:userData.username,
            password:userData.password
        },
        select: {
            id: true,
            name: true,
            email: true,
            address: true,
            username: true,
          },
        });

         return allUsers

    //res.send(`${JSON.stringify(allUsers)}`)
}


