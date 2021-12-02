// HARD LESSON02
// let num = 266219;
// let numbers = num.toString().split("");
// let multiplication = numbers
//     .map(function (item) {
//         return Number(item);
//     })
//     .reduce(function (acc, value) {
//         return acc * value;
//     });
// let degree = multiplication ** 3;
// let finish = degree.toString().slice(0, 2);

// console.log(numbers);
// console.log(degree);
// console.log(finish);

// HARD LESSON03
let lang = prompt("Выберите язык:"),
    ru = "Пн, Вт, Ср, Чт, Пт, Сб, Вс.",
    en = "Mon, Tue, Wed, Thu, Fri, Sat, Sun.",
    langArray = [],
    namePerson = prompt("Введите имя"),
    enterString = prompt("Введите произвольные символы");

if (lang === "ru") {
    console.log(ru);
} else {
    console.log(en);
}

switch (lang) {
    case "ru":
        console.log(ru);
        break;
    case "en":
        console.log(en);
        break;
}

langArray["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
langArray["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function checkStringAndLength(str) {
    if (typeof str !== "string") {
        return "Не строка!";
    } else if (str.length > 30) {
        return str.substring(0, 30) + "...";
    } else {
        return str.trim();
    }
}

namePerson === "Артем"
    ? console.log("Директор")
    : namePerson === "Александр"
    ? console.log("Преподаватель")
    : console.log("Студент");

console.log(checkStringAndLength(enterString));

console.log(langArray[lang].join());
