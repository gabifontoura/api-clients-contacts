import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { returnUserSchema } from "../../schemas/users.schema"
import { tUser, tUserReturn } from "../../interfaces/users.interfaces"


export const createUserService = async (userData: tUser): Promise<tUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)
    
    const newUser:tUserReturn = returnUserSchema.parse(user)
    
    return newUser

}