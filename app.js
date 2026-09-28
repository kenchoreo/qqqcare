/* ==========================================================================
   QQQ CARE — Единая база товаров, переводов (RU/KZ), настроек и корзины
   ========================================================================== */

const SITE_CONFIG = {
  SHOW_PRICES: false,        // Поставь true, когда нужно будет включить цены
  WHATSAPP_PHONE: '77000603310',
  PHONE_DISPLAY: '+7 (700) 060-33-10',
  INSTAGRAM_URL: 'https://www.instagram.com/qqqcare.kz?stkn=MWl6ZThnaTM0NW4wcA==',
  INSTAGRAM_HANDLE: '@qqqcare.kz',
  EMAIL: 'hello@qqqcare.kz',
  PARTNER_EMAIL: 'partners@qqqcare.kz'
};

const PRODUCTS = [
  {
    id: 1,
    code: 'QUIRKY EYE CREAM',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image1.jpg', 'img/products/image2.jpg', 'img/products/image3.jpg'],
    ru: {
      name: 'QUIRKY EYE CREAM — Крем для кожи вокруг глаз',
      shortDesc: 'Нежный ежедневный крем для увлажнения и ухода за чувствительной зоной вокруг глаз.',
      description: 'Нежный ежедневный крем для увлажнения и ухода за чувствительной зоной вокруг глаз. Помогает сделать кожу более гладкой, свежей и ухоженной.',
      forWhatTitle: 'Для чего',
      forWhat: ['Увлажняет', 'Смягчает', 'Разглаживает', 'Освежает внешний вид кожи'],
      formulaTitle: 'В основе формулы',
      formula: ['Кофеин', 'Растительные масла', 'Пептидный комплекс'],
      usage: 'Наносить небольшое количество утром и вечером на очищенную кожу вокруг глаз.'
    },
    kz: {
      name: 'QUIRKY EYE CREAM — Көз айналасына арналған крем',
      shortDesc: 'Көз айналасындағы нәзік теріні күнделікті ылғалдандыруға және күтуге арналған крем.',
      description: 'Көз айналасындағы нәзік теріні күнделікті ылғалдандыруға және күтуге арналған крем. Терінің тегіс, балғын әрі күтімді көрінуіне көмектеседі.',
      forWhatTitle: 'Не үшін',
      forWhat: ['Ылғалдандырады', 'Жұмсартады', 'Тегістейді', 'Теріге балғын көрініс береді'],
      formulaTitle: 'Формула негізінде',
      formula: ['Кофеин', 'Өсімдік майлары', 'Пептидтік кешен'],
      usage: 'Таңертең және кешке көз айналасындағы тазартылған теріге аз мөлшерде жағыңыз.'
    }
  },
  {
    id: 2,
    code: 'QUIRKY SPOT CREAM',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image4.jpg', 'img/products/image5.jpg', 'img/products/image6.jpg'],
    ru: {
      name: 'QUIRKY SPOT CREAM — Крем от несовершенств',
      shortDesc: 'Точечный крем для ухода за проблемными участками кожи и уменьшения покраснений.',
      description: 'Точечный крем для ухода за проблемными участками кожи. Помогает успокоить кожу, уменьшить видимость несовершенств и поддерживать более чистый и ровный вид.',
      forWhatTitle: 'Для чего',
      forWhat: ['Несовершенства', 'Покраснения', 'Жирность', 'Проблемные участки'],
      formulaTitle: 'В основе формулы',
      formula: ['Каолин', 'Ниацинамид', 'Растительные экстракты'],
      usage: 'Наносить точечно на проблемные участки утром и вечером.'
    },
    kz: {
      name: 'QUIRKY SPOT CREAM — Тері кемшіліктеріне қарсы крем',
      shortDesc: 'Терінің проблемалы аймақтарына нүктелік күтім жасауға арналған крем.',
      description: 'Терінің проблемалы аймақтарына нүктелік күтім жасауға арналған крем. Теріні тыныштандыруға, кемшіліктердің көрінуін азайтуға және терінің таза әрі біркелкі көрінуіне көмектеседі.',
      forWhatTitle: 'Не үшін',
      forWhat: ['Кемшіліктер', 'Қызару', 'Майлылық', 'Проблемалы аймақтар'],
      formulaTitle: 'Формула негізінде',
      formula: ['Каолин', 'Ниацинамид', 'Өсімдік сығындылары'],
      usage: 'Таңертең және кешке терінің проблемалы аймақтарына нүктелік түрде жағыңыз.'
    }
  },
  {
    id: 3,
    code: 'QUIRKY SERUM',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image7.jpg', 'img/products/image8.jpg', 'img/products/image9.jpg'],
    ru: {
      name: 'QUIRKY SERUM — Увлажняющая сыворотка',
      shortDesc: 'Лёгкая сыворотка для ежедневного ухода. Интенсивно увлажняет и разглаживает кожу.',
      description: 'Лёгкая сыворотка для ежедневного ухода. Интенсивно увлажняет, помогает разгладить кожу и поддерживает её свежий, ухоженный вид.',
      forWhatTitle: 'Для чего',
      forWhat: ['Сухость', 'Обезвоженность', 'Тусклость', 'Неровная текстура'],
      formulaTitle: 'В основе формулы',
      formula: ['Аминокислоты', 'Пептидный комплекс', 'Растительные экстракты'],
      usage: 'Наносить на очищенную кожу лица утром и вечером перед кремом.'
    },
    kz: {
      name: 'QUIRKY SERUM — Ылғалдандыратын сарысу',
      shortDesc: 'Күнделікті күтімге арналған жеңіл сарысу. Теріні қарқынды ылғалдандырады.',
      description: 'Күнделікті күтімге арналған жеңіл сарысу. Теріні қарқынды ылғалдандырады, тегістеуге және оның балғын әрі күтімді көрінісін сақтауға көмектеседі.',
      forWhatTitle: 'Не үшін',
      forWhat: ['Құрғақтық', 'Сусыздану', 'Күңгірттік', 'Терінің біркелкі емес құрылымы'],
      formulaTitle: 'Формула негізінде',
      formula: ['Аминқышқылдары', 'Пептидтік кешен', 'Өсімдік сығындылары'],
      usage: 'Таңертең және кешке тазартылған бет терісіне кремнің алдында жағыңыз.'
    }
  },
  {
    id: 4,
    code: 'QUIRKY ALL-DAY CREAM',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image10.jpg', 'img/products/image11.jpg', 'img/products/image12.jpg'],
    ru: {
      name: 'QUIRKY ALL-DAY CREAM — Дневной крем для лица',
      shortDesc: 'Крем на каждый день для сохранения влаги, защиты кожного барьера и базы под макияж.',
      description: 'Крем на каждый день, который помогает коже сохранять влагу и защиту от утреннего ухода до вечера. Поддерживает кожный барьер и избавляет от ощущения сухости и стянутости.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Стянутость после умывания', 'Сухость в течение дня', 'Ощущение дискомфорта', 'Нужен базовый крем под макияж'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['Керамиды', 'Гиалуроновая кислота', 'Витамин C'],
      usage: 'Наносить утром завершающим этапом ухода.'
    },
    kz: {
      name: 'QUIRKY ALL-DAY CREAM — Күндізгі бет кремі',
      shortDesc: 'Терінің ылғалын таңертеңнен кешке дейін сақтауға көмектесетін күнделікті крем.',
      description: 'Күнделікті қолдануға арналған крем терінің ылғалын таңертеңнен кешке дейін сақтауға көмектеседі. Терінің қорғаныш тосқауылын қолдап, құрғақтық пен тартылу сезімін азайтады.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Жуынғаннан кейін терінің тартылуы', 'Күн ішінде құрғақтық', 'Жайсыздық сезімі', 'Макияж астына базалық крем қажет болғанда'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['Керамидтер', 'Гиалурон қышқылы', 'C дәрумені'],
      usage: 'Таңертең күтімнің соңғы кезеңі ретінде жағыңыз.'
    }
  },
  {
    id: 5,
    code: 'QUIRKY RENIGHT CREAM',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image13.jpg', 'img/products/image14.jpg', 'img/products/image15.jpg'],
    ru: {
      name: 'QUIRKY RENIGHT CREAM — Ночной крем для лица',
      shortDesc: 'Ночной уход для обновления, мягкости, гладкости и отдохнувшего вида кожи к утру.',
      description: 'Ночной уход для кожи, которой к утру хочется вернуть мягкость, гладкость и отдохнувший вид. Формула работает во время вечернего ухода, поддерживая обновление и комфорт кожи.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Тусклый цвет лица', 'Сухость к утру', 'Потеря упругости', 'Первые возрастные изменения'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['Бакучиол', 'Пептидный комплекс', 'Линоленовая кислота'],
      usage: 'Наносить вечером завершающим этапом ухода.'
    },
    kz: {
      name: 'QUIRKY RENIGHT CREAM — Түнгі бет кремі',
      shortDesc: 'Таңертең терінің жұмсақ, тегіс әрі тыныққан көрінуіне көмектесетін түнгі күтім.',
      description: 'Таңертең терінің жұмсақ, тегіс әрі тыныққан көрінуіне көмектесетін түнгі күтім. Формула кешкі күтім кезінде әсер етіп, терінің жаңаруын және жайлылығын қолдайды.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Терінің күңгірттенуі', 'Таңертеңгі құрғақтық', 'Серпімділіктің төмендеуі', 'Алғашқы жасқа байланысты өзгерістер'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['Бакучиол', 'Пептидтік кешен', 'Линолен қышқылы'],
      usage: 'Кешке күтімнің соңғы кезеңі ретінде жағыңыз.'
    }
  },
  {
    id: 6,
    code: 'QUIRKY HAND CREAM',
    categoryId: 'body',
    price: 0,
    images: ['img/products/image16.jpg', 'img/products/image17.jpg'],
    ru: {
      name: 'QUIRKY HAND CREAM — Крем для рук',
      shortDesc: 'Питательный крем для рук со скваланом для комфорта и защиты без ощущения тяжести.',
      description: 'Питательный крем для рук, особенно актуальный, когда кожа сохнет от частого мытья, холода и сухого воздуха. Помогает вернуть ощущение комфорта и защищённости без тяжести на коже.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Сухость', 'Шелушение', 'Огрубевшая кожа', 'Частое мытьё рук'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['Сквалан', 'Питательные и успокаивающие растительные компоненты'],
      usage: 'Наносить на руки в течение дня по мере необходимости.'
    },
    kz: {
      name: 'QUIRKY HAND CREAM — Қолға арналған крем',
      shortDesc: 'Қол терісін нәрлендіруге және қорғауға арналған сквалан қосылған крем.',
      description: 'Қол терісін нәрлендіруге арналған крем, әсіресе жиі жуудан, суықтан және құрғақ ауадан тері құрғаған кезде қолайлы. Теріге ауырлық түсірмей, жайлылық пен қорғаныш сезімін қалпына келтіруге көмектеседі.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Құрғақтық', 'Қабыршақтану', 'Терінің қатайып, кедір-бұдыр болуы', 'Қолды жиі жуу'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['Сквалан', 'Нәрлендіретін және тыныштандыратын өсімдік компоненттері'],
      usage: 'Күні бойы қажеттілігіне қарай қол терісіне жағыңыз.'
    }
  },
  {
    id: 7,
    code: 'QUIRKY BODY CREAM',
    categoryId: 'body',
    price: 0,
    images: ['img/products/image18.jpg', 'img/products/image19.jpg', 'img/products/image20.jpg'],
    ru: {
      name: 'QUIRKY BODY CREAM — Крем для тела',
      shortDesc: 'Плотный питательный уход для гладкости, мягкости и эластичности кожи тела.',
      description: 'Плотный уход для кожи тела, которой не хватает питания, мягкости и упругости. Помогает сделать сухую и шероховатую кожу более гладкой, эластичной и приятной на ощупь.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Сухость', 'Шероховатость', 'Потеря упругости', 'Ощущение стянутости'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['Масло жожоба', 'Пантенол', 'Пептидный комплекс'],
      usage: 'Наносить на чистую кожу тела ежедневно, уделяя особое внимание сухим участкам.'
    },
    kz: {
      name: 'QUIRKY BODY CREAM — Денеге арналған крем',
      shortDesc: 'Нәрлендіруді, жұмсақтық пен серпімділікті қажет ететін дене терісіне арналған қою крем.',
      description: 'Нәрлендіруді, жұмсақтық пен серпімділікті қажет ететін дене терісіне арналған қою крем. Құрғақ әрі кедір-бұдыр теріні тегіс, серпімді және жанасуға жағымды етуге көмектеседі.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Құрғақтық', 'Кедір-бұдырлық', 'Серпімділіктің төмендеуі', 'Тартылу сезімі'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['Жожоба майы', 'Пантенол', 'Пептидтік кешен'],
      usage: 'Күнделікті таза дене терісіне жағыңыз, әсіресе құрғақ аймақтарға ерекше көңіл бөліңіз.'
    }
  },
  {
    id: 8,
    code: 'QUIRKY PEELING',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image21.jpg', 'img/products/image22.jpg'],
    ru: {
      name: 'QUIRKY PEELING — Пилинг для лица',
      shortDesc: 'Мягкое отшелушивание для ровной текстуры, гладкости и свежести кожи.',
      description: 'Мягкое отшелушивание для кожи, которой не хватает гладкости и свежести. Помогает удалить ороговевшие клетки и сделать поверхность кожи более ровной и ухоженной.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Шероховатость', 'Тусклый цвет лица', 'Неровная текстура', 'Шелушение'],
      formulaTitle: 'Результат ухода',
      formula: ['Более гладкая кожа', 'Свежий вид', 'Мягкость', 'Подготовка кожи к дальнейшему уходу'],
      usage: 'Нанести на очищенную кожу, использовать согласно инструкции на упаковке.'
    },
    kz: {
      name: 'QUIRKY PEELING — Бетке арналған пилинг',
      shortDesc: 'Терінің тегістігі мен балғындығын қалпына келтіруге арналған жұмсақ пилинг.',
      description: 'Терінің тегістігі мен балғындығын қалпына келтіруге арналған жұмсақ пилинг. Терінің өлі жасушаларын кетіруге, бетін тегістеуге және күтімді көрінуіне көмектеседі.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Кедір-бұдырлық', 'Терінің күңгірттенуі', 'Біркелкі емес құрылым', 'Қабыршақтану'],
      formulaTitle: 'Күтім нәтижесі',
      formula: ['Тегіс тері', 'Балғын көрініс', 'Жұмсақтық', 'Теріні кейінгі күтімге дайындау'],
      usage: 'Тазартылған теріге жағып, қаптамадағы нұсқаулыққа сәйкес қолданыңыз.'
    }
  },
  {
    id: 9,
    code: 'QUIRKY DEODORANT',
    categoryId: 'body',
    price: 0,
    images: ['img/products/image23.jpg', 'img/products/image24.jpg', 'img/products/image25.jpg'],
    ru: {
      name: 'QUIRKY DEODORANT — Дезодорант',
      shortDesc: 'Деликатный ежедневный дезодорант с каолином и ниацинамидом без пересушивания кожи.',
      description: 'Деликатный ежедневный дезодорант для свежести и комфорта кожи. Помогает контролировать излишнюю влажность и неприятный запах, не пересушивая кожу.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['На каждый день', 'Активный образ жизни', 'Повышенная потливость', 'Чувствительная кожа подмышек'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['Каолин', 'Ниацинамид', 'Растительные экстракты'],
      usage: 'Наносить на чистую сухую кожу подмышек.'
    },
    kz: {
      name: 'QUIRKY DEODORANT — Дезодорант',
      shortDesc: 'Теріні құрғатпай, балғындық пен жайлылықты сақтауға көмектесетін нәзік дезодорант.',
      description: 'Күнделікті қолдануға арналған нәзік дезодорант терінің балғындығы мен жайлылығын сақтауға көмектеседі. Теріні құрғатпай, артық ылғалдылық пен жағымсыз иісті бақылауға көмектеседі.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Күнделікті қолдануға', 'Белсенді өмір салтында', 'Қатты терлеу кезінде', 'Қолтықтың сезімтал терісіне'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['Каолин', 'Ниацинамид', 'Өсімдік сығындылары'],
      usage: 'Қолтықтың таза әрі құрғақ терісіне жағыңыз.'
    }
  },
  {
    id: 10,
    code: 'QUIRKY CLEANSER',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image26.jpg', 'img/products/image27.jpg', 'img/products/image28.jpg'],
    ru: {
      name: 'QUIRKY CLEANSER — Очищающий гель для лица',
      shortDesc: 'Мягкий бессульфатный гель с экстрактом риса и оптимальным уровнем pH.',
      description: 'Мягкий очищающий гель для ежедневного умывания. Бережно удаляет загрязнения, освежает кожу и помогает сохранить её мягкость и комфорт после очищения.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['Ежедневное очищение', 'Загрязнения', 'Тусклость', 'Ощущение стянутости после умывания'],
      formulaTitle: 'Ключевые компоненты и особенности',
      formula: ['Экстракт риса', 'Растительные экстракты', 'Оптимальный уровень pH', 'Без сульфатов'],
      usage: 'Нанести небольшое количество на влажную кожу лица, мягко помассировать до образования пены и тщательно смыть водой.'
    },
    kz: {
      name: 'QUIRKY CLEANSER — Бет жууға арналған гель',
      shortDesc: 'Күріш сығындысы бар, сульфатсыз, күнделікті жууға арналған жұмсақ тазартқыш гель.',
      description: 'Күнделікті жууға арналған жұмсақ тазартқыш гель. Терідегі кірді нәзік тазартып, сергітеді және жуғаннан кейін терінің жұмсақтығы мен жайлылығын сақтауға көмектеседі.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Күнделікті тазарту', 'Терідегі кір', 'Күңгірттік', 'Жуғаннан кейінгі тартылу сезімі'],
      formulaTitle: 'Негізгі компоненттер мен ерекшеліктері',
      formula: ['Күріш сығындысы', 'Өсімдік сығындылары', 'Оңтайлы pH деңгейі', 'Сульфаттарсыз'],
      usage: 'Ылғал бет терісіне аз мөлшерде жағып, көбік пайда болғанша жұмсақ уқалаңыз, содан кейін сумен мұқият шайыңыз.'
    }
  },
  {
    id: 11,
    code: 'QUIRKY TONER',
    categoryId: 'face',
    price: 0,
    images: ['img/products/image29.jpg', 'img/products/image30.jpg', 'img/products/image31.jpg'],
    ru: {
      name: 'QUIRKY TONER — Увлажняющий тонер для лица',
      shortDesc: 'Освежающий тонер с CICA-комплексом и бетаином для восстановления баланса и сияния.',
      description: 'Освежающий тонер для ежедневного ухода после очищения. Увлажняет, успокаивает и помогает поддерживать баланс кожи, делая её более мягкой и сияющей.',
      forWhatTitle: 'Когда особенно нужен',
      forWhat: ['После очищения', 'Перед сывороткой и кремом', 'Для восстановления комфорта кожи', 'Как первый увлажняющий этап ухода'],
      formulaTitle: 'Ключевые компоненты',
      formula: ['CICA-комплекс', 'Растительные экстракты', 'Бетаин'],
      usage: 'Наносить утром и вечером после очищения с помощью ватного диска или ладонями. Затем продолжить привычный уход.'
    },
    kz: {
      name: 'QUIRKY TONER — Бетке арналған ылғалдандыратын тонер',
      shortDesc: 'CICA-кешені мен бетаин қосылған, тері тепе-теңдігін сақтайтын сергітетін тонер.',
      description: 'Тазартудан кейін күнделікті күтімге арналған сергітетін тонер. Теріні ылғалдандырып, тыныштандырады және табиғи тепе-теңдігін сақтауға көмектесіп, жұмсақ әрі жарқыраған көрініс береді.',
      forWhatTitle: 'Қай кезде әсіресе қажет',
      forWhat: ['Тазартудан кейін', 'Сарысу мен кремнің алдында', 'Тері жайлылығын қалпына келтіру үшін', 'Күтімнің алғашқы ылғалдандыру кезеңі ретінде'],
      formulaTitle: 'Негізгі компоненттер',
      formula: ['CICA-кешені', 'Өсімдік сығындылары', 'Бетаин'],
      usage: 'Таңертең және кешке тазартудан кейін мақта дискісімен немесе алақанмен жағыңыз. Содан кейін күнделікті күтімді жалғастырыңыз.'
    }
  }
];

