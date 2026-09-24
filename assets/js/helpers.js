var MARK="assets/img/monogram.png";
function money(n){return "$"+Math.round(n).toLocaleString("en-US");}
function miles(n){return n.toLocaleString("en-US")+" mi";}
function photo(v){return (v.photos&&v.photos.length)?('<img class="real" src="'+v.photos[0]+'" alt="">'):('<img class="ph" src="'+MARK+'" alt="">');}
function sp(l,val){return '<div><dt>'+l+'</dt><dd>'+val+'</dd></div>';}
function vinmask(vin){if(!vin)return '';vin=String(vin).trim().toUpperCase();return vin.length<=6?vin.replace(/./g,'*'):vin.slice(0,vin.length-6)+'******';}
function findurl(v){return 'source.html?year='+encodeURIComponent(v.year||'')+'&amp;make='+encodeURIComponent(v.make||'')+'&amp;model='+encodeURIComponent(v.model||'');}
function card(v,sold){
 var name=v.year+' '+v.make+' '+v.model;
 if(sold){var vin=vinmask(v.vin);
  return '<div class="vhc sold"><a class="cardlink" href="vehicle.html?id='+v.id+'"><div class="frame">'+photo(v)+'</div></a>'
   +'<div class="meta glass"><div class="top"><span class="cname" title="'+name+'">'+name+'</span></div>'
   +(vin?'<div class="cvin">VIN '+vin+'</div>':'')
   +'<a class="btn small findsim" href="'+findurl(v)+'">Find Similar</a></div></div>';}
 var specs='<div class="cspecs">'+sp('Mileage',miles(v.miles))+sp('Exterior',v.color||'—')+sp('Interior',v.interior||'—')+sp('Engine',v.engine||'—')+'</div>';
 var co=v.highlight?'<div class="callout">'+v.highlight+'</div>':'';
 return '<a class="vhc" href="vehicle.html?id='+v.id+'"><div class="frame">'+(v.ev?'<span class="ev">EV</span>':'')+photo(v)+'</div>'
  +'<div class="meta glass"><div class="top"><span class="cname" title="'+name+'">'+name+'</span><span class="cprice">'+money(v.price)+'</span></div>'+co+specs+'</div></a>';}
function qs(k){return new URLSearchParams(location.search).get(k);}
