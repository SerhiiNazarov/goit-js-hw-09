function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const s=document.querySelector(".form"),l={};s.addEventListener("input",(e=>{e.target.name,l[e.target.name]=e.target.value}));const a=(e,t)=>new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}));s.addEventListener("submit",(t=>{t.preventDefault();for(let t=0;t<l.amount;t++){const o=Number(l.delay)+Number(l.step)*t;a(t+1,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{position:"center-center",cssAnimationStyle:"from-top"}),console.log(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{position:"center-center",cssAnimationStyle:"from-top"}),console.log(`❌ Rejected promise ${t} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.4277310a.js.map
