import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Crosshair,
  Droplets,
  Feather,
  Flame,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  Instagram,
  Layers,
  Leaf,
  RotateCw,
  ScanLine,
  ShieldPlus,
  Snowflake,
  Sprout,
  Star,
  TrendingDown,
  UserCheck,
} from 'lucide-react';
import {
  AudienceCard,
  ComfortFeature,
  CONTENT,
  INSTAGRAM_URL,
  KASPI_URL,
  Locale,
  PRODUCT_IMAGES,
} from './data/content';
import { useCountdown } from './hooks/useCountdown';
import { KaspiButton, KaspiPlaque } from './components/KaspiButton';
import { CountdownBanner } from './components/CountdownBanner';
import { StickyKaspiBar } from './components/StickyKaspiBar';
import { ClinicalImage } from './components/ClinicalImage';

function renderAudienceIcon(name: AudienceCard['iconName']) {
  const iconClass = 'h-5 w-5 text-[#1F4E3D] shrink-0';
  switch (name) {
    case 'hairline':
      return <UserCheck className={iconClass} aria-hidden="true" />;
    case 'parting':
      return <ScanLine className={iconClass} aria-hidden="true" />;
    case 'stress':
      return <HeartPulse className={iconClass} aria-hidden="true" />;
    case 'breakage':
      return <Feather className={iconClass} aria-hidden="true" />;
    case 'early':
      return <ShieldPlus className={iconClass} aria-hidden="true" />;
  }
}

