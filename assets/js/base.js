/* The live feed overwrites these globals. If it returns an empty list
   (or fails to load), fall back to the bundled data in data.js. */
if(!window.INVENTORY||!window.INVENTORY.length)window.INVENTORY=window.INVENTORY_FALLBACK||[];
if(!window.SOLD||!window.SOLD.length)window.SOLD=window.SOLD_FALLBACK||[];
(function(){
 var hd=document.getElementById('hd');
 if(hd)addEventListener('scroll',function(){hd.classList.toggle('solid',scrollY>40);},{passive:true});
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
 document.querySelectorAll('.rev').forEach(function(el){io.observe(el);});
 var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
 var H={0:null,1:[10,19],2:[10,19],3:[10,19],4:[10,19],5:[10,19],6:[10,17]};
 function ap(h){var s=h>=12?'PM':'AM';var hh=h%12;if(hh===0)hh=12;return hh+' '+s;}
 var td=document.getElementById('today');
 if(td){var d=H[new Date().getDay()];if(!d){td.textContent='Closed';}else{var now=new Date().getHours()+new Date().getMinutes()/60;var op=now>=d[0]&&now<d[1];td.textContent=(op?'Open':'Closed')+' · '+ap(d[0])+' – '+ap(d[1]);}}
 var mt=document.getElementById('mt'),mm=document.getElementById('mm'),mc=document.getElementById('mc');
 if(mt)mt.onclick=function(){mm.classList.add('open');};if(mc)mc.onclick=function(){mm.classList.remove('open');};
 if(mm)mm.querySelectorAll('a').forEach(function(a){a.onclick=function(){mm.classList.remove('open');};});
 document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){var o=q.getAttribute('aria-expanded')==='true';var p=q.nextElementSibling;q.setAttribute('aria-expanded',String(!o));p.style.maxHeight=o?null:p.scrollHeight+'px';});});
 document.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');if(ok){ok.style.display='block';ok.textContent=f.getAttribute('data-ok')||'Thank you — we will be in touch shortly.';}});});
})();
