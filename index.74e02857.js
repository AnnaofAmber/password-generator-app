!function(){let e=document.querySelector(".input-length"),t=document.querySelector(".number-length"),n="rtl"===document.documentElement.dir;e.addEventListener("input",function(e){let r=e.target;"range"!==e.target.type&&(r=document.getElementById("character-length"));let c=r.min,u=r.max,o=r.value;t.textContent=o;let d=(o-c)*100/(u-c);n&&(d=u-o),r.style.backgroundSize=d+"% 100%"});let r=new MutationObserver(// Handle element change, check for dir attribute value change
function(e,t){e.forEach(function(e){"attributes"===e.type&&"dir"===e.attributeName&&(n="rtl"===e.target.dir)})});r.observe(document.documentElement,{attributes:!0});/**
   |============================
   |dark theme
   |============================
 */let c=document.querySelector(".body"),u=document.getElementById("toggle");u.addEventListener("change",function(e){e.currentTarget.checked?c.classList.add("body-ligth"):c.className="";// body.className = "";
})}();//# sourceMappingURL=index.74e02857.js.map

//# sourceMappingURL=index.74e02857.js.map
