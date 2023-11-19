import { IUserModel, User } from "../models/user.interface";
import userRepository from "../repositories/userRepository";
import { hashedPassword } from "../utils/hashedPassword";

const userService: User = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        try {
            const result = await userRepository.getAllUsers();
            return result;
        } catch (error) {
            console.error(`Error en getAllUsers: ${error}`);
            throw error;
        }
    },

    getUserById: async (userId: number): Promise<IUserModel | null> => {
        try {
            const id = Number(userId);
            const result = await userRepository.getUserById(id);
            return result;
        } catch (error) {
            console.error(`Error en getUserById: ${error}`);
            throw error;
        }
    },

    createUser: async (payload: IUserModel): Promise<IUserModel> => {
        try {
            if (typeof (payload.age) === 'string') payload.age = Number(payload.age);
            if (typeof (payload.dni) === 'string') payload.dni = Number(payload.dni);
            if (typeof (payload.phone) === 'string') payload.phone = Number(payload.phone);
            if (payload.password) {
                payload.password = await hashedPassword(payload.password);
            }
            const result = await userRepository.createUser(payload);
            return result;
        } catch (error) {
            console.error(`Error en createUser: ${error}`);
            throw error;
        }
    },

    updateUser: async (userId: number, payload: IUserModel): Promise<IUserModel> => {
        try {
            const id = Number(userId);
            if (typeof (payload.age) === 'string') payload.age = Number(payload.age);
            if (typeof (payload.dni) === 'string') payload.dni = Number(payload.dni);
            if (typeof (payload.phone) === 'string') payload.phone = Number(payload.phone);
            const user = await userService.getUserByEmail(payload.email);
            if (payload.password !== user?.password) {
                payload.password = await hashedPassword(payload.password);
            }
            const result = await userRepository.updateUser(id, payload);
            return result;
        } catch (error) {
            console.error(`Error en updateUser: ${error}`);
            throw error;
        }
    },

    deleteUser: async (userId: number): Promise<IUserModel> => {
        try {
            const id = Number(userId);
            const result = await userRepository.deleteUser(id);
            return result;
        } catch (error) {
            console.error(`Error en deleteUser: ${error}`);
            throw error;
        }
    },

    getUserByEmail: async (email: string): Promise<IUserModel | null> => {
        try {
            const result = await userRepository.getUserByEmail(email);
            return result;
        } catch (error) {
            console.error(`Error en getUserById: ${error}`);
            throw error;
        }
    }
}

export default userService;
