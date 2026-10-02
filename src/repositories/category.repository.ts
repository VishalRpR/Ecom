import { createCategoryDTO } from "../dto/category.dto";
import { prisma } from "../lib/prisma";

export async function listCategories(){

    const allCategories = await prisma.product.findMany({});
    return allCategories
}

export async function listCategory(id:number){

    const category = await prisma.category.findUnique({
        where:{
            id:id
        }
    });
    return category
}




export async function createCategory(categoryData:createCategoryDTO){

      console.log(categoryData)
    const allCategories = await prisma.category.create({
        data:{
            name:categoryData.name,
        }
        });

         return allCategories
}
