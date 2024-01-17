const phrases = [
    "H1NTR0X01",
    "H1NTR0X01",
    "H1NTR0X01",
    "STUDY OFFSEC",
];

let index = 0;
let phraseIndex = 0;
let phrase = phrases[phraseIndex];
const typingElement = document.getElementById('typing');
const cursorElement = document.getElementById('cursor');

function type() {
    if (index < phrase.length) {
        typingElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, Math.floor(Math.random() * 150) + 50);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (index >= 0) {
        typingElement.innerHTML = phrase.substring(0, index);
        index--;
        setTimeout(deleteText, Math.floor(Math.random() * 150) + 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        phrase = phrases[phraseIndex];
        setTimeout(type, 500);
    }
}

function blinkCursor() {
    cursorElement.style.opacity = cursorElement.style.opacity === '1' ? '0' : '1';
    setTimeout(blinkCursor, 500);
}

setTimeout(type, 1000);
setTimeout(blinkCursor, 1000 + phrases[0].length * 200);
