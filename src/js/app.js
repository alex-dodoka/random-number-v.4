const randomNumber = Math.floor(Math.random() * 100),
    arrOfOddNumAfterTheRandomNumber = [],
    arrOfOddNumUpToARandomNumber = [];

if (randomNumber > 40) {
    for (let i = 40; i < randomNumber; i++) {
        if (i % 2 === 0) {
            arrOfOddNumAfterTheRandomNumber.push(i)
        }

    }
}
if (randomNumber < 40) {
    for (let i = 0; i <= 40; i++) {
        if (i % 2 === 0) {
            arrOfOddNumUpToARandomNumber.push(i)
        }
    }
}

document.write(`Случайное число: ${randomNumber}`);
document.write(`<br>Четные числа после 40: ${arrOfOddNumAfterTheRandomNumber}.`);
document.write(`<br>Четные числа перед 40: ${arrOfOddNumUpToARandomNumber}.`);