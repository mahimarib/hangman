export default function Keyboard(wordBank) {
    const element = document.querySelector('.keyboard');
    let callback;

    const keyPress = keyID => {
        const keyElement = document.getElementById(keyID);
        wordBank.checkLetter(keyElement.textContent);
        keyElement.classList.add('disabled');
    };

    const clickEvent = event => {
        if (event.target.classList.contains('disabled')) return;
        if (event.target.classList.contains('letter')) {
            keyPress(event.target.id);
            callback && callback();
        }
    };

    this.getElement = () => element;
    this.runOnPress = func => (callback = func);

    this.reset = () => {
        element
            .querySelectorAll('.letter')
            .forEach(e => e.classList.remove('disabled'));
    };

    element.addEventListener('click', clickEvent);
}
