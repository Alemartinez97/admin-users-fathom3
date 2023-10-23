// import { IUserModel, User } from "../models/user.interface";
// import userRepository from "../repositories/userRepository";
// const userService: User = {
//     getAllUsers: async (): Promise<IUserModel[]> => {
//         const result = await userRepository.getAllUsers();
//         return result;
//     },

//     getUserById: async (userId: number): Promise<IUserModel | null> => {
//         const id = Number(userId);
//         const result = await userRepository.getUserById(id);
//         return result;
//     },

//     createUser: async (payload: IUserModel): Promise<IUserModel> => {
//         const result = await userRepository.createUser(payload);
//         return result;
//     },

//     updateUser: async (userId: number, payload: IUserModel): Promise<IUserModel> => {
//         const id = Number(userId);
//         const result = await userRepository.updateUser(id, payload);
//         return result;
//     },

//     deleteUser: async (userId: number): Promise<IUserModel> => {
//         const id = Number(userId);
//         const result = await userRepository.deleteUser(id);
//         return result;
//     }
// }


// export default userService;
import { IUserModel, User } from "../models/user.interface";
import userRepository from "../repositories/userRepository";

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
