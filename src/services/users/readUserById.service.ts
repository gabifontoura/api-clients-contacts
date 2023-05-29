import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReturn } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";


export const readUserByIdService = async (userId: number): Promise<tUserReturn>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id: userId});

    const user:tUserReturn = returnUserSchema.parse(findUser)
    
    return user
}