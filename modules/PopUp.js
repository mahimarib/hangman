export default function PopUp() {
    const element = document.querySelector('.pop-out');
    const title = document.querySelector('.pop-out h1');
    const p = document.querySelector('.pop-out p');
    const button = document.querySelector('.pop-out button');

    let resetHook;

    this.setResetHook = func => (resetHook = func);

    this.setWin = word => {
        title.textContent = 'You Win!';
        p.innerHTML = `You have successfully guessed: <strong>${word}</strong>`;
        button.textContent = 'play again';
    };

    this.setLoss = word => {
        title.textContent = 'You Lose.';
        p.innerHTML = `The word was: <strong>${word}</strong>`;
        button.textContent = 'try again';
    };

    this.appear = () => {
        element.classList.add('appear');
    };

    this.hide = () => {
        element.classList.remove('appear');
    };

    button.addEventListener('click', () => {
        resetHook && resetHook();
    });
}
