export const KASPI_URL = 'https://ks86lywq.mobz.market/5aq';
export const INSTAGRAM_URL = 'https://instagram.com/top_market_8';

export type Locale = 'ru' | 'kk';

export const PRODUCT_IMAGES = {
  storeLogo: '/assets/aistudio/photo_5363888539361288088_y_9b1d0bcb.jpg',
  tubeStanding: '/assets/aistudio/photo_5273858169338198221_x_b8728884.jpg',
  rollerOnBox: '/assets/aistudio/Silver_cosmetic_serum_tube_photo__bfa25d2f_2K__1__b68a08bd.jpg',
  rollerWhiteStudio: '/assets/aistudio/Cosmetic_serum_tube_on_white_1760c590_2K_fe5cae9a.jpg',
  tubeIceBlue:
    '/assets/aistudio/GEM_PHOTO_9944E505-5D11-44AC-85DC-6A96749D457A_L0_001_recent_photo_CFF3A709-0D56-4B77-9925-6EBDB3B193E2_7ca9e0aa.jpg',
  floatingHero: '/assets/aistudio/___________________________________24b122ab_2K_8db28f95.jpg',
  beforeAfterWoman: '/src/assets/images/before_after_woman_1795727119532.jpg',
  beforeAfterTemples: '/src/assets/images/before_after_temples_1795719682125.jpg',
  beforeAfterParting: '/src/assets/images/before_after_parting_1795719682351.jpg',
  botanicalLab: '/src/assets/images/botanical_hair_serum_extracts_1795728655773.jpg',
} as const;

export interface GalleryItem {
  id: string;
  image: string;
  label: string;
  caption: string;
}

export interface BeforeAfterCase {
  id: 'woman' | 'temples' | 'parting';
  tabLabel: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  expectedDynamics: string;
  resultBadge: string;
  image: string;
  imageAlt: string;
}

export interface ResultStat {
  value: string;
  title: string;
  detail: string;
}

export interface AudienceCard {
  index: string;
  iconName: 'hairline' | 'parting' | 'stress' | 'breakage' | 'early';
  title: string;
  symptom: string;
  mechanism: string;
}

export interface UsageStep {
  step: string;
  title: string;
  description: string;
  timeHint: string;
}

export interface ComfortFeature {
  metric: string;
  iconName: 'droplets' | 'target' | 'luggage' | 'clock';
  title: string;
  description: string;
}

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ExtractItem {
  index: string;
  name: string;
  subtitle: string;
  role: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  problem: string;
  duration: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TranslationContent {
  storeName: string;
  storeTagline: string;
  nav: {
    results: string;
    specs: string;
    reviews: string;
    faq: string;
  };
  cta: {
    buyKaspi: string;
    kaspiSubtitle: string;
    storeBadge: string;
    plaqueSub: string;
    plaqueTimerHint: string;
  };
  timer: {
    activePrefix: string;
    activeSuffix: string;
    expiredMessage: string;
    stickyActiveLabel: string;
    stickyExpiredLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    bullets: string[];
    productSpecs: string;
    imageCaption: string;
    shortSpecs: {
      value: string;
      label: string;
    }[];
    gallery: GalleryItem[];
  };
  beforeAfter: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cases: BeforeAfterCase[];
    resultStats: ResultStat[];
    timelineTitle: string;
    timeline: {
      period: string;
      stage: string;
      detail: string;
    }[];
    ctaPrompt: string;
  };
  audience: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cards: AudienceCard[];
    ctaPrompt: string;
  };
  roller: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    coolingNote: string;
    rollerHighlightTitle: string;
    rollerHighlightBody: string;
    rollerMetrics: {
      value: string;
      label: string;
    }[];
    usageTitle: string;
    usageSteps: UsageStep[];
    comfortFeatures: ComfortFeature[];
    ctaPrompt: string;
  };
  specs: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: ProductSpecItem[];
    ctaPrompt: string;
  };
  science: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    certNumber: string;
    certCategory: string;
    certDescription: string;
    extractsTitle: string;
    extracts: ExtractItem[];
    ctaPrompt: string;
  };
  reviews: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    verifiedLabel: string;
    items: ReviewItem[];
    ctaPrompt: string;
  };
  faq: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: FaqItem[];
    ctaPrompt: string;
  };
  finalOffer: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    summaryItems: {
      value: string;
      label: string;
    }[];
    kaspiNote: string;
  };
  social: {
    title: string;
    subtitle: string;
    instagramLabel: string;
    instagramHandle: string;
  };
  footer: {
    legalNote: string;
    certLine: string;
    kaspiLinkLabel: string;
  };
}

