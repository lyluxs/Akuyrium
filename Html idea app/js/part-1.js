const $=id=>document.getElementById(id);
const kaos=[
['happy','◡̈˃͈◡˂͈'],['happy','๑•͈ᴗ•͈๑'],['happy','ᵒ̴̶̷̤ꇴᵒ̴̶̷̤'],['happy','(⸝⸝ᵒ̴̶̷̤ꇴᵒ̴̶̷̤⸝⸝)'],['happy','(⸝⸝⸝ᵒ̴̶̷ᴗᵒ̴̶̷ꕤ)'],['happy','૮(˶ᵔᵕᵔ˶)ა'],['happy','ꉂꉂ(ᵔᗜᵔ◍)'],['happy','(◍•ᴗ•◍)'],['happy','(≧∇≦)/'],['happy','ଘ(੭ ᐛ )━☆ﾟ.*･｡ﾟ'],['happy','(｡◠ ꇴ ◠｡ )'],['happy','໒꒰ྀི๑ᵔ ᵕ ᵔ๑꒱ྀིა'],['happy','o(〃＾▽＾〃)o'],['happy','✌︎˶╹ꇴ╹˶✌︎'],['happy','(⁎⁍̴̛ᴗ⁍̴̛⁎)՞'],['happy','(๑˃̵ᴗ˂̵)و'],['happy','(*ˊᗜˋ*)'],['happy','(⑅•ᴗ•⑅)'],['happy','( ◕ᗜ◕ )'],['happy','(๑¯◡¯๑)'],['happy','(❁˃́∀˂̀)'],['happy','(✿◕‿◕✿)'],['happy','(˶ඕ ⌔ ඕ˶)'],['happy','oლ(╹◡╹ლ)'],
['love','໒꒰ྀི∗ɞ̴̶̷ ·̮ ɞ̴̶̷∗꒱ྀིა'],['love','❀(⸝⸝•ᴗ•⸝⸝)❀'],['love','(ू•ᴗ•ू❁)'],['love','(⁎˃ᴗ˂⁎)'],['love','(〃▽〃)'],['love','(づ￣ ³￣)づ'],['love','(♡˙︶˙♡)'],['love','( ˘ ³˘)♥︎'],['love','₍ᐢ⑅•ᴗ•⑅ᐢ₎♡'],['love','♡´･ᴗ･`♡'],['love','(ღ˘⌣˘ღ)'],['love','(≧◡≦)💕'],['love','(꜆⌯ᵕ⌯)꜆♡'],['love','٩(♡ε♡ )۶'],['love','(ʃƪ˘ﻬ˘)'],['love','ꈍ◡ꈍ'],['love','( ꈍ꒳ꈍ)'],['love','ෆ╹ .̮ ╹ෆ'],['love','( ͡♥ ͜ʖ ͡♥)'],
['shy','(⁄ ⁄>⁄ω⁄<⁄ ⁄)'],['shy','(｡･･｡)'],['shy','(⁄ ⁄•⁄-⁄•⁄ ⁄)'],['shy','(⸝⸝ᵕᴗᵕ⸝⸝)'],['shy','(⁎ᴗ͈ ⩊ ᴗ͈⁎)'],['shy','૮꒰˶ฅ́˘ฅ̀˶꒱ა'],['shy','𐔌՞⁔•͈ ·̫ •͈⁔՞𐦯'],['shy','ʚ(꒪ˊ꒳ˋ꒪)ɞ'],['shy','(●´ϖ`●)'],
['sad','( ᵒ̴̶̷̥́◡ ᵒ̴̶̷̣̥̀⸝⸝)'],['sad','｡ﾟ(っ৹ т )ﾟ｡'],['sad','。 °(°´ᯅ`°)° 。'],['sad','๐·°(৹˃ᗝ˂৹)°·๐'],['sad','(╥╯θ╰╥)'],['sad','٩(இ ⌓ இ๑)۶'],['sad','૮( ꒦ິ⍣꒦ີ)ა'],['sad','(๑•́︿•̀๑)'],['sad','o(╥﹏╥)o'],['sad','꒰ᐢ´ඉᯅඉᐢ꒱'],['sad','૮₍ɵ̷﹏ɵ̷̥̥᷅₎ა'],
['angry','(⑉･̆-･̆⑉)'],['angry','ᓀ‸ᓂ'],['angry','(ง˃̶͈⚰˂̶́)ง'],['angry','(๑`^´๑)'],['angry','<(｀^´)>'],['angry','( •̀ ω •́ )'],
['sleepy','ᙆᙆᙆ'],['sleepy','꒰｡- ᴗ - ｡꒱ ᶻzᶻzᶻz'],['sleepy','(ᴗ˳ᴗ)💤'],['sleepy','(´-ωก`)'],['sleepy','(՞っ ̫ _՞)𓈒 𓂂𓏸'],['sleepy','(｡•́ωก̀｡)'],['sleepy','(ᐡ_ ̫ กᐡ)𓈒𓏸︎︎︎'],['sleepy','/ᐠ - ˕ -マᶻ 𝗓 𐰁'],['sleepy','(՞- -՞)ᶻᶻᶻ'],
['animals','^ ̳ට ̫ ට ̳^'],['animals','₍ᐢ•ﻌ•ᐢ₎'],['animals','ʕ •ᴥ•ʔ'],['animals','ᨐฅ'],['animals','ฅ^•ﻌ•^ฅ'],['animals','(ฅ´ω`ฅ)'],['animals','ᕱ⑅ᕱ'],['animals','≽^• ˕ • ྀི≼'],['animals','੯•́໒꒱'],['animals','ꪔ̤̱'],['animals','ꪔ̤̮'],['animals','(=①ω①=)'],['animals','(=^ェ^=)'],['animals','▼・ᴥ・▼'],['animals','UʘᴥʘU'],
['surprised','(ʘᴗʘ✿)'],['surprised','(✪▽✪)'],['surprised','(⊙_⊙)'],['surprised','(⁎⁍̴̛ᴗ⁍̴̛⁎)'],['surprised','(☞ ͡ ͡° ͜ʖ ͡ ͡°)☞'],['surprised','( ͡° ͜ʖ ͡°)'],['surprised','(ಡωಡ)'],['surprised','( ᵒ̴̶̷̥́ ᵕ ᵒ̴̶̷̣̥̀ )'],
['action','ლ(╹◡╹ლ)'],['action','(ง •̀_•́)ง'],['action','ଘ(੭*ˊᵕˋ)੭*'],['action','ヾ(⌒(ﾉω`)ﾉ'],['action','(っ'-')╮=͟͟͞͞✉'],['action','╰(⸝⸝⸝´꒳`⸝⸝⸝)╯'],['action','(づ｡◕‿‿◕｡)づ'],['action','(ﾉ´ヮ`)ﾉ*: ･ﾟ'],
];
const decorations=[
['bows','𓂃୨୧𓈒𓏸'],['bows','°ʚ୨୧ɞ°'],['bows','୨୧'],['bows','౨ৎ'],['bows','⋆౨ৎ˚⟡˖ ࣪'],['bows','𐙚₊˚⊹♡'],['bows','𝜗𝜚˚⋆'],['bows','ʚ♡⃛ɞ'],
['hearts','𓆩♡𓆪'],['hearts','꒰ঌ❤︎໒꒱'],['hearts','♡·˚ ༘₊·'],['hearts','⋆ ˚｡⋆୨୧˚'],['hearts','ᥫ᭡'],['hearts','ෆ'],['hearts','ℒᵒᵛᵉᵧₒᵤ'],['hearts','♡⑅*˖•.'],['hearts','♡(｡- ω -)'],
['flowers','𓇢𓆸'],['flowers','𑁍ܓ'],['flowers','❀'],['flowers','✿'],['flowers','𖡼.*ﾟ'],['flowers','𓍯𓂃𓏧'],['flowers','🌷'],['flowers','𖧧'],
['stars','⋆.˚'],['stars','✧･ﾟ: *✧･ﾟ:*'],['stars','☽༓･*˚⁺'],['stars','𖤐⭒๋࣭ ⭑'],['stars','☆彡'],['stars','•*¨*•.¸¸☆'],['stars','˚₊‧✩'],['stars','✦'],
['dividers','୨ৎ────────୨ৎ'],['dividers','• ───── ✾ ───── •'],['dividers','꒷︶꒷꒥꒷'],['dividers','╰┈➤'],['dividers','────୨ৎ────'],['dividers','༶•┈┈⛧┈♛┈⛧┈┈•༶'],['dividers','♡・。・♡'],['dividers','┈┈┈┈୨୧┈┈┈┈'],
['angelcore','ཐི༑ཋྀ'],['angelcore','𐐪♡𐑂'],['angelcore','𓂃 ࣪˖ ཐིཋྀ'],['angelcore','ʚїɞ'],['angelcore','ଘ(੭*ˊᵕˋ)੭*'],['angelcore','𓆩♡𓆪'],
['nature','𓆉 𓆝 𓆡'],['nature','𓇼 ⋆.˚'],['nature','𖡼𖤣𖥧'],['nature','𓂃𓂂◌'],['nature','🦢'],['nature','🦋'],
['music','♡🎧'],['music','|◁   II   ▷|'],['music','↺ ʳᵉᵖᵉᵃᵗ'],['music','▶︎ •၊၊||၊|။|||||||'],['music','♬♩♪♩ ♩♪♩♬'],
['misc','𓂃ෆ˚'],['misc','˚₊·—̳͟͞͞♡'],['misc','𓊆 𓊇'],['misc','⋆ ﾟ꩜‧˚'],['misc','〰ฺ・:*:・✿ฺ'],['misc','꧁༺༻꧂'],['misc','𓏲𑁘 𓏲੭'],
['magical girl','☾₊˚.⋆ ୨୧ ⋆.˚₊☽'],['magical girl','✧･ﾟ: *✧･ﾟ:* 変身 *:･ﾟ✧*:･ﾟ✧'],['magical girl','╰┈➤ ♡ magic is everywhere ♡'],['magical girl','⋆｡‧˚ʚ♡ɞ˚‧｡⋆'],['magical girl','ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚'],['magical girl','₊˚⊹♡ 𝓶𝓪𝓰𝓲𝓬 ♡⊹˚₊'],['magical girl','✦ . 　⁺ 　 . ✦　 . 　⁺　 . ✦'],['magical girl','꒰ა ☆ ໒꒱'],['magical girl','⋆⁺₊⋆ ☾⋆⁺₊⋆'],['magical girl','𓆩✧𓆪 𝓶𝓸𝓸𝓷 𝓶𝓪𝓰𝓲𝓬 𓆩✧𓆪'],
['webcore','｡･:*:･ﾟ★,｡･:*:･ﾟ☆'],['webcore','♡彡 my little homepage 彡♡'],['webcore','[ welcome to my world! ]'],['webcore','✧･ﾟ: *✧･ﾟ:* UNDER CONSTRUCTION *:･ﾟ✧*:･ﾟ✧'],['webcore','★彡 𝓭𝓻𝓮𝓪𝓶 𝓫𝓲𝓰 彡★'],['webcore','(っ◔◡◔)っ ♥ hello internet ♥'],['webcore','⊹ ࣪ ˖ click here ˖ ࣪ ⊹'],['webcore','♡ ｡ﾟ･｡ﾟ☆ﾟ･｡ﾟ♡'],
['madoka vibes','୨୧ pink magic ☆彡'],['madoka vibes','♡₊˚ 🪽・₊✧ hope & wishes'],['madoka vibes','✧･ﾟ: *✧･ﾟ:* soul gem *:･ﾟ✧*:･ﾟ✧'],['madoka vibes','☽ ｡⋆ magical girl ☆ﾟ.*･｡ﾟ'],['madoka vibes',`╭┈┈┈┈┈┈┈┈╮\n  ♡ wish upon a star ♡\n╰┈┈┈┈┈┈┈┈╯`]
];
const asciiArts=[
['cats',` /\\_/\\\\
( o.o )
 > ^ <`],['cats',` /ᐠ｡ꞈ｡ᐟ\\
( つ♡と )
 しーＪ`],['cats',` (=｀ω´=)
 ( つ旦O
 と＿)_)`],['bunnies',` (\\_/)
 ( •.•)
/ >♡`],['bunnies',`૮꒰ ˶• ༝ •˶꒱ა
  /づ♡`],['bears',`  ʕ•ᴥ•ʔ
 /|   |\\
  |___|`],['hearts',`♡♡♡♡♡♡♡
♡  ILY  ♡
♡♡♡♡♡♡♡`],['hearts',` .:::.   .:::. 
::::::.:::::::
:::::::::::::
 ':::::::::'
   ':::::'`],['flowers',`  @}->--
   (✿)
   /|\\`],['stars',`    *  .  ✦
 .   ☆   .
   ✧   *`],['magic',`  * . ✧
 .  *  .
✧  ☆  ✧
  . * .`],['faces',` .-""""-.
 /  .  .  \\
 |   ᴗ   |
 \\  ___  /
  '-----'`],['houses',`   /\\
  /  \\
 /____\\
 | [] |
 |____|`],['messages',`╭────────────╮
│  hi there! │
╰────────────╯`],['butterflies',`  .==-.       .-==.
 / .   \\     /   . \\
(       )   (       )
 \\     /     \\     /
  .-.__/       \\__.-'`]
];
const filters={kao:['all','happy','love','shy','sad','angry','sleepy','animals','surprised','action'],decor:['all','bows','hearts','flowers','stars','dividers','angelcore','nature','music','misc'],ascii:['all','cats','bunnies','bears','hearts','flowers','stars','magic','faces','houses','messages','butterflies']};
const labels={shy:'shy',animals:'animals',action:'action',angelcore:'angelcore',nature:'nature',music:'music',misc:'other',ascii:'ASCII'};
let currentPage='home',activeFilters={kao:'all',decor:'all',ascii:'all'};
let favorites=JSON.parse(localStorage.getItem('ck_favs')||'[]'),custom=JSON.parse(localStorage.getItem('ck_custom')||'[]');
function toast(msg='Copied ♡'){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500)}
async function copyText(txt){try{await navigator.clipboard.writeText(txt)}catch(e){const x=document.createElement('textarea');x.value=txt;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove()}toast()}
function save(){localStorage.setItem('ck_favs',JSON.stringify(favorites));localStorage.setItem('ck_custom',JSON.stringify(custom));updateStats()}
function updateStats(){const a=$('stat-kao'),b=$('stat-decor'),c=$('stat-fav');if(a)a.textContent=kaos.length+custom.filter(x=>x.type==='kao').length;if(b)b.textContent=decorations.length+custom.filter(x=>x.type==='decor').length;if(c)c.textContent=favorites.length}
function goto(page){currentPage=page;document.querySelectorAll('.page').forEach(x=>x.hidden=x.id!=='page-'+page);document.querySelectorAll('[data-page]').forEach(x=>x.classList.toggle('active',x.dataset.page===page));$('crumb').textContent=({home:'home',kao:'kaomojis',decor:'decorations',ascii:'ASCII art',studio:'text decorator',keyboard:'symbol keyboard',fonts:'fonts',bios:'bio ideas',favorites:'favorites',custom:'my creations',bubbles:'bubble pop',paint:'paint studio',wallpapers:'wallpapers',aquarium:'digital aquarium',stickers:'sticker maker',profile:'profile cards',notes:'sticky notes',music:'mini mp3 player',desktop:'aqua desktop'})[page]||page;if(page==='fonts')renderFonts();if(page==='bios')renderBios();if(page==='favorites')renderFavorites();if(page==='custom')renderCustom()}
document.querySelectorAll('[data-page],[data-go]').forEach(b=>b.addEventListener('click',()=>goto(b.dataset.page||b.dataset.go)));
function renderFilters(type){const target=$(type+'-filters');target.innerHTML=filters[type].map(f=>`<button class="filter ${activeFilters[type]===f?'active':''}" data-filter="${f}">${f==='all'?'All':labels[f]||f}</button>`).join('');target.querySelectorAll('button').forEach(b=>b.onclick=()=>{activeFilters[type]=b.dataset.filter;renderFilters(type);renderContent(type)})}
function tileHTML(item,type,index){let [cat,val]=item;let id=type+'|'+cat+'|'+val;let on=favorites.includes(id);return `<article class="tile"><div class="tile-top"><span class="tag">${labels[cat]||cat}</span><button class="fav ${on?'on':''}" data-fav="${encodeURIComponent(id)}">${on?'♥':'♡'}</button></div><div class="kao">${escapeHTML(val)}</div><div class="tile-bottom"><button class="copy" data-copy="${encodeURIComponent(val)}">Copy</button></div></article>`}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderContent(type){let data=type==='kao'?kaos:type==='decor'?decorations:asciiArts;let q=$(type+'-search').value.toLowerCase();let list=data.map((x,i)=>[x,i]).filter(([x])=>(activeFilters[type]==='all'||x[0]===activeFilters[type])&&x.join(' ').toLowerCase().includes(q));if(type==='ascii'){$('ascii-grid').innerHTML=list.map(([x,i])=>`<article class="tile"><div class="tile-top"><span class="tag">${x[0]}</span></div><pre class="ascii">${escapeHTML(x[1])}</pre><button class="copy" style="width:100%" data-copy="${encodeURIComponent(x[1])}">Copy ASCII</button></article>`).join('')||'<div class="empty">No results found ♡</div>'}else if(type==='decor'){$('decor-grid').innerHTML=list.map(([x,i])=>`<article class="decor-item"><div class="tile-top"><span class="tag">${x[0]}</span><button class="fav ${favorites.includes('decor|'+x[0]+'|'+x[1])?'on':''}" data-fav="${encodeURIComponent('decor|'+x[0]+'|'+x[1])}">${favorites.includes('decor|'+x[0]+'|'+x[1])?'♥':'♡'}</button></div><div class="decor-text">${escapeHTML(x[1])}</div><button class="copy" style="width:100%;margin-top:8px" data-copy="${encodeURIComponent(x[1])}">Copy decoration</button></article>`).join('')||'<div class="empty">No results found ♡</div>'}else{$('kao-grid').innerHTML=list.map(([x,i])=>tileHTML(x,'kao',i)).join('')||'<div class="empty">No results found ♡</div>';$('kao-count').textContent=list.length+' results'}}
function renderFavorites(){let list=favorites.map(id=>{let [type,cat,...rest]=id.split('|');return {id,type,cat,val:rest.join('|')}});$('fav-count').textContent=list.length+' saved';$('fav-grid').innerHTML=list.map(x=>`<article class="tile"><div class="tile-top"><span class="tag">${x.type} · ${x.cat}</span><button class="fav on" data-unfav="${encodeURIComponent(x.id)}">♥</button></div><div class="kao">${escapeHTML(x.val)}</div><button class="copy" style="width:100%" data-copy="${encodeURIComponent(x.val)}">Copy</button></article>`).join('')||'<div class="empty">You have not saved anything yet. Tap ♡ on your favorites.</div>'}
function renderCustom(){$('custom-list').innerHTML=custom.map((x,i)=>`<div class="decor-item" style="margin-top:8px"><div class="row" style="justify-content:space-between"><b>${escapeHTML(x.name)}</b><button class="fav on" data-delete="${i}">×</button></div><div class="decor-text">${escapeHTML(x.value)}</div><button class="copy" style="width:100%" data-copy="${encodeURIComponent(x.value)}">Copy</button></div>`).join('')||'<p style="color:var(--muted);font-size:12px">You have not added any creations yet.</p>'}
document.addEventListener('click',e=>{let c=e.target.closest('[data-copy]');if(c){copyText(decodeURIComponent(c.dataset.copy));return}let f=e.target.closest('[data-fav]');if(f){let id=decodeURIComponent(f.dataset.fav);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save();renderContent(currentPage);return}let u=e.target.closest('[data-unfav]');if(u){favorites=favorites.filter(x=>x!==decodeURIComponent(u.dataset.unfav));save();renderFavorites();return}let d=e.target.closest('[data-delete]');if(d){custom.splice(+d.dataset.delete,1);save();renderCustom();return}});
['kao','decor','ascii'].forEach(t=>{$(t+'-search').addEventListener('input',()=>renderContent(t));renderFilters(t);renderContent(t)});
$('randomKao').onclick=()=>{let x=kaos[Math.floor(Math.random()*kaos.length)][1];copyText(x)};
function combo(){const preview=$('comboPreview');if(!preview)return;let a=kaos[Math.floor(Math.random()*kaos.length)][1],b=decorations[Math.floor(Math.random()*decorations.length)][1];preview.textContent=b+' '+a+' '+b}
const randomComboButton=$('randomCombo'),copyComboButton=$('copyCombo');if(randomComboButton)randomComboButton.onclick=combo;if(copyComboButton)copyComboButton.onclick=()=>copyText($('comboPreview')?.textContent||'');
function studio(){let t=$('studio-input').value,frame=$('frame').value,sep=$('separator').value;if(!t){$('studio-preview').textContent='Your text will appear here ♡';return}let x=frame==='none'?t:frame.replaceAll('{text}',t);$('studio-preview').textContent=sep?x+sep:x}
$('studio-input').addEventListener('input',studio);$('frame').onchange=studio;$('separator').onchange=studio;
$('studio-extras').onclick=e=>{let b=e.target.closest('[data-extra]');if(b){$('studio-input').value+=$('studio-input').value?' '+b.dataset.extra:b.dataset.extra;studio()}};
$('copyStudio').onclick=()=>copyText($('studio-preview').textContent);$('clearStudio').onclick=()=>{$('studio-input').value='';studio()};
const keys='♡ ♥ ღ ୨୧ ౨ৎ 𐙚 ୨୧ ✧ ☆ ★ ⋆ ˚ ༘ ༄ 𓆩 𓆪 ʚ ɞ ꒰ ꒱ ૮ ა ᰔ ᥫ᭡ ❀ ✿ 𓇢𓆸 ☾ ☽ ☼ ♡⃛ ⊹ ࣪ ˖ 𓂃 𖤐 𖦹 𖧷 𑁍 𓍯 𓏲 𓂂 🪽 🦢 🦋 🐈 🐇 🧸'.split(' ');
$('key-grid').innerHTML=keys.map(k=>`<button class="key" data-key="${encodeURIComponent(k)}">${k}</button>`).join('');
let keyHistory=[];$('key-grid').onclick=e=>{let b=e.target.closest('[data-key]');if(b){keyHistory.push($('keyboard-output').value);$('keyboard-output').value+=decodeURIComponent(b.dataset.key);$('keyboard-output').focus()}};
$('undoKey').onclick=()=>{$('keyboard-output').value=keyHistory.pop()??$('keyboard-output').value.slice(0,-1)};$('clearKeys').onclick=()=>{$('keyboard-output').value='';keyHistory=[]};$('copyKeys').onclick=()=>copyText($('keyboard-output').value);
$('addCustom').onclick=()=>{let value=$('custom-value').value.trim();if(!value){toast('Write something first ♡');return}custom.push({value,name:$('custom-name').value.trim()||'my creation',type:$('custom-type').value});save();$('custom-value').value='';$('custom-name').value='';renderCustom();toast('Saved to your collection ♡')};
updateStats();combo();

