!function(){var n=document.querySelector(".form"),e={};n.addEventListener("input",(function(n){n.target.name,e[n.target.name]=n.target.value}));var t=function(n,e){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:n,delay:e}):o({position:n,delay:e})}),e)}))};n.addEventListener("submit",(function(n){n.preventDefault();for(var o=0;o<e.amount;o++){var a=Number(e.delay)+Number(e.step)*o;t(o+1,a).then((function(n){var e=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms"))})).catch((function(n){var e=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.4f8f3837.js.map
