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
  footerTagline: string;
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
  siteTitle: 'Graças a deus é sexta-feira',
  logoText: 'Sexta feira',
  heroTitle: 'Graças a deus é sexta-feira',
  heroSubtitle: 'Tá dando duro ou tá voando, xará?',
  audioSrc: '/audio/sexta-feira.mp3',
  soundOn: 'Som ligado',
  soundOff: 'Som desligado',
  enableSound: 'Ativar som',
  disableSound: 'Desativar som',
  footerTagline: 'Mais um site de extrema utilidade pública',
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
    'Sexta-feira chegou e você merece saber disso. Um vídeo, uma música e aquela sensação de que o fim de semana já começou. Graças a deus é sexta-feira. Mais um site de extrema utilidade pública.',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
};

const en: Translations = {
  lang: 'en',
  siteTitle: 'TGIF, eh, buddy?',
  logoText: 'Friday',
  heroTitle: 'TGIF, eh, buddy?',
  heroSubtitle: 'Working hard or hardly working, eh, mac?',
  audioSrc: '/audio/friday.mp3',
  soundOn: 'Sound on',
  soundOff: 'Sound off',
  enableSound: 'Enable sound',
  disableSound: 'Disable sound',
  footerTagline: 'Yet another site of extreme public utility',
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
    'Friday is here and you deserve to know it. A video, a tune, and that feeling that the weekend has already begun. TGIF, buddy. Yet another site of extreme public utility.',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
};

const es: Translations = {
  lang: 'es',
  siteTitle: 'Gracias a dios que es viernes',
  logoText: 'Viernes',
  heroTitle: 'Gracias a dios que es viernes',
  heroSubtitle: '¿Trabajando duro o durando en el trabajo?',
  audioSrc: '/audio/viernes.mp3',
  soundOn: 'Sonido activado',
  soundOff: 'Sonido desactivado',
  enableSound: 'Activar sonido',
  disableSound: 'Desactivar sonido',
  footerTagline: 'Otro sitio más de extrema utilidad pública',
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
    'El viernes llegó y mereces saberlo. Un video, una canción y esa sensación de que el fin de semana ya empezó. Gracias a dios que es viernes. Otro sitio más de extrema utilidad pública.',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
};

const locales: Record<Locale, Translations> = { pt, en, es };

const currentLocale: Locale = (import.meta.env.VITE_LOCALE as Locale) || 'pt';

export const t = locales[currentLocale];
