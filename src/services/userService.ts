const { findUsers, findUserById, addUser, editUser, deleteUserById } = require("../repositories/userRepository");

const getAllUsers = async () => {
    const result = await findUsers();
    return result;
}

const getUserById = async (userId: string) => {
    const result = await findUserById(userId);
    return result;
}

const createUser = async (payload: string) => {
    const result = await addUser(payload);
    return result;
}

const updateUser = async (userId: string, payload: string) => {
    const result = await editUser(userId, payload);
    return result;
}

const deleteUser = async (userId: string) => {
    const result = await deleteUserById(userId);
    return result;
}

export const userService = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}