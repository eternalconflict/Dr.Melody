document.addEventListener('DOMContentLoaded', function () {
    // {second part of the password is : CAFF}
    const piano = document.querySelector('.piano');
    
    function createKey(keyClass, note) {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key', keyClass);
        keyElement.dataset.note = note;
        piano.appendChild(keyElement);
    }

    function createWhiteKey(note) {
        createKey('white-key', note);
    }

    function generatePiano() {
        const whiteKeys = ['alpha', 'beta', 'gamma', 'yeta', 'zeta', 'keta', 'reta'];

        whiteKeys.forEach(note => createWhiteKey(note));
    }

    generatePiano();

    function playNote(note) {
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
    }

    piano.addEventListener('mousedown', function (event) {
        const keyElement = event.target.closest('.key');
        if (keyElement) {
            playNote(keyElement.dataset.note);
            keyElement.classList.add('active');
        }
    });

    piano.addEventListener('mouseup', function () {
        const activeKeys = document.querySelectorAll('.key.active');
        activeKeys.forEach(key => key.classList.remove('active'));
    });

    piano.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});
