
function checkString(str) {
    // Check if the string starts with 'H' and ends with 'e'
    if (str.startsWith('H') && str.endsWith('e')) {
        console.log("The string starts with 'H' and ends with 'e'.");
    } else {
        console.log("The string does not start with 'H' and end with 'e'.");
    }
}

// Example usage
const testString = "Hello there";
checkString(testString);