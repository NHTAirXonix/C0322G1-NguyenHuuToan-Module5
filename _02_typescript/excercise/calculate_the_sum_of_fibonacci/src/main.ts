// function fibonacci(amount: number, number1: number, number2: number, count: number, sum: number) {
//     if (count == amount) {
//         console.log("-----END-----");
//
//     } else {
//         sum += number1;
//         console.log(" " + number1 + " ");
//         let next = number2 + number1;
//         number1 = number2;
//         number2 = next;
//         if (count == amount - 1) {
//             sum2 = sum;
//         }
//         count += 1;
//         fibonacci(amount, number1, number2, count, sum);
//     }
// }
//
// let amount = 20;
// let sum2 = 0;
// fibonacci(amount, 0, 1, 0, 0);
// console.log("Amount is: " + amount)
// console.log("The Sum is: " + sum2);


function fibonacci(num: number): number {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

let sum = 0;
let amount = 10
let listFibonacci = '';

for (let i = 0; i < amount; i++) {
    listFibonacci += ' ' + fibonacci(i) ;
    sum = sum + fibonacci(i);
}

console.log("List of fibonacci is: " +listFibonacci);
console.log("The sum of " + amount +" fibonacci number is: " + sum);