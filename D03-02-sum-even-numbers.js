//Write a function that takes in an array of numbers and returns the sum of all even numbers.

testArr = [1, 3, 4, 5, 6, 7]

const evenSum = arr => {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            n += arr[i];
        } 
    }
    return n;
}

const sum = evenSum(testArr);
console.log(sum);
