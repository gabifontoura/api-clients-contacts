import { DeepPartial } from "typeorm";
import { z } from "zod";
import { contactSchema, returnContactSchema, returnAllContactsSchema } from "../schemas/contacts.schemas";

export type tContact = z.infer<typeof contactSchema>
export type tContactReturn = z.infer<typeof returnContactSchema>
export type tAllContactsReturn = z.infer<typeof returnAllContactsSchema>
export type tContactUpdate = DeepPartial<tContact>