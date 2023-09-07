const e=document.querySelector(".input-length"),t=document.querySelector(".number-length");let n="rtl"===document.documentElement.dir;e.addEventListener("input",function(e){let r=e.target;"range"!==e.target.type&&(r=document.getElementById("character-length"));let c=r.min,o=r.max,u=r.value;t.textContent=u;let d=(u-c)*100/(o-c);n&&(d=o-u),r.style.backgroundSize=d+"% 100%"});const r=new MutationObserver(// Handle element change, check for dir attribute value change
function(e,t){e.forEach(function(e){"attributes"===e.type&&"dir"===e.attributeName&&(n="rtl"===e.target.dir)})});r.observe(document.documentElement,{attributes:!0});/**
   |============================
   |dark theme
   |============================
 */const c=document.querySelector(".body"),o=document.getElementById("toggle");o.addEventListener("change",function(e){e.currentTarget.checked?c.classList.add("body-ligth"):c.className="";// body.className = "";
});//# sourceMappingURL=index.26ff03d9.js.map

//# sourceMappingURL=index.26ff03d9.js.map
