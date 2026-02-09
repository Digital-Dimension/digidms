# DigiDMS Website

Marketing-Website fuer [DigiDMS](https://digidms.de) - Managed DMS-Hosting auf Basis von Paperless-ngx fuer deutsche KMU.

## Tech Stack

- [Astro 4](https://astro.build/) (Static Site Generator)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Bildoptimierung via `astro:assets` (automatische WebP-Konvertierung)

## Schnellstart

```bash
npm install
npm run dev        # localhost:4321
npm run build      # Produktions-Build
npm run preview    # Build-Vorschau
```

## Projektstruktur

```
src/
├── assets/images/     # Optimierte Bilder (WebP beim Build)
├── components/        # Astro-Komponenten
├── config/site.ts     # Firmeninfos, Demo-Daten, Footer-Navigation
├── data/navigation.ts # Header-Navigation (Single Source of Truth)
├── layouts/           # Layout mit SEO, Analytics, Global Styles
├── utils/             # Hilfsfunktionen (FAQ-Schema etc.)
└── pages/             # Seiten (URL = Dateiname)
    ├── branchen/      # Branchen-Landingpages
    └── ratgeber/      # Ratgeber-Artikel

public/
├── images/            # Statische Bilder (Logos, SVGs)
├── downloads/         # PDFs (Whitepaper, Checkliste)
├── fonts/             # Inter Variable Font (lokal gehostet)
├── sitemap.xml
└── robots.txt
```

## Seiten

| Pfad | Beschreibung |
|------|--------------|
| `/` | Homepage |
| `/funktionen` | DMS-Features |
| `/branchen` | Branchen-Hub |
| `/branchen/handwerk` | Handwerker |
| `/branchen/kanzleien` | Steuerberater |
| `/branchen/arztpraxen` | Arztpraxen |
| `/branchen/rechtsanwaelte` | Rechtsanwaelte |
| `/branchen/hausverwaltung` | Hausverwaltungen |
| `/service` | Managed Service |
| `/demo` | Demo-Zugang |
| `/kostenrechner` | Interaktiver Kostenrechner |
| `/beratung` | Terminbuchung |
| `/fragen` | FAQ mit Schema.org |
| `/kontakt` | Kontaktformular |
| `/gobd` | GoBD-Infos + Checkliste |
| `/sicherheit` | Sicherheit & Datenschutz |
| `/whitepaper` | Whitepaper-Download |
| `/ratgeber/betriebspruefung` | Ratgeber Betriebspruefung |

## Komponenten

| Komponente | Beschreibung |
|------------|--------------|
| `SEO.astro` | Open Graph, Twitter Cards, Geo-Tags, Schema.org |
| `Header.astro` | Standard-Navigation |
| `HeaderTransparent.astro` | Transparenter Header (fuer Homepage) |
| `PageHeader.astro` | Seitenheader mit BreadcrumbNav |
| `BreadcrumbNav.astro` | Breadcrumbs mit Schema.org BreadcrumbList |
| `Hero.astro` | Homepage-Hero |
| `ServiceCard.astro` | Karten mit SVG-Icon-Library |
| `TestimonialSlider.astro` | Kundenstimmen-Karussell |
| `FAQAccordion.astro` | FAQ-Akkordeon |
| `ScrollToTop.astro` | Scroll-to-Top Button |
| `CTASection.astro` | Call-to-Action Bloecke |
| `TrustBadges.astro` | Vertrauens-Badges |
| `Footer.astro` | Footer |

## SEO

- Eigene `SEO.astro`-Komponente mit Organization + WebPage Schema pro Seite
- FAQ-Schema via `src/utils/faq-schema.ts`
- BreadcrumbList-Schema in Breadcrumbs
- Geo-Meta-Tags (DE-NW, Wuppertal)
- Sitemap: `public/sitemap.xml`

## Analytics

Matomo (cookiefrei, selbst gehostet) - DSGVO-konform ohne Cookie-Banner.

## Deployment

Statischer Build nach `dist/`. Kann auf jedem Webserver deployed werden.

```bash
npm run build
# dist/ auf den Server kopieren
```
