import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";


export const deleteContactService = async (contactId: number): Promise<void> => {

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
  const findContact: Contact | null = await contactRepository.findOneBy({id: contactId});

  if (findContact) {
      await contactRepository.remove(findContact);
  }

}