const { isValidPassword } = require("../../utils/isValidatePassword");
const bcrypt = require("bcrypt");
jest.mock('bcrypt');
// describe("isValidPassword", async () => {
//     test("returns true if number is even", () => {
//         expect( isValidPassword("$2b$10$6CZG5iQr87mURdntqvqBGu2ivrte6eEktAWb4xb5oKvO7xXNx6KAS", "1312ed3123xdei")).toBe(true);
//     });
// });

describe('comparePasswords', () => {
    it('should return true for matching passwords', async () => {
        const inputPassword = 'password123';
        const hashedPassword = '$2b$10$Zv3gjxStbKqKQVzmtLk1j.L8FtGK6Cj8Z1p5SYA3YRrmzi1DKL3J6';

        bcrypt.compare.mockResolvedValue(true);

        const result = await isValidPassword(hashedPassword, inputPassword);

        expect(result).toBe(true);
        expect(bcrypt.compare).toHaveBeenCalledWith(hashedPassword, inputPassword);
    });
})