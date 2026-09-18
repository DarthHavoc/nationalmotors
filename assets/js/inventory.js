var BATCH=9,shown=0,cur=[];
var grid=document.getElementById('grid'),countEl=document.getElementById('count');
var st={q:"",make:"",model:"",type:"",fuel:"",price:"",sort:"feat"};
function uniq(k){return Array.from(new Set(INVENTORY.map(function(v){return v[k];}))).sort();}
function opt(v,l){return '<option value="'+v+'">'+(l||v)+'</option>';}
document.getElementById('f-make').innerHTML=opt("","All Makes")+uniq('make').map(function(m){return opt(m);}).join('');
document.getElementById('f-type').innerHTML=opt("","All Body Types")+uniq('type').map(function(t){return opt(t);}).join('');
document.getElementById('f-fuel').innerHTML=opt("","All Fuel")+uniq('fuel').map(function(f){return opt(f,f==="Electric"?"Electric (EV)":f);}).join('');
function fillModels(){var ms=Array.from(new Set(INVENTORY.filter(function(v){return !st.make||v.make===st.make;}).map(function(v){return v.model;}))).sort();document.getElementById('f-model').innerHTML=opt("","All Models")+ms.map(function(m){return opt(m);}).join('');}
fillModels();
function filtered(){return INVENTORY.filter(function(v){
 if(st.q){var q=(v.year+" "+v.make+" "+v.model).toLowerCase();if(q.indexOf(st.q.toLowerCase())<0)return false;}
 if(st.make&&v.make!==st.make)return false;if(st.model&&v.model!==st.model)return false;
 if(st.type&&v.type!==st.type)return false;if(st.fuel&&v.fuel!==st.fuel)return false;
 if(st.price){var pr=st.price.split("-");if(v.price<+pr[0]||v.price>+pr[1])return false;}return true;}).sort(function(a,b){
 if(st.sort==="plow")return a.price-b.price;if(st.sort==="phigh")return b.price-a.price;if(st.sort==="year")return b.year-a.year;if(st.sort==="miles")return a.miles-b.miles;return 0;});}
function render(reset){if(reset){cur=filtered();shown=0;grid.innerHTML='';}
 var next=cur.slice(shown,shown+BATCH);
 if(next.length)grid.insertAdjacentHTML('beforeend',next.map(function(v){return card(v);}).join(''));
 else if(shown===0)grid.innerHTML='<div class="empty">No vehicles match — <a class="link" href="tel:+15407791258">call 540 · 779 · 1258</a></div>';
 shown+=next.length;countEl.innerHTML="Showing "+shown+" of "+cur.length+" vehicle"+(cur.length===1?"":"s");}
var sent=document.getElementById('sentinel');
if(sent&&('IntersectionObserver' in window)){new IntersectionObserver(function(es){if(es[0].isIntersecting&&shown<cur.length)render(false);},{rootMargin:'500px'}).observe(sent);}
document.getElementById('lede').textContent=INVENTORY.length+" vehicles in stock — each hand-selected, fully inspected, and ready for delivery nationwide.";
function on(id,ev,fn){document.getElementById(id).addEventListener(ev,fn);}
on('q','input',function(e){st.q=e.target.value;render(true);});
on('f-make','change',function(e){st.make=e.target.value;st.model="";fillModels();render(true);});
on('f-model','change',function(e){st.model=e.target.value;render(true);});
on('f-type','change',function(e){st.type=e.target.value;render(true);});
on('f-fuel','change',function(e){st.fuel=e.target.value;render(true);});
on('f-price','change',function(e){st.price=e.target.value;render(true);});
on('sort','change',function(e){st.sort=e.target.value;render(true);});
render(true);
