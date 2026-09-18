var MARK="assets/img/monogram.png";
function money(n){return "$"+Math.round(n).toLocaleString("en-US");}
function miles(n){return n.toLocaleString("en-US")+" mi";}
function photo(v){return (v.photos&&v.photos.length)?('<img class="real" src="'+v.photos[0]+'" alt="">'):('<img class="ph" src="'+MARK+'" alt="">');}
function sp(l,val){return '<div><dt>'+l+'</dt><dd>'+val+'</dd></div>';}
function card(v,sold){
 var specs=sold?'':'<div class="cspecs">'+sp('Mileage',miles(v.miles))+sp('Exterior',v.color||'—')+sp('Interior',v.interior||'—')+sp('Engine',v.engine||'—')+'</div>';
 var co=(!sold&&v.highlight)?'<div class="callout">'+v.highlight+'</div>':'';
 return '<a class="vhc'+(sold?' sold':'')+'" href="vehicle.html?id='+v.id+'"><div class="frame">'+((v.ev&&!sold)?'<span class="ev">EV</span>':'')+photo(v)+'</div>'
  +'<div class="meta glass"><div class="top"><span class="cname" title="'+v.year+' '+v.make+' '+v.model+'">'+v.year+' '+v.make+' '+v.model+'</span><span class="cprice">'+(sold?'Sold':money(v.price))+'</span></div>'+co+specs+'</div></a>';}
function qs(k){return new URLSearchParams(location.search).get(k);}
