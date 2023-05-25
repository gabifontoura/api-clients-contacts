import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";


export const deleteUserService = async (userId: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser: User | null = await userRepository.findOneBy({id: userId});
   
    if (findUser) {
        await userRepository.remove(findUser);
      }

}