import { Request, Response, NextFunction}  from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureDataIsUniqueOrOwner = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

 
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!user){
        throw new AppError('User not found', 404)
    }


    if(req.body.email && req.body.email !== user.email){
        
        const verifyEmail = await userRepository.findOneBy({
            email: req.body.email
        })
       
        if(verifyEmail){
            throw new AppError("Email already exists", 409)
        }
    }


    return next()

}

export const ensureDataIsUniqueCreate = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

 
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if(req.body.email){
        
        const verifyEmail = await userRepository.findOneBy({
            email: req.body.email
        })
       
        if(verifyEmail){
            throw new AppError("Email already exists", 409)
        }
    }


    return next()

}