/* HSK 4 Grammar Lab — 介词 (prepositions & coverbs) */
registerPage({
  id: "prepositions",
  zh: "**介词**",
  title: "Prepositions & coverbs — the little words before the verb",
  subtitle: "HSK 3 gave you 在, 给, 跟, 离. HSK 4 doubles the toolbox: 随着, 通过/经过, 由, 对/对于/关于, 按照/根据, 以…为, 为了/为 — plus the three faces of 除了…以外. One law rules them all: the prepositional phrase stands BEFORE the verb.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: preposition phrases live <b class="hl">before</b> the verb',
      short: "Big idea",
      html: `
<p>Chinese prepositions are “coverbs” — most of them started life as verbs (<span class="zh">在</span> to be at, <span class="zh">给</span> to give, <span class="zh">到</span> to arrive). They still behave like a first mini-verb in the sentence: <b>preposition + noun forms a block, and the block parks in front of the main verb</b>.</p>
<div class="pattern">Subj + 时间 + <span class="slot">Prep + Noun</span> + Verb + …<small>我 昨天 [在图书馆] 学习了 四个小时。 — the [prep+noun] block hugs the verb from the LEFT.</small></div>
<p>This kills the single most common English-speaker sentence in existence:</p>
<p class="zh" style="font-size:1.2rem">✗ 我学中文<b class="hl">在北京</b>。 &nbsp;→&nbsp; ✓ 我<b class="hl">在北京</b>学中文。</p>
<div class="callout cmp"><span class="co-title">🇩🇪 German subordinate clauses already trained you</span>
English says “I study Chinese <i>in Beijing</i>” — place last. But German <i>„…weil ich <b>in Peking</b> Chinesisch lerne“</i> puts the place phrase before the verb — exactly the Chinese order. When building a Chinese sentence, think Nebensatz, not English main clause. Spanish is with English here (<i>estudio chino en Pekín</i>) — resist it.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The Writing section hands you a prepositional block as ONE tile (在图书馆 / 随着…的发展 / 按照要求) and checks whether you park it left of the verb. The Reading section swaps near-twin prepositions (对/对于, 通过/经过, 按照/根据). This page covers both attacks.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "examples",
      title: "Model sentences — the toolbox in action",
      short: "Examples",
      intro: "Tap 🔊 to listen. In every sentence, locate the [prep + noun] block and confirm: it stands before the verb.",
      items: [
        { tag: "在", cn: "我**在北京**学了两年中文。", py: "Wǒ zài Běijīng xué le liǎng nián Zhōngwén.", en: "I studied Chinese in Beijing for two years.", note: "The law in its simplest form: [在北京] before 学." },
        { tag: "随着", cn: "**随着**经济的发展，城市里的车越来越多了。", py: "Suízhe jīngjì de fāzhǎn, chéngshì li de chē yuèláiyuè duō le.", en: "With the development of the economy, there are more and more cars in the cities.", note: "随着 + a CHANGING thing, clause-initial; 越来越 answers it in clause two." },
        { tag: "通过", cn: "**通过**朋友的介绍，我找到了现在的工作。", py: "Tōngguò péngyou de jièshào, wǒ zhǎodào le xiànzài de gōngzuò.", en: "Through a friend's introduction, I found my current job.", note: "通过 = by means of — the introduction is the tool." },
        { tag: "经过", cn: "**经过**两年的努力，他终于**通过**了HSK四级考试。", py: "Jīngguò liǎng nián de nǔlì, tā zhōngyú tōngguò le HSK sì jí kǎoshì.", en: "After two years of hard work, he finally passed the HSK 4 exam.", note: "经过 + a process you went THROUGH; and 通过 here is a full verb: 'to pass'." },
        { tag: "由", cn: "这次活动**由**学生会负责安排。", py: "Zhè cì huódòng yóu xuéshēnghuì fùzé ānpái.", en: "The student union is in charge of organizing this event.", note: "由 assigns the job formally — no suffering, no drama, just responsibility." },
        { tag: "对", cn: "王老师**对**每个学生都很热情。", py: "Wáng lǎoshī duì měi ge xuésheng dōu hěn rèqíng.", en: "Teacher Wang is warm toward every student.", note: "对 + person + attitude — people and feelings take 对, not 对于." },
        { tag: "关于", cn: "**关于**这个问题，我们明天再讨论吧。", py: "Guānyú zhège wèntí, wǒmen míngtiān zài tǎolùn ba.", en: "As for this question, let's discuss it tomorrow.", note: "关于 introduces the topic and stands before the subject." },
        { tag: "按照", cn: "**按照**医生的要求，他每天散步半个小时。", py: "Ànzhào yīshēng de yāoqiú, tā měi tiān sànbù bàn ge xiǎoshí.", en: "Following the doctor's instructions, he walks for half an hour every day.", note: "按照 + rules/requirements — you follow them like a recipe." },
        { tag: "为了", cn: "**为了**不迟到，我提前一个小时就出门了。", py: "Wèile bù chídào, wǒ tíqián yí ge xiǎoshí jiù chūmén le.", en: "In order not to be late, I left home an hour early.", note: "为了 + purpose, fronted before the whole clause." },
        { tag: "除了", cn: "**除了**小王**以外**，我们都参加了昨天的会议。", py: "Chúle Xiǎo Wáng yǐwài, wǒmen dōu cānjiā le zuótiān de huìyì.", en: "Everyone except Xiao Wang attended yesterday's meeting.", note: "除了…以外 + 都 = exclusion. The three logics get their own section below." },
        { tag: "随着", cn: "**随着**城市的扩大，市区里的老房子越来越少了。", py: "Suízhe chéngshì de kuòdà, shìqū li de lǎo fángzi yuèláiyuè shǎo le.", en: "As the city expands, there are fewer and fewer old houses downtown.", note: "随着 + a change-noun: 扩大 works just like 发展/提高. The second clause answers with 越来越." },
        { tag: "通过", cn: "**通过**这个网址，你可以查看比赛的结果。", py: "Tōngguò zhège wǎngzhǐ, nǐ kěyǐ chákàn bǐsài de jiéguǒ.", en: "You can check the competition results via this link.", note: "The web address is a TOOL you use → 通过. 经过网址 would mean walking past it." },
        { tag: "为了", cn: "**为了**积累工作经验，他周末去叔叔的公司帮忙。", py: "Wèile jīlěi gōngzuò jīngyàn, tā zhōumò qù shūshu de gōngsī bāngmáng.", en: "To build up work experience, he helps out at his uncle's company on weekends.", note: "为了 + goal-ACTION, fronted before the whole clause. The goal here is 积累经验, not a person." },
        { tag: "对…来说", cn: "**对**儿童**来说**，养成早睡早起的习惯很关键。", py: "Duì értóng lái shuō, yǎngchéng zǎo shuì zǎo qǐ de xíguàn hěn guānjiàn.", en: "For children, developing the habit of going to bed and getting up early is crucial.", note: "对…来说 — the lighter 'for X' frame, fine for people. 对于…来说 is its formal twin." },
        { tag: "按照", cn: "**按照**新的时间表，我们每天早上八点开始上课。", py: "Ànzhào xīn de shíjiānbiǎo, wǒmen měi tiān zǎoshang bā diǎn kāishǐ shàngkè.", en: "Under the new timetable, classes start at eight every morning.", note: "A timetable is a plan you carry out day by day → 按照, not evidence you infer from (根据)." },
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "tabs",
      title: "The HSK 4 six-pack — one tab per family",
      short: "Six-pack",
      intro: "Each tab is one exam battlefield: what it means, what it combines with, and where learners crash.",
      tabs: [
        {
          label: "随着",
          html: `<p><span class="zh">随着</span> = “along with (a change)”. It opens the sentence, takes a <b>noun of change</b> — usually <span class="zh">…的发展 / 提高 / 增长 / 变化</span> — and the main clause reports what shifts as a result, typically with <span class="pill">越来越</span>.</p>
<div class="pattern"><span class="slot">随着</span> + X 的 发展/提高/变化，… 越来越 …<small>随着 wants a process, not a bare thing: ✗随着经济 → ✓随着经济的发展</small></div>`,
          examples: [
            { cn: "**随着**年龄的增长，人的记忆力会慢慢变差。", py: "Suízhe niánlíng de zēngzhǎng, rén de jìyìlì huì mànmàn biàn chà.", en: "As people age, their memory slowly gets worse.", note: "记忆力 = memory (HSK5 word, worth knowing for Reading)." },
            { cn: "**随着**天气变暖，来公园锻炼的人**越来越**多。", py: "Suízhe tiānqì biàn nuǎn, lái gōngyuán duànliàn de rén yuèláiyuè duō.", en: "As the weather warms up, more and more people come to exercise in the park.", note: "随着 sets the moving background; 越来越 rides it." }
          ]
        },
        {
          label: "通过 vs 经过",
          html: `<p>Both translate as “through” — the exam's favourite twin pair.</p>
<ul>
<li><span class="zh hl">通过</span> = <b>by means of</b>: a tool, method, medium or person you USE. <span class="zh">通过努力 / 通过网络 / 通过朋友</span>. Also a verb: <span class="zh">通过考试</span> “pass the exam”.</li>
<li><span class="zh hl">经过</span> = <b>passing through</b> a process, period or place — you EXPERIENCE it end to end. <span class="zh">经过讨论 / 经过两年的努力 / 火车经过南京</span>. Also a verb (“pass by”) and even a noun (“the course of events”: 事情的经过).</li>
</ul>
<p>Test: can you swap in English “by using X”? → 通过. “After going through X”? → 经过.</p>`,
          examples: [
            { cn: "我是**通过**手机软件学发音的。", py: "Wǒ shì tōngguò shǒujī ruǎnjiàn xué fāyīn de.", en: "I learned pronunciation by means of a phone app.", note: "The app is a tool → 通过. 软件 = software/app." },
            { cn: "**经过**认真的讨论，我们决定下个月出发。", py: "Jīngguò rènzhēn de tǎolùn, wǒmen juédìng xià ge yuè chūfā.", en: "After careful discussion, we decided to set off next month.", note: "The discussion is a process lived through → 经过." },
            { cn: "去杭州的火车会**经过**上海。", py: "Qù Hángzhōu de huǒchē huì jīngguò Shànghǎi.", en: "The train to Hangzhou passes through Shanghai.", note: "Physical passing → only 经过 works. ✗通过上海." }
          ]
        },
        {
          label: "由 vs 被",
          html: `<p>Both put a do-er after them — but they run different businesses:</p>
<ul>
<li><span class="zh hl">由</span> = formal <b>assignment</b>: “it falls to X to do it”. <span class="zh">这件事<b class="hl">由</b>他负责。</span> Nothing bad happened; a task is being distributed. Also “made of/composed of”: <span class="zh">这本书<b class="hl">由</b>十二个故事组成。</span></li>
<li><span class="zh hl">被</span> = true <b>passive</b>: something happened TO the subject, often unpleasantly. <span class="zh">车<b class="hl">被</b>拖走了。</span> (Full story in the passives topic.)</li>
</ul>
<p>Test: is the sentence about <b>who's in charge</b> (由) or about <b>what happened to something</b> (被)? Meeting agendas take 由; broken windows take 被.</p>`,
          examples: [
            { cn: "今天的晚饭**由**我来做，你们休息！", py: "Jīntiān de wǎnfàn yóu wǒ lái zuò, nǐmen xiūxi!", en: "I'll make dinner tonight — you all rest!", note: "Volunteering for a duty → 由. 被我做 would sound like the dinner is a victim." },
            { cn: "代表团**由**二十名学生组成。", py: "Dàibiǎotuán yóu èrshí míng xuésheng zǔchéng.", en: "The delegation is made up of twenty students.", note: "由…组成 'composed of' — a fixed formal frame. 代表团 = delegation (HSK5, glossed)." }
          ]
        },
        {
          label: "对·对于·关于",
          html: `<p>Three ways to aim a sentence at something:</p>
<ul>
<li><span class="zh hl">对</span> — <b>toward people & attitudes</b>: <span class="zh">对我很好、对身体有好处、对历史感兴趣</span>. The everyday all-rounder.</li>
<li><span class="zh hl">对于</span> — <b>toward topics</b>, more formal/written: <span class="zh">对于这个计划，大家意见不同。</span> Learn the frame <span class="zh"><b class="hl">对于</b>…来说</span> “as far as X is concerned”. Position tip: 对于-phrases stand at the front (or right after the subject) — don't bury them after adverbs or modals (✗<span class="zh">我会对于…</span>).</li>
<li><span class="zh hl">关于</span> — <b>“about/concerning”</b>: introduces subject matter, always clause-initial, and it can title things: <span class="zh">一本<b class="hl">关于</b>中国历史的书、《<b class="hl">关于</b>报名的通知》</span>.</li>
</ul>
<p>Quick filter: person or attitude → 对; formal “regarding this topic” → 对于; “about (contents)” → 关于.</p>`,
          examples: [
            { cn: "他**对**中国文化很感兴趣。", py: "Tā duì Zhōngguó wénhuà hěn gǎn xìngqù.", en: "He is very interested in Chinese culture.", note: "感兴趣 always pairs with 对 — never 关于." },
            { cn: "**对于**刚来的留学生**来说**，点菜是个大问题。", py: "Duìyú gāng lái de liúxuéshēng lái shuō, diǎn cài shì ge dà wèntí.", en: "For newly arrived international students, ordering food is a big problem.", note: "对于…来说 — the ready-made 'for X' frame." },
            { cn: "**关于**长城，有很多有趣的故事。", py: "Guānyú Chángchéng, yǒu hěn duō yǒuqù de gùshi.", en: "There are many interesting stories about the Great Wall.", note: "关于 hands you the topic before the sentence even starts." }
          ]
        },
        {
          label: "按照 vs 根据",
          html: `<p>Both mean “according to” — different sources:</p>
<ul>
<li><span class="zh hl">按照</span> = <b>following rules, plans, requirements</b> — things you obey step by step: <span class="zh">按照规定 / 按照计划 / 按照顺序 / 按照老师的要求</span>.</li>
<li><span class="zh hl">根据</span> = <b>based on evidence or information</b> — things you draw conclusions from: <span class="zh">根据天气预报 / 根据调查 / 根据我的经验</span>.</li>
</ul>
<p>Test: do you EXECUTE it (按照) or INFER from it (根据)? A recipe is 按照; a weather forecast is 根据.</p>`,
          examples: [
            { cn: "请大家**按照**号码顺序排队上车。", py: "Qǐng dàjiā ànzhào hàomǎ shùnxù páiduì shàng chē.", en: "Please line up and board in number order.", note: "An order to follow → 按照." },
            { cn: "**根据**调查，大部分学生每天用手机学习。", py: "Gēnjù diàochá, dà bùfen xuésheng měi tiān yòng shǒujī xuéxí.", en: "According to the survey, most students study on their phones every day.", note: "Evidence for a claim → 根据." }
          ]
        },
        {
          label: "以…为 & 为(了)",
          html: `<p>The 为-family — watch the tones: <span class="zh">为</span> is <i>wéi</i> (2nd) in 以…为, but <i>wèi</i> (4th) as “for”.</p>
<ul>
<li><span class="zh hl">以 X 为 Y</span> = “take X as Y” — formal but on the HSK 4 list: <span class="zh">以健康<b class="hl">为</b>主</span> “put health first”, <span class="zh">以北京<b class="hl">为</b>例</span> “taking Beijing as an example”.</li>
<li><span class="zh hl">为了</span> + purpose, fronted: <span class="zh"><b class="hl">为了</b>提高听力，他每天听中文广播。</span> The goal is an ACTION you aim at.</li>
<li><span class="zh hl">为</span> + beneficiary/cause: <span class="zh"><b class="hl">为</b>大家服务</span> “serve everyone”, <span class="zh"><b class="hl">为</b>你感到高兴</span> “happy for you”, <span class="zh">为…担心</span>. The target is a PERSON or thing you act for.</li>
</ul>
<p class="zh" style="font-size:1.1rem">✗ 为了你感到高兴 → ✓ <b class="hl">为</b>你感到高兴<small> — feelings for someone take 为, not 为了.</small></p>`,
          examples: [
            { cn: "我们家吃饭**以**清淡**为**主。", py: "Wǒmen jiā chīfàn yǐ qīngdàn wéi zhǔ.", en: "At home we mainly eat light food.", note: "以…为主 = 'mainly X'. 清淡 = light/mild (HSK5, glossed)." },
            { cn: "**为了**提高口语，他每天跟中国朋友聊天。", py: "Wèile tígāo kǒuyǔ, tā měi tiān gēn Zhōngguó péngyou liáotiān.", en: "To improve his spoken Chinese, he chats with Chinese friends every day.", note: "Purpose clause fronted with 为了." },
            { cn: "听说你通过了考试，我们都**为**你高兴！", py: "Tīngshuō nǐ tōngguò le kǎoshì, wǒmen dōu wèi nǐ gāoxìng!", en: "We heard you passed the exam — we're all happy for you!", note: "Feeling FOR a person → 为 + person + emotion." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: '除了…以外 — one frame, three logics',
      short: "除了 3 logics",
      html: `
<p><span class="zh">除了 X 以外</span> literally means “setting X aside”. What happens next decides everything — the second half's little adverb flips the meaning completely:</p>
<h3>1 · + 都 → EXCLUSION (“except for X”)</h3>
<div class="pattern">除了 X（以外），… <span class="slot">都</span> …<small>X is OUT, everyone else is in.</small></div>
<p class="zh" style="font-size:1.1rem">除了小李以外，我们<b class="hl">都</b>去过长城。<br><small>Everyone except Xiao Li has been to the Great Wall — Xiao Li has NOT.</small></p>
<h3>2 · + 还/也 → ADDITION (“besides X, also…”)</h3>
<div class="pattern">除了 X（以外），… <span class="slot">还/也</span> …<small>X is IN, and there's more on top.</small></div>
<p class="zh" style="font-size:1.1rem">除了汉语以外，她<b class="hl">还</b>会说法语和西班牙语。<br><small>She speaks Chinese AND ALSO French and Spanish — Chinese counts.</small></p>
<h3>3 · + 没有/只 → ONLY-EXCEPTION (“no one but X”)</h3>
<div class="pattern">除了 X（以外），<span class="slot">没有人/谁都不/只</span> …<small>X is the single case that survives.</small></div>
<p class="zh" style="font-size:1.1rem">除了你以外，<b class="hl">没有</b>人知道这个秘密。<br><small>Nobody knows the secret — except you.</small></p>
<div class="callout warn"><span class="co-title">⚠️ The meaning lives in the second half</span>
Learners stare at 除了 and guess; natives scan for 都/还/只. On the exam, cover 除了 with your thumb and read the second clause first — 都 kicks X out, 还/也 keeps X in, 没有/只 makes X the sole survivor. Also: 以外 is droppable (除了他，都来了), and 之外/外 are formal variants.</div>
<div class="callout cmp"><span class="co-title">🇬🇧 English makes the same split — with different words</span>
“<b>Except for</b> Xiao Li, we all went” (exclusion) vs “<b>Besides</b> Chinese, she also speaks French” (addition). English changes the preposition; Chinese keeps 除了 and changes the adverb. Map except→都, besides→还/也 and you'll never mistranslate again.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: "Quick-reference: the whole toolbox",
      short: "Reference",
      intro: "Every HSK 4 preposition on this page, its logic, and a minimal anchor phrase.",
      head: ["Prep", "Logic", "Anchor phrase"],
      rows: [
        ['<span class="zh">随着</span> <span class="py-hint">suízhe</span>', 'along with a change → 越来越', '<span class="zh">随着…的发展</span>'],
        ['<span class="zh">通过</span> <span class="py-hint">tōngguò</span>', 'by means of (tool/method/person)', '<span class="zh">通过朋友的介绍</span>'],
        ['<span class="zh">经过</span> <span class="py-hint">jīngguò</span>', 'through a process/place, “after”', '<span class="zh">经过两年的努力</span>'],
        ['<span class="zh">由</span> <span class="py-hint">yóu</span>', 'assigned to; composed of', '<span class="zh">由他负责 · 由…组成</span>'],
        ['<span class="zh">对</span> <span class="py-hint">duì</span>', 'toward people/attitudes', '<span class="zh">对我很好 · 对…感兴趣</span>'],
        ['<span class="zh">对于</span> <span class="py-hint">duìyú</span>', 'regarding a topic (formal)', '<span class="zh">对于…来说</span>'],
        ['<span class="zh">关于</span> <span class="py-hint">guānyú</span>', 'about/concerning; can title things', '<span class="zh">关于中国历史的书</span>'],
        ['<span class="zh">按照</span> <span class="py-hint">ànzhào</span>', 'following rules/plans', '<span class="zh">按照规定/要求</span>'],
        ['<span class="zh">根据</span> <span class="py-hint">gēnjù</span>', 'based on evidence/info', '<span class="zh">根据天气预报</span>'],
        ['<span class="zh">以…为</span> <span class="py-hint">yǐ…wéi</span>', 'take X as Y (formal)', '<span class="zh">以健康为主</span>'],
        ['<span class="zh">为了</span> <span class="py-hint">wèile</span>', 'purpose, fronted', '<span class="zh">为了不迟到</span>'],
        ['<span class="zh">为</span> <span class="py-hint">wèi</span>', 'for sb\'s benefit; emotion for', '<span class="zh">为大家服务 · 为你高兴</span>'],
        ['<span class="zh">除了…以外</span> <span class="py-hint">chúle…yǐwài</span>', '都=except · 还/也=besides · 只/没有=only', '<span class="zh">除了他，都/还/没有人…</span>']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — six quick aims",
      short: "Checkpoint",
      intro: "One question per battlefield. Miss one? Revisit its tab before the final drill.",
      items: [
        { q: '“I studied Chinese in Beijing.” Which is correct?', choices: ['<span class="zh">我学了两年中文在北京。</span>', '<span class="zh">我在北京学了两年中文。</span>', '<span class="zh">在北京我学了两年中文在。</span>', '<span class="zh">我学在北京了两年中文。</span>'], a: 1, expl: "The [在 + place] block parks BEFORE the verb. Putting it after (✗学了两年中文在北京) is the eternal English-order error." },
        { q: '<span class="zh">___生活水平的提高，出国旅游的人越来越多。</span>', choices: ['<span class="zh">随着</span>', '<span class="zh">按照</span>', '<span class="zh">通过</span>', '<span class="zh">关于</span>'], a: 0, expl: "A changing background (生活水平的提高) + 越来越 in clause two — the signature 随着 frame." },
        { q: '<span class="zh">我___中国历史很感兴趣。</span>', choices: ['<span class="zh">对</span>', '<span class="zh">关于</span>', '<span class="zh">由</span>', '<span class="zh">为了</span>'], a: 0, expl: "感兴趣 wires to 对: 对…感兴趣. 关于 introduces topics but never feeds 感兴趣." },
        { q: '<span class="zh">除了小王以外，我们___去过上海。</span> Who has been to Shanghai?', choices: ["Everyone including Xiao Wang — blank is 也", "Everyone but Xiao Wang — blank is 都", "Only Xiao Wang — blank is 还", "Nobody — blank is 只"], a: 1, expl: "都 after 除了…以外 = exclusion: the group minus Xiao Wang. For addition you'd see 还/也 with a different meaning." },
        { q: '<span class="zh">这件事很重要，___王经理亲自负责。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">由</span>', '<span class="zh">对</span>', '<span class="zh">给</span>'], a: 1, expl: "Assigning responsibility → 由. 被 would cast poor Manager Wang as something that happened to the task." },
        { q: '<span class="zh">___天气预报，明天有大雨。</span>', choices: ['<span class="zh">按照</span>', '<span class="zh">根据</span>', '<span class="zh">经过</span>', '<span class="zh">随着</span>'], a: 1, expl: "A forecast is information you base a claim on → 根据. 按照 is for rules you carry out — you can't 'obey' a forecast." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — misplaced and mismatched",
      short: "Error clinic",
      intro: "Eight patients. Half have position disease, half picked the wrong twin. One bug each.",
      items: [
        { wrong: "我学中文在北京。", right: "我在北京学中文。", py: "Wǒ zài Běijīng xué Zhōngwén.", en: "I study Chinese in Beijing.", expl: "Prepositional phrases go BEFORE the verb. English order (place last) is the disease; the 在-block moves left of 学." },
        { wrong: "他对于我很好。", right: "他对我很好。", py: "Tā duì wǒ hěn hǎo.", en: "He is very good to me.", expl: "People and personal attitudes take 对. 对于 handles formal TOPICS (对于这个问题…), not warm feelings toward a person." },
        { wrong: "随着经济，人们的生活越来越好。", right: "随着经济的发展，人们的生活越来越好。", py: "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó yuèláiyuè hǎo.", en: "As the economy develops, people's lives get better and better.", expl: "随着 needs a noun of CHANGE, not a bare thing: …的发展/提高/变化 completes it." },
        { wrong: "晚会被学生会负责。", right: "晚会由学生会负责。", py: "Wǎnhuì yóu xuéshēnghuì fùzé.", en: "The student union is responsible for the party.", expl: "Assigning duty = 由. 被 implies the party suffered something — wrong business entirely." },
        { wrong: "为了大家服务是我们的工作。", right: "为大家服务是我们的工作。", py: "Wèi dàjiā fúwù shì wǒmen de gōngzuò.", en: "Serving everyone is our job.", expl: "Acting for someone's BENEFIT takes 为. 为了 introduces a goal-action (为了赚钱/为了健康), not a beneficiary." },
        { wrong: "除了游泳以外，我都喜欢跑步。", right: "除了游泳以外，我还喜欢跑步。", py: "Chúle yóuyǒng yǐwài, wǒ hái xǐhuan pǎobù.", en: "Besides swimming, I also like running.", expl: "Adding a second hobby → 还/也. 都 would need a plural set to sweep over — one person's 跑步 isn't it." },
        { wrong: "按照天气预报，明天会下雪。", right: "根据天气预报，明天会下雪。", py: "Gēnjù tiānqì yùbào, míngtiān huì xià xuě.", en: "According to the weather forecast, it will snow tomorrow.", expl: "You INFER from a forecast (根据); you don't execute it like a rule (按照). Evidence vs instructions." },
        { wrong: "我关于中国电影很感兴趣。", right: "我对中国电影很感兴趣。", py: "Wǒ duì Zhōngguó diànyǐng hěn gǎn xìngqù.", en: "I'm very interested in Chinese movies.", expl: "感兴趣 demands 对. 关于 only introduces topics or titles content (关于电影的书) — it can't serve as the verb's target-marker." },
        { wrong: "司机降低了车速在市区。", right: "司机在市区降低了车速。", py: "Sījī zài shìqū jiàngdī le chēsù.", en: "The driver slowed down in the city center.", expl: "Position disease: [在 + place] tells you WHERE the action happens, so it parks BEFORE 降低. Only result-destinations (放在桌上, 搬到楼上) may ride behind the verb — downtown is not where the speed ends up." },
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — park the block, then drive",
      short: "Builder",
      intro: "Each puzzle has one [prep + noun] block. Park it left of the verb and the rest falls into place.",
      items: [
        { tiles: ["我", "在北京", "学了", "两年", "中文"], py: "Wǒ zài Běijīng xué le liǎng nián Zhōngwén.", en: "I studied Chinese in Beijing for two years.", hint: "在-block before the verb; duration after it." },
        { tiles: ["随着", "天气", "的", "变化", "感冒的人", "越来越多"], py: "Suízhe tiānqì de biànhuà, gǎnmào de rén yuèláiyuè duō.", en: "With the change in weather, more and more people are catching colds.", hint: "随着 + noun-of-change first, 越来越 clause second." },
        { tiles: ["这次会议", "由", "王经理", "负责", "安排"], py: "Zhè cì huìyì yóu Wáng jīnglǐ fùzé ānpái.", en: "Manager Wang is in charge of arranging this meeting.", hint: "Topic first, then 由 + the responsible person + duty." },
        { tiles: ["除了", "面条", "以外", "我", "还", "点了", "一个汤"], py: "Chúle miàntiáo yǐwài, wǒ hái diǎn le yí ge tāng.", en: "Besides noodles, I also ordered a soup.", hint: "还 in the second half = addition logic." },
        { tiles: ["为了", "提高口语", "他", "每天", "跟中国朋友", "聊天"], py: "Wèile tígāo kǒuyǔ, tā měi tiān gēn Zhōngguó péngyou liáotiān.", en: "To improve his spoken Chinese, he chats with Chinese friends every day.", hint: "Purpose fronted; the 跟-block also parks before 聊天.", alt: [["他", "为了", "提高口语", "每天", "跟中国朋友", "聊天"]] },
        { tiles: ["请", "大家", "按照", "顺序", "上车"], py: "Qǐng dàjiā ànzhào shùnxù shàng chē.", en: "Everyone please board in order.", hint: "按照 + the rule, before the verb 上车." },
        { tiles: ["通过", "这次比赛", "我", "认识了", "很多朋友"], py: "Tōngguò zhè cì bǐsài, wǒ rènshi le hěn duō péngyou.", en: "Through this competition, I got to know many friends.", hint: "通过 + the means, fronted.", alt: [["我", "通过", "这次比赛", "认识了", "很多朋友"]] }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · The exceptions that go AFTER the verb</h3>
<p><span class="zh">在/到/给</span> can follow the verb when they mark the <b>result's destination</b>: <span class="zh">放<b class="hl">在</b>桌子上、搬<b class="hl">到</b>楼上、寄<b class="hl">给</b>他</span>. That's complement territory (see 把 and result-complements). Rule of thumb: before the verb = where the action happens; after the verb = where the thing ends up.</p>
<h3>2 · 给 swings both ways</h3>
<p><span class="zh"><b class="hl">给</b>他打电话</span> ＝ <span class="zh">打电话<b class="hl">给</b>他</span> — both fine. With transfer verbs (送/寄/递/卖/买), 给 + recipient can also follow the verb: <span class="zh">寄<b class="hl">给</b>他</span>, <span class="zh">买了一本书<b class="hl">给</b>他</span>. When in doubt, pre-verbal <span class="zh"><b class="hl">给</b>他</span> + verb is always the safe default: <span class="zh">给他买了一本书</span>.</p>
<h3>3 · 在…下 for abstract support</h3>
<p><span class="zh"><b class="hl">在</b>老师的帮助<b class="hl">下</b>，我通过了考试。</span> — “with the teacher's help”. Conditions and help take 在…下, not 用 or 通过…的帮助.</p>
<h3>4 · 对于…来说 vs 对…来说</h3>
<p>Both exist; 对…来说 is lighter and fine for people: <span class="zh">对我来说</span>. Just never sandwich 对于 after adverbs or modals: ✗<span class="zh">我很对于…</span> — 对于-phrases lead, they don't follow.</p>
<h3>5 · Two 为, two tones</h3>
<p><span class="zh">为</span> reads <b>wèi</b> in 为了/为大家服务, but <b>wéi</b> in <span class="zh">以…为主、成为、认为</span>. Listening comprehension flags this — hear <i>wéi</i>, think “be/as”, hear <i>wèi</i>, think “for”.</p>
<h3>6 · 通过 the verb ≠ 通过 the preposition</h3>
<p><span class="zh">他<b class="hl">通过</b>了考试</span> (verb, “passed”) vs <span class="zh"><b class="hl">通过</b>考试，他证明了自己</span> (preposition, “by passing the exam…”). Same characters, different jobs — check whether it carries 了 (verbs do, prepositions don't).</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Ordering task: any tile starting with 在/跟/给/对/按照/根据/随着/为了 is a pre-verb block — find the verb tile and park the block LEFT of it. Only 在/到/给 may ride behind the verb, and only when the sentence is about where something ends up.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions. The near-twins (对/对于, 通过/经过, 按照/根据, 由/被, 为/为了) are all in here — with their sneakiest disguises.",
      items: [
        { q: '<span class="zh">去杭州的火车会___上海，你可以在那儿下车。</span>', choices: ['<span class="zh">通过</span>', '<span class="zh">经过</span>', '<span class="zh">根据</span>', '<span class="zh">随着</span>'], a: 1, expl: "Physically passing a place → 经过. 通过 means using something as a means — trains don't 'use' Shanghai." },
        { q: '<span class="zh">我是___网站报的名。</span>', choices: ['<span class="zh">经过</span>', '<span class="zh">通过</span>', '<span class="zh">按照</span>', '<span class="zh">由</span>'], a: 1, expl: "The website is the TOOL used to register → 通过. 经过网站 would mean walking past it." },
        { q: '<span class="zh">晚会的音乐___小张负责，大家放心吧。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">由</span>', '<span class="zh">把</span>', '<span class="zh">让</span>'], a: 1, expl: "Formal assignment of duty → 由…负责. 被 needs something happening TO the subject — nothing bad happened to the music (yet)." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">对于这个问题，大家的看法不同。</span>', '<span class="zh">他对于我很热情。</span>', '<span class="zh">对于年轻人来说，买房不容易。</span>', '<span class="zh">我对这个结果很满意。</span>'], a: 1, expl: "对于 refuses warm personal attitudes — people take 对: 他对我很热情. The other three aim 对于/对 correctly." },
        { q: '<span class="zh">除了米饭以外，他___吃了两个包子。</span>', choices: ['<span class="zh">还</span>', '<span class="zh">都</span>', '<span class="zh">只</span>', '<span class="zh">才</span>'], a: 0, expl: "He ate rice AND baozi — addition logic → 还. 都 would try to exclude the rice from a set that isn't there." },
        { q: '<span class="zh">除了小王以外，大家都来了。</span> — Did Xiao Wang come?', choices: ["Yes, he came first", "Yes, but late", "No, he did not come", "The sentence doesn't say"], a: 2, expl: "除了…以外 + 都 = exclusion: everyone came, Xiao Wang is the one subtracted out." },
        { q: '<span class="zh">妈妈每天___我们做饭、洗衣服，特别累。</span>', choices: ['<span class="zh">为了</span>', '<span class="zh">为</span>', '<span class="zh">通过</span>', '<span class="zh">由于</span>'], a: 1, expl: "Doing chores FOR the family's benefit → 为 + person + verb. 为了 would need a goal-action, not a beneficiary." },
        { q: '<span class="zh">这家饭馆的菜___四川菜___主。</span>', choices: ['<span class="zh">把…当</span>', '<span class="zh">以…为</span>', '<span class="zh">用…做</span>', '<span class="zh">由…组</span>'], a: 1, expl: "以 X 为主 = 'mainly X' — the formal frame the HSK 4 reading section loves in restaurant and intro texts." },
        { q: 'Put in order: <span class="zh">书 / 他 / 在图书馆 / 看了 / 一下午</span>', choices: ['<span class="zh">他在图书馆看了一下午书。</span>', '<span class="zh">他看了一下午书在图书馆。</span>', '<span class="zh">他看了在图书馆一下午书。</span>', '<span class="zh">在图书馆他书看了一下午。</span>'], a: 0, expl: "在-block before the verb, duration between verb and object: 在图书馆 + 看了 + 一下午 + 书." },
        { q: '<span class="zh">我最近在看一本___中国茶文化的书。</span>', choices: ['<span class="zh">对</span>', '<span class="zh">对于</span>', '<span class="zh">关于</span>', '<span class="zh">随着</span>'], a: 2, expl: "Describing a book's CONTENTS ('about tea culture') → 关于, the only one that can title or label material." },
        { q: '<span class="zh">请___说明书上的顺序，一步一步地安装。</span>', choices: ['<span class="zh">根据</span>', '<span class="zh">按照</span>', '<span class="zh">经过</span>', '<span class="zh">关于</span>'], a: 1, expl: "Step-by-step instructions you carry out → 按照. 根据 would treat the manual as mere evidence — but you're obeying it." },
        { q: '<span class="zh">这件事除了你，我___都没告诉。</span>', choices: ['<span class="zh">谁</span>', '<span class="zh">都</span>', '<span class="zh">还</span>', '<span class="zh">人</span>'], a: 0, expl: "Only-exception logic: 除了你，谁都没告诉 — 'I told no one but you'. Question word 谁 + 都 + negative = 'no one' (see the indefinites topic)." },
        { q: "<span class=\"zh\">学校___毕业生提供了很多工作机会。</span>", choices: ["<span class=\"zh\">为</span>", "<span class=\"zh\">为了</span>", "<span class=\"zh\">对于</span>", "<span class=\"zh\">由</span>"], a: 0, expl: "提供 serves a BENEFICIARY → **为** + person + verb, the 为大家服务 pattern. 为了 needs a goal-action, not people; 对于 marks formal topics; and 由 would flip the roles — the graduates would be the ones providing." },
        { q: "<span class=\"zh\">___老师的帮助下，他顺利通过了入学考试。</span>", choices: ["<span class=\"zh\">在</span>", "<span class=\"zh\">通过</span>", "<span class=\"zh\">由</span>", "<span class=\"zh\">随着</span>"], a: 0, expl: "The trailing **下** locks the frame: 在…的帮助下 = 'with X's help'. The classic error is ✗通过…的帮助下 — 通过 never closes with 下. Bonus check: the later 通过 here is the full VERB 'to pass' (it carries 了)." },
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">介词 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Prep</th><th>Use it for</th><th>Anchor</th></tr>
<tr><td><b class="hl">随着</b></td><td>along with change (+越来越)</td><td>随着…的发展</td></tr>
<tr><td><b class="hl">通过</b></td><td>by means of (tool/person/method)</td><td>通过朋友的介绍</td></tr>
<tr><td><b class="hl">经过</b></td><td>through a process/place; “after”</td><td>经过两年的努力</td></tr>
<tr><td><b class="hl">由</b></td><td>assign duty; composed of</td><td>由他负责 · 由…组成</td></tr>
<tr><td><b class="hl">对</b></td><td>people & attitudes</td><td>对我很好 · 对…感兴趣</td></tr>
<tr><td><b class="hl">对于</b></td><td>topics, formal; leads the clause</td><td>对于…来说</td></tr>
<tr><td><b class="hl">关于</b></td><td>“about” — contents & titles</td><td>关于…的书/通知</td></tr>
<tr><td><b class="hl">按照</b></td><td>rules you execute</td><td>按照规定/顺序</td></tr>
<tr><td><b class="hl">根据</b></td><td>evidence you infer from</td><td>根据天气预报/调查</td></tr>
<tr><td><b class="hl">以…为</b></td><td>take X as Y (formal)</td><td>以健康为主 (wéi!)</td></tr>
<tr><td><b class="hl">为了 / 为</b></td><td>goal-action / beneficiary & emotion</td><td>为了减肥 · 为你高兴</td></tr>
<tr><td><b class="hl">除了…以外</b></td><td>+都 except · +还/也 besides · +只/没有 only-X</td><td>read the SECOND half first</td></tr>
</table></div>
<p><b>The one law:</b> [prep + noun] parks <b>BEFORE the verb</b> — ✗我学中文在北京 → ✓我在北京学中文. Only 在/到/给 may follow the verb, and only for where things END UP (放在桌上・搬到楼上・寄给他).</p>`
    }
  ]
});