// Fuentes Unicode: se convierten los caracteres para que puedan copiarse y pegarse en other perfiles.
const unicodeStyles=[
 ['Bold','𝗔𝗯𝗰 𝗯𝗼𝗹𝗱','bold'],['Italic','𝘈𝘣𝘤 𝘪𝘵𝘢𝘭𝘪𝘤','italic'],['Bold italic','𝑨𝒃𝒄 𝒃𝒐𝒍𝒅','bolditalic'],['Script','𝒜𝒷𝒸 𝓈𝒸𝓇𝒾𝓅𝓉','script'],['Bold script','𝓐𝓫𝓬 𝓫𝓸𝓵𝓭','boldscript'],['Double-struck','𝔸𝕓𝕔 𝕕𝕠𝕦𝕓𝕝𝕖','double'],['Fraktur','𝔄𝔟𝔠 𝔣𝔯𝔞𝔨𝔱𝔲𝔯','fraktur'],['Monospace','𝙰𝚋𝚌 𝚖𝚘𝚗𝚘','mono'],['Circled','Ⓐⓑⓒ ⓒⓘⓡⓒⓛⓔ','circled'],['Fullwidth','Ａｂｃ ｆｕｌｌｗｉｄｔｈ','full'],['Small caps','ᴀʙᴄ sᴍᴀʟʟ ᴄᴀᴘs','small'],['Squared','🅰🅱🅲 🆂🆀🆄🅰🆁🅴','squared']
];
const ranges={bold:[0x1D400,0x1D41A],italic:[0x1D434,0x1D44E],bolditalic:[0x1D468,0x1D482],script:[0x1D49C,0x1D4B6],boldscript:[0x1D4D0,0x1D4EA],double:[0x1D538,0x1D552],fraktur:[0x1D504,0x1D51E],mono:[0x1D670,0x1D68A]};
const special={script:{A:0x1D49C,B:0x212C,E:0x2130,F:0x2131,H:0x210B,I:0x2110,L:0x2112,M:0x2133,R:0x211B},double:{C:0x2102,H:0x210D,N:0x2115,P:0x2119,Q:0x211A,R:0x211D,Z:0x2124},fraktur:{C:0x212D,H:0x210C,I:0x2111,R:0x211C,Z:0x2128}};
const smallMap={'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ғ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ','s':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ'};
function stylizeChar(ch,style){const code=ch.codePointAt(0);if(style==='full'){if(code>=33&&code<=126)return String.fromCodePoint(code===32?32:code+0xFEE0);return ch}if(style==='small')return smallMap[ch.toLowerCase()]||ch;if(style==='circled'){if(/[A-Z]/.test(ch))return String.fromCodePoint(0x24B6+code-65);if(/[a-z]/.test(ch))return String.fromCodePoint(0x24D0+code-97);if(/[1-9]/.test(ch))return String.fromCodePoint(0x2460+code-49);return ch}if(style==='squared'){if(/[A-Z]/.test(ch))return String.fromCodePoint(0x1F130+code-65);if(/[a-z]/.test(ch))return String.fromCodePoint(0x1F130+code-97);return ch}const r=ranges[style];if(!r)return ch;if(/[A-Z]/.test(ch)){if(special[style]?.[ch])return String.fromCodePoint(special[style][ch]);return String.fromCodePoint(r[0]+code-65)}if(/[a-z]/.test(ch))return String.fromCodePoint(r[1]+code-97);return ch}
function convertText(text,style){return Array.from(text).map(ch=>stylizeChar(ch,style)).join('')}
function renderFonts(){const q=$('font-input').value;const large=$('font-size').value==='large';$('font-grid').innerHTML=unicodeStyles.map(([name,sample,style])=>{const converted=convertText(q,style);return `<article class="font-card"><div class="font-name">${name} · ${sample}</div><div class="font-sample" style="font-family:inherit;font-size:${large?27:21}px">${escapeHTML(converted||'Your text ♡')}</div><div class="font-actions"><button class="copy" data-copy="${encodeURIComponent(converted)}">Copy style</button></div></article>`}).join('')}
$('font-input').addEventListener('input',renderFonts);$('font-size').addEventListener('change',renderFonts);

// Plantillas de bio inspiradas en perfiles aesthetic y listas para copiar.
const bioFilters=['all','soft','coquette','minimal','gamer','angelcore','music','friendship'];
const bioIdeas=[
 ['soft','୨୧ soft days','╭┈ • ┈ ୨୧ ┈ • ┈╮\n  just a little dreamer ♡\n  collecting tiny happy moments\n╰┈ • ┈ ୨୧ ┈ • ┈╯'],
 ['coquette','୨୧ coquette','୨୧ ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚ ୨୧\n  made of ribbons & daydreams\n  ♡ sweet like strawberry milk'],
 ['minimal','☁ minimal','ੈ♡˳\n  living slowly\n  less noise, more creativity.'],
 ['gamer','🎮 gamer','╭・୨୧・╮\n  player one ♡\n  games • music • sleep\n╰・୨୧・╯'],
 ['angelcore','🪽 angelcore','𓆩♡𓆪  little angel 𓆩♡𓆪\n  somewhere between clouds & stars\n  ☁︎ be kind'],
 ['music','♫ music joy','♪♫•*¨*•.¸¸♡\n  music is my safe place\n  currently listening: ...\n  ♡ repeat'],
 ['friendship','♡ friendship','୨୧ besties corner ୨୧\n  my people, my little universe\n  ♡ @_____  @_____'],
 ['soft','🌷 flower girl','𓍯𓂃𓏧\n  growing at my own pace 🌷\n  soft heart, strong mind'],
 ['coquette','౨ৎ pink mood','౨ৎ pink skies & pretty things\n  bows in my hair, dreams in my heart ♡'],
 ['minimal','✧ simple intro','name: _____\npronouns: _____\nlikes: _____\n୨୧ nice to meet you!'],
 ['gamer','♡ online','⌗ online ♡\n  probably gaming or listening to music\n  dm always open ✧'],
 ['angelcore','☾ moon child','☾⋆｡𖦹°‧\n  made of moonlight & little hopes\n  𓂃 ࣪˖ ִֶָ♡']
];
function renderBios(){const q=$('bio-search').value.toLowerCase();const f=window.activeBioFilter||'all';$('bio-grid').innerHTML=bioIdeas.map((x,i)=>({...x,i})).filter(x=>(f==='all'||x[0]===f)&&(x[1]+' '+x[2]).toLowerCase().includes(q)).map(x=>`<article class="tile"><div class="tile-top"><span class="tag">${x[0]}</span></div><b>${x[1]}</b><pre class="ascii" style="white-space:pre-wrap;text-align:left;font-family:Nunito, sans-serif;min-height:110px">${escapeHTML(x[2].replaceAll('\\n','\n'))}</pre><button class="copy" style="width:100%" data-copy="${encodeURIComponent(x[2].replaceAll('\\n','\n'))}">Copy bio ♡</button></article>`).join('')||'<div class="empty">No templates found for that search ♡</div>';}
function setupBioFilters(){const el=$('bio-filters');el.innerHTML=bioFilters.map(f=>`<button class="filter ${f==='all'?'active':''}" data-bio-filter="${f}">${f==='all'?'All':f}</button>`).join('');el.addEventListener('click',e=>{const b=e.target.closest('[data-bio-filter]');if(!b)return;window.activeBioFilter=b.dataset.bioFilter;el.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));renderBios()})}
$('bio-search').addEventListener('input',renderBios);setupBioFilters();
let bioExtras=[];function updateBioPreview(){const t=$('bio-custom-text').value.trim();$('bio-custom-preview').textContent=t?(bioExtras.length?bioExtras.join(' ')+'\n':'')+t:'Your bio will appear here ♡'}
$('bio-custom-text').addEventListener('input',updateBioPreview);document.querySelectorAll('[data-bio-extra]').forEach(b=>b.addEventListener('click',()=>{bioExtras.push(b.dataset.bioExtra);updateBioPreview()}));$('copyBioCustom').onclick=()=>copyText($('bio-custom-preview').textContent);
renderFonts();


