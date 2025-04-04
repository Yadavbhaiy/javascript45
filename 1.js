// . Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.
function countE(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'e') {
            count++;
        }
    }
    return count;
}

const inputString = "Hello EveryOne";
const eCount = countE(inputString);
console.log(`The letter 'e' appears ${eCount} times in the string.`);