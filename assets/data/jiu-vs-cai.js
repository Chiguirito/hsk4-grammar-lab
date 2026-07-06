/* HSK 4 Grammar Lab — 就 vs 才 */
registerPage({
  id: "jiu-vs-cai",
  zh: "**就** vs **才**",
  title: "就 vs 才 — the expectation slider",
  subtitle: "You've used 就 since HSK 1 (我就来) and 才 since HSK 3. HSK 4 tests what they really are: two ends of one scale that measures reality against expectation. Almost every listening and reading section hides at least one 就/才 decision.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: one slider, two ends',
      short: "Big idea",
      html: `
<p>Forget memorizing twenty separate meanings. <span class="zh hl">就</span> and <span class="zh hl">才</span> are the <b>same knob turned in opposite directions</b>. Both compare what happened with what the speaker expected:</p>
<div class="pattern"><span class="slot">就</span> = sooner · faster · easier · less than expected&nbsp;&nbsp;⟷&nbsp;&nbsp;<span class="slot">才</span> = later · slower · harder · more than expected<small>The facts can be identical — the adverb reports how the speaker FEELS about them.</small></div>
<p>Same clock time, two feelings: <span class="zh">他八点<b class="hl">就</b>来了</span> — “he was here by eight already” (early!). <span class="zh">他八点<b class="hl">才</b>来</span> — “he didn't show up until eight” (so late!). Nothing about the world changed; the speaker's eyebrow did.</p>
<div class="callout cmp"><span class="co-title">🇩🇪 German nails this one</span>
German <i>schon</i> vs <i>erst</i> is an almost perfect copy: <span class="zh">他八点就来了</span> = „Er kam <b>schon</b> um acht“, <span class="zh">他八点才来</span> = „Er kam <b>erst</b> um acht“. Spanish gets close with <i>ya</i> vs <i>no… hasta</i>: “<b>ya</b> a las ocho estaba” vs “<b>no</b> llegó <b>hasta</b> las ocho”. English has no clean pair — that's exactly why EN speakers find 就/才 hard and the exam loves it.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
就/才 questions test whether you read the <b>speaker's attitude</b>, not just the clock. Listening dialogues ask “What does the woman think?” — and the whole answer hangs on one syllable.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: 'The slider across four situations',
      short: "Core uses",
      intro: "Same machine, four playing fields. Read each row as a pair: 就 leans early/easy, 才 leans late/hard.",
      head: ["Situation", "就 — less than expected", "才 — more than expected"],
      rows: [
        ['<b>Time</b>', '<span class="zh">他六点<b class="hl">就</b>起床了。</span> <span class="py-hint">Tā liù diǎn jiù qǐchuáng le.</span> Up by six — early bird.', '<span class="zh">他十点<b class="hl">才</b>起床。</span> <span class="py-hint">Tā shí diǎn cái qǐchuáng.</span> Didn\'t get up till ten.'],
        ['<b>Quantity / effort</b>', '<span class="zh">这篇作文他一个小时<b class="hl">就</b>写完了。</span> <span class="py-hint">Zhè piān zuòwén tā yí ge xiǎoshí jiù xiě wán le.</span> Only one hour — fast!', '<span class="zh">他写了三个小时<b class="hl">才</b>写完。</span> <span class="py-hint">Tā xiě le sān ge xiǎoshí cái xiě wán.</span> Took three whole hours.'],
        ['<b>Sequence</b>', '<span class="zh">我<b class="hl">一</b>下课<b class="hl">就</b>回家。</span> <span class="py-hint">Wǒ yí xiàkè jiù huí jiā.</span> The moment A happens, B follows — no gap.', '<span class="zh">他下了课<b class="hl">才</b>想起作业忘带了。</span> <span class="py-hint">Tā xià le kè cái xiǎngqǐ zuòyè wàng dài le.</span> Only THEN did B happen — a delay.'],
        ['<b>Condition</b>', '<span class="zh">你去，我<b class="hl">就</b>去。</span> <span class="py-hint">Nǐ qù, wǒ jiù qù.</span> Easy trigger: if A, then B follows naturally.', '<span class="zh">只有你去，他<b class="hl">才</b>会去。</span> <span class="py-hint">Zhǐyǒu nǐ qù, tā cái huì qù.</span> Hard requirement: ONLY IF A does B happen.'],
        ['<b>“Only” flavor</b>', '<span class="zh"><b class="hl">就</b>他一个人知道。</span> <span class="py-hint">Jiù tā yí ge rén zhīdào.</span> Precisely him, no one else.', '<span class="zh">这本书<b class="hl">才</b>五块钱。</span> <span class="py-hint">Zhè běn shū cái wǔ kuài qián.</span> A mere five kuai — surprisingly little.']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: 'Model sentences — feel the slider move',
      short: "Examples",
      intro: "Tap to listen. For each sentence ask: is the speaker saying “wow, that was quick/little” (就) or “ugh, that took long/much” (才)?",
      items: [
        { tag: "time·早", cn: "商店九点开门，他八点半**就**到了。", py: "Shāngdiàn jiǔ diǎn kāi mén, tā bā diǎn bàn jiù dào le.", en: "The shop opens at nine — he was already there at eight thirty.", note: "Earlier than needed → 就. Note the happy sentence-final 了." },
        { tag: "time·晚", cn: "电影七点开始，她七点二十**才**到。", py: "Diànyǐng qī diǎn kāishǐ, tā qī diǎn èrshí cái dào.", en: "The movie started at seven; she didn't arrive until 7:20.", note: "Later than expected → 才. And no 了 at the end — see the 了-rule below." },
        { tag: "effort·少", cn: "这个游戏很简单，我玩了一次**就**会了。", py: "Zhège yóuxì hěn jiǎndān, wǒ wán le yí cì jiù huì le.", en: "This game is easy — I got it after playing just once.", note: "One try was enough → 就. The amount before 就 feels small." },
        { tag: "effort·多", cn: "那道数学题我想了半天**才**想出来。", py: "Nà dào shùxué tí wǒ xiǎng le bàntiān cái xiǎng chūlái.", en: "I puzzled over that math problem for ages before I finally cracked it.", note: "半天 = 'ages' (lit. half a day). Big effort before success → 才." },
        { tag: "一…就", cn: "我**一**下班**就**去接你。", py: "Wǒ yí xiàbān jiù qù jiē nǐ.", en: "I'll come pick you up as soon as I get off work.", note: "一 A 就 B — welded pair, zero gap between A and B." },
        { tag: "condition", cn: "只有多听多说，你的口语**才**会进步。", py: "Zhǐyǒu duō tīng duō shuō, nǐ de kǒuyǔ cái huì jìnbù.", en: "Only by listening and speaking a lot will your spoken Chinese improve.", note: "只有…才 = the one condition that unlocks the result. Full story in the Conditionals topic." },
        { tag: "immediacy", cn: "你先坐一会儿，我**就**来。", py: "Nǐ xiān zuò yíhuìr, wǒ jiù lái.", en: "Have a seat — I'll be right there.", note: "就 with no time word = 'right away'. You've said this since HSK 1; now you know why it works." },
        { tag: "才=only", cn: "这件衬衫**才**三十块钱，真便宜！", py: "Zhè jiàn chènshān cái sānshí kuài qián, zhēn piányi!", en: "This shirt is only thirty kuai — such a bargain!", note: "才 + bare number = 'a mere…'. The speaker finds the amount surprisingly small." },
        { tag: "就=only", cn: "别问别人了，**就**他一个人知道密码。", py: "Bié wèn biérén le, jiù tā yí ge rén zhīdào mìmǎ.", en: "Don't bother asking anyone else — he's the only one who knows the password.", note: "就 + noun = 'precisely / only'. Here 就 sits BEFORE the subject — different job, different position." },
        { tag: "才=强调", cn: "钱不是最重要的，健康**才**是最重要的。", py: "Qián bú shì zuì zhòngyào de, jiànkāng cái shì zuì zhòngyào de.", en: "Money isn't what matters most — health is what REALLY matters.", note: "才是 = 'THAT is the real…'. 才 corrects a wrong assumption with feeling." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: 'Four jobs each — the deep dive',
      short: "Deep dive",
      intro: "Beyond the slider, each word has fixed patterns the exam quotes verbatim. One tab per pattern family.",
      tabs: [
        {
          label: "一…就",
          html: `<p><span class="zh">一 A 就 B</span> = “as soon as A, B”. The two clauses share zero gap — B fires the instant A happens. Works for habits (<i>whenever</i>) and single events (<i>the moment</i>). 一 sits right before the first verb, 就 right before the second. <b>Never swap in 才</b> — the pair is welded.</p>`,
          examples: [
            { cn: "他**一**到北京**就**给妈妈打了个电话。", py: "Tā yí dào Běijīng jiù gěi māma dǎ le ge diànhuà.", en: "He called his mom the moment he arrived in Beijing." },
            { cn: "我**一**喝咖啡，晚上**就**睡不着。", py: "Wǒ yì hē kāfēi, wǎnshang jiù shuì bu zháo.", en: "Whenever I drink coffee, I can't sleep at night.", note: "Habitual reading: every time A, then B." },
            { cn: "**一**到冬天，这里**就**特别冷。", py: "Yí dào dōngtiān, zhèli jiù tèbié lěng.", en: "As soon as winter comes, it gets really cold here.", note: "The two clauses can even have different subjects." }
          ]
        },
        {
          label: "…才 condition",
          html: `<p>才 marks a result that <b>only</b> happens after a condition is met — the door stays locked until the key turns. Common frames: <span class="pill">只有…才</span> <span class="pill">得/要 + 先…才</span> <span class="pill">V了…才</span>. The result clause usually carries <span class="zh">才 + 能/会/可以</span>.</p>`,
          examples: [
            { cn: "你得先把作业写完，**才**能出去玩。", py: "Nǐ děi xiān bǎ zuòyè xiě wán, cái néng chūqù wán.", en: "You have to finish your homework first — only then can you go out and play." },
            { cn: "只有拿到签证，我们**才**能订机票。", py: "Zhǐyǒu ná dào qiānzhèng, wǒmen cái néng dìng jīpiào.", en: "Only once we have the visa can we book the flights.", note: "只有…才 gets its own workout in the Conditionals topic — this is the preview." }
          ]
        },
        {
          label: "就 = right there",
          html: `<p>Two close cousins of “sooner than expected”:</p>
<ul>
<li><b>Immediacy:</b> <span class="zh">我就来</span> — bare 就 before the verb promises “right away”.</li>
<li><b>Precisely / exactly:</b> 就 pins something down — <i>right</i> there, <i>exactly</i> this one. Before a subject or noun it shrinks the set to “just this”.</li>
</ul>`,
          examples: [
            { cn: "你别着急，我**就**来。", py: "Nǐ bié zháojí, wǒ jiù lái.", en: "Don't worry — I'm coming right now." },
            { cn: "邮局不远，**就**在银行旁边。", py: "Yóujú bù yuǎn, jiù zài yínháng pángbiān.", en: "The post office isn't far — it's right next to the bank.", note: "就在 = 'precisely at'. Great for giving directions." },
            { cn: "这**就**是我常说的那家面馆。", py: "Zhè jiù shì wǒ cháng shuō de nà jiā miànguǎn.", en: "This is exactly the noodle place I keep talking about.", note: "这就是… = 'this IS the one'. Confirmation with a little flourish." }
          ]
        },
        {
          label: "才 = only · attitude",
          html: `<p>Two flavors of 才 with attitude:</p>
<ul>
<li><b>才 + number = “a mere”:</b> the speaker finds the amount surprisingly small — price, age, duration, count.</li>
<li><b>Indignation / correction:</b> <span class="zh">才不…呢</span> (“no way!”), <span class="zh">这才是…</span> (“THAT's the real…”). 才 pushes back against what was just said or assumed.</li>
</ul>`,
          examples: [
            { cn: "她**才**学了半年汉语，**就**能看懂中文报纸了。", py: "Tā cái xué le bàn nián Hànyǔ, jiù néng kàn dǒng Zhōngwén bàozhǐ le.", en: "She's only been learning Chinese for half a year, and she can already read Chinese newspapers.", note: "才 + 就 in one sentence: small input (才半年), big surprising output (就能…了). A star HSK pattern." },
            { cn: "我**才**不相信他的话呢！", py: "Wǒ cái bù xiāngxìn tā de huà ne!", en: "As if I'd believe a word he says!", note: "才…呢 = indignant refusal. Very spoken, very alive." },
            { cn: "多听多说，这**才**是学好中文的好办法。", py: "Duō tīng duō shuō, zhè cái shì xué hǎo Zhōngwén de hǎo bànfǎ.", en: "Listening and speaking a lot — THAT is the real way to master Chinese.", note: "这才是… corrects an implied wrong idea (e.g. 'just memorize lists')." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: 'Minimal pairs — swap one syllable, flip the meaning',
      short: "Minimal pairs",
      intro: "The ultimate test: identical sentences except 就 ↔ 才. If you can explain each pair out loud, you own this topic. Notice how 了 quietly disappears on the 才 side.",
      head: ["就 version", "才 version", "What flips"],
      rows: [
        ['<span class="zh">他六点<b class="hl">就</b>起床了。</span> <span class="py-hint">Tā liù diǎn jiù qǐchuáng le.</span>', '<span class="zh">他六点<b class="hl">才</b>起床。</span> <span class="py-hint">Tā liù diǎn cái qǐchuáng.</span>', '“Up as early as six!” vs “didn\'t drag himself up till six” (maybe he usually rises at five).'],
        ['<span class="zh">孩子两岁<b class="hl">就</b>会说话了。</span> <span class="py-hint">Háizi liǎng suì jiù huì shuōhuà le.</span>', '<span class="zh">孩子两岁<b class="hl">才</b>会说话。</span> <span class="py-hint">Háizi liǎng suì cái huì shuōhuà.</span>', 'Early talker (proud parent) vs late talker (worried parent). Same age, opposite verdict.'],
        ['<span class="zh">他喝了三杯<b class="hl">就</b>醉了。</span> <span class="py-hint">Tā hē le sān bēi jiù zuì le.</span>', '<span class="zh">他喝了三杯<b class="hl">才</b>醉。</span> <span class="py-hint">Tā hē le sān bēi cái zuì.</span>', '就: three cups knocked him out — lightweight. 才: it took all of three — he holds his drink.'],
        ['<span class="zh">这种手机一千块<b class="hl">就</b>能买到。</span> <span class="py-hint">Zhè zhǒng shǒujī yìqiān kuài jiù néng mǎi dào.</span>', '<span class="zh">这种手机一千块<b class="hl">才</b>能买到。</span> <span class="py-hint">Zhè zhǒng shǒujī yìqiān kuài cái néng mǎi dào.</span>', '就: a mere ¥1000 gets you one — cheap! 才: you need a full ¥1000 — pricey!'],
        ['<span class="zh">他十二点<b class="hl">就</b>睡了。</span> <span class="py-hint">Tā shí\'èr diǎn jiù shuì le.</span>', '<span class="zh">他十二点<b class="hl">才</b>睡。</span> <span class="py-hint">Tā shí\'èr diǎn cái shuì.</span>', 'For a night owl who codes till 3am, midnight is early (就). For his grandma, it\'s scandalously late (才). Expectation lives in the speaker.'],
        ['<span class="zh">毕业以后他<b class="hl">就</b>找到了工作。</span> <span class="py-hint">Bìyè yǐhòu tā jiù zhǎodào le gōngzuò.</span>', '<span class="zh">毕业以后他<b class="hl">才</b>找到工作。</span> <span class="py-hint">Bìyè yǐhòu tā cái zhǎodào gōngzuò.</span>', '就: found a job right after graduating — smooth. 才: only found one after graduating — implying a wait, or that before that he had nothing.']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Position rules + the famous 了-rule',
      short: "了-rule",
      html: `
<h3>1 · Both live after the subject and time word, before the verb</h3>
<p class="zh" style="font-size:1.15rem">他<b class="hl">八点就</b>来了。 ✓ &nbsp;&nbsp; 他<b class="hl">八点才</b>来。 ✓ &nbsp;&nbsp; ✗ <s>就他八点来了</s>（unless you mean “only he”!）</p>
<p>The order is: Subject + time/amount + <span class="pill">就/才</span> + (modal) + verb. When 就 means “only/precisely”, it jumps in front of the noun it limits: <span class="zh"><b class="hl">就</b>他一个人知道</span> — different job, different seat.</p>
<h3>2 · The 了-rule: 才 sentences drop the sentence-final 了</h3>
<p class="zh" style="font-size:1.2rem">他八点<b class="hl">就</b>来<b class="hl">了</b>。 ✓ &nbsp;&nbsp;&nbsp; 他八点<b class="hl">才</b>来。 ✓ &nbsp;&nbsp;&nbsp; ✗ 他八点才来<s>了</s>。</p>
<p>Why? Sentence-final 了 celebrates a change: “new situation, done, hooray.” 才 does the opposite — it grumbles that the event came late. Grumbling and celebrating don't share a sentence, so 才 + verb almost never takes final 了.</p>
<div class="callout warn"><span class="co-title">⚠️ Fine print</span>
A 了 <b>inside</b> the sentence is fine when it marks completion of the first action: <span class="zh">我写<b class="hl">了</b>三个小时才写完</span> — that 了 belongs to 写了三个小时, not to the sentence end. The rule bans only the final, “hooray” 了 after the 才-verb.</div>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the error-spotting and word-arrangement tasks, <span class="zh">才…了</span> at the end of a sentence is a planted bug about 80% of the time. See 才 + final 了? Sound the alarm.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — which way does the slider tilt?",
      short: "Checkpoint",
      intro: "Six quick decisions. Ask yourself each time: is this sooner/less (就) or later/more (才)?",
      items: [
        { q: '<span class="zh">火车十点开，他九点半___到了车站。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">再</span>', '<span class="zh">还</span>'], a: 0, expl: "Half an hour before departure = earlier than necessary → 就. The final 了 is another hint: 才 would reject it." },
        { q: '<span class="zh">我们等了四十分钟，公共汽车___来。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">刚</span>', '<span class="zh">还</span>'], a: 1, expl: "A forty-minute wait = later than hoped → 才. And notice: no 了 after 来 — the 了-rule in action." },
        { q: 'Which sentence is correct?', choices: ['<span class="zh">他昨天很晚才睡了。</span>', '<span class="zh">他昨天很晚才睡。</span>', '<span class="zh">他昨天才很晚睡。</span>', '<span class="zh">他很晚昨天才睡。</span>'], a: 1, expl: "才-sentences drop the sentence-final 了, and the order is time (昨天很晚) + 才 + verb." },
        { q: '<span class="zh">我___到家___给你打电话，你别出门。</span>', choices: ['<span class="zh">一…就</span>', '<span class="zh">又…又</span>', '<span class="zh">先…才</span>', '<span class="zh">越…越</span>'], a: 0, expl: "'The moment I get home, I'll call' = zero gap between two actions → the welded pair 一…就." },
        { q: '<span class="zh">这本词典___二十块钱，你也买一本吧。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">都</span>', '<span class="zh">再</span>', '<span class="zh">还</span>'], a: 0, expl: "才 + number = 'a mere twenty kuai', surprisingly cheap. 都二十块钱 would complain it's expensive — the opposite sales pitch." },
        { q: '<span class="zh">只有努力练习，你___能学好发音。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">也</span>', '<span class="zh">都</span>'], a: 1, expl: "只有 pairs with 才, never 就: the strict condition unlocks the result. (只要 is the one that pairs with 就 — coming in Conditionals.)" }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — one bug per patient",
      short: "Error clinic",
      intro: "Each sentence contains exactly one 就/才 disease. Diagnose before you peek — every one of these mirrors a real HSK distractor.",
      items: [
        { wrong: "他八点才来了。", right: "他八点才来。", py: "Tā bā diǎn cái lái.", en: "He didn't come until eight.", expl: "The 了-rule: 才 grumbles about lateness, final 了 celebrates completion — they don't mix. Delete the 了." },
        { wrong: "这道题很难，我想了很久就想出来。", right: "这道题很难，我想了很久才想出来。", py: "Zhè dào tí hěn nán, wǒ xiǎng le hěn jiǔ cái xiǎng chūlái.", en: "This problem was hard — it took me a long time to work it out.", expl: "很久 = big effort before success → 才. 就 would claim it was quick, contradicting 很难 and 很久." },
        { wrong: "只有你去请他，他就会来。", right: "只有你去请他，他才会来。", py: "Zhǐyǒu nǐ qù qǐng tā, tā cái huì lái.", en: "He'll only come if you personally invite him.", expl: "只有 states a strict, hard-to-meet condition — its partner is 才. The easy-condition partner of 就 is 只要." },
        { wrong: "我一到家，给你就打电话。", right: "我一到家就给你打电话。", py: "Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà.", en: "I'll call you as soon as I get home.", expl: "就 stands at the head of the whole second verb phrase — before 给你打电话, not wedged inside it." },
        { wrong: "我就不去呢！", right: "我才不去呢！", py: "Wǒ cái bú qù ne!", en: "No way am I going!", expl: "Indignant refusal is 才's specialty: 才不…呢. 就不去 just states a stubborn plan — it can't carry the 呢-attitude." },
        { wrong: "他一毕业才找到了工作。", right: "他一毕业就找到了工作。", py: "Tā yí bìyè jiù zhǎodào le gōngzuò.", en: "He found a job right after graduating.", expl: "一…就 is a welded pair — 才 can never replace the 就. (If you want the 'only then' meaning, drop the 一: 毕业以后他才找到工作.)" },
        { wrong: "这么重要的事，你怎么现在就告诉我？", right: "这么重要的事，你怎么现在才告诉我？", py: "Zhème zhòngyào de shì, nǐ zěnme xiànzài cái gàosu wǒ?", en: "Something this important — why are you only telling me NOW?", expl: "The complaint is about lateness → 才. With 就 the sentence would scold him for telling you too early — not the situation." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — arrange the tiles",
      short: "Builder",
      intro: "HSK Writing part 1 format. Remember the seating chart: subject + time/amount + 就/才 + verb — and no final 了 after 才.",
      items: [
        { tiles: ["妹妹", "五岁", "就", "会", "骑自行车", "了"], py: "Mèimei wǔ suì jiù huì qí zìxíngchē le.", en: "My little sister could already ride a bike at five.", hint: "Early achievement → 就 …了 is welcome here." },
        { tiles: ["他", "昨天", "半夜", "才", "回家"], py: "Tā zuótiān bànyè cái huí jiā.", en: "He didn't get home until the middle of the night yesterday.", hint: "Late event → 才, and notice: no 了 tile at all.", alt: [["昨天", "半夜", "他", "才", "回家"]] },
        { tiles: ["我", "一", "下", "飞机", "就", "给你", "打电话"], py: "Wǒ yí xià fēijī jiù gěi nǐ dǎ diànhuà.", en: "I'll call you the moment I get off the plane.", hint: "一 + first verb, 就 + second verb phrase." },
        { tiles: ["只有", "多练习", "口语", "才能", "说得", "更流利"], py: "Zhǐyǒu duō liànxí kǒuyǔ cái néng shuō de gèng liúlì.", en: "Only by practicing speaking a lot can you become more fluent.", hint: "只有 + condition, 才能 + result." },
        { tiles: ["这台", "洗衣机", "用了", "十年", "才", "坏"], py: "Zhè tái xǐyījī yòng le shí nián cái huài.", en: "This washing machine lasted a full ten years before it broke.", hint: "Big duration before the event → 才. The 了 belongs to 用了十年, not the end." },
        { tiles: ["办公室里", "就", "他", "一个人", "会", "说", "法语"], py: "Bàngōngshì li jiù tā yí ge rén huì shuō Fǎyǔ.", en: "He's the only person in the office who speaks French.", hint: "就 = 'only' jumps in front of the noun it limits." },
        { tiles: ["我", "看了", "三遍", "才", "看懂", "这篇文章"], py: "Wǒ kàn le sān biàn cái kàn dǒng zhè piān wénzhāng.", en: "I had to read this article three times before I understood it.", hint: "Amount of effort (看了三遍) + 才 + result (看懂).", alt: [["这篇文章", "我", "看了", "三遍", "才", "看懂"]] }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 才 + 就 in one sentence: the contrast machine</h3>
<p><span class="zh">他<b class="hl">才</b>二十岁，<b class="hl">就</b>开了自己的公司。</span> — “He's ONLY twenty, and ALREADY runs his own company.” 才 shrinks the input, 就 inflates the output. HSK reading passages adore this frame.</p>
<h3>2 · 就 as “then” in if-sentences — old friend, new label</h3>
<p>You've written <span class="zh">如果明天下雨，我们<b class="hl">就</b>不去了</span> since HSK 3. That 就 is the same slider: once the condition holds, the result follows <i>without resistance</i>. The resistant version is 只有…才: <span class="zh">只有你去，他<b class="hl">才</b>会去</span> — “only if YOU go will he go”. The condition is a hard requirement; anything less and the result simply doesn't happen.</p>
<h3>3 · 才 = “just now / only just”</h3>
<p><span class="zh">你怎么<b class="hl">才</b>来就要走？</span> — “You only just got here and you're already leaving?” Before a bare verb, 才 can mean “a moment ago, barely”. Pair it with 就 for maximum drama.</p>
<h3>4 · 就 + 要…了 vs plain 就</h3>
<p><span class="zh">火车八点<b class="hl">就要</b>开<b class="hl">了</b></span> — “the train is about to leave (at eight)”. 就要…了 = imminent future, happily accepts a time word. Full treatment in Time adverbs; here just note it's 就's “sooner” instinct again.</p>
<h3>5 · 这才是 / 才怪</h3>
<p><span class="zh">这<b class="hl">才</b>是真正的问题。</span> — “THAT is the real problem.” 才是 dismisses what came before and crowns the real answer. Colloquial bonus: <span class="zh">他会准时到<b class="hl">才怪</b>呢！</span> — “He'll be on time? Yeah, right!”</p>
<div class="callout tip"><span class="co-title">💡 Listening hack</span>
In the listening section, 就 and 才 are often the ONLY difference between “the man is impressed” and “the man is annoyed”. Train your ear to catch the single syllable after the time word — it usually IS the answer.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions, real exam difficulty. The distractors are the mistakes your classmates actually make. Aim for 10+.",
      items: [
        { q: '<span class="zh">妹妹刚上小学，今年___六岁。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">就</span>', '<span class="zh">再</span>', '<span class="zh">都</span>'], a: 0, expl: "才 + age = 'only six' — surprisingly young. 都六岁了 would mean 'already six (so old!)' — the opposite attitude." },
        { q: '<span class="zh">别人都没听懂，___王老师一个人听懂了。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">就</span>', '<span class="zh">还</span>', '<span class="zh">又</span>'], a: 1, expl: "就 + noun = 'only / precisely that one'. Position is the clue: it stands before the subject 王老师, where 才 in this meaning can't go." },
        { q: '<span class="zh">我___喝咖啡___睡不着觉，所以下午从来不喝。</span>', choices: ['<span class="zh">一…就</span>', '<span class="zh">才…就</span>', '<span class="zh">一…才</span>', '<span class="zh">就…就</span>'], a: 0, expl: "Instant cause-and-effect habit = 一…就. The pair is fixed; 才 never substitutes for the 就 half." },
        { q: '<span class="zh">你怎么现在___来？大家都等了你半个多小时了！</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">刚</span>', '<span class="zh">先</span>'], a: 1, expl: "The reproach 'only now!' → 才. 刚 would neutrally report 'just arrived' with no blame — but 大家都等了半个多小时 is pure blame." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">他昨天十二点才睡觉。</span>', '<span class="zh">她十八岁就上大学了。</span>', '<span class="zh">我们等到十点他才来了。</span>', '<span class="zh">我一看见他就想笑。</span>'], a: 2, expl: "才来了 breaks the 了-rule — 才 + verb rejects the sentence-final 了. Correct: 我们等到十点他才来。" },
        { q: '<span class="zh">只有拿到HSK四级证书，你___能申请这个学校。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">也</span>', '<span class="zh">再</span>'], a: 1, expl: "只有…才: the certificate is a strict requirement. If the sentence had 只要 ('as long as'), THEN 就 would be right — the classic pairing trap." },
        { q: '<span class="zh">这双鞋打折以后___一百块，比那双便宜多了。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">都</span>', '<span class="zh">还</span>', '<span class="zh">再</span>'], a: 0, expl: "才 + price = 'a mere ¥100'. 都 would complain it's a lot; 还/再 don't quantify at all." },
        { q: '<span class="zh">他喝了三杯才醉。</span> What do we learn about him?', choices: ["He gets drunk very easily.", "He can really hold his drink.", "He refuses to drink.", "He drank less than usual."], a: 1, expl: "才 says three cups was MORE than expected to be needed — it took all of three to affect him. With 就, he'd be the lightweight." },
        { q: '<span class="zh">弟弟明年___十八岁，还不能考驾照呢。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">已经</span>', '<span class="zh">正在</span>'], a: 1, expl: "明年才十八岁 = 'won't even be 18 until next year' — later than needed, matching 还不能 ('still can't'). 就 would imply he's ahead of schedule, clashing with the second clause." },
        { q: 'Arrange: <span class="zh">开始 / 电影 / 五分钟 / 才</span>', choices: ['<span class="zh">电影才开始五分钟。</span>', '<span class="zh">电影五分钟才开始。</span>', '<span class="zh">才电影开始五分钟。</span>', '<span class="zh">电影开始才五分钟了。</span>'], a: 0, expl: "才开始五分钟 = 'has only been running five minutes' — 才 + verb + small duration. 电影五分钟才开始 would mean it started five minutes late-ish (odd), and 开始才五分钟了 plants the illegal 才…了." },
        { q: '<span class="zh">这篇课文很短，我十分钟___背下来了。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">总</span>', '<span class="zh">越</span>'], a: 0, expl: "很短 sets the expectation; ten minutes = quick, small effort → 就…了. 才 would grumble that ten minutes was a long slog — nonsense for a short text." },
        { q: '<span class="zh">妈妈说，只要先写完作业，___可以看电视。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">再</span>', '<span class="zh">都</span>'], a: 0, expl: "只要 ('as long as') marks an easy-to-meet condition, and its welded partner is 就. Swap in 只有 and the answer flips to 才 (see Q6) — the marker word decides, not the homework. Without either marker, both 就 and 才 would be sayable; the exam plants the marker precisely to force the choice." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">就 vs 才 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th class="zh">就</th><th class="zh">才</th></tr>
