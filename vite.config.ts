import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const localeData: Record<
  string,
  { lang: string; title: string; url: string; description: string }
> = {
  pt: {
    lang: 'pt-BR',
    title: 'Finalmente Sexta-Feira!',
    url: 'https://sexta-feira.lauraesteves.com',
    description:
      'Finalmente sexta-feira! Celebre o melhor dia da semana com estilo. Mais um site de extrema utilidade pública.',
  },
  en: {
    lang: 'en',
    title: 'Finally Friday!',
    url: 'https://friday.lauraesteves.com',
    description:
      'Finally Friday! Celebrate the best day of the week in style. Yet another site of extreme public utility.',
  },
  es: {
    lang: 'es',
    title: '¡Por fin es viernes!',
    url: 'https://viernes.lauraesteves.com',
    description:
      '¡Por fin es viernes! Celebra el mejor día de la semana con estilo. Otro sitio más de extrema utilidad pública.',
  },
};

function htmlLocalePlugin(): Plugin {
  return {
    name: 'html-locale',
    transformIndexHtml(html) {
      const locale = process.env.VITE_LOCALE || 'pt';
      const data = localeData[locale] || localeData.pt;
      return html
        .replace(/%LANG%/g, data.lang)
        .replace(/%TITLE%/g, data.title)
        .replace(/%URL%/g, data.url)
        .replace(/%DESCRIPTION%/g, data.description);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), htmlLocalePlugin()],
});
