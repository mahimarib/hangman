import Game from './modules/Game.js';
import { wordList } from './modules/wordList.js';

const box = document.querySelector('aside').getBoundingClientRect();

export const filteredWords = wordList.filter(
    word => word.length <= Math.floor(box.width / 45)
);

const game = new Game();

game.start();
