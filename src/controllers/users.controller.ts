import { Request, Response } from "express";
import { tAllUsersReturn, tUser, tUserReturn, tUserUpdate } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/readAllUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { readUserByIdService } from "../services/users/readUserById.service";


export const createUserController = async (req: Request, res: Response) => {
  const userData: tUser = req.body;

  const newUser: tUserReturn = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users: tAllUsersReturn = await listUsersService();

  return res.json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: tUserUpdate = req.body;
  const userId: number = parseInt(req.params.id);

  const updatedUser: tUserUpdate = await updateUserService(userData, userId);

  return res.json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export const readUserByIdController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  const user = await readUserByIdService(userId);

  return res.status(200).json(user);
};
