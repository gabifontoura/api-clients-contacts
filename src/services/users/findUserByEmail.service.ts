import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReturn } from "../../interfaces/users.interfaces";


export const findUserByEmailService = async (userEmail: string): Promise<tUserReturn>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOneBy({
        email: userEmail
    })
    
    if (!user) {
        throw new Error("Usuário não encontrado");
      }
      const { password, ...userWithoutPassword } = user;

    
    return userWithoutPassword
}