// Bubble Pop: each bubble is touch-friendly and respawns after popping.
let bubbleScore=0;
function spawnBubble(){
 const arena=$('bubble-arena'); if(!arena)return;
 const b=document.createElement('button');b.className='bubble';b.type='button';b.setAttribute('aria-label','Pop bubble');
 const size=34+Math.random()*62;b.style.width=size+'px';b.style.height=size+'px';
 b.style.left=(2+Math.random()*90)+'%';b.style.top=(3+Math.random()*82)+'%';b.style.animationDelay=(-Math.random()*3)+'s';
 b.addEventListener('click',()=>{if(b.classList.contains('pop'))return;b.classList.add('pop');bubblePopSound();bubbleScore++;$('bubble-score').textContent=bubbleScore;setTimeout(()=>{b.remove();spawnBubble()},240)});
 arena.appendChild(b);
}
function bubblePopSound(){
 if(!akSound)return;
 try{
  akAudioCtx=akAudioCtx||new(window.AudioContext||window.webkitAudioContext)();
  if(akAudioCtx.state==='suspended')akAudioCtx.resume();
  const now=akAudioCtx.currentTime;
  // A short, bright pop followed by a soft watery resonance.
  const osc=akAudioCtx.createOscillator(),gain=akAudioCtx.createGain(),filter=akAudioCtx.createBiquadFilter();
  osc.type='sine';osc.frequency.setValueAtTime(1050+Math.random()*260,now);osc.frequency.exponentialRampToValueAtTime(300+Math.random()*100,now+.105);
  filter.type='lowpass';filter.frequency.setValueAtTime(2600,now);
  gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.12,now+.008);gain.gain.exponentialRampToValueAtTime(.0001,now+.14);
  osc.connect(filter);filter.connect(gain);gain.connect(akAudioCtx.destination);osc.start(now);osc.stop(now+.15);
  const n=Math.floor(akAudioCtx.sampleRate*.055),buffer=akAudioCtx.createBuffer(1,n,akAudioCtx.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<n;i++)data[i]=(Math.random()*2-1)*(1-i/n);
  const noise=akAudioCtx.createBufferSource(),ng=akAudioCtx.createGain(),nf=akAudioCtx.createBiquadFilter();noise.buffer=buffer;nf.type='bandpass';nf.frequency.value=1700;nf.Q.value=.8;ng.gain.setValueAtTime(.045,now);ng.gain.exponentialRampToValueAtTime(.0001,now+.055);noise.connect(nf);nf.connect(ng);ng.connect(akAudioCtx.destination);noise.start(now);noise.stop(now+.06);
 }catch(e){}
}
function initBubbles(){const a=$('bubble-arena');if(!a||a.dataset.ready)return;a.dataset.ready='1';for(let i=0;i<18;i++)spawnBubble();$('bubble-reset').onclick=()=>{bubbleScore=0;$('bubble-score').textContent='0';a.querySelectorAll('.bubble').forEach(x=>x.remove());for(let i=0;i<18;i++)spawnBubble()}}
// Classic mini Paint: brush, eraser, line, rectangle, circle, undo and PNG export.
let paintTool='brush',painting=false,paintStart=null,paintSnapshot=null,paintHistory=[];
function initPaint(){
 const canvas=$('paint-canvas');if(!canvas||canvas.dataset.ready)return;canvas.dataset.ready='1';
 const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
 const point=e=>{const r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}};
 const snapshot=()=>{paintHistory.push(ctx.getImageData(0,0,canvas.width,canvas.height));if(paintHistory.length>20)paintHistory.shift()};
 const draw=(p)=>{ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=+$('paint-size').value;ctx.strokeStyle=paintTool==='eraser'?'#fff':$('paint-color').value;ctx.fillStyle=ctx.strokeStyle;};
 canvas.addEventListener('pointerdown',e=>{e.preventDefault();canvas.setPointerCapture(e.pointerId);snapshot();painting=true;paintStart=point(e);paintSnapshot=ctx.getImageData(0,0,canvas.width,canvas.height);draw(paintStart);if(paintTool==='brush'||paintTool==='eraser'){ctx.beginPath();ctx.moveTo(paintStart.x,paintStart.y);ctx.lineTo(paintStart.x+.1,paintStart.y+.1);ctx.stroke()}});
 canvas.addEventListener('pointermove',e=>{const p=point(e);$('paint-coords').textContent=Math.round(p.x)+' × '+Math.round(p.y)+' px';if(!painting)return;draw(p);if(paintTool==='brush'||paintTool==='eraser'){ctx.lineTo(p.x,p.y);ctx.stroke()}else{ctx.putImageData(paintSnapshot,0,0);ctx.beginPath();if(paintTool==='line'){ctx.moveTo(paintStart.x,paintStart.y);ctx.lineTo(p.x,p.y);ctx.stroke()}else if(paintTool==='rect'){ctx.strokeRect(paintStart.x,paintStart.y,p.x-paintStart.x,p.y-paintStart.y)}else if(paintTool==='circle'){const rx=(p.x-paintStart.x)/2,ry=(p.y-paintStart.y)/2;ctx.ellipse(paintStart.x+rx,paintStart.y+ry,Math.abs(rx),Math.abs(ry),0,0,Math.PI*2);ctx.stroke()}}});
 const finish=()=>{if(painting){painting=false;paintStart=null;paintSnapshot=null}};
 canvas.addEventListener('pointerup',finish);canvas.addEventListener('pointercancel',finish);canvas.addEventListener('pointerleave',e=>{if(e.buttons===0)finish()});
 $('paint-tools').addEventListener('click',e=>{const b=e.target.closest('[data-tool]');if(!b)return;paintTool=b.dataset.tool;$('paint-tools').querySelectorAll('button').forEach(x=>x.classList.toggle('selected',x===b))});
 $('paint-size').addEventListener('input',e=>$('paint-size-label').textContent=e.target.value+' px');
 $('paint-palette').addEventListener('click',e=>{const b=e.target.closest('[data-color]');if(b)$('paint-color').value=b.dataset.color});
 $('paint-undo').onclick=()=>{const last=paintHistory.pop();if(last)ctx.putImageData(last,0,0)};
 $('paint-clear').onclick=()=>{snapshot();ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height)};
 $('paint-save').onclick=()=>{const a=document.createElement('a');a.download='my-aqua-drawing.png';a.href=canvas.toDataURL('image/png');a.click();toast('Drawing saved! ♡')};
}

