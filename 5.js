
// Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.
function countVowels(str) {
    const vowels = 'aeiouAEIOU'; // Include both lowercase and uppercase vowels
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const inputString = "Hello EveryOne";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`);