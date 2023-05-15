export default function Hangman() {
    const bodyParts = [
        'head',
        'torso',
        'left-arm',
        'right-arm',
        'left-leg',
        'right-leg',
    ];

    let index = 0;

    this.revealNext = () => {
        if (index >= bodyParts.length) index = bodyParts.length - 1;
        document.getElementById(bodyParts[index++]).classList.remove('hidden');
    };

    this.reset = () => {
        bodyParts.forEach(part => {
            document.getElementById(part).classList.add('hidden');
        });
        index = 0;
    };

    this.isDead = () => {
        return !document
            .getElementById(bodyParts[bodyParts.length - 1])
            .classList.contains('hidden');
    };
}
