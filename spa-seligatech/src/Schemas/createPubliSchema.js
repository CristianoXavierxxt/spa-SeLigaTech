import { z } from "zod"

export const createPubliSchema = z.object({
    title: z.string().min(6, { message:"O titulo deve ter no minimo 6 caracteres" } ).trim(),
    text: z.string().min(10, { message:"O testo deve ter no minimo 10 caracteres" }).trim()
})