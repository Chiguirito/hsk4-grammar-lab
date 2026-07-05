/* HSK 4 Grammar Lab — 时量与动量补语 (duration & frequency complements) */
registerPage({
  id: "duration-frequency",
  zh: "时量与动量**补语**",
  title: "Duration & frequency — where the time phrase really goes",
  subtitle: "From HSK 3 you know time-WHEN goes before the verb (我昨天去). HSK 4 adds time-HOW-LONG (学了三年) and how-many-TIMES (去过两次) — and both fight with the object for the seat behind the verb. This whole topic is word order, which is exactly why the Writing section farms it.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: quantity is a <span class="zh hl">tail</span>, not a lead-in',
      short: "Big idea",
      html: `
<p>Chinese time expressions split into two teams. <b>Point-in-time</b> (<i>when?</i> — 昨天, 三点) stands <b>before</b> the verb. <b>Amount-of-time</b> and <b>number-of-times</b> are complements — they hang <b>after</b> the verb and measure it:</p>
<div class="pattern">Subj + V + <span class="slot">了/过</span> + <span class="slot">duration / count</span><small>等<b>了十分钟</b> · 去<b>过两次</b> — the measurement is the tail of the verb</small></div>
<p>The drama starts when the verb also has an object: <b>the tail and the object both want the seat right behind the verb</b>. Every rule on this page is about who wins that seat.</p>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 🇪🇸 Half familiar, half trap</span>
"I studied <b>for three years</b>", „ich habe <b>drei Jahre</b> studiert“, "estudié <b>tres años</b>" — duration after the verb feels natural in all your languages. The trap is the object: English happily says "I studied <b>Chinese</b> for three years", but Chinese refuses ✗<span class="zh">我学汉语三年</span>. The object must move or the verb must be copied — that part has no equivalent at home.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The arrange-the-words task loves handing you a verb, an object, and a 三年/两次 tile. If you know the three legal layouts, these items are free points; if you don't, they are unsolvable.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "Duration + object: the three legal layouts",
      short: "Duration rules",
      intro: "With a plain duration and no object, life is easy: 我等了十分钟. Add an object and you must choose one of these:",
      head: ["Layout", "Pattern", "Example"],
      rows: [
        ['<b>No object</b>', '<span class="zh">V + 了 + duration</span>', '<span class="zh">我们等<b class="hl">了十分钟</b>。</span> <span class="py-hint">Wǒmen děng le shí fēnzhōng.</span>'],
        ['<b>Repeat the verb</b>', '<span class="zh">V + O + V + 了 + duration</span>', '<span class="zh">他<b class="hl">学</b>汉语<b class="hl">学了三年</b>。</span> <span class="py-hint">Tā xué Hànyǔ xué le sān nián.</span>'],
        ['<b>Duration inside</b> (+ optional 的)', '<span class="zh">V + 了 + duration (+的) + O</span>', '<span class="zh">他学<b class="hl">了三年（的）</b>汉语。</span> <span class="py-hint">Tā xué le sān nián (de) Hànyǔ.</span>'],
        ['<b>Topicalize</b>', '<span class="zh">O + Subj + V + 了 + duration</span>', '<span class="zh">汉语他<b class="hl">学了三年</b>。</span> <span class="py-hint">Hànyǔ tā xué le sān nián.</span>'],
        ['<b>Pronoun object</b> — special!', '<span class="zh">V + 了 + pronoun + duration</span>', '<span class="zh">我等<b class="hl">了他半个小时</b>。</span> <span class="py-hint">Wǒ děng le tā bàn ge xiǎoshí.</span> — pronoun FIRST, duration after'],
        ['<b>Never</b>', '<span class="zh">✗ V + O + duration</span>', '<span class="zh">✗ 他学汉语三年。 ✗ 我等他了半个小时。</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — read, listen, absorb",
      short: "Examples",
      intro: "Tap to listen. In every sentence, ask: where did the duration or the count land, and why?",
      items: [
        { tag: "duration", cn: "我们等**了十分钟**，车才来。", py: "Wǒmen děng le shí fēnzhōng, chē cái lái.", en: "We waited ten minutes before the bus finally came.", note: "No object → duration sits directly after V了. (才 = later than hoped, from the 就/才 topic.)" },
        { tag: "repeat V", cn: "他**学**汉语**学了三年**。", py: "Tā xué Hànyǔ xué le sān nián.", en: "He studied Chinese for three years.", note: "Layout 2: say the verb twice — first with the object, then with the duration." },
        { tag: "的", cn: "我学**了三年的**汉语。", py: "Wǒ xué le sān nián de Hànyǔ.", en: "I studied three years of Chinese.", note: "Layout 3: duration squeezes between verb and object, optionally glued with 的." },
        { tag: "pronoun", cn: "我等**了他半个小时**，他才出现。", py: "Wǒ děng le tā bàn ge xiǎoshí, tā cái chūxiàn.", en: "I waited half an hour for him before he showed up.", note: "Pronouns are the exception: they cut in line, BEFORE the duration. ✗等了半个小时他." },
        { tag: "double 了", cn: "我学汉语**学了三年了**，还是觉得难。", py: "Wǒ xué Hànyǔ xué le sān nián le, háishi juéde nán.", en: "I've been studying Chinese for three years now, and it still feels hard.", note: "Second 了 at sentence end = 'and counting'. Without it, the three years are over." },
        { tag: "negation", cn: "他病得很厉害，**三天没**来上课。", py: "Tā bìng de hěn lìhai, sān tiān méi lái shàngkè.", en: "He was really ill — he didn't come to class for three days.", note: "Negation flips the order: the duration of NOT doing goes BEFORE 没 + verb." },
        { tag: "次", cn: "我去**过两次**北京，都是夏天去的。", py: "Wǒ qù guo liǎng cì Běijīng, dōu shì xiàtiān qù de.", en: "I've been to Beijing twice, both times in summer.", note: "Frequency behaves like duration: after V过, before a noun object. (是…的 nails down the 'when'.)" },
        { tag: "遍", cn: "这部电影太好看了，我看**了三遍**。", py: "Zhè bù diànyǐng tài hǎokàn le, wǒ kàn le sān biàn.", en: "That movie is so good I watched it three times through.", note: "遍 = complete run-throughs, start to finish. 三次 would just mean three occasions." },
        { tag: "趟", cn: "上个月我回**了一趟**老家。", py: "Shàng ge yuè wǒ huí le yí tàng lǎojiā.", en: "Last month I made a trip back to my hometown.", note: "趟 counts round trips — it only pairs with movement verbs like 去、来、回、跑." },
        { tag: "顿", cn: "考完试，我们在饭馆好好儿吃**了一顿**。", py: "Kǎo wán shì, wǒmen zài fànguǎn hǎohāor chī le yí dùn.", en: "After the exam we treated ourselves to a proper meal at a restaurant.", note: "顿 counts meals — and scoldings! 批评了一顿 works exactly the same way." },
        { tag: "pronoun", cn: "我见**过他两次**，但是印象不深。", py: "Wǒ jiàn guo tā liǎng cì, dànshì yìnxiàng bù shēn.", en: "I've met him twice, but I don't remember him well.", note: "Same pronoun privilege with counts: 见过他两次, never ✗见过两次他." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: 'Fine print: double 了, negation flip, habits',
      short: "了 & negation",
      html: `
<h3>1 · 学了三年 vs 学了三年<b class="hl">了</b></h3>
<p>One 了 after the verb closes the chapter; a second 了 at the end keeps the book open:</p>
<p class="zh" style="font-size:1.15rem">我学<b class="hl">了</b>三年汉语。— I studied it for three years (then stopped, or context decides).<br>我学汉语学<b class="hl">了</b>三年<b class="hl">了</b>。— Three years so far, still going.</p>
<p>The exam loves pairing the double-了 version with <span class="zh">还</span>: <span class="zh">他等了一个小时<b class="hl">了</b>，还不想走。</span></p>
<h3>2 · Negation flips the word order</h3>
<p>You can't measure an action that never happened — instead you measure the <b>gap</b>. The duration jumps in FRONT of 没:</p>
<div class="pattern">Subj + <span class="slot">duration</span> + 没 + V (+了)<small><span class="zh">我<b>三天没</b>睡觉了。</span> — three days WITHOUT sleeping · ✗我没睡觉三天</small></div>
<p><span class="zh">我们<b class="hl">很久没</b>见面了。</span> — the classic "long time no see" structure, literally.</p>
<h3>3 · Habits: no 了 at all</h3>
<p>Regular routines take the duration but drop 了: <span class="zh">我<b class="hl">每天</b>锻炼<b class="hl">一个小时</b>。</span> "了 + habitual 每天" is a contradiction the exam plants on purpose.</p>
<div class="callout warn"><span class="co-title">⚠️ 两 vs 二 in tails</span>
Counts and durations use 两: <span class="zh">两次、两遍、两年、两个小时</span> — never ✗二次. You knew this from measure words; it applies to every complement on this page.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "The counting words: 次 · 遍 · 趟 · 顿",
      short: "次·遍·趟·顿",
      intro: "All four count actions, but they count different things. Position first: V + 了/过 + count + noun object (去过两次北京), and pronouns cut in front (见过他两次).",
      tabs: [
        {
          label: "次 — occasions",
          html: `<p><span class="zh">次</span> is the neutral counter: how many separate <b>occasions</b> something happened. When in doubt, 次 is grammatically safe — but it says nothing about completeness.</p>`,
          examples: [
            { cn: "这个地方我来过**很多次**。", py: "Zhège dìfang wǒ lái guo hěn duō cì.", en: "I've been to this place many times.", note: "Topicalized object + 来过 + count. 很多次 = an uncounted 'many occasions'." },
            { cn: "这个问题我们讨论过**两次**，还没有结果。", py: "Zhège wèntí wǒmen tǎolùn guo liǎng cì, hái méiyǒu jiéguǒ.", en: "We've discussed this issue twice without a result.", note: "Two occasions — no claim that either discussion was 'complete'." }
          ]
        },
        {
          label: "遍 — run-throughs",
          html: `<p><span class="zh">遍</span> = one pass <b>from beginning to end</b>. Reading a text, watching a film, explaining, repeating — anything with a start and a finish. <span class="zh">再说一遍</span> asks for the whole sentence again; <span class="zh">再说一次</span> just asks for another speaking event.</p>`,
          examples: [
            { cn: "老师，请您再讲**一遍**，我没听懂。", py: "Lǎoshī, qǐng nín zài jiǎng yí biàn, wǒ méi tīng dǒng.", en: "Teacher, please explain it once more — I didn't understand.", note: "You want the WHOLE explanation again → 遍. (再 for a future repeat — see 又/再/还.)" },
            { cn: "这本书我从头到尾读了**两遍**。", py: "Zhè běn shū wǒ cóng tóu dào wěi dú le liǎng biàn.", en: "I read this book cover to cover twice.", note: "从头到尾 'head to tail' — practically the definition of 遍." }
          ]
        },
        {
          label: "趟 — trips",
          html: `<p><span class="zh">趟</span> counts <b>round trips</b> — going somewhere and (implicitly) coming back. Only movement verbs: <span class="zh">去、来、回、跑</span>. <span class="zh">去了一趟银行</span> paints the whole errand; <span class="zh">去了一次银行</span> merely counts it.</p>`,
          examples: [
            { cn: "下午我要去**一趟**银行，取点儿钱。", py: "Xiàwǔ wǒ yào qù yí tàng yínháng, qǔ diǎnr qián.", en: "This afternoon I need to make a trip to the bank to withdraw some money.", note: "An errand → 趟. Note 要 + V + 一趟: counts work with future plans too, no 了." },
            { cn: "他跑了**好几趟**火车站，才买到票。", py: "Tā pǎo le hǎo jǐ tàng huǒchēzhàn, cái mǎi dào piào.", en: "He made quite a few trips to the station before he managed to get tickets.", note: "好几 + measure = 'a good few'. 才 flags how much effort it took." }
          ]
        },
        {
          label: "顿 — meals & scoldings",
          html: `<p><span class="zh">顿</span> counts <b>meals</b> (<span class="zh">吃一顿饭</span>) and, delightfully, <b>verbal storms</b>: <span class="zh">批评一顿</span> (a telling-off), <span class="zh">骂一顿</span>. If someone gets it 一顿, they either ate well or got yelled at.</p>`,
          examples: [
            { cn: "我们**一天**吃**三顿**饭。", py: "Wǒmen yì tiān chī sān dùn fàn.", en: "We eat three meals a day.", note: "Habitual → no 了. Duration-like 一天 up front, count 三顿 behind the verb." },
            { cn: "他又迟到了，被老板批评了**一顿**。", py: "Tā yòu chídào le, bèi lǎobǎn pīpíng le yí dùn.", en: "He was late again and got a telling-off from the boss.", note: "批评了一顿 — the count rides along inside a 被 sentence (see the passive topic)." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions. Word order is the whole game here — slow down and place the tail.",
      items: [
        { q: "Which sentence is correct?", choices: ['<span class="zh">我等了十分钟他。</span>', '<span class="zh">我等了他十分钟。</span>', '<span class="zh">我等他了十分钟。</span>', '<span class="zh">我十分钟等了他。</span>'], a: 1, expl: "Pronoun objects cut in line: V了 + pronoun + duration. 等了他十分钟 — the pronoun may never trail after the duration." },
        { q: '<span class="zh">他学汉语___三年。</span>', choices: ['<span class="zh">学了</span>', '<span class="zh">了</span>', '<span class="zh">学</span>', '<span class="zh">过</span>'], a: 0, expl: "With a noun object you repeat the verb: 学汉语 + 学了 + 三年. Bare ✗学汉语了三年 leaves the duration stranded behind the object." },
        { q: '<span class="zh">请再说___，我没听清楚。</span>', choices: ['<span class="zh">一次</span>', '<span class="zh">一遍</span>', '<span class="zh">一趟</span>', '<span class="zh">一顿</span>'], a: 1, expl: "You want the WHOLE utterance repeated start to finish → 遍, the run-through counter. 一次 only requests another occasion." },
        { q: "“He hasn't slept for three days.” Which is right?", choices: ['<span class="zh">他没睡觉三天。</span>', '<span class="zh">他三天没睡觉了。</span>', '<span class="zh">他睡了三天没觉。</span>', '<span class="zh">他没三天睡觉。</span>'], a: 1, expl: "Negation flips the order: the duration of NOT doing moves before 没 — 三天没睡觉(了). Duration after the verb only measures what DID happen." },
        { q: '<span class="zh">我钢琴学了五年了。</span> What does the second 了 add?', choices: ["The five years are finished", "Still learning now — five years and counting", "It marks past tense twice for emphasis", "It makes the sentence a question"], a: 1, expl: "Double 了 = 'up to now and continuing'. Drop the final 了 and the five years become a closed chapter." },
        { q: '<span class="zh">上个星期我回了___老家。</span>', choices: ['<span class="zh">一趟</span>', '<span class="zh">一遍</span>', '<span class="zh">一顿</span>', '<span class="zh">一场</span>'], a: 0, expl: "回 is a movement verb and this is a round trip → 趟. 遍 needs a start-to-finish activity, 顿 needs a meal or a scolding." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One word-order disease per patient. These are the exact bugs the exam builds distractors from.",
      items: [
        { wrong: "我等了半个小时他。", right: "我等了他半个小时。", py: "Wǒ děng le tā bàn ge xiǎoshí.", en: "I waited for him for half an hour.", expl: "Pronouns never trail the duration. V了 + pronoun + duration: 等了他半个小时." },
        { wrong: "他学汉语了三年。", right: "他学汉语学了三年。／他学了三年的汉语。", py: "Tā xué Hànyǔ xué le sān nián.", en: "He studied Chinese for three years.", expl: "✗V + O + 了 + duration doesn't exist. Either copy the verb (学…学了) or tuck the duration inside (学了三年的汉语)." },
        { wrong: "我没睡觉三天。", right: "我三天没睡觉了。", py: "Wǒ sān tiān méi shuìjiào le.", en: "I haven't slept for three days.", expl: "Negation flips the order: you measure the GAP, so the duration goes before 没 + verb." },
        { wrong: "上个星期我去了一遍上海。", right: "上个星期我去了一趟上海。", py: "Shàng ge xīngqī wǒ qù le yí tàng Shànghǎi.", en: "I made a trip to Shanghai last week.", expl: "遍 counts a start-to-finish run through CONTENT (读一遍课文, 看一遍电影) — a journey has no content to run through. Movement verbs take 趟 (the whole errand) or plain 次: 去了一趟／一次上海." },
        { wrong: "我昨天游泳了一个小时。", right: "我昨天游了一个小时的泳。／我昨天游泳游了一个小时。", py: "Wǒ zuótiān yóu le yí ge xiǎoshí de yǒng.", en: "I swam for an hour yesterday.", expl: "游泳 is a separable verb: 泳 is its built-in object, so the duration must split it — 游了一个小时（的）泳 — or the verb gets copied. (Full story in the 离合词 topic.)" },
        { wrong: "我见过三次他。", right: "我见过他三次。", py: "Wǒ jiàn guo tā sān cì.", en: "I've met him three times.", expl: "Counts obey the same pronoun rule as durations: 见过 + 他 + 三次. Pronoun first, tail after." },
        { wrong: "他来了中国两年。", right: "他来中国两年了。", py: "Tā lái Zhōngguó liǎng nián le.", en: "He's been in China for two years.", expl: "来 is instantaneous — you can't 'come' for two years. The duration counts time SINCE arrival, so it follows the object and the sentence needs a final 了." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — the word-order gym",
      short: "Builder",
      intro: "Eight items, because this topic IS word order. Find the verb, then decide: repeat it, split it, or let the pronoun cut in.",
      items: [
        { tiles: ["我", "学", "汉语", "学了", "三年"], py: "Wǒ xué Hànyǔ xué le sān nián.", en: "I studied Chinese for three years.", hint: "Verb copy: V + O + V了 + duration." },
        { tiles: ["我们", "坐了", "十个小时", "的", "飞机"], py: "Wǒmen zuò le shí ge xiǎoshí de fēijī.", en: "We were on the plane for ten hours.", hint: "Duration inside: V了 + duration + 的 + object." },
        { tiles: ["我", "等了", "你", "半个小时"], py: "Wǒ děng le nǐ bàn ge xiǎoshí.", en: "I waited half an hour for you.", hint: "Pronoun cuts in front of the duration." },
        { tiles: ["他", "去过", "两次", "上海"], py: "Tā qù guo liǎng cì Shànghǎi.", en: "He has been to Shanghai twice.", hint: "Count before a place-name object is the exam's preferred order.", alt: [["他", "去过", "上海", "两次"], ["上海", "他", "去过", "两次"]] },
        { tiles: ["这部", "电影", "我", "看了", "三遍"], py: "Zhè bù diànyǐng wǒ kàn le sān biàn.", en: "I've watched this movie three times through.", hint: "Topicalize the object, then V了 + count." },
        { tiles: ["我", "昨天", "去了", "一趟", "超市"], py: "Wǒ zuótiān qù le yí tàng chāoshì.", en: "I made a trip to the supermarket yesterday.", hint: "Time-when (昨天) before the verb; the trip count after it.", alt: [["昨天", "我", "去了", "一趟", "超市"]] },
        { tiles: ["他", "已经", "三天", "没", "上班", "了"], py: "Tā yǐjīng sān tiān méi shàngbān le.", en: "He hasn't been to work for three days already.", hint: "Negation flip: duration + 没 + verb, final 了 for 'and counting'." },
        { tiles: ["我们", "以前", "见过", "两次", "面"], py: "Wǒmen yǐqián jiàn guo liǎng cì miàn.", en: "We've met twice before.", hint: "见面 is separable — the count wedges in: 见过两次面.", alt: [["以前", "我们", "见过", "两次", "面"]] }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · Separable verbs split open <span class="zh">(离合词 preview)</span></h3>
<p><span class="zh">睡觉、游泳、见面、上课、聊天</span> secretly contain their own object — so tails wedge INSIDE them, exactly like layout 3:</p>
<p class="zh" style="font-size:1.15rem">睡<b class="hl">了一个小时（的）</b>觉 · 游<b class="hl">了一个小时</b>泳 · 见<b class="hl">过两次</b>面 · ✗睡觉了一个小时</p>
<p>The 离合词 topic covers the full species; here just remember: <b>if it's a V-O verb, the number goes in the crack</b>.</p>
<h3>2 · Instant verbs: duration = time since</h3>
<p><span class="zh">来、到、离开、结婚、毕业、认识、死</span> happen in a moment — the duration measures the time <b>after</b> the event and follows the whole V-O, usually with a final 了:</p>
<p class="zh" style="font-size:1.15rem">他来中国<b class="hl">两年了</b>。 · 我们认识<b class="hl">五年了</b>。 · 他毕业<b class="hl">半年了</b>。</p>
<p>No verb copy here: ✗<span class="zh">他来中国来了两年</span> — you can't stretch an instant.</p>
<h3>3 · 第一次 is an adverbial, 一次 is a complement</h3>
<p class="zh" style="font-size:1.15rem">我<b class="hl">第一次</b>坐飞机的时候，紧张得要命。 — "the first time" sets the scene → BEFORE the verb.<br>我坐<b class="hl">过一次</b>飞机。 — "once" measures the verb → AFTER it.</p>
<h3>4 · Place names: both orders pass, one order scores</h3>
<p><span class="zh">去过两次北京</span> and <span class="zh">去过北京两次</span> are both heard from natives. In the exam's tidy world, put the count first — <span class="zh">去过<b class="hl">两次</b>北京</span> — and save the after-object order for pronouns, where it is obligatory (<span class="zh">见过他两次</span>).</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Ordering task with a 三年/两次/一趟 tile? ① Find the verb. ② Is there a 了/过 tile? Glue it to the verb. ③ Pronoun object → straight after the verb, tail last. Noun object → look for a second copy of the verb or a 的; that tells you which layout the item wants.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Eleven questions at real exam difficulty. Every distractor is a word-order bug from the clinic.",
      items: [
        { q: "Which order is NOT acceptable?", choices: ['<span class="zh">他去过两次北京。</span>', '<span class="zh">他去过北京两次。</span>', '<span class="zh">他两次去过北京。</span>', '<span class="zh">北京他去过两次。</span>'], a: 2, expl: "Counts are complements — they follow the verb. Fronting 两次 as an adverbial only works for ordinals (第二次去北京). Both post-verb orders and topicalization are fine." },
        { q: '<span class="zh">他上班迟到了，被经理批评了___。</span>', choices: ['<span class="zh">一顿</span>', '<span class="zh">一遍</span>', '<span class="zh">一趟</span>', '<span class="zh">一场</span>'], a: 0, expl: "Scoldings are counted with 顿, the same word as meals: 批评了一顿. 遍 would absurdly mean a complete start-to-finish run-through of the telling-off." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">我学了三年的汉语。</span>', '<span class="zh">我学汉语学了三年。</span>', '<span class="zh">我学了汉语三年。</span>', '<span class="zh">汉语我学了三年。</span>'], a: 2, expl: "✗V了 + O + duration strands the tail behind the object. The three legal layouts: verb copy, duration+的+O, topicalization." },
        { q: "“I swam for an hour yesterday.”", choices: ['<span class="zh">我昨天游泳了一个小时。</span>', '<span class="zh">我昨天游了一个小时的泳。</span>', '<span class="zh">我昨天游了泳一个小时。</span>', '<span class="zh">我昨天一个小时游了泳。</span>'], a: 1, expl: "游泳 is separable: the duration wedges between 游 and 泳 — 游了一个小时（的）泳. Treating 游泳 as an unsplittable verb is the classic bug." },
        { q: '<span class="zh">他来中国___，汉语已经说得很好了。</span>', choices: ['<span class="zh">两年了</span>', '<span class="zh">来了两年</span>', '<span class="zh">了两年</span>', '<span class="zh">两年</span>'], a: 0, expl: "来 is instantaneous — the duration counts time SINCE arrival: 来中国两年了, with the final 了 for 'up to now'. No verb copy for instant verbs." },
        { q: "“The first time I ate Beijing duck was last year.”", choices: ['<span class="zh">我第一次吃北京烤鸭是去年。</span>', '<span class="zh">我吃北京烤鸭第一次是去年。</span>', '<span class="zh">我吃了第一次北京烤鸭是去年。</span>', '<span class="zh">我吃北京烤鸭是第一次去年。</span>'], a: 0, expl: "第一次 (ordinal) is an adverbial and stands BEFORE the verb. Only plain counts (一次) live after the verb as complements." },
        { q: '<span class="zh">雨下了三天___，还没停。</span>', choices: ['<span class="zh">了</span>', '<span class="zh">的</span>', '<span class="zh">过</span>', '<span class="zh">次</span>'], a: 0, expl: "还没停 tells you it's ongoing → double 了: 下了三天了. One 了 alone would close the rain's chapter, clashing with 还没停." },
        { q: '<span class="zh">这部电影特别好，我想再看___。</span>', choices: ['<span class="zh">一遍</span>', '<span class="zh">一趟</span>', '<span class="zh">一顿</span>', '<span class="zh">第二次</span>'], a: 0, expl: "A whole re-watch, start to finish → 遍. 第二次 is an ordinal adverbial and would have to stand before 看, not after it." },
        { q: "“I haven't seen him for half a year.”", choices: ['<span class="zh">我半年没见他了。</span>', '<span class="zh">我没见他半年了。</span>', '<span class="zh">我没半年见他了。</span>', '<span class="zh">我见他没半年了。</span>'], a: 0, expl: "Duration of NOT doing → before 没: 半年没见他了. Post-verb duration only measures actions that actually happened." },
        { q: '<span class="zh">我每天锻炼___。</span>', choices: ['<span class="zh">一个小时</span>', '<span class="zh">了一个小时</span>', '<span class="zh">一个小时了</span>', '<span class="zh">了一个小时了</span>'], a: 0, expl: "每天 marks a habit — habits take the duration but refuse 了. 每天…了 is a built-in contradiction the exam plants on purpose." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">我见过两次他。</span>', '<span class="zh">我见过他两次。</span>', '<span class="zh">我两次见过他。</span>', '<span class="zh">我见他过两次。</span>'], a: 1, expl: "Pronoun object → straight after the verb, count last: 见过他两次. And 过 always glues to the verb, never to the pronoun." }
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">时量・动量补语 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Situation</th><th>Pattern</th></tr>
<tr><td>No object</td><td>V + 了/过 + <b class="hl">duration/count</b>: 等了十分钟 · 去过两次</td></tr>
<tr><td>Noun object</td><td>copy the verb: 学汉语<b class="hl">学了</b>三年 · or wedge in: 学了三年<b class="hl">(的)</b>汉语 · or topicalize: 汉语学了三年</td></tr>
<tr><td>Pronoun object</td><td>pronoun FIRST: 等了<b class="hl">他</b>半个小时 · 见过<b class="hl">他</b>两次 — never ✗等了半个小时他</td></tr>
<tr><td>Still ongoing</td><td>double 了: 学了三年<b class="hl">了</b> (= and counting)</td></tr>
<tr><td>Didn't do</td><td>duration flips FRONT: <b class="hl">三天</b>没睡觉了 · 很久没见面了</td></tr>
<tr><td>Habit</td><td>每天 + V + duration, NO 了: 每天锻炼一个小时</td></tr>
<tr><td>Instant verbs</td><td>来/到/结婚/毕业/认识 + O + duration + 了: 来中国两年了 (no verb copy)</td></tr>
<tr><td>Separable verbs</td><td>tail in the crack: 睡了一个小时(的)觉 · 游了一个小时泳 · 见过两次面</td></tr>
<tr><td>次 / 遍 / 趟 / 顿</td><td>occasions / start-to-finish run-throughs (再说一遍!) / trips (去一趟) / meals & scoldings (吃一顿·批评一顿)</td></tr>
<tr><td>第一次 vs 一次</td><td>ordinal = adverbial BEFORE V (第一次坐飞机) · plain count = complement AFTER V (坐过一次)</td></tr>
</table></div>`
    }
  ]
});
