import { IUserModel, User } from "../models/user.interface";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const userRepository: User = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        return await prisma.user.findMany();
    },

    getUserById: async (id: number): Promise<IUserModel | null> => {
        return prisma.user.findUnique({
            where: {
                dni: id,
            },
        })
    },

    createUser: async (payload: IUserModel): Promise<IUserModel> => {
        return await prisma.user.create({
            data: payload,
        })
    },

    updateUser: async (id: number, payload: IUserModel): Promise<IUserModel> => {
        return prisma.user.update({
            where: {
                dni: id,
            },
            data: payload,
        })
    },

    deleteUser: async (id: number): Promise<IUserModel> => {
        return prisma.user.delete({
            where: {
                dni: id,
            },
        })
    }
}


export default userRepository;