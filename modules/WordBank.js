import { filteredWords } from '../index.js';

export default function WordBank() {
    let word;
    let letterElements;
    let onLoss;

    const element = document.querySelector('.word-bank');

    const getRandomWord = () =>
        filteredWords[Math.floor(Math.random() * filteredWords.length)];

    const createBlanks = numOfBlanks => {
        for (let i = 0; i < numOfBlanks; i++) {
            const blank = document.createElement('span');
            blank.classList.add('letter');
            element.appendChild(blank);
        }
    };

    const getIndicesOf = letter => {
        const indices = [];
        for (let i = 0; i < word.length; i++)
            if (word[i] === letter) indices.push(i);
        return indices;
    };

    const placeLetter = (letter, index) => {
        letterElements[index].textContent = letter;
    };

    this.getElement = () => element;
    this.getWord = () => word;
    this.setOnLoss = func => (onLoss = func);

    this.start = () => {
        word = getRandomWord();
        createBlanks(word.length);
        letterElements = document.querySelectorAll('.word-bank .letter');
        console.log({ word, letterElements });
    };

    this.checkLetter = letter => {
        const indices = getIndicesOf(letter);
        indices.forEach(i => placeLetter(letter, i));
        // if theres no letter and onLoss is defined run func
        if (!indices.length && onLoss) onLoss();
    };

    this.isRevealed = () => {
        const letterArray = Array.from(letterElements);
        const currentLetters = letterArray.reduce((sum, letter) => {
            sum = `${sum}${letter.textContent}`;
            return sum;
        }, '');
        console.log(currentLetters);
        return currentLetters === word;
    };

    this.reset = () => {
        letterElements.forEach(element => element.remove());
        this.start();
    };
}
