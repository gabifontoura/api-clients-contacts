import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureDataIsUniqueCreate, ensureDataIsUniqueOrOwner } from "../middlewares/ensureDataIsUnique.middleware";
import { createUserController, deleteUserController, listUsersController, readUserByIdController, updateUserController } from "../controllers/users.controller";
import { userSchema, usersUpdateSchema } from "../schemas/users.schema";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware";
import { ensurePermission } from "../middlewares/ensurePermission.middleware";
import { createContactController } from "../controllers/contacts.controller";
import { contactSchema } from "../schemas/contacts.schemas";

const usersRoutes: Router = Router()

usersRoutes.post( "", ensureDataIsValid(userSchema), ensureDataIsUniqueCreate, createUserController);
usersRoutes.get("", ensureTokenIsValid, listUsersController);
usersRoutes.delete( "/:id", ensureTokenIsValid, ensureUserExists, ensurePermission, deleteUserController);
usersRoutes.patch( "/:id",  ensureTokenIsValid,  ensureUserExists, ensurePermission, ensureDataIsValid(usersUpdateSchema),  ensureDataIsUniqueOrOwner, updateUserController);
usersRoutes.get("/:id", ensureTokenIsValid, readUserByIdController);
usersRoutes.post("/:id/contacts",ensureDataIsValid(contactSchema), createContactController)

export default usersRoutes