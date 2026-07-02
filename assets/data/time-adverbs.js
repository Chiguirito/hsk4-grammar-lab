/* HSK 4 Grammar Lab — 时间副词 (time adverbs) */
registerPage({
  id: "time-adverbs",
  zh: "时间副词",
  title: "Time adverbs — when, exactly, and with what attitude",
  subtitle: "From HSK 3 you have 正在, 快…了 and the big time words. HSK 4 hands you a precision toolkit: just-now vs just, in-time vs on-time vs on-schedule, always vs tends-to, and the two 'then's that trip up every English speaker.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: the clock plus the speaker',
      short: "Big idea",
      html: `
<p>HSK 3 time grammar told you <b>when</b> something happens (<span class="zh">昨天、正在、快…了</span>). The HSK 4 additions all encode something extra: <b>how the event relates to a schedule, an expectation, or the speaker's experience</b>.</p>
<div class="pattern">Clock fact + <span class="slot">speaker's angle</span> = the HSK 4 time adverb<small>刚 = fresh in memory · 提前 = beat the schedule · 从来不 = in all my experience, never · 往往 = the pattern I've observed…</small></div>
<ul>
<li><b>Recent past:</b> <span class="zh">刚 / 刚才</span> — two words, two different parts of speech, one exam favourite.</li>
<li><b>Meeting the schedule:</b> <span class="zh">及时 · 准时 · 按时 · 提前</span> — the punctuality quartet.</li>
<li><b>Imminence:</b> <span class="zh">马上 / 立刻</span> and <span class="zh">就要…了 / 快…了</span>.</li>
<li><b>Across time:</b> <span class="zh">从来 · 一直 · 总是 · 往往</span>.</li>
<li><b>Narrative glue:</b> <span class="zh">后来 vs 然后</span> — the trap hiding inside English “then”.</li>
</ul>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 The punctuality quartet maps beautifully</span>
及时 = <i>rechtzeitig</i> / <i>a tiempo</i> (in time, before it's too late) · 准时 = <i>pünktlich</i> / <i>puntual</i> (on the dot) · 按时 = <i>termingerecht, wie vorgeschrieben</i> / <i>según el horario</i> (as scheduled, each time) · 提前 = <i>im Voraus</i> / <i>con antelación</i>. If you keep the German/Spanish word in mind, you'll never mix the Chinese three.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "tabs",
      title: '刚 vs 刚才 — one syllable apart, different species',
      short: "刚 vs 刚才",
      intro: "刚 is an ADVERB (‘just, only recently’); 刚才 is a TIME NOUN (‘a moment ago’). Because they belong to different word classes, they obey different rules — and HSK 4 tests every single difference.",
      tabs: [
        {
          label: "刚 — the adverb",
          html: `<p><span class="zh hl">刚</span> sits <b>directly before the verb</b> and means “only just”. Three superpowers 刚才 doesn't have:</p>
<ul>
<li><b>Relative anchor:</b> “just” counted from any point — even long ago: <span class="zh">他去年<b class="hl">刚</b>毕业的时候…</span></li>
<li><b>Duration after:</b> <span class="zh">刚 + V + time span</span>: <span class="zh"><b class="hl">刚</b>来三天</span> — “has only been here three days”.</li>
<li><b>刚…就:</b> “no sooner had A happened than B”: <span class="zh"><b class="hl">刚</b>坐下，电话<b class="hl">就</b>响了。</span></li>
</ul>
<p>What it can't do: start a sentence alone, modify a noun with 的, or stand before negation.</p>`,
          examples: [
            { cn: "我**刚**到家，还没吃饭呢。", py: "Wǒ gāng dào jiā, hái méi chīfàn ne.", en: "I just got home — haven't eaten yet.", note: "刚 + verb: freshly completed." },
            { cn: "他**刚**来北京三天，对这里还不熟悉。", py: "Tā gāng lái Běijīng sān tiān, duì zhèli hái bù shúxī.", en: "He's only been in Beijing three days and isn't familiar with the place yet.", note: "Duration after the verb — legal with 刚, illegal with 刚才." },
            { cn: "我**刚**坐下，电话**就**响了。", py: "Wǒ gāng zuò xià, diànhuà jiù xiǎng le.", en: "No sooner had I sat down than the phone rang.", note: "刚…就 — a tighter cousin of 一…就." }
          ]
        },
        {
          label: "刚才 — the noun",
          html: `<p><span class="zh hl">刚才</span> is a <b>time noun</b> like 昨天 — it names the last few minutes of real clock time. Noun privileges:</p>
<ul>
<li><b>Can open the sentence:</b> <span class="zh"><b class="hl">刚才</b>有人找你。</span></li>
<li><b>Negation may follow:</b> <span class="zh"><b class="hl">刚才</b>我没听见。</span> — impossible with 刚.</li>
<li><b>Can own things with 的:</b> <span class="zh"><b class="hl">刚才</b>的事 · <b class="hl">刚才</b>的电话</span>.</li>
</ul>
<p>What it can't do: take a duration after the verb, or mean “just” relative to some past moment — it always counts back from <b>now</b>.</p>`,
          examples: [
            { cn: "**刚才**有人给你打电话，你猜是谁？", py: "Gāngcái yǒu rén gěi nǐ dǎ diànhuà, nǐ cāi shì shéi?", en: "Someone called you a moment ago — guess who?", note: "Sentence-initial position: fine for a time noun." },
            { cn: "对不起，**刚才**我没听见你说话。", py: "Duìbuqǐ, gāngcái wǒ méi tīngjiàn nǐ shuōhuà.", en: "Sorry, I didn't hear you just now.", note: "刚才 + negation ✓. ✗刚没听见 is the planted error." },
            { cn: "**刚才**的事，你别放在心上。", py: "Gāngcái de shì, nǐ bié fàng zài xīnshàng.", en: "Don't take what just happened to heart.", note: "刚才 + 的 + noun — only nouns get to do this." }
          ]
        },
        {
          label: "Spot the difference",
          html: `<p>The full scorecard:</p>
<ul>
<li><b>Word class:</b> 刚 = adverb (glued before verb) · 刚才 = time noun (moves like 昨天).</li>
<li><b>Sentence start:</b> ✗<span class="zh">刚，我…</span> · ✓<span class="zh"><b class="hl">刚才</b>我…</span></li>
<li><b>Negation after it:</b> ✗<span class="zh">刚没听见</span> · ✓<span class="zh"><b class="hl">刚才</b>没听见</span></li>
<li><b>Duration after verb:</b> ✓<span class="zh"><b class="hl">刚</b>来三天</span> · ✗<span class="zh">刚才来三天</span></li>
<li><b>Relative “just”:</b> ✓<span class="zh">去年<b class="hl">刚</b>毕业</span> · ✗<span class="zh">去年刚才毕业</span> (刚才 = minutes ago from NOW, always)</li>
<li><b>+ 的 + noun:</b> ✗<span class="zh">刚的事</span> · ✓<span class="zh"><b class="hl">刚才</b>的事</span></li>
</ul>
<div class="callout tip"><span class="co-title">💡 One-line memory hook</span>
<b>刚 hugs the verb; 刚才 behaves like 昨天.</b> Every exam question about the pair reduces to this line.</div>`,
          examples: [
            { cn: "他**刚**走。＝ 他**刚才**走了。", py: "Tā gāng zǒu. = Tā gāngcái zǒu le.", en: "He just left. (both fine — different word class, same fact)", note: "When both are legal, meaning barely differs. The exam tests the cases where only ONE is legal." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "table",
      title: 'The punctuality quartet: 及时 · 准时 · 按时 · 提前',
      short: "及时准时按时",
      intro: "Three ways to be 'on time' plus one way to beat the clock. This triple contrast is an HSK 4 vocabulary-section favourite — the sentences differ by exactly one word.",
      head: ["Word", "Core idea", "Grammar notes", "Example"],
      rows: [
        ['<span class="zh hl">及时</span> <span class="py-hint">jíshí</span>', '<b>In time / just when needed</b> — before it\'s too late. About need, not clocks.', 'Adverb AND adjective: <span class="zh">及时赶到 · 来得很及时 · 及时的帮助</span>', '<span class="zh">幸亏医生来得<b class="hl">及时</b>，奶奶已经没事了。</span> <span class="py-hint">Xìngkuī yīshēng lái de jíshí, nǎinai yǐjīng méi shì le.</span>'],
        ['<span class="zh hl">准时</span> <span class="py-hint">zhǔnshí</span>', '<b>Punctual, on the dot</b> — exactly at the agreed clock time.', 'Adverb + adjective-ish: <span class="zh">准时到 · 很准时</span>; often with a stated clock time', '<span class="zh">请大家八点<b class="hl">准时</b>到机场门口。</span> <span class="py-hint">Qǐng dàjiā bā diǎn zhǔnshí dào jīchǎng ménkǒu.</span>'],
        ['<span class="zh hl">按时</span> <span class="py-hint">ànshí</span>', '<b>As scheduled / as prescribed</b> — following a set plan, usually repeatedly.', 'Adverb only — ✗<span class="zh">很按时</span>. Loves duties: <span class="zh">按时吃药 · 按时交作业 · 按时睡觉</span>', '<span class="zh">医生让他<b class="hl">按时</b>吃药，多喝水。</span> <span class="py-hint">Yīshēng ràng tā ànshí chī yào, duō hē shuǐ.</span>'],
        ['<span class="zh hl">提前</span> <span class="py-hint">tíqián</span>', '<b>Ahead of schedule</b> — do it early, often by a stated margin.', '<span class="zh">提前 (+ amount) + V</span>: <span class="zh">提前十分钟到</span>; also “move X earlier”: <span class="zh">会议提前到三点了</span>', '<span class="zh">春节的火车票要<b class="hl">提前</b>预订。</span> <span class="py-hint">Chūnjié de huǒchēpiào yào tíqián yùdìng.</span>']
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "examples",
      title: 'Model sentences — the whole toolkit in action',
      short: "Examples",
      intro: "Twelve sentences, one per tool. Tap to listen, and name the adverb's 'angle' before reading the note.",
      items: [
        { tag: "刚…就", cn: "我**刚**到公司，会议**就**开始了。", py: "Wǒ gāng dào gōngsī, huìyì jiù kāishǐ le.", en: "The meeting started the moment I got to the office.", note: "刚 A 就 B: barely-in-time drama." },
        { tag: "刚才", cn: "**刚才**你说什么？我没听清楚。", py: "Gāngcái nǐ shuō shénme? Wǒ méi tīng qīngchu.", en: "What did you say just now? I didn't catch it.", note: "Time noun opening the sentence — 刚 could never." },
        { tag: "及时", cn: "谢谢你**及时**提醒我，要不然我就忘了今天的面试。", py: "Xièxie nǐ jíshí tíxǐng wǒ, yàoburán wǒ jiù wàng le jīntiān de miànshì.", en: "Thanks for reminding me in time — otherwise I'd have forgotten today's interview.", note: "及时 = the reminder landed exactly when needed. No clock mentioned — that's the point." },
        { tag: "准时", cn: "火车八点半出发，从来不等人，请**准时**到。", py: "Huǒchē bā diǎn bàn chūfā, cónglái bù děng rén, qǐng zhǔnshí dào.", en: "The train leaves at 8:30 and waits for no one — please be there on time.", note: "A clock time is stated → 准时, on the dot." },
        { tag: "按时", cn: "这种药一天三次，必须**按时**吃。", py: "Zhè zhǒng yào yì tiān sān cì, bìxū ànshí chī.", en: "This medicine is three times a day — you must take it as prescribed.", note: "A repeated schedule → 按时. The exam's favourite of the trio." },
        { tag: "提前", cn: "我们**提前**半个小时到了电影院，先买了点儿吃的。", py: "Wǒmen tíqián bàn gè xiǎoshí dào le diànyǐngyuàn, xiān mǎi le diǎnr chī de.", en: "We got to the cinema half an hour early and bought some snacks first.", note: "提前 + amount + verb: beat the schedule by a stated margin." },
        { tag: "马上", cn: "你等我一下，我**马上**就到。", py: "Nǐ děng wǒ yíxià, wǒ mǎshàng jiù dào.", en: "Wait a second — I'll be right there.", note: "马上(就) = immediately. Colloquial and everywhere." },
        { tag: "立刻", cn: "一听到这个消息，她**立刻**给家里打了个电话。", py: "Yì tīngdào zhège xiāoxi, tā lìkè gěi jiāli dǎ le ge diànhuà.", en: "The moment she heard the news, she immediately called home.", note: "立刻 = instant reaction, slightly more formal than 马上." },
        { tag: "正好", cn: "你来得**正好**，我们**正好**缺一个人。", py: "Nǐ lái de zhènghǎo, wǒmen zhènghǎo quē yí gè rén.", en: "Perfect timing — we happen to be exactly one person short.", note: "正好 = by happy coincidence / exactly right. Don't confuse with ongoing 正在." },
        { tag: "从来", cn: "我**从来**没吃过这么辣的菜。", py: "Wǒ cónglái méi chī guo zhème là de cài.", en: "I've never eaten food this spicy in my life.", note: "从来 + 没…过: never in all my experience. 从来 refuses positive sentences." },
        { tag: "一直", cn: "雨**一直**下到半夜才停。", py: "Yǔ yìzhí xià dào bànyè cái tíng.", en: "The rain kept falling until midnight before it finally stopped.", note: "一直 = continuously, without interruption — one long unbroken line." },
        { tag: "后来", cn: "他先在北京工作了两年，**后来**去了上海。", py: "Tā xiān zài Běijīng gōngzuò le liǎng nián, hòulái qù le Shànghǎi.", en: "He first worked in Beijing for two years; later on he moved to Shanghai.", note: "后来 = 'later on' in a PAST story. For future plans you'd need 然后/以后." }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: 'Imminence, coincidence, and “never”',
      short: "马上·正好·从来",
      intro: "Three small clusters that share one exam habit: the distractors are always each other.",
      tabs: [
        {
          label: "马上 / 立刻",
          html: `<p>Both mean “immediately”, both sit before the verb (often with 就):</p>
<ul>
<li><span class="zh hl">马上</span> — everyday, elastic: “right away” can stretch to “very soon” (<span class="zh">马上就要过年了</span>).</li>
<li><span class="zh hl">立刻</span> — crisper and a touch more formal: instant reaction, no stretching.</li>
</ul>
<p>Swapping them is rarely WRONG — the exam instead checks position (before the verb, after the subject) and the 就…了 packaging.</p>`,
          examples: [
            { cn: "别着急，我**马上**就来。", py: "Bié zháojí, wǒ mǎshàng jiù lái.", en: "Don't worry, I'm coming right now." },
            { cn: "听到有人喊“救命”，他**立刻**跑了过去。", py: "Tīngdào yǒu rén hǎn “jiùmìng”, tā lìkè pǎo le guòqù.", en: "Hearing someone shout 'Help!', he immediately ran over.", note: "Instant reflex → 立刻 shines." }
          ]
        },
        {
          label: "就要…了 vs 快…了",
          html: `<p>HSK 3 gave you <span class="zh">快…了 / 快要…了</span> (“about to”). HSK 4 adds the sharper <span class="zh">就要…了</span> — and one hard rule:</p>
<div class="pattern">time word + <span class="slot">就要</span> + V + 了 ✓ &nbsp;&nbsp;·&nbsp;&nbsp; time word + <span class="slot">快</span> + V + 了 ✗<small>火车八点就要开了 ✓ · ✗火车八点快开了 — 快 refuses a stated clock time.</small></div>
<p>No time word? Both work: <span class="zh">快下雨了 ＝ 就要下雨了</span> (就要 sounds more urgent).</p>`,
          examples: [
            { cn: "飞机十点**就要**起飞**了**，我们得快点儿。", py: "Fēijī shí diǎn jiù yào qǐfēi le, wǒmen děi kuài diǎnr.", en: "The plane takes off at ten — we need to hurry.", note: "Stated time (十点) → only 就要…了 is legal." },
            { cn: "**快**到春节**了**，火车票很难买。", py: "Kuài dào Chūnjié le, huǒchēpiào hěn nán mǎi.", en: "Spring Festival is coming up — train tickets are hard to get.", note: "No clock time → 快…了 is perfect." }
          ]
        },
        {
          label: "正好 / 恰好",
          html: `<p><span class="zh hl">正好</span> = “by lucky coincidence / exactly right”. Two jobs:</p>
<ul>
<li><b>Adverb of coincidence:</b> <span class="zh">我<b class="hl">正好</b>也要去银行</span> — “I happen to be going to the bank too.”</li>
<li><b>Adjective “just right”:</b> <span class="zh">这双鞋大小<b class="hl">正好</b></span>.</li>
</ul>
<p><span class="zh hl">恰好</span> is its bookish twin (reading texts love it). And don't confuse either with HSK 3's <span class="zh">正在</span>: 正在 = action in progress; 正好 = the stars aligned.</p>`,
          examples: [
            { cn: "我**正好**也要去银行，我们一起走吧。", py: "Wǒ zhènghǎo yě yào qù yínháng, wǒmen yìqǐ zǒu ba.", en: "I happen to be going to the bank too — let's walk together." },
            { cn: "那天**恰好**是我的生日，所以我记得特别清楚。", py: "Nà tiān qiàhǎo shì wǒ de shēngri, suǒyǐ wǒ jìde tèbié qīngchu.", en: "That day happened to be my birthday, which is why I remember it so clearly.", note: "恰好 = written-flavored 正好." }
          ]
        },
        {
          label: "从来 + negation",
          html: `<p><span class="zh hl">从来</span> = “ever, in all this time” — and in modern usage it <b>demands negation</b>:</p>
<ul>
<li><span class="zh">从来<b class="hl">不</b> + V</span> — a standing refusal/habit: <span class="zh">我从来不喝咖啡</span> (I never drink coffee — policy).</li>
<li><span class="zh">从来<b class="hl">没(有)</b> + V + <b class="hl">过</b></span> — zero lifetime experience: <span class="zh">她从来没迟到过</span>.</li>
</ul>
<p>✗<span class="zh">我从来喝咖啡</span> — positive 从来 is the planted error. Positive “always” belongs to 一直/总是.</p>`,
          examples: [
            { cn: "我**从来不**喝咖啡，一喝**就**睡不着。", py: "Wǒ cónglái bù hē kāfēi, yì hē jiù shuì bu zháo.", en: "I never drink coffee — one sip and I can't sleep.", note: "从来不 = permanent policy. Bonus 一…就 in clause two." },
            { cn: "她工作十年，**从来没**迟到**过**。", py: "Tā gōngzuò shí nián, cónglái méi chídào guo.", en: "In ten years of work she has never once been late.", note: "从来没…过 — the experiential 过 is part of the frame." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "tabs",
      title: 'Two traps for storytellers: always-words and then-words',
      short: "总是·后来",
      intro: "The last two clusters decide whether your HSK 4 essay sounds native or translated. Both are direct casualties of English.",
      tabs: [
        {
          label: "一直 vs 总是 vs 往往",
          html: `<p>Three “always”, three geometries:</p>
<ul>
<li><span class="zh hl">一直</span> — <b>one unbroken line</b>: continuously, the whole stretch. <span class="zh">雨一直下了三天。</span> Also “all along”: <span class="zh">我一直想学太极拳。</span></li>
<li><span class="zh hl">总是</span> — <b>dots at every opportunity</b>: habitually, every time. <span class="zh">他总是第一个到办公室。</span></li>
<li><span class="zh hl">往往</span> — <b>a statistical pattern</b>: “tends to, more often than not”, based on observed experience. Needs a condition or situation attached, states facts, not plans: <span class="zh">周末的地铁往往很挤。</span></li>
</ul>
<div class="callout warn"><span class="co-title">⚠️ 往往 is picky</span>
No personal intentions (✗<span class="zh">我往往去健身房</span> → <span class="zh">我常常去健身房</span>), no future predictions (✗<span class="zh">明天往往会下雨</span>), no one-off events. It summarizes a pattern that already exists. Full showdown with 常常 in the Confusables topic.</div>`,
          examples: [
            { cn: "大学毕业以后，我们**一直**保持着联系。", py: "Dàxué bìyè yǐhòu, wǒmen yìzhí bǎochí zhe liánxì.", en: "We've stayed in touch continuously since graduating.", note: "Unbroken line → 一直." },
            { cn: "他**总是**把办公室收拾得干干净净。", py: "Tā zǒngshì bǎ bàngōngshì shōushi de gāngānjìngjìng.", en: "He always keeps the office spotless.", note: "Habit repeated every time → 总是." },
            { cn: "北方的春天**往往**风很大。", py: "Běifāng de chūntiān wǎngwǎng fēng hěn dà.", en: "Spring in the north tends to be very windy.", note: "Observed tendency + condition (北方的春天) → 往往." }
          ]
        },
        {
          label: "后来 vs 然后",
          html: `<p>English “then/later” covers both — Chinese splits them hard:</p>
<ul>
<li><span class="zh hl">然后</span> — <b>“and then”, pure sequence</b>: step B follows step A. Works for past, future, plans, recipes, instructions. Often teams up as <span class="zh">先…然后再…</span></li>
<li><span class="zh hl">后来</span> — <b>“later on”, PAST narration only</b>: jumps forward across a gap in a story that already happened. Never for future plans, never for instructions.</li>
</ul>
<div class="pattern">Future/plan → <span class="slot">然后</span> only &nbsp;·&nbsp; Past story, time gap → <span class="slot">后来</span><small>✗ 明天我们先去博物馆，后来去吃烤鸭 → ✓ …然后去吃烤鸭</small></div>`,
          examples: [
            { cn: "我们以前是同学，**后来**他搬去了国外，就很少见面了。", py: "Wǒmen yǐqián shì tóngxué, hòulái tā bān qù le guówài, jiù hěn shǎo jiànmiàn le.", en: "We used to be classmates; later on he moved abroad and we rarely saw each other.", note: "Past story with a time gap → 后来." },
            { cn: "先把菜洗干净，**然后**再切。", py: "Xiān bǎ cài xǐ gānjìng, ránhòu zài qiē.", en: "Wash the vegetables first, then cut them.", note: "Instructions → 然后 (+再 for extra sequencing glue). 后来 would be flat-out wrong." },
            { cn: "他一开始不同意，**后来**才慢慢改变了想法。", py: "Tā yì kāishǐ bù tóngyì, hòulái cái mànmàn gǎibiàn le xiǎngfa.", en: "At first he disagreed; only later did he slowly change his mind.", note: "后来 + 才: the change came late in the story — two topics shaking hands." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — pick the right tool",
      short: "Checkpoint",
      intro: "Six quick decisions. Name the cluster first (recent past? punctuality? tendency?), then choose.",
      items: [
        { q: '<span class="zh">___你去哪儿了？我到处找你。</span>', choices: ['<span class="zh">刚</span>', '<span class="zh">刚才</span>', '<span class="zh">马上</span>', '<span class="zh">正在</span>'], a: 1, expl: "The blank opens the sentence — only a time NOUN can stand there. 刚才 behaves like 昨天; 刚 must hug a verb." },
        { q: '<span class="zh">医生说，这种药必须___吃，一天三次。</span>', choices: ['<span class="zh">及时</span>', '<span class="zh">准时</span>', '<span class="zh">按时</span>', '<span class="zh">提前</span>'], a: 2, expl: "A repeating prescribed schedule (一天三次) → 按时. 准时 needs one clock appointment; 及时 means 'before it's too late'." },
        { q: '<span class="zh">他约会从来不迟到也不早到，总是很___。</span>', choices: ['<span class="zh">准时</span>', '<span class="zh">按时</span>', '<span class="zh">及时</span>', '<span class="zh">提前</span>'], a: 0, expl: "很 + ___ needs a word that works as an adjective, and the meaning is 'punctual to the minute' → 准时. 按时 is adverb-only — 很按时 is ungrammatical." },
        { q: '<span class="zh">我___坐下，老师就叫我回答问题。</span>', choices: ['<span class="zh">刚才</span>', '<span class="zh">刚</span>', '<span class="zh">后来</span>', '<span class="zh">总是</span>'], a: 1, expl: "刚…就 = 'no sooner had I… than…'. 刚 glues to the verb; 刚才 can't join this pattern." },
        { q: '<span class="zh">她___没看过大海，这次去青岛特别兴奋。</span>', choices: ['<span class="zh">一直</span>', '<span class="zh">从来</span>', '<span class="zh">往往</span>', '<span class="zh">刚刚</span>'], a: 1, expl: "Zero lifetime experience → 从来没…过. 一直没看过 is possible but stresses a waiting period; the classic frame with 过 + excitement-at-first-time is 从来." },
        { q: '<span class="zh">先复习今天的课文，___做明天的预习。</span>', choices: ['<span class="zh">后来</span>', '<span class="zh">然后</span>', '<span class="zh">刚才</span>', '<span class="zh">及时</span>'], a: 1, expl: "Instructions about what to do next = pure sequence → 然后. 后来 only narrates the past — the eternal English-speaker trap." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — one time-bug each",
      short: "Error clinic",
      intro: "Every patient confused two neighbors from this page. Find the swap before revealing.",
      items: [
        { wrong: "我刚才来北京三天。", right: "我刚来北京三天。", py: "Wǒ gāng lái Běijīng sān tiān.", en: "I've only been in Beijing for three days.", expl: "A duration after the verb (来…三天) is 刚's exclusive right. 刚才 is a time noun — 'three days' cannot fit into 'a moment ago'." },
        { wrong: "他刚没听见你说的话。", right: "他刚才没听见你说的话。", py: "Tā gāngcái méi tīngjiàn nǐ shuō de huà.", en: "He didn't hear what you said just now.", expl: "Negation can follow the time noun 刚才, never the adverb 刚 — 刚 must touch an affirmative verb." },
        { wrong: "明天我们先去参观博物馆，后来去吃北京烤鸭。", right: "明天我们先去参观博物馆，然后去吃北京烤鸭。", py: "Míngtiān wǒmen xiān qù cānguān bówùguǎn, ránhòu qù chī Běijīng kǎoyā.", en: "Tomorrow we'll visit the museum first, then go eat Peking duck.", expl: "明天 = plan → 然后. 后来 lives exclusively inside past stories." },
        { wrong: "幸亏医生来得很按时，奶奶没有大问题。", right: "幸亏医生来得很及时，奶奶没有大问题。", py: "Xìngkuī yīshēng lái de hěn jíshí, nǎinai méiyǒu dà wèntí.", en: "Luckily the doctor arrived in time, so Grandma is fine.", expl: "The doctor didn't follow a timetable — he arrived before it was too late → 及时. Bonus rule: 按时 can never take 很/得很, because it's adverb-only." },
        { wrong: "我从来吃过这么好吃的饺子。", right: "我从来没吃过这么好吃的饺子。", py: "Wǒ cónglái méi chī guo zhème hǎochī de jiǎozi.", en: "I've never had dumplings this good.", expl: "从来 demands negation: 从来没…过 (no experience) or 从来不 (standing refusal). Positive 从来 doesn't exist at HSK level." },
        { wrong: "雨总是下了三天三夜。", right: "雨一直下了三天三夜。", py: "Yǔ yìzhí xià le sān tiān sān yè.", en: "It rained non-stop for three days and three nights.", expl: "One unbroken stretch of raining = 一直. 总是 counts repeated occasions ('it always rains when…'), which clashes with a single three-day event." },
        { wrong: "火车八点快要开了，你怎么还不出门？", right: "火车八点就要开了，你怎么还不出门？", py: "Huǒchē bā diǎn jiù yào kāi le, nǐ zěnme hái bù chūmén?", en: "The train leaves at eight — why haven't you left yet?", expl: "A stated clock time (八点) is incompatible with 快(要)…了. Only 就要…了 accepts a time word in front." },
        { wrong: "我往往去那家咖啡馆学习。", right: "我常常去那家咖啡馆学习。", py: "Wǒ chángcháng qù nà jiā kāfēiguǎn xuéxí.", en: "I often go study at that café.", expl: "往往 summarizes an observed objective pattern with a condition attached; a plain personal habit takes 常常/经常. Preview of the Confusables topic." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — schedule the tiles",
      short: "Builder",
      intro: "Arrange each sentence. Watch where the adverb sits: time nouns roam, adverbs hug the verb.",
      items: [
        { tiles: ["请", "大家", "明天", "八点", "准时", "到"], py: "Qǐng dàjiā míngtiān bā diǎn zhǔnshí dào.", en: "Everyone please arrive punctually at eight tomorrow.", hint: "Clock time first, then 准时 right before the verb." },
        { tiles: ["爷爷", "每天", "都", "按时", "吃药"], py: "Yéye měitiān dōu ànshí chī yào.", en: "Grandpa takes his medicine on schedule every day.", hint: "每天 + 都, then the manner adverb 按时 + verb." },
        { tiles: ["我们", "最好", "提前", "半个小时", "出发"], py: "Wǒmen zuìhǎo tíqián bàn gè xiǎoshí chūfā.", en: "We'd better set off half an hour early.", hint: "提前 + amount + verb." },
        { tiles: ["她", "从来", "没", "坐过", "飞机"], py: "Tā cónglái méi zuò guo fēijī.", en: "She has never been on a plane.", hint: "从来 + 没 + V过 — the no-experience chain." },
        { tiles: ["他", "刚", "来", "中国", "一个星期"], py: "Tā gāng lái Zhōngguó yí gè xīngqī.", en: "He's only been in China for a week.", hint: "刚 + verb + duration — the thing 刚才 can never do." },
        { tiles: ["听到", "这个", "好消息", "他", "立刻", "跳了起来"], py: "Tīngdào zhège hǎo xiāoxi, tā lìkè tiào le qǐlái.", en: "Hearing the good news, he immediately jumped up.", hint: "Trigger first, then subject + 立刻 + reaction." },
        { tiles: ["昨天的", "雨", "一直", "下到", "半夜"], py: "Zuótiān de yǔ yìzhí xià dào bànyè.", en: "Yesterday's rain kept falling until midnight.", hint: "一直 draws the unbroken line right before the verb." },
        { tiles: ["飞机", "十点半", "就要", "起飞", "了"], py: "Fēijī shí diǎn bàn jiù yào qǐfēi le.", en: "The plane takes off at ten thirty.", hint: "Time word + 就要 + V + 了 — the frame 快 can't copy." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 及时 ≠ 来得及</h3>
<p>Don't confuse adjective/adverb <span class="zh">及时</span> (“in time”) with the verb phrases <span class="zh">来得及 / 来不及</span> (“there's (no) time to make it”): <span class="zh">现在出发还<b class="hl">来得及</b>。</span> Same characters, different machine — 来得及 is a potential complement (see that topic).</p>
<h3>2 · 提前 can move events, not just people</h3>
<p><span class="zh">会议<b class="hl">提前</b>到星期四了。</span> — “The meeting was moved up to Thursday.” 提前到 + new time = reschedule earlier. Its mirror is 推迟 (postpone): <span class="zh">比赛<b class="hl">推迟</b>到下周了。</span></p>
<h3>3 · 刚 works inside past-in-past</h3>
<p><span class="zh">我去年<b class="hl">刚</b>到中国的时候，一句汉语都不会说。</span> — “when I had JUST arrived last year”. 刚 counts from any story-time; 刚才 only counts from the real now. This is a top-3 reading-section discriminator.</p>
<h3>4 · 一直 + negation = stubborn absence</h3>
<p><span class="zh">他<b class="hl">一直</b>没回我的短信。</span> — “he STILL hasn't answered my text (the whole time)”. Compare <span class="zh">从来没回过</span> (never once, ever) — 一直没 measures one specific stretch, 从来没 measures a lifetime.</p>
<h3>5 · 马上 loves 就…了 packaging</h3>
<p><span class="zh"><b class="hl">马上就</b>要放假<b class="hl">了</b>。</span> — 马上 + 就要…了 stack happily. In word-order tasks, assemble as: subject/time + 马上 + 就(要) + verb + 了.</p>
<h3>6 · 一直 also does directions</h3>
<p><span class="zh"><b class="hl">一直</b>往前走，到红绿灯右转。</span> — “keep going straight ahead”. Same 'unbroken line' idea, applied to space. Free bonus point in listening's direction dialogues.</p>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve items mixing all five clusters — exactly how the real exam interleaves them. Aim for 10+.",
      items: [
        { q: '<span class="zh">___的会议上，经理说了一件很重要的事。</span>', choices: ['<span class="zh">刚</span>', '<span class="zh">刚才</span>', '<span class="zh">马上</span>', '<span class="zh">及时</span>'], a: 1, expl: "___ + 的 + noun: only a noun can own things with 的 → 刚才的会议. 刚 is an adverb and can't touch 的." },
        { q: '<span class="zh">他去年这个时候___大学毕业，还没找到工作。</span>', choices: ['<span class="zh">刚才</span>', '<span class="zh">刚</span>', '<span class="zh">正好</span>', '<span class="zh">按时</span>'], a: 1, expl: "'Had just graduated' relative to LAST YEAR → 刚, the relative anchor. 刚才 only means 'minutes before now'." },
        { q: '<span class="zh">你来得真___，我们正说到你呢。</span>', choices: ['<span class="zh">及时</span>', '<span class="zh">准时</span>', '<span class="zh">正好</span>', '<span class="zh">马上</span>'], a: 2, expl: "A happy coincidence, not a rescue and not an appointment → 来得正好. 及时 would imply you averted some disaster; 准时 needs an agreed time." },
        { q: '<span class="zh">要想病好得快，就得___吃药、按时休息。</span>', choices: ['<span class="zh">按时</span>', '<span class="zh">及时</span>', '<span class="zh">提前</span>', '<span class="zh">立刻</span>'], a: 0, expl: "Following the prescription's schedule → 按时吃药, the fixed collocation (mirrored by 按时休息 right after)." },
        { q: '<span class="zh">多亏你___把这个消息告诉了我，要不然就麻烦了。</span>', choices: ['<span class="zh">准时</span>', '<span class="zh">及时</span>', '<span class="zh">往往</span>', '<span class="zh">从来</span>'], a: 1, expl: "多亏 + 要不然 = disaster narrowly avoided → 及时, 'just in the nick of time'. No schedule anywhere in sight." },
        { q: '<span class="zh">路上可能堵车，我们___一点儿出发吧。</span>', choices: ['<span class="zh">提前</span>', '<span class="zh">及时</span>', '<span class="zh">准时</span>', '<span class="zh">立刻</span>'], a: 0, expl: "Leave EARLIER than planned to beat traffic → 提前. 立刻 means 'this instant', which isn't about beating a schedule." },
        { q: '<span class="zh">火车五分钟后___出发了，他怎么还没到？</span>', choices: ['<span class="zh">快</span>', '<span class="zh">就要</span>', '<span class="zh">刚刚</span>', '<span class="zh">总是</span>'], a: 1, expl: "五分钟后 is a stated time → 就要…了. 快…了 would be fine only without the time phrase — the exam's favourite fine print." },
        { q: '<span class="zh">他___不吃早饭，医生说这样对身体不好。</span>', choices: ['<span class="zh">从来</span>', '<span class="zh">一直</span>', '<span class="zh">正好</span>', '<span class="zh">提前</span>'], a: 0, expl: "A standing lifelong habit of NOT doing something → 从来不 + V. 一直不吃早饭 would describe one particular stretch, and the doctor is criticizing a policy." },
        { q: '<span class="zh">我们先去酒店放行李，___去逛街，怎么样？</span>', choices: ['<span class="zh">后来</span>', '<span class="zh">然后</span>', '<span class="zh">刚才</span>', '<span class="zh">往往</span>'], a: 1, expl: "A plan (怎么样? invites agreement) → 然后. 后来 cannot organize the future, no matter how naturally English 'later' fits." },
        { q: '<span class="zh">他们俩以前关系很好，___不知道为什么不说话了。</span>', choices: ['<span class="zh">然后</span>', '<span class="zh">后来</span>', '<span class="zh">马上</span>', '<span class="zh">按时</span>'], a: 1, expl: "Past story, time gap, things changed → 后来. 然后 would make it a mechanical step-two, but this is narrative drift." },
        { q: '<span class="zh">秋天的北京___天气很好，不冷也不热。</span>', choices: ['<span class="zh">往往</span>', '<span class="zh">一直</span>', '<span class="zh">从来</span>', '<span class="zh">立刻</span>'], a: 0, expl: "An observed tendency tied to a condition (秋天的北京) → 往往. 一直 would claim unbroken perfection; 从来 needs negation." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">我刚才看了一个很有意思的电影。</span>', '<span class="zh">他刚走，你快给他打电话吧。</span>', '<span class="zh">我刚才来中国两个月。</span>', '<span class="zh">刚才的电话是谁打的？</span>'], a: 2, expl: "刚才 + duration (两个月) is impossible — 'a moment ago' can't contain two months. Only 刚 takes a following duration: 我刚来中国两个月." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">时间副词 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Cluster</th><th>Rule of thumb</th></tr>
<tr><td class="zh">刚 vs 刚才</td><td><b>刚 hugs the verb</b> (刚来三天 · 刚…就 · 去年刚毕业) — <b>刚才 acts like 昨天</b> (starts sentences · 刚才没听见 · 刚才的事)</td></tr>
<tr><td class="zh">及时·准时·按时</td><td>及时 = before it's too late (also adj: 很及时) · 准时 = on the dot (needs a clock) · 按时 = per schedule, repeatedly (adverb only, ✗很按时)</td></tr>
<tr><td class="zh">提前</td><td>ahead of schedule: 提前(+amount)+V · reschedule: 提前到星期四 (mirror: 推迟)</td></tr>
<tr><td class="zh">马上/立刻</td><td>immediately; 马上 casual & stretchy, 立刻 crisp & formal; both love 就…了</td></tr>
<tr><td class="zh">就要…了 vs 快…了</td><td>time word allowed ONLY with 就要…了: 八点就要开了 ✓ · ✗八点快开了</td></tr>
<tr><td class="zh">从来</td><td>negation required: 从来不V (policy) · 从来没V过 (no experience) · ✗从来+positive</td></tr>
<tr><td class="zh">一直·总是·往往</td><td>一直 = unbroken line (also 一直往前走) · 总是 = every time, habit · 往往 = observed tendency + condition, no plans/futures</td></tr>
<tr><td class="zh">后来 vs 然后</td><td>后来 = later on, PAST stories only · 然后 = and then, any tense, plans & instructions</td></tr>
</table></div>`
    }
  ]
});
