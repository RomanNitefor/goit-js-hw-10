import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",n=>{n.preventDefault();const o=s.querySelector('input[name="delay"]'),l=s.querySelectorAll('input[name="state"]'),i=Array.from(l).find(e=>e.checked);if(!o||!i)return;const t=parseInt(o.value);new Promise((e,m)=>{setTimeout(()=>{i.value==="fulfilled"?e(t):m(t)},t)}).then(e=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map