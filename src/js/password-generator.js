import { strengthCheck } from './strength-check';

const password = document.querySelector('.text-password');
const btnGenerate = document.querySelector('.btn-generate');
const passwordLength = document.querySelector('.number-length');
const copied = document.querySelector('.text-copied');
const strengthLevel = document.querySelector('.strength-level ');
const strength = document.querySelector('.strength-value')

const checkboxes = {
  uppercase: document.getElementById('uppercase'),
  lowercase: document.getElementById('lowercase'),
  numbers: document.getElementById('numbers'),
  symbols: document.getElementById('symbols'),
};

const checkboxesValue = Object.values(checkboxes);

checkboxesValue.forEach(el=>{
    el.addEventListener('change', checkboxesCheck)
})

function checkboxesCheck(){
if(checkboxesValue.some(el=> el.checked)){
    checkboxesValue.forEach(el=>el.classList.remove('input-check-error'))
}}



let charsUppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
let charsLowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let charsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let charsSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

let chars = [];



function onGenerate(e) {
  strengthLevel.classList.remove('strength-level-weak');
  strengthLevel.classList.remove('strength-level-too-weak');
  strengthLevel.classList.remove('strength-level-medium');
  strengthLevel.classList.remove('strength-level-strong');
  let generatedPassword = '';
  copied.textContent = '';
  const selectedLength = Number(passwordLength.textContent);
  e.preventDefault();

 
    if (checkboxesValue.every(el => !el.checked)) {
        
        strengthLevel.classList.add('strength-level-too-weak');
        password.textContent = 'P4$5W0rD!';
        strength.textContent = 'too weak'

        checkboxesValue.forEach(el=>el.classList.add('input-check-error'))
    }
    else {
  
        if (checkboxes.uppercase.checked) {
            if (!chars.includes(charsUppercase)) {
                chars.push(charsUppercase);
            }
        } else {
            chars.splice(chars.indexOf(charsUppercase), 1);
        }
        if (checkboxes.lowercase.checked) {
            if (!chars.includes(charsLowercase)) {
                chars.push(charsLowercase);
            }
        } else {
            if (chars.includes(charsLowercase)) {
                chars.splice(chars.indexOf(charsLowercase), 1);
            }
        }

        if (checkboxes.numbers.checked) {
            if (!chars.includes(charsNumbers)) {
                chars.push(charsNumbers);
            }
        } else {
            if (chars.includes(charsNumbers)) {
                chars.splice(chars.indexOf(charsNumbers), 1);
            }
        }

        if (checkboxes.symbols.checked) {
            if (!chars.includes(charsSymbols)) {
                chars.push(charsSymbols);
            }
        } else {
            if (chars.includes(charsSymbols)) {
                chars.splice(chars.indexOf(charsSymbols), 1);
            }
        }

        const selectedChars = chars.flatMap(el => {
            return el;
        });

        for (let i = 0; i < selectedLength; i++) {
            const selected = [];
            selectedChars.forEach(el => selected.push(el));

            let randomNumber = Math.floor(Math.random() * selected.length);
            generatedPassword += selected.splice(randomNumber, 1);
            password.textContent = generatedPassword;
        }

        strengthCheck();
    }
}

btnGenerate.addEventListener('click', onGenerate);
