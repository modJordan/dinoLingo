import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoLingo from './dinoLingo.js';
//import file name and path for other js files

// Business Logic

// function getDino(dinoLore) {
//   let promise = new Promise(function (resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = `https://dinoipsum.com/api/?format=json&paragraphs=3&words=15`;

//     request.addEventListener("loadend", function () {
//       const response = JSON.parse(this.responseText);
//       if (this.status === 200) {
//         resolve([response, dinoLore]);
//       } else {
//         reject([this, response, dinoLore]);
//       }
//     });
//     request.open("GET", url, true);
//     request.send();
//   });

//   promise.then(function (dinoDataArray) {
//     printElements(dinoDataArray);
//   }, function (errorArray) {
//     printError(errorArray);
//   });
// }

function fetchRandomDinoName() {
  return fetch(`https://dinoipsum.com/api/?format=json&paragraphs=3&words=15`)
    .then(response => response.json())
    .then(data => data[0].trim().toLowerCase());
}

function maskDinosaurName(dinoName, guessedLetters) {
  let maskedName = "";
  for (const letter of dinoName) {
    if (guessedLetters.has(letter)) {
      maskedName += letter;
    } else {
      if (letter.match(/[a-z]/i)) {
        maskedName += "_";
      } else {
        maskedName += letter;
      }
    }
  }
  return maskedName;
}

class PlayGame {

  constructor(dinoName, guessedLetters) {
    this.dinoName = dinoName;
    this.guessedLetters = guessedLetters;
    this.attempts = 0;
  }

  attemptsCounter() {
    const attemptsCatch = document.getElementById("attempts");
    const maskedWordCatch = document.getElementById("maskedWord");
    const guessInput = document.getElementById("guessInput");
    for (let i = 0; i < attempts.length(10); i++) {
      return attempts++;
    }
  }
}

// UI Logic

function displayDino(dinoLore) {
  document.getElementById("dinoContainer").innerText = `this is your ${dinoLore}`;
}

function printError(request, apiResponse, dinoLore) {
  document.querySelector('#errorContainer').innerText = `There was an error accessing the dino data for ${dinoLore}:  ${request.status} ${request.statusText}: ${apiResponse.message}`;
}
// good to remember .forEach 
function printElements(apiResponse) {
  const container = document.querySelector('#dinoContainer');
  apiResponse.forEach((response) => {
    container.innerHTML += `${response[0]}`;    // change this section

  });
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dinoLore = document.querySelector('#keyword').value;
  document.querySelector('#keyword').value = null;
  DinoLingo.dinoLore;
  displayDino(dinoLore);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
