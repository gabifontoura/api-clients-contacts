import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserUpdate, tUserReturn } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";



export const updateUserService = async (newUserData: tUserUpdate, idUser: number): Promise<tUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOneBy({
        id: idUser
    })

    const { admin, ...userDataWithoutIdAndAdmin } = newUserData;

    const user = userRepository.create({
        ...oldUserData,
        ...userDataWithoutIdAndAdmin
    })

    await userRepository.save(user)

    const updatedUser:tUserReturn = returnUserSchema.parse(user)

    return updatedUser

}
