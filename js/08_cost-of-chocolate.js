(function () {
    'use strict';

    let sum = prompt("Сколько у Вас там осталось денег в кошельке?");
    let chocolatePrice = prompt('Какую шоколадку хотите? Назовите цену');

    let chocolateAmount = Math.floor(sum / chocolatePrice);
    let change = sum - (chocolatePrice * chocolateAmount);


    let chocolateWord = 'шоколадок';

    if (chocolateAmount == 1 || chocolateAmount % 10 == 1 && chocolateAmount != 11) {
        chocolateWord = 'шоколадку';
    } else if ((chocolateAmount % 10 == 2 || chocolateAmount % 10 == 3 || chocolateAmount % 10 == 4) && chocolateAmount != 12 && chocolateAmount != 13 && chocolateAmount != 14) {
        chocolateWord = 'шоколадки';
    } else if (chocolateAmount > 1 && chocolateAmount <= 4) {
        chocolateWord = 'шоколадки';
    }


    alert(`Могу Вам купить ${chocolateAmount} ${chocolateWord}. Сдача ${change} грн моя!`)

})()

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.