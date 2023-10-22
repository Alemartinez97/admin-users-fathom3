import { IUserModel, User } from "../models/user.interface";
import userRepository from "../repositories/userRepository";
const userService: User = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        const result = await userRepository.getAllUsers();
        return result;
    },

    getUserById: async (userId: number): Promise<IUserModel | null> => {
        const id = Number(userId);
        const result = await userRepository.getUserById(id);
        return result;
    },

    createUser: async (payload: IUserModel): Promise<IUserModel> => {
        const result = await userRepository.createUser(payload);
        return result;
    },

    updateUser: async (userId: number, payload: IUserModel): Promise<IUserModel> => {
        const id = Number(userId);
        const result = await userRepository.updateUser(id, payload);
        return result;
    },

    deleteUser: async (userId: number): Promise<IUserModel> => {
        const id = Number(userId);
        const result = await userRepository.deleteUser(id);
        return result;
    }
}


export default userService;