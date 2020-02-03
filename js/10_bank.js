(function () {
    'use strict';

    let sum = prompt("Укажите сумму вклада");
    let months = prompt("На какое количество месяцев?")
    let percent = prompt("Под какой годовой процент?")

    let finalProfit = Math.round(sum * (percent / months) / 100 * months);

    alert(`Вам будет начислено ${finalProfit} грн`);


})()


// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.