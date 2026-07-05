/* HSK 4 Grammar Lab — 把字句 (the bǎ construction) */
registerPage({
  id: "ba-sentences",
  zh: "**把**字句",
  title: "The 把 construction — doing something TO an object",
  subtitle: "HSK 3 introduced you to 把 in simple sentences. HSK 4 tests the full machine: which endings are required, which verbs refuse 把, where negation goes — and it loves putting all of that into the sentence-ordering task.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: grab the object, then say what you <span class="zh hl">did to it</span>',
      short: "Big idea",
      html: `
<p>A normal Chinese sentence reports an event: <span class="zh">我看了那本书</span> (“I read that book”). A <span class="zh hl">把</span> sentence does something different — it <b>picks up a specific object and reports what happened to it</b>: <span class="zh">我<b class="hl">把</b>那本书看完了</span> (“I took that book and finished it”).</p>
<div class="pattern">Subject + <span class="slot">把</span> + Object + Verb + <span class="slot">Extra</span><small>The “Extra” is not optional — the verb can never be the last word. Something must say what result the object ended up in.</small></div>
<p>Think of <span class="zh">把</span> as English <i>“take … and …”</i>: <span class="zh">把门关上</span> ≈ “take the door and shut it”. The focus shifts from the action to the <b>outcome for the object</b>.</p>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 Your languages already do this</span>
German perfect tense puts the object <i>before</i> the final verb: <i>„Ich habe <b>den Schlüssel</b> in die Tasche <b>gesteckt</b>“</i> — exactly the 把 word order: <span class="zh">我<b class="hl">把</b>钥匙放进口袋里了</span>. And Spanish moves known objects up front as pronouns: <i>“<b>lo</b> puse en la mesa”</i>. In all three cases this only works with a <b>known, specific</b> object — same rule as 把.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
把 is the natural way to express <b>moving, changing, or finishing</b> something. The Writing section (arrange-the-words) almost always contains a 把 sentence, and Reading distractors love a bare 把 + verb with no ending.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'The golden rule: the verb <span class="zh hl">cannot</span> be the last word',
      short: "Golden rule",
      html: `
<p>This is the #1 exam trap. After the verb there must be <b>something</b> that expresses the result or completion:</p>
<p style="text-align:center" class="zh" style="font-size:1.2rem">✗ 我把作业<b class="hl">做</b>。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 我把作业<b class="hl">做完了</b>。</p>
<p>Valid “endings” include: <span class="pill">了</span> <span class="pill">完 / 好 / 到 / 错…</span> (result complements) <span class="pill">上来 / 下去…</span> (direction) <span class="pill">在 + place</span> <span class="pill">到 + place</span> <span class="pill">给 + person</span> <span class="pill">成 + new form</span> <span class="pill">verb doubling</span> <span class="pill">一下</span> <span class="pill">得 + description</span>.</p>
<div class="callout warn"><span class="co-title">⚠️ Watch out</span>
A single <span class="zh">了</span> is only enough for simple verbs like <span class="zh">把药吃了</span>, <span class="zh">把钱花了</span> — “dispose of it” verbs. If the sentence says <i>where</i> or <i>into what</i>, you need the full complement: <span class="zh">把行李箱放<b class="hl">在楼上</b></span>, never ✗<span class="zh">把行李箱放了在楼上</span>.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "table",
      title: 'The ending catalog — what can follow the verb',
      short: "Endings",
      intro: "Nine ways to finish a 把 sentence. If you can produce one example of each from memory, you own this pattern.",
      head: ["Ending", "Meaning", "Example"],
      rows: [
        ['<span class="zh">在 + place</span>', 'ends up located at', '<span class="zh">请把车停<b class="hl">在门口</b>。</span> <span class="py-hint">Qǐng bǎ chē tíng zài ménkǒu.</span>'],
        ['<span class="zh">到 + place</span>', 'moved to', '<span class="zh">我把桌子搬<b class="hl">到楼上</b>了。</span> <span class="py-hint">Wǒ bǎ zhuōzi bān dào lóushàng le.</span>'],
        ['<span class="zh">给 + person</span>', 'transferred to', '<span class="zh">请把护照交<b class="hl">给警察</b>。</span> <span class="py-hint">Qǐng bǎ hùzhào jiāo gěi jǐngchá.</span>'],
        ['<span class="zh">成 + X</span>', 'changed into', '<span class="zh">请把这句话翻译<b class="hl">成中文</b>。</span> <span class="py-hint">Qǐng bǎ zhè jù huà fānyì chéng Zhōngwén.</span>'],
        ['<span class="zh">result compl.</span>', 'outcome achieved', '<span class="zh">我把钥匙弄<b class="hl">丢</b>了。</span> <span class="py-hint">Wǒ bǎ yàoshi nòng diū le.</span>'],
        ['<span class="zh">direction compl.</span>', 'moved which way', '<span class="zh">把箱子搬<b class="hl">上来</b>吧。</span> <span class="py-hint">Bǎ xiāngzi bān shànglái ba.</span>'],
        ['<span class="zh">了</span>', 'disposed of', '<span class="zh">谁把我的蛋糕吃<b class="hl">了</b>？</span> <span class="py-hint">Shéi bǎ wǒ de dàngāo chī le?</span>'],
        ['<span class="zh">V一V / V一下</span>', 'brief action', '<span class="zh">把这份材料看<b class="hl">一下</b>。</span> <span class="py-hint">Bǎ zhè fèn cáiliào kàn yíxià.</span>'],
        ['<span class="zh">得 + description</span>', 'to the point that…', '<span class="zh">这个消息把大家高兴<b class="hl">得</b>跳了起来。</span> <span class="py-hint">Zhège xiāoxi bǎ dàjiā gāoxìng de tiào le qǐlái.</span>']
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "examples",
      title: 'Model sentences — read, listen, absorb',
      short: "Examples",
      intro: "Tap any sentence to hear it. Notice in every single one: 把 + object first, verb + ending after.",
      items: [
        { tag: "在", cn: "我**把**密码写**在**笔记本上了。", py: "Wǒ bǎ mìmǎ xiě zài bǐjìběn shàng le.", en: "I wrote the password down in my notebook.", note: "写 alone would be incomplete — 在笔记本上 tells us where the password ended up." },
        { tag: "到", cn: "师傅，请**把**我送**到**首都机场。", py: "Shīfu, qǐng bǎ wǒ sòng dào Shǒudū Jīchǎng.", en: "Driver, please take me to Capital Airport.", note: "把 + person works too — the passenger is what gets 'moved'." },
        { tag: "给", cn: "别忘了**把**这些照片发**给**你妹妹。", py: "Bié wàng le bǎ zhèxiē zhàopiàn fā gěi nǐ mèimei.", en: "Don't forget to send these photos to your younger sister.", note: "别忘了 comes before 把 — everything modal/negative stays in front." },
        { tag: "成", cn: "他居然**把**“大”字写**成**了“太”字。", py: "Tā jūrán bǎ “dà” zì xiě chéng le “tài” zì.", en: "He actually wrote the character 大 as 太.", note: "V + 成 = mistaken/deliberate transformation. Extremely common in HSK reading." },
        { tag: "result", cn: "糟糕，我**把**手机忘**在**出租车上了。", py: "Zāogāo, wǒ bǎ shǒujī wàng zài chūzūchē shàng le.", en: "Oh no, I left my phone in the taxi.", note: "忘 takes 在 + place here: 'forgot it (so that it stayed) in the taxi'." },
        { tag: "direction", cn: "天气冷了，**把**厚衣服拿**出来**吧。", py: "Tiānqì lěng le, bǎ hòu yīfu ná chūlái ba.", en: "It's getting cold — take out the thick clothes.", note: "拿出来 = directional complement as the ending." },
        { tag: "了", cn: "房间太乱了，你**把**垃圾扔**了**吧。", py: "Fángjiān tài luàn le, nǐ bǎ lājī rēng le ba.", en: "The room is a mess — throw the garbage away.", note: "扔了 = disposal verbs accept a bare 了 as ending." },
        { tag: "double", cn: "上课前，请大家**把**课文读**一读**。", py: "Shàngkè qián, qǐng dàjiā bǎ kèwén dú yi dú.", en: "Before class, everyone please read through the text.", note: "Verb doubling counts as an ending — polite, light instructions." },
        { tag: "得", cn: "那部电影**把**我感动**得**哭了。", py: "Nà bù diànyǐng bǎ wǒ gǎndòng de kū le.", en: "That movie moved me to tears.", note: "The subject can be a thing; 得 + result describes the object's new state." },
        { tag: "都", cn: "他**把**咱们的饺子**都**吃光了！", py: "Tā bǎ zánmen de jiǎozi dōu chī guāng le!", en: "He ate up ALL of our dumplings!", note: "With a plural object, 都 slips in right before the verb. 光 = 'nothing left'." }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: 'Must / can / cannot — when 把 applies',
      short: "Must·can·cannot",
      intro: "HSK 4 tests all three cases: sentences that require 把, sentences where it's optional, and verbs that flat-out refuse it.",
      tabs: [
        {
          label: "必须 must use 把",
          html: `<p>When the verb carries the object <b>to a place / person / new form</b> — endings <span class="pill">在</span> <span class="pill">到</span> <span class="pill">给*</span> <span class="pill">成</span> — the object may not stay behind the verb with these endings, so 把 is the only natural word order.</p>`,
          examples: [
            { cn: "请**把**空调关小一点儿，**把**温度调**到**26度。", py: "Qǐng bǎ kōngtiáo guān xiǎo yìdiǎnr, bǎ wēndù tiáo dào èrshíliù dù.", en: "Please turn the AC down a bit — set the temperature to 26°." },
            { cn: "她**把**自己的房间布置**成**了一个小花园。", py: "Tā bǎ zìjǐ de fángjiān bùzhì chéng le yí gè xiǎo huāyuán.", en: "She turned her room into a little garden.", note: "*给 alone often allows both orders (寄给他一封信 ✓), but 把 is required when the result matters: 把信寄给他." }
          ]
        },
        {
          label: "可以 optional",
          html: `<p>Simple completed actions allow both orders. The difference is focus: plain order reports the event; 把 highlights what became of the object.</p>`,
          examples: [
            { cn: "我做完作业了。 ＝ 我**把**作业做完了。", py: "Wǒ zuò wán zuòyè le. = Wǒ bǎ zuòyè zuò wán le.", en: "I finished my homework. (both fine)", note: "With 把 it sounds like an answer to 'What did you do with the homework?'" },
            { cn: "你洗了那些衣服吗？ ＝ 你**把**那些衣服洗了吗？", py: "Nǐ xǐ le nàxiē yīfu ma? = Nǐ bǎ nàxiē yīfu xǐ le ma?", en: "Did you wash those clothes?" }
          ]
        },
        {
          label: "不能 cannot",
          html: `<p>把 needs a verb that <b>handles or changes</b> the object. These verb types refuse it:</p>
<ul>
<li><b>Feeling / knowing:</b> <span class="zh">知道、认识、喜欢、爱、怕、同意、希望、觉得</span> — ✗<span class="zh">我把他认识</span></li>
<li><b>Existence / identity:</b> <span class="zh">是、有、在、像</span></li>
<li><b>Perception & experience:</b> <span class="zh">看见、听见、遇到、收到</span> — you receive these passively, you don't “do” them to the object</li>
<li><b>Direction verbs themselves:</b> <span class="zh">来、去、回、到、进、出、上、下、起</span></li>
<li><b>Potential complements:</b> ✗<span class="zh">我把这本书看得完</span> → ✓<span class="zh">这本书我看得完</span>. Ability ≠ handling.</li>
</ul>`,
          examples: [
            { cn: "✗ 我把那个人看见了。 → ✓ 我看见那个人了。", py: "Wǒ kànjiàn nàge rén le.", en: "I saw that person.", note: "看见 is passive perception — nothing is 'done to' the person." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Word order inside the machine: negation, modals, 都, definiteness',
      short: "Word order",
      html: `
<p>Four positioning rules the exam checks again and again:</p>
<h3>1 · Negation and modals go <b>before 把</b>, never before the verb</h3>
<p class="zh" style="font-size:1.15rem">你<b class="hl">别把</b>这件事告诉他。 ✓ &nbsp;&nbsp; 我<b class="hl">没把</b>钱包带来。 ✓ &nbsp;&nbsp; 你<b class="hl">应该把</b>房间打扫干净。 ✓<br>✗ 你把这件事<s>别</s>告诉他 &nbsp;&nbsp; ✗ 我把钱包<s>没</s>带来</p>
<h3>2 · Time words also come before 把</h3>
<p class="zh" style="font-size:1.15rem">我<b class="hl">昨天把</b>报告交给经理了。</p>
<h3>3 · 都 sits after the object, before the verb</h3>
<p class="zh" style="font-size:1.15rem">她把房间里的东西<b class="hl">都</b>整理好了。</p>
<h3>4 · The object must be specific & known</h3>
<p>You can 把 <i>the</i> book, not <i>a</i> book: ✓<span class="zh">把<b class="hl">那本</b>书给我</span> · ✗<span class="zh">把<b class="hl">一本</b>书给我</span>. Bare nouns are fine when context makes them definite (<span class="zh">把门关上</span> = “the door we both know about”).</p>
<div class="callout cmp"><span class="co-title">🇪🇸 Same instinct as Spanish clitics</span>
“*<i>Lo</i> compré un libro” is impossible — <i>lo</i> must refer to a known thing. 把 objects follow exactly that logic: definite, identifiable, already on stage.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Quick check before the hard part. First-try answers count toward your topic score.",
      items: [
        { q: 'Which sentence is correct?', choices: ['我把作业做。', '我把作业做完了。', '我做完把作业了。', '我把做完作业了。'], a: 1, expl: "The verb can never end a 把 sentence — 做完了 provides the required result + 了. Order: 把 + object + verb + ending." },
        { q: 'Choose the correct position for <span class="zh">别</span>:<br><span class="zh">你 ___ 把 这个 秘密 ___ 告诉 ___ 别人。</span>', choices: ["first blank", "second blank", "third blank", "any of them"], a: 0, expl: "Negation (别/不/没) always precedes 把: 你别把这个秘密告诉别人。" },
        { q: 'Which verb can NOT be used with 把?', choices: ['翻译', '打扫', '喜欢', '修理'], a: 2, expl: "喜欢 is a feeling — nothing happens to the object. Handling/changing verbs (翻译、打扫、修理) welcome 把." },
        { q: 'Fill the blank: <span class="zh">请把这篇文章翻译___英文。</span>', choices: ['<span class="zh">给</span>', '<span class="zh">成</span>', '<span class="zh">到</span>', '<span class="zh">在</span>'], a: 1, expl: "Translation changes the text INTO another language → V + 成 + new form." },
        { q: 'Which object works in a 把 sentence? <span class="zh">我把___喝了。</span>', choices: ['<span class="zh">一杯咖啡</span>', '<span class="zh">那杯咖啡</span>', '<span class="zh">什么咖啡</span>', '<span class="zh">一点儿咖啡</span>'], a: 1, expl: "把 objects must be definite/specific — 那杯咖啡 'that cup of coffee'. Indefinite 一杯 is out." },
        { q: '“I can\'t finish this book” — which is right?', choices: ['我把这本书看不完。', '这本书我看不完。', '我看把这本书不完。', '我把这本书不看完。'], a: 1, expl: "Potential complements (看不完) never combine with 把. Topicalize instead: 这本书我看不完。" }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "Each patient has exactly one 把-related disease. Diagnose it before revealing the fix — these mirror actual HSK distractors.",
      items: [
        { wrong: "我把书包忘。", right: "我把书包忘在家里了。", py: "Wǒ bǎ shūbāo wàng zài jiā li le.", en: "I left my backpack at home.", expl: "Bare verb after 把 is illegal. 忘 needs 在 + the place where the thing stayed (+了)." },
        { wrong: "请你把一杯茶给我。", right: "请你给我一杯茶。／请你把那杯茶给我。", py: "Qǐng nǐ gěi wǒ yì bēi chá. / Qǐng nǐ bǎ nà bēi chá gěi wǒ.", en: "Please give me a cup of tea. / Please hand me that cup of tea.", expl: "一杯茶 is indefinite — 把 refuses it. Either drop 把, or make the object definite (那杯茶)." },
        { wrong: "他把汉语会说。", right: "他会说汉语。", py: "Tā huì shuō Hànyǔ.", en: "He can speak Chinese.", expl: "会说 expresses ability, not handling an object — no 把. (And modals would have to precede 把 anyway.)" },
        { wrong: "我把我的钱包没带。", right: "我没把我的钱包带来。／我没带钱包。", py: "Wǒ méi bǎ wǒ de qiánbāo dài lái.", en: "I didn't bring my wallet.", expl: "没 must come before 把, and the verb still needs its ending (带来)." },
        { wrong: "她把地图看见了。", right: "她看见地图了。", py: "Tā kànjiàn dìtú le.", en: "She saw the map.", expl: "看见 is perception — the map isn't changed. Perception/receiving verbs (看见、听见、收到、遇到) reject 把." },
        { wrong: "请把这个词典还了给图书馆。", right: "请把这本词典还给图书馆。", py: "Qǐng bǎ zhè běn cídiǎn huán gěi túshūguǎn.", en: "Please return this dictionary to the library.", expl: "Two bugs: no 了 between verb and 给-phrase (还给, one unit), and the measure word for books/dictionaries is 本." },
        { wrong: "我把衣服都洗得很干净了在阳台上。", right: "我把衣服都洗干净，晾在阳台上了。", py: "Wǒ bǎ yīfu dōu xǐ gānjìng, liàng zài yángtái shàng le.", en: "I washed all the clothes and hung them on the balcony.", expl: "One 把-verb takes ONE ending. Two outcomes (clean + on the balcony) need two verb phrases." },
        { wrong: "老师把学生们去操场了。", right: "老师让学生们去操场了。／老师把学生们带到操场去了。", py: "Lǎoshī ràng xuéshengmen qù cāochǎng le. / Lǎoshī bǎ xuéshengmen dài dào cāochǎng qù le.", en: "The teacher had the students go to the field. / The teacher took the students to the field.", expl: "去 is a direction verb — it can't 'handle' an object. Use causative 让, or a real handling verb like 带到…去." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Exactly like the exam's arrange-the-words task. Tap tiles into the answer box. Every item hides one 把 rule.",
      items: [
        { tiles: ["请", "把", "空调", "打开"], py: "Qǐng bǎ kōngtiáo dǎkāi.", en: "Please turn on the air conditioner.", hint: "Polite request first, then the 把-machine." },
        { tiles: ["我", "不小心", "把", "杯子", "打破", "了"], py: "Wǒ bù xiǎoxīn bǎ bēizi dǎpò le.", en: "I accidentally broke the cup.", hint: "The adverb 不小心 modifies the whole event → before 把." },
        { tiles: ["你", "千万", "别", "把", "这件事", "忘", "了"], py: "Nǐ qiānwàn bié bǎ zhè jiàn shì wàng le.", en: "Whatever you do, don't forget this.", hint: "千万 + 别 both live before 把." },
        { tiles: ["妈妈", "把", "客厅", "收拾", "得", "干干净净"], py: "Māma bǎ kètīng shōushi de gāngānjìngjìng.", en: "Mom tidied the living room until it was spotless.", hint: "得 + reduplicated adjective is the ending." },
        { tiles: ["他", "把", "那些", "旧衣服", "都", "送给", "别人", "了"], py: "Tā bǎ nàxiē jiù yīfu dōu sònggěi biérén le.", en: "He gave all those old clothes away to others.", hint: "都 comes after the object, before the verb." },
        { tiles: ["我", "已经", "把", "会议时间", "通知", "大家", "了"], py: "Wǒ yǐjīng bǎ huìyì shíjiān tōngzhī dàjiā le.", en: "I've already notified everyone of the meeting time.", hint: "已经 before 把; 通知 + person as ending." },
        { tiles: ["请", "大家", "把", "手机", "调", "成", "静音"], py: "Qǐng dàjiā bǎ shǒujī tiáo chéng jìngyīn.", en: "Everyone please set your phones to silent.", hint: "调成 = adjust INTO a new state." },
        { tiles: ["你", "怎么", "把", "盐", "当成", "糖", "了"], py: "Nǐ zěnme bǎ yán dàngchéng táng le?", en: "How did you mistake the salt for sugar?", hint: "当成 = treat as / mistake for — the 成 family again." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 把 + 一 + verb: sudden snappy actions</h3>
<p><span class="zh">他把门<b class="hl">一</b>关，走了。</span> — “He slammed the door shut and left.” The 一 + V counts as the ending and adds abruptness.</p>
<h3>2 · The subject can be a thing or an event</h3>
<p><span class="zh">这场雨把我的鞋弄湿了。</span> — “The rain got my shoes wet.” 弄 (nòng) is the universal “make/get” verb — memorize <span class="zh">弄湿、弄坏、弄丢、弄脏、弄错</span>.</p>
<h3>3 · 把…忘了 vs 忘了…</h3>
<p><span class="zh">我把他的名字忘了</span> focuses on the name being gone; <span class="zh">我忘了他的名字</span> just reports. Both fine — but only the 把 version can take 给 for emphasis in speech: <span class="zh">把名字<b class="hl">给</b>忘了</span> (colloquial 给, no receiver!).</p>
<h3>4 · Double objects ride along</h3>
<p><span class="zh">请把这件事告诉<b class="hl">王经理</b>。</span> — after verbs like 告诉/交给/送给/还给, the receiver stands right after the verb as the ending.</p>
<h3>5 · 把 inside bigger patterns</h3>
<p>把 nests happily inside 想/应该/让: <span class="zh">妈妈<b class="hl">让</b>我<b class="hl">把</b>牛奶喝完。</span> — causative first, then the 把-machine. You'll meet 被+把 combos in the passive topic.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the sentence-ordering task, if you see a <span class="zh">把</span> tile: ① find the object noun → glue it right after 把; ② find the verb+complement chunk → glue it after the object; ③ everything modal/temporal/negative stacks in front. This solves it mechanically.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions at (or slightly above) real exam difficulty. Aim for 10+.",
      items: [
        { q: 'Pick the correct sentence:', choices: ['他把飞机票订。', '他把飞机票订好了。', '他订好把飞机票了。', '把他飞机票订好了。'], a: 1, expl: "Subject + 把 + object + V + result: 订好了 'booked (successfully)'." },
        { q: '<span class="zh">请把这个句子___德语。</span>', choices: ['<span class="zh">翻译到</span>', '<span class="zh">翻译在</span>', '<span class="zh">翻译成</span>', '<span class="zh">翻译给</span>'], a: 2, expl: "Into a new language/form = 成. 到 is for destinations, 在 for locations, 给 for receivers." },
        { q: 'Which is the correct order?<br><span class="zh">衣服 / 把 / 妈妈 / 在阳台上 / 晾</span>', choices: ['<span class="zh">妈妈把衣服晾在阳台上。</span>', '<span class="zh">妈妈把衣服在阳台上晾。</span>', '<span class="zh">妈妈在阳台上把衣服晾。</span>', '<span class="zh">把妈妈衣服晾在阳台上。</span>'], a: 0, expl: "在 + place expressing the RESULT location follows the verb: 晾在阳台上. (Location of the action would precede the verb, but here the balcony is where the clothes end up.)" },
        { q: '<span class="zh">我___把这份合同看完，就去开会了。</span>', choices: ['<span class="zh">没</span>', '<span class="zh">不</span>', '<span class="zh">别</span>', '<span class="zh">没有把</span>'], a: 0, expl: "Past, uncompleted → 没 before 把: 我没把合同看完。 不 negates habits/intentions; 别 is prohibition." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">她把感冒药吃了。</span>', '<span class="zh">她把那个消息知道了。</span>', '<span class="zh">她把窗户擦干净了。</span>', '<span class="zh">她把会议改到下周了。</span>'], a: 1, expl: "知道 is cognition — no handling, no 把. The others: disposal 了, result 干净, destination 到下周 (time works like place!)." },
        { q: '<span class="zh">哥哥把自行车修___，又骑着去上班了。</span>', choices: ['<span class="zh">好</span>', '<span class="zh">完</span>', '<span class="zh">到</span>', '<span class="zh">见</span>'], a: 0, expl: "修好 = repaired into working order (usable again). 修完 only says the activity ended — the bike might still be broken. Result complements care about outcome." },
        { q: 'Choose the sentence that must use 把:', choices: ["I read a book yesterday.", "Please put the medicine in the fridge.", "He likes this movie a lot.", "I saw your teacher this morning."], a: 1, expl: "'Put X in/on Y' (放在) forces the 把 order: 请把药放在冰箱里。 The others are indefinite, emotion, or perception." },
        { q: '<span class="zh">这次搬家___我累坏了。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">把</span>', '<span class="zh">得</span>', '<span class="zh">对</span>'], a: 1, expl: "Event subject + 把 + person + result: 把我累坏了 'wore me out'. 被 flips the direction (that would need 我被这次搬家累坏了); 得 hangs a complement on a verb or adjective (累得要命), it can't introduce the person; 对 can't carry a result at all." },
        { q: 'Which is correct?', choices: ['<span class="zh">你应该把护照带来。</span>', '<span class="zh">你把护照应该带来。</span>', '<span class="zh">你应该护照把带来。</span>', '<span class="zh">应该你把护照来带。</span>'], a: 0, expl: "Modal 应该 before 把, verb + directional 带来 at the end." },
        { q: '<span class="zh">服务员不小心把咖啡洒___客人身上了。</span>', choices: ['<span class="zh">给</span>', '<span class="zh">到</span>', '<span class="zh">成</span>', '<span class="zh">得</span>'], a: 1, expl: "洒到…身上 — the coffee lands ON the guest: destination 到. 给 would mean handing it over politely… not quite the situation!" },
        { q: 'Find the wrong sentence:', choices: ['<span class="zh">请把音乐关小一点儿。</span>', '<span class="zh">我把这本小说看得懂。</span>', '<span class="zh">他把工资都花光了。</span>', '<span class="zh">你把地址发给我吧。</span>'], a: 1, expl: "看得懂 is a potential complement — incompatible with 把. Say 这本小说我看得懂。" },
        { q: 'In the writing task you get: <span class="zh">拿 / 请把 / 出去 / 这些垃圾</span>. Correct sentence?', choices: ['<span class="zh">请把拿这些垃圾出去。</span>', '<span class="zh">请把这些垃圾拿出去。</span>', '<span class="zh">这些垃圾请把拿出去。</span>', '<span class="zh">请把这些垃圾出去拿。</span>'], a: 1, expl: "把 + object (这些垃圾) + verb (拿) + direction (出去). The 把-machine assembles itself." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">把字句 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Rule</th><th>Remember</th></tr>
<tr><td>Frame</td><td>Subj + 时间/负词/能愿动词 + <b class="hl">把</b> + definite object (+都) + V + <b class="hl">ending</b></td></tr>
<tr><td>Verb never last</td><td>End with 了 / 完·好·到·错 / 在·到·给·成 + X / direction / V一V / 得 + description</td></tr>
<tr><td>Negation & modals</td><td><b>Before 把</b>: 别把…忘了 · 没把…带来 · 应该把…打扫干净</td></tr>
<tr><td>Object</td><td>Definite only: 那本书 ✓ · 一本书 ✗ · plural + 都 before the verb</td></tr>
<tr><td>把-friendly verbs</td><td>handle/move/change: 放 搬 挂 送 交 还 借 寄 开 关 打扫 修理 翻译 弄</td></tr>
<tr><td>把-refusing verbs</td><td>feeling 喜欢·怕 / cognition 知道·觉得 / perception 看见·听见 / 是·有·在 / direction 来·去 / potential V得C</td></tr>
<tr><td>Must-use cases</td><td>V + 在/到/给/成: 放在桌上 · 搬到楼上 · 交给老师 · 翻译成中文</td></tr>
<tr><td>Killer combo</td><td>弄 + result: 弄丢 弄坏 弄湿 弄脏 弄错 — “universal 把 verb”</td></tr>
</table></div>`
    }
  ]
});
