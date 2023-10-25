const bcrypt = require("bcrypt");

export const hashedPassword = async function (password: string) {
    return bcrypt
        .hash(password, 10)
        .then(async (hash: string) => {
            return hash;
        })
        .catch((err: Error) => console.error(err.message))
};