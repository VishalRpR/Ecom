import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().int().min(1),
    image:z.string().min(1).optional(),
    stockQuantity:z.number().int().min(1),
    categoryId:z.number().int().min(1),
    sellerId:z.number().int().min(1)

})