// Initialize the page the first time it is opened.
const oldGoto=goto;goto=function(page){oldGoto(page);if(page==="bubbles")initBubbles();if(page==="paint")initPaint()};

document.querySelectorAll('.launch-card,.app-launch').forEach((card,index)=>card.style.setProperty('--card-index',index));


// Akuyrium extras: gentle sounds, aquarium, creative tools and widgets.
let akSound=true, akAudioCtx=null;
function akTone(freq=660,duration=.055,type='sine',volume=.025){
 if(!akSound)return;
 try{akAudioCtx=akAudioCtx||new(window.AudioContext||window.webkitAudioContext)();if(akAudioCtx.state==='suspended')akAudioCtx.resume();const o=akAudioCtx.createOscillator(),g=akAudioCtx.createGain();o.type=type;o.frequency.setValueAtTime(freq,akAudioCtx.currentTime);g.gain.setValueAtTime(volume,akAudioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,akAudioCtx.currentTime+duration);o.connect(g);g.connect(akAudioCtx.destination);o.start();o.stop(akAudioCtx.currentTime+duration)}catch(e){}
}
$('sound-toggle').addEventListener('click',()=>{akSound=!akSound;$('sound-toggle').textContent=akSound?'🔊':'🔇';if(akSound)akTone(880,.1)});
document.addEventListener('click',e=>{if(e.target.closest('.bubble'))return;if(e.target.closest('button,.launch-card,.nav button'))akTone(akSound?620:0,.045,'sine',.016)});
function aquariumBubble(x,y){const tank=$('aquarium-tank');if(!tank)return;const b=document.createElement('i');b.className='aqua-bubble';const size=8+Math.random()*22;b.style.cssText=`left:${x??(8+Math.random()*84)}%;bottom:${y??-20}px;width:${size}px;height:${size}px;`;tank.appendChild(b);setTimeout(()=>b.remove(),4200)}
$('aquarium-bubbles').addEventListener('click',()=>{for(let i=0;i<12;i++)setTimeout(()=>aquariumBubble(),i*100)});
$('feed-fish').addEventListener('click',()=>{for(let i=0;i<9;i++)setTimeout(()=>aquariumBubble(20+Math.random()*60),i*130);document.querySelectorAll('.fish').forEach((f,i)=>{f.animate([{transform:'translateY(0)'},{transform:'translateY(-24px) scale(1.12)'},{transform:'translateY(0)'}],{duration:600,delay:i*90})})});
$('aquarium-tank').addEventListener('pointerdown',e=>{const r=e.currentTarget.getBoundingClientRect();aquariumBubble((e.clientX-r.left)/r.width*100,r.bottom-e.clientY);});
let stickerEmoji='◌';
function drawSticker(){const c=$('sticker-canvas');if(!c)return;const x=c.getContext('2d'),color=$('sticker-color').value,txt=$('sticker-text').value||'hello!';x.clearRect(0,0,c.width,c.height);x.save();x.shadowColor='#3b8eaa55';x.shadowBlur=22;x.fillStyle=color;x.strokeStyle='#fff';x.lineWidth=18;x.beginPath();x.roundRect(85,90,530,320,85);x.fill();x.stroke();x.shadowBlur=0;x.fillStyle='#fff';x.font='120px serif';x.textAlign='center';x.fillText(stickerEmoji,350,225);x.fillStyle='#287b98';x.font='bold 43px Nunito, sans-serif';x.fillText(txt.slice(0,25),350,315);x.restore()}
['sticker-text','sticker-color'].forEach(id=>$(id).addEventListener('input',drawSticker));
$('sticker-emojis').addEventListener('click',e=>{const b=e.target.closest('[data-sticker]');if(b){stickerEmoji=b.dataset.sticker;drawSticker()}});
$('save-sticker').addEventListener('click',()=>{const a=document.createElement('a');a.download='akuyrium-sticker.png';a.href=$('sticker-canvas').toDataURL('image/png');a.click()});
function drawProfile(){const c=$('profile-canvas');if(!c)return;const x=c.getContext('2d'),col=$('profile-color').value;x.clearRect(0,0,c.width,c.height);const g=x.createLinearGradient(0,0,900,560);g.addColorStop(0,'#f7feff');g.addColorStop(1,col);x.fillStyle=g;x.fillRect(0,0,900,560);x.fillStyle='#ffffffaa';x.beginPath();x.roundRect(45,45,810,470,42);x.fill();x.fillStyle=col;x.beginPath();x.arc(175,205,82,0,Math.PI*2);x.fill();x.strokeStyle='#fff';x.lineWidth=12;x.stroke();x.font='100px serif';x.textAlign='center';x.fillText('𓆝',175,240);x.textAlign='left';x.fillStyle='#267d99';x.font='bold 58px Nunito';x.fillText(($('profile-name').value||'Your name').slice(0,18),295,190);x.font='28px Nunito';x.fillStyle='#528ca1';x.fillText(($('profile-status').value||'online').slice(0,30),300,240);x.font='26px Nunito';const bio=$('profile-bio').value||'your little bio';bio.split('\n').slice(0,3).forEach((line,i)=>x.fillText(line.slice(0,38),90,390+i*42));x.font='24px serif';x.fillText('✧　♡　𓇼　✧',90,485)}
['profile-name','profile-bio','profile-status','profile-color'].forEach(id=>$(id).addEventListener('input',drawProfile));
$('save-profile').addEventListener('click',()=>{const a=document.createElement('a');a.download='akuyrium-profile-card.png';a.href=$('profile-canvas').toDataURL('image/png');a.click()});
let noteCount=0;
function saveNotes(){const data=[...document.querySelectorAll('.sticky-note textarea')].map(t=>t.value);try{localStorage.setItem('akuyrium-notes',JSON.stringify(data))}catch(e){}}
function addNote(value='A little thought...'){const board=$('notes-board');$('notes-empty')?.remove();const el=document.createElement('div');el.className='sticky-note';el.innerHTML='<button class="note-delete" aria-label="Delete note">×</button><textarea maxlength="220"></textarea>';el.querySelector('textarea').value=value;board.appendChild(el);el.querySelector('textarea').addEventListener('input',saveNotes);el.querySelector('.note-delete').addEventListener('click',()=>{el.remove();saveNotes();if(!board.querySelector('.sticky-note')){const e=document.createElement('div');e.id='notes-empty';e.className='notes-empty';e.textContent='Your board is waiting for its first little note ✧';board.appendChild(e)}});let drag=false,sx=0,sy=0,left=0,top=0;el.addEventListener('pointerdown',e=>{if(e.target.tagName==='TEXTAREA'||e.target.tagName==='BUTTON')return;drag=true;const r=el.getBoundingClientRect(),b=board.getBoundingClientRect();sx=e.clientX;sy=e.clientY;left=r.left-b.left+board.scrollLeft;top=r.top-b.top+board.scrollTop;el.setPointerCapture(e.pointerId)});el.addEventListener('pointermove',e=>{if(!drag)return;el.style.position='absolute';el.style.left=Math.max(0,left+e.clientX-sx)+'px';el.style.top=Math.max(0,top+e.clientY-sy)+'px'});el.addEventListener('pointerup',()=>{drag=false;saveNotes()});saveNotes()}
$('add-note').addEventListener('click',()=>addNote());
try{const oldNotes=JSON.parse(localStorage.getItem('akuyrium-notes')||'[]');oldNotes.forEach(addNote)}catch(e){}
$('audio-file').addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const bg=$('bg-audio');if(bg)bg.pause();document.dispatchEvent(new Event('akuyrium:local-track-selected'));const url=URL.createObjectURL(f);$('local-audio').src=url;$('audio-name').textContent=f.name;$('local-audio').load()});
function updateDesktopClock(){const d=new Date();$('desktop-clock').textContent=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});$('desktop-date').textContent=d.toLocaleDateString([],{weekday:'long',month:'short',day:'numeric'})}
updateDesktopClock();setInterval(updateDesktopClock,30000);
document.querySelectorAll('[data-widget]').forEach(w=>{let drag=false,sx=0,sy=0,l=0,t=0;w.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;drag=true;const r=w.getBoundingClientRect(),p=$('aqua-desktop').getBoundingClientRect();sx=e.clientX;sy=e.clientY;l=r.left-p.left;t=r.top-p.top;w.setPointerCapture(e.pointerId)});w.addEventListener('pointermove',e=>{if(!drag)return;w.style.left=Math.max(0,l+e.clientX-sx)+'px';w.style.top=Math.max(0,t+e.clientY-sy)+'px'});w.addEventListener('pointerup',()=>drag=false)});
const akOldGoto=goto;goto=function(page){akOldGoto(page);if(page==='stickers')drawSticker();if(page==='profile')drawProfile()};


