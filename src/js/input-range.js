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


