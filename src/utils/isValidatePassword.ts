const bcrypt = require("bcrypt");

export const isValidPassword = async function (hash: string, password: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(hash, password);
        return match;
    } catch (error) {
        // Manejar errores de bcrypt aquí
        console.error('Error al comparar contraseñas:', error);
        throw error; // Puedes manejar el error de otra manera o simplemente relanzarlo
    }
};

