const bcrypt = require("bcrypt");

export const isValidPassword = async function (hash: string, password: string) {
    return bcrypt
        .compare(password, hash)
        .then((res: string) => {
            return res;
        }) 
        .catch((err: Error) => console.error(err.message))
};

