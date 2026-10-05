// Task 1: Initialize the Array
let helloArray = new Array(7);
helloArray.fill("Hello");

console.log(helloArray);


// Task 2: Update Part of the Array
helloArray.fill("Hi", 2, 5);

console.log(helloArray);


// Task 3: Populate the Array with a for Loop
let numberArray = new Array(5);

for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = i * 10;
}

console.log(numberArray);
