//Write a function that takes your age in years and returns your age in minutes.
//year  ----> days ---> hours ---> min

const ageConversion = years => {
    const min = years * 365 * 24 * 60;
    console.log(`${years} years is ${min} minutes`)
}


console.log(`   Age to minute converter`)
console.log(`----------------------------`)
ageConversion(2);
ageConversion(8);
ageConversion(26);
console.log(`----------------------------`)
