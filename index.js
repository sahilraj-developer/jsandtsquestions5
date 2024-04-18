// Write a function called reverseString that takes a string as input and returns the reverse of that string.

// Expected output:

// reverseString("hello"); // Expected output: "olleh"
// reverseString("javascript"); // Expected output: "tpircsavaj"
// reverseString("12345"); // Expected output: "54321"


const reverseString =(string)=>{
    return console.log(string.split('').reverse().join(''))
}
reverseString("12345")