// App navigation and wallpaper studio
const mobileSheet=$('mobile-sheet'),mobileBackdrop=$('mobile-sheet-backdrop');
function closeMobileSheet(){mobileSheet.classList.remove('open');mobileBackdrop.classList.remove('show')}
$('mobile-more').addEventListener('click',()=>{mobileSheet.classList.add('open');mobileBackdrop.classList.add('show')});
$('close-mobile-sheet').addEventListener('click',closeMobileSheet);mobileBackdrop.addEventListener('click',closeMobileSheet);
mobileSheet.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>closeMobileSheet()));

// Akuyrium 2000s expansion: Messenger, My Computer, guestbook and settings.
const chatHistory={Mika:[['them','hiii!! welcome back ✧'],['them','did you see the new wallpapers?'],['mine','not yet!! going to check them ♡']],Cloudy:[['them','the sky looks so pretty today ☁'],['them','I made a new profile card!']],Pixel:[['them','busy gaming rn 🎮'],['them','send me your high score later!']]};
let activeChat='Mika';
function renderChat(){const box=$('chat-messages');if(!box)return;$('chat-heading').textContent='Conversation with '+activeChat;box.innerHTML=(chatHistory[activeChat]||[]).map(([who,msg])=>`<div class="chat-bubble ${who}">${escapeHTML(msg)}</div>`).join('');box.scrollTop=box.scrollHeight;document.querySelectorAll('.contact').forEach(b=>b.classList.toggle('active',b.dataset.contact===activeChat))}
document.querySelectorAll('.contact').forEach(b=>b.addEventListener('click',()=>{activeChat=b.dataset.contact;renderChat()}));
$('chat-form').addEventListener('submit',e=>{e.preventDefault();const v=$('chat-input').value.trim();if(!v)return;(chatHistory[activeChat]??=[]).push(['mine',v]);$('chat-input').value='';renderChat()});
const guestKey='akuyrium_guestbook_v1';let guestEntries=[];try{guestEntries=JSON.parse(localStorage.getItem(guestKey)||'[]')}catch(e){}
function renderGuestbook(){const el=$('guest-entries');if(!el)return;el.innerHTML=guestEntries.slice().reverse().map(x=>`<div class="guest-entry"><b>${escapeHTML(x.name)}</b><small>${escapeHTML(x.date)}</small><p>${escapeHTML(x.message)}</p></div>`).join('')||'<p class="muted-small">No signatures yet. Be the first to leave a little note!</p>'}
$('guest-form').addEventListener('submit',e=>{e.preventDefault();guestEntries.push({name:$('guest-name').value.trim(),message:$('guest-message').value.trim(),date:new Date().toLocaleDateString()});guestEntries=guestEntries.slice(-30);try{localStorage.setItem(guestKey,JSON.stringify(guestEntries))}catch(e){}$('guest-name').value='';$('guest-message').value='';renderGuestbook();toast('Thanks for signing the guestbook! ♡')});renderGuestbook();

