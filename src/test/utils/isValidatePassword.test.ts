const { isValidPassword } = require("../../utils/isValidatePassword");
const bcrypt = require("bcrypt");
jest.mock('bcrypt');

describe('comparePasswords', () => {
    it('should return true for matching passwords', async () => {
        const inputPassword = 'password123';
        const hashedPassword = '$2b$10$Zv3gjxStbKqKQVzmtLk1j.L8FtGK6Cj8Z1p5SYA3YRrmzi1DKL3J6';

        bcrypt.compare.mockResolvedValue(true);

        const result = await isValidPassword(inputPassword, hashedPassword);

        expect(result).toBe(true);
    });
})