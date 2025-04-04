// Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given sttring
// let string = "Hello"
// let split = ""
// for(i=0;i<string.length;i++)
//  {
//     split+="hi";
// }
// console.log(string)

function replaceHelloWithHi(str) {
    let words = str.split(" "); // Split the string into an array of words

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "Hello") {
            words[i] = "Hi"; // Replace "Hello" with "Hi"
        }
    }

    return words.join(" "); // Join the words back into a string
}

// Example usage
const input = "Hello world";
const output = replaceHelloWithHi(input);
console.log(output); // Output: "Hi world! Hi everyone!"



















// function replaceHelloWithHi(str) {
//     let words = str.split(" "); 

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "Hello") {
//             words[i] = "Hi"; 
//         }
//     }

//     return words.join(" "); 
// }

// // Example usage
// const input = "Hello world! Hello everyone!";
// const output = replaceHelloWithHi(input);
// console.log(output); 
