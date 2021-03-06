'use strict';

const LETTER_VALUES = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};

/** creates an array with the total values of each word */

// function wordScores(word) {
//     let scores = [];
    
//     for (let char of word) {
//       scores.push(getTotal(char));
//     }
  
//     return scores;
//   }
  
/** get the total of each word by adding up value of letters */
  
function wordScores(word) {
    let total = 0;
    let letters = word.split('');

    if (includesWeirdChar(word)) {return "Please do not use spaces or non-letter characters"}
    
    letters.forEach(letter => total += LETTER_VALUES[letter.toUpperCase()]);
    
    return total;
}

function totalNameScore(first, last) {
    if (includesWeirdChar(first) || includesWeirdChar(last)) {return "One of your inputs is invalid!"};

    return wordScores(first) + wordScores(last);
    
}

/** checks a word for strange characters and returns true or false */

function includesWeirdChar(word) {
    for (let letter of word) {
        if (!LETTER_VALUES[letter.toUpperCase()]) {
            return true;
        } 
    }
    return false;
}

/** when the form submits, calculate total of each name and append to page */

function wordAsNumbers(word) {
    if (includesWeirdChar(word)) {return "Invalid!"}
    
    let numbers = [];
    word.split('').forEach(char => numbers.push(LETTER_VALUES[char.toUpperCase()]));

    return numbers;
}

function formSubmit(evt) {
    evt.preventDefault();
    
    let container = document.getElementById("container");
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    let returnMsg = document.createElement("div");
    returnMsg.setAttribute("id", "return-message");
    container.append(returnMsg);
    
    returnMsg.innerText = `${firstName}: ${wordAsNumbers(firstName)} = ${wordScores(firstName)} | ${lastName}: ${wordAsNumbers(lastName)} = ${wordScores(lastName)} | Total: ${totalNameScore(firstName, lastName)}`;
    
    form.reset();
}


let form = document.getElementById("names-form");
form.addEventListener("submit", formSubmit);
  