import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";

export type tLogin = z.infer<typeof createLoginSchema>