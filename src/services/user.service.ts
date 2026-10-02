import { createUserDTO } from "../dto/user.dto";
import { createUser, listUser, listUsers } from "../repositories/user.repository";

export async function createUserService(UserData:createUserDTO){


    const user = await createUser(UserData)
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