(function () {
    'use strict'

    let userName = prompt("Как Вас зовут?");
    let userYear = prompt("В каком году Вы родились?");

    const CURRENTYEAR = 2020;
    let userAge = CURRENTYEAR - userYear;
    let ageWord = 'лет';

    if (userAge == 1 || userAge % 10 == 1 && userAge != 11) {
        ageWord = 'год';
    } else if ((userAge % 10 == 2 || userAge % 10 == 3 || userAge % 10 == 4) && userAge != 12 && userAge != 13 && userAge != 14) {
        ageWord = 'года';
    } else if (userAge > 1 && userAge <= 4) {
        ageWord = 'года';
    }


    alert(`Привет, ${userName}. Вам ${userAge} ${ageWord}.`)

})()



/*
1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
*/