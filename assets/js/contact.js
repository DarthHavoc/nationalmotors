window.fillContact=function(){var q=location.search;var h=location.hash;if(h.indexOf('?')>-1)q=h.slice(h.indexOf('?'));var veh=null;try{veh=new URLSearchParams(q).get('vehicle');}catch(e){}
 var ta=document.getElementById('contact-msg');if(veh&&ta){ta.value="I would like to schedule a test drive for the "+decodeURIComponent(veh)+".";}};
window.fillContact();
