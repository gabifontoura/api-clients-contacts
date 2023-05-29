import { Request, Response, NextFunction} from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors";

export const ensureContactExistsAndUserHasPermission = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userId: number = Number(res.locals.userId);
    const contactId: number = Number(req.params.id);

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId,
            },
        relations: {
            user: true,
            },
    })

    if(!findContact){
        throw new AppError('Contact not found', 404)
    }

    if (findContact.user.id !== userId) {
        throw new AppError("You don't have persimission", 403)
    }


    return next()

}
