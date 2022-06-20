let words = []
words.push('программа')
words.push('макака')
words.push('прекрасный')
words.push('оладушек')
words.push('апельсин')
words.push('кружка')


let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}

let remainingLetters = word.length

let guesses = 10

while (remainingLetters > 0 && guesses > 0) {
    alert(answerArray.join(''))
    let guess = prompt('Угадайте букву или нажмите "Отмена" для выхода из игры');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву')
    } else {
        guesses--
        guess = guess.toLowerCase()
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert (answerArray.join('' ));
if (guesses > 0) {
    alert('Отлично! Было загадано слово ' + word)
} else {
    alert("Очень плохо! Было загадано слово " + word)
}