function renderComfortIcon(name: ComfortFeature['iconName']) {
  const iconClass = 'h-5 w-5 text-[#1F4E3D] shrink-0';
  switch (name) {
    case 'droplets':
      return <Droplets className={iconClass} aria-hidden="true" />;
    case 'target':
      return <Crosshair className={iconClass} aria-hidden="true" />;
    case 'luggage':
      return <Briefcase className={iconClass} aria-hidden="true" />;
    case 'clock':
      return <Clock className={iconClass} aria-hidden="true" />;
  }
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('ru');
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);
  const [rollerPhotoMode, setRollerPhotoMode] = useState<'box' | 'white'>('box');
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const { formatted, isExpired } = useCountdown(20 * 60);

  const t = CONTENT[locale];
  const activeGalleryItem = t.hero.gallery[activeGalleryIdx] ?? t.hero.gallery[0];

  useEffect(() => {
    document.documentElement.lang = locale === 'kk' ? 'kk' : 'ru';
  }, [locale]);

  const bulletIcons = [Leaf, Snowflake, Droplets, Sprout];
  const statIcons = [TrendingDown, Sprout, Layers, Clock];
  const stepIcons = [Droplets, RotateCw, CheckCircle2];
  const extractIcons = [Sprout, Leaf, Flame, HeartHandshake];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F8F9FA] text-[#1C242B]">
        {/* Top Bar — 3 clean zones */}
        <header className="border-b border-[#E4E8EC] bg-[#FDFCFB]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
            {/* Zone 1: Store Wordmark */}
            <a
              href="#top"
              className="text-lg sm:text-xl font-extrabold tracking-[-0.03em] text-[#1C242B] whitespace-nowrap shrink-0"
            >
              {t.storeName}
            </a>

            {/* Zone 2: 4 concise single-line nav links */}
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4A5560]"
            >
              <a
                href="#results"
                className="hover:text-[#1C242B] transition-colors whitespace-nowrap shrink-0"
              >
                {t.nav.results}
              </a>
              <a
                href="#specs"
                className="hover:text-[#1C242B] transition-colors whitespace-nowrap shrink-0"
              >
                {t.nav.specs}
              </a>
              <a
                href="#reviews"
                className="hover:text-[#1C242B] transition-colors whitespace-nowrap shrink-0"
              >
                {t.nav.reviews}
              </a>
              <a
                href="#faq"
                className="hover:text-[#1C242B] transition-colors whitespace-nowrap shrink-0"
              >
                {t.nav.faq}
              </a>
            </nav>

            {/* Zone 3: Language Switcher + Kaspi CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <div
                role="group"
                aria-label="Выбор языка / Тілді таңдау"
                className="inline-flex items-center rounded-lg bg-[#EFF2F4] p-0.5 border border-[#DCE2E7]"
              >
                <button
                  type="button"
                  onClick={() => setLocale('ru')}
                  className={`px-2.5 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    locale === 'ru'
                      ? 'bg-white text-[#1C242B] shadow-xs'
                      : 'text-[#55616D] hover:text-[#1C242B]'
                  }`}
                >
                  РУС
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('kk')}
                  className={`px-2.5 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    locale === 'kk'
                      ? 'bg-white text-[#1C242B] shadow-xs'
                      : 'text-[#55616D] hover:text-[#1C242B]'
                  }`}
                >
                  ҚАЗ
                </button>
              </div>

              <div className="hidden sm:block">
                <KaspiButton label={t.cta.buyKaspi} size="sm" />
              </div>
            </div>
          </div>
        </header>

        <main id="top">
          {/* 1. Hero Section */}
          <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Hero Copy Column */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <h1 className="text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[#1C242B]">
                    {t.hero.headline}
                  </h1>

                  <p className="text-base sm:text-lg leading-relaxed text-[#45515C] max-w-2xl">
                    {t.hero.subheadline}
                  </p>

                  <ul className="pt-2 space-y-2.5">
                    {t.hero.bullets.map((bullet, idx) => {
                      const BulletIcon = bulletIcons[idx] ?? CheckCircle2;
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm sm:text-[15px] leading-snug text-[#1C242B]"
                        >
                          <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#E6F2F8] text-[#1F4E3D] shrink-0">
                            <BulletIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="pt-0.5">{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-4 pt-2">
                  <CountdownBanner
                    formatted={formatted}
                    isExpired={isExpired}
                    activePrefix={t.timer.activePrefix}
                    activeSuffix={t.timer.activeSuffix}
                    expiredMessage={t.timer.expiredMessage}
                    variant="hero"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                    <KaspiButton label={t.cta.buyKaspi} size="xl" pulse />
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A5560]">
                      <BadgeCheck className="h-4 w-4 text-[#3B6E5C] shrink-0" aria-hidden="true" />
                      <span>{t.cta.kaspiSubtitle}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hero Interactive Floating Product Showcase + Short Specs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex"
              >
                <div className="w-full rounded-2xl overflow-hidden border border-[#DCE2E7] bg-[#FDFCFB] flex flex-col">
                  <div className="relative flex-1 min-h-[340px] sm:min-h-[410px] bg-gradient-to-b from-[#EFF4F7] via-[#F8FAFB] to-[#E6F2F8]/60 overflow-hidden flex items-center justify-center p-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeGalleryItem.id}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: activeGalleryIdx === 0 ? [0, -8, 0] : 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={
                          activeGalleryIdx === 0
                            ? {
                                opacity: { duration: 0.25 },
                                scale: { duration: 0.3 },
                                y: {
                                  duration: 3.8,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                },
                              }
                            : { duration: 0.25 }
                        }
                        className="w-full h-full flex items-center justify-center"
                      >
                        <ClinicalImage
                          src={activeGalleryItem.image}
                          alt={activeGalleryItem.caption}
                          fallbackTitle={t.storeName}
                          priority
                          className="w-full h-full max-h-[360px] object-contain rounded-xl drop-shadow-md"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* 3 Short Characteristic Callouts around the serum */}
                    {t.hero.shortSpecs[0] && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute top-3.5 left-3.5 rounded-xl border border-[#DCE2E7] bg-white/92 backdrop-blur-sm px-3 py-2 shadow-xs"
                      >
                        <div className="font-mono-tabular text-sm font-bold text-[#1F4E3D] leading-tight">
                          {t.hero.shortSpecs[0].value}
                        </div>
                        <div className="text-[11px] font-medium text-[#4B5864]">
                          {t.hero.shortSpecs[0].label}
                        </div>
                      </motion.div>
                    )}

                    {t.hero.shortSpecs[1] && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.28 }}
                        className="absolute top-3.5 right-3.5 rounded-xl border border-[#CBE0EC] bg-[#E6F2F8]/95 backdrop-blur-sm px-3 py-2 shadow-xs text-right"
                      >
                        <div className="font-mono-tabular text-sm font-bold text-[#184E68] leading-tight">
                          {t.hero.shortSpecs[1].value}
                        </div>
                        <div className="text-[11px] font-medium text-[#2F414B]">
                          {t.hero.shortSpecs[1].label}
                        </div>
                      </motion.div>
                    )}

                    {t.hero.shortSpecs[2] && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.36 }}
                        className="absolute bottom-3.5 right-3.5 rounded-xl border border-[#DCE2E7] bg-white/92 backdrop-blur-sm px-3 py-2 shadow-xs text-right"
                      >
                        <div className="font-mono-tabular text-xs font-bold text-[#1C242B] leading-tight">
                          {t.hero.shortSpecs[2].value}
                        </div>
                        <div className="text-[11px] font-medium text-[#3B6E5C]">
                          {t.hero.shortSpecs[2].label}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Thumbnail Photo Switcher */}
                  <div className="p-3 bg-[#F4F7F9] border-t border-[#E4E8EC] grid grid-cols-4 gap-2">
                    {t.hero.gallery.map((item, idx) => {
                      const isActive = idx === activeGalleryIdx;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveGalleryIdx(idx)}
                          className={`rounded-lg overflow-hidden border text-left transition-all cursor-pointer ${
                            isActive
                              ? 'border-[#1F4E3D] ring-1 ring-[#1F4E3D] bg-white'
                              : 'border-[#DCE2E7] bg-white/80 opacity-80 hover:opacity-100'
                          }`}
                        >
                          <div className="aspect-square w-full bg-[#F8F9FA] overflow-hidden">
                            <ClinicalImage
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="block px-1.5 py-1 text-[10px] font-semibold text-[#1C242B] truncate">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="px-5 py-3.5 border-t border-[#E4E8EC] bg-[#FDFCFB] space-y-1">
                    <p className="font-mono-tabular text-xs sm:text-sm font-semibold text-[#1F4E3D]">
                      {t.hero.productSpecs}
                    </p>
                    <p className="text-xs text-[#4A5560]">{activeGalleryItem.caption}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. More Results: Before / After + Week-by-Week Stats */}
          <section
            id="results"
            className="border-t border-[#E4E8EC] bg-[#FDFCFB] py-14 sm:py-20"
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                  <Sprout className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.beforeAfter.sectionKicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                  {t.beforeAfter.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                  {t.beforeAfter.sectionSubtitle}
                </p>
              </div>

              {/* 4 Concrete Result Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.beforeAfter.resultStats.map((stat, idx) => {
                  const StatIcon = statIcons[idx] ?? Sprout;
                  return (
                    <motion.div
                      key={stat.value}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      className="rounded-xl border border-[#DCE2E7] bg-[#F8F9FA] p-5 space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono-tabular text-lg font-bold text-[#1F4E3D]">
                          {stat.value}
                        </span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F2F8] text-[#1F4E3D]">
                          <StatIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#1C242B]">{stat.title}</h3>
                      <p className="text-sm text-[#4B5864] leading-relaxed">{stat.detail}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Side-by-Side Before / After Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {t.beforeAfter.cases.map((item, idx) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    className="rounded-2xl overflow-hidden border border-[#DCE2E7] bg-[#F8F9FA] flex flex-col"
                  >
                    <div className="px-5 py-3 border-b border-[#DCE2E7] bg-[#F4F7F9] flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-[#1C242B]">
                        {item.tabLabel}
                      </span>
                      <span className="text-xs font-semibold text-[#3B6E5C]">
                        {item.resultBadge}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-[#DCE2E7] bg-white text-xs sm:text-sm font-semibold">
                      <div className="px-4 py-2.5 text-[#55616D] border-r border-[#DCE2E7]">
                        {item.beforeLabel}
                      </div>
                      <div className="px-4 py-2.5 text-[#1F4E3D]">
                        {item.afterLabel}
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full bg-[#E8ECEF]">
                      <ClinicalImage
                        src={item.image}
                        alt={item.imageAlt}
                        fallbackTitle={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-1/2 w-px bg-white/90"
                      />
                    </div>
                    <div className="p-5 sm:p-6 bg-white border-t border-[#DCE2E7] space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#1C242B]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#45515C] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <p className="text-xs font-semibold text-[#3B6E5C] pt-2">
                        {item.expectedDynamics}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* 3-Stage Progression Timeline */}
              <div className="rounded-2xl border border-[#DCE2E7] bg-[#F8F9FA] p-6 sm:p-7 space-y-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C242B]">
                  {t.beforeAfter.timelineTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.beforeAfter.timeline.map((step, index) => (
                    <div
                      key={step.period}
                      className={`${
                        index > 0 ? 'md:border-l md:border-[#DCE2E7] md:pl-6' : ''
                      } space-y-1.5`}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-semibold text-base text-[#1C242B]">
                          {step.stage}
                        </span>
                        <span className="font-mono-tabular text-xs font-semibold text-[#1F4E3D] shrink-0">
                          {step.period}
                        </span>
                      </div>
                      <p className="text-sm text-[#4B5864] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Kaspi Plaque 1 */}
              <KaspiPlaque
                title={t.beforeAfter.ctaPrompt}
                subtitle={t.cta.plaqueSub}
                buttonLabel={t.cta.buyKaspi}
                formattedTimer={formatted}
                isExpired={isExpired}
                timerHint={t.cta.plaqueTimerHint}
              />
            </div>
          </section>

          {/* 3. Recognize Yourself / Audience */}
          <section id="audience" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.audience.sectionKicker}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                {t.audience.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                {t.audience.sectionSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.audience.cards.map((card, idx) => (
                <motion.article
                  key={card.index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.05,
                    y: { type: 'spring', stiffness: 360, damping: 24 },
                    scale: { type: 'spring', stiffness: 360, damping: 24 },
                  }}
                  className="rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] p-6 flex flex-col justify-between gap-4 hover:border-[#3B6E5C]/40 hover:shadow-md transition-colors duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6F2F8]">
                        {renderAudienceIcon(card.iconName)}
                      </span>
                      <span className="font-mono-tabular text-xs font-bold text-[#3B6E5C]">
                        {card.index}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1C242B] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#4B5864] leading-relaxed">
                      {card.symptom}
                    </p>
                  </div>
                  <p className="pt-4 border-t border-[#EDF1F4] text-xs sm:text-sm font-medium text-[#1F4E3D] leading-relaxed">
                    {card.mechanism}
                  </p>
                </motion.article>
              ))}

              {/* 6th Balanced Store CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: 0.25,
                  y: { type: 'spring', stiffness: 360, damping: 24 },
                  scale: { type: 'spring', stiffness: 360, damping: 24 },
                }}
                className="rounded-2xl border border-[#3B6E5C]/25 bg-[#1F4E3D] text-white p-6 flex flex-col justify-between gap-5 hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <p className="font-mono-tabular text-xs font-semibold text-[#B9DFD0]">
                    {t.hero.productSpecs}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    {t.audience.ctaPrompt}
                  </p>
                </div>
                <KaspiButton label={t.cta.buyKaspi} size="lg" fullWidth />
              </motion.div>
            </div>
          </section>

          {/* 4. 3D Roller Technology & 3 Easy Steps */}
          <section
            id="roller"
            className="border-t border-[#E4E8EC] bg-[#FDFCFB] py-14 sm:py-20"
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F4E3D]">
                  <Snowflake className="h-4 w-4 text-[#2A7296] shrink-0" aria-hidden="true" />
                  <span>{t.roller.sectionKicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                  {t.roller.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                  {t.roller.sectionSubtitle}
                </p>
              </div>

              {/* Cooling Icy-Blue #E6F2F8 Showcase with Real Roller Photos */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch rounded-2xl border border-[#CBE0EC] bg-[#E6F2F8] overflow-hidden">
                <div className="lg:col-span-6 flex flex-col bg-white">
                  <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={rollerPhotoMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                      >
                        <ClinicalImage
                          src={
                            rollerPhotoMode === 'box'
                              ? PRODUCT_IMAGES.rollerOnBox
                              : PRODUCT_IMAGES.rollerWhiteStudio
                          }
                          alt={t.roller.sectionTitle}
                          fallbackTitle={t.roller.sectionTitle}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="px-4 py-2.5 border-t border-[#DCE6EC] bg-[#F4F9FC] flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-[#37515E]">
                      3D-роллер 360°
                    </span>
                    <div className="inline-flex gap-1">
                      <button
                        type="button"
                        onClick={() => setRollerPhotoMode('box')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                          rollerPhotoMode === 'box'
                            ? 'bg-[#1F4E3D] text-white'
                            : 'bg-white text-[#37515E] border border-[#CBE0EC]'
                        }`}
                      >
                        1
                      </button>
                      <button
                        type="button"
                        onClick={() => setRollerPhotoMode('white')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                          rollerPhotoMode === 'white'
                            ? 'bg-[#1F4E3D] text-white'
                            : 'bg-white text-[#37515E] border border-[#CBE0EC]'
                        }`}
                      >
                        2
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#184E68]">
                      <Snowflake className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{t.roller.coolingNote}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C242B]">
                      {t.roller.rollerHighlightTitle}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2F414B] leading-relaxed">
                      {t.roller.rollerHighlightBody}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C4DCE9]">
                    {t.roller.rollerMetrics.map((metric) => (
                      <div key={metric.value} className="space-y-0.5">
                        <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#1F4E3D]">
                          {metric.value}
                        </div>
                        <div className="text-xs sm:text-sm text-[#354B56] leading-snug">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3 Simple Steps for Everyday Clients */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C242B]">
                  {t.roller.usageTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {t.roller.usageSteps.map((step, idx) => {
                    const StepIcon = stepIcons[idx] ?? CheckCircle2;
                    return (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: idx * 0.07 }}
                        className="rounded-xl border border-[#DCE2E7] bg-[#F8F9FA] p-5 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F2F8] text-[#1F4E3D]">
                              <StepIcon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="font-mono-tabular text-xs font-bold text-[#3B6E5C]">
                              {step.step}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-[#55616D]">
                            {step.timeHint}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-[#1C242B]">{step.title}</h4>
                        <p className="text-sm text-[#4B5864] leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* 4 Comfort Features with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.roller.comfortFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-[#DCE2E7] bg-white p-5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6F2F8]">
                        {renderComfortIcon(feature.iconName)}
                      </span>
                      <span className="font-mono-tabular text-xs font-bold text-[#3B6E5C]">
                        {feature.metric}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1C242B]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#4B5864] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Large Kaspi Plaque 2 */}
              <KaspiPlaque
                title={t.roller.ctaPrompt}
                subtitle={t.cta.plaqueSub}
                buttonLabel={t.cta.buyKaspi}
                formattedTimer={formatted}
                isExpired={isExpired}
                timerHint={t.cta.plaqueTimerHint}
              />
            </div>
          </section>

          {/* 5. Product Characteristics / Specifications */}
          <section id="specs" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                <ClipboardList className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.specs.sectionKicker}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                {t.specs.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                {t.specs.sectionSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-8 rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] overflow-hidden">
                <dl className="divide-y divide-[#E7ECEF]">
                  {t.specs.items.map((spec) => (
                    <div
                      key={spec.label}
                      className="px-5 py-4 sm:px-6 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                    >
                      <dt className="sm:col-span-5 text-xs sm:text-sm font-medium text-[#55616D]">
                        {spec.label}
                      </dt>
                      <dd className="sm:col-span-7 text-sm sm:text-[15px] font-semibold text-[#1C242B]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-4 rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] overflow-hidden flex flex-col">
                <div className="flex-1 min-h-[240px] bg-[#F8F9FA]">
                  <ClinicalImage
                    src={PRODUCT_IMAGES.tubeStanding}
                    alt={t.specs.sectionTitle}
                    fallbackTitle={t.storeName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 border-t border-[#E4E8EC] space-y-3 bg-white">
                  <p className="text-sm font-semibold text-[#1C242B] leading-snug">
                    {t.specs.ctaPrompt}
                  </p>
                  <KaspiButton label={t.cta.buyKaspi} size="lg" fullWidth />
                </div>
              </div>
            </div>
          </section>

          {/* 6. Science & Nature: 4 Botanical Extracts */}
          <section
            id="science"
            className="border-t border-[#E4E8EC] bg-[#FDFCFB] py-14 sm:py-20"
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                  <Leaf className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.science.sectionKicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                  {t.science.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                  {t.science.sectionSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#DCE2E7] bg-[#EBEAE4] min-h-[280px]">
                  <ClinicalImage
                    src={PRODUCT_IMAGES.botanicalLab}
                    alt={t.science.extractsTitle}
                    fallbackTitle={t.science.extractsTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between gap-5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C242B]">
                    {t.science.extractsTitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    {t.science.extracts.map((extract, idx) => {
                      const ExtractIcon = extractIcons[idx] ?? Leaf;
                      return (
                        <motion.article
                          key={extract.index}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.35, delay: idx * 0.05 }}
                          className="rounded-xl border border-[#DCE2E7] bg-[#F8F9FA] p-5 flex flex-col justify-between gap-4"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6F2F8] text-[#1F4E3D]">
                                <ExtractIcon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <span className="text-xs font-medium text-[#3B6E5C] truncate">
                                {extract.subtitle}
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-[#1C242B] leading-snug">
                              {extract.name}
                            </h4>
                          </div>
                          <p className="text-sm text-[#4B5864] leading-relaxed">
                            {extract.role}
                          </p>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Customer Reviews with Kazakh Names */}
          <section id="reviews" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                  <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.reviews.sectionKicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                  {t.reviews.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                  {t.reviews.sectionSubtitle}
                </p>
              </div>

              {/* Store Trust Strip */}
              <div className="inline-flex items-center gap-3 rounded-xl border border-[#DCE2E7] bg-[#FDFCFB] px-4 py-2.5 self-start">
                <img
                  src={PRODUCT_IMAGES.storeLogo}
                  alt={t.storeName}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 rounded-lg object-cover shrink-0"
                />
                <div>
                  <div className="text-sm font-bold text-[#1C242B]">{t.storeName}</div>
                  <div className="text-xs text-[#4B5864]">{t.cta.storeBadge}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.reviews.items.map((review, idx) => (
                <motion.article
                  key={review.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-0.5 text-[#F14635]" aria-label="5 из 5">
                        {Array.from({ length: review.rating }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-[#3B6E5C]">
                        {review.duration}
                      </span>
                    </div>

                    <p className="text-sm text-[#1C242B] leading-relaxed">
                      «{review.text}»
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E8EC] flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-[#1C242B]">{review.name}</div>
                      <div className="text-xs text-[#55616D]">
                        {review.city} · {review.problem}
                      </div>
                    </div>
                    <BadgeCheck
                      className="h-4 w-4 text-[#3B6E5C] shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Large Kaspi Plaque 3 */}
            <KaspiPlaque
              title={t.reviews.ctaPrompt}
              subtitle={t.cta.plaqueSub}
              buttonLabel={t.cta.buyKaspi}
              formattedTimer={formatted}
              isExpired={isExpired}
              timerHint={t.cta.plaqueTimerHint}
            />
          </section>

          {/* 8. Frequently Asked Questions (FAQ) */}
          <section
            id="faq"
            className="border-t border-[#E4E8EC] bg-[#FDFCFB] py-14 sm:py-20"
          >
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 space-y-8">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3B6E5C]">
                  <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.faq.sectionKicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                  {t.faq.sectionTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                  {t.faq.sectionSubtitle}
                </p>
              </div>

              <div className="space-y-3">
                {t.faq.items.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-[#DCE2E7] bg-[#F8F9FA] overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#F2F5F7] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#1C242B]">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-[#3B6E5C] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-5 pt-1 text-sm text-[#45515C] leading-relaxed border-t border-[#E4E8EC] bg-white">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 9. Final Purchase Module with 20:00 Timer */}
          <section id="buy" className="max-w-[1000px] mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-6">
            <div className="rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] p-6 sm:p-10 space-y-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <p className="text-xs sm:text-sm font-semibold text-[#F14635]">
                    {t.finalOffer.sectionKicker}
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1C242B]">
                    {t.finalOffer.sectionTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4B5864] leading-relaxed">
                    {t.finalOffer.sectionSubtitle}
                  </p>
                </div>

                <img
                  src={PRODUCT_IMAGES.tubeStanding}
                  alt={t.storeName}
                  referrerPolicy="no-referrer"
                  className="h-24 w-24 rounded-xl object-cover border border-[#E4E8EC] shrink-0 hidden sm:block"
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-5 border-y border-[#E4E8EC]">
                {t.finalOffer.summaryItems.map((item) => (
                  <div key={item.value} className="space-y-1">
                    <div className="font-mono-tabular text-base sm:text-lg font-bold text-[#1F4E3D]">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#4B5864] leading-snug">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <CountdownBanner
                formatted={formatted}
                isExpired={isExpired}
                activePrefix={t.timer.activePrefix}
                activeSuffix={t.timer.activeSuffix}
                expiredMessage={t.timer.expiredMessage}
                variant="final"
              />

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <KaspiButton label={t.cta.buyKaspi} size="xl" pulse />
                <p className="text-xs sm:text-sm text-[#4B5864] leading-relaxed">
                  {t.finalOffer.kaspiNote}
                </p>
              </div>
            </div>

            {/* Social / Instagram Card */}
            <div className="rounded-2xl border border-[#DCE2E7] bg-[#FDFCFB] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F2F8] text-[#1F4E3D] shrink-0">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1C242B]">{t.social.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B5864]">{t.social.subtitle}</p>
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE2E7] bg-white px-5 py-3 text-sm font-semibold text-[#1C242B] hover:border-[#1F4E3D] hover:text-[#1F4E3D] transition-colors whitespace-nowrap shrink-0"
              >
                <Instagram className="h-4 w-4 text-[#F14635]" aria-hidden="true" />
                <span>
                  {t.social.instagramLabel} ({t.social.instagramHandle})
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#E4E8EC] bg-[#FDFCFB] pt-10 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <img
                  src={PRODUCT_IMAGES.storeLogo}
                  alt={t.storeName}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-lg object-cover shrink-0"
                />
                <span className="text-base font-extrabold tracking-[-0.03em] text-[#1C242B]">
                  {t.storeName}
                </span>
              </div>
              <p className="font-mono-tabular text-xs font-medium text-[#3B6E5C]">
                {t.footer.certLine}
              </p>
              <p className="text-xs text-[#55616D] leading-relaxed">
                {t.footer.legalNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <a
                href={KASPI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#F14635] hover:text-[#D93829] hover:underline whitespace-nowrap"
              >
                {t.footer.kaspiLinkLabel} →
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F4E3D] hover:underline whitespace-nowrap"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>Instagram {t.social.instagramHandle}</span>
              </a>
            </div>
          </div>
        </footer>

        {/* Sticky Bottom Kaspi Bar */}
        <StickyKaspiBar
          formatted={formatted}
          isExpired={isExpired}
          activeLabel={t.timer.stickyActiveLabel}
          expiredLabel={t.timer.stickyExpiredLabel}
          buttonLabel={t.cta.buyKaspi}
        />
      </div>
    </MotionConfig>
  );
}
