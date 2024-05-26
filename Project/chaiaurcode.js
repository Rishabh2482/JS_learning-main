// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // const guess=parseInt(document.querySelector('#guessField').value)
//   let submit = document.querySelector('#subt');
//   let previousguess = document.querySelector('.guesses');
//   let count = parseInt(document.querySelector('.lastResult').value);
//   let hint = document.querySelector('.lowOrHi');
//   let random = 0;

//   (() => {
//     random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//   })();
  
//   do {
//     let guess = parseInt(document.querySelector('#guessField').value);
//     let preval;
//     if (guess < random) {
//       hint.innerHTML = 'Number is grater!';
//       if (count != 10) {
//         previousguess.innerHTML = `${preval}`;
//       }
//       count--;
//       count.innerHTML = `${count}`;
//     } else if (guess > random) {
//       hint.innerHTML = 'Number is smaller!';
//       if (count != 10) {
//         previousguess.innerHTML = `${preval}`;
//       }
//       count--;
//       count.innerHTML = `${count}`;
//     } else {
//       hint.innerHTML = 'You got it!';
//       if (count != 10) {
//         previousguess.innerHTML = `${preval}`;
//       }
//       count--;
//       count.innerHTML = `${count}`;
//       break;
//     }

//     preval = guess;
//   }while (guess != random && count >= 0);
// });


const form = document.querySelector('form');
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
const userInput = document.querySelector('#guessField'); // UserInput
const submit = document.querySelector('#subt'); // Selecting the Submit btn
const previousGuess = document.querySelector('.guesses'); // previous guess
const count = document.querySelector('.lastResult'); //remaining chance
const hint = document.querySelector('.lowOrHi'); // hint

const end = document.querySelector('.resultParas');
// Adding the element at the end for to restart the game.
const p = document.createElement('h4');
p.classList.add('startGame');
end.appendChild(p);
p.style.backgroundColor = 'black';
p.style.Color = 'white';
p.style.fontStyle = 'italic';
p.innerText = 'Start Game';
p.style.display = 'none';

// let Guessarray = [];
let wantToPlay = true;

if (wantToPlay === true) {
  form.addEventListener('submit', function (event) {
    submit.style.color = 'white';
    event.preventDefault();
    let guess = parseInt(userInput.value);
    userInput.value = '';
    if (parseInt(count.innerHTML) > 0) validation(guess);
    else {
      display(`You Lost, The Number was ${random}`, 0);
      endGame();
    }
  });
} else {
  startGame();
}

// validate the values
function validation(guess) {
  // console.log(guess);
  if (isNaN(guess) || guess === undefined) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter the Number Grater than 0');
  } else if (guess > 100) {
    alert('Please Enter the Number Less than 100');
  } else {
    // Guessarray.push(guess);
    check(guess);
  }
}

// check the guess
function check(guess) {
  if (guess === random) {
    submit.style.color = 'green';
    previousGuess.innerHTML += `${guess}, `;
    let remaining = parseInt(count.innerText);
    remaining--;
    console.log(`Number of left chance are:${remaining}`);
    display('You Guessed it right!', remaining);
    endGame();
  } else if (guess < random) {
    previousGuess.innerHTML += `${guess}, `;
    let remaining = parseInt(count.innerText);
    remaining--;
    console.log(`Number of left chance are:${remaining}`);
    display(`You'r Number is TOO Small`, remaining);
  } else {
    previousGuess.innerHTML += `${guess}, `;
    let remaining = parseInt(count.innerText);
    remaining--;
    console.log(`Number of left chance are:${remaining}`);
    display(`You'r Number is Too Large`, remaining);
  }
}

// display message
function display(msg, remaining) {
  count.innerHTML = `${remaining}`;
  hint.innerHTML = `${msg}`;
}

// endGame
function endGame() {
  previousGuess.innerHTML = '';
  count.innerHTML = 10;
  wantToPlay = false;
  userInput.setAttribute('disabled', '');
  p.style.display = 'block';
}

// starting the game again.
const start = document.querySelector('.startGame');
start.addEventListener('click', function startGame(event) {
  wantToPlay = true;
  userInput.removeAttribute('disabled');
  submit.style.color = 'white';
  random = Math.floor(Math.random() * 100) + 1;
  console.log(random);
});