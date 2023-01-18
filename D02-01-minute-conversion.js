// 1. Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// Don't forget to return the result.

const minConversion = min => {
    const result = min * 60;
    console.log(`${min} minutes -> ${result} seconds`)
}

console.log(`Minute to second converter`)
console.log(`-------------------------`)
minConversion(5);
minConversion(3);
minConversion(2);
console.log(`-------------------------`)
