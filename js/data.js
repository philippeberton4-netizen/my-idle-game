// Données de démonstration : plus tard, elles viendront de l'état réel du jeu.
const GAME = {
  kamas: 1250,
  xp: 3480,
  zone: { name: "Champs d'Astrub", room: 'Salle 3 / 8' },
  menu: [
    { id: 'combat',      label: 'Combat',       icon: '⚔️' },
    { id: 'persos',      label: 'Personnages',  icon: '🧙' },
    { id: 'metiers',     label: 'Métiers',      icon: '⛏️' },
    { id: 'inventaire',  label: 'Inventaire',   icon: '🎒' },
    { id: 'succes',      label: 'Succès',       icon: '🏆' },
    { id: 'sauvegardes', label: 'Sauvegardes',  icon: '💾' }
  ],
  characters: [
    { name: 'Aldric', cls: 'Iop',      icon: '⚔️', level: 12, hp: 140, hpMax: 180, activity: 'Combat',
      stats: { VIT: 40, FOR: 62, INT: 10, CHA: 8,  AGI: 20, SAG: 9 } },
    { name: 'Mira',   cls: 'Crâ',      icon: '🏹', level: 9,  hp: 90,  hpMax: 110, activity: 'Combat',
      stats: { VIT: 25, FOR: 12, INT: 30, CHA: 10, AGI: 45, SAG: 11 } },
    { name: 'Tobi',   cls: 'Eniripsa', icon: '✨', level: 5,  hp: 60,  hpMax: 70,  activity: 'Bûcheron',
      stats: { VIT: 18, FOR: 5,  INT: 28, CHA: 6,  AGI: 10, SAG: 22 } }
  ],
  enemies: [
    { name: 'Piou',    icon: '🐤', hp: 10, hpMax: 20 },
    { name: 'Tofu',    icon: '🐦', hp: 25, hpMax: 30 },
    { name: 'Bouftou', icon: '🐑', hp: 45, hpMax: 60 }
  ],
  session: { 'Combats gagnés': 12, 'Monstres tués': 37, 'XP gagnée': 3480, 'Kamas gagnés': 1250, 'Drops reçus': 9 },
  drops: ['Laine de Bouftou', 'Plume de Piou', 'Kamas ×25'],
  log: [
    'Aldric lance Coup de Poing → Bouftou prend 18 dégâts',
    'Mira lance Flèche Magique → Tofu prend 12 dégâts',
    'Bouftou lance Charge → Aldric prend 9 dégâts',
    'Piou est vaincu ! +4 XP',
    'Aldric lance Coup de Poing → Bouftou prend 21 dégâts'
  ]
};