const CATEGORIES = {
  all:  { ru: 'Все средства', kz: 'Барлық өнімдер' },
  face: { ru: 'Уход за лицом', kz: 'Бет күтімі' },
  body: { ru: 'Уход за телом и руками', kz: 'Дене және қол күтімі' }
};

const I18N = {
  ru: {
    navCatalog: 'Каталог',
    navNews: 'Советы',
    navPartners: 'Партнерам',
    navAbout: 'О бренде',
    navContacts: 'Контакты',
    navWriteWhatsApp: 'Написать в WhatsApp',
    breadcrumbHome: 'Главная',
    heroBadge: 'Официальный магазин премиальной корейской косметики',
    heroTitle1: 'Преобрази свою кожу.',
    heroTitle2: 'Почувствуй силу qqq care.',
    heroDesc: 'Мгновенное увлажнение, сияние и упругость. Формулы с пептидами, CICA-комплексом, бакучиолом и экстрактом риса, созданные для твоей идеальной кожи.',
    heroBtnCatalog: 'Выбрать уход',
    heroBtnAbout: 'О бренде',
    statClients: 'довольных клиентов',
    statNatural: 'выверенные формулы',
    statSupport: 'заказ в WhatsApp',
    badgeCentella: 'CICA & Пептиды',
    badgeGlass: 'Glass Skin',
    marquee1: '✦ Премиальные ингредиенты',
    marquee2: '✧ Без сульфатов и парабенов',
    marquee3: '✦ Корейская технология',
    marquee4: '✧ Подходит для чувствительной кожи',
    marquee5: '✦ Доставка по Казахстану',
    catTag: 'Коллекция QUIRKY',
    catTitle: 'Каталог средств',
    catSub: 'Выбери свой идеальный уход. Каждое средство — концентрат пользы, созданный для результата, который ты увидишь в зеркале.',
    viewAllCatalog: 'Смотреть весь каталог',
    btnDetails: 'Подробнее',
    btnAddToCart: 'В корзину',
    btnOrderWA: 'Заказать в WhatsApp',
    newsTag: 'Блог',
    newsTitle: 'Советы по уходу',
    newsSub: 'Учим правильно заботиться о коже и разбираем корейские тренды.',
    news1Badge: 'Уход',
    news1Title: 'Секреты «стеклянной кожи»',
    news1Desc: 'Как добиться эффекта glass skin с помощью правильного очищения, CICA-тонера и увлажняющей сыворотки.',
    news2Badge: 'Ингредиенты',
    news2Title: 'CICA и пептиды: дуэт для восстановления',
    news2Desc: 'Разбираем главные компоненты корейских средств для успокоения, упругости и защиты кожного барьера.',
    news3Badge: 'Ритуалы',
    news3Title: 'Вечерний уход с бакучиолом',
    news3Desc: 'Пошаговый ночной ритуал с QUIRKY RENIGHT CREAM для мягкой и отдохнувшей кожи к утру.',
    readMore: 'Подробнее',
    partnerTitle: 'Стать партнером',
    partnerDesc: 'Развивай бизнес вместе с QQQ CARE. Выгодные условия для оптовых клиентов, салонов красоты и бьюти-блогеров. Предоставляем сертификаты и маркетинговую поддержку.',
    partnerBtn: 'Обсудить в WhatsApp',
    aboutTag: 'Философия',
    aboutTitle: 'Почему QQQ CARE?',
    aboutDesc: 'Мы не просто продаём косметику. Мы привозим из Сеула целую философию заботы о себе. Каждая баночка — это результат многолетних исследований и любви к работающим ингредиентам. Без агрессивной химии и пустых обещаний.',
    aboutCard1: 'Чистые составы',
    aboutCard2: 'Лабораторный контроль',
    aboutCard3: 'Любовь к клиентам',
    footerDesc: 'Корейская косметика, которая действительно работает. Премиум уход для сияющей кожи.',
    footerNav: 'Разделы',
    footerContacts: 'Контакты',
    footerConnect: 'Мы на связи',
    footerCity: 'Алматы, Казахстан',
    footerOrderBtn: 'Заказать в WhatsApp',
    footerMadeWith: 'Сделано с 💚 для твоей кожи',
    footerRights: 'Все права защищены.',
    searchPlaceholder: 'Поиск по названию или компоненту...',
    emptyTitle: 'Ничего не найдено',
    emptyDesc: 'Попробуйте изменить запрос или выбрать другую категорию',
    resetFilters: 'Сбросить фильтры',
    relatedTitle: 'Другие средства линейки',
    accDesc: 'Описание',
    accUsage: 'Как использовать',
    accDelivery: 'Доставка и заказ',
    accDeliveryText: 'Доставка осуществляется по Алматы и всему Казахстану. Добавьте товары в корзину или напишите нам напрямую в WhatsApp — менеджер проконсультирует и поможет оформить доставку.',
    feat1: 'Быстрая доставка по РК',
    feat2: '100% оригинальный продукт',
    feat3: 'Консультация в WhatsApp',
    cartTitle: 'Корзина',
    cartEmptyTitle: 'Ваша корзина пуста',
    cartEmptyDesc: 'Добавьте интересующие средства из каталога, чтобы отправить заказ в WhatsApp.',
    cartOrderTitle: 'Оформление через WhatsApp',
    formName: 'Имя',
    formNamePh: 'Как к вам обращаться?',
    formPhone: 'Телефон для связи',
    formPhonePh: '+7 (___) ___-__-__',
    formAddress: 'Город / адрес доставки',
    formAddressPh: 'Например: Алматы, пр. Абая 10',
    formSubmitOrder: 'Отправить заказ в WhatsApp',
    orderSuccessTitle: 'Переходим в WhatsApp!',
    orderSuccessDesc: 'Спасибо! Ваш список товаров сформирован для отправки менеджеру.',
    continueShopping: 'Продолжить покупки',
    toastAdded: 'добавлен в корзину',
    aboutPageTitle: 'Мы верим в силу простого ухода',
    aboutPageDesc: 'qqq care. — бренд корейской косметики, который выбирает только рабочие формулы и честные составы. Мы адаптируем традиции корейского ухода для повседневной жизни — без лишних шагов, но с заметным результатом.',
    aboutStat1Val: '11',
    aboutStat1Lbl: 'средств в линейке QUIRKY',
    aboutStat2Val: 'pH',
    aboutStat2Lbl: 'сбалансированные формулы',
    aboutStat3Val: '50 000+',
    aboutStat3Lbl: 'довольных клиентов',
    aboutStat4Val: '100%',
    aboutStat4Lbl: 'оригинальная продукция',
    aboutValuesTitle: 'Наши ценности',
    val1Title: 'Рабочие активы',
    val1Desc: 'Пептиды, бакучиол, керамиды, CICA-комплекс, сквалан и экстракт риса.',
    val2Title: 'Корейские технологии',
    val2Desc: 'Современные разработки южнокорейских лабораторий для ежедневного комфорта.',
    val3Title: 'Забота о барьере кожи',
    val3Desc: 'Мягкие формулы без сульфатов — подходят даже для чувствительной кожи.',
    val4Title: 'Этичный подход',
    val4Desc: 'Мы не тестируем продукцию на животных и работаем только с сертифицированными производствами.',
    aboutCtaTitle: 'Готовы подобрать свой уход?',
    aboutCtaDesc: 'Ознакомьтесь со всей линейкой средств QUIRKY для лица и тела.',
    contactsTitle: 'Контакты',
    contactsSub: 'Мы всегда на связи — выберите удобный способ обращения',
    contactCardPhone: 'Телефон',
    contactCardPhoneBtn: 'Позвонить',
    contactCardWA: 'WhatsApp',
    contactCardWABtn: 'Написать в WhatsApp',
    contactCardIG: 'Instagram',
    contactCardIGBtn: 'Подписаться',
    contactCardEmail: 'Электронная почта',
    contactCardEmailBtn: 'Написать письмо',
    contactCardCity: 'Локация',
    contactCardCityBtn: 'Открыть на карте',
    contactCardHours: 'Часы работы',
    hoursMonFri: 'Пн–Пт',
    hoursSat: 'Сб',
    hoursSun: 'Вс',
    hoursSunVal: 'выходной',
    formTitle: 'Остались вопросы?',
    formSub: 'Напишите нам, и сообщение сразу откроется в чате WhatsApp с нашим менеджером',
    formMsg: 'Сообщение',
    formMsgPh: 'Расскажите, какое средство вас интересует или задайте вопрос',
    formSendBtn: 'Отправить в WhatsApp',
    formSentTitle: 'Сообщение сформировано!',
    formSentDesc: 'Мы ответим вам в WhatsApp в ближайшее время.'
  },
  kz: {
    navCatalog: 'Каталог',
    navNews: 'Кеңестер',
    navPartners: 'Серіктестерге',
    navAbout: 'Бренд туралы',
    navContacts: 'Байланыс',
    navWriteWhatsApp: 'WhatsApp-қа жазу',
    breadcrumbHome: 'Басты бет',
    heroBadge: 'Премиум корей косметикасының ресми дүкені',
    heroTitle1: 'Теріңізді жаңартыңыз.',
    heroTitle2: 'qqq care. күшін сезініңіз.',
    heroDesc: 'Лезде ылғалдандыру, жарқырау және серпімділік. Мінсіз теріңіз үшін арнайы жасалған пептидтер, CICA-кешені, бакучиол және күріш сығындысы бар формулалар.',
    heroBtnCatalog: 'Күтімді таңдау',
    heroBtnAbout: 'Бренд туралы',
    statClients: 'риза клиенттер',
    statNatural: 'тексерілген формулалар',
    statSupport: 'WhatsApp арқылы тапсырыс',
    badgeCentella: 'CICA & Пептидтер',
    badgeGlass: 'Glass Skin',
    marquee1: '✦ Премиум ингредиенттер',
    marquee2: '✧ Сульфаттарсыз және парабендерсіз',
    marquee3: '✦ Корей технологиясы',
    marquee4: '✧ Сезімтал теріге қолайлы',
    marquee5: '✦ Қазақстан бойынша жеткізу',
    catTag: 'QUIRKY топтамасы',
    catTitle: 'Өнімдер каталогы',
    catSub: 'Өзіңізге мінсіз күтімді таңдаңыз. Әрбір өнім — айнадан көрінетін нәтиже үшін жасалған пайдалы концентрат.',
    viewAllCatalog: 'Толық каталогты көру',
    btnDetails: 'Толығырақ',
    btnAddToCart: 'Себетке салу',
    btnOrderWA: 'WhatsApp арқылы тапсырыс',
    newsTag: 'Блог',
    newsTitle: 'Күтім бойынша кеңестер',
    newsSub: 'Теріге дұрыс күтім жасауды үйретеміз және корей трендтерін талдаймыз.',
    news1Badge: 'Күтім',
    news1Title: '«Шыныдай тері» құпиясы',
    news1Desc: 'Дұрыс тазарту, CICA-тонер және ылғалдандыратын сарысу арқылы glass skin әсеріне қалай жетуге болады.',
    news2Badge: 'Ингредиенттер',
    news2Title: 'CICA және пептидтер: қалпына келтіру дуэті',
    news2Desc: 'Теріні тыныштандыруға, серпімділігін арттыруға және қорғаныш тосқауылын нығайтуға арналған негізгі компоненттер.',
    news3Badge: 'Ритуалдар',
    news3Title: 'Бакучиолмен кешкі күтім',
    news3Desc: 'Таңертең терінің жұмсақ әрі тыныққан болуына арналған QUIRKY RENIGHT CREAM түнгі күтімі.',
    readMore: 'Толығырақ',
    partnerTitle: 'Серіктес болу',
    partnerDesc: 'QQQ CARE-мен бірге бизнесіңізді дамытыңыз. Көтерме клиенттерге, сұлулық салондарына және бьюти-блогерлерге тиімді шарттар. Сертификаттар мен маркетингтік қолдау көрсетеміз.',
    partnerBtn: 'WhatsApp-та талқылау',
    aboutTag: 'Философия',
    aboutTitle: 'Неліктен QQQ CARE?',
    aboutDesc: 'Біз тек косметика сатпаймыз. Біз Сеулден өзіңізге деген қамқорлық философиясын әкелеміз. Әрбір құты — көпжылдық зерттеулер мен тиімді ингредиенттердің нәтижесі. Агрессивті химиясыз және бос уәделерсіз.',
    aboutCard1: 'Таза құрамдар',
    aboutCard2: 'Зертханалық бақылау',
    aboutCard3: 'Клиенттерге қамқорлық',
    footerDesc: 'Шынымен жұмыс істейтін корей косметикасы. Жарқыраған теріге арналған премиум күтім.',
    footerNav: 'Бөлімдер',
    footerContacts: 'Байланыс',
    footerConnect: 'Біз байланыстамыз',
    footerCity: 'Алматы, Қазақстан',
    footerOrderBtn: 'WhatsApp-та тапсырыс беру',
    footerMadeWith: 'Теріңіз үшін 💚-пен жасалған',
    footerRights: 'Барлық құқықтар қорғалған.',
    searchPlaceholder: 'Атауы немесе компоненті бойынша іздеу...',
    emptyTitle: 'Ештеңе табылмады',
    emptyDesc: 'Сұранысты өзгертіп көріңіз немесе басқа санатты таңдаңыз',
    resetFilters: 'Сүзгілерді тазалау',
    relatedTitle: 'Топтамадағы басқа өнімдер',
    accDesc: 'Сипаттамасы',
    accUsage: 'Қолдану тәсілі',
    accDelivery: 'Жеткізу және тапсырыс',
    accDeliveryText: 'Жеткізу Алматы және бүкіл Қазақстан бойынша жүзеге асырылады. Өнімдерді себетке қосыңыз немесе бізге тікелей WhatsApp-қа жазыңыз.',
    feat1: 'ҚР бойынша жылдам жеткізу',
    feat2: '100% түпнұсқа өнім',
    feat3: 'WhatsApp арқылы кеңес',
    cartTitle: 'Себет',
    cartEmptyTitle: 'Себетіңіз бос',
    cartEmptyDesc: 'Тапсырыс беру үшін каталогтан қажетті өнімдерді қосыңыз.',
    cartOrderTitle: 'WhatsApp арқылы рәсімдеу',
    formName: 'Атыңыз',
    formNamePh: 'Сізге қалай хабарласуға болады?',
    formPhone: 'Байланыс телефоны',
    formPhonePh: '+7 (___) ___-__-__',
    formAddress: 'Қала / жеткізу мекенжайы',
    formAddressPh: 'Мысалы: Алматы, Абай даңғылы 10',
    formSubmitOrder: 'Тапсырысты WhatsApp-қа жіберу',
    orderSuccessTitle: 'WhatsApp-қа өтудеміз!',
    orderSuccessDesc: 'Рақмет! Тапсырыс тізімі менеджерге жіберу үшін дайындалды.',
    continueShopping: 'Көруді жалғастыру',
    toastAdded: 'себетке қосылды',
    aboutPageTitle: 'Біз қарапайым күтімнің күшіне сенеміз',
    aboutPageDesc: 'qqq care. — тек тиімді формулалар мен адал құрамдарды таңдайтын корей косметикасының бренді. Біз корейлік күтім дәстүрлерін күнделікті өмірге бейімдейміз — артық қадамдарсыз, бірақ айқын нәтижемен.',
    aboutStat1Val: '11',
    aboutStat1Lbl: 'QUIRKY топтамасындағы өнім',
    aboutStat2Val: 'pH',
    aboutStat2Lbl: 'теңгерімді формулалар',
    aboutStat3Val: '50 000+',
    aboutStat3Lbl: 'риза клиенттер',
    aboutStat4Val: '100%',
    aboutStat4Lbl: 'түпнұсқа өнім',
    aboutValuesTitle: 'Біздің құндылықтарымыз',
    val1Title: 'Белсенді компоненттер',
    val1Desc: 'Пептидтер, бакучиол, керамидтер, CICA-кешені, сквалан және күріш сығындысы.',
    val2Title: 'Корей технологиялары',
    val2Desc: 'Күнделікті жайлылыққа арналған Оңтүстік Корея зертханаларының заманауи әзірлемелері.',
    val3Title: 'Тері тосқауылына қамқорлық',
    val3Desc: 'Сульфатсыз жұмсақ формулалар — тіпті сезімтал теріге де жарамды.',
    val4Title: 'Этикалық ұстаным',
    val4Desc: 'Біз өнімдерді жануарларға сынамаймыз және тек сертификатталған өндірістермен жұмыс істейміз.',
    aboutCtaTitle: 'Өз күтіміңізді таңдауға дайынсыз ба?',
    aboutCtaDesc: 'Бет пен денеге арналған QUIRKY өнімдерінің толық топтамасымен танысыңыз.',
    contactsTitle: 'Байланыс',
    contactsSub: 'Біз әрдайым байланыстамыз — ыңғайлы әдісті таңдаңыз',
    contactCardPhone: 'Телефон',
    contactCardPhoneBtn: 'Қоңырау шалу',
    contactCardWA: 'WhatsApp',
    contactCardWABtn: 'WhatsApp-қа жазу',
    contactCardIG: 'Instagram',
    contactCardIGBtn: 'Жазылу',
    contactCardEmail: 'Электронды пошта',
    contactCardEmailBtn: 'Хат жазу',
    contactCardCity: 'Мекенжайымыз',
    contactCardCityBtn: 'Картадан ашу',
    contactCardHours: 'Жұмыс уақыты',
    hoursMonFri: 'Дс–Жм',
    hoursSat: 'Сб',
    hoursSun: 'Жс',
    hoursSunVal: 'демалыс',
    formTitle: 'Сұрақтарыңыз бар ма?',
    formSub: 'Бізге жазыңыз, хабарламаңыз бірден менеджердің WhatsApp чатында ашылады',
    formMsg: 'Хабарлама',
    formMsgPh: 'Сізді қандай өнім қызықтыратынын жазыңыз немесе сұрақ қойыңыз',
    formSendBtn: 'WhatsApp-қа жіберу',
    formSentTitle: 'Хабарлама дайын!',
    formSentDesc: 'Біз сізге WhatsApp арқылы жақын арада жауап береміз.'
  }
};

