export interface User {
    getAllUsers(): Promise<IUserModel[]>;
    getUserById(userId: number): Promise<IUserModel | null>;
    createUser(payload: IUserModel): Promise<IUserModel>;
    updateUser(userId: number, payload: IUserModel): Promise<IUserModel>;
    deleteUser(userId: number): Promise<IUserModel>;
}


export interface IUserModel {
    name: string | null,
    dni: number,
    email: string,
    surname: string | null,
    phone: number,
    age: number,
}