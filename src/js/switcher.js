const body = document.querySelector('.body');
const switcher = document.getElementById('toggle')
const STORAGE_KEY = "saved-theme"


currentTheme()

function currentTheme(){
  const item = localStorage.getItem(STORAGE_KEY)
  const parsedItem = JSON.parse(item)
  if (parsedItem === null) {
    switcher.checked = false
  }
  else{
switcher.checked = true
    onLight() 
  }

}
function savedTheme(){
const data = {}
if(switcher.checked ){
  data.theme = 'light';
} 
localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}


function onDark() {
  body.className = "";
}

function onLight(e){
  if(switcher.checked){
    body.classList.add("body-ligth");
  }
  else{
    onDark()
  }
 
}

switcher.addEventListener('change', onLight)