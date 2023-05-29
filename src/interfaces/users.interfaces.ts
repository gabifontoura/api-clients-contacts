import { z } from "zod";
import { DeepPartial } from "typeorm";
import { userSchema, returnUserSchema, returnAllUsersSchema } from "../schemas/users.schema";

export type tUser = z.infer<typeof userSchema>
export type tUserReturn = z.infer<typeof returnUserSchema>
export type tAllUsersReturn = z.infer<typeof returnAllUsersSchema>
export type tUserUpdate = DeepPartial<tUser>