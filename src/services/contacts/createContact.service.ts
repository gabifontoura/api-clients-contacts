import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User} from "../../entities";
import { tContact, tContactReturn } from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";
import { AppError } from "../../errors";


export const createContactService = async (contactData: tContact, userId: number): Promise<tContactReturn> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOne({
      where: {
          id: userId,
      }
    });

  if (!user) {
    throw new AppError("User not found", 401);
  }

  const contact: Contact = contactRepository.create(contactData);

  contact.user = user

  await contactRepository.save(contact)
  
  const newContact:tContactReturn = returnContactSchema.parse(contact)

  
  return newContact

}