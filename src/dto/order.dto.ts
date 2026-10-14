type OrderStatus = "pending" | "confirmed" |  
"shipped" |
"delivered" |
"cancelled"


export type makeOrderDataDTO={
    status:OrderStatus,
    userId:number,
    totalPrice:number

}