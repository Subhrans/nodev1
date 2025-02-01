import { AppDataSource } from "../config/ormconfig.js";
import {User} from '../models/user.js';

const userRepository = AppDataSource.getRepository(User);

export const findAllUsers = async () => {
    return userRepository.find();
};

export const findUserById = async (id) =>{
    return userRepository.findOneBy({id});
};

export const createUsers = async (userData) =>{
    const user = userRepository.create(userData);
    return await userRepository.save(user);
};

export const deleteUser = async (id) => {
    return await userRepository.delete({id});
}
export const updateUser = async (id, userData) =>{
    await userRepository.update(id, userData);
    return await findUserById(id);
}