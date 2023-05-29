import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"
import { tContactReturn } from "../../interfaces/contacts.interfaces"
import { AppError } from "../../errors";


export const readContactByIdService = async (contactId: number): Promise<tContactReturn>  => {

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
  const findContact: Contact | null = await contactRepository.findOne({ 
    where: {
        id: contactId,
    },
    relations: {
        user: true,
    }});

        
  if (!findContact) {
    throw new AppError("Contact not found");
  }

  const { user, ...contactWithoutUser } = findContact;
  const { password, ...userWithoutPassword } = user;

  const contact: tContactReturn = {
    ...contactWithoutUser,
    ...{user:userWithoutPassword}
  };


  return contact;
};
