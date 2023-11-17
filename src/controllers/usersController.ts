import  userService  from "../services/userService";

export const getAllUsers = async (req: any, res: any) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener la lista de usuarios" });
    }
}

export const getUserById = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "Se requiere un ID de usuario válido." });
        }

        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }

        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al buscar el usuario" });
    }
}

export const createUser = async (req: any, res: any) => {
    try {
        const payload = req.body;

        if (!payload || Object.keys(payload).length === 0) {
            return res.status(400).send({ error: "Se requiere un cuerpo de solicitud válido." });
        }

        const users = await userService.createUser(payload);
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al crear el usuario" });
    }
}

export const updateUser = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        if (!id) {
            return res.status(400).send({ error: "Se requiere un ID de usuario válido." });
        }

        if (!payload || Object.keys(payload).length === 0) {
            return res.status(400).send({ error: "Se requiere un cuerpo de solicitud válido." });
        }

        const users = await userService.updateUser(id, payload);

        if (!users) {
            return res.status(404).send({ error: "Usuario no encontrado." });
        }

        res.status(201).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al actualizar el usuario" });
    }
}

export const deleteUser = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ error: "Se requiere un ID de usuario válido." });
        }

        const users = await userService.deleteUser(id);

        if (!users) {
            return res.status(404).send({ error: "Usuario no encontrado." });
        }

        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al eliminar el usuario" });
    }
}