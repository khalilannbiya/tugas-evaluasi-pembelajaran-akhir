const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm', () => {
    // Skenario positif: menguji pengembalian string dengan panjang yang benar
    test('should return a string of the specified length', async () => {
        const length = 10;
        const result = await generateRandomStringProm(length);
        expect(result).toHaveLength(length);
        expect(typeof result).toBe('string');
    });

    // Skenario negatif: menguji ketika length bukan number
    test('should reject with an error if length is not a number', async () => {
        await expect(generateRandomStringProm('10')).rejects.toThrow('Length must be a number');
    });

    // Skenario negatif: menguji ketika length kurang dari 1
    test('should reject with an error if length is less than 1', async () => {
        await expect(generateRandomStringProm(0)).rejects.toThrow('Length must be greater than 0');
    });

    // Skenario positif: menguji pengembalian string berisi karakter valid
    test('should return a string with only valid characters', async () => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 10;
        const result = await generateRandomStringProm(length);

        for (const char of result) {
            expect(charset).toContain(char);
        }
    });
});
