import { createUserDTO } from "../dto/user.dto";
import { prisma } from "../lib/prisma";

export async function listUsers(){

    const allUsers = await prisma.user.findMany({});
    return allUsers
}

export async function listUser(id:number){

    const allUsers = await prisma.user.findUnique({
        where:{
            id:id
        }
    });
    return allUsers
}




export async function createUser(userData:createUserDTO){

    const allUsers = await prisma.user.create({
        data:{
            name:userData.name,
            email:userData.email,
            address:userData.address,
            username:userData.username,
        }
        });

         return allUsers

    //res.send(`${JSON.stringify(allUsers)}`)
}
