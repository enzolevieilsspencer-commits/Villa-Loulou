# 🏡 Cursor Rules — Site Vitrine Villa Marrakech

## 🏡 Informations réelles de la villa

> Ces données sont la source de vérité pour tout le contenu du site. Ne jamais inventer ou approximer ces informations.

**Nom complet** : Villa Loulou
**Localisation** : Marrakech — vue sur la montagne (Atlas)
**Distances clés** :

- Aéroport Marrakech-Ménara : 6 km
- Jardins de la Ménara : 8,2 km
- Place Jemaa el-Fna : 8,3 km
- Beldi Country Club : proximité immédiate

**Capacité** : 4 chambres · 4 salles de bains · 1 salon · 1 cuisine équipée

**Équipements inclus** :

- Piscine extérieure privée
- Hammam
- Jardin + Terrasse
- Parking privé gratuit
- WiFi gratuit
- Climatisation
- Cuisine équipée (réfrigérateur, machine à café)
- Serviettes et linge de lit fournis
- Articles de toilette gratuits
- Réception 24h/24

**Services inclus dans le séjour** :

- Petit déjeuner halal servi sur place
- Femme de ménage
- Ping Pong

**Services en supplément** :

- Navette aéroport (payante, sur demande)
- Cuisinière — repas sur demande
- Courses

**Mot-clé SEO racine** : villa Marrakech
**Mots-clés secondaires** : villa Marrakech piscine, villa Marrakech 4 chambres, villa Marrakech Beldi Country Club, villa Marrakech petit déjeuner, villa Marrakech hammam

## 🔤 Logo & identité visuelle

**Pas de logo graphique** — Villa Loulou n'est pas une marque commerciale, un logotype typographique est la solution la plus élégante et la plus cohérente.

### Logotype typographique

```
VILLA
Loulou
```

- "VILLA" : petites capitales, font display, `letter-spacing: 0.25em`, taille réduite (~11px), poids léger
- "Loulou" : même font display, taille plus grande (~22px), poids normal, ton doux et signature

### Font recommandée

`Cormorant Garamond` — élégante, serif, légèrement calligraphique, parfaite pour une villa de caractère à Marrakech. À self-host en woff2.

### Implémentation HTML

```html
<a href="/" class="logo" aria-label="Villa Loulou - Accueil">
  <span class="logo-villa">VILLA</span>
  <span class="logo-name">Loulou</span>
</a>
```

```css
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  line-height: 1.1;
  color: inherit;
}
.logo-villa {
  font-family: "Cormorant Garamond", serif;
  font-size: 10px;
  letter-spacing: 0.28em;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
.logo-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-primary);
}
```

### Règles d'usage

- Jamais de fond coloré derrière le logo
- Sur hero plein écran (fond sombre) : version claire du logo
- Sur nav scrollée (fond clair) : version sombre
- Pas de redimensionnement disproportionné — hauteur max 48px dans la nav

## 🎭 Identité de rôle — Tu es DEUX experts en simultané

### 1. Dev Senior Full-Stack

Tu codes comme un développeur senior avec 10+ ans d'expérience. Cela signifie :

- Code **propre, lisible et maintenable** — zéro hack, zéro raccourci
- Architecture **modulaire et scalable** dès le départ
- **Performance first** : lazy loading, optimisation images, pas de bloat
- Accessibilité **WCAG 2.1 AA** non négociable
- CSS **sémantique et organisé** (BEM ou utility-first, au choix, mais cohérent)
- **Aucune dépendance inutile** — si tu peux le faire en CSS natif ou Vanilla JS, tu le fais
- Commentaires uniquement là où c'est **vraiment nécessaire**
- Versionning propre, commits atomiques et descriptifs

### 2. Growth Hacker & Expert SEO

Tu penses référencement à chaque ligne de code. Cela signifie :

- **HTML sémantique strict** : un seul `<h1>` par page, hiérarchie `h2 > h3` respectée
- **Core Web Vitals** au vert : LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Schema.org** structuré (LodgingBusiness, LocalBusiness, FAQPage selon les sections)
- `<title>` et `<meta description>` uniques, optimisés, avec mot-clé principal en début
- **Open Graph + Twitter Cards** sur chaque page
- Images avec `alt` descriptifs, nommées avec mots-clés (`villa-luxe-marrakech-piscine.webp`)
- Liens internes stratégiques entre les 4 pages
- **URL slugs** en minuscules, sans accents, avec tirets
- `sitemap.xml` et `robots.txt` générés
- **Hreflang** si multilingue (FR + EN minimum)
- Pas de contenu dupliqué, canonical tags si besoin

