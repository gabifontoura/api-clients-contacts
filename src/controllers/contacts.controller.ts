import { Request, Response } from "express";
import { tContact, tContactReturn, tAllContactsReturn, tContactUpdate } from "../interfaces/contacts.interfaces";
import { createContactService } from "../services/contacts/createContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import {readContactByIdService } from "../services/contacts/readContactById.service";
import { updateContactService } from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
    const contactData: tContact = req.body;
    const userId  = parseInt(req.params.id);

    const newContact: tContactReturn = await createContactService(contactData, userId);
  
    return res.status(201).json(newContact);
  };
  
  export const readContactByIdController = async (req: Request, res: Response) => {
    
    const contactId: number = parseInt(req.params.id);
    const contact: tContactReturn = await readContactByIdService(contactId);
    return res.json(contact);
  };
  
  export const updateContactController = async (req: Request, res: Response) => {
    const contactData: tContactUpdate = req.body;
    const contactId: number = parseInt(req.params.id);
  
    const updatedContact: tContactUpdate = await updateContactService(contactData, contactId);
  
    return res.json(updatedContact);
  };
  
  export const deleteContactController = async (req: Request, res: Response) => {
    const contactId: number = parseInt(req.params.id);
  
    await deleteContactService(contactId);
  
    return res.status(204).send();
  };
  
