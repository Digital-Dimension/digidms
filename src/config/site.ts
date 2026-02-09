// Site Configuration for DigiDMS
export const siteConfig = {
  name: 'DigiDMS',
  title: 'DigiDMS - Professionelles Dokumentenmanagement',
  description: 'Sichere und verwaltete Dokumentenarchivierung auf Servern in Deutschland – mit umfassendem Service und persönlichem Support.',
  url: 'https://digidms.de',
  
  company: {
    name: 'Digital Dimension IT GmbH',
    street: 'Viehhofstraße 119',
    city: '42117 Wuppertal',
    country: 'Deutschland',
    email: 'info@digidim.de',
    phone: '+49 202 373231 60',
    phoneDisplay: '+49 202 373231 60',
    representatives: ['Robin Goldammer', 'Henning Scholand'],
    businessHours: 'Mo – Fr, 9:00 – 17:00 Uhr',
  },

  demo: {
    url: 'https://demo.digidms.de',
    username: 'demo',
    password: 'demo2026',
  },

  navigation: [
    { label: 'Start', href: '/' },
    { label: 'Funktionen', href: '/funktionen' },
    { 
      label: 'Branchen', 
      href: '/branchen',
      children: [
        { label: 'Handwerk & Bau', href: '/branchen/handwerk', icon: '🔧' },
        { label: 'Steuerberater & Kanzleien', href: '/branchen/kanzleien', icon: '⚖️' },
        { label: 'Arztpraxen', href: '/branchen/arztpraxen', icon: '🩺' },
        { label: 'Rechtsanwälte & Notare', href: '/branchen/rechtsanwaelte', icon: '📜' },
        { label: 'Hausverwaltung', href: '/branchen/hausverwaltung', icon: '🏢' },
      ]
    },
    { label: 'Service', href: '/service' },
    { label: 'Demo', href: '/demo' },
    { label: 'FAQ', href: '/fragen' },
    { label: 'Kontakt', href: '/kontakt' },
  ],

  footerNavigation: {
    produkt: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Branchen', href: '/branchen' },
      { label: 'Service', href: '/service' },
      { label: 'Demo testen', href: '/demo' },
      { label: 'Kostenrechner', href: '/kostenrechner' },
    ],
    rechtliches: [
      { label: 'GoBD & Checkliste', href: '/gobd' },
      { label: 'Sicherheit', href: '/sicherheit' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'AGB', href: '/agb' },
    ],
    support: [
      { label: 'FAQ', href: '/fragen' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Beratung buchen', href: '/beratung' },
      { label: 'Whitepaper', href: '/whitepaper' },
    ],
  },

  features: [
    {
      icon: 'FileSearch',
      title: 'OCR-Texterkennung',
      description: 'Automatische Texterkennung in gescannten Dokumenten',
    },
    {
      icon: 'Search',
      title: 'Volltextsuche',
      description: 'Blitzschnelle Suche über alle Dokumentinhalte',
    },
    {
      icon: 'Tags',
      title: 'Automatische Tags',
      description: 'Intelligente Klassifizierung und Verschlagwortung',
    },
    {
      icon: 'Link',
      title: 'REST-API',
      description: 'Nahtlose Integration in bestehende Systeme',
    },
    {
      icon: 'Mail',
      title: 'E-Mail-Import',
      description: 'Automatischer Import aus E-Mail-Postfächern',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Apps',
      description: 'Zugriff von iOS und Android Geräten',
    },
    {
      icon: 'Lock',
      title: 'Verschlüsselt',
      description: 'SSL/TLS für alle Datenübertragungen',
    },
    {
      icon: 'Zap',
      title: 'Blitzschnell',
      description: 'Optimierte Performance für große Archive',
    },
  ],

  trustBadges: [
    { text: 'Made in Germany', icon: 'Shield' },
    { text: 'ISO 27001 zertifiziert', icon: 'Award' },
    { text: 'DSGVO-konform', icon: 'CheckCircle' },
    { text: 'GoBD-fähig', icon: 'FileCheck' },
  ],

  targetGroups: [
    {
      title: 'Steuerberater & Kanzleien',
      description: 'GoBD-konforme Archivierung mit DATEV-Integration und mandantenfähiger Struktur.',
      icon: 'Scale',
    },
    {
      title: 'Handwerk & Mittelstand',
      description: 'Einfache Digitalisierung von Rechnungen, Lieferscheinen und Verträgen.',
      icon: 'Wrench',
    },
    {
      title: 'Unternehmen mit Prüfungsdruck',
      description: 'Revisionssichere Archivierung mit vollständigem Audit-Trail.',
      icon: 'ClipboardCheck',
    },
  ],

  stats: [
    { value: '99,5%', label: 'Verfügbarkeit' },
    { value: '<1 Tag', label: 'Setup-Zeit' },
    { value: '4h', label: 'Support-Reaktion' },
    { value: '8+ Jahre', label: 'Archivierung' },
  ],
};

export default siteConfig;
