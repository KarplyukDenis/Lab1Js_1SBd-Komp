function reverseNumber(number) {
    let numString = number.toString();
    let reversedString = numString.split('').reverse().join('');
    let reversedNumber = parseInt(reversedString);
    return reversedNumber;
}

let userInput = prompt("Введіть трицифрове натуральне число:");

let number = parseInt(userInput);
if (!isNaN(number) && number >= 100 && number <= 999) {
    let reversedNumber = reverseNumber(number);
    console.log("Зворотнє число:", reversedNumber);
} else {
    console.log("Введено неправильне значення. Будь ласка, введіть трицифрове натуральне число.");
}