import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Message Must be atleast 10 character long" })
        .max(300, { message: "Message Must be under 300 character" })
})