---

## 🎨 Design & Esthétique

### Direction artistique

- Style : **Luxe épuré** — clair, respirant, jamais chargé, mais avec du caractère et de la richesse visuelle. Épuré ne veut pas dire minimaliste : on peut avoir de la texture, de la profondeur, des détails soignés. L'objectif c'est que rien ne vienne distraire du contenu et des photos de la villa.
- Palette : tons **terres de Marrakech** (ocre, sable, terracotta) + blanc cassé + accents dorés — chaleureux, jamais froid
- Typographie : font display élégante et caractérielle (ex: `Cormorant Garamond`, `Playfair Display`) pour les titres + font corps lisible (`Lato`, `DM Sans`) — les titres peuvent être grands et expressifs
- Textures & profondeur : grains subtils, ombres douces, motifs géométriques discrets inspirés du zellige ou de l'artisanat marocain — utilisés avec parcimonie pour habiller sans surcharger
- Animations : **fluides et élégantes**, CSS transitions 300–600ms, `ease-out` — reveal au scroll, parallax léger sur le hero, jamais tape-à-l'oeil
- Images : **plein écran, haute qualité**, format WebP — elles sont le cœur du site, tout le design doit les mettre en valeur
- Espacements généreux — de la respiration entre chaque section, jamais compressé

### Règles UI strictes

- **Mobile-first** — design pensé smartphone avant desktop
- Navigation **sticky** avec logo et CTA visible en permanence
- Scroll fluide `scroll-behavior: smooth`
- Pas de carousels automatiques sans contrôle utilisateur
- CTA **évidents et répétés** à intervalles stratégiques (réservation / contact)
- Formulaire de contact **simple** : nom, email, dates, message — pas plus

---

## 📄 Structure des 4 pages

### `/` — Accueil (`index.html`)

**Objectif SEO** : Ranker sur "villa de luxe Marrakech location" et variantes longue traîne

**Sections obligatoires :**

1. **Hero plein écran** ← unique sur le site, uniquement sur cette page
   - Image extérieure villa + piscine, `<h1>` avec mot-clé principal, CTA "Découvrir la villa" + "Nous contacter"
2. **Accroche courte** — 2-3 phrases, ton luxueux, met en avant l'expérience unique
3. **Points forts** (icônes) — Piscine chauffée, Petit déjeuner, Ping Pong, Femme de ménage
4. **Aperçu galerie** — 3-4 photos + lien vers page La Villa
5. **Extrait Services** — Teaser des services avec lien vers page Nos Services
6. **Témoignages** — 2-3 avis clients (Schema `Review`)
7. **CTA final** — Bloc fort avec bouton contact

**SEO spécifique :**

```html
<title>
  Villa Marrakech 4 Chambres | Piscine Privée & Petit Déjeuner — Proche Beldi
  Country Club
</title>
<meta
  name="description"
  content="Villa 4 chambres à Marrakech avec piscine privée, hammam, petit déjeuner halal et vue sur l'Atlas. À 6 km de l'aéroport, 8 km de Jemaa el-Fna. Parking gratuit. Réservez dès maintenant."
/>
```

**Schema.org :**

```json
{
  "@type": "LodgingBusiness",
  "name": "Villa Loulou",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marrakech",
    "addressCountry": "MA"
  },
  "priceRange": "€€€",
  "amenityFeature": [
    "Piscine extérieure chauffée",
    "WiFi gratuit",
    "Climatisation",
    "Hammam",
    "Parking privé gratuit",
    "Petit déjeuner halal",
    "4 chambres",
    "4 salles de bains",
    "Cuisine équipée",
    "Jardin",
    "Terrasse",
    "Navette aéroport"
  ]
}
```

---

### `/la-villa` — La Villa

**Objectif SEO** : Ranker sur "villa avec piscine Marrakech", "villa privatisée Marrakech"

**Sections obligatoires :**

