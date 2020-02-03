(function () {
    'use strict';

    let fileSize = 820;

    let fleshSize = prompt("Укажите размер флешки в ГБ");
    let filesAmount = Math.floor((fleshSize * 1024) / fileSize);

    let fileWord = 'файлов';

    if (filesAmount == 1 || filesAmount % 10 == 1 && filesAmount != 11) {
        fileWord = 'файл';
    } else if ((filesAmount % 10 == 2 || filesAmount % 10 == 3 || filesAmount % 10 == 4) && filesAmount != 12 && filesAmount != 13 && filesAmount != 14) {
        fileWord = 'файла';
    } else if (filesAmount > 1 && filesAmount <= 4) {
        fileWord = 'файла';
    }


    if (filesAmount <= 10) {
        alert(`Пфф... пора покупать флешку побольше. На эту поместится всего ${filesAmount} ${fileWord} по ${fileSize} МБ`)
    } else {
        alert(`Отличная флешка. На нее поместится ${filesAmount} ${fileWord} по ${fileSize} МБ`);
    }

})()

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.