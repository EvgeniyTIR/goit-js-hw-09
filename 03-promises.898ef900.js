document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.delay,o=t.step,a=t.amount,r={delay:n.value,step:o.value,amount:a.value};function c(e,t){var n=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){var r={position:e,delay:t};n?o(r):a(r)}),t)}))}e.currentTarget.reset(),console.log();for(var i=0;i<r.amount;i++)c(i+1,r.delay+r.step*i).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}));
//# sourceMappingURL=03-promises.898ef900.js.map
