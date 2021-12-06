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

// HARD LESSON07
const bindClassHTMLWeekDays = document.querySelector(".week-days");

const currentDay = new Date().toLocaleString("ru-us", {
    weekday: "long",
});

const weekDays = [
    {
        nameDay: "Понедельник",
        dayOff: false,
    },
    {
        nameDay: "Вторник",
        dayOff: false,
    },
    {
        nameDay: "Среда",
        dayOff: false,
    },
    {
        nameDay: "Четверг",
        dayOff: false,
    },
    {
        nameDay: "Пятница",
        dayOff: false,
    },
    {
        nameDay: "Суббота",
        dayOff: true,
    },
    {
        nameDay: "Воскресенье",
        dayOff: true,
    },
];
for (let i = 0; i < weekDays.length; i++) {
    if (weekDays[i].dayOff) {
        bindClassHTMLWeekDays.innerHTML += `<div style="color: red"><i>${weekDays[i].nameDay}</i></div>`;
    } else if (weekDays[i].nameDay.toLowerCase() === currentDay) {
        bindClassHTMLWeekDays.innerHTML += `<div><b>${weekDays[i].nameDay}</b></div>`;
    } else {
        bindClassHTMLWeekDays.innerHTML += `<div>${weekDays[i].nameDay}</div>`;
    }
}
