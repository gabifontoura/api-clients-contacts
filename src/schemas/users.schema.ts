import { z } from "zod";

export const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telephone: z.string().max(15),
}).strip()

export const usersUpdateSchema = userSchema.partial()

export const returnUserSchema = userSchema.extend({
    id: z.number().int(),
    createdAt: z.date().or(z.string()),
}).omit({password: true})

export const returnAllUsersSchema = returnUserSchema.array()