// ---------- Состояние языка и корзины ----------
let currentLang = localStorage.getItem('qqq_lang') || 'ru';
let cart = JSON.parse(localStorage.getItem('qqq_cart') || '[]');
let orderSuccess = false;
let toastTimer = null;

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ru[key] || key;
}

function getProductText(product) {
  return product[currentLang] || product.ru;
}

function getCategoryName(catId) {
  return (CATEGORIES[catId] && CATEGORIES[catId][currentLang]) || '';
}

function formatPrice(v) {
  if (!SITE_CONFIG.SHOW_PRICES || !v) return '';
  return v.toLocaleString('ru-RU') + ' ₸';
}

function getProductWhatsAppLink(product, qty = 1) {
  const pt = getProductText(product);
  const text = currentLang === 'kz'
    ? `Сәлеметсіз бе! Тапсырыс бергім келеді: ${pt.name} (${qty} дана).`
    : `Здравствуйте! Хочу заказать: ${pt.name} (${qty} шт.).`;
  return `https://wa.me/${SITE_CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function saveCart() {
  localStorage.setItem('qqq_cart', JSON.stringify(cart));
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('qqq_lang', lang);
  document.documentElement.lang = lang === 'kz' ? 'kk' : 'ru';
  applyTranslations();
  updateLangButtons();
  if (typeof window.onPageLangChange === 'function') {
    window.onPageLangChange(lang);
  }
  renderCartBody();
  renderBadge();
}

function updateLangButtons() {
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    const isActive = btn.dataset.setLang === currentLang;
    if (isActive) {
      btn.className = 'px-3 py-1 rounded-full text-xs font-extrabold bg-brand text-white transition';
    } else {
      btn.className = 'px-3 py-1 rounded-full text-xs font-extrabold text-gray-500 hover:text-brand transition';
    }
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });
  const fy = document.getElementById('footer-year');
  if (fy) {
    fy.textContent = `© ${new Date().getFullYear()} QQQ CARE. ${t('footerRights')}`;
  }
}

// ---------- Универсальная карточка товара ----------
function renderProductCardHTML(p) {
  const pt = getProductText(p);
  const catName = getCategoryName(p.categoryId);
  const img1 = p.images[0] || '';
  const img2 = p.images[1] || img1;
  const priceHTML = SITE_CONFIG.SHOW_PRICES && p.price
    ? `<div class="mt-2 font-black text-gray-900 text-base">${formatPrice(p.price)}</div>`
    : '';

  return `
    <div class="bg-white rounded-3xl p-3.5 sm:p-4 shadow-soft hover:shadow-2xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1.5 group">
      <a href="product.html?id=${p.id}" class="block">
        <div class="relative aspect-square rounded-2xl bg-brand/5 flex items-center justify-center overflow-hidden mb-3.5">
          <span class="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-brand shadow-sm">${catName}</span>
          <img src="${img1}" alt="${pt.name}" loading="lazy" class="w-full h-full object-cover transition-opacity duration-500 ${img2 !== img1 ? 'group-hover:opacity-0' : 'group-hover:scale-105 transition-transform'}" />
          ${img2 !== img1 ? `<img src="${img2}" alt="${pt.name}" loading="lazy" class="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />` : ''}
        </div>
        <h3 class="font-extrabold text-brand text-sm sm:text-base leading-snug group-hover:underline">${pt.name}</h3>
      </a>
      <p class="text-gray-500 text-xs font-medium mt-1.5 line-clamp-2">${pt.shortDesc}</p>
      ${priceHTML}
      <div class="mt-auto pt-4 flex gap-2">
        <a href="product.html?id=${p.id}" class="flex-1 bg-brand/10 text-brand hover:bg-brand hover:text-white py-2.5 px-3 rounded-full font-bold text-xs sm:text-sm text-center transition">
          ${t('btnDetails')}
        </a>
        <button data-action="add" data-id="${p.id}" aria-label="${t('btnAddToCart')}" class="bg-brand text-white hover:bg-brand-light p-2.5 rounded-full transition shadow-sm flex items-center justify-center">
          <i data-lucide="shopping-bag" style="width:17px;height:17px"></i>
        </button>
      </div>
    </div>
  `;
}

// ---------- Корзина ----------
function totalItems() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, qty });
  saveCart();
  renderBadge();
  renderCartBody();
  const pt = getProductText(product);
  showToast(`«${pt.name}» ${t('toastAdded')}`);
}

function incCartQty(id) {
  const item = cart.find(i => i.id === id);
  if (item) { item.qty += 1; saveCart(); renderCartBody(); renderBadge(); }
}

function decCartQty(id) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); renderCartBody(); renderBadge();
}

function removeCartItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); renderCartBody(); renderBadge();
}

function renderBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = totalItems();
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderCartBody() {
  const body = document.getElementById('cart-body');
  const title = document.getElementById('cart-title');
  if (!body || !title) return;

  const count = totalItems();
  title.textContent = count > 0 ? `${t('cartTitle')} (${count})` : t('cartTitle');

  if (orderSuccess) {
    body.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center h-full py-16">
        <i data-lucide="check-circle-2" class="text-brand mb-4" style="width:56px;height:56px;stroke-width:1.4"></i>
        <h3 class="font-extrabold text-brand text-lg mb-2">${t('orderSuccessTitle')}</h3>
        <p class="text-gray-500 text-sm font-medium max-w-xs mb-6">${t('orderSuccessDesc')}</p>
        <button id="continue-shopping" class="bg-white text-brand border-[1.5px] border-brand px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand/5 transition">${t('continueShopping')}</button>
      </div>`;
  } else if (cart.length === 0) {
    body.innerHTML = `
      <div class="flex flex-col items-center justify-center text-center h-full py-16">
        <i data-lucide="shopping-bag" class="text-brand opacity-40 mb-4" style="width:48px;height:48px;stroke-width:1.3"></i>
        <h3 class="font-extrabold text-gray-700 mb-1.5">${t('cartEmptyTitle')}</h3>
        <p class="text-gray-400 text-sm font-medium max-w-xs mb-5">${t('cartEmptyDesc')}</p>
        <a href="catalog.html" class="bg-brand text-white px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition">${t('navCatalog')}</a>
      </div>`;
  } else {
    const itemsHTML = cart.map(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (!p) return '';
      const pt = getProductText(p);
      return `
        <li class="flex items-center gap-3 py-3.5 border-b border-gray-100">
          <img src="${p.images[0]}" alt="${pt.name}" class="w-16 h-16 rounded-2xl object-cover bg-brand/5 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <p class="font-bold text-brand text-xs sm:text-sm leading-snug truncate">${pt.name}</p>
            <div class="flex items-center gap-2 mt-2 border border-gray-200 rounded-full w-fit px-1">
              <button data-action="dec" data-id="${p.id}" class="text-gray-500 hover:bg-brand/10 hover:text-brand rounded-full p-1 transition"><i data-lucide="minus" style="width:14px;height:14px"></i></button>
              <span class="text-xs font-extrabold w-5 text-center">${item.qty}</span>
              <button data-action="inc" data-id="${p.id}" class="text-gray-500 hover:bg-brand/10 hover:text-brand rounded-full p-1 transition"><i data-lucide="plus" style="width:14px;height:14px"></i></button>
            </div>
          </div>
          <button data-action="remove" data-id="${p.id}" class="text-gray-400 hover:text-red-500 rounded-full p-2 self-start transition"><i data-lucide="trash-2" style="width:16px;height:16px"></i></button>
        </li>`;
    }).join('');

    body.innerHTML = `
      <ul class="py-2">${itemsHTML}</ul>
      <div class="border-t border-gray-100 pt-5 pb-8 mt-2">
        <h3 class="font-extrabold text-brand mb-4">${t('cartOrderTitle')}</h3>
        <form id="order-form" class="flex flex-col gap-3">
          <label class="block">
            <span class="text-xs font-bold text-gray-500 mb-1.5 block">${t('formName')}</span>
            <input required type="text" name="name" placeholder="${t('formNamePh')}" class="w-full rounded-2xl border-[1.5px] border-gray-200 px-4 py-3 text-sm font-medium outline-none focus:border-brand transition" />
          </label>
          <label class="block">
            <span class="text-xs font-bold text-gray-500 mb-1.5 block">${t('formPhone')}</span>
            <input required type="tel" name="phone" placeholder="${t('formPhonePh')}" class="w-full rounded-2xl border-[1.5px] border-gray-200 px-4 py-3 text-sm font-medium outline-none focus:border-brand transition" />
          </label>
          <label class="block">
            <span class="text-xs font-bold text-gray-500 mb-1.5 block">${t('formAddress')}</span>
            <input type="text" name="address" placeholder="${t('formAddressPh')}" class="w-full rounded-2xl border-[1.5px] border-gray-200 px-4 py-3 text-sm font-medium outline-none focus:border-brand transition" />
          </label>
          <button type="submit" class="bg-brand text-white w-full py-3.5 rounded-full font-extrabold text-sm mt-2 hover:opacity-90 active:scale-95 transition flex items-center justify-center gap-2">
            <i data-lucide="message-circle" style="width:18px;height:18px"></i>
            <span>${t('formSubmitOrder')}</span>
          </button>
        </form>
      </div>`;
  }
  if (window.lucide) lucide.createIcons();
}

function openCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.remove('opacity-0', 'pointer-events-none');
  overlay.classList.add('opacity-100', 'pointer-events-auto');
  drawer.classList.remove('translate-x-full');
  drawer.classList.add('translate-x-0');
  document.body.classList.add('overflow-hidden');
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (!overlay || !drawer) return;
  overlay.classList.add('opacity-0', 'pointer-events-none');
  overlay.classList.remove('opacity-100', 'pointer-events-auto');
  drawer.classList.add('translate-x-full');
  drawer.classList.remove('translate-x-0');
  document.body.classList.remove('overflow-hidden');
  setTimeout(() => { orderSuccess = false; renderCartBody(); }, 300);
}

function showToast(text) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  container.innerHTML = `
    <div class="bg-brand text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-bold whitespace-nowrap toast-anim">
      <i data-lucide="check-circle-2" style="width:17px;height:17px"></i>
      <span>${text}</span>
    </div>`;
  if (window.lucide) lucide.createIcons();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { container.innerHTML = ''; }, 2400);
}

// ---------- Глобальные слушатели ----------
document.addEventListener('click', (e) => {
  const langBtn = e.target.closest('[data-set-lang]');
  if (langBtn) {
    setLang(langBtn.dataset.setLang);
    return;
  }

  const actionBtn = e.target.closest('[data-action]');
  if (actionBtn) {
    const id = Number(actionBtn.dataset.id);
    const action = actionBtn.dataset.action;
    if (action === 'add') addToCart(id, 1);
    if (action === 'inc') incCartQty(id);
    if (action === 'dec') decCartQty(id);
    if (action === 'remove') removeCartItem(id);
    return;
  }

  if (e.target.closest('#cart-btn') || e.target.closest('[data-open-cart]')) { openCart(); return; }
  if (e.target.closest('#cart-close')) { closeCart(); return; }
  if (e.target.id === 'cart-overlay') { closeCart(); return; }
  if (e.target.closest('#continue-shopping')) { closeCart(); return; }

  if (e.target.closest('#menu-btn')) {
    const nav = document.getElementById('mobile-nav');
    if (nav) {
      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');
    }
  }
});

document.addEventListener('submit', (e) => {
  if (e.target.id === 'order-form') {
    e.preventDefault();
    if (cart.length === 0) return;

    const formData = new FormData(e.target);
    const itemsText = cart.map(i => {
      const p = PRODUCTS.find(prod => prod.id === i.id);
      return p ? `• ${getProductText(p).name} (${i.qty} шт.)` : '';
    }).join('\n');
    const msg = `Здравствуйте! Заказ с сайта qqqcare.kz:\n\n${itemsText}\n\nИмя: ${formData.get('name')}\nТелефон: ${formData.get('phone')}\nАдрес/комментарий: ${formData.get('address') || '-'}`;
    window.open(`https://wa.me/${SITE_CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

    orderSuccess = true;
    cart = [];
    saveCart();
    renderCartBody();
    renderBadge();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
