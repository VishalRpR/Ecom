import { z } from "zod";

export const cartItemSchema = z.object({
    productId: z.number().int().min(1),
    cartId: z.number().int().min(1),
    quantity: z.number().int().min(1),

})