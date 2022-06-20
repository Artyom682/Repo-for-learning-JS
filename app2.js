outer:for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`);
        /*if (input == null || input == '') {
            break outer
        }*/

        if (!input) {
            continue outer // continue outer == break - в первом случае мы переходим к итерации внешнего цикла, во втором
            //прерываем внутренний и также переходим к внешнему

        }

    }
}


// внутренний цикл for с меткой outer и выходом из внешнего цикла
