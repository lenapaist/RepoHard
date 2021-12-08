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

// HARD LESSON03/04
// let lang = prompt("Выберите язык:"),
//     ru = "Пн, Вт, Ср, Чт, Пт, Сб, Вс.",
//     en = "Mon, Tue, Wed, Thu, Fri, Sat, Sun.",
//     langArray = [],
//     namePerson = prompt("Введите имя"),
//     enterString = prompt("Введите произвольные символы");

// if (lang === "ru") {
//     console.log(ru);
// } else {
//     console.log(en);
// }

// switch (lang) {
//     case "ru":
//         console.log(ru);
//         break;
//     case "en":
//         console.log(en);
//         break;
// }

// langArray["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
// langArray["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// function checkStringAndLength(str) {
//     if (typeof str !== "string") {
//         return "Не строка!";
//     } else if (str.length > 30) {
//         return str.substring(0, 30) + "...";
//     } else {
//         return str.trim();
//     }
// }

// namePerson === "Артем"
//     ? console.log("Директор")
//     : namePerson === "Александр"
//     ? console.log("Преподаватель")
//     : console.log("Студент");

// console.log(checkStringAndLength(enterString));

// console.log(langArray[lang].join());

// HARD LESSON05
// Task 1
// let arr = [
//     "234234",
//     "12323435",
//     "4567567",
//     "45676756",
//     "56543457",
//     "976534567",
//     "25754865",
// ];

// function getNumbersStartingWithTheSpecified(num1, num2) {
//     let result = arr.filter(function (item) {
//         if (
//             Number(item.split("")[0]) === num1 ||
//             Number(item.split("")[0]) === num2
//         ) {
//             return Number(item);
//         }
//     });
//     return result;
// }
// console.log(getNumbersStartingWithTheSpecified(2, 4));
// // Task 2
// firstСycle: for (let i = 2; i <= 101; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue firstСycle;
//     }
//     console.log(i);
// }
// HARD LESSON09
const dateTypeA = document.querySelector(".date-type-a"),
    dateTypeB = document.querySelector(".date-type-b"),
    wordsHours = ["час", "часов", "часа"],
    wordsMinutes = ["минута", "минут", "минуты"],
    wordsSeconds = ["секунда", "секунд", "секунды"];

function declensions(int, words) {
    int = Math.abs(int) % 100;
    let int1 = int % 10;
    if (int > 10 && int < 20) {
        return words[1];
    }
    if (int1 > 1 && int1 < 5) {
        return words[2];
    }
    if (int1 == 1) {
        return words[0];
    }
    return words[1];
}

function numberFormat(int) {
    if (int < 10) {
        return `0${int}`;
    }
    return int;
}

function getDateTypeA() {
    let currentDate = new Date(),
        generalInfoDateTypeA = currentDate.toLocaleDateString("ru-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
        }),
        year = currentDate.getFullYear(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
    dateTypeA.innerHTML = `Сегодня ${generalInfoDateTypeA} ${year} года ${hours} ${declensions(
        hours,
        wordsHours,
    )} ${minutes} ${declensions(
        minutes,
        wordsMinutes,
    )} ${seconds} ${declensions(seconds, wordsSeconds)}`;
}

function getDateTypeB() {
    let currentDate = new Date(),
        year = currentDate.getFullYear(),
        month = currentDate.getMonth(),
        day = currentDate.getDay(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    dateTypeB.innerHTML = `${numberFormat(day)}.${numberFormat(
        month,
    )}.${numberFormat(year)} - ${numberFormat(hours)}:${numberFormat(
        minutes,
    )}:${numberFormat(seconds)}`;
}
setInterval(function () {
    getDateTypeA();
    getDateTypeB();
}, 1000);
