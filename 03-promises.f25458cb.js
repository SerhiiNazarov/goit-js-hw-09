const e=document.querySelector(".form");inputsRef={};e.addEventListener("input",(e=>{e.target.name,inputsRef[e.target.name]=e.target.value}));const t=(e,t)=>(console.log(e,t),new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)})));e.addEventListener("submit",(e=>{e.preventDefault();for(let e=0;e<inputsRef.amount;e++){const n=Number(inputsRef.delay)+Number(inputsRef.step)*e;t(e+1,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.f25458cb.js.map
