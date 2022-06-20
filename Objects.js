// const cat = {
//     'legs': 3,
//     'name': 'Гармония',
//     'color': 'Черепаховый'
// }

// const a = cat['name'] - обращаемся к ключу name объекта cat
// const a = cat.name - обращаемся к ключу name объекта cat

// const a = Object.keys(cat)
// console.log(a)

// добавление ключей через (имя объекта)['key'] = value
// const cat = {}
// cat['legs'] = 3;
// cat['name'] = 'Гармония';
// cat['color'] = 'Черепаховый';


// добавление ключей через имя объекта.key = value
// const cat = {}
// cat.legs = 3
// cat.name = 'Гармония'
// cat.color = 'Черепаховый'

// const b = cat.color - обращение к значение объекта через .key
// const b = cat['color'] - обращение к значению объекта через ['key']

// const letters = [
//     {letter: 'a', lowercase: 'a'},
//     {letter: 'b', lowercase: 'b'}
// ]

// const a = letters[0]['lowercase']
// const a = letters[0].lowercase



// const anna = {name: 'Анна', age: 11, luckyNumbers:[2, 4, 6, 8, 16]}
// const dave = {name: 'Дэйв', age: 5, luckyNumbers: [3, 9, 40]}
// const kate = {name: 'Кейт', age: 5, luckyNumbers: [1, 2 ,3]}
//
// const friends = [anna, dave, kate]
// const a = friends[1]
// console.log(a)


// const movies = {
//     'В поисках Немо': {
//         releaseDate: 2003,
//         duration: 1000,
//         actors: ['Альберт Брукс', 'Эллен Дедженерес', 'Александр Гоулд'],
//         format: 'DVD'
//     },
//
//     'Звездный войны: Эпизод VI - Вовзращение джедая': {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ['Марк Хэмилл', 'Харрисон Форд', 'Кэрри Фишер',],
//         format: 'DVDw'
//     },
//
//     'Гарри Поттер': {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ['Дэниел Рэдклифф', 'Эмма Уотсон', ' Руперт Гринт',],
//         format: 'Blu-ray'
//     },
//
// }
//
//
// // const findingNemo = movies['В поисках Немо'].duration
//
// const cars = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ['Оуэн Уилсон', 'Бонни Хант', 'Пол Ньюман'],
//     format: 'Bly-ray'
// }
//
// movies['Тачки'] = cars
//
// const a = Object.keys(movies)
// console.log(a)


// Задача 1 - Как менять счет игроков внутри объекта? (кажется, только через +=)


// const scores = {}
// scores.Ваня = 5
// scores.Олег = 3
// scores.Витя = 2
//
// scores.Ваня += 3
// scores.Олег += 3
// scores.Витя += 3
//
//
// console.log(scores)




// const myCrayObject = []
// myCrayObject.name = 'Нелепый объект'
// myCrayObject['some array'] = [7, 9, {purpose: 'путанница', number: 123}, 3.3 ]
// myCrayObject['random animal'] = 'Банановая акула'
//
// const a = myCrayObject['some array'][2].number
//
// console.log(a)

