const prefKey='akuyrium_prefs_v1';let prefs={sounds:true,motion:true,bubbles:true};try{prefs={...prefs,...JSON.parse(localStorage.getItem(prefKey)||'{}')}}catch(e){}
function savePrefs(){try{localStorage.setItem(prefKey,JSON.stringify(prefs))}catch(e){}}
akSound=prefs.sounds;$('sound-toggle').textContent=akSound?'🔊':'🔇';$('sound-toggle').style.opacity=akSound?'1':'.65';$('sound-toggle').setAttribute('aria-label',akSound?'Interface sounds on':'Interface sounds muted');
$('setting-sounds').checked=prefs.sounds;$('setting-motion').checked=prefs.motion;$('setting-bubbles').checked=prefs.bubbles;
$('setting-sounds').addEventListener('change',e=>{prefs.sounds=e.target.checked;akSound=prefs.sounds;savePrefs();const sound=$('sound-toggle');if(sound){sound.textContent=akSound?'🔊':'🔇';sound.style.opacity=prefs.sounds?'1':'.65';sound.setAttribute('aria-label',prefs.sounds?'Interface sounds on':'Interface sounds muted')}});
$('setting-motion').addEventListener('change',e=>{prefs.motion=e.target.checked;document.documentElement.classList.toggle('no-window-motion',!prefs.motion);savePrefs()});
$('setting-bubbles').addEventListener('change',e=>{prefs.bubbles=e.target.checked;document.documentElement.classList.toggle('no-floating-bubbles',!prefs.bubbles);savePrefs()});
document.documentElement.classList.toggle('no-window-motion',!prefs.motion);document.documentElement.classList.toggle('no-floating-bubbles',!prefs.bubbles);
const saver=$('screensaver');$('launch-screensaver').addEventListener('click',()=>saver.classList.add('show'));$('close-screensaver').addEventListener('click',()=>saver.classList.remove('show'));saver.addEventListener('click',e=>{if(e.target===saver)saver.classList.remove('show')});document.addEventListener('keydown',e=>{if(e.key==='Escape')saver.classList.remove('show')});
// Give each page a classic desktop-window arrival.
const previousGoto=goto;goto=function(page){previousGoto(page);const active=$('page-'+page);if(active&&!document.documentElement.classList.contains('no-window-motion')){active.classList.remove('page-arrive');void active.offsetWidth;active.classList.add('page-arrive')}if(page==='messenger')renderChat();if(page==='internet')renderGuestbook()};



