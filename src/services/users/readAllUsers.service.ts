import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { tAllUsersReturn } from "../../interfaces/users.interfaces"



export const listUsersService = async (): Promise<tAllUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find({
        relations: {
            contacts: true,
      },
    });

    const usersWithoutPassword = findUsers.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });
    
      return usersWithoutPassword;
    };



