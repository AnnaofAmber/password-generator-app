const body = document.querySelector('.body');
const switcher = document.getElementById('toggle')


function onDark() {
  body.className = "";
}

function onLigth(e){
  if(e.currentTarget.checked){
    body.classList.add("body-ligth");
  }
  else{
    onDark()
  }
  // body.className = "";
 
}

switcher.addEventListener('change', onLigth)