// Background Aqua radio: one continuous track across all app sections.
(()=>{
 const audio=$('bg-audio'),button=$('bg-music-toggle'),volume=$('bg-music-volume'),setting=$('setting-music'),widget=document.querySelector('.bg-music-widget');
 if(!audio||!button||!volume||!setting)return;
 const enabledKey='akuyrium_bg_music_enabled_v1',volumeKey='akuyrium_bg_music_volume_v1';
 let wanted=false;try{wanted=localStorage.getItem(enabledKey)==='1'}catch(e){}
 let savedVolume=.32;try{const v=Number(localStorage.getItem(volumeKey));if(Number.isFinite(v)&&v>=0&&v<=1)savedVolume=v}catch(e){}
 audio.volume=savedVolume;volume.value=String(savedVolume);setting.checked=wanted;
 const paint=()=>{const playing=!audio.paused&&!audio.ended;button.textContent=playing?'Ⅱ':'▶';button.setAttribute('aria-label',playing?'Pause background music':'Play background music');button.title=playing?'Pause background music':'Play background music';widget.classList.toggle('is-playing',playing);widget.setAttribute('aria-label',playing?'Aqua background music is playing':'Aqua background music is paused')};
 const remember=value=>{wanted=value;try{localStorage.setItem(enabledKey,value?'1':'0')}catch(e){}setting.checked=value};
 async function start(){try{await audio.play();remember(true)}catch(e){remember(false)}paint()}
 function stop(){audio.pause();remember(false);paint()}
 button.addEventListener('click',()=>audio.paused?start():stop());
 setting.addEventListener('change',()=>setting.checked?start():stop());
 volume.addEventListener('input',()=>{audio.volume=Number(volume.value);try{localStorage.setItem(volumeKey,volume.value)}catch(e){}});
 audio.addEventListener('play',paint);audio.addEventListener('pause',paint);audio.addEventListener('ended',paint);
 // A downloaded track takes priority over the site's background radio.
 const localAudio=$('local-audio');
 const pauseBackgroundForLocalTrack=()=>{if(!wanted)return;audio.pause();remember(false);paint()};
 document.addEventListener('akuyrium:local-track-selected',pauseBackgroundForLocalTrack);
 if(localAudio)localAudio.addEventListener('play',pauseBackgroundForLocalTrack);
 // Browsers may block restored playback until the visitor's first gesture.
 if(wanted){document.addEventListener('pointerdown',()=>{if(wanted&&audio.paused)start()},{once:true})}
 paint();
})();

