/* =========================================================
   AUREN — Main JavaScript
========================================================= */

/* =========================================================
   Translations
========================================================= */

const translations = {
  /* =====================================================
       English
    ===================================================== */

  en: {
    /* Navigation */
    nav: {
      home: "Home",
      collection: "Collection",
      brand: "Brand",
      contact: "Contact",
    },

    /* =================================================
           Home
        ================================================= */

    hero: {
      eyebrow: "TIME, REFINED.",
      title: "Time is more",
      titleAccent: "than a moment.",
      description:
        "AUREN creates refined timepieces where precision, material and timeless design come together.",
      button: "Explore Collection",
      scroll: "Scroll",
    },

    /* Brand Intro */

    brandIntro: {
      label: "The AUREN Philosophy",
      eyebrow: "The Art Of Time",
      title: "More than a watch.",
      titleAccent: "A lasting expression.",
      text1: "We believe time should be experienced, not simply measured.",
      text2:
        "AUREN brings together considered design, mechanical precision and enduring materials to create timepieces made to be remembered.",
      button: "Discover Our Philosophy",
      scroll: "Scroll",
    },

    /* Featured Watch */

    featuredWatch: {
      label: "AUREN 01 / THE CLASSIC",
      imageCaption: "AUREN 01 — THE CLASSIC",
      category: "THE CLASSIC",
      title: "A study in",
      titleAccent: "restraint.",
      description:
        "A balanced expression of classic watchmaking, refined through proportion, material and detail.",
      specs: "40mm · Automatic · Sapphire · Leather",

      case: "CASE",
      caseValue: "40mm",

      movement: "MOVEMENT",
      movementValue: "Automatic",

      crystal: "CRYSTAL",
      crystalValue: "Sapphire",

      strap: "STRAP",
      strapValue: "Leather",

      button: "Discover AUREN 01",
    },

    /* Craftsmanship */

    craftsmanship: {
      label: "THE CRAFT",
      eyebrow: "THE CRAFT",
      category: "CRAFTSMANSHIP",

      title: "Made with",
      titleAccent: "intention.",

      text: "Every AUREN timepiece is shaped by a commitment to precision, material and lasting design.",

      description:
        "Every AUREN timepiece is shaped by a commitment to precision, material and lasting design.",

      precisionTitle: "Precision",
      precisionText:
        "Every detail is considered for accuracy, balance and lasting performance.",

      materialsTitle: "Materials",
      materialsText:
        "Selected materials are chosen for their quality, character and ability to endure.",

      finishingTitle: "Finishing",
      finishingText:
        "Every surface and detail is refined to create a considered and enduring result.",

      button: "Discover The Craft",
    },

    /* Collection Preview */

    collectionPreview: {
      label: "THE COLLECTION",
      eyebrow: "THE COLLECTION",

      title: "Three expressions.",
      titleAccent: "One philosophy.",

      watch01: "AUREN 01",
      watch02: "AUREN 02",
      watch03: "AUREN 03",

      watch01Type: "The Classic",
      watch02Type: "The Modern",
      watch03Type: "The Signature",

      watch01Category: "THE CLASSIC",
      watch02Category: "THE MODERN",
      watch03Category: "THE SIGNATURE",

      watch01Description:
        "A timeless interpretation of classic watchmaking, defined by balanced proportions and understated detail.",

      watch02Description:
        "A contemporary expression built around clean geometry, refined materials and modern restraint.",

      watch03Description:
        "A distinctive timepiece where bold character meets the quiet precision of traditional watchmaking.",

      footerText: "Three distinct expressions shaped by one philosophy.",

      button: "View Full Collection",
    },

    /* Brand Statement */

    brandStatement: {
      label: "03 / TIME, REFINED.",
      eyebrow: "Time, Refined.",
      title: "Designed for",
      titleAccent: "the moments that matter.",

      description:
        "AUREN exists between precision and emotion — creating timepieces that become part of the moments they measure.",

      established: "Est. 2026",
      brand: "AUREN Timepieces",
      signature: "Crafted With Intent",
      est: "EST. 2026",
      crafted: "CRAFTED WITH INTENT",
    },

    /* Home CTA */

    homeCta: {
      eyebrow: "DISCOVER AUREN",
      title: "Find the timepiece",
      titleAccent: "that speaks to you.",

      description:
        "Explore the AUREN collection and discover a timepiece shaped around your sense of style and character.",

      signature: "TIME, REFINED.",

      button: "Explore Collection",
    },

    /* =================================================
           Collection
        ================================================= */

    collectionHero: {
      label: "THE AUREN COLLECTION",
      title: "Time,",
      titleAccent: "refined.",
      description:
        "A collection shaped by precision, proportion and an enduring sense of design.",
    },

    collectionIntro: {
      label: "THE COLLECTION",
      title: "Three watches.",
      titleAccent: "One philosophy.",
      text: "Each AUREN timepiece expresses the same commitment to precision and timeless design through its own distinct character.",
    },

    collectionWatch01: {
      label: "01 / THE CLASSIC",
      title: "AUREN 01",

      description:
        "A timeless interpretation of classic watchmaking, defined by balanced proportions and understated detail.",

      type: "The Classic",
      size: "40mm",
      movement: "Automatic",
      crystal: "Sapphire",
      strap: "Leather",

      button: "Discover AUREN 01",
    },

    collectionWatch02: {
      label: "02 / THE MODERN",
      title: "AUREN 02",

      description:
        "A contemporary expression built around clean geometry, refined materials and modern restraint.",

      type: "The Modern",
      size: "40mm",
      movement: "Automatic",
      crystal: "Sapphire",
      strap: "Leather",

      button: "Discover AUREN 02",
    },

    collectionWatch03: {
      label: "03 / THE SIGNATURE",
      title: "AUREN 03",

      description:
        "A distinctive timepiece where bold character meets the quiet precision of traditional watchmaking.",

      type: "The Signature",
      size: "41mm",
      movement: "Automatic",
      crystal: "Sapphire",
      strap: "Leather",

      button: "Discover AUREN 03",
    },

    collectionPhilosophy: {
      label: "THE AUREN STANDARD",
      title: "Different expressions.",
      titleAccent: "Same intention.",

      text: "From the first sketch to the final detail, every AUREN timepiece follows the same philosophy: create something considered, precise and made to endure.",
    },

    collectionCta: {
      eyebrow: "THE AUREN PHILOSOPHY",

      title: "Discover what",
      titleAccent: "lies behind the timepiece.",

      description:
        "Explore the story, philosophy and craftsmanship behind AUREN.",

      button: "Our Philosophy",
    },

    /* =================================================
           Brand
        ================================================= */

    brandPhilosophy: {
      label: "01 / PHILOSOPHY",
      title: "Designed around",
      titleAccent: "meaning.",

      text: "Every element has a purpose. Nothing is added without intention, and nothing is designed simply to follow a passing trend.",
    },

    brandValues: {
      label: "02 / THE AUREN STANDARD",
      title: "Three principles.",
      titleAccent: "One standard.",

      precision: {
        title: "Precision",
        text: "Every detail is considered for accuracy, balance and lasting performance.",
      },

      craftsmanship: {
        title: "Craftsmanship",
        text: "Refined construction meets a deep respect for traditional watchmaking.",
      },

      timeless: {
        title: "Timeless Design",
        text: "Designed beyond trends to remain relevant through generations.",
      },
    },

    brandCta: {
      eyebrow: "DISCOVER AUREN",
      title: "Explore the philosophy",
      titleAccent: "behind the timepiece.",
      button: "View The Collection",
    },

    /* =================================================
           Contact
        ================================================= */

    contact: {
      eyebrow: "GET IN TOUCH",

      title: "Let’s talk about",
      titleAccent: "time.",

      description:
        "Whether you are looking for a particular timepiece, visiting our boutique, or simply want to learn more about AUREN, we would be pleased to hear from you.",

      /* Contact Information */

      infoLabel: "CONTACT",

      infoEyebrow: "A DIRECT CONNECTION",

      infoTitle: "We are here to assist.",

      infoDescription:
        "Our client services team is available to answer questions about our collections, appointments, availability and the AUREN experience.",

      /* Contact Details */

      emailLabel: "EMAIL",
      phoneLabel: "PHONE",
      locationLabel: "BOUTIQUE",
      hoursLabel: "OPENING HOURS",

      /* Contact Form */

      nameLabel: "NAME",
      namePlaceholder: "Your name",

      formEmailLabel: "EMAIL",
      emailPlaceholder: "Your email",

      subjectLabel: "SUBJECT",
      subjectPlaceholder: "How can we help?",

      messageLabel: "MESSAGE",
      messagePlaceholder: "Write your message...",

      submit: "SEND MESSAGE",

      /* Boutique */

      boutiqueEyebrow: "VISIT AUREN",

      boutiqueTitle: "Experience AUREN",

      boutiqueDescription:
        "Step into the world of AUREN and discover our timepieces in an atmosphere designed around precision, craftsmanship and quiet luxury.",

      boutiqueButton: "DISCOVER THE BOUTIQUE",

      /* FAQ */

      faqLabel: "FAQ",

      faqEyebrow: "FREQUENTLY ASKED",

      faqTitle: "Questions, answered.",

      faq1Question: "Can I visit the AUREN boutique without an appointment?",

      faq1Answer:
        "Yes. You are welcome to visit during our opening hours. For a dedicated consultation, we recommend arranging an appointment in advance.",

      faq2Question: "Where can I learn more about a specific watch?",

      faq2Answer:
        "Explore our Collection page for details about each AUREN timepiece, including its movement, materials and design characteristics.",

      faq3Question: "Does AUREN offer private consultations?",

      faq3Answer:
        "Private consultations are available at our boutique. Contact our client services team to arrange a suitable time.",

      faq4Question: "How can I contact the AUREN team?",

      faq4Answer:
        "You can reach our team by email or phone using the contact details above. We will be pleased to assist you.",

      /* Final CTA */

      ctaEyebrow: "DISCOVER THE COLLECTION",

      ctaTitle: "Time deserves",
      ctaTitleAccent: "attention.",

      ctaDescription:
        "Explore the AUREN collection and discover timepieces shaped by precision and restraint.",

      ctaButton: "VIEW COLLECTION",

      ctaSignature: "TIME, REFINED.",
    },

    /* =================================================
           Footer
        ================================================= */

    footer: {
      tagline: "Time, refined.",

      home: "Home",
      collection: "Collection",
      brand: "Brand",
      contact: "Contact",

      copyright: "© 2026 AUREN. All rights reserved.",

      crafted: "Crafted with precision.",
    },
  },

  /* =====================================================
       Persian
    ===================================================== */

  fa: {
    /* Navigation */

    nav: {
      home: "خانه",
      collection: "مجموعه",
      brand: "برند",
      contact: "تماس با ما",
    },

    /* =================================================
           Home
        ================================================= */

    hero: {
      eyebrow: "زمان، در اوج ظرافت.",
      title: "زمان، چیزی فراتر",
      titleAccent: "از یک لحظه است.",

      description:
        "AUREN ساعت‌هایی ظریف خلق می‌کند؛ جایی که دقت، متریال و طراحی ماندگار در کنار یکدیگر قرار می‌گیرند.",

      button: "مشاهده مجموعه",
      scroll: "اسکرول",
    },

    /* Brand Intro */

    brandIntro: {
      label: "فلسفه AUREN",
      eyebrow: "هنر زمان",

      title: "فراتر از یک ساعت.",
      titleAccent: "بیانی ماندگار.",

      text1:
        "ما باور داریم زمان باید تجربه شود، نه اینکه صرفاً اندازه‌گیری شود.",

      text2:
        "AUREN طراحی سنجیده، دقت مکانیکی و متریال ماندگار را در کنار یکدیگر قرار می‌دهد تا ساعت‌هایی خلق کند که در خاطر بمانند.",

      button: "فلسفه ما را بشناسید",
      scroll: "اسکرول",
    },

    /* Featured Watch */

    featuredWatch: {
      label: "AUREN 01 / کلاسیک",

      imageCaption: "AUREN 01 — کلاسیک",

      category: "کلاسیک",

      title: "مطالعه‌ای در",
      titleAccent: "سادگی.",

      description:
        "تفسیری متعادل از ساعت‌سازی کلاسیک که با تناسب، متریال و جزئیات ظریف شکل گرفته است.",

      specs: "۴۰ میلی‌متر · اتوماتیک · یاقوت کبود · چرم",

      case: "قاب",
      caseValue: "۴۰ میلی‌متر",

      movement: "موتور",
      movementValue: "اتوماتیک",

      crystal: "شیشه",
      crystalValue: "یاقوت کبود",

      strap: "بند",
      strapValue: "چرم",

      button: "مشاهده AUREN 01",
    },

    /* Craftsmanship */

    craftsmanship: {
      label: "هنر ساخت",
      eyebrow: "هنر ساخت",
      category: "ساعت‌سازی",

      title: "ساخته‌شده با",
      titleAccent: "هدف.",

      text: "هر ساعت AUREN با تعهد به دقت، متریال و طراحی ماندگار شکل می‌گیرد.",

      description:
        "هر ساعت AUREN با تعهد به دقت، متریال و طراحی ماندگار شکل می‌گیرد.",

      precisionTitle: "دقت",

      precisionText:
        "هر جزئیات با توجه به دقت، تعادل و عملکرد ماندگار در نظر گرفته می‌شود.",

      materialsTitle: "متریال",

      materialsText:
        "متریال انتخاب‌شده بر اساس کیفیت، شخصیت و دوام آن‌ها انتخاب می‌شوند.",

      finishingTitle: "پرداخت نهایی",

      finishingText:
        "هر سطح و جزئیات با دقت پرداخت می‌شود تا نتیجه‌ای سنجیده و ماندگار شکل بگیرد.",

      button: "کشف هنر ساخت",
    },

    /* Collection Preview */

    collectionPreview: {
      label: "مجموعه",
      eyebrow: "مجموعه",

      title: "سه بیان متفاوت.",
      titleAccent: "یک فلسفه.",

      watch01: "AUREN 01",
      watch02: "AUREN 02",
      watch03: "AUREN 03",

      watch01Type: "کلاسیک",
      watch02Type: "مدرن",
      watch03Type: "امضایی",

      watch01Category: "کلاسیک",
      watch02Category: "مدرن",
      watch03Category: "امضایی",

      watch01Description:
        "تفسیری ماندگار از ساعت‌سازی کلاسیک که با تناسب متعادل و جزئیات ظریف تعریف می‌شود.",

      watch02Description:
        "بیانی معاصر که بر پایه هندسه‌ای خالص، متریال ظریف و سادگی مدرن شکل گرفته است.",

      watch03Description:
        "ساعتی متمایز که شخصیت قدرتمند را با دقت آرام و ظریف ساعت‌سازی سنتی ترکیب می‌کند.",

      footerText: "سه بیان متفاوت، شکل‌گرفته بر پایه یک فلسفه.",

      button: "مشاهده مجموعه کامل",
    },

    /* Brand Statement */

    brandStatement: {
      label: "۰۳ / زمان، در اوج ظرافت.",
      eyebrow: "زمان، در اوج ظرافت.",

      title: "طراحی‌شده برای",
      titleAccent: "لحظاتی که اهمیت دارند.",

      description:
        "AUREN در مرز میان دقت و احساس شکل گرفته است؛ ساعت‌هایی که به بخشی از لحظاتی تبدیل می‌شوند که خود اندازه‌گیری می‌کنند.",

      established: "تأسیس ۲۰۲۶",
      brand: "ساعت‌های AUREN",
      signature: "ساخته‌شده با هدف",

      est: "تأسیس ۲۰۲۶",
      crafted: "ساخته‌شده با هدف",
    },

    /* Home CTA */

    homeCta: {
      eyebrow: "AUREN را کشف کنید",

      title: "ساعتی را پیدا کنید",
      titleAccent: "که با شما سخن می‌گوید.",

      description:
        "مجموعه AUREN را کاوش کنید و ساعتی را کشف کنید که متناسب با سبک و شخصیت شما شکل گرفته است.",

      signature: "زمان، در اوج ظرافت.",

      button: "مشاهده مجموعه",
    },

    /* =================================================
           Collection
        ================================================= */

    collectionHero: {
      label: "مجموعه AUREN",

      title: "زمان،",
      titleAccent: "در اوج ظرافت.",

      description:
        "مجموعه‌ای شکل‌گرفته بر پایه دقت، تناسب و نگاهی ماندگار به طراحی.",
    },

    collectionIntro: {
      label: "مجموعه",

      title: "سه ساعت.",
      titleAccent: "یک فلسفه.",

      text: "هر ساعت AUREN با شخصیت منحصربه‌فرد خود، تعهدی مشترک به دقت و طراحی ماندگار را به نمایش می‌گذارد.",
    },

    collectionWatch01: {
      label: "۰۱ / کلاسیک",
      title: "AUREN 01",

      description:
        "تفسیری ماندگار از ساعت‌سازی کلاسیک که با تناسب متعادل و جزئیات ظریف تعریف می‌شود.",

      type: "کلاسیک",
      size: "۴۰ میلی‌متر",
      movement: "اتوماتیک",
      crystal: "یاقوت کبود",
      strap: "چرم",

      button: "مشاهده AUREN 01",
    },

    collectionWatch02: {
      label: "۰۲ / مدرن",
      title: "AUREN 02",

      description:
        "بیانی معاصر که بر پایه هندسه‌ای خالص، متریال ظریف و سادگی مدرن شکل گرفته است.",

      type: "مدرن",
      size: "۴۰ میلی‌متر",
      movement: "اتوماتیک",
      crystal: "یاقوت کبود",
      strap: "چرم",

      button: "مشاهده AUREN 02",
    },

    collectionWatch03: {
      label: "۰۳ / امضایی",
      title: "AUREN 03",

      description:
        "ساعتی متمایز که شخصیت قدرتمند را با دقت آرام و ظریف ساعت‌سازی سنتی ترکیب می‌کند.",

      type: "امضایی",
      size: "۴۱ میلی‌متر",
      movement: "اتوماتیک",
      crystal: "یاقوت کبود",
      strap: "چرم",

      button: "مشاهده AUREN 03",
    },

    collectionPhilosophy: {
      label: "استاندارد AUREN",

      title: "بیان‌های متفاوت.",
      titleAccent: "یک هدف مشترک.",

      text: "از نخستین طرح تا آخرین جزئیات، هر ساعت AUREN از یک فلسفه مشترک پیروی می‌کند: خلق چیزی سنجیده، دقیق و ساخته‌شده برای ماندگاری.",
    },

    collectionCta: {
      eyebrow: "فلسفه AUREN",

      title: "کشف کنید چه چیزی",
      titleAccent: "پشت این ساعت قرار دارد.",

      description: "داستان، فلسفه و هنر ساخت پشت ساعت‌های AUREN را کشف کنید.",

      button: "فلسفه ما",
    },

    /* =================================================
           Brand
        ================================================= */

    brandPhilosophy: {
      label: "۰۱ / فلسفه",

      title: "طراحی‌شده بر پایه",
      titleAccent: "معنا.",

      text: "هر جزئیات هدفی دارد. هیچ چیزی بدون دلیل اضافه نشده و هیچ بخشی صرفاً برای دنبال کردن یک ترند زودگذر طراحی نشده است.",
    },

    brandValues: {
      label: "۰۲ / استاندارد AUREN",

      title: "سه اصل.",
      titleAccent: "یک استاندارد.",

      precision: {
        title: "دقت",

        text: "هر جزئیات با توجه به دقت، تعادل و عملکرد ماندگار در نظر گرفته می‌شود.",
      },

      craftsmanship: {
        title: "هنر ساخت",

        text: "ساختی ظریف که با احترام عمیق به ساعت‌سازی سنتی همراه شده است.",
      },

      timeless: {
        title: "طراحی ماندگار",

        text: "طراحی‌شده فراتر از ترندها تا در طول نسل‌ها همچنان ارزشمند باقی بماند.",
      },
    },

    brandCta: {
      eyebrow: "AUREN را کشف کنید",

      title: "فلسفه",
      titleAccent: "پشت این ساعت را کاوش کنید.",

      button: "مشاهده مجموعه",
    },

    /* =================================================
           Contact
        ================================================= */

    contact: {
      eyebrow: "با ما در ارتباط باشید",

      title: "بیایید درباره",
      titleAccent: "زمان صحبت کنیم.",

      description:
        "چه به دنبال یک ساعت خاص باشید، چه قصد بازدید از بوتیک AUREN را داشته باشید یا بخواهید بیشتر با ما آشنا شوید، خوشحال می‌شویم از شما بشنویم.",

      /* Contact Information */

      infoLabel: "تماس",

      infoEyebrow: "یک ارتباط مستقیم",

      infoTitle: "ما اینجا هستیم تا همراه شما باشیم.",

      infoDescription:
        "تیم خدمات مشتریان ما آماده پاسخ‌گویی به پرسش‌های شما درباره مجموعه‌ها، رزرو وقت، موجودی و تجربه AUREN است.",

      /* Contact Details */

      emailLabel: "ایمیل",
      phoneLabel: "تلفن",
      locationLabel: "بوتیک",
      hoursLabel: "ساعات کاری",

      /* Contact Form */

      nameLabel: "نام",
      namePlaceholder: "نام شما",

      formEmailLabel: "ایمیل",
      emailPlaceholder: "ایمیل شما",

      subjectLabel: "موضوع",
      subjectPlaceholder: "چگونه می‌توانیم کمک کنیم؟",

      messageLabel: "پیام",
      messagePlaceholder: "پیام خود را بنویسید...",

      submit: "ارسال پیام",

      /* Boutique */

      boutiqueEyebrow: "از AUREN دیدن کنید",

      boutiqueTitle: "AUREN را تجربه کنید",

      boutiqueDescription:
        "وارد دنیای AUREN شوید و ساعت‌های ما را در فضایی تجربه کنید که بر پایه دقت، هنر ساخت و لوکس‌بودن آرام طراحی شده است.",

      boutiqueButton: "مشاهده بوتیک",

      /* FAQ */

      faqLabel: "پرسش‌های متداول",

      faqEyebrow: "پرسش‌های متداول",

      faqTitle: "پرسش‌ها، پاسخ داده شده‌اند.",

      faq1Question: "آیا می‌توانم بدون رزرو وقت از بوتیک AUREN بازدید کنم؟",

      faq1Answer:
        "بله. شما می‌توانید در ساعات کاری از بوتیک ما بازدید کنید. برای دریافت یک مشاوره اختصاصی، پیشنهاد می‌کنیم از قبل وقت خود را رزرو کنید.",

      faq2Question:
        "از کجا می‌توانم درباره یک ساعت خاص اطلاعات بیشتری کسب کنم؟",

      faq2Answer:
        "برای مشاهده اطلاعات هر ساعت AUREN، از جمله موتور، متریال و ویژگی‌های طراحی، به صفحه مجموعه مراجعه کنید.",

      faq3Question: "آیا AUREN مشاوره خصوصی ارائه می‌دهد؟",

      faq3Answer:
        "بله. مشاوره‌های خصوصی در بوتیک ما ارائه می‌شوند. برای هماهنگی زمان مناسب با تیم خدمات مشتریان ما تماس بگیرید.",

      faq4Question: "چگونه می‌توانم با تیم AUREN تماس بگیرم؟",

      faq4Answer:
        "می‌توانید از طریق ایمیل یا تلفن، با استفاده از اطلاعات تماس بالا، با تیم ما در ارتباط باشید. خوشحال می‌شویم به شما کمک کنیم.",

      /* Final CTA */

      ctaEyebrow: "مجموعه را کشف کنید",

      ctaTitle: "زمان شایسته",
      ctaTitleAccent: "توجه است.",

      ctaDescription:
        "مجموعه AUREN را کاوش کنید و ساعت‌هایی را کشف کنید که با دقت و سادگی شکل گرفته‌اند.",

      ctaButton: "مشاهده مجموعه",

      ctaSignature: "زمان، در اوج ظرافت.",
    },

    /* =================================================
           Footer
        ================================================= */

    footer: {
      tagline: "زمان، در اوج ظرافت.",

      home: "خانه",
      collection: "مجموعه",
      brand: "برند",
      contact: "تماس با ما",

      copyright: "© ۲۰۲۶ AUREN. تمامی حقوق محفوظ است.",

      crafted: "ساخته‌شده با دقت.",
    },
  },
};

