# Villa Loulou — Site vitrine

Site vitrine multilingue pour **Villa Loulou**, villa de charme à Marrakech — résidence sécurisée avec gardien, 4 suites (chacune avec salle de bain et WC), piscine chauffée 14×4 m, jardin arboré 2600 m², proche Beldi Country Club.

## Stack

- **[Astro](https://astro.build)** 6 — génération statique
- **[Tailwind CSS](https://tailwindcss.com)** 4 — styles
- **i18n** — 5 langues (FR, EN, IT, ES, AR), français par défaut, choix via le sélecteur
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

- Français par défaut sur `/`. Changement de langue uniquement via le sélecteur dans le header.

## Structure du projet

```
villa-Loulou/
├── api/              # Vercel serverless (contact → Resend)
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

Le formulaire envoie en POST vers `/api/contact`. Une **fonction serverless Vercel** (`api/contact.js`) envoie l’email via Resend. Le build Astro reste **statique** (pas d’adaptateur Vercel).

### Variables d’environnement (local et prod)

- **Local** : copier `.env.example` en `.env` et remplir les valeurs. Avec `npm run dev`, un petit serveur expose `/api/contact` et charge le `.env` (tu peux tester le formulaire et recevoir les mails sur `RESEND_TO`).
- **Vercel** : dans le projet → Settings → Environment Variables, ajouter pour **Production** (et Preview si besoin) :
  - `RESEND_API_KEY` — clé API Resend
  - `RESEND_FROM` — expéditeur (ex. `contact@villa-loulou.com`, domaine vérifié dans Resend)
  - `RESEND_TO` — destinataire(s), séparés par des virgules

Sans ces variables, le formulaire renverra une erreur côté serveur.

## Design

- Thème « terres de Marrakech » : terracotta, sable, crème, ocre.
- Polices : Cormorant Garamond (titres), DM Sans (texte), Cairo (arabe RTL).
- Responsive, menu burger sur mobile, sélecteur de langue à côté du burger.

## Licence

Projet privé — Tous droits réservés.