// Secret cuatro queso page: an extremely important internet discovery.
(()=>{
 const photo=$('queso-photo'),reply=$('queso-reply'),confetti=$('queso-confetti'),response=$('queso-response'),count=$('queso-count');
 if(!photo||!reply||!confetti)return;
 let greetings=Number(localStorage.getItem('akuyrium-queso-greetings')||0);
 count.textContent=greetings;
 const lines=['hiii!! ♨','hello human. i am cuatro queso.','you found me. excellent.','*round little nod*','queso queso queso!!!','thank you for visiting my very serious page.'];
 reply.addEventListener('click',()=>{greetings++;localStorage.setItem('akuyrium-queso-greetings',greetings);count.textContent=greetings;response.textContent=lines[Math.floor(Math.random()*lines.length)];photo.classList.remove('queso-boing');void photo.offsetWidth;photo.classList.add('queso-boing')});
 photo.addEventListener('click',()=>{photo.classList.remove('queso-boing');void photo.offsetWidth;photo.classList.add('queso-boing');response.textContent='boing. cuatro queso acknowledges your click.'});
 confetti.addEventListener('click',()=>{for(let i=0;i<22;i++){const bit=document.createElement('span');bit.className='queso-float';bit.textContent=['♨','✦','♡','◌'][Math.floor(Math.random()*4)];bit.style.left=(8+Math.random()*84)+'vw';bit.style.top=(55+Math.random()*35)+'vh';document.body.appendChild(bit);setTimeout(()=>bit.remove(),1900)}response.textContent='CHEESE EVERYWHERE. THIS IS NOT A DRILL.'});
})();




(() => {
 const intro = document.getElementById('lyluxs-bubble-intro');
 if (!intro) return;
 const removeIntro = () => { if (intro.isConnected) intro.remove(); };
 intro.addEventListener('animationend', removeIntro, {once:true});
 window.setTimeout(removeIntro, 3900);
})();
