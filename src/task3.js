function countFourDigitNumbersWithSumK(k) {
    let count = 0;
    for (let i = 1000; i <= 9999; i++) {
        let sumOfDigits = i.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (sumOfDigits === k) {
            count++;
        }
    }
    return count;
}

let k = parseInt(prompt("Введіть суму цифр k:"));
if (!isNaN(k)) {
    let result = countFourDigitNumbersWithSumK(k);
    console.log(`Кількість чотиризначних чисел, сума цифр яких дорівнює ${k}, становить: ${result}`);
} else {
    console.log("Введено некоректне значення. Будь ласка, введіть число.");
}
