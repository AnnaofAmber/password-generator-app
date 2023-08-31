

const inputRange = document.querySelector('.input-length')
const lengthValue = document.querySelector('.number-length')
let isRTL = document.documentElement.dir === 'rtl'

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = document.getElementById('character-length')
    } 
    const min = target.min
    const max = target.max
    const val = target.value
    lengthValue.textContent = val
    let percentage = (val - min) * 100 / (max - min)
    if (isRTL) {
      percentage = (max - val) 
    }
    
    target.style.backgroundSize = percentage + '% 100%'
  }
  
  inputRange.addEventListener('input', handleInputChange)
  
  
  // Handle element change, check for dir attribute value change
  function callback(mutationList, observer) {  mutationList.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
        isRTL = mutation.target.dir === 'rtl'
      }
    })
  }
  
  
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {attributes: true})




 /**
   |============================
   |dark theme
   |============================
 */

const body = document.querySelector('.body');
const header = document.querySelector('.app-name');
const sections = {

  password: document.querySelector('.password'),
  form: document.querySelector('.generator-form')

}
const values = Object.values(sections)

const switcher = document.getElementById('toggle')


function onDark() {
  body.className = "";
  header.classList.remove("title-ligth")
  for (const value of values){
    value.classList.remove("section-ligth")
  }
}

function onLigth(e){
  if(e.currentTarget.checked){
    body.classList.add("body-ligth");
    header.classList.add("title-ligth")

    for (const value of values){
      value.classList.add("section-ligth")
    }

  }
  else{
    onDark()
  }
  // body.className = "";
 
}

switcher.addEventListener('change', onLigth)