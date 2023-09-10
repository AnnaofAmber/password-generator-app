const password = document.querySelector('.text-password')
const strength = document.querySelector('.strength-value')
const strengthLevel = document.querySelector('.strength-level ')

const lowercase = /[a-z]+/;
const uppercase = /[A-Z]+/;
const numbers = /[0-9]+/;
const symbols = /[$@#&!%^*()]+/

export function strengthCheck() {

if (password.textContent.length >=12 && password.textContent.match(lowercase) && password.textContent.match(uppercase) && password.textContent.match(numbers) && password.textContent.match(symbols)) {

    strengthLevel.classList.add('strength-level-strong')
    strength.textContent = 'strong'

} else if (password.textContent.length >= 8 && password.textContent.match(lowercase) && password.textContent.match(uppercase) && password.textContent.match(numbers)&& password.textContent.match(symbols)) {

    strengthLevel.classList.add('strength-level-medium')
    strength.textContent = 'medium'
}
else if (password.textContent.length >= 6 && password.textContent.match(uppercase) && password.textContent.match(numbers)&& password.textContent.match(symbols)&&password.textContent.match(lowercase)) {
    strengthLevel.classList.add('strength-level-weak')
    strength.textContent = 'weak'
}
else if(password.textContent.length <6){
    strengthLevel.classList.add('strength-level-too-weak')
    strength.textContent = 'too weak'
}
else {
        strengthLevel.classList.add('strength-level-weak')
    strength.textContent = 'weak'
    }
  

}