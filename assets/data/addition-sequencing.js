/* HSK 4 Grammar Lab — 递进与并列 (addition & sequencing) */
registerPage({
  id: "addition-sequencing",
  zh: "**递进**与并列",
  title: "Addition & sequencing — stacking ideas the Chinese way",
  subtitle: "From HSK 3 you know 因为…所以 and 虽然…但是. HSK 4 adds the 'and'-family: escalating with 不但…而且, pairing qualities with 既…又, running actions in parallel with 一边…一边, and chaining steps with 先…再…然后. The exam's favourite trick: making you put 不但 in the wrong place.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: three ways to say <b class="hl">“and”</b> — and they don\'t mix',
      short: "Big idea",
      html: `
<p>English throws one little word — <i>and</i> — at three very different jobs. Chinese gives each job its own machine, and HSK 4 checks whether you grab the right one:</p>
<ul>
<li><b class="hl">Escalation (递进):</b> B goes further than A. <span class="zh">他<b class="hl">不但</b>会说汉语，<b class="hl">而且还</b>会写毛笔字。</span> — “not only… but also”.</li>
<li><b class="hl">Parallel qualities (并列):</b> A and B sit side by side, equal weight. <span class="zh">这种水果<b class="hl">既</b>甜<b class="hl">又</b>便宜。</span> — “both… and”.</li>
<li><b class="hl">Sequence (顺承):</b> A happens, then B. <span class="zh"><b class="hl">先</b>吃饭，<b class="hl">再</b>看电影。</span> — “first… then”.</li>
</ul>
<div class="pattern">Subj + <span class="slot">不但</span> + A，而且 + <span class="slot">还/也</span> + B<small>B must top A — same direction, one step further. 不仅 is the slightly more formal twin of 不但.</small></div>
<p>What follows <span class="zh">而且</span> is usually not bare: a little <span class="pill">还</span> or <span class="pill">也</span> pushes the second half upward — <span class="zh">而且<b class="hl">还</b>…</span> “and what's more…”. In speech, <span class="zh">还/也</span> can even replace 而且 entirely: <span class="zh">他不但会说汉语，<b class="hl">还</b>会写毛笔字。</span></p>
<div class="callout cmp"><span class="co-title">🇬🇧 🇪🇸 🇩🇪 You already own this pattern</span>
English <i>“not only… but also”</i>, Spanish <i>“no solo… sino también”</i>, German <i>„nicht nur…, sondern auch“</i> — all three force a paired structure, and all three demand that part B outdo part A. 不但…而且 is the same machine. One difference: English can drop “but also” (“He speaks Chinese, and even writes calligraphy”); Chinese strongly prefers to keep <b>both halves</b> of the pair.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The Reading section deletes one half of a pair and asks you to restore it; the Writing section hands you 不但/而且/也 as loose tiles. If you know which word calls which partner — and where the subject goes — these are free points.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'THE position rule: where does <span class="zh hl">不但</span> go?',
      short: "Position rule",
      html: `
<p>This single rule decides most 不但-questions on the exam. Ask: <b>do both halves share the same subject?</b></p>
<h3>1 · Same subject → 不但 comes <b class="hl">after</b> the subject</h3>
<div class="pattern"><span class="slot">Subj</span> + 不但 + A，而且(还/也) + B<small>The subject is stated once, up front, and rules both halves.</small></div>
<p class="zh" style="font-size:1.15rem">✓ <b class="hl">他</b>不但会说汉语，而且还会说上海话。<br>✗ 不但<b class="hl">他</b>会说汉语，而且还会说上海话。</p>
<h3>2 · Different subjects → 不但 comes <b class="hl">before</b> the first subject</h3>
<div class="pattern">不但 + <span class="slot">Subj 1</span> + A，<span class="slot">Subj 2</span> + 也 + B<small>Each half gets its own subject; the second half almost always uses 也 (with or without 而且).</small></div>
<p class="zh" style="font-size:1.15rem">✓ 不但<b class="hl">他</b>会说汉语，<b class="hl">他妹妹</b>也会。<br>✗ <b class="hl">他</b>不但会说汉语，他妹妹也会。</p>
<div class="callout tip"><span class="co-title">💡 The subject test</span>
Before placing 不但, scan for a second subject in the second half. One subject → 不但 slips <b>inside</b> (after it). Two subjects → 不但 jumps <b>outside</b> (in front). Exactly the same logic applies to 不仅 and even to 因为/虽然 in careful writing — learn it once, reuse it everywhere.</div>
<div class="callout cmp"><span class="co-title">🇩🇪 German does the same dance</span>
„Er kann <b>nicht nur</b> Chinesisch…“ vs „<b>Nicht nur er</b> kann Chinesisch, auch seine Schwester…“ — when the second clause switches subject, <i>nicht nur</i> moves in front of the first subject. 不但 follows the identical instinct.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — hear the pairs click",
      short: "Examples",
      intro: "Tap to listen. Watch two things in every sentence: which pair is used, and where the subject stands.",
      items: [
        { tag: "不但·same", cn: "这家饭馆的菜**不但**好吃，**而且**很便宜。", py: "Zhè jiā fànguǎn de cài búdàn hǎochī, érqiě hěn piányi.", en: "The food at this restaurant is not only delicious but also cheap.", note: "One subject (的菜) — so 不但 sits after it." },
        { tag: "不但·还", cn: "他**不但**自己学得好，**而且还**经常帮助别的同学。", py: "Tā búdàn zìjǐ xué de hǎo, érqiě hái jīngcháng bāngzhù bié de tóngxué.", en: "He not only studies well himself, he also often helps other classmates.", note: "而且 + 还 — the standard reinforced combo." },
        { tag: "不但·diff", cn: "**不但**我喜欢这部电影，我父母**也**很喜欢。", py: "Búdàn wǒ xǐhuan zhè bù diànyǐng, wǒ fùmǔ yě hěn xǐhuan.", en: "Not only do I like this movie — my parents like it a lot too.", note: "Two subjects (我 / 我父母) — 不但 jumps in front of the first one." },
        { tag: "既…又", cn: "她**既**聪明**又**努力，老师们都很喜欢她。", py: "Tā jì cōngming yòu nǔlì, lǎoshīmen dōu hěn xǐhuan tā.", en: "She is both smart and hard-working; all the teachers like her.", note: "Two balanced qualities of the same person — 既…又 territory." },
        { tag: "又…又", cn: "这种水果**又**甜**又**便宜，我们多买一点儿吧。", py: "Zhè zhǒng shuǐguǒ yòu tián yòu piányi, wǒmen duō mǎi yìdiǎnr ba.", en: "This fruit is both sweet and cheap — let's buy a bit more.", note: "又…又 is the everyday, spoken cousin of 既…又." },
        { tag: "一边", cn: "别**一边**吃饭，**一边**看手机。", py: "Bié yìbiān chīfàn, yìbiān kàn shǒujī.", en: "Don't look at your phone while eating.", note: "Two ACTIONS at the same time. 一边 never joins adjectives." },
        { tag: "一方面", cn: "出国留学**一方面**能提高外语水平，**另一方面**也能让人变得更独立。", py: "Chūguó liúxué yì fāngmiàn néng tígāo wàiyǔ shuǐpíng, lìng yì fāngmiàn yě néng ràng rén biàn de gèng dúlì.", en: "Studying abroad improves your foreign language on the one hand, and makes you more independent on the other.", note: "Two ASPECTS of one topic — for arguments, not for actions." },
        { tag: "先…再", cn: "你**先**把作业写完，**再**去踢足球。", py: "Nǐ xiān bǎ zuòyè xiě wán, zài qù tī zúqiú.", en: "Finish your homework first, then go play football.", note: "Instruction about the future → 先…再. Notice 先 comes AFTER the subject." },
        { tag: "然后", cn: "我们**先**去吃饭，**然后**去看电影，**最后**坐地铁回家。", py: "Wǒmen xiān qù chīfàn, ránhòu qù kàn diànyǐng, zuìhòu zuò dìtiě huí jiā.", en: "First we'll eat, then see a movie, and finally take the subway home.", note: "The full chain: 先…然后…最后. Add 接着 for 'right after that'." },
        { tag: "什么的", cn: "周末我一般在家洗衣服、打扫房间、上网**什么的**。", py: "Zhōumò wǒ yìbān zài jiā xǐ yīfu, dǎsǎo fángjiān, shàngwǎng shénmede.", en: "On weekends I usually stay home doing laundry, cleaning, going online and stuff like that.", note: "什么的 closes an open list in speech — like English '…and stuff'." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: '“Both… and”: 既…又 vs 又…又 vs 一边…一边 vs 一方面',
      short: "The 又-family",
      intro: "Four look-alikes that English flattens into 'and'. The exam loves swapping them — know exactly what each one may join.",
      tabs: [
        {
          label: "既…又",
          html: `<p><span class="zh">既 A 又 B</span> joins two <b>parallel qualities or facts about the same subject</b> — a touch more written than 又…又. The two sides must be <b class="hl">balanced</b>: same length, same type (adj + adj, or verb phrase + verb phrase), and no extra degree adverb crashing one side (✗<span class="zh">既干净又<s>非常</s>大</span>).</p>`,
          examples: [
            { cn: "这个房间**既**干净**又**安静。", py: "Zhège fángjiān jì gānjìng yòu ānjìng.", en: "This room is both clean and quiet." },
            { cn: "坐地铁上班**既**方便**又**便宜。", py: "Zuò dìtiě shàngbān jì fāngbiàn yòu piányi.", en: "Taking the subway to work is both convenient and cheap.", note: "既…又 happily joins verb phrases too — as long as both sides weigh the same." }
          ]
        },
        {
          label: "又…又",
          html: `<p><span class="zh">又 A 又 B</span> is the <b>colloquial</b> workhorse for two adjectives or verbs that hold true at the same time. It's what native speakers actually say about people, food and weather. Same balance rule as 既…又; the sides are typically short.</p>`,
          examples: [
            { cn: "他弟弟**又**高**又**帅。", py: "Tā dìdi yòu gāo yòu shuài.", en: "His younger brother is tall and handsome.", note: "THE sentence learners ruin with 一边…一边. Qualities → 又…又." },
            { cn: "我今天**又**累**又**饿，什么都不想做。", py: "Wǒ jīntiān yòu lèi yòu è, shénme dōu bù xiǎng zuò.", en: "Today I'm tired and hungry — I don't feel like doing anything." }
          ]
        },
        {
          label: "一边…一边",
          html: `<p><span class="zh">一边 A 一边 B</span> means two <b class="hl">ACTIONS happening simultaneously</b> — one person, two ongoing activities. It can <b>never</b> join qualities:</p>
<p class="zh" style="font-size:1.15rem">✗ 他<s>一边</s>高<s>一边</s>帅。 → ✓ 他<b class="hl">又</b>高<b class="hl">又</b>帅。</p>
<p>Being tall is not an activity — you can't “do” it while doing handsome. In quick speech 一边 shrinks to <span class="zh">边…边</span>: <span class="zh">边走边聊</span>.</p>`,
          examples: [
            { cn: "他喜欢**一边**跑步，**一边**听音乐。", py: "Tā xǐhuan yìbiān pǎobù, yìbiān tīng yīnyuè.", en: "He likes listening to music while running." },
            { cn: "我们**一边**喝茶，**一边**聊天儿。", py: "Wǒmen yìbiān hē chá, yìbiān liáotiānr.", en: "We chatted over tea.", note: "Both slots hold real, ongoing verbs — the test for 一边." }
          ]
        },
        {
          label: "一方面…另一方面",
          html: `<p><span class="zh">一方面 A，另一方面 B</span> lines up two <b>aspects, reasons or considerations</b> of one topic — “on one hand… on the other”. It lives in explanations and arguments, not in physical descriptions. The second half likes a helping <span class="pill">也</span> or <span class="pill">还</span>.</p>`,
          examples: [
            { cn: "我想换工作，**一方面**是为了工资，**另一方面**也是想试试新的东西。", py: "Wǒ xiǎng huàn gōngzuò, yì fāngmiàn shì wèile gōngzī, lìng yì fāngmiàn yě shì xiǎng shìshi xīn de dōngxi.", en: "I want to change jobs — partly for the salary, and partly because I want to try something new." },
            { cn: "骑车上班**一方面**能锻炼身体，**另一方面**还能保护环境。", py: "Qí chē shàngbān yì fāngmiàn néng duànliàn shēntǐ, lìng yì fāngmiàn hái néng bǎohù huánjìng.", en: "Biking to work exercises your body on one hand, and protects the environment on the other." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: 'Sequencing & adding arguments: 先…再/然后, 另外, 什么的',
      short: "Sequencing",
      html: `
<h3>1 · The step chain: 先 → 再/然后 → 接着 → 最后</h3>
<div class="pattern">Subj + <span class="slot">先</span> A，<span class="slot">再/然后</span> B，<span class="slot">接着</span> C，<span class="slot">最后</span> D<small>先 is an adverb — it stands AFTER the subject, before the verb. ✗先你洗手 → ✓你先洗手</small></div>
<h3>2 · 再 vs 然后 — the exam's favourite swap</h3>
<p><span class="zh hl">再</span> links steps that <b>haven't happened yet</b>: plans, instructions, suggestions. <span class="zh">你先把手洗干净，<b class="hl">再</b>吃饭。</span> For <b>past narration</b>, 再 is out — use neutral <span class="zh hl">然后</span> or <span class="zh hl">接着</span>:</p>
<p class="zh" style="font-size:1.15rem">✗ 昨天我们先去了长城，<s>再</s>去了故宫。<br>✓ 昨天我们先去了长城，<b class="hl">然后</b>去了故宫。</p>
<p>This is the same 再 you met in the <b>又·再·还</b> topic: 再 always points at the not-yet-done.</p>
<h3>3 · Adding a whole new argument: 另外 · 再说 · 还有 · 此外</h3>
<p>These don't glue clauses inside a sentence — they add a <b>new point to the conversation</b>:</p>
<ul>
<li><span class="zh hl">另外</span> — “besides that / additionally”, neutral, starts a new item: <span class="zh">我要一个烤鸭，<b class="hl">另外</b>再来两瓶啤酒。</span></li>
<li><span class="zh hl">再说</span> — spoken “besides…”, adds a supporting reason for a decision: <span class="zh">别去爬山了，太晚了，<b class="hl">再说</b>天气也不好。</span></li>
<li><span class="zh hl">还有</span> — casual “oh, and one more thing”: <span class="zh"><b class="hl">还有</b>，别忘了带护照！</span></li>
<li><span class="zh hl">此外</span> — formal, written “in addition”; at home in notices and essays: <span class="zh">图书馆周一闭馆。<b class="hl">此外</b>，周六只开放半天。</span></li>
</ul>
<h3>4 · Leaving the list open: …什么的 / …等（等）</h3>
<p><span class="zh">苹果、香蕉<b class="hl">什么的</b></span> — spoken “…and stuff”. <span class="zh">北京、上海<b class="hl">等</b>大城市</span> — written “…etc.”, and 等 can be followed by a noun that sums up the list. Never combine them, and never put <span class="zh">和</span> before 什么的.</p>
<div class="callout warn"><span class="co-title">⚠️ 既然 is NOT the brother of 既</span>
<span class="zh">既…又</span> = “both…and”. <span class="zh">既然…就</span> = “since (that's the case)… then” — a cause-effect pattern from the 因果 topic. Seeing 既然? Think <i>reason</i>, not <i>list</i>.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "table",
      title: "English → Chinese: pick the right machine",
      short: "EN → 中文 map",
      intro: "When you translate from English (or Spanish/German), this table chooses the pattern for you.",
      head: ["You want to say…", "Machine", "Example"],
      rows: [
        ['“not only A, but also B” (B tops A)', '<span class="zh">不但/不仅 A，而且(还/也) B</span>', '<span class="zh">他不但会做饭，而且做得很好吃。</span> <span class="py-hint">Tā búdàn huì zuò fàn, érqiě zuò de hěn hǎochī.</span>'],
        ['“both A and B” (two qualities, neutral)', '<span class="zh">既 A 又 B</span>', '<span class="zh">这份工作既轻松又有意思。</span> <span class="py-hint">Zhè fèn gōngzuò jì qīngsōng yòu yǒu yìsi.</span>'],
        ['“A and B” (two qualities, colloquial)', '<span class="zh">又 A 又 B</span>', '<span class="zh">这儿的冬天又冷又干燥。</span> <span class="py-hint">Zhèr de dōngtiān yòu lěng yòu gānzào.</span>'],
        ['“while doing A, (also) doing B”', '<span class="zh">一边 A，一边 B</span>', '<span class="zh">她一边做饭，一边唱歌。</span> <span class="py-hint">Tā yìbiān zuò fàn, yìbiān chàng gē.</span>'],
        ['“on one hand… on the other hand”', '<span class="zh">一方面…，另一方面(也/还)…</span>', '<span class="zh">一方面想省钱，另一方面又想住得舒服。</span> <span class="py-hint">Yì fāngmiàn xiǎng shěng qián, lìng yì fāngmiàn yòu xiǎng zhù de shūfu.</span>'],
        ['“besides, …” (new argument, spoken)', '<span class="zh">再说 / 另外 / 还有</span>', '<span class="zh">太贵了，再说颜色我也不喜欢。</span> <span class="py-hint">Tài guì le, zàishuō yánsè wǒ yě bù xǐhuan.</span>'],
        ['“in addition, …” (formal, written)', '<span class="zh">此外</span>', '<span class="zh">此外，请提前十分钟到。</span> <span class="py-hint">Cǐwài, qǐng tíqián shí fēnzhōng dào.</span>'],
        ['“first…, then…, finally…” (plan/instruction)', '<span class="zh">先…，再…，最后…</span>', '<span class="zh">先填表，再交钱，最后拿号。</span> <span class="py-hint">Xiān tián biǎo, zài jiāo qián, zuìhòu ná hào.</span>'],
        ['“…and then…” (telling what happened)', '<span class="zh">先…，然后/接着…</span>', '<span class="zh">我先洗了澡，然后就睡了。</span> <span class="py-hint">Wǒ xiān xǐ le zǎo, ránhòu jiù shuì le.</span>'],
        ['“…and stuff / …etc.”', '<span class="zh">…什么的（spoken）/ …等（written）</span>', '<span class="zh">我买了面包、牛奶什么的。</span> <span class="py-hint">Wǒ mǎi le miànbāo, niúnǎi shénmede.</span>']
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — pairs and positions",
      short: "Checkpoint",
      intro: "Six quick questions. If the position rule is fuzzy, go back up before the final drill.",
      items: [
        { q: 'Same person can drive AND repair cars. Which is correct?', choices: ['<span class="zh">不但他会开车，而且还会修车。</span>', '<span class="zh">他不但会开车，而且还会修车。</span>', '<span class="zh">他会开车不但，而且还会修车。</span>', '<span class="zh">他不但会开车，还而且会修车。</span>'], a: 1, expl: "Same subject in both halves → 不但 goes AFTER the subject: 他不但…. 不但 before 他 would signal a second subject is coming." },
        { q: '“Not only do I like it, my parents like it too.”', choices: ['<span class="zh">我不但喜欢，我父母也喜欢。</span>', '<span class="zh">不但我喜欢，我父母也喜欢。</span>', '<span class="zh">我不但喜欢，不但我父母喜欢。</span>', '<span class="zh">我也喜欢，不但我父母喜欢。</span>'], a: 1, expl: "Two different subjects (我 / 我父母) → 不但 jumps in FRONT of the first subject: 不但我…，我父母也…." },
        { q: '<span class="zh">他___高___帅，很多女孩儿都喜欢他。</span>', choices: ['<span class="zh">一边…一边</span>', '<span class="zh">又…又</span>', '<span class="zh">先…再</span>', '<span class="zh">一方面…另一方面</span>'], a: 1, expl: "高 and 帅 are qualities, not actions — 又…又 (or 既…又). 一边…一边 only joins simultaneous ACTIONS: the classic ✗一边高一边帅 trap." },
        { q: '<span class="zh">昨天我们先去了长城，___去了故宫。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">然后</span>', '<span class="zh">先</span>', '<span class="zh">一边</span>'], a: 1, expl: "Past narration → 然后 (or 接着). 再 only chains steps that haven't happened yet — plans and instructions." },
        { q: '<span class="zh">这台电脑不但很轻，而且___很便宜。</span>', choices: ['<span class="zh">还</span>', '<span class="zh">再</span>', '<span class="zh">才</span>', '<span class="zh">就</span>'], a: 0, expl: "而且 + 还 is the standard reinforcement: 'and moreover'. 再 means 'again/then (future)', 才/就 don't add — they time." },
        { q: '<span class="zh">周末我喜欢看看书、听听音乐___。</span>', choices: ['<span class="zh">什么的</span>', '<span class="zh">和什么的</span>', '<span class="zh">什么</span>', '<span class="zh">的什么</span>'], a: 0, expl: "什么的 attaches directly to the last list item — no 和, no reshuffling. Written style would use …等." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — one bug per patient",
      short: "Error clinic",
      intro: "Each sentence contains exactly one addition/sequencing disease. Diagnose before you peek.",
      items: [
        { wrong: "不但他会说汉语，而且还会说广东话。", right: "他不但会说汉语，而且还会说广东话。", py: "Tā búdàn huì shuō Hànyǔ, érqiě hái huì shuō Guǎngdōnghuà.", en: "He can speak not only Mandarin but also Cantonese.", expl: "Both halves are about 他 — same subject, so 不但 must come AFTER it. 不但 up front promises a second subject that never arrives." },
        { wrong: "他不但会说汉语，他妹妹也会。", right: "不但他会说汉语，他妹妹也会。", py: "Búdàn tā huì shuō Hànyǔ, tā mèimei yě huì.", en: "Not only can he speak Chinese — his younger sister can too.", expl: "The mirror-image bug: two subjects (他 / 他妹妹), so 不但 must move in FRONT of the first subject." },
        { wrong: "她一边漂亮，一边聪明。", right: "她又漂亮又聪明。", py: "Tā yòu piàoliang yòu cōngming.", en: "She is both pretty and smart.", expl: "一边…一边 joins simultaneous ACTIONS. 漂亮 and 聪明 are qualities — use 又…又 or 既…又." },
        { wrong: "上个周末我们先参观了博物馆，再去了一家四川饭馆。", right: "上个周末我们先参观了博物馆，然后去了一家四川饭馆。", py: "Shàng ge zhōumò wǒmen xiān cānguān le bówùguǎn, ránhòu qù le yì jiā Sìchuān fànguǎn.", en: "Last weekend we first visited the museum, then went to a Sichuan restaurant.", expl: "再 chains future/planned steps only. Completed past events take 然后 or 接着." },
        { wrong: "这个房间既干净又非常大。", right: "这个房间既干净又大。", py: "Zhège fángjiān jì gānjìng yòu dà.", en: "This room is both clean and big.", expl: "The one bug is 非常: inside 既…又 the two sides stay parallel bare adjectives — a degree adverb on one side breaks the balance. Want intensity? Move it outside the pattern: 这个房间非常干净，也非常大。" },
        { wrong: "我买了苹果、香蕉和什么的。", right: "我买了苹果、香蕉什么的。", py: "Wǒ mǎi le píngguǒ, xiāngjiāo shénmede.", en: "I bought apples, bananas and stuff like that.", expl: "什么的 replaces the rest of the list — it glues straight onto the last item, never after 和." },
        { wrong: "先你把手洗干净，再吃饭。", right: "你先把手洗干净，再吃饭。", py: "Nǐ xiān bǎ shǒu xǐ gānjìng, zài chīfàn.", en: "Wash your hands first, then eat.", expl: "先 is an adverb, and adverbs live after the subject, before the verb — same slot rule as 就/才/也." },
        { wrong: "吃了药以后，他的病不但没好，而且更严重了。", right: "吃了药以后，他的病不但没好，反而更严重了。", py: "Chī le yào yǐhòu, tā de bìng búdàn méi hǎo, fǎn'ér gèng yánzhòng le.", en: "After taking the medicine, his illness not only didn't improve — it actually got worse.", expl: "When the first half is negative (不但不/不但没…), the second half flips to 反而 'on the contrary', not 而且. 而且 continues in the SAME direction." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — assemble the pairs",
      short: "Builder",
      intro: "Writing-section style. First find the pair, then place the subject(s) — the rest assembles itself.",
      items: [
        { tiles: ["他", "不但", "会说汉语", "而且", "还", "会说法语"], py: "Tā búdàn huì shuō Hànyǔ, érqiě hái huì shuō Fǎyǔ.", en: "He can speak not only Chinese but also French.", hint: "One subject → 不但 goes after it; 而且还 opens half two." },
        { tiles: ["不但", "他", "喜欢踢足球", "他弟弟", "也", "喜欢"], py: "Búdàn tā xǐhuan tī zúqiú, tā dìdi yě xǐhuan.", en: "Not only does he like playing football — his younger brother does too.", hint: "Two subjects → 不但 stands before the first one." },
        { tiles: ["这儿的冬天", "又", "冷", "又", "干燥"], py: "Zhèr de dōngtiān yòu lěng yòu gānzào.", en: "Winters here are cold and dry.", hint: "Two qualities, colloquial — the 又…又 sandwich.", alt: [["这儿的冬天", "又", "干燥", "又", "冷"]] },
        { tiles: ["我们", "一边", "喝咖啡", "一边", "讨论计划"], py: "Wǒmen yìbiān hē kāfēi, yìbiān tǎolùn jìhuà.", en: "We discussed the plan over coffee.", hint: "Two simultaneous actions — each 一边 grabs one verb phrase.", alt: [["我们", "一边", "讨论计划", "一边", "喝咖啡"]] },
        { tiles: ["你", "先", "把表格", "填好", "再", "交给老师"], py: "Nǐ xiān bǎ biǎogé tián hǎo, zài jiāo gěi lǎoshī.", en: "Fill in the form first, then hand it to the teacher.", hint: "Instruction about the future: 先…再. 先 sits after 你." },
        { tiles: ["学游泳", "一方面", "能锻炼身体", "另一方面", "也", "很有意思"], py: "Xué yóuyǒng yì fāngmiàn néng duànliàn shēntǐ, lìng yì fāngmiàn yě hěn yǒu yìsi.", en: "Learning to swim exercises your body on one hand, and is good fun on the other.", hint: "Two aspects of one topic; 也 helps half two.", alt: [["学游泳", "一方面", "很有意思", "另一方面", "也", "能锻炼身体"]] },
        { tiles: ["我们", "先", "坐火车", "然后", "换地铁", "最后", "走十分钟"], py: "Wǒmen xiān zuò huǒchē, ránhòu huàn dìtiě, zuìhòu zǒu shí fēnzhōng.", en: "We first take the train, then change to the subway, and finally walk ten minutes.", hint: "The full chain: 先 → 然后 → 最后." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · Negative escalation flips to 反而</h3>
<p><span class="zh">不但<b class="hl">不/没</b> A，<b class="hl">反而</b> B</span> — “not only not A, but on the contrary B”: <span class="zh">我帮他，他不但不感谢我，反而怪我。</span> 而且 would wrongly keep the same direction.</p>
<h3>2 · 而且 can fly solo — 不但 can't</h3>
<p><span class="zh">这个办法很简单，<b class="hl">而且</b>不花钱。</span> ✓ — adding without announcing. But a 不但 with no follow-up feels like a joke without a punchline: if you open with 不但, you owe the listener a 而且/还/也.</p>
<h3>3 · 并且 — 而且's businesslike twin</h3>
<p>In written or formal Chinese, <span class="zh">并且</span> joins two verb phrases of equal weight: <span class="zh">请填好表格，<b class="hl">并且</b>带上护照。</span> Slightly less “escalating” than 而且 — more “and furthermore, do this”.</p>
<h3>4 · 甚至 — the extreme end of addition</h3>
<p>When the added item is surprising, 甚至 tops the scale: <span class="zh">他忙得<b class="hl">甚至</b>忘了吃饭。</span> It teams up with 都/也 — that's the 连…都 logic from the “even” topic.</p>
<h3>5 · 接着 = seamless next step</h3>
<p><span class="zh">接着</span> means the next action follows <b>immediately</b>, often same activity continued: <span class="zh">他说完，<b class="hl">接着</b>就唱了一首歌。</span> Works for past and future — the all-terrain sequencer.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the ordering task, pair-words are magnets: find 不但 → look for the tile with 而且/还/也; find 先 → hunt for 再/然后/最后. Place the pair skeleton first, then hang subjects and objects onto it.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Eleven questions at exam difficulty. The distractors are the real traps — read every option.",
      items: [
        { q: 'Choose the correct sentence:', choices: ['<span class="zh">不但这家店的蛋糕好吃，而且很好看。</span>', '<span class="zh">这家店的蛋糕不但好吃，而且很好看。</span>', '<span class="zh">这家店的蛋糕好吃不但，而且很好看。</span>', '<span class="zh">这家店的蛋糕不但好吃，很好看而且。</span>'], a: 1, expl: "One subject (蛋糕) rules both halves → 不但 after the subject. 而且 always opens the second clause, never trails it." },
        { q: 'Choose the correct sentence:', choices: ['<span class="zh">他不但没来，连电话也没打。</span>', '<span class="zh">不但他没来，连电话也没打。</span>', '<span class="zh">他没来不但，连电话也没打。</span>', '<span class="zh">不但没来他，连电话也没打。</span>'], a: 0, expl: "Same subject 他 does both (not coming, not calling) → 他不但…. ✗不但他没来 pretends a second subject is coming." },
        { q: 'Which sentence is correct?', choices: ['<span class="zh">这里的海鲜既新鲜又便宜。</span>', '<span class="zh">这里的海鲜既新鲜又非常便宜。</span>', '<span class="zh">既这里的海鲜新鲜又便宜。</span>', '<span class="zh">这里的海鲜新鲜既又便宜。</span>'], a: 0, expl: "既…又 needs two balanced bare adjectives after the subject. 非常 breaks the balance; 既 never precedes the subject." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">他一边开车，一边打电话，太危险了。</span>', '<span class="zh">她一边工作，一边照顾孩子。</span>', '<span class="zh">这个地方一边安静，一边漂亮。</span>', '<span class="zh">我们一边走，一边看地图。</span>'], a: 2, expl: "安静 and 漂亮 are qualities, not actions — 一边 can't hold them. Say 这个地方既安静又漂亮。" },
        { q: '<span class="zh">他先关了灯，___锁上门，最后离开了办公室。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">接着</span>', '<span class="zh">先</span>', '<span class="zh">一边</span>'], a: 1, expl: "The chain already happened (关了…锁上…离开了) → 接着/然后. 再 is reserved for steps still to come." },
        { q: '<span class="zh">吃了药以后，他的病不但没好，___更严重了。</span>', choices: ['<span class="zh">而且</span>', '<span class="zh">反而</span>', '<span class="zh">所以</span>', '<span class="zh">还是</span>'], a: 1, expl: "不但没/不 + 反而: the outcome runs OPPOSITE to expectation. 而且 only escalates in the same direction." },
        { q: '<span class="zh">今天别去爬山了，太晚了，___天气也不好。</span>', choices: ['<span class="zh">再说</span>', '<span class="zh">然后</span>', '<span class="zh">接着</span>', '<span class="zh">既然</span>'], a: 0, expl: "Adding a second reason for a decision in speech → 再说 'besides'. 然后/接着 sequence events; 既然 introduces a known premise." },
        { q: 'A library notice reads: <span class="zh">本馆周一闭馆。___，本周六开放时间改为上午九点到十二点。</span>', choices: ['<span class="zh">此外</span>', '<span class="zh">再说</span>', '<span class="zh">什么的</span>', '<span class="zh">还是</span>'], a: 0, expl: "Formal written notice → 此外 'in addition'. 再说 is chatty self-justification — wrong register." },
        { q: '<span class="zh">住在学校宿舍，___很方便，___也比较便宜。</span>', choices: ['<span class="zh">一边…一边</span>', '<span class="zh">一方面…另一方面</span>', '<span class="zh">先…然后</span>', '<span class="zh">又…既</span>'], a: 1, expl: "Two considerations in an argument → 一方面…另一方面. (又…既 is the right pair in the wrong order — 既 must come first.)" },
        { q: '<span class="zh">___你已经决定了，就好好儿去做吧。</span>', choices: ['<span class="zh">既</span>', '<span class="zh">既然</span>', '<span class="zh">不但</span>', '<span class="zh">又</span>'], a: 1, expl: "The false friend: 既…又 pairs qualities, 既然…就 means 'since (that's settled)'. A premise + 就-conclusion needs 既然." },
        { q: 'Put in order: ① <span class="zh">而且交通也很方便</span> ② <span class="zh">这个小区不但环境好</span> ③ <span class="zh">所以我们决定搬到这儿来</span>', choices: ['①②③', '②①③', '②③①', '③②①'], a: 1, expl: "不但 opens the pair (after subject 这个小区), 而且…也 continues it, 所以 draws the conclusion: ②①③." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">递进·并列·顺承 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Job</th><th>Machine</th><th>Watch out</th></tr>
<tr><td>not only… but also</td><td><b class="hl">不但/不仅 A，而且(还/也) B</b></td><td>Same subject → Subj + 不但；different subjects → 不但 + Subj₁…，Subj₂ 也…</td></tr>
<tr><td>not only not… on the contrary</td><td>不但<b class="hl">不/没</b> A，<b class="hl">反而</b> B</td><td>Negative first half flips 而且 → 反而</td></tr>
<tr><td>both… and (neutral)</td><td><b class="hl">既 A 又 B</b></td><td>Balanced sides, no 很/非常 inside</td></tr>
<tr><td>both… and (spoken)</td><td><b class="hl">又 A 又 B</b></td><td>Adjectives/verbs only, short & equal</td></tr>
<tr><td>while doing A, doing B</td><td><b class="hl">一边 A，一边 B</b></td><td>ACTIONS only — ✗一边高一边帅</td></tr>
<tr><td>on one hand… on the other</td><td><b class="hl">一方面…，另一方面(也/还)…</b></td><td>Aspects & reasons, not actions</td></tr>
<tr><td>first… then (future/instructions)</td><td><b class="hl">先…，再…</b></td><td>先 AFTER the subject</td></tr>
<tr><td>then (past narration / neutral)</td><td><b class="hl">然后 / 接着</b></td><td>Past sequence never takes 再</td></tr>
<tr><td>besides (new argument)</td><td><b class="hl">另外 / 再说 / 还有</b>（spoken）· <b class="hl">此外</b>（written）</td><td>Match the register</td></tr>
<tr><td>…and stuff / etc.</td><td><b class="hl">…什么的</b>（spoken）· <b class="hl">…等(等)</b>（written）</td><td>No 和 before 什么的</td></tr>
</table></div>
<p><b>Golden reflex:</b> see 不但 → hunt for 而且/还/也 and run the <b>subject test</b>; see 先 → hunt for 再/然后/最后; qualities → 又/既, actions → 一边, arguments → 一方面/再说.</p>`
    }
  ]
});
