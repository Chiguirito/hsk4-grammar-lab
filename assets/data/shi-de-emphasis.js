/* HSK 4 Grammar Lab — 强调句: 是…的, 并, 难道, modal 的 */
registerPage({
  id: "shi-de-emphasis",
  zh: "**强调**句",
  title: "Emphasis: 是…的, 并, 难道 — pointing the spotlight",
  subtitle: "From HSK 3 you can say that something happened (了). HSK 4 asks you to spotlight HOW it happened: when, where, with whom, why. Add the push-back word 并 and the rhetorical 难道, and you have the exam's three favourite ways to add attitude to a sentence.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: the event is old news — the <span class="zh hl">detail</span> is the news',
      short: "Big idea",
      html: `
<p>Compare: <span class="zh">他来了</span> “He came” (new information: the coming). Now imagine you both already KNOW he came, and the question is <i>when</i>. Chinese wraps the known event in <span class="zh hl">是…的</span> and parks the spotlight right after <span class="zh">是</span>:</p>
<div class="pattern">Subj + <span class="slot">是</span> + 🔦 spotlight + V + <span class="slot">的</span><small>🔦 = time · place · manner · companion · purpose · doer — the detail under discussion</small></div>
<p><span class="zh">他<b class="hl">是昨天</b>来<b class="hl">的</b>。</span> — “It was <i>yesterday</i> that he came.” The frame whispers: <i>we both know he came; here's the missing detail.</i></p>
<div class="callout cmp"><span class="co-title">🇪🇸 🇬🇧 You already own this pattern</span>
English clefts do the same job: “It <b>was yesterday that</b> he came”, “It <b>was in Beijing that</b> I studied”. Spanish too: <i>“<b>Fue ayer cuando</b> llegó”</i>, <i>“<b>Fue en Pekín donde</b> estudié”</i>. 是…的 is simply the Chinese cleft — shorter and used far more often, especially in questions.</div>
<div class="callout rule"><span class="co-title">Two conditions, always</span>
① The event is in the <b>past</b>. ② Both speakers <b>already know it happened</b>. If either is missing, 是…的 is wrong — that's the door to the 了-contrast below.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "What can stand in the spotlight",
      short: "Spotlights",
      intro: "Six kinds of detail take the stage between 是 and the verb. The exam's question words (什么时候/在哪儿/怎么/跟谁) each match one row.",
      head: ["Spotlight", "Answers…", "Example"],
      rows: [
        ['Time', '<span class="zh">什么时候？</span>', '<span class="zh">我是<b class="hl">去年九月</b>来中国的。</span> <span class="py-hint">Wǒ shì qùnián jiǔyuè lái Zhōngguó de.</span>'],
        ['Place', '<span class="zh">在哪儿？</span>', '<span class="zh">这件毛衣是<b class="hl">在网上</b>买的。</span> <span class="py-hint">Zhè jiàn máoyī shì zài wǎngshàng mǎi de.</span>'],
        ['Manner / vehicle', '<span class="zh">怎么？</span>', '<span class="zh">我们是<b class="hl">坐飞机</b>去的。</span> <span class="py-hint">Wǒmen shì zuò fēijī qù de.</span>'],
        ['Companion', '<span class="zh">跟谁？</span>', '<span class="zh">她是<b class="hl">跟同事一起</b>去旅行的。</span> <span class="py-hint">Tā shì gēn tóngshì yìqǐ qù lǚxíng de.</span>'],
        ['Purpose', '<span class="zh">来/去做什么？</span>', '<span class="zh">我是<b class="hl">来面试</b>的。</span> <span class="py-hint">Wǒ shì lái miànshì de.</span>'],
        ['Doer', '<span class="zh">谁做的？</span>', '<span class="zh">这个蛋糕是<b class="hl">我妈妈</b>做的。</span> <span class="py-hint">Zhège dàngāo shì wǒ māma zuò de.</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — spotlight in action",
      short: "Examples",
      intro: "Tap to listen. In every sentence, ask yourself: what is already known, and what is the spotlight?",
      items: [
        { tag: "time", cn: "我**是**去年九月开始学汉语**的**。", py: "Wǒ shì qùnián jiǔyuè kāishǐ xué Hànyǔ de.", en: "It was last September that I started learning Chinese.", note: "That you study Chinese is old news — WHEN you started is the point." },
        { tag: "place", cn: "你的普通话真好！**是**在中国学**的**吗？", py: "Nǐ de pǔtōnghuà zhēn hǎo! Shì zài Zhōngguó xué de ma?", en: "Your Mandarin is great! Did you learn it in China?", note: "是…的吗? — yes/no question about the detail, not about the event." },
        { tag: "manner", cn: "路上太堵了，我们**是**骑自行车来**的**。", py: "Lùshang tài dǔ le, wǒmen shì qí zìxíngchē lái de.", en: "Traffic was terrible — we came by bike.", note: "Manner spotlight: the arriving is known, the HOW is news." },
        { tag: "doer", cn: "这张照片**是**谁照**的**？拍得真不错。", py: "Zhè zhāng zhàopiàn shì shéi zhào de? Pāi de zhēn búcuò.", en: "Who took this photo? It's really good.", note: "Doer spotlight — the photo obviously got taken; by whom is the question." },
        { tag: "purpose", cn: "别误会，他**是**来帮忙**的**，不**是**来检查**的**。", py: "Bié wùhuì, tā shì lái bāngmáng de, bú shì lái jiǎnchá de.", en: "Don't get the wrong idea — he came to help, not to inspect.", note: "Purpose spotlights pair beautifully: 是…的，不是…的." },
        { tag: "object", cn: "我**是**在北京学**的**汉语，所以有点儿北京口音。", py: "Wǒ shì zài Běijīng xué de Hànyǔ, suǒyǐ yǒudiǎnr Běijīng kǒuyīn.", en: "I learned my Chinese in Beijing, so I have a bit of a Beijing accent.", note: "The object 汉语 may sit AFTER 的 — 学的汉语. Very common in speech." },
        { tag: "object", cn: "这个消息你**是**听谁说**的**？", py: "Zhège xiāoxi nǐ shì tīng shéi shuō de?", en: "Who did you hear this news from?", note: "Or move the object up front as the topic: 这个消息 leads, the cleft follows." },
        { tag: "negative", cn: "我**不是**故意**的**，真对不起！", py: "Wǒ bú shì gùyì de, zhēn duìbuqǐ!", en: "I didn't do it on purpose — I'm so sorry!", note: "不是…的 — the set phrase every apology needs." },
        { tag: "negative", cn: "她**不是**坐高铁去**的**，**是**开车去**的**。", py: "Tā bú shì zuò gāotiě qù de, shì kāichē qù de.", en: "She didn't go by high-speed rail — she drove.", note: "Correcting a detail: negate one spotlight, supply the right one. 高铁 = high-speed train." },
        { tag: "omission", cn: "你（是）怎么知道**的**？——小王告诉我**的**。", py: "Nǐ (shì) zěnme zhīdào de? —— Xiǎo Wáng gàosu wǒ de.", en: "How did you find out? — Xiao Wang told me.", note: "In casual affirmative speech 是 often drops — the 的 alone carries the cleft." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "了 vs 是…的 — the contrast HSK 4 lives for",
      short: "了 vs 是…的",
      intro: "Both talk about past events, so learners mix them constantly. The test: is the EVENT the news, or a DETAIL of it?",
      tabs: [
        {
          label: "了 — did it happen?",
          html: `<p><span class="zh">了</span> announces that an event happened. Use it when the happening itself is the new information:</p>
<p class="zh" style="font-size:1.1rem">— 你吃饭<b class="hl">了</b>吗？ — 吃<b class="hl">了</b>。</p>
<p>“Did you eat?” — the eating is in question. Answering with 是…的 here would be bizarre: nobody asked for details of a known meal.</p>`,
          examples: [
            { cn: "他已经回国**了**。", py: "Tā yǐjīng huíguó le.", en: "He has gone back to his country.", note: "New event announced → 了." }
          ]
        },
        {
          label: "是…的 — the details, please",
          html: `<p>Once the event is established, follow-up questions and answers switch machines:</p>
<p class="zh" style="font-size:1.1rem">— 他回国了。 — 哦？<b class="hl">是</b>什么时候回<b class="hl">的</b>？ — <b class="hl">是</b>上个星期回<b class="hl">的</b>。</p>
<p>The exam loves this exact dialogue shape: first sentence with 了 (event), second with 是…的 (detail).</p>`,
          examples: [
            { cn: "——你的钱包找到了。 ——太好了！**是**在哪儿找到**的**？", py: "—— Nǐ de qiánbāo zhǎodào le. —— Tài hǎo le! Shì zài nǎr zhǎodào de?", en: "“Your wallet's been found.” “Great! Where was it found?”", note: "了 introduces the event, 是…的 digs into it — a matched pair." }
          ]
        },
        {
          label: "Never both",
          html: `<p>Because 是…的 already marks the event as past-and-known, it <b>refuses 了</b>:</p>
<p class="zh" style="font-size:1.15rem">✗ 我是昨天来<s>了</s>的。 &nbsp;&nbsp; ✗ 我是昨天来的<s>了</s>。 &nbsp;&nbsp; ✓ 我是昨天来<b class="hl">的</b>。</p>
<p>Quick decision test: could you naturally add “<i>It was … that …</i>” in English? Then 是…的, no 了. If the English is just “happened / did”, use 了.</p>`,
          examples: [
            { cn: "你**是**跟谁一起去**的**？（✗ 你跟谁一起去了的？）", py: "Nǐ shì gēn shéi yìqǐ qù de?", en: "Who did you go with?", note: "Question word about a detail of a known trip → cleft, and 了 stays home." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: "Fine mechanics: object position, negation, dropping 是, questions",
      short: "Mechanics",
      html: `
<h3>1 · Where does the object go?</h3>
<p>Two legal homes: after 的 (very colloquial, very common) or up front as the topic:</p>
<p class="zh" style="font-size:1.1rem">我是在大学学<b class="hl">的</b>经济。 &nbsp;＝&nbsp; 经济，我是在大学学<b class="hl">的</b>。</p>
<p>Both fine. What you can't do is leave the sentence with no 的 at all.</p>
<h3>2 · Negation is 不是 — never 没</h3>
<p class="zh" style="font-size:1.1rem">我<b class="hl">不是</b>一个人来的。 ✓ &nbsp;&nbsp; ✗ 我<s>没</s>是一个人来的 &nbsp;&nbsp; ✗ 我<s>没</s>一个人来的</p>
<p>You're not denying the event (he did come) — you're denying the detail. Detail-denial is 不是's job.</p>
<h3>3 · Dropping 是 — affirmative only</h3>
<p>In relaxed speech, affirmative 是 can vanish: <span class="zh">你（是）什么时候到的？——我（是）刚到的。</span> But in the negative it is <b>glued in place</b>, because 不 needs 是 to hold on to: <span class="zh">我<b class="hl">不是</b>坐地铁来的</span>, never ✗<span class="zh">我不坐地铁来的</span> (that means “I won't take the subway”!).</p>
<h3>4 · Question forms</h3>
<ul>
<li>Question word inside: <span class="zh">你是<b class="hl">怎么</b>来的？</span></li>
<li>Yes/no about a detail: <span class="zh">你是坐飞机来的<b class="hl">吗</b>？</span></li>
<li>A-not-A: <span class="zh">你<b class="hl">是不是</b>昨天来的？</span></li>
</ul>
<div class="callout warn"><span class="co-title">⚠️ Don't stack question machines</span>
A question word and 吗 can't share one sentence: ✗<span class="zh">你是什么时候来的吗？</span> Pick one engine per question.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions on the core machine before we add 并, 难道 and modal 的.",
      items: [
        { q: '<span class="zh">A：我上个月去上海了。 B：真的吗？你是怎么去___？</span>', choices: ['<span class="zh">了</span>', '<span class="zh">的</span>', '<span class="zh">的了</span>', '<span class="zh">吗</span>'], a: 1, expl: "The trip is established (去了); B asks about a detail (怎么) → 是…的 frame, closed by 的. Never 的了 — the two don't stack." },
        { q: 'Which question asks whether the event happened at all?', choices: ['你是什么时候毕业的？', '你毕业了吗？', '你是在哪儿毕业的？', '你是不是去年毕业的？'], a: 1, expl: "了 + 吗 questions the event itself. The other three presuppose the graduation and probe details — that's 是…的 territory." },
        { q: '“I didn\'t come by taxi.” Which is correct?', choices: ['我没是坐出租车来的。', '我不是坐出租车来的。', '我不坐出租车来的。', '我没坐出租车来。的'], a: 1, expl: "Detail-denial = 不是…的. 没 belongs to event-denial, and dropping 是 in the negative changes the meaning to future refusal." },
        { q: 'Where can <span class="zh">汉语</span> go? <span class="zh">我是在台湾学的。</span>', choices: ['<span class="zh">我是在台湾学的汉语。</span>', '<span class="zh">我是在台湾汉语学的。</span>', '<span class="zh">我是汉语在台湾学的。</span> ', '<span class="zh">我是在台湾学汉语。</span>'], a: 0, expl: "The object may follow 的: 学的汉语. (Topicalizing works too — 汉语，我是在台湾学的 — but the versions here scramble the inside of the cleft or lose 的.)" },
        { q: 'In which sentence can <span class="zh">是</span> be dropped?', choices: ['<span class="zh">我（是）昨天到的。</span>', '<span class="zh">我不（是）故意的。</span>', '<span class="zh">他不（是）一个人去的。</span>', "none of them"], a: 0, expl: "是 drops only in the affirmative. In negatives, 不 must hold on to 是 — drop it and 不 attaches to the verb with a whole new meaning." },
        { q: '<span class="zh">这些菜都是我自己___的。</span>', choices: ['<span class="zh">做</span>', '<span class="zh">做了</span>', '<span class="zh">做过</span>', '<span class="zh">在做</span>'], a: 0, expl: "Inside 是…的 the verb stays bare — 的 alone carries the past. 了/过 would double-mark it." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One bug per patient. All of them are 了/是/的 confusions the exam recycles every year.",
      items: [
        { wrong: "你是什么时候来了？", right: "你是什么时候来的？", py: "Nǐ shì shénme shíhou lái de?", en: "When was it that you came?", expl: "是 opened a cleft, so it must close with 的. 了 answers 'did it happen?' — the wrong question here." },
        { wrong: "我昨天是来的。", right: "我是昨天来的。", py: "Wǒ shì zuótiān lái de.", en: "It was yesterday that I came.", expl: "The spotlight must stand right after 是. 昨天 left outside the frame means the emphasis machine grabs nothing." },
        { wrong: "他不坐飞机来的，是坐火车来的。", right: "他不是坐飞机来的，是坐火车来的。", py: "Tā bú shì zuò fēijī lái de, shì zuò huǒchē lái de.", en: "He didn't come by plane — he came by train.", expl: "是 may drop only in the affirmative. In the negative, 不是 is welded together; bare 不坐 turns the sentence into a refusal." },
        { wrong: "我是学的汉语在北京。", right: "我是在北京学的汉语。", py: "Wǒ shì zài Běijīng xué de Hànyǔ.", en: "I learned my Chinese in Beijing.", expl: "The place phrase belongs in the spotlight before the verb; only the object may trail after 的." },
        { wrong: "我们是下个月结婚的。", right: "我们下个月结婚。", py: "Wǒmen xià ge yuè jiéhūn.", en: "We're getting married next month.", expl: "是…的 spotlights details of PAST, known events. Future plans use a plain sentence — the classic exam trap of clefting the future." },
        { wrong: "我是昨天买的了这本书。", right: "我是昨天买的这本书。", py: "Wǒ shì zuótiān mǎi de zhè běn shū.", en: "It was yesterday that I bought this book.", expl: "的 and 了 never stack in a cleft — 的 alone marks the completed, known event." },
        { wrong: "你是在哪儿学的太极拳吗？", right: "你是在哪儿学的太极拳？", py: "Nǐ shì zài nǎr xué de tàijíquán?", en: "Where did you learn tai chi?", expl: "哪儿 already makes it a question — adding 吗 double-loads it. One question engine per sentence." },
        { wrong: "这个问题并很复杂。", right: "这个问题并不复杂。", py: "Zhège wèntí bìng bù fùzá.", en: "This problem isn't actually complicated.", expl: "并 only teams up with negation: 并不 / 并没(有). It exists to contradict an expectation — there is no affirmative ✗并很." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Assemble the cleft: subject → 是 → spotlight → verb → 的. Watch where the object hides.",
      items: [
        { tiles: ["他", "是", "去年", "来", "中国", "的"], py: "Tā shì qùnián lái Zhōngguó de.", en: "It was last year that he came to China.", hint: "Time spotlight straight after 是.", alt: [["他", "是", "去年", "来", "的", "中国"]] },
        { tiles: ["这些", "饺子", "是", "我奶奶", "包", "的"], py: "Zhèxiē jiǎozi shì wǒ nǎinai bāo de.", en: "These dumplings were made by my grandma.", hint: "Doer spotlight: 是 + person + verb + 的." },
        { tiles: ["你", "是", "怎么", "知道", "这件事", "的"], py: "Nǐ shì zěnme zhīdào zhè jiàn shì de?", en: "How did you find out about this?", hint: "Question word sits in the spotlight slot.", alt: [["这件事", "你", "是", "怎么", "知道", "的"]] },
        { tiles: ["我", "不是", "故意", "迟到", "的"], py: "Wǒ bú shì gùyì chídào de.", en: "I wasn't late on purpose.", hint: "Negative cleft: 不是 stays welded." },
        { tiles: ["我", "是", "在网上", "认识", "的", "他"], py: "Wǒ shì zài wǎngshàng rènshi de tā.", en: "I met him online.", hint: "The object may follow 的 — colloquial and exam-approved.", alt: [["我", "是", "在网上", "认识", "他", "的"]] },
        { tiles: ["你们", "是不是", "坐地铁", "来", "的"], py: "Nǐmen shì bu shì zuò dìtiě lái de?", en: "Did you come by subway?", hint: "A-not-A on the 是 itself." },
        { tiles: ["放心", "吧", "他", "不会", "忘记", "的"], py: "Fàngxīn ba, tā bú huì wàngjì de.", en: "Relax — he won't forget.", hint: "Preview of modal 的: 会/不会 + V + 的 = reassuring certainty." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "tabs",
      title: "The friends: 并, 难道, and the reassuring 的",
      short: "并·难道·的",
      intro: "Three more emphasis tools, each with its own personality: the myth-buster, the eyebrow-raiser, and the promise-maker.",
      tabs: [
        {
          label: "并 + 不/没 — the myth-buster",
          html: `<p><span class="zh">并</span> sits directly before <span class="zh">不</span> or <span class="zh">没(有)</span> and says: <b>“contrary to what you'd expect…”</b>. Plain <span class="zh">不难</span> states a fact; <span class="zh"><b class="hl">并</b>不难</span> pushes back against the belief that it IS hard.</p>
<div class="pattern">(虽然/其实/大家都以为…) + Subj + <span class="slot">并</span> + 不/没 + …<small>并 must touch the negation — nothing squeezes in between</small></div>
<div class="callout cmp"><span class="co-title">🇪🇸 Exactly “no es que…” energy</span>
Spanish <i>“<b>en realidad no</b> es difícil”</i> / <i>“no es que sea difícil”</i>, German <i>“ist <b>gar/keineswegs</b> nicht schwer”</i> — a negation that corrects an assumption. That flavour is the whole job of 并.</div>`,
          examples: [
            { cn: "大家都说这个工作很累，其实**并**不累。", py: "Dàjiā dōu shuō zhège gōngzuò hěn lèi, qíshí bìng bú lèi.", en: "Everyone says this job is exhausting — actually it isn't at all.", note: "其实/虽然/但是 love to introduce a 并 clause." },
            { cn: "我等了他一个小时，可是他**并**没有来。", py: "Wǒ děng le tā yí ge xiǎoshí, kěshì tā bìng méiyǒu lái.", en: "I waited an hour for him, but he never came.", note: "并没有 = 'contrary to what was agreed/expected, it didn't happen'." },
            { cn: "价钱贵**并**不说明质量好。", py: "Jiàqian guì bìng bù shuōmíng zhìliàng hǎo.", en: "A high price doesn't actually mean good quality.", note: "并不 + verb (说明/知道/喜欢) works just like 并不 + adjective." }
          ]
        },
        {
          label: "难道…吗 — the eyebrow-raiser",
          html: `<p><span class="zh">难道</span> turns a question into rhetorical disbelief: <b>“don't tell me…?!”</b> The speaker already knows the answer and wants you to admit it. It almost always ends in <span class="zh">吗</span> (or at least a question tone), and the expected answer is the <b>opposite</b> of what's asked.</p>
<div class="pattern">难道 + statement + <span class="slot">吗</span>？<small>难道你忘了吗？ = you obviously DID forget — admit it!</small></div>`,
          examples: [
            { cn: "**难道**你忘了今天是我的生日**吗**？", py: "Nándào nǐ wàng le jīntiān shì wǒ de shēngrì ma?", en: "Don't tell me you forgot today is my birthday?!", note: "Not a real question — it's an accusation in question costume." },
            { cn: "都十二点了，**难道**你还不困**吗**？", py: "Dōu shí'èr diǎn le, nándào nǐ hái bù kùn ma?", en: "It's already midnight — how can you not be sleepy?", note: "难道 + negative = 'surely you ARE'. The rhetoric flips the polarity." },
            { cn: "这么简单的道理，**难道**你不明白**吗**？", py: "Zhème jiǎndān de dàolǐ, nándào nǐ bù míngbai ma?", en: "Such a simple point — surely you understand it?", note: "Reading passages use 难道 to signal the author's real opinion. Free points if you spot it." }
          ]
        },
        {
          label: "Modal 的 — the promise-maker",
          html: `<p>A sentence-final <span class="zh">的</span> can also mark <b>confident reassurance about the future</b> — no 是…的 cleft, no past event. It typically rides on <span class="zh">会…的</span>:</p>
<div class="pattern">Subj + <span class="slot">会</span> + V + <span class="slot">的</span><small>certainty + warmth: “trust me, it WILL…”</small></div>
<p>Without 的, <span class="zh">他会来</span> is a cool prediction. With it — <span class="zh">他会来<b class="hl">的</b></span> — you're patting someone's shoulder. This is why doctors, parents and best friends end every sentence with 的.</p>`,
          examples: [
            { cn: "别担心，一切都会好起来**的**。", py: "Bié dānxīn, yíqiè dōu huì hǎo qǐlái de.", en: "Don't worry — everything is going to be all right.", note: "The single most comforting sentence in Chinese." },
            { cn: "我说到做到，不会骗你**的**。", py: "Wǒ shuō dào zuò dào, bú huì piàn nǐ de.", en: "I keep my word — I won't lie to you.", note: "不会…的 = firm promise. 骗 piàn = to deceive." },
            { cn: "只要你每天练习，你的发音会越来越好**的**。", py: "Zhǐyào nǐ měitiān liànxí, nǐ de fāyīn huì yuèláiyuè hǎo de.", en: "As long as you practice daily, your pronunciation will get better and better.", note: "How to tell it apart from 是…的: the event is FUTURE and there's a 会. Different machine, same 的." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · Three 的-machines — sort before you answer</h3>
<p>Sentence-final 的 has three jobs. Check the time frame first: <b>past + known event</b> → cleft (<span class="zh">是昨天来的</span>); <b>future + 会</b> → reassurance (<span class="zh">会来的</span>); <b>description</b> → plain 的-phrase (<span class="zh">这本书是新的</span> “the book is new” — no event at all).</p>
<h3>2 · 是…的 without a verb of motion still needs a known event</h3>
<p><span class="zh">这件事是他先说的。</span> — “HE brought it up first.” Works for arguments, decisions, payments: <span class="zh">昨天的饭钱是我付的。</span></p>
<h3>3 · 并 can't start a rebuttal from nowhere</h3>
<p>并 needs a shadow to box against — something said, believed or hoped. In choice items, look for 都以为 / 听说 / 虽然 in the first half; that's your green light for 并不/并没 in the second.</p>
<h3>4 · 难道 plays well with 还 and 会</h3>
<p><span class="zh">难道你<b class="hl">还</b>想再等十年吗？</span> — “you don't SERIOUSLY want to wait another ten years?” 难道 + 还/会/真的 is the exam's favourite way to dial the rhetoric up.</p>
<h3>5 · Answering a 是…的 question — echo the frame</h3>
<p><span class="zh">— 你是一个人来的吗？ — 不，我是跟朋友一起来的。</span> The answer reuses 是…的. Replying with a bare 了-sentence sounds like you changed the subject.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Word-arrangement task: a 是 tile + a sentence-final 的 tile + a past-time word = build a cleft. Glue 是 + time/place/manner first, verb next, 的 last. If you also see 会, it's the promise machine instead — no spotlight needed.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions mixing all three machines — clefts, 并, 难道, plus the reassuring 的. Aim for 10+.",
      items: [
        { q: '<span class="zh">A：好久不见！你什么时候回国的？ B：我___。</span>', choices: ['<span class="zh">是上个月回来的</span>', '<span class="zh">上个月回来了的</span>', '<span class="zh">是上个月回来了</span>', '<span class="zh">回来是上个月的</span>'], a: 0, expl: "Echo the cleft: 是 + 上个月 (spotlight) + 回来 + 的. Options with 了 double-mark the past; D strands the spotlight outside the frame." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">这个箱子是他搬上来的。</span>', '<span class="zh">我们是2019年认识的。</span>', '<span class="zh">他是明天出发的。</span>', '<span class="zh">她是在银行工作时认识丈夫的。</span>'], a: 2, expl: "是…的 requires a PAST, known event. 明天出发 is future → plain 他明天出发. The other three all spotlight details of past events." },
        { q: '<span class="zh">你的汉字写得这么漂亮，是跟___学的？</span>', choices: ['<span class="zh">谁</span>', '<span class="zh">谁的</span>', '<span class="zh">什么</span>', '<span class="zh">哪儿</span>'], a: 0, expl: "跟 + person + 学 'learn from someone' → the question word for a person is 谁. The cleft asks for the teacher, a known-event detail." },
        { q: '<span class="zh">我___没想到会在这儿遇到你！</span>', choices: ['<span class="zh">并</span>', '<span class="zh">真</span>', '<span class="zh">难道</span>', '<span class="zh">是</span>'], a: 1, expl: "Careful — 并没想到 exists, but 并 rebuts someone's assumption, and nobody assumed anything here; this is pure surprise → 真没想到 'I really didn't expect'. Classic 并-overuse trap." },
        { q: '<span class="zh">大家都以为他俩早就认识，其实他们___见过面。</span>', choices: ['<span class="zh">并没</span>', '<span class="zh">并不</span>', '<span class="zh">难道没</span>', '<span class="zh">不是</span>'], a: 0, expl: "以为 sets up a false belief → 并 + negation. The event ('having met') is denied with 没, not 不: 并没见过面." },
        { q: '<span class="zh">___你一点儿也不想家吗？</span>', choices: ['<span class="zh">难道</span>', '<span class="zh">并</span>', '<span class="zh">是不是</span>', '<span class="zh">怎么样</span>'], a: 0, expl: "Rhetorical disbelief ending in 吗 → 难道…吗: 'don't tell me you don't miss home at all?' 并 needs a negation directly after it, and 是不是 can't co-exist with 吗." },
        { q: '<span class="zh">别哭了，他会回来___。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">了</span>', '<span class="zh">过</span>', '<span class="zh">吗</span>'], a: 0, expl: "会 + V + 的 = confident reassurance about the future. 了 after 会回来 would clash with the modal; this is the promise machine, not the cleft." },
        { q: '<span class="zh">——这么重要的会议，难道你忘了吗？</span> The speaker believes:', choices: ["the listener probably remembered", "the listener clearly forgot", "the meeting was cancelled", "he himself forgot"], a: 1, expl: "难道 X 吗 asserts X while pretending to ask. 难道你忘了吗 = 'you obviously forgot!' — rhetorical accusation, not information-seeking." },
        { q: 'Choose the correct sentence:', choices: ['<span class="zh">我是昨天给你打的电话。</span>', '<span class="zh">我是昨天给你打电话。</span>', '<span class="zh">我昨天是给你打电话的了。</span>', '<span class="zh">我是昨天给你打了的电话。</span>'], a: 0, expl: "Cleft with object after 的: 打的电话. B lost the 的 (frame never closes); C and D stack 了 onto 的." },
        { q: '<span class="zh">A：你怎么了？ B：没什么，我___。</span> B tripped by accident. Choose:', choices: ['<span class="zh">不是故意的</span>', '<span class="zh">并不故意</span>', '<span class="zh">难道故意吗</span>', '<span class="zh">是故意的</span>'], a: 0, expl: "不是故意的 'it wasn't on purpose' — the set negative cleft. 并 can't attach to a bare adjective phrase without 不+verb structure making sense, and D means the opposite." },
        { q: 'Which reply matches the question? <span class="zh">——你们是在哪儿认识的？</span>', choices: ['<span class="zh">——我们认识了三年。</span>', '<span class="zh">——是朋友介绍的，在一个晚会上。</span>', '<span class="zh">——我们认识了。</span>', '<span class="zh">——我们会认识的。</span>'], a: 1, expl: "The question probes a detail (where) of a known event → answer inside the same 是…的 frame: 是朋友介绍的. A answers 'how long', C answers 'did it happen', D is a future promise." },
        { q: 'Arrange: <span class="zh">的 / 是 / 这个办法 / 想出来 / 谁</span>', choices: ['<span class="zh">这个办法是谁想出来的？</span>', '<span class="zh">谁是这个办法想出来的？</span>', '<span class="zh">这个办法谁是想出来的？</span>', '<span class="zh">是谁这个办法想出来的？</span>'], a: 0, expl: "Topic first (这个办法), then the cleft spotlights the doer: 是 + 谁 + 想出来 + 的. The doer must stand between 是 and the verb." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">强调句 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Machine</th><th>Pattern</th><th>Job</th></tr>
<tr><td>Cleft</td><td>Subj + <b class="hl">是</b> + 🔦 + V + <b class="hl">的</b></td><td>Spotlight time/place/manner/companion/purpose/doer of a PAST, known event</td></tr>
<tr><td>Object</td><td>…学<b class="hl">的</b>汉语 ／ 汉语(topic)…学的</td><td>Object after 的, or fronted as topic</td></tr>
<tr><td>Negative</td><td><b class="hl">不是</b>…的 (是 never drops!)</td><td>Deny the detail: 不是坐飞机来的</td></tr>
<tr><td>Questions</td><td>是 + QW…的 · …的吗 · 是不是…的</td><td>Never QW + 吗 together</td></tr>
<tr><td>vs 了</td><td>了 = did it happen · 是…的 = the details</td><td>✗是…来<b>了</b>的 — 的 and 了 never stack</td></tr>
<tr><td>并</td><td>(其实/都以为…) + <b class="hl">并</b> + 不/没…</td><td>Contradict an expectation — “actually not”</td></tr>
<tr><td>难道</td><td><b class="hl">难道</b>…<b class="hl">吗</b>？</td><td>Rhetorical “don't tell me…?!” — answer is the opposite</td></tr>
<tr><td>Modal 的</td><td>会 + V + <b class="hl">的</b></td><td>Warm certainty about the future: 会好起来的</td></tr>
<tr><td>☠️ Traps</td><td colspan="2">future + 是…的 ✗ · 的+了 ✗ · dropping 是 in negatives ✗ · 并 without negation ✗</td></tr>
</table></div>`
    }
  ]
});