<tr><td>Slider</td><td>sooner · faster · easier · less</td><td>later · slower · harder · more</td></tr>
<tr><td>Time</td><td>八点<b class="hl">就</b>来了 — early!</td><td>八点<b class="hl">才</b>来 — so late!</td></tr>
<tr><td>Amount</td><td>一个小时<b class="hl">就</b>写完了</td><td>写了三个小时<b class="hl">才</b>写完</td></tr>
<tr><td>Fixed pairs</td><td>一…<b class="hl">就</b> · 只要…<b class="hl">就</b> · 如果…<b class="hl">就</b></td><td>只有…<b class="hl">才</b> · 先V完…<b class="hl">才</b>能</td></tr>
<tr><td>“Only”</td><td><b class="hl">就</b>他一个人 (precisely him)</td><td><b class="hl">才</b>五块钱 (a mere ¥5)</td></tr>
<tr><td>Attitude</td><td>我<b class="hl">就</b>来 (right away)</td><td><b class="hl">才</b>不去呢! · 这<b class="hl">才</b>是… (the REAL…)</td></tr>
<tr><td>Final 了?</td><td>✓ loves it: 就来<b class="hl">了</b></td><td>✗ rejects it: 才来<s>了</s></td></tr>
<tr><td>Position</td><td colspan="2">Subject + time/amount + 就/才 + (modal) + verb — “only” 就 may precede the noun</td></tr>
<tr><td>Combo</td><td colspan="2"><b class="hl">才</b>二十岁，<b class="hl">就</b>当经理了 — small input, big output: the exam's favorite sentence</td></tr>
</table></div>`
    }
  ]
});
