/* HSK 4 Grammar Lab — 又・再・还 (three kinds of "again") */
registerPage({
  id: "you-zai-hai",
  zh: "**又**・**再**・**还**",
  title: "又 vs 再 vs 还 — three kinds of “again”",
  subtitle: "English squeezes 'again' and 'still' into two words; Chinese splits the job three ways by TIME. You've met all three at HSK 2-3 — HSK 4 tests whether you can pick the right one under pressure, and it plants the same three traps every year.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: where does the repeat sit on the timeline?',
      short: "Big idea",
      html: `
<p>All three adverbs answer “what about one more time?” — but each one points at a different part of the timeline:</p>
<div class="pattern"><span class="slot">又</span> already happened again (fact, stamped) &nbsp;·&nbsp; <span class="slot">再</span> will/should happen again (not yet) &nbsp;·&nbsp; <span class="slot">还</span> hasn't stopped (still going)<small>Ask one question: has the repeat already occurred, is it still ahead, or is the first round simply not over?</small></div>
<ul>
<li><span class="zh"><b class="hl">又</b>迟到了</span> — “late <i>again</i>” — it happened, the stamp is on the page. 又 usually travels with 了.</li>
<li><span class="zh"><b class="hl">再</b>来一次</span> — “once more (please/later)” — the repeat is hypothetical, future, or a command.</li>
<li><span class="zh"><b class="hl">还</b>在睡觉</span> — “<i>still</i> sleeping” — nothing repeated at all; round one never ended.</li>
</ul>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 Your languages already split this</span>
German: 又 = <i>schon wieder</i> („Er ist <b>schon wieder</b> zu spät“), 再 = <i>noch (ein)mal</i> („Sag es <b>noch mal</b>“), 还 = <i>(immer) noch</i> („Er schläft <b>noch</b>“). Spanish: 又 = <i>otra vez</i> about the past („<b>Otra vez</b> llegó tarde“), 再 = <i>otra vez / de nuevo</i> about the future („dilo <b>otra vez</b>“), 还 = <i>todavía / aún</i> („<b>todavía</b> está durmiendo“). English is the odd one out — “again” covers both 又 and 再, which is exactly why this is a trap for you.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The fill-the-blank section almost always contains one 又/再/还 slot, and the three wrong options are… the other two plus 也. If you can date-stamp the event, you get a free point.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: 'The contrast at a glance',
      short: "Core table",
      intro: "One row per word: when it points, what it glues to, and its signature patterns.",
      head: ["Word", "Points at", "Typical company", "Signature example"],
      rows: [
        ['<span class="zh hl">又</span> <span class="py-hint">yòu</span>', 'Repeat <b>already realized</b> (or certain/cyclical)', 'verb + <span class="zh">了</span>; <span class="zh">又…又…</span>; <span class="zh">又不/又没</span> (rebuttal)', '<span class="zh">他今天<b class="hl">又</b>迟到了。</span> <span class="py-hint">Tā jīntiān yòu chídào le.</span> Late again — it already happened.'],
        ['<span class="zh hl">再</span> <span class="py-hint">zài</span>', 'Repeat <b>not yet happened</b>: future, requests, hypotheticals', 'commands; <span class="zh">先…再…</span>; <span class="zh">再也不…了</span>; <span class="zh">再 + adj + 一点儿</span>', '<span class="zh">请<b class="hl">再</b>说一遍。</span> <span class="py-hint">Qǐng zài shuō yí biàn.</span> Say it once more — the repeat is still ahead.'],
        ['<span class="zh hl">还</span> <span class="py-hint">hái</span>', '<b>Unfinished state</b> (still) or <b>addition</b> (also, even)', '<span class="zh">还在 + V</span>; <span class="zh">还没…呢</span>; <span class="zh">还想/还要</span>; <span class="zh">比…还</span>', '<span class="zh">他<b class="hl">还</b>在睡觉。</span> <span class="py-hint">Tā hái zài shuìjiào.</span> Still asleep — round one never ended.']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: 'Model sentences — stamp, plan, or ongoing?',
      short: "Examples",
      intro: "Tap 🔊 to listen. For each one, decide first: did the repeat already happen (又), is it still ahead (再), or is it simply not over (还)?",
      items: [
        { tag: "又", cn: "糟糕，我**又**忘带钥匙了。", py: "Zāogāo, wǒ yòu wàng dài yàoshi le.", en: "Oh no, I forgot my keys again.", note: "Already happened → 又…了. The 了 is 又's loyal sidekick." },
        { tag: "再", cn: "这个电影真不错，我想**再**看一遍。", py: "Zhège diànyǐng zhēn búcuò, wǒ xiǎng zài kàn yí biàn.", en: "This movie is great — I'd like to watch it again.", note: "The rewatch hasn't happened yet → 再. Note the position: 想 + 再 + verb." },
        { tag: "还", cn: "都十点了，他**还**在睡觉。", py: "Dōu shí diǎn le, tā hái zài shuìjiào.", en: "It's already ten and he's still sleeping.", note: "Nothing repeats — the sleeping never stopped. 还在 + V = still V-ing." },
        { tag: "先…再", cn: "我们先去故宫，**再**去长城吧。", py: "Wǒmen xiān qù Gùgōng, zài qù Chángchéng ba.", en: "Let's visit the Forbidden City first, then the Great Wall.", note: "This 再 isn't 'again' at all — it sequences future actions: 'then, after that'." },
        { tag: "又·add", cn: "他点了一条鱼，**又**点了一个汤。", py: "Tā diǎn le yì tiáo yú, yòu diǎn le yí ge tāng.", en: "He ordered a fish, and then ordered a soup as well.", note: "又 can stack completed actions: did A, then also did B — both already stamped." },
        { tag: "还·also", cn: "除了游泳，我**还**喜欢爬山。", py: "Chúle yóuyǒng, wǒ hái xǐhuan páshān.", en: "Besides swimming, I also like hiking.", note: "还 = 'additionally'. 除了…还… is a fixed team." },
        { tag: "又…又", cn: "昨天**又**刮风**又**下雨，我们只好在家里看了一天电视。", py: "Zuótiān yòu guā fēng yòu xià yǔ, wǒmen zhǐhǎo zài jiāli kàn le yì tiān diànshì.", en: "Yesterday it was windy AND rainy, so we had no choice but to watch TV at home all day.", note: "又 A 又 B = 'both A and B' — two facts true at the same time." },
        { tag: "再也不", cn: "那家饭馆的菜太难吃了，我**再也不**去了。", py: "Nà jiā fànguǎn de cài tài nánchī le, wǒ zài yě bú qù le.", en: "The food at that restaurant is terrible — I'm never going back.", note: "再也不…了 = 'never again (from now on)'. Future refusal → built on 再." },
        { tag: "又·future!", cn: "明天**又**是星期一了，真不想上班。", py: "Míngtiān yòu shì xīngqīyī le, zhēn bù xiǎng shàngbān.", en: "Tomorrow is Monday again — I really don't want to go to work.", note: "THE trap: a future event, but 又! Mondays are certain and cyclical, so the calendar has already 'stamped' it. More below." },
        { tag: "还没…呢", cn: "你**还**没做完作业呢，怎么能出去玩？", py: "Nǐ hái méi zuò wán zuòyè ne, zěnme néng chūqù wán?", en: "You haven't finished your homework yet — how can you go out to play?", note: "还没…呢 = 'not yet'. The soft 呢 underlines the unfinished state." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: 'One tab per word — the full portrait',
      short: "又·再·还",
      intro: "Each word is bigger than one translation. Meet all their jobs, including the ones that don't look like 'again'.",
      tabs: [
        {
          label: "又 — the stamp",
          html: `<p><span class="zh hl">又</span> stamps a repeat as <b>fact</b>. Three jobs:</p>
<ul>
<li><b>Happened again:</b> <span class="zh">又 + V + 了</span> — past repetition, often with a sigh.</li>
<li><b>Certain / cyclical future:</b> calendar facts and inevitable events count as “already stamped”: <span class="zh">明天<b class="hl">又</b>是星期一</span>, <span class="zh">下星期<b class="hl">又</b>要考试了</span>.</li>
<li><b>Emphatic rebuttal:</b> <span class="zh">又不/又没</span> — “it's not as if…!” No repetition at all, pure attitude.</li>
</ul>`,
          examples: [
            { cn: "他上星期迟到了两次，今天**又**迟到了。", py: "Tā shàng xīngqī chídào le liǎng cì, jīntiān yòu chídào le.", en: "He was late twice last week, and today he was late again.", note: "Realized repeat: 又 + V + 了." },
            { cn: "你别生气，他**又**不是故意的。", py: "Nǐ bié shēngqì, tā yòu bú shì gùyì de.", en: "Don't be angry — it's not like he did it on purpose.", note: "又不是… = rebuttal 又. Also common: 我又没说你 'I wasn't even talking about you!'" },
            { cn: "马上**又**要放假了，你打算去哪儿？", py: "Mǎshàng yòu yào fàngjià le, nǐ dǎsuàn qù nǎr?", en: "The holidays are coming around again — where do you plan to go?", note: "Future but inevitable/cyclical → 又要…了, not 再." }
          ]
        },
        {
          label: "再 — the plan",
          html: `<p><span class="zh hl">再</span> handles every repeat that <b>hasn't happened yet</b>. Four jobs:</p>
<ul>
<li><b>Requests & commands:</b> <span class="zh">再说一遍 · 再来一次 · 再吃点儿</span>.</li>
<li><b>Sequencing (“then”):</b> <span class="zh">先…再…</span> — not “again” at all, just “afterwards”.</li>
<li><b>Never again:</b> <span class="zh">再也不…了</span> (won't ever again) / <span class="zh">再也没…过</span> (never did since).</li>
<li><b>“A bit more”:</b> <span class="zh">再 + adjective + 一点儿</span>: <span class="zh">再便宜一点儿吧</span>.</li>
</ul>`,
          examples: [
            { cn: "请**再**说一遍，我没听清楚。", py: "Qǐng zài shuō yí biàn, wǒ méi tīng qīngchu.", en: "Please say that again — I didn't catch it.", note: "The classic classroom 再." },
            { cn: "这件事我们以后**再**谈吧。", py: "Zhè jiàn shì wǒmen yǐhòu zài tán ba.", en: "Let's discuss this matter later.", note: "以后再 + V = postpone. The action waits in the future — 再's home turf." },
            { cn: "你**再**不起床，就要迟到了！", py: "Nǐ zài bù qǐchuáng, jiù yào chídào le!", en: "If you don't get up right now, you'll be late!", note: "再不 + V, 就… = 'if you keep on not V-ing, then…' — a threat built on the not-yet." }
          ]
        },
        {
          label: "还 — the unfinished",
          html: `<p><span class="zh hl">还</span> says round one <b>isn't over</b> — or the list isn't over. Four jobs:</p>
<ul>
<li><b>Still:</b> <span class="zh">还在 + V</span>, <span class="zh">还 + adjective</span> (<span class="zh">天还早</span>).</li>
<li><b>Not yet:</b> <span class="zh">还没(有) + V + 呢</span>.</li>
<li><b>Additionally:</b> <span class="zh">还有 · 还想 · 还要</span> — one more item on the list.</li>
<li><b>Even (comparison):</b> <span class="zh">比…还…</span> — <span class="zh">今天比昨天还热</span>.</li>
</ul>
<div class="callout warn"><span class="co-title">⚠️ Not the same word as 还是</span>
<span class="zh">还是</span> (“or” in questions / “had better” / “still”) is treated as its own vocabulary item. Don't back-translate its meanings onto lone 还.</div>`,
          examples: [
            { cn: "十一点了，图书馆里**还**有很多人。", py: "Shíyī diǎn le, túshūguǎn li hái yǒu hěn duō rén.", en: "It's eleven o'clock and there are still lots of people in the library.", note: "State continuing past its expected end → 还." },
            { cn: "我**还**没想好去不去呢。", py: "Wǒ hái méi xiǎng hǎo qù bu qù ne.", en: "I still haven't decided whether to go.", note: "还没 + V + 呢 = not yet (and the matter is open)." },
            { cn: "今天比昨天**还**热。", py: "Jīntiān bǐ zuótiān hái rè.", en: "Today is even hotter than yesterday.", note: "比…还 = 'even more' — 还 stretches a quality further. Details live in the Comparisons topic." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: 'Minimal pairs — same frame, different timeline',
      short: "Minimal pairs",
      intro: "Six pairs where swapping the adverb changes the timeline (or breaks the sentence). Read each pair aloud and point at the timeline: behind you, ahead of you, or under your feet?",
      head: ["Sentence A", "Sentence B", "What changes"],
      rows: [
        ['<span class="zh">他昨天<b class="hl">又</b>来了。</span> <span class="py-hint">Tā zuótiān yòu lái le.</span>', '<span class="zh">他说他明天<b class="hl">再</b>来。</span> <span class="py-hint">Tā shuō tā míngtiān zài lái.</span>', 'Same visitor, same verb. 又 = the repeat visit already happened; 再 = it\'s still ahead.'],
        ['<span class="zh">我<b class="hl">又</b>看了一遍。</span> <span class="py-hint">Wǒ yòu kàn le yí biàn.</span>', '<span class="zh">我想<b class="hl">再</b>看一遍。</span> <span class="py-hint">Wǒ xiǎng zài kàn yí biàn.</span>', '又…了 reports the rewatch as done; 想再… announces the wish for a future rewatch.'],
        ['<span class="zh">他<b class="hl">还</b>想去一次香港。</span> <span class="py-hint">Tā hái xiǎng qù yí cì Xiānggǎng.</span>', '<span class="zh">他想<b class="hl">再</b>去一次香港。</span> <span class="py-hint">Tā xiǎng zài qù yí cì Xiānggǎng.</span>', 'Both correct! 还 sits BEFORE 想 (the wish still stands); 再 sits AFTER 想 (repeat the trip). Position is the whole game.'],
        ['<span class="zh">你<b class="hl">还</b>吃啊？</span> <span class="py-hint">Nǐ hái chī a?</span>', '<span class="zh">你<b class="hl">再</b>吃一点儿吧。</span> <span class="py-hint">Nǐ zài chī yìdiǎnr ba.</span>', '还吃 = disbelief that the eating hasn\'t stopped; 再吃 = a host\'s warm offer of one more helping.'],
        ['<span class="zh"><b class="hl">又</b>下雨了！</span> <span class="py-hint">Yòu xià yǔ le!</span>', '<span class="zh">雨<b class="hl">还</b>在下。</span> <span class="py-hint">Yǔ hái zài xià.</span>', '又 = it stopped and started AGAIN (new round); 还在 = the same rain never stopped (one long round).'],
        ['<span class="zh">明天<b class="hl">又</b>是星期一。</span> <span class="py-hint">Míngtiān yòu shì xīngqīyī.</span>', '<span class="zh">✗ 明天<b class="hl">再</b>是星期一。</span>', 'Cyclical, guaranteed futures take 又 — the calendar already stamped them. 再 needs an event someone can still do (or not do); Monday doesn\'t ask permission.']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Position & negation — where each word actually sits',
      short: "Position rules",
      html: `
<h3>1 · 还 before the modal, 再 after it</h3>
<p class="zh" style="font-size:1.15rem"><b class="hl">还</b>想去 — the wanting continues &nbsp;&nbsp;·&nbsp;&nbsp; 想<b class="hl">再</b>去 — go one more time &nbsp;&nbsp;·&nbsp;&nbsp; <b class="hl">还</b>想<b class="hl">再</b>去一次 — both at once!</p>
<p>Rule of thumb: <b>还 scopes over the whole wish; 再 scopes over the single verb.</b> The same split works with 要 and 能: <span class="zh">还要一杯</span> (one more cup onto the order) vs <span class="zh">要再等一会儿</span> (must wait a while longer).</p>
<h3>2 · Negation: three different marriages</h3>
<ul>
<li><span class="zh"><b class="hl">再</b>不 + V, 就…</span> — “if you still don't V…” (warning). And <span class="zh">不<b class="hl">再</b> / <b class="hl">再</b>也不…了</span> — “not anymore / never again”. Position flips the flavor: 再也不 is the dramatic one.</li>
<li><span class="zh"><b class="hl">又</b>没/不 + V</span> — rebuttal: <span class="zh">我<b class="hl">又</b>没迟到，你看我干什么？</span> “It's not as if I was late!” No repeat anywhere — 又 just adds indignation.</li>
<li><span class="zh"><b class="hl">还</b>没 + V (+呢)</span> — “not yet”: <span class="zh">他<b class="hl">还</b>没回来呢。</span></li>
</ul>
<h3>3 · 先…再… is sequencing, not repetition</h3>
<p class="zh" style="font-size:1.15rem">先洗手，<b class="hl">再</b>吃饭。</p>
<p>“First A, then B.” Because B waits its turn in the future, Chinese files it under 再 — even though nothing repeats. English “then” tempts you toward <span class="zh">然后</span>; both work, and 先…再 is tighter.</p>
<div class="callout tip"><span class="co-title">💡 The 60-second test</span>
Blank before a verb? Ask in order: ① Already happened (or calendar-certain)? → <b>又</b>. ② Not happened yet / request / “then”? → <b>再</b>. ③ Nothing new — old state dragging on, or adding to a list? → <b>还</b>.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — date-stamp the repeat",
      short: "Checkpoint",
      intro: "Six blanks. Timeline first, translation second.",
      items: [
        { q: '<span class="zh">服务员，___来一瓶啤酒！</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">也</span>'], a: 1, expl: "A request — the extra beer hasn't arrived yet → 再. (还要一瓶啤酒 would also work, but before the bare verb 来, the slot belongs to 再.)" },
        { q: '<span class="zh">他昨天迟到了，今天___迟到了。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">还</span>', '<span class="zh">就</span>'], a: 1, expl: "Today's lateness already happened (…了) → 又. 再迟到了 mixes a future word with a done deed — the #1 learner error." },
        { q: '<span class="zh">十二点了，弟弟___在打游戏。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">才</span>'], a: 2, expl: "The gaming session never stopped — a continuing state → 还在 + V." },
        { q: '<span class="zh">先把课文读一遍，___做后面的练习。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">都</span>'], a: 1, expl: "先…再… = first A, then B. The second action waits in the future, so it's 再's job — no repetition needed." },
        { q: '<span class="zh">那个地方太危险了，我___也不去了。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">总</span>'], a: 1, expl: "再也不…了 = 'never again from now on' — a future refusal, built on 再. The chunk is fixed; memorize it whole." },
        { q: '<span class="zh">明天___是星期一了，周末过得真快。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">还</span>', '<span class="zh">刚</span>'], a: 1, expl: "Future, but cyclical and certain — the calendar already stamped Monday → 又. This is the trap the exam recycles every year." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — timeline surgery",
      short: "Error clinic",
      intro: "One bug per sentence, and it's always about the timeline or the position. Diagnose before revealing.",
      items: [
        { wrong: "昨天他再迟到了。", right: "昨天他又迟到了。", py: "Zuótiān tā yòu chídào le.", en: "He was late again yesterday.", expl: "昨天 + 了 = the repeat already happened → 又. 再 only handles repeats that are still ahead." },
        { wrong: "请又说一遍。", right: "请再说一遍。", py: "Qǐng zài shuō yí biàn.", en: "Please say it again.", expl: "A request points at the future → 再. 又 would absurdly stamp the repetition as already done." },
        { wrong: "我想还看一遍这个电影。", right: "我想再看一遍这个电影。", py: "Wǒ xiǎng zài kàn yí biàn zhège diànyǐng.", en: "I'd like to watch this movie one more time.", expl: "Position bug: after a modal (想), the repeat-adverb is 再. If you want 还, it must climb BEFORE the modal: 我还想看一遍." },
        { wrong: "我还没吃饭了。", right: "我还没吃饭呢。", py: "Wǒ hái méi chīfàn ne.", en: "I haven't eaten yet.", expl: "没 negates completion, so completed-action 了 can't co-exist with it. The 'not yet' frame is 还没…呢." },
        { wrong: "先吃饭，又去看电影吧。", right: "先吃饭，再去看电影吧。", py: "Xiān chīfàn, zài qù kàn diànyǐng ba.", en: "Let's eat first, then go see a movie.", expl: "先 pairs with 再 (or 然后) for future sequencing. 又 would claim the movie trip already happened — but the 吧 says you're still planning." },
        { wrong: "我不再也抽烟了。", right: "我再也不抽烟了。", py: "Wǒ zài yě bù chōu yān le.", en: "I'm never smoking again.", expl: "The dramatic 'never again' chunk has a fixed word order: 再 + 也 + 不 + V + 了. Shuffle it and the sentence collapses." },
        { wrong: "明天再是周末了，我们去哪儿玩？", right: "明天又是周末了，我们去哪儿玩？", py: "Míngtiān yòu shì zhōumò le, wǒmen qù nǎr wán?", en: "It's the weekend again tomorrow — where shall we go?", expl: "Cyclical calendar facts are treated as already stamped, even in the future → 又是…了. 再 needs an action someone could still perform." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — assemble the timeline",
      short: "Builder",
      intro: "Arrange the tiles. Watch two things: which 'again' fits the timeline, and where it sits relative to modals and negation.",
      items: [
        { tiles: ["请", "再", "给我", "一点儿", "时间"], py: "Qǐng zài gěi wǒ yìdiǎnr shíjiān.", en: "Please give me a little more time.", hint: "Request → 再, right before the verb phrase." },
        { tiles: ["他", "今天", "又", "忘了", "带", "作业"], py: "Tā jīntiān yòu wàng le dài zuòyè.", en: "He forgot to bring his homework again today.", hint: "Already happened → 又 before the verb.", alt: [["今天", "他", "又", "忘了", "带", "作业"]] },
        { tiles: ["我们", "先", "买票", "再", "进去"], py: "Wǒmen xiān mǎi piào zài jìnqù.", en: "Let's buy tickets first and then go in.", hint: "先 + action A, 再 + action B." },
        { tiles: ["爷爷", "八十岁了", "还", "每天", "跑步"], py: "Yéye bāshí suì le hái měitiān pǎobù.", en: "Grandpa is eighty and still runs every day.", hint: "Continuing state → 还, before the time-frequency phrase." },
        { tiles: ["这里的", "冬天", "又", "冷", "又", "干燥"], py: "Zhèli de dōngtiān yòu lěng yòu gānzào.", en: "Winters here are both cold and dry.", hint: "又 A 又 B — two adjectives, both true at once." },
        { tiles: ["我", "再也", "不", "相信", "他", "了"], py: "Wǒ zài yě bù xiāngxìn tā le.", en: "I'll never trust him again.", hint: "The fixed chain: 再也 + 不 + verb + 了." },
        { tiles: ["你", "还", "没", "回答", "我的", "问题", "呢"], py: "Nǐ hái méi huídá wǒ de wèntí ne.", en: "You still haven't answered my question.", hint: "还没 + V + 呢 = not yet." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 又要…了: the dreaded certain future</h3>
<p><span class="zh">下星期<b class="hl">又要</b>考试<b class="hl">了</b>。</span> — “There's ANOTHER exam next week.” Future + 又 is legal whenever the event is scheduled, cyclical, or inescapable. The speaker's sigh is part of the grammar.</p>
<h3>2 · 再 + adjective: “even more so, please”</h3>
<p><span class="zh">能不能<b class="hl">再</b>便宜一点儿？</span> — bargaining 再. Also <span class="zh"><b class="hl">再</b>大一点儿 · <b class="hl">再</b>早一点儿</span>. The adjective's increase lies in the future, so 再 owns it.</p>
<h3>3 · 再…也: “no matter how much more”</h3>
<p><span class="zh"><b class="hl">再</b>难，我<b class="hl">也</b>要学下去。</span> — “However hard it gets, I'll keep studying.” A concession frame built on hypothetical 再; it shakes hands with the 即使…也 family (see Contrast & concession).</p>
<h3>4 · 还 = “surprisingly / even” before verbs</h3>
<p><span class="zh">他<b class="hl">还</b>会做四川菜呢！</span> — “He can even cook Sichuan food!” 还…呢 adds pleasant surprise. Cousin of the 比…还 “even more” you met above.</p>
<h3>5 · 再说 — two words in one</h3>
<p><span class="zh">这件事以后<b class="hl">再说</b>吧。</span> = “let's deal with it later.” But sentence-initial <span class="zh"><b class="hl">再说</b>，票也太贵了。</span> = “besides, the tickets are too expensive.” The exam likes the second one in reading passages.</p>
<div class="callout warn"><span class="co-title">⚠️ 也 is not the fourth “again”</span>
When MCQ options include 也, remember: 也 compares two DIFFERENT subjects doing the same thing (他去，我也去). 又/再/还 keep the SAME subject repeating or continuing. Different axis entirely.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve blanks and bug-hunts at exam difficulty. The wrong options are the exact confusions this page just cured — prove they're gone.",
      items: [
        { q: '<span class="zh">这道菜真好吃，我们下次___点吧。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">也</span>'], a: 1, expl: "下次 = future repeat → 再. 又 would need the reorder to have already happened." },
        { q: '<span class="zh">他上个月去了上海，这个月___去了一次。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">还</span>', '<span class="zh">先</span>'], a: 1, expl: "去了 — done deal → 又…了. The month being recent doesn't make it future!" },
        { q: '<span class="zh">A：你吃饱了吗？ B：没有，我___想吃一碗。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">还</span>', '<span class="zh">就</span>'], a: 2, expl: "The blank sits BEFORE the modal 想 — that seat belongs to 还 (the wish continues). 再 would need to sit after 想: 我想再吃一碗." },
        { q: '<span class="zh">都半夜了，楼上___在唱歌，真受不了。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">才</span>'], a: 2, expl: "The singing never stopped → 还在 + V. 又在唱歌 would mean they stopped and started a NEW round — possible, but 都半夜了…真受不了 complains about continuation." },
        { q: '<span class="zh">你___不复习，明天的考试就危险了。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">都</span>'], a: 1, expl: "再不 + V, 就… = 'if you keep on not studying, then…' — a warning about a still-avoidable future → 再." },
        { q: '<span class="zh">妈妈让我先洗手___吃饭。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">才</span>'], a: 1, expl: "先…再… — the standard future sequence. (先…才 exists but means the second step is LOCKED until the first — Mom is sequencing, not legislating.)" },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">明天我们再讨论吧。</span>', '<span class="zh">昨天他又来找你了。</span>', '<span class="zh">我再也不迟到了。</span>', '<span class="zh">下星期又见！</span>'], a: 3, expl: "Parting words point at a future meeting → 再见 / 下星期再见. 又见 would report that the meeting already happened again." },
        { q: '<span class="zh">我___没去过长城呢，这个周末一起去吧。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">刚</span>'], a: 2, expl: "还没…过…呢 = 'haven't ever yet' — unfinished business → 还. 再没…过 would need the 也: 再也没去过 (never went again after some point)." },
        { q: '<span class="zh">他___高___聪明，很多女孩都喜欢他。</span>', choices: ['<span class="zh">又…又</span>', '<span class="zh">再…再</span>', '<span class="zh">还…还</span>', '<span class="zh">也…也</span>'], a: 0, expl: "Two qualities true at once = 又…又. None of the other three doubles up in this frame." },
        { q: '<span class="zh">别生气了，他___不是故意的。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">才</span>', '<span class="zh">就</span>'], a: 1, expl: "又不是… = the rebuttal 又: 'it's not as if he meant it!'. No repetition — pure pushback. 才不是 exists too, but it's a first-person indignant denial ('I am NOT!')." },
        { q: '<span class="zh">这次没考好没关系，下次___努力一点儿就行。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">总</span>'], a: 1, expl: "下次 + a bit more effort = future increase → 再努力一点儿. This is 再 + adjective/verb + 一点儿, the bargaining pattern." },
        { q: '<span class="zh">电影已经开始十分钟了，他___没来。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">再</span>', '<span class="zh">还</span>', '<span class="zh">也</span>'], a: 2, expl: "还没来 = still hasn't arrived — the not-yet state persists. 又没来 would mean he failed to show up on yet another occasion (a different complaint)." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">又・再・还 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th class="zh">又 yòu</th><th class="zh">再 zài</th><th class="zh">还 hái</th></tr>
<tr><td>Timeline</td><td>repeat <b>done</b> (or certain)</td><td>repeat <b>ahead</b></td><td>round one <b>not over</b></td></tr>
<tr><td>Prototype</td><td class="zh">又迟到<b class="hl">了</b></td><td class="zh">请<b class="hl">再</b>说一遍</td><td class="zh"><b class="hl">还</b>在睡觉</td></tr>
<tr><td>Signature sets</td><td class="zh">又…又 · 又要…了 · 又不/又没(rebuttal)</td><td class="zh">先…再 · 再也不…了 · 再+adj+一点儿 · 再…也</td><td class="zh">还没…呢 · 还有/还想 · 比…还</td></tr>
<tr><td>With modals</td><td>—</td><td>AFTER: 想<b class="hl">再</b>去</td><td>BEFORE: <b class="hl">还</b>想去</td></tr>
<tr><td>Trap to dodge</td><td>明天又是星期一 ✓ (cyclical future = 又!)</td><td>✗ 昨天再迟到了</td><td>≠ 还是 (or / had better)</td></tr>
<tr><td>DE / ES</td><td>schon wieder · otra vez (ya)</td><td>noch mal · de nuevo (futuro)</td><td>(immer) noch · todavía</td></tr>
<tr><td>60-sec test</td><td colspan="3">① already happened / calendar-certain → 又 &nbsp; ② not yet / request / “then” → 再 &nbsp; ③ still going / one more on the list → 还</td></tr>
</table></div>`
    }
  ]
});
