import * as z from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" }),
    confirmPassword: z.string().min(5, { message: "Password must be at least 5 characters" })
})

export const GigSchema = z.object({
    title: z.string().min(4).max(100),
    category: z.string().min(1).max(50),
    searchTags: z.string(),
    price: z.coerce.number().min(5),//z.number().min(1),
    daysToMake: z.coerce.number().min(1),
    description: z.string().min(1).max(1000),
    imgUrls: z.any()
  })