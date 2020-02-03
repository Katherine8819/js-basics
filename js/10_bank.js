(function () {
    'use strict';

    let sum = Number(prompt("Укажите сумму вклада"));
    let months = Number(prompt("На какое количество месяцев?"))
    let percent = Number(prompt("Под какой годовой процент?"))

    let newSum = sum;

    if (months >= 12) {

        let fullYears = Math.floor(months / 12);
        let restMonths = months % 12;

        for (let i = 1; i <= fullYears; i++) {
            newSum += (newSum * percent / 100);
        }
        for (let j = 1; j <= restMonths; j++) {
            newSum += (newSum * (percent / 12) / 100);
        }

    } else {
        newSum = sum;
        for (let a = 1; a <= months; a++) {
            newSum += (newSum * (percent / 12) / 100);

        }
    }

    let profit = newSum - sum;

    alert(`Вам будет начислено ${profit.toFixed(2)} грн`);
})()


// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.