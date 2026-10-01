const $ = id => document.getElementById(id);
const pct = (a, b) => Math.round(a / b * 100);
let curChar = 0;

function renderTopbar() {
  $('res-kamas').textContent = GAME.kamas.toLocaleString('fr-FR');
  $('res-xp').textContent = GAME.xp.toLocaleString('fr-FR');
}

function renderMenu() {
  $('menu').innerHTML = GAME.menu
    .map(m => `<button class="menu-btn" data-view="${m.id}">${m.icon} ${m.label}</button>`).join('');
  // Les sections pas encore développées sont des pages vides
  GAME.menu.filter(m => m.id !== 'combat').forEach(m => {
    const s = document.createElement('section');
    s.className = 'view';
    s.id = 'view-' + m.id;
    s.innerHTML = `<div class="panel"><h3>${m.label}</h3><p>Cette section arrive bientôt.</p></div>`;
    $('main').appendChild(s);
  });
  $('menu').onclick = e => {
    const b = e.target.closest('.menu-btn');
    if (b) showView(b.dataset.view);
  };
}

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + id));
  document.querySelectorAll('.menu-btn').forEach(b => b.classList.toggle('active', b.dataset.view === id));
}

function renderChars() {
  $('chars').innerHTML = GAME.characters.map((c, i) =>
    `<button class="slot${i === curChar ? ' active' : ''}" data-i="${i}">
       <b>${c.icon} ${c.name}</b><br><small>Nv.${c.level} ${c.cls} · ${c.activity}</small>
     </button>`).join('') + '<button class="slot add" disabled>+ Créer un personnage</button>';
}

function renderCharPanel() {
  const c = GAME.characters[curChar];
  const stats = Object.entries(c.stats)
    .map(([k, v]) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`).join('');
  $('charpanel').innerHTML =
    `<h3>${c.cls} · Nv.${c.level}</h3>
     <div class="portrait">${c.icon}</div>
     <b>${c.name}</b>
     <div class="bar hp"><i style="width:${pct(c.hp, c.hpMax)}%"></i></div>
     <small>${c.hp} / ${c.hpMax} PV</small>
     <h3 style="margin-top:.8rem">Caractéristiques</h3>
     <div class="stats">${stats}</div>
     <div class="btnrow"><button class="btn">Inventaire</button><button class="btn">Sorts</button></div>`;
}

const sprite = x =>
  `<div class="sprite"><div class="e">${x.icon}</div>
   <div class="bar hp"><i style="width:${pct(x.hp, x.hpMax)}%"></i></div><small>${x.name}</small></div>`;

function renderScene() {
  $('zone-name').textContent = GAME.zone.name;
  $('zone-room').textContent = GAME.zone.room;
  $('allies').innerHTML = GAME.characters.filter(c => c.activity === 'Combat').map(sprite).join('');
  $('enemies').innerHTML = GAME.enemies.map(sprite).join('');
  $('log').innerHTML = GAME.log.map(l => `<div>${l}</div>`).join('');
}

function renderSide() {
  $('session').innerHTML = Object.entries(GAME.session)
    .map(([k, v]) => `<div><span>${k}</span><b>${v.toLocaleString('fr-FR')}</b></div>`).join('');
  $('drops').innerHTML = GAME.drops.map(d => `<li>${d}</li>`).join('');
}

$('chars').onclick = e => {
  const b = e.target.closest('.slot[data-i]');
  if (!b) return;
  curChar = +b.dataset.i;
  renderChars();
  renderCharPanel();
};

// Barre de tour : simple animation de démonstration (10 s)
let t = 0;
setInterval(() => { t = (t + 1) % 100; $('turn-fill').style.width = t + '%'; }, 100);

renderTopbar(); renderMenu(); renderChars(); renderCharPanel(); renderScene(); renderSide();
showView('combat');
