/* HSK 4 Grammar Lab — 被动句 (passives with 被/让/叫 — and without them) */
registerPage({
  id: "passive-bei",
  zh: "**被**动句",
  title: "Passives with 被 / 让 / 叫 — and when Chinese skips them",
  subtitle: "You met 被 briefly in HSK 3 vocabulary lists; HSK 4 tests the full sentence machine — where the agent goes, where negation goes, and the golden rule it shares with 把: the verb never stands bare. Just as important: knowing when Chinese quietly refuses the passive that English would use.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: the <span class="zh hl">victim</span> takes the stage',
      short: "Big idea",
      html: `
<p>A 被 sentence turns the camera around. Instead of "the thief stole my bike", the <b>thing affected</b> steps up front and reports what was done to it:</p>
<div class="pattern">Receiver + <span class="slot">被</span> (+ agent) + V + <span class="slot">extra</span><small><span class="zh">我的自行车 被 (小偷) 偷<b>走了</b></span> — and just like 把: the verb can never be the last bare word.</small></div>
<p>被 historically smells of <b>misfortune</b> — things get stolen (<span class="zh">被偷</span>), broken (<span class="zh">被打破</span>), criticized (<span class="zh">被批评</span>). Modern Chinese also uses it neutrally (<span class="zh">被邀请</span> invited, <span class="zh">被评为</span> named/rated-as), but the adversity flavour still explains why 被 is far rarer than the English passive.</p>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 One-to-one at the core</span>
Structurally 被 maps cleanly onto English <i>"was … by …"</i> and German <i>„wurde … von …“</i>: <span class="zh">杯子被他打破了</span> = "the cup was broken by him" = „die Tasse wurde von ihm zerbrochen“. The mapping breaks on <b>frequency</b>: your languages reach for the passive constantly; Chinese saves 被 for when something notable — often bad — happened to the subject.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Reading loves 被↔把 conversions (same event, camera flipped), Writing plants 被-tiles in the ordering task, and distractors bank on you writing English-style passives where Chinese uses none.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'The mechanics: agents, the bare-verb ban, and the little 给',
      short: "Mechanics",
      html: `
<h3>1 · The golden rule, again: the verb never stands bare</h3>
<p class="zh" style="font-size:1.2rem">✗ 我的手机被偷。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 我的手机被偷<b class="hl">了</b>。 ✓ 被偷<b class="hl">走了</b>。</p>
<p>Same endings as 把: <span class="pill">了</span> <span class="pill">走 / 坏 / 完…</span> (result) <span class="pill">到 / 在 + place</span> <span class="pill">direction</span> <span class="pill">得 + description</span>. Something must say how it ended.</p>
<h3>2 · 被 may drop the agent — 叫 / 让 may NOT</h3>
<p>If the doer is unknown or unimportant, 被 lets you skip it, or use dummy <span class="zh">人</span>:</p>
<p class="zh" style="font-size:1.15rem">我的钱包<b class="hl">被</b>偷了。 ✓ &nbsp;&nbsp; 我的钱包<b class="hl">被人</b>偷了。 ✓</p>
<p>The colloquial passives <span class="zh">叫</span> and <span class="zh">让</span> demand an agent, even if it's just 人:</p>
<p class="zh" style="font-size:1.15rem">我的伞<b class="hl">让人</b>拿走了。 ✓ &nbsp;&nbsp; ✗ 我的伞<s>让拿走了</s> &nbsp;&nbsp; ✗ 我的伞<s>叫拿走了</s></p>
<h3>3 · Optional 给 before the verb — pure flavour</h3>
<p>Colloquial speech likes to drop a <span class="zh">给</span> in front of the verb. It receives nothing; it just underlines the mishap:</p>
<p class="zh" style="font-size:1.15rem">我被人<b class="hl">给</b>骗了。 &nbsp;&nbsp; 蛋糕叫弟弟<b class="hl">给</b>吃光了。</p>
<div class="callout warn"><span class="co-title">⚠️ Don't confuse the three 给s</span>
被人<b>给</b>骗了 (flavour, deletable) ≠ 交<b>给</b>老师 (hand TO someone) ≠ <b>给</b>我买了一本书 (for/to me). Only the first one lives inside passives and can vanish without changing the meaning.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — read, listen, absorb",
      short: "Examples",
      intro: "Tap 🔊 to listen. In each one, find: the receiver up front, the (optional) agent after 被, and the verb's obligatory tail.",
      items: [
        { tag: "no agent", cn: "我的自行车**被**偷**了**。", py: "Wǒ de zìxíngchē bèi tōu le.", en: "My bike got stolen.", note: "Agent unknown → simply omitted. 了 supplies the required ending." },
        { tag: "agent", cn: "那本书**被**同学借**走了**。", py: "Nà běn shū bèi tóngxué jiè zǒu le.", en: "That book was borrowed by a classmate.", note: "Receiver 那本书 is definite — like 把-objects, 被-subjects are known things." },
        { tag: "一顿", cn: "他上课玩手机，**被**老师批评了**一顿**。", py: "Tā shàngkè wán shǒujī, bèi lǎoshī pīpíng le yí dùn.", en: "He played on his phone in class and got a telling-off from the teacher.", note: "批评了一顿 — the frequency complement (see 动量补语) is a perfect verb tail." },
        { tag: "发现", cn: "这个秘密还是**被**妈妈发现**了**。", py: "Zhège mìmì háishi bèi māma fāxiàn le.", en: "Mom found out the secret after all.", note: "还是…了 = 'in the end, despite efforts'. 被发现 is a top-5 exam collocation." },
        { tag: "给", cn: "我差点儿**被**那个广告**给**骗了。", py: "Wǒ chàdiǎnr bèi nàge guǎnggào gěi piàn le.", en: "I was almost taken in by that ad.", note: "差点儿 before 被; flavour-给 before the verb — delete it and nothing breaks." },
        { tag: "negation", cn: "还好，我的错误**没有被**人发现。", py: "Hái hǎo, wǒ de cuòwù méiyǒu bèi rén fāxiàn.", en: "Luckily, my mistake wasn't noticed by anyone.", note: "没(有) stands BEFORE 被, never between 被 and the verb." },
        { tag: "得", cn: "观众都**被**这个故事感动**得**哭了。", py: "Guānzhòng dōu bèi zhège gùshi gǎndòng de kū le.", en: "The audience was moved to tears by the story.", note: "The agent can be a thing; 得 + result is another legal tail. 被感动 = neutral, even positive!" },
        { tag: "让", cn: "我的伞**让**人拿**走了**。", py: "Wǒ de sǎn ràng rén ná zǒu le.", en: "Someone walked off with my umbrella.", note: "Colloquial 让-passive. The agent slot MUST be filled — dummy 人 does the job." },
        { tag: "评为", cn: "她**被**学校评**为**优秀学生。", py: "Tā bèi xuéxiào píng wéi yōuxiù xuésheng.", en: "She was named an outstanding student by the school.", note: "评为 = 'rate as' (评 píng to evaluate). Modern, formal, zero misfortune — 被 has grown neutral uses." },
        { tag: "由", cn: "这次活动**由**学生会负责组织。", py: "Zhè cì huódòng yóu xuéshenghuì fùzé zǔzhī.", en: "The student union is in charge of organizing this event.", note: "由 assigns responsibility formally — 'is handled by'. Not misfortune, not even really passive: no tail needed." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "Three flavours of passive — adversity, neutral, invisible",
      short: "Three flavours",
      intro: "The exam tests all three: classic bad-news 被, modern neutral 被, and the most Chinese one of all — no marker whatsoever.",
      tabs: [
        {
          label: "Bad news 被",
          html: `<p>The heartland. Memorize these as ready-made collocations — they cover most 被-sentences you will ever read:</p>
<p><span class="pill">被偷</span> stolen <span class="pill">被抢</span> robbed <span class="pill">被罚</span> fined <span class="pill">被批评</span> criticized <span class="pill">被骗</span> cheated <span class="pill">被发现</span> found out <span class="pill">被打破</span> broken <span class="pill">被拿走</span> taken away</p>`,
          examples: [
            { cn: "他的钱包在地铁里**被**人偷**走了**。", py: "Tā de qiánbāo zài dìtiě li bèi rén tōu zǒu le.", en: "His wallet was stolen on the subway.", note: "Place phrase 在地铁里 before 被 — scene first, then the mishap." },
            { cn: "他停错了地方，**被**罚了两百块。", py: "Tā tíng cuò le dìfang, bèi fá le liǎng bǎi kuài.", en: "He parked in the wrong spot and was fined 200 kuai.", note: "罚 fá = to fine/punish. Agent (the police) too obvious to mention." }
          ]
        },
        {
          label: "Neutral 被",
          html: `<p>Modern written Chinese uses 被 without any misfortune — announcements, news, formal reports:</p>
<p><span class="pill">被邀请</span> invited <span class="pill">被评为</span> named/rated as <span class="pill">被选为</span> elected as <span class="pill">被接受</span> accepted <span class="pill">被翻译成</span> translated into</p>`,
          examples: [
            { cn: "他**被**邀请去北京大学做报告。", py: "Tā bèi yāoqǐng qù Běijīng Dàxué zuò bàogào.", en: "He was invited to give a talk at Peking University.", note: "Being invited is an honour — zero adversity. The following verb phrase counts as the tail." },
            { cn: "这本小说已经**被**翻译**成**了二十多种语言。", py: "Zhè běn xiǎoshuō yǐjīng bèi fānyì chéng le èrshí duō zhǒng yǔyán.", en: "This novel has been translated into more than twenty languages.", note: "翻译成 — the 成-tail you know from 把 works in 被 too." }
          ]
        },
        {
          label: "No marker at all",
          html: `<p>The default passive for <b>things</b> is… nothing. Topic + verb + result, no 被:</p>
<p class="zh" style="font-size:1.15rem">作业写完了。 · 房间打扫干净了。 · 信寄出去了。 · 饭做好了。 · 票卖光了。</p>
<p>Nobody thinks the homework wrote itself — the topic is obviously the receiver. Adding 被 here (✗作业被写完了) sounds like the homework suffered a crime. <b>Where English needs its passive, Chinese usually needs silence.</b></p>
<div class="callout cmp"><span class="co-title">🇪🇸 Spanish nailed this already</span>
The notional passive is your Spanish <i>se</i>-passive: <i>"la tarea ya <b>se hizo</b>"</i> ≈ <span class="zh">作业已经做完了</span>, <i>"las entradas <b>se agotaron</b>"</i> ≈ <span class="zh">票卖光了</span>. No agent, no passive morphology, topic first. Think <i>se</i>, not <i>was</i>, and your 被-overuse disappears. (German comes close with <i>„die Hausaufgaben sind fertig“</i> — stating the result, skipping the passive.)</div>`,
          examples: [
            { cn: "房间打扫**干净了**，客人随时可以来。", py: "Fángjiān dǎsǎo gānjìng le, kèrén suíshí kěyǐ lái.", en: "The room has been cleaned — guests can come any time.", note: "Topic 房间 + verb + result 干净了. Inserting 被 would be unnatural." },
            { cn: "信已经寄**出去了**，下星期应该能到。", py: "Xìn yǐjīng jì chūqù le, xià xīngqī yīnggāi néng dào.", en: "The letter has already been sent — it should arrive next week.", note: "English says 'has been sent'; Chinese just lets the letter top the sentence." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: "The marker line-up: 被 · 让 · 叫 · 给 · 由 · ∅",
      short: "Marker line-up",
      intro: "Six ways to hand the stage to the receiver — sorted by register. The agent column is where the exam sets its traps.",
      head: ["Marker", "Agent required?", "Register / flavour", "Example"],
      rows: [
        ['<span class="zh">被</span>', 'optional — 被(人)V', 'neutral-to-written; classic adversity + modern neutral', '<span class="zh">手机<b class="hl">被</b>偷了。</span> <span class="py-hint">Shǒujī bèi tōu le.</span>'],
        ['<span class="zh">让</span>', '<b>required</b> (use 人 if unknown)', 'colloquial', '<span class="zh">伞<b class="hl">让人</b>拿走了。</span> <span class="py-hint">Sǎn ràng rén ná zǒu le.</span>'],
        ['<span class="zh">叫</span>', '<b>required</b>', 'colloquial, a bit stronger', '<span class="zh">门<b class="hl">叫风</b>给吹开了。</span> <span class="py-hint">Mén jiào fēng gěi chuī kāi le.</span>'],
        ['<span class="zh">给</span> (pre-verb)', '— (it IS the flavour, not a marker slot)', 'colloquial add-on inside 被/让/叫 sentences', '<span class="zh">被人<b class="hl">给</b>骗了。</span> <span class="py-hint">bèi rén gěi piàn le</span>'],
        ['<span class="zh">由</span>', '<b>required</b> — that is its whole point', 'formal assignment of responsibility, no misfortune, no tail needed', '<span class="zh">晚会<b class="hl">由</b>王老师负责。</span> <span class="py-hint">Wǎnhuì yóu Wáng lǎoshī fùzé.</span>'],
        ['∅ (notional)', 'none — agent unsayable', 'the DEFAULT for things', '<span class="zh">作业写完了。</span> <span class="py-hint">Zuòyè xiě wán le.</span>']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Word order: everything stacks <span class="zh hl">before 被</span> — and the 把 mirror',
      short: "Word order",
      html: `
<h3>1 · Negation, time, modals, adverbs — all BEFORE 被</h3>
<p class="zh" style="font-size:1.15rem">我的建议<b class="hl">没</b>被接受。 ✓ &nbsp;&nbsp; ✗ 我的建议被<s>没</s>接受<br>他<b class="hl">从来没</b>被老师批评过。 ✓ &nbsp;&nbsp; 比赛<b class="hl">可能会</b>被取消。 ✓ &nbsp;&nbsp; ✗ 比赛被<s>会</s>取消</p>
<p>Exactly the rule you learned for 把 — the preposition-like word glues to the verb phrase, so outside elements pile up in front of it.</p>
<h3>2 · 被 and 把 are mirror images</h3>
<p>Same event, two cameras. Swap subject and object, swap the marker, keep the verb + tail untouched:</p>
<div class="pattern">他 <span class="slot">把</span> 杯子 打破了 &nbsp;⇄&nbsp; 杯子 <span class="slot">被</span> 他 打破了<small>agent 把 receiver … ⇄ receiver 被 agent … — the verb chunk 打破了 never changes</small></div>
<p>The exam runs this both ways: rewrite a 把-sentence as 被, or spot the conversion that went wrong (usually the verb tail got lost in the move).</p>
<h3>3 · The receiver must be definite — 被's subject rule</h3>
<p>Like 把-objects, the thing up front must be known: ✓<span class="zh"><b class="hl">我的</b>词典被借走了</span>, ✗<span class="zh"><b class="hl">一本</b>词典被借走了</span>. New, indefinite things don't get the stage.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Ordering task with a 被 tile: ① the definite "victim" noun goes first; ② 被 + agent next (no agent tile? then 被 hugs the verb); ③ verb + tail; ④ time/negation/modal tiles stack before 被. Mechanical, like 把.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions before the drill. Watch the agent slot and the verb tail.",
      items: [
        { q: "Which sentence is correct?", choices: ['<span class="zh">我的手机被偷。</span>', '<span class="zh">我的手机被偷了。</span>', '<span class="zh">我的手机被了偷。</span>', '<span class="zh">被我的手机偷了。</span>'], a: 1, expl: "Golden rule (shared with 把): the verb never stands bare. 偷 needs its tail — here the simple 了. And the receiver stands before 被." },
        { q: '<span class="zh">我的自行车___人骑走了。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">把</span>', '<span class="zh">对</span>', '<span class="zh">从</span>'], a: 0, expl: "The bike is the receiver, 人 the agent → 被人骑走了. 把 would make the bike the DOER riding someone away!" },
        { q: '<span class="zh">我的伞___拿走了。</span> Which marker fits with NO agent mentioned?', choices: ['<span class="zh">被</span>', '<span class="zh">叫</span>', '<span class="zh">让</span>', '<span class="zh">叫 or 让</span>'], a: 0, expl: "Only 被 may drop the agent. 叫/让 must name one, even the dummy 人: 让人拿走了." },
        { q: '<span class="zh">还好，我的钱包___。</span>', choices: ['<span class="zh">没被偷走</span>', '<span class="zh">被没偷走</span>', '<span class="zh">不被偷走了</span>', '<span class="zh">被偷没走</span>'], a: 0, expl: "Negation stands BEFORE 被: 没被偷走. Inside the 被-phrase nothing may cut between 被(+agent) and the verb." },
        { q: '<span class="zh">弟弟把我的蛋糕吃光了。</span> = <span class="zh">我的蛋糕___吃光了。</span>', choices: ['<span class="zh">被弟弟</span>', '<span class="zh">把弟弟</span>', '<span class="zh">被</span>', '<span class="zh">给弟弟把</span>'], a: 0, expl: "把→被 mirror: receiver up front, 被 + agent, verb chunk 吃光了 unchanged. Bare 被吃光了 (dropping 弟弟) is grammatical but loses information — the exam wants the faithful conversion." },
        { q: "“The homework is done.” — the most natural version?", choices: ['<span class="zh">作业写完了。</span>', '<span class="zh">作业被写完了。</span>', '<span class="zh">作业被我写完了。</span>', '<span class="zh">被作业写完了。</span>'], a: 0, expl: "Things default to the notional passive: topic + V + result, no marker. 被 here would add an odd flavour of crime against the homework." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One disease per patient — agent troubles, bare verbs, misplaced negation, and English-transfer passives.",
      items: [
        { wrong: "我的手机被偷。", right: "我的手机被偷了。", py: "Wǒ de shǒujī bèi tōu le.", en: "My phone got stolen.", expl: "Bare verb after 被 is illegal — same golden rule as 把. Minimum repair: add 了; better: a result like 偷走了." },
        { wrong: "我的蛋糕叫吃了。", right: "我的蛋糕叫人吃了。／我的蛋糕被吃了。", py: "Wǒ de dàngāo jiào rén chī le.", en: "Someone ate my cake.", expl: "叫 (and 让) refuse to stand alone — the agent slot must be filled, with dummy 人 if needed. Only 被 can drop the agent." },
        { wrong: "他被没老师批评。", right: "他没被老师批评。", py: "Tā méi bèi lǎoshī pīpíng.", en: "He wasn't criticized by the teacher.", expl: "Negation, time words and modals all stack BEFORE 被. Nothing squeezes between 被 and its agent+verb." },
        { wrong: "作业被我写完了。", right: "作业写完了。／我把作业写完了。", py: "Zuòyè xiě wán le. / Wǒ bǎ zuòyè xiě wán le.", en: "The homework is done. / I finished the homework.", expl: "Grammatical, but no native says it: routine results for things use the notional passive (no marker) — or flip to 把 if you want yourself on stage. 被 implies something was done TO the homework against its interests." },
        { wrong: "被他杯子打破了。", right: "杯子被他打破了。", py: "Bēizi bèi tā dǎpò le.", en: "The cup was broken by him.", expl: "The receiver opens the sentence; 被 + agent follow it. 被-sentences never start with 被 itself." },
        { wrong: "这个电影被我很喜欢。", right: "我很喜欢这个电影。", py: "Wǒ hěn xǐhuan zhège diànyǐng.", en: "I like this movie a lot.", expl: "English-transfer bug ('is liked by me'). Feeling/cognition verbs (喜欢、知道、认识、同意) reject 被 for the same reason they reject 把 — nothing is done to the object." },
        { wrong: "明天的比赛被会取消。", right: "明天的比赛可能会被取消。", py: "Míngtiān de bǐsài kěnéng huì bèi qǔxiāo.", en: "Tomorrow's match might be cancelled.", expl: "Modals (会/能/可能/应该) stand before 被, never after it: 会被取消." },
        { wrong: "我的快递被给人拿走了。", right: "我的快递被人给拿走了。", py: "Wǒ de kuàidì bèi rén gěi ná zǒu le.", en: "Someone made off with my package.", expl: "Flavour-给 stands directly BEFORE the verb and AFTER the agent: 被 + 人 + 给 + V. Writing 被给人 treats 给 as if it marked the agent ('by') — inside a 被/让/叫 sentence it never does; there it's just a deletable colloquial underliner of the mishap." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "neutral", cn: "根据规定，乘客**被**禁止在飞机上吸烟。", py: "Gēnjù guīdìng, chéngkè bèi jìnzhǐ zài fēijī shang xīyān.", en: "Under the rules, passengers are prohibited from smoking on board.", note: "Rulebook register, zero misfortune — like 被邀请, the following verb phrase 在飞机上吸烟 is the tail." },
        { tag: "thing agent", cn: "很多游客都**被**这里的美景吸引**住了**。", py: "Hěn duō yóukè dōu bèi zhèli de měijǐng xīyǐn zhù le.", en: "Many visitors are simply captivated by the scenery here.", note: "The agent is a thing (美景) and the flavour is positive — modern 被 has outgrown misfortune. 住 = 'caught fast', a legal result tail." },
        { tag: "negation", cn: "他做事一直很诚实，从来**没有被**人怀疑**过**。", py: "Tā zuòshì yìzhí hěn chéngshí, cónglái méiyǒu bèi rén huáiyí guo.", en: "He has always been honest in what he does and has never once come under suspicion.", note: "从来没(有) stacks BEFORE 被, never after it; experiential 过 rides on the verb as the tail. Dummy 人 fills the agent slot." },
        { tag: "indef. agent", cn: "路口的灯很暗，他昨天晚上骑车**被**一辆汽车撞**倒了**。", py: "Lùkǒu de dēng hěn àn, tā zuótiān wǎnshang qí chē bèi yí liàng qìchē zhuàng dǎo le.", en: "The light at the intersection is dim — last night he got knocked off his bike by a car.", note: "Only the RECEIVER must be definite; the agent after 被 may be brand-new (一辆汽车). 倒了 = the obligatory result tail." },
        { tag: "叫+给", cn: "在景区，我手里的零食**叫**猴子**给**抢**走了**。", py: "Zài jǐngqū, wǒ shǒu li de língshí jiào hóuzi gěi qiǎng zǒu le.", en: "At the scenic spot, a monkey snatched the snacks right out of my hand.", note: "叫 must name its agent (猴子); flavour-给 slips in before the verb — deletable. 抢 qiǎng = 'to snatch'; 抢走了 = verb + result + 了." },
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — flip the camera",
      short: "Builder",
      intro: "Several of these are 把-sentences flipped into 被 — keep the verb chunk intact and stack the extras in front.",
      items: [
        { tiles: ["我的", "钱包", "被", "小偷", "偷走", "了"], py: "Wǒ de qiánbāo bèi xiǎotōu tōu zǒu le.", en: "My wallet was stolen by a pickpocket.", hint: "Receiver + 被 + agent + verb + tail." },
        { tiles: ["杯子", "被", "他", "打破", "了"], py: "Bēizi bèi tā dǎpò le.", en: "The cup was broken by him.", hint: "The mirror of 他把杯子打破了 — same verb chunk 打破了." },
        { tiles: ["他", "从来", "没", "被", "老师", "批评过"], py: "Tā cónglái méi bèi lǎoshī pīpíng guo.", en: "He has never been criticized by the teacher.", hint: "从来没 stacks BEFORE 被; 过 rides on the verb." },
        { tiles: ["我的", "伞", "让", "人", "拿走了"], py: "Wǒ de sǎn ràng rén ná zǒu le.", en: "Someone took my umbrella.", hint: "让-passive: the agent slot must be filled — 人 does the job." },
        { tiles: ["他", "被", "大家", "选为", "班长"], py: "Tā bèi dàjiā xuǎn wéi bānzhǎng.", en: "He was elected class monitor by everyone.", hint: "Neutral 被: 选为 = elect as — an honour, not a mishap." },
        { tiles: ["这件事", "由", "李老师", "负责"], py: "Zhè jiàn shì yóu Lǐ lǎoshī fùzé.", en: "Teacher Li is in charge of this matter.", hint: "Formal 由 assigns responsibility — and needs no verb tail." },
        { tiles: ["蛋糕", "被", "弟弟", "给", "吃光了"], py: "Dàngāo bèi dìdi gěi chī guāng le.", en: "The cake got completely eaten up by my little brother.", hint: "Flavour-给 slips in right before the verb; 吃光了 = eaten to nothing." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · When NOT to write a passive at all</h3>
<p>Run this check before reaching for 被: <b>is the subject a thing, and is the event routine?</b> Then use the notional passive — <span class="zh">饭做好了、票卖光了、问题解决了、衣服洗干净了</span>. Use 被 only when the event is remarkable (theft, punishment, surprise) or the agent matters.</p>
<h3>2 · Verbs that refuse 被</h3>
<p>The same families that refuse 把: feelings and cognition (<span class="zh">喜欢、知道、认识、觉得、同意</span>), existence (<span class="zh">是、有、在</span>), directions (<span class="zh">来、去</span>). ✗<span class="zh">他被大家认识</span> → ✓<span class="zh">大家都认识他</span>.</p>
<h3>3 · 被 + potential complement: also banned</h3>
<p>✗<span class="zh">这个问题被解决得了</span> — ability doesn't combine with passives. Say <span class="zh">这个问题解决得了/解决不了</span> (notional topic + potential complement).</p>
<h3>4 · The 被 sentence inside bigger machines</h3>
<p class="zh" style="font-size:1.15rem">他<b class="hl">怕被</b>老师批评，不敢说话。 — modal-like verbs (怕/想/不愿意) stack before 被 like everything else.</p>
<h3>5 · 挨 and 受 — passive cousins in reading texts</h3>
<p>HSK 4 reading may show <span class="zh">挨批评</span> (ái, suffer a scolding) or <span class="zh">受欢迎</span> (shòu, receive → be popular). Treat them as vocabulary: 受欢迎 = "is welcomed/popular" with no 被 anywhere.</p>
<div class="callout tip"><span class="co-title">💡 Translation reflex to install</span>
English passive → first try topic + result (<span class="zh">写完了</span> style). If the sentence reports a mishap or names a culprit → 被. If it assigns a duty in formal writing → 由. Only these three doors.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Real exam difficulty, start to finish. The distractors are exactly the clinic's diseases — spot them.",
      items: [
        { q: '<span class="zh">他的建议没___大家接受。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">把</span>', '<span class="zh">对</span>', '<span class="zh">给大家</span>'], a: 0, expl: "建议 is the receiver, 大家 the agent → 没被大家接受. With 把 the suggestion would be doing the accepting." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">他被邀请参加了婚礼。</span>', '<span class="zh">我的钱让人偷了。</span>', '<span class="zh">门叫风给吹开了。</span>', '<span class="zh">花瓶叫打破了。</span>'], a: 3, expl: "叫 cannot drop its agent — 叫打破了 has an empty slot. Fix: 花瓶叫人打破了 or 花瓶被打破了. Only 被 goes agent-less." },
        { q: '<span class="zh">杯子被他___。</span>', choices: ['<span class="zh">打破了</span>', '<span class="zh">打破</span>', '<span class="zh">破</span>', '<span class="zh">打</span>'], a: 0, expl: "Verb + tail, always: 打破了 gives action (打) + result (破) + 了. A bare 打 or 打破 leaves the sentence hanging." },
        { q: 'Arrange: <span class="zh">没 / 被 / 幸好 / 我的秘密 / 发现</span>', choices: ['<span class="zh">幸好我的秘密没被发现。</span>', '<span class="zh">幸好我的秘密被没发现。</span>', '<span class="zh">我的秘密幸好被发现没。</span>', '<span class="zh">幸好没我的秘密被发现。</span>'], a: 0, expl: "Comment adverb 幸好 first, receiver next, negation BEFORE 被, verb last: 幸好我的秘密没被发现。" },
        { q: '<span class="zh">很多观众都___这个故事感动得哭了。</span>', choices: ['<span class="zh">被</span>', '<span class="zh">把</span>', '<span class="zh">给了</span>', '<span class="zh">跟</span>'], a: 0, expl: "The audience RECEIVES the emotion → 被…感动. With 把 the audience would be moving the story. 被 + thing-agent + V得… is a favourite exam frame." },
        { q: '<span class="zh">今天的会议___张老师主持。</span> (主持 zhǔchí = to chair)', choices: ['<span class="zh">由</span>', '<span class="zh">被</span>', '<span class="zh">把</span>', '<span class="zh">叫</span>'], a: 0, expl: "Formal assignment of duty, no misfortune, no result-tail → 由. 被主持 would weirdly cast the meeting as a victim." },
        { q: "“The letter has been sent.” — most natural?", choices: ['<span class="zh">信寄出去了。</span>', '<span class="zh">信被寄出去了。</span>', '<span class="zh">信被人给寄了。</span>', '<span class="zh">把信寄出去了它。</span>'], a: 0, expl: "Routine result for a thing → notional passive, no marker. English 'has been sent' is a passive; the Chinese default is silence — think Spanish 'se envió'." },
        { q: '<span class="zh">因为天气原因，比赛可能会___。</span>', choices: ['<span class="zh">被取消</span>', '<span class="zh">被取消了</span>', '<span class="zh">取消被</span>', '<span class="zh">让取消</span>'], a: 0, expl: "可能会 already sits before 被; after a modal the event is unrealized, so no 了: 可能会被取消. 让 would demand an agent." },
        { q: '<span class="zh">房间被妹妹打扫干净了。</span> = ?', choices: ['<span class="zh">妹妹把房间打扫干净了。</span>', '<span class="zh">妹妹被房间打扫干净了。</span>', '<span class="zh">房间把妹妹打扫干净了。</span>', '<span class="zh">妹妹把房间干净了。</span>'], a: 0, expl: "被→把 mirror: agent takes the front, 把 + receiver, verb chunk 打扫干净了 travels unchanged. ✗妹妹把房间干净了 lost the verb — a tail can't survive alone." },
        { q: "Which sentence is unnatural?", choices: ['<span class="zh">他被大家批评了。</span>', '<span class="zh">这首歌被大家很喜欢。</span>', '<span class="zh">他被公司派到国外去了。</span>', '<span class="zh">小偷被警察抓住了。</span>'], a: 1, expl: "喜欢 is a feeling — nothing happens to the song, so 被 is out (and 很 can't modify a 被-phrase anyway). Say 大家都很喜欢这首歌." },
        { q: '<span class="zh">我差点儿___骗了，还好你提醒了我。</span>', choices: ['<span class="zh">被人给</span>', '<span class="zh">把人给</span>', '<span class="zh">给人被</span>', '<span class="zh">被给人</span>'], a: 0, expl: "被 + agent (人) + flavour-给 + verb: 被人给骗了. The little 给 must stand directly before the verb — and 把 would make you the trickster." },
        { q: "<span class=\"zh\">在图书馆里，大声说话是不___的。</span>", choices: ["<span class=\"zh\">被允许</span>", "<span class=\"zh\">被允许了</span>", "<span class=\"zh\">允许被</span>", "<span class=\"zh\">让允许</span>"], a: 0, expl: "General rules negate with 不, completed events with 没 — both stand BEFORE 被: 不被允许. ✗被允许了 sticks 了 into a stative 是…的 frame; ✗允许被 puts the marker after its verb; ✗让允许 leaves 让's obligatory agent slot empty — only 被 goes agent-less. Register note: 是不被允许的 is rulebook/announcement style, like 被禁止 in the consolidation set — in everyday speech natives just say 不能大声说话 or 不允许大声说话." },
        { q: "<span class=\"zh\">为了保护环境，这种塑料袋明年可能会___。</span>", choices: ["<span class=\"zh\">被禁止使用</span>", "<span class=\"zh\">被禁止使用了</span>", "<span class=\"zh\">禁止被使用</span>", "<span class=\"zh\">让禁止使用</span>"], a: 0, expl: "Modals stack before the marker: 可能会 + 被禁止使用 — same frame as 可能会被取消. After 可能会 the event is unrealized, so no 了. ✗禁止被使用 puts 被 after the verb that governs it, and ✗让禁止使用 leaves 让 without its required agent." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">被动句 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Rule</th><th>Remember</th></tr>
<tr><td>Frame</td><td>Receiver + 时间/否定词/能愿动词 + <b class="hl">被</b> (+agent) (+给) + V + <b class="hl">tail</b></td></tr>
<tr><td>Verb never bare</td><td>被偷<b class="hl">了</b> · 被拿<b class="hl">走了</b> · 被翻译<b class="hl">成</b>英文 · 被感动<b class="hl">得</b>哭了 — ✗被偷</td></tr>
<tr><td>Agent slot</td><td>被(人)V ✓ agent droppable · <b>让/叫 + agent obligatory</b>: 让人拿走了 · ✗叫拿走了</td></tr>
<tr><td>Flavour 给</td><td>optional before the verb: 被人<b class="hl">给</b>骗了 — deletable, colloquial</td></tr>
<tr><td>Before 被</td><td>negation·time·modals: <b class="hl">没</b>被发现 · <b class="hl">从来没</b>被批评过 · <b class="hl">可能会</b>被取消</td></tr>
<tr><td>把 ⇄ 被</td><td>他把杯子打破了 ⇄ 杯子被他打破了 — verb chunk never changes</td></tr>
<tr><td>Receiver</td><td>definite only: 我的词典 ✓ · 一本词典 ✗</td></tr>
<tr><td>Default for things</td><td>notional passive, NO marker: 作业写完了 · 票卖光了 · 信寄出去了 (≈ Spanish "se hizo")</td></tr>
<tr><td>由</td><td>formal duty, agent required, no tail: 会议由张老师主持 · 由…负责</td></tr>
<tr><td>被-refusing verbs</td><td>feelings/cognition 喜欢·知道·认识 · existence 是·有·在 · potential V得C</td></tr>
<tr><td>Top collocations</td><td>被偷 被抢 被罚 被骗 被批评 被发现 被打破 · neutral: 被邀请 被评为 被选为</td></tr>
</table></div>`
    }
  ]
});
