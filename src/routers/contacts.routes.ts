import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureDataIsUnique } from "../middlewares/ensureDataIsUnique.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import {  contactUpdateSchema } from "../schemas/contacts.schemas";
import { readContactByIdController,  deleteContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureContactExistsAndUserHasPermission } from "../middlewares/ensureContactExistsAndUserHasPermission.middleware";

const contactsRoutes: Router = Router()

contactsRoutes.get("/:id", ensureTokenIsValid, ensureContactExistsAndUserHasPermission, readContactByIdController);
contactsRoutes.delete( "/:id", ensureTokenIsValid, ensureContactExistsAndUserHasPermission, deleteContactController);
contactsRoutes.patch( "/:id",  ensureTokenIsValid,  ensureContactExistsAndUserHasPermission, ensureDataIsValid(contactUpdateSchema),  ensureDataIsUnique, updateContactController);


export default contactsRoutes