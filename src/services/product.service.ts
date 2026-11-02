import { createProductDTO } from "../dto/product.dto";
import { createProduct, listProduct, listProducts } from "../repositories/product.repository";
import { listUserByEmail } from "../repositories/user.repository";


export async function createProductService(productData: createProductDTO) {
    console.log(productData)
        const user =await listUserByEmail(productData.useremail)
 

        
        if(user){
            console.log(user.role)
            if(user.role=="Admin"){
                const product = await createProduct(productData)
                return product
            }else{
                return null
            }
        }
 
   
   
    
}


export async function listProductsService() {


    const products = await listProducts()
    return products
}


export async function listProductService(id: number) {


    const product = await listProduct(id)
    return product
}