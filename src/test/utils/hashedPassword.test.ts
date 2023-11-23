const { hashedPassword } = require("../../utils/hashedPassword");
const bcrypt = require("bcrypt");
jest.mock('bcrypt');

describe('comparePasswords', () => {
    it('should return true for matching passwords', async () => {
        const inputPassword = 'password123';
        const hashedPasswordValue = '$2b$10$Zv3gjxStbKqKQVzmtLk1j.L8FtGK6Cj8Z1p5SYA3YRrmzi1DKL3J6';

        bcrypt.hash.mockResolvedValue(hashedPasswordValue);

        const result = await hashedPassword(inputPassword);
        console.log("result: ",result)
        expect(result).toBe(hashedPasswordValue);
    });
})