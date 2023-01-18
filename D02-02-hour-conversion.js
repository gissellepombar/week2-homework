// 2. Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.

const hourConversion = hour => {
    const result = hour * 60 * 60;
    console.log(`${hour} minutes -> ${result} seconds`);
};

console.log(` Hour to second converter`);
console.log(`----------------------------`);
hourConversion(49);
hourConversion(10);
hourConversion(24);
console.log(`----------------------------`);
