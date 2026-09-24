(function(){
 var p=new URLSearchParams(location.search),any=false;
 [['year','sf_year'],['make','sf_make'],['model','sf_model']].forEach(function(f){
  var val=p.get(f[0]),el=document.getElementById(f[1]);
  if(val&&el){el.value=val;any=true;}});
 if(!any)return;
 var note=document.getElementById('sf_note');
 if(note&&!note.value){
  var name=[p.get('year'),p.get('make'),p.get('model')].filter(Boolean).join(' ');
  note.value='Looking for something similar to the '+name+'.';}
 var head=document.querySelector('.page-head p');
 if(head)head.textContent='We have pre-filled this from a sold vehicle \u2014 adjust anything below and we will start the search.';
 var first=document.getElementById('sf_note')||document.getElementById('sf_make');
 if(first)first.focus({preventScroll:true});
})();
