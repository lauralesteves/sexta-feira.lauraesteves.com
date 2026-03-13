type Locale = 'pt' | 'en' | 'es';

interface AlternateSite {
  url: string;
  flag: string;
  label: string;
}

interface Translations {
  lang: string;
  siteTitle: string;
  logoText: string;
  heroTitle: string;
  heroSubtitle: string;
  audioSrc: string;
  soundOn: string;
  soundOff: string;
  enableSound: string;
  disableSound: string;
  footerText: string;
  footerName: string;
  lauraUrl: string;
  escrevidaUrl: string;
  siteUrl: string;
  alternateSites: AlternateSite[];
  ogDescription: string;
  openMenu: string;
  closeMenu: string;
}

const pt: Translations = {
  lang: 'pt-BR',
  siteTitle: 'Finalmente Sexta-Feira!',
  logoText: 'Finalmente Sexta-Feira!',
  heroTitle: 'Graças a deus é sexta-feira',
  heroSubtitle: 'Tá dando duro ou tá voando, xará?',
  audioSrc: '/audio/sexta-feira.mp3',
  soundOn: 'Som ligado',
  soundOff: 'Som desligado',
  enableSound: 'Ativar som',
  disableSound: 'Desativar som',
  footerText: 'Feito com ❤️ e ☕️ por',
  footerName: 'Laura Esteves',
  lauraUrl: 'https://lauraesteves.com',
  escrevidaUrl: 'https://escrevida.com',
  siteUrl: 'https://sexta-feira.lauraesteves.com',
  alternateSites: [
    { url: 'https://friday.lauraesteves.com', flag: '/images/flags/en.svg', label: 'English' },
    { url: 'https://viernes.lauraesteves.com', flag: '/images/flags/es.svg', label: 'Español' },
  ],
  ogDescription:
    'Finalmente sexta-feira! Celebre o melhor dia da semana com estilo. Mais um site de extrema utilidade pública.',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
};

const en: Translations = {
  lang: 'en',
  siteTitle: 'Finally Friday!',
  logoText: 'Finally Friday!',
  heroTitle: 'TGIF, eh, buddy?',
  heroSubtitle: 'Working hard or hardly working, eh, mac?',
  audioSrc: '/audio/friday.mp3',
  soundOn: 'Sound on',
  soundOff: 'Sound off',
  enableSound: 'Enable sound',
  disableSound: 'Disable sound',
  footerText: 'Made with ❤️ and ☕️ by',
  footerName: 'Laura Esteves',
  lauraUrl: 'https://lauraesteves.com/en',
  escrevidaUrl: 'https://escrevida.com/en/',
  siteUrl: 'https://friday.lauraesteves.com',
  alternateSites: [
    { url: 'https://sexta-feira.lauraesteves.com', flag: '/images/flags/pt.svg', label: 'Português' },
    { url: 'https://viernes.lauraesteves.com', flag: '/images/flags/es.svg', label: 'Español' },
  ],
  ogDescription:
    'Finally Friday! Celebrate the best day of the week in style. Yet another site of extreme public utility.',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
};

const es: Translations = {
  lang: 'es',
  siteTitle: '¡Por fin es viernes!',
  logoText: '¡Por fin es viernes!',
  heroTitle: 'Gracias a dios que es viernes',
  heroSubtitle: '¿Trabajando duro o durando en el trabajo?',
  audioSrc: '/audio/viernes.mp3',
  soundOn: 'Sonido activado',
  soundOff: 'Sonido desactivado',
  enableSound: 'Activar sonido',
  disableSound: 'Desactivar sonido',
  footerText: 'Hecho con ❤️ y ☕️ por',
  footerName: 'Laura Esteves',
  lauraUrl: 'https://lauraesteves.com/es',
  escrevidaUrl: 'https://escrevida.com/en/',
  siteUrl: 'https://viernes.lauraesteves.com',
  alternateSites: [
    { url: 'https://sexta-feira.lauraesteves.com', flag: '/images/flags/pt.svg', label: 'Português' },
    { url: 'https://friday.lauraesteves.com', flag: '/images/flags/en.svg', label: 'English' },
  ],
  ogDescription:
    '¡Por fin es viernes! Celebra el mejor día de la semana con estilo. Otro sitio más de extrema utilidad pública.',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
};

const locales: Record<Locale, Translations> = { pt, en, es };

const currentLocale: Locale = (import.meta.env.VITE_LOCALE as Locale) || 'pt';

export const t = locales[currentLocale];
