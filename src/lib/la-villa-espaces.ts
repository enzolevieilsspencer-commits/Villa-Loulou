/**
 * Données partagées des espaces de la villa (clés i18n + images).
 * Les libellés et amenities sont résolus via t('laVilla.' + labelKey) et t('laVilla.' + amenityKey).
 */
export interface EspaceImage {
  src: string;
  alt: string;
}

export interface EspaceData {
  id: string;
  labelKey: string;
  amenityKeys: string[];
  images: EspaceImage[];
}

export const espacesData: EspaceData[] = [
  {
    id: 'salon',
    labelKey: 'spaceSalon',
    amenityKeys: ['amenityChauffage', 'amenityCheminee', 'amenityClimatisation', 'amenitySystemeAudio', 'amenityTelevision'],
    images: [
      { src: '/images/Hall-entree.jpg', alt: 'Hall d\'entrée de la Villa Loulou' },
      { src: '/images/Salon1.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon2.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon3.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon4.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon5.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon6.jpg', alt: 'Salon Villa Loulou' },
      { src: '/images/Salon7.jpg', alt: 'Salon Villa Loulou' },
    ],
  },
  {
    id: 'cuisine',
    labelKey: 'spaceCuisine',
    amenityKeys: ['amenityRefrigerateur', 'amenityFour', 'amenityMicroOndes', 'amenityMachineCafe', 'amenityEquipementComplet'],
    images: [
      { src: '/images/Cuisine1.jpg', alt: 'Cuisine équipée Villa Loulou' },
      { src: '/images/Cuisine2.jpg', alt: 'Cuisine Villa Loulou' },
      { src: '/images/Cuisine3.jpg', alt: 'Cuisine Villa Loulou' },
    ],
  },
  {
    id: 'chambre-1',
    labelKey: 'spaceChambre1',
    amenityKeys: ['amenityLitDouble', 'amenityClimatisation', 'amenityDressing', 'amenityLingeLit'],
    images: [
      { src: '/images/Chambre1-1.jpg', alt: 'Chambre 1 Villa Loulou' },
      { src: '/images/Chambre1-2.jpg', alt: 'Chambre 1 Villa Loulou' },
    ],
  },
  {
    id: 'chambre-2',
    labelKey: 'spaceChambre2',
    amenityKeys: ['amenityLitDouble', 'amenityClimatisation', 'amenityDressing', 'amenityLingeLit'],
    images: [
      { src: '/images/Chambre2-1.jpg', alt: 'Chambre 2 Villa Loulou' },
      { src: '/images/Chambre2-2.jpg', alt: 'Chambre 2 Villa Loulou' },
    ],
  },
  {
    id: 'chambre-3',
    labelKey: 'spaceChambre3',
    amenityKeys: ['amenityLitDouble', 'amenityClimatisation', 'amenityDressing', 'amenityLingeLit'],
    images: [
      { src: '/images/Chambre3-1.jpg', alt: 'Chambre 3 Villa Loulou' },
      { src: '/images/Chambre3-2.jpg', alt: 'Chambre 3 Villa Loulou' },
      { src: '/images/Chambre3-3.jpg', alt: 'Chambre 3 Villa Loulou' },
    ],
  },
  {
    id: 'chambre-4',
    labelKey: 'spaceChambre4',
    amenityKeys: ['amenityLitDouble', 'amenityClimatisation', 'amenityDressing', 'amenityLingeLit'],
    images: [
      { src: '/images/Chambre4-1.jpg', alt: 'Chambre 4 Villa Loulou' },
      { src: '/images/Chambre4-2.jpg', alt: 'Chambre 4 Villa Loulou' },
      { src: '/images/Chambre4-3.jpg', alt: 'Chambre 4 Villa Loulou' },
    ],
  },
  {
    id: 'piscine',
    labelKey: 'spacePiscine',
    amenityKeys: ['amenityPiscineChauffee', 'amenityTransats', 'amenityParasols', 'amenityVueAtlas'],
    images: [
      { src: '/images/Piscine1.jpg', alt: 'Piscine privée Villa Loulou' },
      { src: '/images/Piscine2.jpg', alt: 'Piscine et transats Villa Loulou' },
      { src: '/images/lit-piscine.jpg', alt: 'Lit et piscine Villa Loulou' },
    ],
  },
  {
    id: 'jardin',
    labelKey: 'spaceJardin',
    amenityKeys: ['amenityTerrasse', 'amenitySalonJardin', 'amenityTableManger', 'amenityMiniBarExterieur', 'amenityDoucheExterieure'],
    images: [
      { src: '/images/Jardin1.jpg', alt: 'Jardin Villa Loulou' },
      { src: '/images/Jardin2.jpg', alt: 'Jardin Villa Loulou' },
      { src: '/images/Terasse-Salon.jpg', alt: 'Terrasse salon Villa Loulou' },
      { src: '/images/Terasse-Table-a-manger.jpg', alt: 'Terrasse table à manger Villa Loulou' },
      { src: '/images/Terasse-mini-bar.jpg', alt: 'Terrasse mini-bar Villa Loulou' },
    ],
  },
  {
    id: 'sdb-1',
    labelKey: 'spaceSdb1',
    amenityKeys: ['amenityDouche', 'amenityLavabo', 'amenityArticlesToilette'],
    images: [
      { src: '/images/Douche1-1.jpg', alt: 'Salle de bain 1 Villa Loulou' },
      { src: '/images/Douche1-2.jpg', alt: 'Salle de bain 1 Villa Loulou' },
    ],
  },
  {
    id: 'sdb-2',
    labelKey: 'spaceSdb2',
    amenityKeys: ['amenityDouche', 'amenityLavabo', 'amenityArticlesToilette'],
    images: [
      { src: '/images/Douche2-1.jpg', alt: 'Salle de bain 2 Villa Loulou' },
      { src: '/images/Douche2-2.jpg', alt: 'Salle de bain 2 Villa Loulou' },
    ],
  },
  {
    id: 'sdb-3',
    labelKey: 'spaceSdb3',
    amenityKeys: ['amenityDouche', 'amenityLavabo', 'amenityArticlesToilette'],
    images: [
      { src: '/images/Douche3-1.jpg', alt: 'Salle de bain 3 Villa Loulou' },
      { src: '/images/Douche3-2.jpg', alt: 'Salle de bain 3 Villa Loulou' },
      { src: '/images/Douche3-3.jpg', alt: 'Salle de bain 3 Villa Loulou' },
    ],
  },
  {
    id: 'sdb-4',
    labelKey: 'spaceSdb4',
    amenityKeys: ['amenityDouche', 'amenityLavabo', 'amenityArticlesToilette'],
    images: [
      { src: '/images/Douche4-1.jpg', alt: 'Salle de bain 4 Villa Loulou' },
      { src: '/images/Douche4-2.jpg', alt: 'Salle de bain 4 Villa Loulou' },
    ],
  },
  {
    id: 'toilettes',
    labelKey: 'spaceToilettes',
    amenityKeys: ['amenityLavabo', 'amenityArticlesToilette'],
    images: [
      { src: '/images/Toilette-lavabo1.jpg', alt: 'Toilette lavabo Villa Loulou' },
      { src: '/images/toilette-lavabo2.jpg', alt: 'Toilette lavabo Villa Loulou' },
    ],
  },
  {
    id: 'hammam',
    labelKey: 'spaceHammam',
    amenityKeys: ['amenityHammamTraditionnel', 'amenityEspaceDetente'],
    images: [
      { src: '/images/hammam.jpg', alt: 'Hammam Villa Loulou' },
      { src: '/images/hammam1.png', alt: 'Hammam Villa Loulou' },
      { src: '/images/hammam2.png', alt: 'Hammam Villa Loulou' },
    ],
  },
];

const espaceById = Object.fromEntries(espacesData.map((e) => [e.id, e]));

export const viewsData = [
  { id: 'salon', espaces: [espaceById['salon']!] },
  { id: 'chambres', espaces: [espaceById['chambre-1']!, espaceById['chambre-2']!, espaceById['chambre-3']!, espaceById['chambre-4']!] },
  { id: 'sdb', espaces: [espaceById['sdb-1']!, espaceById['sdb-2']!, espaceById['sdb-3']!, espaceById['sdb-4']!] },
  { id: 'piscine', espaces: [espaceById['piscine']!] },
  { id: 'hammam', espaces: [espaceById['hammam']!] },
  { id: 'jardin', espaces: [espaceById['jardin']!] },
  { id: 'cuisine', espaces: [espaceById['cuisine']!] },
  { id: 'toilettes', espaces: [espaceById['toilettes']!] },
];
