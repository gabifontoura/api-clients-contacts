import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReturn } from "../../interfaces/users.interfaces";


export const readUserByIdService = async (userId: number): Promise<tUserReturn | null>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser: User | null = await userRepository.findOneBy({id: userId});

    return findUser

}