import { IUserModel, User } from "../models/user.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userRepository: User = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        return await prisma.user.findMany({ include: { appointments: true }, });
    },

    getUserById: async (id: number): Promise<IUserModel | null> => {
        return prisma.user.findUnique({
            where: {
                dni: id,
            },
            include: { appointments: true }
        })
    },

    getUserByEmail: async (email: string): Promise<IUserModel | null> => {
        return prisma.user.findUnique({
            where: {
                email: email,
            },
        })
    },

    createUser: async (payload: IUserModel): Promise<IUserModel> => {
        return await prisma.user.create({
            data: payload,
        })
    },

    updateUser: async (id: number, payload: IUserModel): Promise<IUserModel> => {
        payload.appointments.update = await payload.appointments?.update?.map(({ where, data }: any) => ({
            where,
            data,
        })) || [];
        return prisma.user.update({
            where: {
                dni: id,
            },
            data: payload,
        })
    },

    deleteUser: async (id: number): Promise<IUserModel> => {
        await prisma.appointment.deleteMany({
            where: { userId: id }
        });
        return prisma.user.delete({
            where: {
                dni: id,
            }
        })
    }
}


export default userRepository;