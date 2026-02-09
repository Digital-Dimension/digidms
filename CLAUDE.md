# DigiDMS Website

## Projektübersicht

Website für **DigiDMS** – ein Managed DMS-Hosting-Dienst der Digital Dimension IT GmbH (Wuppertal). Vermarktet Paperless-ngx als gehostete Lösung für deutsche KMU.

**Zielgruppe:** Handwerker, Steuerberater, Arztpraxen, Rechtsanwälte, Hausverwaltungen

## Tech Stack

- **Framework:** Astro 4.x (Static Site Generator)
- **Styling:** Tailwind CSS
- **Bildoptimierung:** `astro:assets` mit automatischer WebP-Konvertierung
- **Sprache:** Deutsch (deutsche URLs)

## Wichtige Befehle

```bash
npm install          # Abhängigkeiten installieren
npm run dev          # Entwicklungsserver (localhost:4321)
npm run build        # Produktions-Build
npm run preview      # Build-Vorschau
```

## Verzeichnisstruktur

```
src/
├── assets/images/      # Optimierte Bilder (→ WebP beim Build)
├── components/         # Astro-Komponenten
├── config/site.ts      # Zentrale Konfiguration
├── layouts/            # Layout-Templates
└── pages/              # Seiten (URL = Dateiname)
    ├── branchen/       # Branchen-Landingpages
    └── ratgeber/       # Ratgeber-Artikel

public/
├── images/             # Statische Bilder (Logos, SVGs)
├── downloads/          # PDFs (Whitepaper, Checkliste)
├── sitemap.xml
└── robots.txt
```

## Zentrale Konfiguration

`src/config/site.ts` enthält:
- Firmeninfos (Name, Adresse, Kontakt)
- Navigation (Header, Footer)
- Demo-Zugangsdaten
- Trust-Badges
- CTA-Texte

## Seiten (22 URLs)

| Pfad | Beschreibung |
|------|--------------|
| `/` | Homepage |
| `/funktionen` | DMS-Features |
| `/branchen` | Branchen-Hub |
| `/branchen/handwerk` | Handwerker |
| `/branchen/kanzleien` | Steuerberater |
| `/branchen/arztpraxen` | Arztpraxen |
| `/branchen/rechtsanwaelte` | Rechtsanwälte |
| `/branchen/hausverwaltung` | Hausverwaltungen |
| `/service` | Managed Service |
| `/demo` | Demo mit Schnellstart-Leitfaden |
| `/kostenrechner` | Interaktiver Kostenrechner |
| `/beratung` | Terminbuchung (30 Min) |
| `/fragen` | FAQ |
| `/kontakt` | Kontaktformular |
| `/gobd` | GoBD-Infos + Checklisten-Download |
| `/gobd-checkliste` | Separate Checklisten-Landingpage |
| `/sicherheit` | Sicherheit & Datenschutz |
| `/whitepaper` | Whitepaper-Download |
| `/ratgeber/betriebspruefung` | Ratgeber Betriebsprüfung |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |
| `/agb` | AGB |

## Komponenten

| Komponente | Verwendung |
|------------|------------|
| `Hero.astro` | Homepage-Hero mit optionalem optimiertem Bild |
| `PageHeader.astro` | Seitenheader mit Breadcrumb |
| `SectionHeader.astro` | Abschnittsüberschriften |
| `FeatureGrid.astro` | Feature-Karten |
| `FAQAccordion.astro` | FAQ mit Schema.org |
| `CTASection.astro` | Call-to-Action Blöcke |
| `TrustBadges.astro` | Vertrauens-Badges |
| `WirKuemmernUns.astro` | "Wir kümmern uns" USP-Block |
| `Header.astro` | Navigation |
| `Footer.astro` | Footer mit Links |

## Bildoptimierung

**Optimierte Bilder** in `src/assets/images/`:
- Werden mit `<Image>` aus `astro:assets` eingebunden
- Automatische WebP-Konvertierung beim Build
- ~50% Größenersparnis

**Statische Bilder** in `public/images/`:
- Logos, SVGs, Favicons
- Werden unverändert kopiert

```astro
// Beispiel: Optimiertes Bild
import { Image } from 'astro:assets';
import heroImg from '../assets/images/hero-banner.png';

<Image src={heroImg} alt="..." format="webp" quality={85} />
```

## Externe Integrationen

**Terminbuchung:**
```
https://outlook.office365.com/book/DigiDMSBeratung@intragen.de/
```

**Demo-Instanz:**
- URL: `https://demo.intragen.de`
- Benutzer: `demo`
- Passwort: `demo2026`

## Konventionen

- **URLs:** Deutsch, Kleinbuchstaben, Bindestriche (`/branchen/arztpraxen`)
- **Meta-Titles:** Max. 60 Zeichen, Keyword vorne, ` | DigiDMS` am Ende
- **Bilder:** Große Bilder (>50KB) in `src/assets/images/`, Logos in `public/images/`
- **Komponenten-Props:** TypeScript-Interfaces im Frontmatter

## SEO

- Sitemap: `/public/sitemap.xml` (manuell gepflegt)
- Schema.org FAQ auf Branchen-Seiten
- Organization-Schema im Layout

## Downloads (PDFs)

- `/downloads/DigiDMS-Whitepaper-GoBD-2026.pdf`
- `/downloads/DigiDMS-GoBD-Checkliste.pdf`

## Kontaktdaten

```
Digital Dimension IT GmbH
Ehrenbergstraße 35
42799 Leichlingen

Tel: 0214 33010700
E-Mail: hallo@digidms.de
Web: https://digidms.de
```

## Offene Aufgaben / Ideen

- [ ] Weitere Branchen-Seiten (z.B. Makler, Agenturen)
- [ ] Blog/News-Bereich
- [ ] Kundenstimmen/Testimonials erweitern
- [ ] Video-Einbindung auf Demo-Seite
- [ ] Newsletter-Integration
