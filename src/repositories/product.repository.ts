import { createProductDTO } from "../dto/product.dto";
import { prisma } from "../lib/prisma";

export async function listProducts(){

    const allProducts = await prisma.product.findMany({});
    return allProducts
}

export async function listProduct(id:number){

    const allProducts = await prisma.product.findUnique({
        where:{
            id:id
        }
    });
    return allProducts
}




export async function createProduct(productData:createProductDTO){

    const allProducts = await prisma.product.create({
        data:{
            name:productData.name,
            description:productData.description,
            image:productData.image,
            price:productData.price,
            stockQuantity:productData.stockQuantity,
            categoryId:productData.categoryId,
            sellerId:productData.sellerId
        }
        });

         return allProducts

    //res.send(`${JSON.stringify(allProducts)}`)
}
