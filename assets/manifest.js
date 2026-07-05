/* HSK4 Grammar Lab — site manifest (single source of truth for nav + index) */
window.MANIFEST = {
  siteTitle: "HSK 4 Grammar Lab",
  siteSubtitle: "From HSK 3 to HSK 4 — every new structure, fully interactive",
  units: [
    {
      name: "Complements — the heart of HSK 4",
      zh: "补语",
      desc: "The single biggest jump from HSK 3: verbs grow tails that express result, direction, possibility, degree and quantity.",
      pages: [
        { id: "result-complements", zh: "结果补语", title: "Result complements", blurb: "完・好・到・见・住・懂・错・掉・光・成 — saying what actually happened" },
        { id: "directional-complements", zh: "趋向补语", title: "Directional complements & extended meanings", blurb: "起来・下来・下去・出来・过来・过去 — when direction becomes idea" },
        { id: "potential-complements", zh: "可能补语", title: "Potential complements", blurb: "V得C / V不C — can & can't, the HSK 4 way" },
        { id: "degree-state-complements", zh: "程度与状态补语", title: "Degree & state complements", blurb: "得很・极了・死了・得不得了 — turning adjectives up to 11" },
        { id: "duration-frequency", zh: "时量与动量补语", title: "Duration & frequency complements", blurb: "学了三年 / 去过两次 — where the time phrase really goes" }
      ]
    },
    {
      name: "Core sentence patterns",
      zh: "核心句型",
      desc: "The signature HSK 4 sentence machines: 把, 被, comparisons, emphasis and 'even'.",
      pages: [
        { id: "ba-sentences", zh: "把字句", title: "The 把 construction", blurb: "把 + O + V + extra — moving the object before the verb" },
        { id: "passive-bei", zh: "被动句", title: "Passives with 被 / 让 / 叫", blurb: "The car got towed — passive voice and when Chinese avoids it" },
        { id: "comparisons", zh: "比较句", title: "Comparisons, level 2", blurb: "比…得多 / 不如 / 没有…那么 / 跟…一样 — and every trap in between" },
        { id: "shi-de-emphasis", zh: "强调句", title: "Emphasis: 是…的, 并, 难道", blurb: "Spotlighting time, place, manner — and rhetorical fire" },
        { id: "lian-dou", zh: "连……都/也", title: "连…都/也 — “even”", blurb: "Even my grandma knows this pattern" },
        { id: "questions-indefinites", zh: "疑问词活用", title: "Question words as indefinites", blurb: "谁都 / 什么都 / 哪儿都 / 怎么V都 — one word, four jobs" }
      ]
    },
    {
      name: "Small words, big differences",
      zh: "副词精讲",
      desc: "Single-syllable adverbs decide meaning at HSK 4 — and the exam knows it.",
      pages: [
        { id: "jiu-vs-cai", zh: "就 vs 才", title: "就 vs 才", blurb: "Earlier/easier than expected vs later/harder than expected" },
        { id: "you-zai-hai", zh: "又・再・还", title: "又 vs 再 vs 还", blurb: "Three kinds of “again” — the classic HSK trap" },
        { id: "time-adverbs", zh: "时间副词", title: "Time adverbs", blurb: "刚 vs 刚才, 正好, 及时/准时/按时, 提前, 马上/立刻" },
        { id: "attitude-adverbs", zh: "语气副词", title: "Attitude & tone adverbs", blurb: "竟然・到底・究竟・千万・恐怕・差点儿・几乎・甚至" },
        { id: "yue-lai-yue", zh: "越来越", title: "越来越 & 越…越", blurb: "More and more — gradual change done right" }
      ]
    },
    {
      name: "Connecting ideas",
      zh: "复句与关联词",
      desc: "HSK 4 reading & writing live on paired connectors. Master the pairs, master the exam.",
      pages: [
        { id: "cause-effect", zh: "因果关系", title: "Cause & effect", blurb: "由于・因此・于是・既然…就 — beyond 因为…所以" },
        { id: "conditionals", zh: "条件关系", title: "Conditionals", blurb: "只要…就 / 只有…才 / 除非 / 要是 — which condition is enough?" },
        { id: "contrast-concession", zh: "转折与让步", title: "Contrast & concession", blurb: "尽管・却・倒・不过・然而・即使…也" },
        { id: "addition-sequencing", zh: "递进与并列", title: "Addition & sequencing", blurb: "不但…而且 / 既…又 / 一方面 / 先…再…然后" }
      ]
    },
    {
      name: "Words & structures",
      zh: "词法",
      desc: "The grammar hiding inside words: particles, separable verbs, prepositions, numbers.",
      pages: [
        { id: "de-particles", zh: "的・地・得", title: "The three de: 的 地 得", blurb: "One sound, three jobs — and a Writing-section favourite" },
        { id: "separable-verbs", zh: "离合词", title: "Separable verbs", blurb: "见面 → 见过一次面 — verbs that split open" },
        { id: "zhe-reduplication", zh: "着・重叠・是否", title: "着, reduplication & 是否", blurb: "门开着 / 商量商量 / 是否同意 — the small machines HSK 4 assumes you know" },
        { id: "prepositions", zh: "介词", title: "Prepositions & coverbs", blurb: "随着・通过・由・对/对于/关于・按照・以…为" },
        { id: "numbers-approx", zh: "数字表达", title: "Numbers, multiples & approximation", blurb: "倍・分之・左右・大概・差不多・一天比一天" },
        { id: "confusables", zh: "近义词辨析", title: "Confusable pairs", blurb: "适合/合适・常常/往往・一定/肯定/确定・以为/认为・反而/相反" }
      ]
    },
    {
      name: "Exam room",
      zh: "考场",
      desc: "Everything mixed together, HSK 4 style: sentence ordering, word arrangement, and a grand final quiz.",
      pages: [
        { id: "exam-practice", zh: "综合演练", title: "Mixed exam practice", blurb: "80+ exam-level items across every topic on this site" }
      ]
    }
  ]
};
window.ALL_PAGES = window.MANIFEST.units.flatMap(u => u.pages.map(p => Object.assign({ unit: u.name, unitZh: u.zh }, p)));
