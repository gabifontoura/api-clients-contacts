import { Request, Response } from 'express'
import { tLogin } from '../interfaces/login.interfaces'
import { createLoginService } from '../services/login/login.service'

export const createLoginController = async (req: Request, res: Response): Promise<Response> => {

    const loginData: tLogin = req.body

    const token: string = await createLoginService(loginData)

    return res.status(200).json({
        token: token
    })

}