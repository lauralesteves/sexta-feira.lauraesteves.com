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
    title: 'Graças a deus é sexta-feira',
    url: 'https://sexta-feira.lauraesteves.com',
    description:
      'Sexta-feira chegou e você merece saber disso. Um vídeo, uma música e aquela sensação de que o fim de semana já começou. Graças a deus é sexta-feira. Mais um site de extrema utilidade pública.',
  },
  en: {
    lang: 'en',
    title: 'TGIF, eh, buddy?',
    url: 'https://friday.lauraesteves.com',
    description:
      'Friday is here and you deserve to know it. A video, a tune, and that feeling that the weekend has already begun. TGIF, buddy. Yet another site of extreme public utility.',
  },
  es: {
    lang: 'es',
    title: 'Gracias a dios que es viernes',
    url: 'https://viernes.lauraesteves.com',
    description:
      'El viernes llegó y mereces saberlo. Un video, una canción y esa sensación de que el fin de semana ya empezó. Gracias a dios que es viernes. Otro sitio más de extrema utilidad pública.',
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
