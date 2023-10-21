const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUsers = () => {
    return prisma.user.findMany();
};

const findUserById = (userId: string) => {
    const id = Number(userId);
    return prisma.user.findUnique({
        where: {
            dni: id,
        },
    })
};

const addUser = (payload: any) => {
    const { name, email, surname, age, phone, dni } = payload;
    return prisma.user.create({
        data: {
            name: name,
            surname: surname,
            Age: age,
            phone: phone,
            dni: dni,
            email: email
        },
    })
};

const editUser = (userId: string, payload: any) => {
    const id = Number(userId);
    const { name, email, surname, age, phone, dni } = payload;
    return prisma.user.update({
        where: {
            dni: id,
        },
        data: {
            name: name,
            surname: surname,
            Age: age,
            phone: phone,
            dni: dni,
            email: email
        },
    })
};

const deleteUserById = (userId: string) => {
    const id = Number(userId);
    return prisma.user.delete({
        where: {
            dni: id,
        },
    })
};

module.exports = { findUsers, addUser, editUser, findUserById, deleteUserById };