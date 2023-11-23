const bcrypt = require("bcrypt");

export const hashedPassword = async function (password: string) {
    try {
        const response = await bcrypt.hash(password, 10);
        console.log("response: ", response);
        return response;
    } catch (err) {
        console.error(err);
    }
};