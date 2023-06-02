import { Request, Response, NextFunction}  from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

import { AppError } from "../errors";

export const ensureDataIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!user){
        throw new AppError('User not found', 404)
    }


    if(req.body.email && req.body.email!== user.email){
        const verifyEmail = await usersRepository.findOneBy({
            email: req.body.email
        })
       
        if(verifyEmail){
            throw new AppError("Email already exists", 409)
        }
    }


    return next()

}