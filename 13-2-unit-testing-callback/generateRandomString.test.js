const { generateRandomString } = require('./utils');

describe('generateRandomString', () => {
    // Skenario positif
    test('should generate a random string of specified length', (done) => {
        const length = 10;
        generateRandomString(length, (err, result) => {
            expect(err).toBeNull();
            expect(result).toHaveLength(length);
            done(); // Ini memastikan bahwa Jest menunggu callback selesai
        });
    });

    // Skenario negatif 1: jika panjang bukan number
    test('should return an error if length is not a number', (done) => {
        const invalidLength = '10'; // passing string instead of number
        generateRandomString(invalidLength, (err, result) => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Length must be a number');
            expect(result).toBeUndefined();
            done();
        });
    });

    // Skenario negatif 2: jika panjang kurang dari 1
    test('should return an error if length is less than 1', (done) => {
        const invalidLength = 0;
        generateRandomString(invalidLength, (err, result) => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Length must be greater than 0');
            expect(result).toBeUndefined();
            done();
        });
    });
});
