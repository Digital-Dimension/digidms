/**
 * Zentrale Navigationsdaten für alle Header-Komponenten
 * Single Source of Truth - wird in Header.astro und HeaderTransparent.astro genutzt
 */

export interface NavChild {
  label: string;
  href: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const mainNavigation: NavItem[] = [
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
];

/**
 * Prüft ob ein Navigationspunkt aktiv ist
 */
export function isActive(currentPath: string, href: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(href + '/') || currentPath.startsWith(href);
}
