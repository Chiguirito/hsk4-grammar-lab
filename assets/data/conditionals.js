/* HSK 4 Grammar Lab — 条件关系 (conditionals: sufficient, necessary, unconditional) */
registerPage({
  id: "conditionals",
  zh: "**条件**关系",
  title: "Conditionals — which condition is enough?",
  subtitle: "HSK 3 gave you 如果…就. HSK 4 turns conditions into a logic exam: is the condition ENOUGH (只要), REQUIRED (只有), the only escape (除非), a worst case (万一) — or does the result hold NO MATTER WHAT (不管)? The 只要/只有 choice is the single most-tested item in this whole unit.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: <span class="zh hl">只要</span> = sufficient, <span class="zh hl">只有</span> = necessary',
      short: "Big idea",
      html: `
<p>You write code, so let's talk logic gates. Every conditional connector answers one question: <b>what's the relationship between condition A and result B?</b></p>
<div class="pattern"><span class="slot">只要</span> A ，就 B<small>A is SUFFICIENT: A ⇒ B. A alone guarantees B. Other roads to B may also exist.</small></div>
<div class="pattern"><span class="slot">只有</span> A ，才 B<small>A is NECESSARY: B ⇒ A, i.e. no A → no B. Without A, B is impossible — but A alone might not be enough.</small></div>
<p>Feel the difference on one sentence pair:</p>
<ul>
<li><span class="zh"><b class="hl">只要</b>你说，我<b class="hl">就</b>听。</span> — “You speaking is all it takes — I'll listen.” (generous, easy)</li>
<li><span class="zh"><b class="hl">只有</b>你说，我<b class="hl">才</b>听。</span> — “I listen to you and <i>nobody else</i>.” (restrictive, demanding)</li>
</ul>
<p>Notice the partners are not interchangeable: <span class="zh">只要…<b class="hl">就</b></span> (“then easily”), <span class="zh">只有…<b class="hl">才</b></span> (“only then”). This matches what you learned in 就 vs 才: <span class="zh">就</span> flags “earlier/easier than expected”, <span class="zh">才</span> flags “later/harder”.</p>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 🇪🇸 The same fork in your languages</span>
English: <i>as long as</i> (只要) vs <i>only if</i> (只有). German: <i>solange/wenn nur</i> vs <i>nur wenn</i>. Spanish: <i>con tal de que / siempre que</i> vs <i>solo si</i>. In every language the “only” word signals necessity — 只有 literally contains 只 “only”.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The cloze section plants 只要/只有 blanks constantly, and the wrong partner (✗只要…才 / ✗只有…就) is the most reliable wrong-answer generator in the reading section. Nail the pairs and you get free points.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The conditional family at a glance",
      short: "Family table",
      intro: "Seven tools sorted by logic. The 'partner' column is not decoration — mismatched partners are exactly what wrong answers look like.",
      head: ["Pattern", "Logic", "Partner", "Example"],
      rows: [
        ['<span class="zh">如果 / 要是 … (的话)</span> <span class="py-hint">rúguǒ / yàoshi</span>', 'neutral “if” — no claim about sufficiency', '<span class="zh">就</span>', '<span class="zh">如果下雨，我们就不去了。</span> <span class="py-hint">Rúguǒ xià yǔ, wǒmen jiù bú qù le.</span>'],
        ['<span class="zh">只要…</span>', 'sufficient: A ⇒ B', '<span class="zh">就</span>', '<span class="zh">只要努力，就会进步。</span> <span class="py-hint">Zhǐyào nǔlì, jiù huì jìnbù.</span>'],
        ['<span class="zh">只有…</span>', 'necessary: ¬A ⇒ ¬B', '<span class="zh">才</span>', '<span class="zh">只有努力，才会成功。</span> <span class="py-hint">Zhǐyǒu nǔlì, cái huì chénggōng.</span>'],
        ['<span class="zh">除非…</span>', '“unless” — the only escape hatch', '<span class="zh">否则 / 要不然</span>, or <span class="zh">才</span>', '<span class="zh">除非你去请，否则他不会来。</span> <span class="py-hint">Chúfēi nǐ qù qǐng, fǒuzé tā bú huì lái.</span>'],
        ['<span class="zh">万一…</span>', '“in the unlikely bad case that…”', '<span class="zh">就</span>', '<span class="zh">万一堵车，你就坐地铁。</span> <span class="py-hint">Wànyī dǔchē, nǐ jiù zuò dìtiě.</span>'],
        ['<span class="zh">不管 / 无论…</span>', 'unconditional: B for ALL values of A', '<span class="zh">都 / 也</span>', '<span class="zh">不管多贵，我都要买。</span> <span class="py-hint">Bùguǎn duō guì, wǒ dōu yào mǎi.</span>'],
        ['<span class="zh">再…也</span>', '“no matter how X” (one adjective/verb)', '<span class="zh">也</span>', '<span class="zh">再贵也要买。</span> <span class="py-hint">Zài guì yě yào mǎi.</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — hear the logic",
      short: "Examples",
      intro: "Tap to listen. For each one, ask the engineer's question: sufficient, necessary, unless, worst case, or all cases?",
      items: [
        { tag: "只要", cn: "**只要**你按时吃药，感冒很快**就**会好的。", py: "Zhǐyào nǐ ànshí chī yào, gǎnmào hěn kuài jiù huì hǎo de.", en: "As long as you take the medicine on time, your cold will get better quickly.", note: "Taking the medicine is enough — sufficient condition, partner 就." },
        { tag: "只要②", cn: "**只要**一有空，他**就**去踢足球。", py: "Zhǐyào yì yǒu kòng, tā jiù qù tī zúqiú.", en: "Whenever he has any free time at all, he goes to play soccer.", note: "只要…就 also covers habitual 'whenever' — any occurrence of A triggers B." },
        { tag: "只有", cn: "**只有**多听多说，你的口语**才**能提高。", py: "Zhǐyǒu duō tīng duō shuō, nǐ de kǒuyǔ cái néng tígāo.", en: "Only by listening and speaking a lot can your spoken Chinese improve.", note: "No listening & speaking → no progress. Necessary condition, partner 才." },
        { tag: "只有②", cn: "这个问题**只有**王教授**才**能回答。", py: "Zhège wèntí zhǐyǒu Wáng jiàoshòu cái néng huídá.", en: "Only Professor Wang can answer this question.", note: "只有 + noun works too — 才 still follows the subject of the second half." },
        { tag: "除非", cn: "**除非**你亲自去道歉，**否则**他不会原谅你。", py: "Chúfēi nǐ qīnzì qù dàoqiàn, fǒuzé tā bú huì yuánliàng nǐ.", en: "Unless you go apologize in person, he won't forgive you.", note: "除非 A，否则 not-B: A is the only escape from not-B." },
        { tag: "除非…才", cn: "**除非**降价，我**才**会考虑买这辆车。", py: "Chúfēi jiàngjià, wǒ cái huì kǎolǜ mǎi zhè liàng chē.", en: "Only if they cut the price will I consider buying this car.", note: "除非…才 ≈ a stronger 只有…才. 降价 (jiàngjià) = lower the price." },
        { tag: "如果", cn: "**如果**明天天气好**的话**，我们**就**去公园野餐。", py: "Rúguǒ míngtiān tiānqì hǎo dehuà, wǒmen jiù qù gōngyuán yěcān.", en: "If the weather's nice tomorrow, we'll picnic in the park.", note: "的话 is an optional tail for 如果/要是 — using both is fine, using 的话 alone also works: 明天天气好的话…" },
        { tag: "要是", cn: "**要是**你没时间**的话**，我们可以改天再见。", py: "Yàoshi nǐ méi shíjiān dehuà, wǒmen kěyǐ gǎitiān zài jiàn.", en: "If you don't have time, we can meet another day.", note: "要是 = colloquial 如果. Same grammar, chattier flavor." },
        { tag: "万一", cn: "**万一**我赶不上火车，你们**就**先出发吧。", py: "Wànyī wǒ gǎn bu shàng huǒchē, nǐmen jiù xiān chūfā ba.", en: "In case I miss the train, you all set off first.", note: "万一 = 如果 + low probability + bad outcome. You plan around it, you don't hope for it." },
        { tag: "要不然", cn: "快点儿走吧，**要不然**我们**就**赶不上电影了。", py: "Kuài diǎnr zǒu ba, yàobùrán wǒmen jiù gǎn bu shàng diànyǐng le.", en: "Hurry up, or else we'll miss the movie.", note: "否则/要不然 also work standalone: '(do X,) or else…'. 要不然 is the spoken one." },
        { tag: "不管", cn: "**不管**工作多忙，他**都**坚持每天锻炼。", py: "Bùguǎn gōngzuò duō máng, tā dōu jiānchí měitiān duànliàn.", en: "No matter how busy work is, he still exercises every day.", note: "不管-clause needs an open variable — here the question word 多." },
        { tag: "无论", cn: "**无论**你同意不同意，我**都**决定去留学了。", py: "Wúlùn nǐ tóngyì bu tóngyì, wǒ dōu juédìng qù liúxué le.", en: "Whether you agree or not, I've decided to study abroad.", note: "A-not-A (同意不同意) is another legal 'open variable'. 无论 = written 不管." },
        { tag: "再…也", cn: "这件衣服**再**便宜，我**也**不会买。", py: "Zhè jiàn yīfu zài piányi, wǒ yě bú huì mǎi.", en: "No matter how cheap this piece of clothing gets, I won't buy it.", note: "再 + adjective + 也 = 'no matter how Adj' — a compact one-variable 不管." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "The rest of the toolbox — 如果 upgrades, 除非, 万一, 否则",
      short: "Toolbox",
      intro: "You know 如果…就 from HSK 3. Here's what HSK 4 adds around it.",
      tabs: [
        {
          label: "如果/要是…的话",
          html: `<p>Three upgrades on your HSK 3 “if”:</p>
<ul>
<li><b>要是</b> = colloquial 如果 — dialogues and Listening love it.</li>
<li><b>的话</b> is a tail marker: <span class="zh">如果…的话 / 要是…的话 / …的话</span> alone. All fine; 的话 alone is very spoken.</li>
<li>The result clause takes <span class="zh">就</span> after its subject: <span class="zh">如果你去，我<b class="hl">就</b>去。</span></li>
</ul>`,
          examples: [
            { cn: "你不想去**的话**，**就**早点儿告诉我。", py: "Nǐ bù xiǎng qù dehuà, jiù zǎodiǎnr gàosu wǒ.", en: "If you don't want to go, tell me early.", note: "No 如果 at all — 的话 carries the whole 'if'." },
            { cn: "**要是**我是你，我**就**先把工作找好。", py: "Yàoshi wǒ shì nǐ, wǒ jiù xiān bǎ gōngzuò zhǎo hǎo.", en: "If I were you, I'd line up a job first.", note: "Counterfactuals need no special mood in Chinese — context does it. (Spanish speakers: no subjunctive to conjugate. Enjoy.)" }
          ]
        },
        {
          label: "除非…否则/才",
          html: `<p><span class="zh">除非</span> names <b>the only escape hatch</b>. Two frames:</p>
<ul>
<li><span class="zh">除非 A，否则/要不然 + bad B</span> — “unless A, or else B”.</li>
<li><span class="zh">除非 A，(Subj) 才 B</span> — “only if A will B happen”.</li>
</ul>
<p>Logic check: <span class="zh">除非你请我，我才去</span> ≡ <span class="zh">你不请我，我就不去</span>. Same truth table, different packaging.</p>`,
          examples: [
            { cn: "**除非**下大雨，**否则**比赛不会取消。", py: "Chúfēi xià dàyǔ, fǒuzé bǐsài bú huì qǔxiāo.", en: "Unless it pours, the match won't be cancelled.", note: "否则 = formal; 要不然 = spoken. Both start the second clause." },
            { cn: "**除非**他亲口告诉我，我**才**会相信。", py: "Chúfēi tā qīnkǒu gàosu wǒ, wǒ cái huì xiāngxìn.", en: "I'll only believe it if he tells me himself.", note: "除非…才 — note 才 sits after 我, never at the head of the clause." }
          ]
        },
        {
          label: "万一 worst case",
          html: `<p><span class="zh">万一</span> = literally “one in ten thousand” — an <b>unlikely and unwanted</b> case you still plan for. Compare:</p>
<ul>
<li><span class="zh">如果他来…</span> — neutral: maybe he comes, fine either way.</li>
<li><span class="zh">万一他来…</span> — hopefully not, but IF he does, here's plan B.</li>
</ul>
<p>So ✗<span class="zh">万一你中奖了</span> for “if you win the lottery” is wrong-ish — winning isn't bad! 万一 needs a feared case.</p>`,
          examples: [
            { cn: "多带点儿钱，**万一**不够**就**麻烦了。", py: "Duō dài diǎnr qián, wànyī bú gòu jiù máfan le.", en: "Bring some extra money — if it turns out not to be enough, we're in trouble.", note: "Classic 万一: low probability + bad consequence + backup plan." },
            { cn: "把我的电话记下来，**万一**迷路了**就**给我打电话。", py: "Bǎ wǒ de diànhuà jì xiàlái, wànyī mílù le jiù gěi wǒ dǎ diànhuà.", en: "Write down my number — in case you get lost, call me.", note: "万一-clause + 就 + plan B. Also note the 把 sentence smuggled in." }
          ]
        },
        {
          label: "否则 standalone",
          html: `<p><span class="zh">否则 / 要不然</span> don't need 除非 — after any statement they add <b>“or else”</b>:</p>
<div class="pattern">Do A ，<span class="slot">否则 / 要不然</span> + bad consequence<small>否则 written/neutral, 要不然 spoken. Both stand clause-initial, before the subject.</small></div>`,
          examples: [
            { cn: "你得提前订票，**否则**周末肯定没座位。", py: "Nǐ děi tíqián dìng piào, fǒuzé zhōumò kěndìng méi zuòwèi.", en: "You have to book ahead, otherwise there definitely won't be seats on the weekend." },
            { cn: "记得带伞，**要不然**你会被淋湿的。", py: "Jìde dài sǎn, yàobùrán nǐ huì bèi lín shī de.", en: "Remember to take an umbrella, or you'll get soaked.", note: "淋湿 (lín shī) = get drenched — 被-sentence bonus." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: '不管 / 无论 … 都 — the unconditional, plus 再…也',
      short: "不管·无论",
      html: `
<p>Sometimes the result holds <b>for every value of the condition</b>. That's <span class="zh hl">不管/无论 … 都/也</span> — the “for all” quantifier of Chinese:</p>
<div class="pattern"><span class="slot">不管 / 无论</span> + open question ，Subj + <span class="slot">都 / 也</span> + result<small>不管 spoken · 无论/不论 written. The result clause takes 都 (or 也) after its subject.</small></div>
<h3>The clause needs an OPEN VARIABLE</h3>
<p>This is the rule the exam actually tests: the 不管-clause must contain something <b>indeterminate</b> — a slot that ranges over possibilities:</p>
<ul>
<li><b>Question word:</b> <span class="zh">不管<b class="hl">谁</b>问 / <b class="hl">什么</b>时候 / <b class="hl">多</b>贵 / <b class="hl">怎么</b>解释</span></li>
<li><b>A-not-A:</b> <span class="zh">无论你<b class="hl">去不去</b></span></li>
<li><b>A 还是 B:</b> <span class="zh">不管是晴天<b class="hl">还是</b>雨天</span></li>
</ul>
<p>A plain statement can't fill the slot: ✗<span class="zh">不管天气<s>很冷</s>，我都去跑步</span> → ✓<span class="zh">不管天气<b class="hl">多</b>冷…</span>. In logic terms: 不管 binds a variable; give it a variable to bind.</p>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 Egal / no importa</span>
German <i>„<b>egal wie</b> teuer es ist“</i> and Spanish <i>“<b>no importa lo</b> caro <b>que</b> sea”</i> both keep a wh-element inside the clause — exactly the open-variable rule. English “no matter <b>how/what/who</b>” too. If your translation has no wh-word, your 不管-clause is probably broken.</div>
<h3>再…也 — the compact version</h3>
<p>For a single adjective/verb, <span class="zh">再 X 也…</span> does the job in three syllables: <span class="zh">这个包<b class="hl">再</b>贵，我<b class="hl">也</b>要买。</span> ≈ 不管多贵，我都要买。 Also with verbs: <span class="zh">你<b class="hl">再</b>劝，他<b class="hl">也</b>不听。</span> (“however much you urge him…”).</p>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "Where does the connector sit? The position rules",
      short: "Position",
      html: `
<p>Conditionals are the sentence-ordering task's favourite raw material. Two species of word, two behaviours:</p>
<h3>1 · Conjunctions — 如果 / 要是 / 只要 / 只有 / 除非 / 不管 / 万一</h3>
<p>They introduce the condition clause and can stand <b>before or after its subject</b>:</p>
<p class="zh" style="font-size:1.1rem">✓ <b class="hl">如果</b>你有时间，… &nbsp;&nbsp; ✓ 你<b class="hl">如果</b>有时间，…</p>
<p>Rule of thumb: subjects <b>differ</b> in the two clauses → conjunction first (<span class="zh"><b class="hl">只要</b>价格合适，我们就买</span>); subjects <b>shared</b> → after the subject sounds smoother (<span class="zh">你<b class="hl">只要</b>说一声，就…</span>).</p>
<h3>2 · Adverbs — 就 / 才 / 都 / 也</h3>
<p>These are welded into the second clause: <b>after its subject, before the verb</b>. They can NEVER stand at the head of the clause:</p>
<p class="zh" style="font-size:1.1rem">✓ 只有他同意，我们<b class="hl">才</b>能开始。 &nbsp;&nbsp; ✗ 只有他同意，<s>才我们</s>能开始。</p>
<h3>3 · 否则 / 要不然 — clause-initial connectors</h3>
<p>Like 所以, they head the second clause, standing before its subject: <span class="zh">…，<b class="hl">否则</b>你会后悔的。</span></p>
<h3>4 · Clause order is fixed</h3>
<p>Condition first, result second. Unlike 因为, a 如果/只要-clause doesn't trail casually after the result in written Chinese — in the ordering task, the condition chunk goes first, full stop.</p>
<div class="callout tip"><span class="co-title">💡 Ordering-task algorithm</span>
① The tile with 如果/只要/只有/不管/万一 starts clause 1. ② The tile with 就/才/都 hides inside clause 2 — find its subject and put it in front. ③ 否则/要不然 opens clause 2 directly. Check: 才 next to 只有? 就 next to 只要? Partners must match.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — sufficient or necessary?",
      short: "Checkpoint",
      intro: "Six questions, and yes — four of them are 只要/只有. That's the exam's real ratio.",
      items: [
        { q: '<span class="zh">___你有学生证，就能买半价票。</span>', choices: ['<span class="zh">只要</span>', '<span class="zh">只有</span>', '<span class="zh">除非</span>', '<span class="zh">万一</span>'], a: 0, expl: "The partner 就 gives it away, and logically a student ID is ENOUGH for the discount → sufficient → 只要…就." },
        { q: '<span class="zh">___拿到签证，你才能出国留学。</span>', choices: ['<span class="zh">只有</span>', '<span class="zh">只要</span>', '<span class="zh">要是</span>', '<span class="zh">不管</span>'], a: 0, expl: "Partner 才 + hard requirement (no visa → no study abroad) = necessary condition → 只有…才. 只要 would claim a visa alone guarantees it." },
        { q: '<span class="zh">只要天气好，我们___去爬山。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">都</span>', '<span class="zh">否则</span>'], a: 0, expl: "只要's partner is 就 — fixed couple. 才 belongs to 只有/除非, 都 to 不管/无论." },
        { q: '<span class="zh">只有认真复习，___能考出好成绩。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">就</span>', '<span class="zh">也</span>', '<span class="zh">还</span>'], a: 0, expl: "只有 pairs with 才 (\"only then\"). ✗只有…就 is the single most common wrong answer in this chapter." },
        { q: '<span class="zh">___你怎么说，他都不改变主意。</span>', choices: ['<span class="zh">不管</span>', '<span class="zh">只要</span>', '<span class="zh">除非</span>', '<span class="zh">如果</span>'], a: 0, expl: "怎么 is an open variable and the partner is 都 → unconditional 不管…都. The others would need 就/才/否则." },
        { q: '<span class="zh">出门多穿点儿，___感冒了就麻烦了。</span>', choices: ['<span class="zh">万一</span>', '<span class="zh">只要</span>', '<span class="zh">既然</span>', '<span class="zh">除非</span>'], a: 0, expl: "Unlikely + unwanted case you're planning around = 万一. 只要感冒了就麻烦了 would absurdly present catching a cold as a sufficient recipe." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "Seven patients. Diagnosis hint: check the partner adverb first, then the open variable, then the position.",
      items: [
        { wrong: "只要你来参加，我才高兴。", right: "只要你来参加，我就高兴。", py: "Zhǐyào nǐ lái cānjiā, wǒ jiù gāoxìng.", en: "As long as you come, I'll be happy.", expl: "Partner mismatch: 只要 (sufficient) takes 就. 才 would flip the logic to 'only if' — then you'd need 只有." },
        { wrong: "只有你亲自去请他，他就会来。", right: "只有你亲自去请他，他才会来。", py: "Zhǐyǒu nǐ qīnzì qù qǐng tā, tā cái huì lái.", en: "Only if you invite him in person will he come.", expl: "只有 (necessary) takes 才. ✗只有…就 claims necessity, then delivers it with the 'easy' adverb — the exam's favourite contradiction." },
        { wrong: "不管天气很冷，我都去跑步。", right: "不管天气多冷，我都去跑步。", py: "Bùguǎn tiānqì duō lěng, wǒ dōu qù pǎobù.", en: "No matter how cold it is, I go running.", expl: "The 不管-clause needs an open variable. 很冷 is a fixed statement; 多冷 ('how cold') opens the range. Question word, A-not-A, or 还是 — pick one." },
        { wrong: "无论他来，我们都开会。", right: "无论他来不来，我们都开会。", py: "Wúlùn tā lái bu lái, wǒmen dōu kāihuì.", en: "Whether he comes or not, we're holding the meeting.", expl: "Same disease as above: 他来 is determinate. A-not-A (来不来) gives 无论 a variable to range over." },
        { wrong: "要是明天下雨，就我们在家看电影。", right: "要是明天下雨，我们就在家看电影。", py: "Yàoshi míngtiān xià yǔ, wǒmen jiù zài jiā kàn diànyǐng.", en: "If it rains tomorrow, we'll watch a movie at home.", expl: "就 is an adverb — it lives AFTER the subject 我们, before the verb. Clause-initial 就 is the position error the ordering task hunts for." },
        { wrong: "除非你早点儿睡，你否则明天起不来。", right: "除非你早点儿睡，否则你明天起不来。", py: "Chúfēi nǐ zǎodiǎnr shuì, fǒuzé nǐ míngtiān qǐ bu lái.", en: "Unless you go to bed earlier, you won't be able to get up tomorrow.", expl: "否则 is a clause-initial connector like 所以 — it stands BEFORE the subject, never after it. (起不来 = potential complement: can't get up.)" },
        { wrong: "万一你通过了HSK四级，我们去饭馆庆祝。", right: "如果你通过了HSK四级，我们就去饭馆庆祝。", py: "Rúguǒ nǐ tōngguò le HSK sì jí, wǒmen jiù qù fànguǎn qìngzhù.", en: "If you pass HSK 4, we'll go celebrate at a restaurant.", expl: "万一 is reserved for unlikely BAD cases. Passing the exam is the hoped-for outcome → plain 如果 (…and a bit more faith in you, please)." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Match the partners (只要↔就, 只有↔才, 不管↔都) and keep the adverbs after their subjects.",
      items: [
        { tiles: ["只要", "按时", "吃药", "你的病", "就会", "好起来"], py: "Zhǐyào ànshí chī yào, nǐ de bìng jiù huì hǎo qǐlái.", en: "As long as you take the medicine on time, you'll get better.", hint: "只要 + condition, then subject + 就会 + result." },
        { tiles: ["只有", "多", "练习", "你的发音", "才能", "越来越", "标准"], py: "Zhǐyǒu duō liànxí, nǐ de fāyīn cái néng yuèláiyuè biāozhǔn.", en: "Only with lots of practice can your pronunciation get more and more standard.", hint: "只有…才能 — and a 越来越 cameo." },
        { tiles: ["除非", "他", "道歉", "否则", "我", "不会", "原谅", "他"], py: "Chúfēi tā dàoqiàn, fǒuzé wǒ bú huì yuánliàng tā.", en: "Unless he apologizes, I won't forgive him.", hint: "除非 opens clause 1; 否则 opens clause 2, before 我." },
        { tiles: ["万一", "路上", "堵车", "你", "就", "坐", "地铁", "去"], py: "Wànyī lùshang dǔchē, nǐ jiù zuò dìtiě qù.", en: "In case there's a traffic jam, take the subway.", hint: "万一 + bad case, then subject + 就 + plan B.", alt: [["万一", "路上", "堵车", "你", "就", "去", "坐", "地铁"]] },
        { tiles: ["不管", "多", "忙", "他", "都", "坚持", "锻炼", "身体"], py: "Bùguǎn duō máng, tā dōu jiānchí duànliàn shēntǐ.", en: "No matter how busy he is, he keeps exercising.", hint: "不管 needs its open variable 多忙; 都 goes after 他.", alt: [["他", "不管", "多", "忙", "都", "坚持", "锻炼", "身体"]] },
        { tiles: ["无论", "你", "去不去", "我", "都", "要", "去", "看看"], py: "Wúlùn nǐ qù bu qù, wǒ dōu yào qù kànkan.", en: "Whether you go or not, I'm going to have a look.", hint: "A-not-A fills the variable slot; 都 after 我.", alt: [["你", "无论", "去不去", "我", "都", "要", "去", "看看"]] },
        { tiles: ["这本书", "再", "贵", "我", "也", "要", "买"], py: "Zhè běn shū zài guì, wǒ yě yào mǎi.", en: "No matter how expensive this book is, I'm buying it.", hint: "再 + adjective in clause 1, 也 after the subject in clause 2." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 只有 + noun phrase</h3>
<p>只有 can restrict a noun directly, no clause needed: <span class="zh"><b class="hl">只有</b>周末我<b class="hl">才</b>有时间陪孩子。</span> / <span class="zh"><b class="hl">只有</b>他<b class="hl">才</b>知道密码。</span> The 才 still shows up in the main clause — that's how you recognize the pattern.</p>
<h3>2 · 才 resists 了</h3>
<p>From 就 vs 才 you know: clauses with 才 don't take a completed-action 了 — ✗<span class="zh">只有他来了我才去了</span>. Say <span class="zh">…我才去</span>. The exam plants this 了 as a distractor.</p>
<h3>3 · 除非 = the double negative in disguise</h3>
<p><span class="zh">除非你去，否则我不去</span> unpacks to “if you don't go, I don't go”. If the logic ever confuses you, rewrite: <span class="zh">除非 A，否则 ¬B</span> ⇔ <span class="zh">只有 A，才 B</span>. Two syntaxes, one truth table.</p>
<h3>4 · 的话 — where it can and can't go</h3>
<p>的话 closes the condition clause: <span class="zh">如果你有时间<b class="hl">的话</b>，…</span>. It never attaches to the result clause: ✗<span class="zh">…，我们就去的话</span>. And 的话 with 只要/只有 is unusual — keep it for 如果/要是 or bare conditions.</p>
<h3>5 · 不管 vs 即使</h3>
<p>Both get translated “even if”, but <span class="zh">不管</span> quantifies over an open range (needs the variable), while <span class="zh">即使</span> concedes ONE hypothetical case: <span class="zh">即使下雨，我也去</span> (that single case: rain). No variable → 即使; variable → 不管. Full story in the contrast & concession topic.</p>
<div class="callout warn"><span class="co-title">⚠️ 只要 places the bar low, 只有 places it high</span>
Tone check for translation questions: 只要 sounds encouraging (“that's all it takes!”), 只有 sounds strict (“nothing less will do”). If the sentence encourages, 只要; if it warns or restricts, 只有.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Eleven questions. The 只要/只有 fork keeps coming back — exactly like the real paper.",
      items: [
        { q: '<span class="zh">___你把手机静音，就不会打扰到别人。</span>', choices: ['<span class="zh">只要</span>', '<span class="zh">只有</span>', '<span class="zh">除非</span>', '<span class="zh">不管</span>'], a: 0, expl: "Muting the phone is enough to avoid disturbing people, and the partner is 就 → 只要. 只有 would need 才." },
        { q: '<span class="zh">___通过面试的人，才能参加下个月的培训。</span>', choices: ['<span class="zh">只有</span>', '<span class="zh">只要</span>', '<span class="zh">万一</span>', '<span class="zh">要是</span>'], a: 0, expl: "才 + a gate-keeping requirement (interview passed) = necessary condition → 只有. Note 只有 + noun phrase (通过面试的人)." },
        { q: '<span class="zh">你放心，___有我在，就没有解决不了的问题。</span>', choices: ['<span class="zh">只要</span>', '<span class="zh">只有</span>', '<span class="zh">无论</span>', '<span class="zh">除非</span>'], a: 0, expl: "Reassuring tone + 就 → 只要 ('as long as I'm here, that's enough'). 只有…才 would sound like a strict warning, and 无论 needs an open variable." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">只要你说，我就帮你。</span>', '<span class="zh">只有你说，我才帮你。</span>', '<span class="zh">只要你说，我才帮你。</span>', '<span class="zh">你不说，我就不帮你。</span>'], a: 2, expl: "✗只要…才 — mismatched couple. 只要 pairs with 就, 只有 with 才; option D expresses the necessary condition with plain negation, which is fine." },
        { q: '<span class="zh">___你在哪儿，我___会找到你。</span>', choices: ['<span class="zh">无论 / 都</span>', '<span class="zh">只要 / 就</span>', '<span class="zh">只有 / 才</span>', '<span class="zh">除非 / 否则</span>'], a: 0, expl: "哪儿 is a question word = open variable → 无论…都: 'wherever you are'. 只要 can't host a bare question word like this." },
        { q: '<span class="zh">带上这张地图吧，___迷路了可以看看。</span>', choices: ['<span class="zh">万一</span>', '<span class="zh">只有</span>', '<span class="zh">既然</span>', '<span class="zh">不管</span>'], a: 0, expl: "Getting lost = unlikely, unwanted, and you're packing a plan B → 万一. 如果 would also work, but of these four only 万一 fits." },
        { q: '<span class="zh">明天你早点儿来，___我们做不完这些工作。</span>', choices: ['<span class="zh">要不然</span>', '<span class="zh">除非</span>', '<span class="zh">才</span>', '<span class="zh">就</span>'], a: 0, expl: "Standalone 'or else' heading the second clause = 要不然/否则. 除非 would have to introduce the CONDITION, and 才/就 can't stand clause-initial." },
        { q: 'Order these chunks: <span class="zh">才能 / 只有 / 你 / 学会游泳 / 多下水练习</span>', choices: ['<span class="zh">只有多下水练习，你才能学会游泳。</span>', '<span class="zh">你只有才能多下水练习学会游泳。</span>', '<span class="zh">只有你才能多下水练习，学会游泳。</span>', '<span class="zh">多下水练习，只有你才能学会游泳。</span>'], a: 0, expl: "只有 + condition first; then subject 你 + 才能 + result. In option C, 才 got separated from the result clause — the partner must live where the result lives." },
        { q: '<span class="zh">再难的汉字，___？</span> Complete naturally:', choices: ['<span class="zh">他也写得出来</span>', '<span class="zh">他就写得出来</span>', '<span class="zh">他才写得出来</span>', '<span class="zh">他都不写了</span>'], a: 0, expl: "再 + Adj pairs with 也: 'no matter how hard the character, he can still write it'. 就/才 belong to other couples; option D breaks the concessive logic." },
        { q: '<span class="zh">___是刮风还是下雨，他每天都五点起床去送牛奶。</span>', choices: ['<span class="zh">不管</span>', '<span class="zh">只要</span>', '<span class="zh">除非</span>', '<span class="zh">万一</span>'], a: 0, expl: "A 还是 B fills the open-variable slot, partner 都 → 不管…都. The others can't host 还是-alternatives." },
        { q: "Your friend says: <span class=\"zh\">我怕我口语不好，找不到工作。</span> The encouraging reply:", choices: ['<span class="zh">只要你坚持练习，就一定能找到好工作。</span>', '<span class="zh">只有你坚持练习，就一定能找到好工作。</span>', '<span class="zh">除非你坚持练习，你才找不到好工作。</span>', '<span class="zh">万一你坚持练习，就能找到好工作。</span>'], a: 0, expl: "Encouragement = low bar = 只要…就. Option B mixes 只有 with 就 (illegal couple), C's logic is backwards, and D treats practicing as an unlikely disaster." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">条件关系 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Pattern</th><th>Logic & rules</th></tr>
<tr><td>只要 A 就 B</td><td>A sufficient (A ⇒ B). Encouraging, low bar. Partner: 就</td></tr>
<tr><td>只有 A 才 B</td><td>A necessary (¬A ⇒ ¬B). Strict, high bar. Partner: 才 · also 只有 + noun: 只有他才知道</td></tr>
<tr><td>除非 A 否则 ¬B</td><td>“Unless” — the only escape. Also 除非 A，…才 B. ⇔ 只有 A 才 B</td></tr>
<tr><td>如果/要是…(的话) 就</td><td>Neutral if. 要是 = spoken; 的话 = optional tail (…的话 alone works too)</td></tr>
<tr><td>万一 A 就 B</td><td>Unlikely + BAD case, plan around it: 万一堵车，就坐地铁</td></tr>
<tr><td>否则 / 要不然</td><td>Standalone “or else”, clause-initial: 快走吧，要不然迟到了</td></tr>
<tr><td>不管/无论 … 都/也</td><td>Unconditional — clause MUST hold an open variable: 谁/什么/多X · A不A · A还是B</td></tr>
<tr><td>再 X 也</td><td>One-variable 不管: 再贵也要买 · 你再劝他也不听</td></tr>
<tr><td>Positions</td><td>Conjunctions: before/after subject. 就/才/都/也: ALWAYS after subject. 否则: clause-initial</td></tr>
<tr><td>Illegal couples</td><td>✗只要…才 · ✗只有…就 · ✗不管 + plain statement · ✗clause-initial 就/才</td></tr>
</table></div>`
    }
  ]
});
