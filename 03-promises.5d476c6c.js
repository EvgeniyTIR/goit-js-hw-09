document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:o,amount:n}}=e.currentTarget,l={delay:t.value,step:o.value,amount:n.value};function s(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{const s={position:e,delay:t};o?n(s):l(s)}),t)}))}e.currentTarget.reset(),console.log();for(let e=0;e<l.amount;e++){s(e+1,l.delay+l.step*e).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.5d476c6c.js.map
