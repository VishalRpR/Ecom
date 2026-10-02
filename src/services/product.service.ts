import { createProductDTO } from "../dto/product.dto";
import { createProduct, listProduct, listProducts } from "../repositories/product.repository";

export async function createProductService(productData:createProductDTO){


    const product = await createProduct(productData)
    return product 
}


export async function listProductsService(){


    const products = await listProducts()
    return products
}


export async function listProductService(id:number){


    const product = await listProduct(id)
    return product 
}