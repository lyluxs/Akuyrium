(()=>{
 const grid=document.getElementById('seal-grid');
 if(!grid)return;
 const cards=[...grid.querySelectorAll('.seal-card')];
 const search=document.getElementById('seal-search');
 search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();cards.forEach(card=>{card.hidden=!!q&&!((card.dataset.name||'')+' '+card.innerText).toLowerCase().includes(q)})});
 document.getElementById('seal-random')?.addEventListener('click',()=>{
  const visible=cards.filter(card=>!card.hidden);if(!visible.length)return;
  const chosen=visible[Math.floor(Math.random()*visible.length)];
  cards.forEach(card=>card.style.outline='');chosen.style.outline='3px solid #9bddeb';chosen.style.outlineOffset='3px';chosen.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>chosen.style.outline='',1800);
 });
})();
