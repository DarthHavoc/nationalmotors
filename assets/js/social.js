/* National Motors — Instagram grid, fed by a Behold.so JSON feed.
   Switch it on by setting data-behold="<feed id>" on .ig-grid in index.html.
   Until that is set (or if the request fails) the placeholder tiles stay put,
   so the section never renders broken. */
(function(){
 var grid=document.querySelector('.ig-grid');
 if(!grid||!window.fetch)return;
 var id=(grid.getAttribute('data-behold')||'').trim();
 if(!id)return;
 var slots=grid.querySelectorAll('a').length||6;
 var url=/^https?:\/\//.test(id)?id:'https://feeds.behold.so/'+id;

 fetch(url).then(function(r){
  if(!r.ok)throw new Error('HTTP '+r.status);
  return r.json();
 }).then(function(d){
  var posts=Array.isArray(d)?d:((d&&d.posts)||[]);
  var tiles=posts.slice(0,slots).map(tile).filter(Boolean);
  if(!tiles.length)return;
  grid.innerHTML=tiles.join('');
  grid.setAttribute('data-live','1');
 })['catch'](function(){/* keep the placeholders */});

 function src(p){
  var s=p.sizes||{};
  return (s.small&&s.small.mediaUrl)||(s.medium&&s.medium.mediaUrl)||p.thumbnailUrl||p.mediaUrl||'';
 }
 /* caption and permalink come from Instagram - escape before inlining */
 function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function tile(p){
  var u=src(p);if(!u)return '';
  var cap=(p.caption||'').replace(/\s+/g,' ').trim().slice(0,90);
  return '<a href="'+esc(p.permalink||'https://instagram.com/nationalmotorsva')+'" target="_blank" rel="noopener">'
   +'<img class="real" src="'+esc(u)+'" alt="'+esc(cap||'Instagram post')+'" loading="lazy">'
   +(p.mediaType==='VIDEO'?'<span class="igplay" aria-hidden="true">\u25B6</span>':'')
   +'</a>';
 }
})();
