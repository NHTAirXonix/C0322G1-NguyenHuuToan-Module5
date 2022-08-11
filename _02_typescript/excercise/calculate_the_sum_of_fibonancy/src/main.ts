function sumCalculat(amount: number) {
    let sum = fibonancy(amount, 0, 1, 0, 0);
}

function fibonancy(amount: number, number1: number, number2: number, count: number, sum: number) {
    if (count == amount) {
        console.log("-------");
        console.log("Amount is: " + amount)
        console.log("Sum is: " + sum);
    } else {
        let total = sum;
        console.log(" "+ number1 + " ");
        total += number1;
        let next = number2 + number1;
        number1 = number2;
        number2 = next;
        count += 1;
        fibonancy(amount, number1, number2, count, total);
    }
}

let amount = 10;
sumCalculat(amount);