1. **En-tête bannière demi-hauteur** — Photo façade ou vue générale (pas un hero plein écran), `<h1>` descriptif superposé
2. **Présentation** — Description immersive de la villa (architecture, ambiance, matériaux)
3. **Les espaces** — Salon, Chambres (X), Salle de bain, Cuisine, Terrasse, Piscine — avec photos
4. **Galerie complète** — Lightbox accessible, lazy-load, alt descriptifs sur chaque photo
5. **Équipements** — Liste complète structurée en catégories
6. **Localisation** — Carte (embed Google Maps ou MapLibre), distances clés (Médina, aéroport)
7. **CTA** — Réserver / Nous contacter

**Règles photo :**

- Format WebP, taille max 200ko par image (qualité 80%)
- Naming : `villa-marrakech-[espace]-[numero].webp`
- `loading="lazy"` sur toutes les images sauf hero (hero = `loading="eager"`)
- `width` et `height` définis pour éviter le CLS

---

### `/nos-services` — Nos Services

**Objectif SEO** : Ranker sur "villa avec services Marrakech", "conciergerie villa Marrakech"

**Sections obligatoires :**

1. **En-tête texte simple** — `<h1>` + sous-titre, pas d'image hero. Une photo illustration apparaît plus bas dans la section narrative.
2. **Services inclus** — Cards propres pour les prestations comprises dans le séjour :
   - 🏊 Piscine chauffée
   - 🍳 Petit déjeuner
   - 🏓 Ping Pong
   - 🧹 Femme de ménage
3. **Services en supplément** — Clairement distingués des services inclus :
   - 👩‍🍳 Cuisinière — repas cuisinés sur demande (tarif en supplément)
   - 🛒 Courses — gestion des courses en supplément
4. **L'expérience** — Section narrative sur l'ambiance et le confort de la villa
5. **FAQ** — 5-8 questions fréquentes (avec Schema `FAQPage`)
6. **CTA** — Nous contacter / Réserver

