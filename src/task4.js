function primeFactors(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    while (n % 3 === 0) {
        factors.push(3);
        n /= 3;
    }
    for (let i = 5; i * i <= n; i += 6) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
        while (n % (i + 2) === 0) {
            factors.push(i + 2);
            n /= (i + 2);
        }
    }
    if (n > 3) {
        factors.push(n);
    }
    return factors;
}

let userInput = prompt("Введіть натуральне число:");
let number = parseInt(userInput);

if (!isNaN(number) && number > 1 && Number.isInteger(number)) {
    console.log(`Прості множники числа ${number}:`, primeFactors(number));
} else {
    console.log("Введено некоректне число.");
}