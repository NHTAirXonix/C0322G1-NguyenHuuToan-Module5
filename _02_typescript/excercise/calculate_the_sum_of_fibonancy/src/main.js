function sumCalculat(amount) {
    var sum = fibonancy(amount, 0, 1, 0, 0);
    return sum;
}
function fibonancy(amount, number1, number2, count, sum) {
    if (count == amount) {
        console.log("-------");
        console.log("Amount is: " + amount);
        console.log("Sum is: " + sum);
        return sum;
    }
    else {
        var total = sum;
        console.log(" " + number1 + " ");
        total += number1;
        var next = number2 + number1;
        number1 = number2;
        number2 = next;
        count += 1;
        fibonancy(amount, number1, number2, count, total);
    }
}
var amount = 10;
var result = sumCalculat(amount);
