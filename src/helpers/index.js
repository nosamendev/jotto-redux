
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters = secretWord.split(''); //str to arr
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length; //'has' is for Set, vzimame duljinata na masiva
  };