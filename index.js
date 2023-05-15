import Game from './modules/Game.js';
import { wordList } from './modules/wordList.js';

export const filteredWords = wordList.filter(word => word.length <= 11);

export const blanksContainer = document.querySelector('.blank');

const game = new Game();

game.start();
