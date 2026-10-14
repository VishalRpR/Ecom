import { createCategoryDTO } from "../dto/category.dto";
import { createCategory, listCategories, listCategory } from "../repositories/category.repository";


export async function createCategoryService(categoryData:createCategoryDTO){
    const category = await createCategory(categoryData)
    return category 
}


export async function listCategoriesService(){
    const categories = await listCategories()
    return categories
}


export async function listCategoryService(id:number){
    const category = await listCategory(id)
    return category 
}