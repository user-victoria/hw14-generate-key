// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(lengthOfKey, charactersOfArray) {
    let result = '';
    for (let i = 0; i < lengthOfKey; i++) {
        result += charactersOfArray.charAt(Math.floor(Math.random() * charactersOfArray.length));
    }
    return result;
}
const key = generateKey(16, characters);
console.log(key);