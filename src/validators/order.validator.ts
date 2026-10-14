import { z } from "zod";

export const orderSchema = z.object({
    status: z.enum(["pending","confirmed", 
        "shipped",
        "delivered",
        "cancelled"]),
    totalPrice: z.number().int().min(1),
    userId:z.number().int().min(1)

})