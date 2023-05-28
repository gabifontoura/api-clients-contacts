import { z } from 'zod'
import { returnUserSchema } from './users.schema'

export const contactSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    telephone: z.string().max(15),

})

export const returnContactSchema = contactSchema.extend({
    id: z.number().int(),
    createdAt: z.date().or(z.string()),
})

export const returnAllContactsSchema = returnContactSchema.array()

export const contactUpdateSchema = contactSchema.partial()