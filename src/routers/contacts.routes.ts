import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureDataIsUnique } from "../middlewares/ensureDataIsUnique.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExists } from "../middlewares/ensureUserExists.middleware";
import { ensurePermission } from "../middlewares/ensurePermission.middleware";
import {  contactUpdateSchema } from "../schemas/contacts.schemas";
import { readContactByIdController, createContactController, deleteContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureContactExists } from "../middlewares/ensureContactExists.middleware";

const contactsRoutes: Router = Router()

contactsRoutes.get("/:id", ensureTokenIsValid, readContactByIdController);
contactsRoutes.delete( "/:id", ensureTokenIsValid, ensureContactExists, deleteContactController);
contactsRoutes.patch( "/:id",  ensureTokenIsValid,  ensureContactExists, ensureDataIsValid(contactUpdateSchema),  ensureDataIsUnique, updateContactController);


export default contactsRoutes