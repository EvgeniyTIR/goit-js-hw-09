function e(e,t){const o=Math.random()>.3;return new Promise(((n,s)=>{setTimeout((()=>{const l={position:e,delay:t};o?n(l):s(l)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:{valueAsNumber:o=0},step:{valueAsNumber:n=0},amount:{valueAsNumber:s=0}}=t.currentTarget;let l=o;for(let t=1;t<=s;t++)e(t,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),l+=n}));
//# sourceMappingURL=03-promises.ea107232.js.map