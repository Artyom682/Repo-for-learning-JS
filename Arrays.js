// CHAPTER 3 - ARRAYS


// 11.02.2020


// var myArray = [];
//
// myArray.push('Кот');
// myArray.push('Собака');
// myArray.push('Лама');
// lastAnimal = myArray.pop('Лама');
// firstAnimal = myArray.shift()
// myArray.unshift('Кот')
//
//
// console.log(myArray)



// метод .push - метод добавляет элемент в конец массива
// метод .pop - метод удаляет последний элемент из массива
// метод .unshift - метод добавляет элемент в начало массива
// метод .shift - метод удаляет первый элемент из массива




// метод .concat - объединяет два массива в оидн

// Int = [1, 2, 3, 4, 5]
// Str = ['a', 'b', 'c', 'd']
// Bool = [true, false]
// our = Int.concat(Str, Bool)
//
// console.log(our)



// метод .indexOf - возвращает индекс элемента в массиве


// colors = []
// colors.push('красный');
// colors.push('зеленый');
// colors.push('красный');
// colors.push('синий');
//
// a = colors.indexOf('красный')
//
//
// console.log(a)



// const boringAnimals = []
// boringAnimals.push('Мартышка')
// boringAnimals.push('Кот')
// boringAnimals.push('Рыба')
// boringAnimals.push('Ящерица')
//
//
// const integers = []
// integers.push(123)
// integers.push(456)
// integers.push(679123)
// integers.push(32198312)
//
// // a = boringAnimals.join(' - ')
// a = integers.join(' ')
//
// console.log(a)


/* Задача - друг шел к подруге и записывал по пути элементы (.push), чтобы не потеряться на оратном пути.
На обратном пути он их вычеркивал (.pop).
 */

// const landmarks = []
// landmarks.push ('Мой дом')
// landmarks.push('Дорожка к дому')
// landmarks.push('Мигающий фонарь')
// landmarks.push('Протекающий гидрант')
// landmarks.push('Пожарная станция')
// landmarks.push('Приют для кошек')
// landmarks.push('Моя бывшая школа')
// landmarks.push('Дом подруги')
//
//
//
// landmarks.pop('Дом подруги')
// landmarks.pop('Моя бывшая школа')
// landmarks.pop('Приют для кошек')
// landmarks.pop('Пожарная станция')
// landmarks.pop('Протекающий гидрант')
// landmarks.pop('Мигающий фонарь')
// landmarks.pop('Дорожка к дому')
// landmarks.pop('Мой дом')
//
//
// console.log(landmarks)




// Math.random - вызывает случайное число от 0 до 1

// console.log(Math.random())


// Создали массив. Индексом выступило 2 метода: Math.floor & Math.random

// const randomWords = [];
// randomWords.push('Взрыв')
// randomWords.push('Пещера')
// randomWords.push('Принцесса ')
// randomWords.push('Карандаш')
//
//
// const a = randomWords[Math.floor((Math.random() * 4))]
//
// console.log(a)



// Тут задача такая же, как и в предыдущем примере
// const phrases = []
//
// phrases.push('Звучит неплохо')
// phrases.push('Да, это определенно надо сделать')
// phrases.push('Не думаю, что это хорошая идея')
// phrases.push('Может, не сегодня?')
// phrases.push('Компьютер говорит нет')
//
//
// const randomPhrase = phrases[Math.floor((Math.random() * 5)]
//
// console.log(randomPhrase)




// const randomBodyParts = []
// randomBodyParts.push('глаз')
// randomBodyParts.push('нос')
// randomBodyParts.push('череп')
//
//
// const randomAdjectives = []
// randomAdjectives.push('вонючая')
// randomAdjectives.push('унылая')
// randomAdjectives.push('дурацкая')
//
// const randomWords = []
// randomWords.push('муха')
// randomWords.push('выдра')
// randomWords.push('дубина')
// randomWords.push('мартышка')
// randomWords.push('крыса')
//
//
// const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)]
//
// const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
//
// const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
// // ... * random.Words.length правильнее, т.к. если изменится массив, то нам не придется вручную менять значение
//
//
// // const randomInsult = 'У тебя ' + randomBodyPart + ' словно ' + randomAdjective + ' ' + randomWord + '!!!'
//
// const randomInsult = [' У тебя', randomBodyPart, 'словно', randomAdjective, randomWord + '!!!'].join(' ');
// console.log(randomInsult)










// const randomBodyParts = []
// randomBodyParts.push('рука')
// randomBodyParts.push('лицо')
// randomBodyParts.push('жопа')
// randomBodyParts.push('глаз')
// randomBodyParts.push('нога')
//
// const randomAnimals = []
// randomAnimals.push('лев')
// randomAnimals.push('тигр')
// randomAnimals.push('пума')
//
//
// const randomAdjectives = []
// randomAdjectives.push('странный')
// randomAdjectives.push('дурацкий')
// randomAdjectives.push('непонятный')
//
//
// const randomWords = []
// randomWords.push('дубина')
// randomWords.push('дятел')
// randomWords.push('хрень')
//
// const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
// // console.log(randomBodyPart)
//
// const randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)]
// // console.log(randomAnimal)
//
// const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
// // console.log(randomAdjective)
//
// const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
// console.log(randomWord)

// const randomInsult = 'У тебя ' + randomBodyPart + ' еще более ' + randomAdjective + ',' + ' чем ' + randomBodyPart + ' у '+ randomAnimal

// const randomInsult = ['У тебя', randomBodyPart, 'еще более', randomAdjective + ',', 'чем', randomBodyPart, 'у', randomAnimal].join(' ')

// console.log(randomInsult)




// const a = [3, 2, 1]
//
// const c = [a[0], 'больше,', 'чем', a[1], 'больше' + ',', 'чем', a[2]].join(' ')
//
// console.log(c)


























