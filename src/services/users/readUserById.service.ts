import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReturn } from "../../interfaces/users.interfaces";

export const readUserByIdService = async (userId: number): Promise<tUserReturn>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({ 
        where: {
            id: userId,
        },
        relations: {
            contacts: true,
        },
    });
    if (!findUser) {
        throw new Error("Usuário não encontrado");
      }
      const { password, ...userWithoutPassword } = findUser;
    const user  = {
        ...userWithoutPassword,
        ... {contacts: findUser.contacts},
      };

    
    return user
}