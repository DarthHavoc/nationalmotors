(function(){var tabs=document.querySelectorAll('.fintab');
 function sel(mod){document.querySelectorAll('.finmod').forEach(function(x){x.style.display=x.getAttribute('data-mod')===mod?'block':'none';});tabs.forEach(function(t){t.setAttribute('aria-pressed',t.getAttribute('data-mod')===mod);});}
 window.__finSel=sel;
 tabs.forEach(function(t){t.addEventListener('click',function(){sel(t.getAttribute('data-mod'));window.scrollTo({top:0,behavior:'smooth'});});});
 document.querySelectorAll('[data-gomod]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();sel(b.getAttribute('data-gomod'));var ft=document.querySelector('.fintabs');if(ft)ft.scrollIntoView({behavior:'smooth'});});});
 window.fillFinance=function(){var q=location.search;var h=location.hash;if(h.indexOf('?')>-1)q=h.slice(h.indexOf('?'));var veh=null;try{veh=new URLSearchParams(q).get('vehicle');}catch(e){}
  if(veh){document.querySelectorAll('.veh-input').forEach(function(i){i.value=decodeURIComponent(veh);});if(window.__finSel)window.__finSel('apply');}};
 if(tabs.length){sel('apply');window.fillFinance();}
})();
