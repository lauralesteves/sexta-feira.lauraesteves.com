import { t } from '../../i18n/locale';

export function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        {t.heroTitle}
      </h1>
      <p className="font-display text-white text-lg sm:text-2xl md:text-[32px] mt-4 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
        {t.heroSubtitle}
      </p>
    </main>
  );
}