/* =========================================================
   Language System
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.querySelector(".language-toggle");

  let currentLanguage = localStorage.getItem("auren-language") || "en";

  /* =====================================================
       Get Translation
    ===================================================== */

  function getTranslation(key) {
    const keys = key.split(".");

    let translation = translations[currentLanguage];

    for (const item of keys) {
      if (translation === undefined || translation === null) {
        return undefined;
      }

      translation = translation[item];
    }

    return translation;
  }

  /* =====================================================
       Translate Page
    ===================================================== */

  function translatePage() {
    /* -------------------------
           Text
        ------------------------- */

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
      const key = element.dataset.i18n;

      const translation = getTranslation(key);

      if (translation !== undefined) {
        element.textContent = translation;
      }
    });

    /* -------------------------
           Placeholders
        ------------------------- */

    const placeholderElements = document.querySelectorAll(
      "[data-i18n-placeholder]",
    );

    placeholderElements.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      const translation = getTranslation(key);

      if (translation !== undefined) {
        element.placeholder = translation;
      }
    });
  }

  /* =====================================================
       Update Language Button
    ===================================================== */

  function updateLanguageButton() {
    if (!languageToggle) {
      return;
    }

    const languages = languageToggle.querySelectorAll("span");

    if (languages.length >= 3) {
      const enElement = languages[0];
      const faElement = languages[2];

      enElement.classList.toggle(
        "language-toggle__active",
        currentLanguage === "en",
      );

      faElement.classList.toggle(
        "language-toggle__active",
        currentLanguage === "fa",
      );
    }
  }

  /* =====================================================
       Set Language
    ===================================================== */

  function setLanguage(language) {
    if (!translations[language]) {
      return;
    }

    currentLanguage = language;

    localStorage.setItem("auren-language", currentLanguage);

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir = currentLanguage === "fa" ? "rtl" : "ltr";

    translatePage();

    updateLanguageButton();
  }

  /* =====================================================
       Toggle Language
    ===================================================== */

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const newLanguage = currentLanguage === "en" ? "fa" : "en";

      setLanguage(newLanguage);
    });
  }

  /* =====================================================
       Initial Language
    ===================================================== */

  setLanguage(currentLanguage);
});

