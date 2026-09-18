document.querySelectorAll('.calcmod').forEach(function(m){
 var price=m.querySelector('.c-price'),trade=m.querySelector('.c-trade'),down=m.querySelector('.c-down'),apr=m.querySelector('.c-apr'),term=60;
 if(!price)return; if(!price.value||+price.value===0)price.value=28000; down.value=3000; apr.value=8.9; if(trade)trade.value=0;
 function mm(n){return "$"+Math.round(n).toLocaleString("en-US");}
 function set(cls,val){var e=m.querySelector(cls);if(e)e.textContent=val;}
 function calc(){var P=Math.max(0,(+price.value)-(+down.value)-(trade?+trade.value:0)),r=(+apr.value)/100/12,n=term,pay=r===0?P/n:P*r/(1-Math.pow(1+r,-n));var total=pay*n,intr=total-P;
  set('.r-monthly',mm(pay));set('.v-price',mm(+price.value));set('.v-down',mm(+down.value));set('.v-trade',mm(trade?+trade.value:0));set('.v-apr',(+apr.value).toFixed(1)+'%');set('.v-term',term+' mo');
  set('.r-financed',mm(P));set('.r-interest',mm(intr));set('.r-total',mm(total));set('.r-count',n);set('.r-termout',(n/12)+' yr · '+n+' mo');set('.r-apr',(+apr.value).toFixed(1)+'%');}
 price.oninput=calc;if(trade)trade.oninput=calc;down.oninput=calc;apr.oninput=calc;
 m.querySelector('.c-terms').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;term=+b.dataset.n;m.querySelectorAll('.c-terms button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});calc();});
 calc();
});
