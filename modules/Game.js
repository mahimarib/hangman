import Hangman from './Hangman.js';
import Keyboard from './Keyboard.js';
import PopUp from './PopUp.js';
import WordBank from './WordBank.js';

export default function Game() {
    const wordBank = new WordBank();
    const keyboard = new Keyboard(wordBank);
    const popUp = new PopUp();
    const hangman = new Hangman();

    this.start = () => {
        wordBank.whenNoLetter(hangman.revealNext);
        wordBank.start();
        keyboard.runOnPress(onKeyPress);
        popUp.onReset(reset);
    };

    const checkStatus = () => {
        if (hangman.isDead()) {
            popUp.setLoss(wordBank.getWord());
            popUp.appear();
        }
        if (wordBank.isRevealed()) {
            popUp.setWin(wordBank.getWord());
            popUp.appear();
        }
    };

    const onKeyPress = () => {
        checkStatus();
    };

    const reset = () => {
        wordBank.reset();
        keyboard.reset();
        hangman.reset();
        popUp.hide();
    };

    document.getElementById('new-game').addEventListener('click', reset);
}
