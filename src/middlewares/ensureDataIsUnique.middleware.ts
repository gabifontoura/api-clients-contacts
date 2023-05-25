import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'

import { AppError } from '../errors'

export const ensureDataIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    if(req.body.email){
        const verifyEmail = await usersRepository.findOneBy({
            email: req.body.email
        })
       
        if(verifyEmail){
            throw new AppError("Email already exists", 409)
        }
    }

    
    if(req.body.telephone){
        const verifyTelephone = await usersRepository.findOneBy({
            telephone: req.body.telephone
        })
       
        if(verifyTelephone){
            throw new AppError("Telephone already exists", 409)
        }
    }

    return next()

}