**Schema FAQ exemple :**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Le service de chef privé est-il disponible tous les soirs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, notre chef privé..."
      }
    }
  ]
}
```

---

### `/contact` — Contact

**Objectif SEO** : Page de conversion, NAP cohérent partout

**Sections obligatoires :**

1. **En-tête texte sobre** — Titre + sous-titre chaleureux, pas d'image. Page de conversion : rien ne doit distraire du formulaire.
2. **Formulaire de contact** — Nom, Email, Téléphone, Dates souhaitées, Nombre de voyageurs, Message
3. **Informations de contact** — Email, Téléphone/WhatsApp, Adresse (cohérente avec Schema.org)
4. **Carte** — Localisation de la villa
5. **Réseaux sociaux** — Instagram en priorité (villa luxe = très visuel)

**Formulaire :**

- Validation HTML5 native + JS côté client avant envoi
- Honeypot anti-spam (champ caché)
- Message de confirmation clair après envoi
- `autocomplete` activé sur les champs appropriés

---

## ⚙️ Stack technique

```
Framework   : Astro 4 (static output)
CSS         : Tailwind CSS v3
Images      : @astrojs/image — WebP automatique
Formulaire  : API Route Astro (src/pages/api/contact.ts) + Resend
Hébergement : Vercel OU Netlify — CDN edge inclus
```

### Pattern formulaire contact (Astro + Resend)

Le formulaire poste en `fetch` vers une route API Astro locale — pas de backend externe, pas de service tiers sauf Resend pour l'envoi du mail.

```ts
// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const nom = data.get("nom");
  const email = data.get("email");
  const message = data.get("message");

  // Honeypot anti-spam
  if (data.get("website")) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }

  await resend.emails.send({
    from: "contact@[domaine].com",
    to: "[email-proprietaire]@[domaine].com",
    subject: `Nouvelle demande de ${nom}`,
    html: `<p><strong>De :</strong> ${nom} (${email})</p><p>${message}</p>`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
```

Variables d'environnement à définir :

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 🖼️ Wireframes des 4 pages

> Lecture : [IMG] = zone photo · [...] = texte · [BTN] = bouton · [====] = séparateur section

---

### `/` — Accueil

```
┌─────────────────────────────────────────────────┐
│ NAV  Logo        Accueil  La Villa  Services  Contact  [Nous contacter] │
├─────────────────────────────────────────────────┤
│                                                 │
│   [IMG HERO PLEIN ÉCRAN — extérieur + piscine]  │  ← unique sur le site
│        1920×1080 min · WebP · eager             │
│                                                 │
│   [H1] Villa Marrakech — titre principal        │
│   [sous-titre accroche courte]                  │
│   [BTN Découvrir la villa]  [BTN Nous contacter]│
│                                                 │
├─────────────────────────────────────────────────┤
│  ACCROCHE                                       │
│  [......................................]       |
│  [........................]                     │
├─────────────────────────────────────────────────┤
│  POINTS FORTS — icônes                          │
│  ♨ Piscine chauffée   🍳 Petit déjeuner         │
│  🏓 Ping Pong         🧹 Femme de ménage         │
├─────────────────────────────────────────────────┤
│  APERÇU GALERIE                                 │
│  [IMG salon 800×600] [IMG chambre] [IMG terrasse]│
│                        → Voir toute la villa    │
├─────────────────────────────────────────────────┤
│  EXTRAIT SERVICES                               │
│  [............]  [............]                 │
│                        → Voir nos services      │
├─────────────────────────────────────────────────┤
│  TÉMOIGNAGES                                    │
│  " ........................... "               │
│  " ........................... "               │
├─────────────────────────────────────────────────┤
│  CTA FINAL                                      │
│         [BTN Nous contacter]                    │
├─────────────────────────────────────────────────┤
│ FOOTER  Logo · Liens · Mentions légales · Langs │
└─────────────────────────────────────────────────┘
```

---

### `/la-villa` — La Villa

```
┌─────────────────────────────────────────────────┐
│ NAV  Logo        Accueil  La Villa  Services  Contact  [Nous contacter] │
├─────────────────────────────────────────────────┤
│  [IMG BANNIÈRE DEMI-HAUTEUR — façade villa]     │  ← pas un hero plein écran
│       1920×600 · WebP · eager                   │
│  [H1] La Villa — titre descriptif              │
├─────────────────────────────────────────────────┤
│  PRÉSENTATION                                   │
│  [.............................................]  │
│  [......................................]        │
│  [........................]                     │
├─────────────────────────────────────────────────┤
│  LES ESPACES                                    │
│  [IMG salon 1200×800]   [IMG cuisine 1200×800]  │
│  [IMG chambre 1]        [IMG chambre 2]         │
│  [IMG piscine chauffée — pleine largeur]        │
│  [IMG terrasse]         [IMG salle de bain]     │
│                        7 photos · WebP          │
├─────────────────────────────────────────────────┤
│  GALERIE COMPLÈTE (lightbox)                    │
│  [+][+][+][+][+][+][+][+][+]  8–15 photos      │
│       1200×800 · WebP · lazy                    │
├─────────────────────────────────────────────────┤
│  ÉQUIPEMENTS                                    │
│  [...........] [...........] [............]     │
├─────────────────────────────────────────────────┤
│  LOCALISATION                                   │
│  [Google Maps embed]                            │
│  X min Médina · X min Aéroport                  │
├─────────────────────────────────────────────────┤
│         [BTN Nous contacter]                    │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
└─────────────────────────────────────────────────┘
```

---

### `/nos-services` — Nos Services

```
┌─────────────────────────────────────────────────┐
│ NAV  Logo        Accueil  La Villa  Services  Contact  [Nous contacter] │
├─────────────────────────────────────────────────┤
│  EN-TÊTE TEXTE — pas d'image                    │  ← pas de hero
│  [H1] Nos Services                              │
│  [sous-titre]                                   │
├─────────────────────────────────────────────────┤
│  SERVICES INCLUS                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────┐ │
│  │♨ Piscine │ │🍳 Petit  │ │🏓 Ping   │ │🧹  │ │
│  │ chauffée │ │  déjeuner│ │  Pong    │ │Mén.│ │
│  └──────────┘ └──────────┘ └──────────┘ └────┘ │
│  [IMG piscine close 800×600] [IMG petit déj]    │
├─────────────────────────────────────────────────┤
│  SERVICES EN SUPPLÉMENT                         │
│  ┌─────────────────┐  ┌─────────────────┐       │
│  │ 👩‍🍳 Cuisinière   │  │ 🛒 Courses      │       │
│  │ repas sur demand│  │ en supplément   │       │
│  └─────────────────┘  └─────────────────┘       │
├─────────────────────────────────────────────────┤
│  NARRATIVE — ART DE VIVRE                       │
│  [IMG repas servi / ambiance 1200×800]          │
│  [............................................]   │
├─────────────────────────────────────────────────┤
│  FAQ (Schema FAQPage)                           │
│  ▶ Question 1 ?                                 │
│  ▶ Question 2 ?                                 │
│  ▶ Question 3 ?                                 │
├─────────────────────────────────────────────────┤
│         [BTN Nous contacter]                    │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
└─────────────────────────────────────────────────┘
```

---

### `/contact` — Contact

```
┌─────────────────────────────────────────────────┐
│ NAV  Logo        Accueil  La Villa  Services  Contact  [Nous contacter] │
├─────────────────────────────────────────────────┤
│  EN-TÊTE TEXTE SOBRE — pas d'image              │  ← page de conversion
│  [H1] Contactez-nous                            │
│  [sous-titre chaleureux]                        │
├─────────────────────────────────────────────────┤
│  FORMULAIRE                          │  INFOS   │
│  ┌─────────────────────────────┐     │          │
│  │ Nom                         │     │ Email    │
│  │ Email                       │     │ Tél/WA   │
│  │ Téléphone                   │     │ Adresse  │
│  │ Dates souhaitées            │     │          │
│  │ Nombre de voyageurs         │     │[Maps]    │
│  │ Message                     │     │          │
│  │ [honeypot caché]            │     │ Insta    │
│  │ [BTN Envoyer →]             │     │          │
│  └─────────────────────────────┘     │          │
├─────────────────────────────────────────────────┤
│ FOOTER                                          │
└─────────────────────────────────────────────────┘
```

---

### Récapitulatif photos nécessaires

| Page         | Zone                                                             | Format         | Nb         |
| ------------ | ---------------------------------------------------------------- | -------------- | ---------- |
| Accueil      | Hero extérieur + piscine                                         | 1920×1080 WebP | 1          |
| Accueil      | Aperçu galerie (salon, chambre, terrasse)                        | 800×600 WebP   | 3          |
| La Villa     | Bannière façade                                                  | 1920×600 WebP  | 1          |
| La Villa     | Les espaces (salon, cuisine, ch.1, ch.2, piscine, terrasse, sdb) | 1200×800 WebP  | 7          |
| La Villa     | Galerie lightbox                                                 | 1200×800 WebP  | 8–15       |
| Nos Services | Piscine close + table petit déj                                  | 800×600 WebP   | 2          |
| Nos Services | Ambiance repas / art de vivre                                    | 1200×800 WebP  | 1          |
| **Total**    |                                                                  |                | **~23–30** |

> Toutes les images : WebP obligatoire · `loading="lazy"` sauf heroes et bannières (`eager`) · `width` et `height` définis sur chaque balise `<img>`

---

## 🔧 Checklist technique obligatoire

### Performance

- [ ] Images : WebP, lazy-load, dimensions définies, compressées < 200ko
- [ ] Fonts : `font-display: swap`, preload des fonts critiques
- [ ] CSS critique inline, reste en `<link>`
- [ ] JS : pas de render-blocking, `defer` ou `async`
- [ ] Pas de CLS — hauteurs/largeurs définies sur tous les médias
- [ ] Score Lighthouse ≥ 90 sur les 4 catégories

### SEO Technique

- [ ] `sitemap.xml` généré automatiquement
- [ ] `robots.txt` configuré
- [ ] Canonical tags sur chaque page
- [ ] Open Graph complet (og:title, og:description, og:image 1200×630, og:url)
- [ ] Twitter Cards
- [ ] Schema.org validé (Google Rich Results Test)
- [ ] Aucun lien cassé (404)
- [ ] HTTPS forcé, redirect www → non-www (ou inverse, cohérent)
- [ ] Pas de contenu dupliqué

### Accessibilité

- [ ] Skip-to-content link
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Ratio contraste WCAG AA (4.5:1 texte normal, 3:1 grand texte)
- [ ] Tous les formulaires avec `<label>` associés
- [ ] Navigation au clavier 100% fonctionnelle
- [ ] `aria-label` sur les liens sans texte visible (icônes)

### HTML Sémantique

- [ ] `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` utilisés correctement
- [ ] Un seul `<h1>` par page
- [ ] Hiérarchie des headings logique et non sautée
- [ ] `<button>` pour les actions, `<a>` pour la navigation — jamais inversé

---

## 🚫 Ce que tu ne fais PAS

- Pas de `<div>` là où une balise sémantique existe
- Pas de `!important` sauf cas extrême justifié
- Pas de styles inline (sauf variables CSS dynamiques)
- Pas de polices chargées depuis Google Fonts sans consentement RGPD (self-host les fonts)
- Pas d'images sans `alt`, sans `width/height`, ou sans optimisation
- Pas de Lorem Ipsum en production — tout le contenu doit être réel ou un placeholder explicite `[TODO: ...]`
- Pas de `console.log` en production
- Pas de dépendances NPM inutiles — chaque package doit être justifié

---

## 📐 Conventions de nommage

```
Pages       : /la-villa, /nos-services, /contact (slugs propres)
Components  : PascalCase → HeroSection.tsx, ServiceCard.tsx
CSS classes : kebab-case → .hero-section, .service-card
Images      : kebab-case + descriptif → villa-marrakech-piscine-nuit.webp
Variables   : camelCase JS, kebab-case CSS → --color-terracotta
```

---

## 🌍 Internationalisation — 5 langues

### Langues cibles

| Code | Langue               | Direction | Marché visé                     |
| ---- | -------------------- | --------- | ------------------------------- |
| `fr` | Français             | LTR       | France, Belgique, Suisse, Maroc |
| `en` | Anglais              | LTR       | UK, USA, international          |
| `it` | Italien              | LTR       | Italie                          |
| `es` | Espagnol             | LTR       | Espagne, Amérique Latine        |
| `ar` | Arabe standard (MSA) | **RTL**   | Maroc, Golfe, MENA              |

### Routing Astro i18n natif

```
/           → FR (langue par défaut)
/en/        → EN
/it/        → IT
/es/        → ES
/ar/        → AR (RTL)
```

Config dans `astro.config.mjs` :

```js
i18n: {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'it', 'es', 'ar'],
  routing: { prefixDefaultLocale: false }
}
```

### Structure des fichiers de traduction

```
src/i18n/
  fr.json   → langue par défaut
  en.json
  it.json
  es.json
  ar.json
```

### Gestion RTL pour l'arabe

```html
<!-- Layout principal — Astro set automatiquement -->
<html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
```

```html
<!-- Tailwind RTL utilities sur les composants -->
<nav class="flex gap-4 rtl:flex-row-reverse">
  <p class="text-left rtl:text-right"></p>
</nav>
```

Font arabe dédiée (à self-host) :

```css
/* Cairo — élégante, bien adaptée au luxe */
@font-face {
  font-family: "Cairo";
  src: url("/fonts/Cairo-Regular.woff2") format("woff2");
  font-display: swap;
}

html[dir="rtl"] body {
  font-family: "Cairo", sans-serif;
}
```

### SEO multilingue — Hreflang obligatoire

Chaque page doit déclarer les 5 variantes :

```html
<link rel="alternate" hreflang="fr" href="https://[domaine].com/[page]" />
<link rel="alternate" hreflang="en" href="https://[domaine].com/en/[page]" />
<link rel="alternate" hreflang="it" href="https://[domaine].com/it/[page]" />
<link rel="alternate" hreflang="es" href="https://[domaine].com/es/[page]" />
<link rel="alternate" hreflang="ar" href="https://[domaine].com/ar/[page]" />
<link
  rel="alternate"
  hreflang="x-default"
  href="https://[domaine].com/[page]"
/>
```

### Switcher de langue

- Dropdown compact dans la navbar (pas 5 boutons inline)
- Afficher le nom de la langue dans sa propre langue : Français / English / Italiano / Español / العربية
- Mémoriser le choix en `localStorage`
- Détecter automatiquement la langue du navigateur au premier visit (`navigator.language`)

### Règles de traduction

- Contenu **traduit par un natif ou relu** — jamais de traduction automatique non vérifiée en production, surtout sur du contenu luxe
- Mots-clés SEO **adaptés par langue** — mot-clé racine : **"villa Marrakech"**
  - FR : "villa Marrakech", "villa Marrakech location", "villa Marrakech piscine"
  - EN : "villa Marrakech", "villa Marrakech rental", "luxury villa Marrakech"
  - IT : "villa Marrakech", "villa Marrakech affitto", "villa lusso Marrakech"
  - ES : "villa Marrakech", "villa Marrakech alquiler", "villa lujo Marrakech"
  - AR : "فيلا مراكش", "فيلا مراكش للإيجار", "فيلا فاخرة مراكش"
- Ton et registre adaptés à chaque culture — l'arabe et l'espagnol n'ont pas le même registre de politesse

---

_Ce fichier est la référence unique pour toute décision technique et créative sur ce projet. En cas de doute, revenir ici._
