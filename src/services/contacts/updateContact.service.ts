import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { returnContactSchema } from "../../schemas/contacts.schemas";
import { tContactUpdate, tContactReturn } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors";


export const updateContactService = async (newContactData: tContactUpdate, contactId: number): Promise<tContactReturn> => {

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const oldContactData: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  })

  if (!oldContactData) {
      throw new AppError("Contact not found", 404);
  }

  const contact = contactRepository.create({
    ...oldContactData,
    ...newContactData,

  });

  await contactRepository.save(contact)

  const updatedContact:tContactReturn = returnContactSchema.parse(contact)

  return updatedContact

}
