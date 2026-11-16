// Welcome screen: the ENTER gesture reveals the full Akuyrium workspace
// and starts the included aqua radio track (browser autoplay policy compliant).
(()=>{
 const gate=document.getElementById('welcome-gate');
 const enter=document.getElementById('enter-akuyrium');
 const audio=document.getElementById('bg-audio');
 if(!gate||!enter)return;
 const open=()=>{
  if(document.body.classList.contains('ak-entered'))return;
  document.body.classList.add('ak-entered');
  gate.classList.add('is-leaving');
  try{localStorage.setItem('akuyrium_bg_music_enabled_v1','1')}catch(e){}
  if(audio){audio.volume=.24;const volume=document.getElementById('bg-music-volume');if(volume)volume.value='.24';try{localStorage.setItem('akuyrium_bg_music_volume_v1','.24')}catch(e){};audio.play().catch(()=>{})}
  window.setTimeout(()=>gate.remove(),900);
  window.setTimeout(()=>{const first=document.querySelector('.sidebar .nav button[data-page="home"]');if(first)first.focus({preventScroll:true})},950);
 };
 enter.addEventListener('click',open);
 document.addEventListener('keydown',e=>{if(e.key==='Enter'&&gate.isConnected&&!document.body.classList.contains('ak-entered'))open()});
})();
