const words = [
    "apple","banana","orange","javascript","developer","computer","saffron","portfolio","project",
    "laptop","keyboard","monitor","internet","coding","python","react","bootstrap","tailwind","scramble",
    "challenge","frontend","backend","fullstack","mobile","android","website","browser","welcome","scramble",
    "friends","weekend","optimistic","brave","savage","consistency","perseverance"
];

let current = '';
let scrambled = '';
let score = 0;

const scrambledEl = document.getElementById('scrambled');
const guessEl = document.getElementById('guess');
const checkBtn = document.getElementById('check');
const nextBtn = document.getElementById('next');
const scoreEl = document.getElementById('score');
const msg = document.getElementById('msg');

function shuffleWord(w){
    const arr = w.split('');
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }

function load(){
    guessEl.value = '';
    msg.textContent = '';
    msg.className = "";

    const idx = Math.floor(Math.random() * words.length);
    current = words[idx];
    scrambled = shuffleWord(current);

    if(scrambled === current && current.length > 1){
      scrambled = shuffleWord(current);
    }

    scrambledEl.textContent = scrambled.split('').join(' ');
  }

  checkBtn.addEventListener('click', () => {
    const guess = guessEl.value.trim().toLowerCase();

    if(!guess){
      msg.textContent = "Type your guess!";
      msg.className = "text-warning";
      return;
    }

    if(guess === current){
      msg.textContent = "Correct! 🎉";
      msg.className = "text-success fw-bold";
      score++;
      scoreEl.textContent = score;
    } else {
      msg.textContent = `Wrong! Correct word: ${current}`;
      msg.className = "text-danger fw-bold";
    }
  });

  nextBtn.addEventListener('click', () => {
    load();
  });

window.addEventListener('load', load);