document.addEventListener('DOMContentLoaded', function () {
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
        const whiteKeys = ['F', 'D', 'E', 'A', 'G', 'B', 'C'];

        whiteKeys.forEach(note => createWhiteKey(note));
    }

    generatePiano();

    function playNote(note) {
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
    }

    document.addEventListener('keydown', function (event) {
        const keyElement = document.querySelector(`.key[data-note="${event.key.toUpperCase()}"]`);
        if (keyElement) {
            playNote(keyElement.dataset.note);
            keyElement.classList.add('active');
            //    {second part of password: CAFF}
        }
    });

    document.addEventListener('keyup', function (event) {
        const keyElement = document.querySelector(`.key[data-note="${event.key.toUpperCase()}"]`);
        if (keyElement) {
            keyElement.classList.remove('active');
        }
    });

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
