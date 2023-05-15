export default function PopUp() {
    const element = document.querySelector('.pop-out');
    const box = document.querySelector('.pop-out .container');
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
        element.style.zIndex = '2';
        element.style.opacity = '1';
        element.backdropFilter = 'blur(3px)';
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
    };

    this.hide = () => {
        element.style.zIndex = '-100';
        box.style.transform = 'translateY(-20px)';
        box.style.opacity = '0';
    };

    button.addEventListener('click', () => {
        resetHook && resetHook();
    });
}
