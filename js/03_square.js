(function () {
    'use strict';

    let unamusedEmoji = String.fromCodePoint(0x1F612)

    if (confirm("Хотите покажу фокус?")) {
        let squareSide = prompt("Укажите длину стороны квадрата и я посчитаю его периметр");
        let squrePerimeter = squareSide * 4
        alert(`Та-дааа! Периметр квадрата: ${squrePerimeter}`)
    } else {
        alert(`Ну и ладно... ${unamusedEmoji}`)
    }

})()

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.