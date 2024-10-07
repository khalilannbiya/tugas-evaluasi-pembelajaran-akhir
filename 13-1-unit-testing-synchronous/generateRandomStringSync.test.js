const { generateRandomStringSync } = require('./utils');

describe('generateRandomStringSync', () => {

    // Skenario positif
    test('should return a string of the specified length', () => {
        const length = 10;
        const result = generateRandomStringSync(length);
        expect(result).toHaveLength(length);
        expect(typeof result).toBe('string');
    });

    // Skenario negatif: length bukan number
    test('should throw an error if length is not a number', () => {
        expect(() => generateRandomStringSync('ten')).toThrow('Length must be a number');
    });

    // Skenario negatif: length kurang dari 1
    test('should throw an error if length is less than 1', () => {
        expect(() => generateRandomStringSync(0)).toThrow('Length must be at least 1');
    });

    // Skenario positif: pastikan string terdiri dari karakter yang valid
    test('should return a string containing only valid characters', () => {
        const length = 10;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const result = generateRandomStringSync(length);

        for (const char of result) {
            expect(charset).toContain(char);
        }
    });
});
