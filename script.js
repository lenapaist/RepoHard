let num = 266219;
let numbers = num.toString().split("");
let multiplication = numbers
    .map(function (item) {
        return Number(item);
    })
    .reduce(function (acc, value) {
        return acc * value;
    });
let degree = multiplication ** 3;
let finish = degree.toString().slice(0, 2);

console.log(numbers);
console.log(degree);
console.log(finish);
