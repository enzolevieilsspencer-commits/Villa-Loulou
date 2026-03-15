# Villa Loulou — Site vitrine

Site vitrine multilingue pour **Villa Loulou**, villa de charme à Marrakech (4 chambres, piscine, hammam, proche Beldi Country Club).

## Stack

- **[Astro](https://astro.build)** 6 — génération statique
- **[Tailwind CSS](https://tailwindcss.com)** 4 — styles
- **i18n** — 5 langues (FR, EN, IT, ES, AR) avec détection navigateur
- **[Leaflet](https://leafletjs.com)** — cartes (localisation villa)
- **[Flatpickr](https://flatpickr.js.org)** — sélecteur de dates (formulaire contact)
- **[Resend](https://resend.com)** — envoi d’emails (formulaire contact)
- **unplugin-icons** + **@iconify-json/mdi** — icônes

## Langues et URLs

| Langue   | Code | URL (exemple)   |
|----------|------|-----------------|
| Français | `fr` | `/` (défaut)    |
| English  | `en` | `/en/`          |
| Italiano | `it` | `/it/`          |
| Español  | `es` | `/es/`          |
| العربية  | `ar` | `/ar/` (RTL)    |

- La langue est détectée au premier passage sur la page d’accueil (cookie `villa-loulou-locale`).
- Le choix manuel dans le header est mémorisé pour les visites suivantes.

## Structure du projet

```
villa-Loulou/
├── public/           # Assets statiques (images, fonts, favicon)
├── src/
│   ├── components/   # Header, Footer, Logo
│   ├── i18n/         # fr.json, en.json, it.json, es.json, ar.json
│   ├── layouts/      # Layout.astro (HTML, meta, i18n)
│   ├── lib/          # i18n.ts (getTranslations, pathForLocale)
│   ├── pages/        # Pages racine (FR) + en/, it/, es/, ar/
│   └── styles/       # global.css (design tokens, Tailwind)
├── astro.config.mjs
├── package.json
└── README.md
```

## Scripts

```bash
# Développement (port 4321)
npm run dev

# Build statique
npm run build

# Prévisualisation du build
npm preview
```

## Pages

- **Accueil** — Hero, présentation, points forts, galerie, témoignages, CTA
- **La Villa** — Présentation, espaces, équipements, localisation (carte)
- **Nos services** — Inclus / supplément, expérience, FAQ
- **Contact** — Formulaire (dates, voyageurs, message) + carte
- **Mentions légales** — Page légale
- **Politique de confidentialité** — Page légale

## Formulaire de contact

Le formulaire envoie en POST vers `/api/contact`. Une route API ou un service (ex. Resend) doit traiter l’envoi d’email (à configurer selon l’hébergement).

## Design

- Thème « terres de Marrakech » : terracotta, sable, crème, ocre.
- Polices : Cormorant Garamond (titres), DM Sans (texte), Cairo (arabe RTL).
- Responsive, menu burger sur mobile, sélecteur de langue à côté du burger.

## Licence

Projet privé — Tous droits réservés.
