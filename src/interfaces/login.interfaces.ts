import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";
import { User } from "../entities";

export type tLogin = z.infer<typeof createLoginSchema>
export interface iLogin { token: string; user: User; }