/* =========================================================
   Scroll Reveal
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(`

            /* Home */

            .brand-intro,
            .featured-watch,
            .craftsmanship,
            .collection-preview,
            .brand-statement,
            .home-cta,

            /* Collection */

            .collection-hero,
            .collection-hero__inner,
            .collection-intro,
            .collection-intro__content,
            .collection-watch,
            .collection-philosophy,
            .collection-philosophy__inner,
            .collection-cta,
            .collection-cta__inner,

            /* Brand */

            .brand-hero,
            .brand-hero__content,
            .brand-philosophy,
            .brand-philosophy__image,
            .brand-philosophy__content,
            .brand-values,
            .brand-value,
            .brand-statement__container,
            .brand-cta,
            .brand-cta__container,

            /* Contact */

            .contact-hero,
            .contact-hero__content,
            .contact-info,
            .contact-info__header,
            .contact-info__content,
            .contact-form-wrapper,
            .boutique,
            .boutique__content,
            .contact-faq,
            .contact-faq__header,
            .faq-item,
            .contact-cta,
            .contact-cta__container
        `);

  if (!revealElements.length) {
    return;
  }

  /* =====================================================
       Add Reveal Class
    ===================================================== */

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  /* =====================================================
       Intersection Observer
    ===================================================== */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          /*
           * Remove the class when the
           * element leaves the viewport.
           * This allows the animation to
           * happen again on the next scroll.
           */

          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  /* =====================================================
       Observe Elements
    ===================================================== */

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
});