export const CONTENT: Record<Locale, TranslationContent> = {
  ru: {
    storeName: 'TopMarket8',
    storeTagline: 'Официальный магазин уходовой косметики на Kaspi.kz',
    nav: {
      results: 'Результаты',
      specs: 'Характеристики',
      reviews: 'Отзывы',
      faq: 'Вопросы',
    },
    cta: {
      buyKaspi: 'Купить на Kaspi.kz',
      kaspiSubtitle: 'Магазин TopMarket8 · Быстрая доставка по Казахстану',
      storeBadge: 'Продавец: TopMarket8 на Kaspi.kz',
      plaqueSub: 'Официальный продавец TopMarket8 · Kaspi Red и рассрочка',
      plaqueTimerHint: 'до конца спеццены',
    },
    timer: {
      activePrefix: 'Специальная цена действует еще',
      activeSuffix: '— после окончания отсчета цена может вырасти и вернуться к стандартной',
      expiredMessage: 'Время действия спецпредложения истекло — проверьте актуальную цену в Kaspi',
      stickyActiveLabel: 'Спеццена еще',
      stickyExpiredLabel: 'Проверьте цену в Kaspi',
    },
    hero: {
      kicker: 'Оригинал в TopMarket8 · Сертификат NMPA № 202410635',
      headline: 'Стоп выпадению волос! Разбудите спящие луковицы и верните густоту за 5 минут в день',
      subheadline:
        'Удобная сыворотка с охлаждающим 3D-роллером для мужчин и женщин: помогает остановить выпадение, разбудить спящие луковицы и вернуть волосам плотность без жирности.',
      bullets: [
        '4 натуральные травы: женьшень, горец, имбирь и пустырник',
        '3D-роллер приятно холодит и мягко массирует корни',
        'Не жирнит волосы и не требует смывания',
        'Пробор становится гуще и появляется новый «пушок»',
      ],
      productSpecs: '30 мл · 3D-роллер 360° · 5 минут в день',
      imageCaption: 'Хватает в среднем на 15 применений (~2 мл за раз) · Подходит женщинам и мужчинам',
      shortSpecs: [
        { value: '30 мл', label: 'объем тюбика' },
        { value: '3D-роллер', label: 'массаж 360°' },
        { value: 'NMPA', label: 'сертификат № 202410635' },
      ],
      gallery: [
        {
          id: 'floating',
          image: PRODUCT_IMAGES.floatingHero,
          label: '30 мл + коробка',
          caption: 'Оригинальный тюбик 30 мл с 3D-роллером и фирменной упаковкой',
        },
        {
          id: 'ice',
          image: PRODUCT_IMAGES.tubeIceBlue,
          label: 'Вид на фоне',
          caption: 'Компактный формат 30 мл с прохладным металлическим роликом',
        },
        {
          id: 'roller-open',
          image: PRODUCT_IMAGES.rollerOnBox,
          label: '3D-роллер 360°',
          caption: 'Три стальных шарика крутятся на 360° и мягко массируют кожу головы',
        },
        {
          id: 'clean',
          image: PRODUCT_IMAGES.rollerWhiteStudio,
          label: 'Чистое нанесение',
          caption: 'Сыворотка попадает прямо к корням, не пачкая руки',
        },
      ],
    },
    beforeAfter: {
      sectionKicker: 'Реальные изменения при регулярном уходе',
      sectionTitle: 'Результаты «До / После» и что меняется по неделям',
      sectionSubtitle:
        'Результаты для женщин и мужчин при ежедневном 5-минутном массаже с 3D-роллером.',
      cases: [
        {
          id: 'woman',
          tabLabel: 'Для женщин · Линия лба и виски',
          title: 'Зарастание залысин по краю лба и густые корни',
          beforeLabel: 'До начала курса',
          afterLabel: 'При регулярном уходе',
          description:
            'После стресса или родов линия лба и висков часто редеет. При регулярном уходе выпадает меньше волос, а по краю лба пробивается новый густой «пушок».',
          expectedDynamics: 'Наносим по краю лба и пробору · ~2 мл в день',
          resultBadge: 'Новые волоски у лба',
          image: PRODUCT_IMAGES.beforeAfterWoman,
          imageAlt: 'Сравнение До и После у женщины в зоне лба и висков',
        },
        {
          id: 'parting',
          tabLabel: 'Широкий пробор',
          title: 'Пробор становится уже, а волосы у корней — плотнее',
          beforeLabel: 'До начала курса',
          afterLabel: 'При регулярном уходе',
          description:
            'Если кожа головы стала просвечивать на макушке и по пробору, роллер удобно проводить прямо по линии пробора. Корни получают питание, и просвет постепенно закрывается.',
          expectedDynamics: 'Наносим по проборам и макушке · без жирности у корней',
          resultBadge: 'Заметное сужение пробора',
          image: PRODUCT_IMAGES.beforeAfterParting,
          imageAlt: 'Сравнение До и После сужения пробора на коже головы',
        },
        {
          id: 'temples',
          tabLabel: 'Для мужчин · Залысины у висков',
          title: 'Зарастание висков и выравнивание линии роста волос',
          beforeLabel: 'До начала курса',
          afterLabel: 'При регулярном уходе',
          description:
            'На мужских висках и у высокого лба сначала прекращается сильное выпадение, затем вдоль линии роста пробиваются новые волоски, которые со временем крепнут.',
          expectedDynamics: 'Наносим по линии висков и лба · ~2 мл в день',
          resultBadge: 'Новые волоски вдоль висков',
          image: PRODUCT_IMAGES.beforeAfterTemples,
          imageAlt: 'Сравнение До и После у мужчины в зоне висков и линии роста волос',
        },
      ],
      resultStats: [
        {
          value: '1–2 нед.',
          title: 'Меньше волос на расческе',
          detail: 'Охлаждающий массаж снимает напряжение кожи головы — при мытье и расчесывании выпадает заметно меньше волос.',
        },
        {
          value: '3–6 нед.',
          title: 'Появляется новый «пушок»',
          detail: 'Спящие луковицы просыпаются: на висках и по пробору появляются первые мягкие волоски.',
        },
        {
          value: '7–12 нед.',
          title: 'Видимая густота и объем',
          detail: 'Молодые волосы становятся толще, пробор выглядит плотнее, а прическа дольше держит объем у корней.',
        },
        {
          value: '5 минут',
          title: 'Простой уход дома',
          detail: 'Всего 1 раз в день без смывания, липкости и сложных процедур — можно сразу выходить из дома.',
        },
      ],
      timelineTitle: 'Как меняется состояние волос по этапам',
      timeline: [
        {
          period: '1–2 недели',
          stage: 'Останавливается «волосопад»',
          detail: 'После душа и расчесывания остается меньше волос, кожа головы чувствует свежесть и комфорт.',
        },
        {
          period: '3–6 недель',
          stage: 'Просыпаются спящие корни',
          detail: 'Экстракты женьшеня и имбиря усиливают приток крови — на проборе и висках заметна новая поросль.',
        },
        {
          period: '7–12 недель',
          stage: 'Волосы крепнут и уплотняются',
          detail: 'Стержень волоса становится плотнее, уменьшается ломкость, а пробор визуально сужается.',
        },
      ],
      ctaPrompt: 'Заберите сыворотку в TopMarket8 на Kaspi.kz по специальной цене',
    },
    audience: {
      sectionKicker: 'Узнайте себя',
      sectionTitle: 'В каких случаях сыворотка помогает лучше всего',
      sectionSubtitle:
        'Понятное решение на каждый день для мужчин и женщин, если волосы начали редеть или сильно выпадать.',
      cards: [
        {
          index: '01',
          iconName: 'hairline',
          title: 'Появились залысины или лоб стал выше',
          symptom: 'На висках и по краю лба волосы стали редкими и тонкими.',
          mechanism: 'Роллер точечно доставляет женьшень и имбирь прямо к краевым луковицам, помогая пробудить рост.',
        },
        {
          index: '02',
          iconName: 'parting',
          title: 'Расширяется пробор и светится кожа',
          symptom: 'На ярком свету или на фото заметно просвечивает макушка.',
          mechanism: 'Горец многоцветковый укрепляет корни, чтобы пробор снова стал плотным и узким.',
        },
        {
          index: '03',
          iconName: 'stress',
          title: 'Выпадение после стресса, болезни или осенью',
          symptom: 'Много волос остается на подушке, одежде и после каждого мытья головы.',
          mechanism: 'Пустырник и прохладный массаж успокаивают кожу головы и тормозят резкое выпадение.',
        },
        {
          index: '04',
          iconName: 'breakage',
          title: 'Волосы стали тонкими, слабыми и ломкими',
          symptom: 'Хвост потерял объем, волосы легко обламываются и не держат укладку.',
          mechanism: 'Питание луковиц помогает отрастать более плотному, упругому и живому волосу.',
        },
        {
          index: '05',
          iconName: 'early',
          title: 'Начальное облысение у мужчин и женщин',
          symptom: 'Хочется вовремя поддержать волосы простым средством без гормонов и жирных масел.',
          mechanism: 'Сертифицированная формула NMPA № 202410635 подходит для регулярного курса дома.',
        },
      ],
      ctaPrompt: 'Оформите заказ за 1 минуту в магазине TopMarket8 на Kaspi.kz',
    },
    roller: {
      sectionKicker: 'Удобно с первого прикосновения',
      sectionTitle: 'Почему 3D-роллер 360° намного удобнее обычных капель',
      sectionSubtitle:
        'Не нужно пачкать руки, отмерять пипеткой и размазывать масло по волосам — три стальных шарика делают все сами за 5 минут.',
      coolingNote: 'Приятный холодок металла · Руки всегда чистые',
      rollerHighlightTitle: 'Массаж + сыворотка попадает точно к корням',
      rollerHighlightBody:
        'Стальные шарики мягко вращаются на 360°, охлаждают кожу головы и улучшают кровообращение. Сыворотка подается дозированно прямо по пробору — не стекает на лицо и не тратится впустую.',
      rollerMetrics: [
        { value: '360°', label: 'вращение 3 металлических шариков' },
        { value: '30 мл', label: 'удобный тюбик (~15 применений)' },
        { value: '~2 мл', label: 'хватает на 1 полный массаж' },
        { value: '5 мин', label: 'всего 1 раз в день дома' },
      ],
      usageTitle: 'Как пользоваться: 3 простых шага',
      usageSteps: [
        {
          step: 'Шаг 1',
          title: 'Снимите колпачок и слегка нажмите на тюбик',
          description: 'Выдавите совсем немного сыворотки, чтобы смочить три стальных шарика.',
          timeHint: '10 секунд',
        },
        {
          step: 'Шаг 2',
          title: 'Проведите роллером по проборам и вискам',
          description: 'Легкими круговыми движениями массируйте проблемные зоны 5 минут до ощущения свежести.',
          timeHint: '5 минут',
        },
        {
          step: 'Шаг 3',
          title: 'Не смывайте — идите по своим делам',
          description: 'Водянистая сыворотка впитается за пару минут без липкости и жирного блеска.',
          timeHint: 'Не требует смывания',
        },
      ],
      comfortFeatures: [
        {
          metric: 'Не жирнит',
          iconName: 'droplets',
          title: 'Не нужно смывать',
          description: 'Легкая как тоник: корни остаются свежими и чистыми даже утром перед работой.',
        },
        {
          metric: 'Без перерасхода',
          iconName: 'target',
          title: 'Точечно по проборам',
          description: 'Ложится именно на кожу головы там, где нужно, а не остается на длине волос.',
        },
        {
          metric: '30 мл',
          iconName: 'luggage',
          title: 'Удобно в дорогу и зал',
          description: 'Легкий герметичный тюбик помещается в любую косметичку или сумку.',
        },
        {
          metric: '1 раз / день',
          iconName: 'clock',
          title: '5 минут в день',
          description: 'Легко превратить в привычку — утром перед укладкой или вечером после душа.',
        },
      ],
      ctaPrompt: 'Закажите удобный 3D-роллер в TopMarket8 на Kaspi.kz',
    },
    specs: {
      sectionKicker: 'Паспорт продукта',
      sectionTitle: 'Характеристики сыворотки',
      sectionSubtitle:
        'Вся ключевая информация о составе, объеме, аппликаторе и сертификации в одной таблице.',
      items: [
        { label: 'Название', value: 'Anti Drop Hair Tonic Essence (сыворотка для роста волос)' },
        { label: 'Объем флакона', value: '30 мл (~15 применений по ~2 мл)' },
        { label: 'Аппликатор', value: 'Встроенный охлаждающий 3D-роллер 360° (3 стальных шарика)' },
        { label: 'Текстура и смывание', value: 'Легкая водянистая, не жирнит, не требует смывания' },
        { label: 'Время процедуры', value: '1 раз в день по 5 минут массажа' },
        {
          label: 'Активные экстракты',
          value: 'Корень женьшеня, горец многоцветковый, корень имбиря, пустырник',
        },
        { label: 'Сертификация', value: 'Государственный сертификат NMPA № 202410635' },
        { label: 'Кому подходит', value: 'Мужчинам и женщинам с любым типом кожи головы' },
        { label: 'Официальный магазин', value: 'TopMarket8 на Kaspi.kz' },
      ],
      ctaPrompt: 'Закажите оригинальную сыворотку в TopMarket8 на Kaspi.kz',
    },
    science: {
      sectionKicker: 'Натуральный состав',
      sectionTitle: '4 природных экстракта для силы и густоты волос',
      sectionSubtitle:
        'Проверенная формула из четырех активных растений, которые питают корни и будят спящие луковицы.',
      certNumber: 'NMPA № 202410635',
      certCategory: 'Официальная регистрация · Средство против выпадения волос',
      certDescription:
        'Сыворотка зарегистрирована как специальное косметическое средство против выпадения волос и прошла проверку качества и безопасности.',
      extractsTitle: '4 главных растения внутри тюбика',
      extracts: [
        {
          index: '01',
          name: 'Корень женьшеня',
          subtitle: 'Питание и рост',
          role: 'Будит спящие волосяные луковицы, дает им энергию и помогает быстрее расти новым волосам.',
        },
        {
          index: '02',
          name: 'Горец многоцветковый',
          subtitle: 'Укрепление и густота',
          role: 'Знаменитый корень для плотности волос: укрепляет луковицы и защищает от раннего истончения.',
        },
        {
          index: '03',
          name: 'Корень имбиря',
          subtitle: 'Теплый приток крови',
          role: 'Мягко разогревает микроциркуляцию у корней, чтобы витамины и экстракты лучше доходили до луковиц.',
        },
        {
          index: '04',
          name: 'Экстракт пустырника',
          subtitle: 'Спокойная кожа головы',
          role: 'Снимает раздражение и помогает остановить выпадение, вызванное стрессом и усталостью.',
        },
      ],
      ctaPrompt: 'Оригинальная сертифицированная сыворотка в наличии в TopMarket8 на Kaspi.kz',
    },
    reviews: {
      sectionKicker: 'Отзывы покупателей TopMarket8',
      sectionTitle: 'Что пишут клиенты после курса сыворотки',
      sectionSubtitle:
        'Реальные впечатления мужчин и женщин из разных городов Казахстана, которые заказывали сыворотку на Kaspi.',
      verifiedLabel: 'Покупка в TopMarket8 · Kaspi.kz',
      items: [
        {
          id: 'rev-1',
          name: 'Айгерим К.',
          city: 'г. Алматы',
          problem: 'Расширялся пробор',
          duration: 'Пользуется 6 недель',
          rating: 5,
          text: 'После родов и стресса пробор стал прямо заметным. Заказала в TopMarket8, понравилось, что роллер холодный и вообще не жирнит корни — мажу утром перед работой. Через месяц на проборе полезли мелкие антеннки-волоски.',
        },
        {
          id: 'rev-2',
          name: 'Нурлан С.',
          city: 'г. Астана',
          problem: 'Залысины на висках',
          duration: 'Пользуется 2 месяца',
          rating: 5,
          text: 'Взял сначала один тюбик на пробу, потом заказал второй. Очень удобно, что не надо руками втирать и смывать потом — 5 минут вечером провел шариками по вискам и все. Виски реально стали темнее и плотнее.',
        },
        {
          id: 'rev-3',
          name: 'Мадина Т.',
          city: 'г. Шымкент',
          problem: 'Сезонное выпадение',
          duration: 'Пользуется 4 недели',
          rating: 5,
          text: 'Осенью волосы лезли пучками, страшно было расчесываться. Уже на вторую неделю с этим роллером заметила, что в ванной волос почти не остается. Приятный легкий запах трав, доставка с Kaspi пришла за 2 дня.',
        },
        {
          id: 'rev-4',
          name: 'Даулет Б.',
          city: 'г. Караганда',
          problem: 'Поредение на макушке',
          duration: 'Пользуется 8 недель',
          rating: 5,
          text: 'Беру с собой даже в зал в сумку, тюбик 30 мл компактный и не проливается. Массаж тремя шариками очень бодрит после душа. Жена первая сказала, что макушка меньше просвечивает.',
        },
        {
          id: 'rev-5',
          name: 'Асель Ж.',
          city: 'г. Актобе',
          problem: 'Тонкие и ломкие волосы',
          duration: 'Пользуется 5 недель',
          rating: 5,
          text: 'Раньше от масел голова сразу была грязной, приходилось мыть каждый день. Тут текстура как водичка, сразу впитывается и объем у корней держится. У меня уже появился заметный пушок на лбу.',
        },
        {
          id: 'rev-6',
          name: 'Ержан М.',
          city: 'г. Атырау',
          problem: 'Отступающая линия лба',
          duration: 'Пользуется 7 недель',
          rating: 5,
          text: 'Удобная штука без заморочек. Не липнет, быстро впитывается, приятно охлаждает кожу головы. По линии лба начали расти новые короткие волосы, заказал еще пару штук на курс.',
        },
      ],
      ctaPrompt: 'Присоединяйтесь к довольным покупателям TopMarket8 на Kaspi.kz',
    },
    faq: {
      sectionKicker: 'Частые вопросы (FAQ)',
      sectionTitle: 'Ответы на популярные вопросы перед покупкой',
      sectionSubtitle:
        'Собрали все, что чаще всего спрашивают наши клиенты перед заказом на Kaspi.kz.',
      items: [
        {
          id: 'faq-1',
          question: 'На сколько хватает одного тюбика 30 мл?',
          answer:
            'При среднем расходе около 2 мл за одно нанесение одного тюбика хватает примерно на 15 применений (около 2 недель ежедневного массажа). Для полноценного курса 1–2 месяца многие клиенты берут сразу 2–3 тюбика на Kaspi.',
        },
        {
          id: 'faq-2',
          question: 'Сыворотка точно не жирнит и не пачкает волосы?',
          answer:
            'Нет, это не масло, а легкая водянистая эссенция. Она впитывается за 2–3 минуты, не утяжеляет волосы у корней и не требует смывания. Ею спокойно можно пользоваться даже утром перед работой.',
        },
        {
          id: 'faq-3',
          question: 'Через сколько дней виден первый результат?',
          answer:
            'В первые 1–2 недели обычно снижается количество выпадающих волос на расческе. На 3–6 неделе начинают пробиваться новые тонкие волоски («пушок»), а через 7–12 недель регулярного массажа пробор становится заметно плотнее.',
        },
        {
          id: 'faq-4',
          question: 'Подходит ли сыворотка и мужчинам, и женщинам?',
          answer:
            'Да, формула универсальна: она работает и при женском поредении по пробору или после стресса/родов, и при мужских залысинах на висках и макушке.',
        },
        {
          id: 'faq-5',
          question: 'Есть ли синдром отмены после окончания курса?',
          answer:
            'Сыворотка не содержит гормональных компонентов — в основе растительные экстракты (женьшень, горец, имбирь, пустырник) и массаж 3D-роллером. Укрепленные корни сохраняют силу и после курса.',
        },
        {
          id: 'faq-6',
          question: 'Как быстро отправляет заказы магазин TopMarket8 на Kaspi.kz?',
          answer:
            'После оформления заказа на Kaspi.kz магазин TopMarket8 оперативно передает посылку в доставку Kaspi по всему Казахстану — доступна оплата картой, Kaspi Red и рассрочка.',
        },
      ],
      ctaPrompt: 'Остались вопросы? Откройте карточку TopMarket8 на Kaspi.kz и посмотрите отзывы и доставку',
    },
    finalOffer: {
      sectionKicker: 'Официальный магазин TopMarket8 на Kaspi.kz',
      sectionTitle: 'Успейте заказать сыворотку по специальной цене',
      sectionSubtitle:
        'Никаких анкет и звонков от менеджеров: нажмите кнопку ниже, чтобы сразу открыть карточку товара TopMarket8 в Kaspi.kz и оформить доставку Kaspi.',
      summaryItems: [
        { value: '30 мл', label: 'хватает на ~15 применений (~2 мл за раз)' },
        { value: '3D-роллер 360°', label: 'охлаждающий массаж 3 стальными шариками' },
        { value: 'NMPA № 202410635', label: 'официальный сертификат против выпадения' },
        { value: 'TopMarket8', label: 'надежный продавец и быстрая отправка' },
      ],
      kaspiNote: 'Оплата картой, Kaspi QR, Kaspi Red или в рассрочку 0-0-12 прямо на Kaspi.kz',
    },
    social: {
      title: 'Мы в соцсетях',
      subtitle: 'Обзоры, советы по уходу за волосами и новинки магазина TopMarket8 в Instagram',
      instagramLabel: 'Перейти в Instagram',
      instagramHandle: '@top_market_8',
    },
    footer: {
      legalNote:
        'Косметическое средство специального назначения для ухода за кожей головы и волосами. Выраженность результата зависит от индивидуальных особенностей и регулярности применения (рекомендуемый курс — от 4 до 12 недель).',
      certLine: 'Магазин: TopMarket8 · Сертификат: NMPA № 202410635 · Объем: 30 мл · 3D-роллер 360°',
      kaspiLinkLabel: 'Открыть TopMarket8 на Kaspi.kz',
    },
  },
  kk: {
    storeName: 'TopMarket8',
    storeTagline: 'Kaspi.kz-тегі күтім косметикасының ресми дүкені',
    nav: {
      results: 'Нәтижелер',
      specs: 'Сипаттама',
      reviews: 'Пікірлер',
      faq: 'Сұрақтар',
    },
    cta: {
      buyKaspi: 'Kaspi.kz-тен сатып алу',
      kaspiSubtitle: 'TopMarket8 дүкені · Қазақстан бойынша жылдам жеткізу',
      storeBadge: 'Сатушы: Kaspi.kz-тегі TopMarket8',
      plaqueSub: 'Ресми сатушы TopMarket8 · Kaspi Red және бөліп төлеу',
      plaqueTimerHint: 'арнайы баға аяқталғанша',
    },
    timer: {
      activePrefix: 'Арнайы баға',
      activeSuffix: 'бойы сақталады — уақыт біткен соң баға өсуі / бастапқы деңгейге оралуы мүмкін',
      expiredMessage: 'Арнайы ұсыныс уақыты аяқталды — Kaspi-дегі қазіргі бағаны тексеріңіз',
      stickyActiveLabel: 'Арнайы баға:',
      stickyExpiredLabel: 'Kaspi-де бағаны тексеріңіз',
    },
    hero: {
      kicker: 'TopMarket8 дүкеніндегі түпнұсқа · Сертификат NMPA № 202410635',
      headline: 'Шаш түсуін тоқтатыңыз! Ұйқыдағы түбірлерді оятып, күніне 5 минутта қалыңдығын қайтарыңыз',
      subheadline:
        'Ерлер мен әйелдерге арналған салқындатқыш 3D-роллері бар ыңғайлы сарысу: шаш түсуін азайтуға, ұйқыдағы түбірлерді оятуға және шашты майламай-ақ тығыздығын қайтаруға көмектеседі.',
      bullets: [
        '4 табиғи өсімдік: женьшень, көпгүлді таран, зімбір, арсланкұйрық',
        '3D-роллер бас терісін салқындатып, жұмсақ уқалайды',
        'Шашты майламайды және шаюды қажет етпейді',
        'Айырық қалыңдап, жаңа «түбіт» шаш өсе бастайды',
      ],
      productSpecs: '30 мл · 3D-роллер 360° · Күніне 5 минут',
      imageCaption: 'Орта есеппен ~15 рет жағуға жетеді (бір ретте ~2 мл) · Әйелдер мен ерлерге арналған',
      shortSpecs: [
        { value: '30 мл', label: 'флакон көлемі' },
        { value: '3D-роллер', label: '360° массаж' },
        { value: 'NMPA', label: 'сертификат № 202410635' },
      ],
      gallery: [
        {
          id: 'floating',
          image: PRODUCT_IMAGES.floatingHero,
          label: '30 мл + қорап',
          caption: 'Фирмалық қораптағы 3D-роллері бар түпнұсқа 30 мл тюбик',
        },
        {
          id: 'ice',
          image: PRODUCT_IMAGES.tubeIceBlue,
          label: 'Тюбик түрі',
          caption: 'Салқындатқыш металл роллері бар ықшам 30 мл формат',
        },
        {
          id: 'roller-open',
          image: PRODUCT_IMAGES.rollerOnBox,
          label: '3D-роллер 360°',
          caption: 'Үш металл шарик 360° айналып, бас терісіне жұмсақ массаж жасайды',
        },
        {
          id: 'clean',
          image: PRODUCT_IMAGES.rollerWhiteStudio,
          label: 'Таза жағу',
          caption: 'Сарысу қолыңызды былғамай-ақ тікелей шаш түбіне жетеді',
        },
      ],
    },
    beforeAfter: {
      sectionKicker: 'Тұрақты күтім кезіндегі нақты өзгерістер',
      sectionTitle: '«Дейін / Кейін» нәтижелері және апталар бойынша динамика',
      sectionSubtitle:
        'Күнделікті 3D-роллермен 5 минуттық массаж кезіндегі әйелдер мен ерлердегі нәтижелер.',
      cases: [
        {
          id: 'woman',
          tabLabel: 'Әйелдерге · Маңдай мен шеке',
          title: 'Маңдай жиегінің толуы және түбірдің қалыңдауы',
          beforeLabel: 'Курсқа дейін',
          afterLabel: 'Тұрақты күтімде',
          description:
            'Күйзелістен немесе босанғаннан кейін маңдай мен шеке жиегі сиреп кетеді. Тұрақты күтімде шаш түсуі азайып, маңдай бойынан жаңа «түбіт» шаш өседі.',
          expectedDynamics: 'Маңдай жиегі мен айырыққа жағамыз · күніне ~2 мл',
          resultBadge: 'Маңдай тұсында жаңа шаш',
          image: PRODUCT_IMAGES.beforeAfterWoman,
          imageAlt: 'Әйелдегі маңдай мен шеке аймағының Дейін және Кейін нәтижесі',
        },
        {
          id: 'parting',
          tabLabel: 'Кеңейген айырық',
          title: 'Айырық тарылып, түбір маңындағы шаш қалыңдайды',
          beforeLabel: 'Курсқа дейін',
          afterLabel: 'Тұрақты күтімде',
          description:
            'Төбе мен айырық тұсынан бас терісі көріне бастаса, роллермен дәл айырық бойын жүргізу өте ыңғайлы. Түбірлер нәрленіп, бос орын біртіндеп толады.',
          expectedDynamics: 'Айырық пен төбе аймағына жағамыз · түбірді майламайды',
          resultBadge: 'Айырықтың айқын тарылуы',
          image: PRODUCT_IMAGES.beforeAfterParting,
          imageAlt: 'Шаш айырығының тарылуы бойынша Дейін және Кейін салыстыруы',
        },
        {
          id: 'temples',
          tabLabel: 'Ерлерге · Шеке аймағы',
          title: 'Шеке аймағының толуы және шаш өсу сызығының нығаюы',
          beforeLabel: 'Курсқа дейін',
          afterLabel: 'Тұрақты күтімде',
          description:
            'Ерлердегі шеке мен маңдай сызығында алдымен шаштың көп түсуі басылады, содан кейін түбір бойымен жаңа шаштар шығып, біртіндеп қатаяды.',
          expectedDynamics: 'Шеке мен маңдай сызығына жағамыз · күніне ~2 мл',
          resultBadge: 'Шеке тұсында жаңа шаштар',
          image: PRODUCT_IMAGES.beforeAfterTemples,
          imageAlt: 'Ер адамдағы шеке мен шаш өсу сызығының Дейін және Кейін нәтижесі',
        },
      ],
      resultStats: [
        {
          value: '1–2 апта',
          title: 'Тарақта шаш аз қалады',
          detail: 'Салқын массаж бас терісінің шаршауын басады — жуыну және тарау кезінде шаш түсуі азаяды.',
        },
        {
          value: '3–6 апта',
          title: 'Жаңа «түбіт» өсе бастайды',
          detail: 'Ұйқыдағы түбірлер оянып, шеке мен айырық бойында алғашқы жіңішке талшықтар пайда болады.',
        },
        {
          value: '7–12 апта',
          title: 'Көзге көрінерлік қалыңдық',
          detail: 'Жаңа шаштар жуандап, айырық тығыздалады, ал түбірдегі көлем ұзағырақ сақталады.',
        },
        {
          value: '5 минут',
          title: 'Үйдегі оңай күтім',
          detail: 'Күніне 1 рет шаймай-ақ жағасыз — жабыспайды, бірден сыртқа шыға беруге болады.',
        },
      ],
      timelineTitle: 'Шаш күйі кезең-кезеңімен қалай өзгереді',
      timeline: [
        {
          period: '1–2 апта',
          stage: 'Шаштың көп түсуі тоқтайды',
          detail: 'Жуынғаннан және тарағаннан кейін шаш аз түседі, бас терісінде таза салқындық сезіледі.',
        },
        {
          period: '3–6 апта',
          stage: 'Ұйқыдағы түбірлер оянады',
          detail: 'Женьшень мен зімбір қан айналымын жақсартып, айырық пен шекеде жаңа өскін пайда болады.',
        },
        {
          period: '7–12 апта',
          stage: 'Шаш қатайып, тығыздалады',
          detail: 'Шаш талшығы жуандайды, сынуы азайып, айырық көзге көрінерлік тарылады.',
        },
      ],
      ctaPrompt: 'Арнайы бағамен TopMarket8 дүкенінен Kaspi.kz арқылы алып үлгеріңіз',
    },
    audience: {
      sectionKicker: 'Өзіңізді танып көріңіз',
      sectionTitle: 'Сарысу қандай жағдайларда жақсы көмектеседі',
      sectionSubtitle:
        'Егер шашыңыз сиреп немесе көп түсе бастаса, ерлер мен әйелдерге арналған күнделікті түсінікті шешім.',
      cards: [
        {
          index: '01',
          iconName: 'hairline',
          title: 'Шеке ашылып, маңдай биіктеп барады',
          symptom: 'Шеке мен маңдай жиегіндегі шаштар сиреп, жіңішкеріп кетті.',
          mechanism: 'Роллер женьшень мен зімбірді дәл шеткі түбірлерге жеткізіп, өсуін оятады.',
        },
        {
          index: '02',
          iconName: 'parting',
          title: 'Айырық кеңейіп, бас терісі көрінеді',
          symptom: 'Жарықта немесе суретте төбе тұсы айқын байқалып қалады.',
          mechanism: 'Көпгүлді таран түбірді бекітіп, айырықтың қайта тығыздалуына көмектеседі.',
        },
        {
          index: '03',
          iconName: 'stress',
          title: 'Күйзелістен, аурудан кейін немесе күзде түсу',
          symptom: 'Жастықта, киімде және әр жуынған сайын шаш көп қалады.',
          mechanism: 'Арсланкұйрық пен салқын массаж бас терісін тыныштандырып, күрт түсуді тежейді.',
        },
        {
          index: '04',
          iconName: 'breakage',
          title: 'Шаш жұқарып, әлсіз әрі сынғыш болды',
          symptom: 'Бұрым көлемін жоғалтты, шаш оңай үзіліп, сәнін ұстамайды.',
          mechanism: 'Түбірді қоректендіру анағұрлым тығыз, серпімді және сау шаш өсіруге көмектеседі.',
        },
        {
          index: '05',
          iconName: 'early',
          title: 'Ерлер мен әйелдердегі бастапқы сиреу',
          symptom: 'Гормонсыз және майлы ізі жоқ қарапайым құралмен шашты уақытында қолдағыңыз келеді.',
          mechanism: 'NMPA № 202410635 сертификатталған формуласы үйде тұрақты қолдануға қолайлы.',
        },
      ],
      ctaPrompt: 'Kaspi.kz-тегі TopMarket8 дүкенінен 1 минутта тапсырыс беріңіз',
    },
    roller: {
      sectionKicker: 'Алғашқы қолданғаннан-ақ ыңғайлы',
      sectionTitle: 'Неге 3D-роллер 360° қарапайым тамшылардан әлдеқайда қолайлы',
      sectionSubtitle:
        'Қолды былғаудың, пипеткамен өлшеудің және майды шашқа жағудың қажеті жоқ — үш металл шарик бәрін 5 минутта өзі жасайды.',
      coolingNote: 'Металдың жағымды салқындығы · Қолыңыз әрқашан таза',
      rollerHighlightTitle: 'Массаж + сарысу дәл шаш түбіне сіңеді',
      rollerHighlightBody:
        'Металл шариктер 360° еркін айналып, бас терісін салқындатады және қан айналымын жақсартады. Сарысу дәл айырық бойымен өлшеніп беріледі — бетке ақпайды және босқа кетпейді.',
      rollerMetrics: [
        { value: '360°', label: '3 металл шариктің айналуы' },
        { value: '30 мл', label: 'ыңғайлы тюбик (~15 рет жағу)' },
        { value: '~2 мл', label: '1 толық массажға жетеді' },
        { value: '5 мин', label: 'үйде күніне бар болғаны 1 рет' },
      ],
      usageTitle: 'Қолдану тәсілі: 3 оңай қадам',
      usageSteps: [
        {
          step: '1-қадам',
          title: 'Қақпағын ашып, тюбикті сәл басыңыз',
          description: 'Үш металл шарикті сулау үшін сарысуды аздап шығарыңыз.',
          timeHint: '10 секунд',
        },
        {
          step: '2-қадам',
          title: 'Роллерді айырық пен шеке бойымен жүргізіңіз',
          description: 'Аймақты жеңіл айналмалы қимылмен сергітетін салқындық сезілгенше 5 минут уқалаңыз.',
          timeHint: '5 минут',
        },
        {
          step: '3-қадам',
          title: 'Шаймаңыз — күнделікті ісіңізге кірісе беріңіз',
          description: 'Сулы сарысу екі минутта жабыспай-ақ және майлы жылтырсыз сіңіп кетеді.',
          timeHint: 'Шаюды қажет етпейді',
        },
      ],
      comfortFeatures: [
        {
          metric: 'Майламайды',
          iconName: 'droplets',
          title: 'Шаюды қажет етпейді',
          description: 'Тоник сияқты жеңіл: таңертең жұмысқа шығар алдында жақсаңыз да шаш түбі таза қалады.',
        },
        {
          metric: 'Ысырапсыз',
          iconName: 'target',
          title: 'Айырыққа дәл жағылады',
          description: 'Шаштың ұзындығында қалып қоймай, тек қажетті бас терісіне ғана жетеді.',
        },
        {
          metric: '30 мл',
          iconName: 'luggage',
          title: 'Сапар мен залға қолайлы',
          description: 'Жеңіл герметикалық тюбик кез келген сөмкеге немесе косметичкаға оңай сыяды.',
        },
        {
          metric: 'Күніне 1 рет',
          iconName: 'clock',
          title: 'Күніне 5 минут',
          description: 'Әдетке айналдыру оңай — таңертең шаш үлгісін жасар алдында немесе кешке душтан кейін.',
        },
      ],
      ctaPrompt: 'Ыңғайлы 3D-роллерді Kaspi.kz-тегі TopMarket8 дүкенінен тапсырыс беріңіз',
    },
    specs: {
      sectionKicker: 'Тауар паспорты',
      sectionTitle: 'Сарысу сипаттамасы',
      sectionSubtitle:
        'Құрамы, көлемі, аппликаторы және сертификаты туралы барлық негізгі мәлімет бір кестеде.',
      items: [
        { label: 'Атауы', value: 'Anti Drop Hair Tonic Essence (шаш өсуіне арналған сарысу)' },
        { label: 'Флакон көлемі', value: '30 мл (шамамен ~15 рет, бір жағуға ~2 мл)' },
        { label: 'Аппликатор', value: 'Кіріктірілген салқындатқыш 3D-роллер 360° (3 металл шарик)' },
        { label: 'Текстурасы және шаю', value: 'Жеңіл сулы текстура, майламайды, шаюды қажет етпейді' },
        { label: 'Қолдану уақыты', value: 'Күніне 1 рет, 5 минут жеңіл массаж' },
        {
          label: 'Белсенді сығындылар',
          value: 'Женьшень тамыры, көпгүлді таран, зімбір тамыры, арсланкұйрық',
        },
        { label: 'Сертификаттау', value: 'Мемлекеттік сертификат NMPA № 202410635' },
        { label: 'Кімге жарайды', value: 'Кез келген бас терісі бар ерлер мен әйелдерге' },
        { label: 'Ресми дүкен', value: 'Kaspi.kz-тегі TopMarket8' },
      ],
      ctaPrompt: 'Түпнұсқа сарысуға TopMarket8 дүкенінен Kaspi.kz-те тапсырыс беріңіз',
    },
    science: {
      sectionKicker: 'Табиғи құрам',
      sectionTitle: 'Шаштың күші мен қалыңдығына арналған 4 табиғи сығынды',
      sectionSubtitle:
        'Түбірді қоректендіріп, ұйқыдағы талшықтарды оятатын төрт белсенді өсімдіктің тексерілген формуласы.',
      certNumber: 'NMPA № 202410635',
      certCategory: 'Ресми тіркеу · Шаш түсуіне қарсы арнайы құрал',
      certDescription:
        'Сарысу шаш түсуіне қарсы арнайы косметикалық құрал ретінде тіркеліп, сапа және қауіпсіздік тексерісінен өткен.',
      extractsTitle: 'Тюбиктің ішіндегі 4 негізгі өсімдік',
      extracts: [
        {
          index: '01',
          name: 'Женьшень тамырының сығындысы',
          subtitle: 'Қорек пен өсу',
          role: 'Ұйқыдағы шаш түбірлерін оятып, қуат береді және жаңа шаштың тезірек өсуіне көмектеседі.',
        },
        {
          index: '02',
          name: 'Көпгүлді таран сығындысы',
          subtitle: 'Нығайту мен қалыңдық',
          role: 'Шаш тығыздығына арналған танымал тамыр: түбірді бекітеді және ерте жұқарудан қорғайды.',
        },
        {
          index: '03',
          name: 'Зімбір тамырының сығындысы',
          subtitle: 'Жылы қан айналымы',
          role: 'Дәрумендер мен сығындылар түбірге жақсы жетуі үшін шаш түбіндегі қан айналымын жұмсақ жандандырады.',
        },
        {
          index: '04',
          name: 'Арсланкұйрық сығындысы',
          subtitle: 'Тыныш бас терісі',
          role: 'Тітіркенуді басады және күйзеліс пен шаршаудан болатын шаш түсуін тоқтатуға көмектеседі.',
        },
      ],
      ctaPrompt: 'Сертификатталған түпнұсқа сарысу Kaspi.kz-тегі TopMarket8 дүкенінде бар',
    },
    reviews: {
      sectionKicker: 'TopMarket8 сатып алушыларының пікірлері',
      sectionTitle: 'Сарысу курсын қолданған клиенттер не дейді',
      sectionSubtitle:
        'Kaspi арқылы тапсырыс берген Қазақстанның түрлі қалаларындағы ерлер мен әйелдердің шынайы әсерлері.',
      verifiedLabel: 'TopMarket8 дүкенінен сатып алынды · Kaspi.kz',
      items: [
        {
          id: 'rev-1',
          name: 'Айгерім Қ.',
          city: 'Алматы қ.',
          problem: 'Айырығы кеңейе бастаған',
          duration: '6 апта қолдануда',
          rating: 5,
          text: 'Босанғаннан және күйзелістен кейін айырығым қатты байқала бастады. TopMarket8-ден тапсырыс бердім, роллері салқын әрі шаш түбін мүлдем майламайтыны ұнады — таңертең жұмыс алдында жағамын. Бір айдан соң айырықтан ұсақ шаштар шыға бастады.',
        },
        {
          id: 'rev-2',
          name: 'Нұрлан С.',
          city: 'Астана қ.',
          problem: 'Шекесі ашыла бастаған',
          duration: '2 ай қолдануда',
          rating: 5,
          text: 'Алдымен байқап көруге бір тюбик алдым, кейін екіншісіне тапсырыс бердім. Қолмен уқалап, кейін жуудың қажеті жоқ екені өте ыңғайлы — кешке 5 минут шарикпен шекені жүргізсең болды. Шеке тұсы расымен қоюланып қалды.',
        },
        {
          id: 'rev-3',
          name: 'Мәдина Т.',
          city: 'Шымкент қ.',
          problem: 'Маусымдық түсу',
          duration: '4 апта қолдануда',
          rating: 5,
          text: 'Күзде шашым уыстап түсетін, тарауға қорқатынмын. Осы роллермен екінші аптада-ақ жуынғанда шаштың аз түсетінін байқадым. Шөптің жеңіл жағымды иісі бар, Kaspi-ден 2 күнде жеткізілді.',
        },
        {
          id: 'rev-4',
          name: 'Дәулет Б.',
          city: 'Қарағанды қ.',
          problem: 'Төбе тұсының сиреуі',
          duration: '8 апта қолдануда',
          rating: 5,
          text: 'Спортзалға сөмкеме салып жүремін, 30 мл тюбик ықшам әрі төгілмейді. Душтан кейін үш шарикпен массаж жасаған қатты сергітеді. Төбе тұсы бұрынғыдай көрінбейтінін бірінші әйелім байқады.',
        },
        {
          id: 'rev-5',
          name: 'Әсел Ж.',
          city: 'Ақтөбе қ.',
          problem: 'Жұқа және сынғыш шаш',
          duration: '5 апта қолдануда',
          rating: 5,
          text: 'Бұрын май жақсам басым бірден кір болып, күн сайын жууға тура келетін. Бұл сарысу су сияқты, бірден сіңеді де түбірдегі көлем сақталады. Маңдайымда жаңа түбіт шаштар өсіп келеді.',
        },
        {
          id: 'rev-6',
          name: 'Ержан М.',
          city: 'Атырау қ.',
          problem: 'Маңдай сызығының шегінуі',
          duration: '7 апта қолдануда',
          rating: 5,
          text: 'Артық әуресі жоқ ыңғайлы құрал. Жабыспайды, тез сіңеді, бас терісін жағымды салқындатады. Маңдай жиегінде жаңа қысқа шаштар өсе бастады, курсқа тағы екеуіне тапсырыс бердім.',
        },
      ],
      ctaPrompt: 'Kaspi.kz-тегі TopMarket8 дүкенінің риза клиенттеріне қосылыңыз',
    },
    faq: {
      sectionKicker: 'Жиі қойылатын сұрақтар',
      sectionTitle: 'Сатып алу алдындағы негізгі сұрақтарға жауаптар',
      sectionSubtitle:
        'Kaspi.kz-те тапсырыс берер алдында клиенттер жиі сұрайтын маңызды жайттарды жинадық.',
      items: [
        {
          id: 'faq-1',
          question: 'Бір 30 мл тюбик қанша уақытқа жетеді?',
          answer:
            'Бір қолданғанда орта есеппен ~2 мл жұмсалса, бір тюбик шамамен 15 ретке (күнделікті 2 аптаға жуық массажға) жетеді. 1–2 айлық толық курс үшін көп клиенттер Kaspi-ден бірден 2–3 дана алады.',
        },
        {
          id: 'faq-2',
          question: 'Сарысу шашты майлап, кірлетпей ме?',
          answer:
            'Жоқ, бұл май емес, су сияқты жеңіл эссенция. 2–3 минутта сіңіп кетеді, шаш түбін ауырлатпайды және шаюды қажет етпейді. Таңертең жұмысқа шығар алдында да жаға беруге болады.',
        },
        {
          id: 'faq-3',
          question: 'Алғашқы нәтиже неше күнде байқалады?',
          answer:
            'Алғашқы 1–2 аптада тарақта қалатын шаш саны азая бастайды. 3–6 аптада жаңа жіңішке «түбіт» шаштар шыға бастайды, ал 7–12 апта тұрақты қолданғанда айырық айтарлықтай тығыздалады.',
        },
        {
          id: 'faq-4',
          question: 'Сарысу ерлерге де, әйелдерге де жарай ма?',
          answer:
            'Иә, формула әмбебап: әйелдердегі айырық сиреуі мен стресстен/босанудан кейінгі шаш түсуіне де, ерлердегі шеке мен төбе аймағының сиреуіне де тиімді.',
        },
        {
          id: 'faq-5',
          question: 'Курстан кейін шаш қайта түсіп кетпей ме?',
          answer:
            'Құрамында гормоналды заттар жоқ — негізі өсімдік сығындыларынан (женьшень, көпгүлді таран, зімбір, арсланкұйрық) және 3D-роллер массажынан тұрады. Нығайған түбірлер курстан кейін де беріктігін сақтайды.',
        },
        {
          id: 'faq-6',
          question: 'Kaspi.kz-тегі TopMarket8 тапсырысты қаншалықты тез жібереді?',
          answer:
            'Kaspi.kz-те тапсырыс рәсімделген соң TopMarket8 дүкені тауарды Қазақстан бойынша Kaspi жеткізуге жылдам жөнелтеді — карта, Kaspi Red және бөліп төлеу бар.',
        },
      ],
      ctaPrompt: 'Тағы сұрақтарыңыз бар ма? Kaspi.kz-тегі TopMarket8 парақшасын ашып, жеткізу шарттарын қараңыз',
    },
    finalOffer: {
      sectionKicker: 'Kaspi.kz-тегі ресми TopMarket8 дүкені',
      sectionTitle: 'Сарысуды арнайы бағамен алып үлгеріңіз',
      sectionSubtitle:
        'Артық өтінім мен қоңырауларсыз: төмендегі батырманы басып, Kaspi.kz-тегі TopMarket8 тауар парақшасын ашып, Kaspi жеткізуін рәсімдеңіз.',
      summaryItems: [
        { value: '30 мл', label: '~15 рет жағуға жетеді (бір ретте ~2 мл)' },
        { value: '3D-роллер 360°', label: '3 металл шарикпен салқындатқыш массаж' },
        { value: 'NMPA № 202410635', label: 'шаш түсуіне қарсы ресми сертификат' },
        { value: 'TopMarket8', label: 'сенімді сатушы және жылдам жөнелту' },
      ],
      kaspiNote: 'Kaspi.kz-те картамен, Kaspi QR, Kaspi Red немесе 0-0-12 бөліп төлеу арқылы рәсімдеу',
    },
    social: {
      title: 'Біз әлеуметтік желіде',
      subtitle: 'TopMarket8 дүкенінің Instagram парақшасындағы шолулар, күтім кеңестері және жаңалықтар',
      instagramLabel: 'Instagram-ға өту',
      instagramHandle: '@top_market_8',
    },
    footer: {
      legalNote:
        'Бас терісі мен шаш күтіміне арналған арнайы мақсаттағы косметикалық құрал. Нәтиженің айқындығы жеке ерекшеліктерге және тұрақты қолдануға байланысты (ұсынылатын курс — 4–12 апта).',
      certLine: 'Дүкен: TopMarket8 · Сертификат: NMPA № 202410635 · Көлемі: 30 мл · 3D-роллер 360°',
      kaspiLinkLabel: 'Kaspi.kz-тегі TopMarket8 дүкенін ашу',
    },
  },
};
