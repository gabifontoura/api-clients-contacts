import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tAllUsersReturn } from "../../interfaces/users.interfaces";
import { returnAllUsersSchema } from "../../schemas/users.schema";


export const listUsersService = async (): Promise<tAllUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()


    const users:tAllUsersReturn = returnAllUsersSchema.parse(findUsers)

    return users

}
