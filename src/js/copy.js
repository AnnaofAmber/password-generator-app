import Notiflix from 'notiflix';


const btnCopy = document.querySelector('.btn-copy')
const copied = document.querySelector('.text-copied')

function onCopy() {
    const password = document.getElementById('text-password')
    password.select()
    password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.textContent)
    copied.textContent = 'copied'
    Notiflix.Notify.success('Password was successfully copied!');
}

btnCopy.addEventListener('click', onCopy)