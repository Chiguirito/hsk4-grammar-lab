/* HSK 4 Grammar Lab — 越来越 & 越…越 (more and more / the more… the more) */
registerPage({
  id: "yue-lai-yue",
  zh: "**越来越** & 越…越",
  title: "越来越 & 越…越 — gradual change done right",
  subtitle: "In HSK 3 you compared two things with 比. HSK 4 wants you to describe change over time — things getting colder, better, more expensive — and change that tracks another change. Two tiny patterns do all of it, and the exam knows exactly which two mistakes you'll make.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: an <span class="zh hl">escalator</span>, not a snapshot',
      short: "Big idea",
      html: `
<p><span class="zh">比</span> takes a snapshot: A is colder than B, today vs yesterday. <span class="zh hl">越来越</span> films a movie: the temperature is <b>on an escalator, going up (or down) as time passes</b>.</p>
<div class="pattern">Subject + <span class="slot">越来越</span> + Adjective / psych-verb (+ <span class="slot">了</span>)<small>越来越 is one unbreakable unit meaning “more and more (as time goes by)”. The 了 at the end signals “this is a change” — very often present.</small></div>
<p><span class="zh">天气<b class="hl">越来越</b>冷了。</span> — “The weather is getting colder and colder.” And it's not just for adjectives: verbs of feeling and knowing (<span class="zh">喜欢、想、了解、担心、习惯</span>) hop on the escalator too: <span class="zh">我<b class="hl">越来越</b>喜欢这里了。</span></p>
<div class="callout cmp"><span class="co-title">🇪🇸 🇩🇪 You already own this pattern</span>
Spanish <i>“cada vez más”</i> is a perfect one-to-one match: <i>“hace <b>cada vez más</b> frío”</i> = <span class="zh">天气越来越冷</span>. German doubles the comparative or uses <i>immer</i>: <i>„es wird <b>immer kälter</b>“</i>. Note what all three languages do: the degree word is <b>built into the pattern</b> — you don't add another “very”. Keep that instinct for the golden rule below.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
越来越 shows up in Listening (describing trends), Reading (choose the right adverb) and Writing (arrange the words). Its cousin 越…越 is a favourite of the sentence-ordering task, because the two 越's must land in exactly the right slots.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'Two golden bans + one little <span class="zh hl">了</span>',
      short: "Golden rules",
      html: `
<h3>Ban 1 · No degree adverb after 越来越</h3>
<p>越来越 already IS the degree. Adding <span class="zh">很 / 非常 / 太 / 特别</span> is like saying “more and more very good”:</p>
<p class="zh" style="font-size:1.15rem">✗ 他的发音越来越<s>很</s>好。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 他的发音越来越好了。</p>
<h3>Ban 2 · No specific amount after it either</h3>
<p>越来越 describes an open-ended trend, so it refuses measured differences like <span class="zh">一点儿 / 得多 / 三度</span>:</p>
<p class="zh" style="font-size:1.15rem">✗ 天气越来越冷<s>一点儿</s>。 &nbsp;&nbsp; ✗ 天气越来越冷<s>得多</s>。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 天气越来越冷了。</p>
<p>Need a measured difference? That's 比's job: <span class="zh">今天比昨天冷<b class="hl">一点儿</b></span>. The two patterns don't mix — ✗<span class="zh">今天<s>比昨天</s>越来越冷</span> is a classic exam wrong-answer.</p>
<h3>The sentence-final 了</h3>
<p>Since 越来越 reports a change of state, it usually teams up with the change-了 you know from HSK 3 (<span class="zh">天气冷<b class="hl">了</b></span>): <span class="zh">房价越来越高<b class="hl">了</b>。</span> The 了 is optional in general statements (<span class="zh">学汉语的人越来越多</span> as a known trend), but when you announce a change you've noticed, put it in.</p>
<div class="callout tip"><span class="co-title">💡 Negatives are fine</span>
The escalator can carry negative feelings down: <span class="zh">我越来越<b class="hl">不</b>想去了</span> (“I feel less and less like going”). The ban is only on 很/非常-type intensifiers, not on 不.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — feel the escalator",
      short: "Examples",
      intro: "Tap 🔊 to listen. Watch for the pattern's three friends: change-了 at the end, psych-verbs after 越来越, and the two 越's of 越…越.",
      items: [
        { tag: "adj", cn: "天气**越来越**冷了，你多穿点儿衣服。", py: "Tiānqì yuèláiyuè lěng le, nǐ duō chuān diǎnr yīfu.", en: "It's getting colder and colder — put on some more clothes.", note: "The classic frame: Subject + 越来越 + adjective + change-了." },
        { tag: "psych-V", cn: "我**越来越**喜欢这个城市了。", py: "Wǒ yuèláiyuè xǐhuan zhège chéngshì le.", en: "I like this city more and more.", note: "喜欢 is a feeling verb — no 很 needed, no 很 allowed." },
        { tag: "in 得", cn: "他汉语说得**越来越**流利了。", py: "Tā Hànyǔ shuō de yuèláiyuè liúlì le.", en: "His Chinese is getting more and more fluent.", note: "Inside a 得-complement, 越来越 sits right before the adjective: 说得越来越流利." },
        { tag: "多+noun", cn: "**越来越**多的年轻人选择在网上工作。", py: "Yuè lái yuè duō de niánqīngrén xuǎnzé zài wǎngshàng gōngzuò.", en: "More and more young people choose to work online.", note: "越来越多 + 的 + noun = 'more and more X'. Or flip it: 在网上工作的年轻人越来越多了." },
        { tag: "negative", cn: "这个电视节目**越来越**没意思了。", py: "Zhège diànshì jiémù yuèláiyuè méi yìsi le.", en: "This TV show is getting more and more boring.", note: "越来越 + 没意思/不方便/不耐烦 — trends can go downhill too." },
        { tag: "越…越", cn: "雨**越**下**越**大，我们只好在门口等着。", py: "Yǔ yuè xià yuè dà, wǒmen zhǐhǎo zài ménkǒu děng zhe.", en: "The rain kept getting heavier, so we had no choice but to wait at the entrance.", note: "Same subject 雨: the more it falls, the bigger it gets. 越 + verb, 越 + adjective." },
        { tag: "越…越", cn: "你**越**解释，我**越**糊涂。", py: "Nǐ yuè jiěshì, wǒ yuè hútu.", en: "The more you explain, the more confused I get.", note: "Two subjects, one 越 each, each 越 right before its own verb/adjective. 糊涂 (hútu) = muddled, confused." },
        { tag: "fixed", cn: "这份材料什么时候要？——**越快越好**！", py: "Zhè fèn cáiliào shénme shíhou yào? — Yuè kuài yuè hǎo!", en: "When do you need this document? — The sooner the better!", note: "越…越好 is a productive mini-pattern: 越多越好, 越便宜越好, 越早越好…" },
        { tag: "fixed", cn: "我**越**想**越**生气，一晚上没睡好。", py: "Wǒ yuè xiǎng yuè shēngqì, yì wǎnshang méi shuì hǎo.", en: "The more I thought about it, the angrier I got — I barely slept all night.", note: "越想越气 / 越想越生气 — a beloved native gem. Also 越看越喜欢, 越吃越想吃." },
        { tag: "trend", cn: "来这儿旅游的人**越来越**多了。", py: "Lái zhèr lǚyóu de rén yuèláiyuè duō le.", en: "More and more people are coming here to travel.", note: "多 works as the predicate adjective: 人越来越多 = 'people are ever more numerous'." },
        { tag: "一天比一天", cn: "爷爷的身体**一天比一天**好。", py: "Yéye de shēntǐ yì tiān bǐ yì tiān hǎo.", en: "Grandpa's health is getting better day by day.", note: "一天比一天 ≈ 越来越, but it counts the days one by one — see the edge cases section." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "越…越 — change that tracks another change",
      short: "越…越",
      intro: "越来越 tracks time. 越 A 越 B tracks A: as A increases, B increases. Three configurations, one golden position rule: each 越 sits directly before its verb or adjective.",
      tabs: [
        {
          label: "Same subject",
          html: `<p>One subject does both things: <b>the more it Vs, the more B it gets</b>.</p>
<div class="pattern">Subject + <span class="slot">越</span> + V/Adj₁ + <span class="slot">越</span> + Adj₂<small>The subject appears ONCE, before the first 越. ✗越雨下越大 is the #1 ordering-task trap.</small></div>`,
          examples: [
            { cn: "风**越**刮**越**大了。", py: "Fēng yuè guā yuè dà le.", en: "The wind is blowing harder and harder." },
            { cn: "他**越**跑**越**快，我根本追不上。", py: "Tā yuè pǎo yuè kuài, wǒ gēnběn zhuī bu shàng.", en: "He ran faster and faster — I couldn't catch up at all.", note: "追不上 = potential complement from the complements unit. HSK 4 loves stacking patterns." },
            { cn: "这首歌我**越**听**越**好听。", py: "Zhè shǒu gē wǒ yuè tīng yuè hǎotīng.", en: "The more I listen to this song, the better it sounds.", note: "Topic (这首歌) first, then subject, then the 越…越 machine." }
          ]
        },
        {
          label: "Two subjects",
          html: `<p>Clause A and clause B each get their own subject and their own 越 — <b>your action drives my state</b>.</p>
<div class="pattern">Subj₁ + <span class="slot">越</span> + V₁ ，Subj₂ + <span class="slot">越</span> + V₂/Adj<small>Each 越 stays glued to its own verb, right after its own subject.</small></div>`,
          examples: [
            { cn: "你**越**说，我**越**糊涂。", py: "Nǐ yuè shuō, wǒ yuè hútu.", en: "The more you talk, the more confused I get." },
            { cn: "妈妈**越**着急，孩子**越**哭得厉害。", py: "Māma yuè zháojí, háizi yuè kū de lìhai.", en: "The more anxious the mom got, the harder the kid cried." },
            { cn: "老师**越**批评他，他**越**不想学。", py: "Lǎoshī yuè pīpíng tā, tā yuè bù xiǎng xué.", en: "The more the teacher criticized him, the less he wanted to study.", note: "Negation rides inside clause 2: 越 + 不想学." }
          ]
        },
        {
          label: "越…越好 & gems",
          html: `<p><span class="zh">越 X 越好</span> = “the X-er the better” — a fully productive pattern you can use with almost any adjective. Plus a family of fixed gems natives use daily:</p>
<ul>
<li><span class="zh">越快越好</span> — the sooner the better</li>
<li><span class="zh">越多越好</span> — the more the merrier</li>
<li><span class="zh">越想越气</span> — the more I think about it, the madder I get</li>
<li><span class="zh">越看越喜欢</span> — it grows on me every time I look</li>
</ul>`,
          examples: [
            { cn: "房子离公司**越**近**越**好。", py: "Fángzi lí gōngsī yuè jìn yuè hǎo.", en: "The closer the apartment is to the office, the better." },
            { cn: "这件事你**越**早告诉他**越**好。", py: "Zhè jiàn shì nǐ yuè zǎo gàosu tā yuè hǎo.", en: "The sooner you tell him about this, the better.", note: "越 can grab a whole verb phrase: 越早告诉他." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: "Where everything sits — the position rules",
      short: "Position",
      html: `
<p>The sentence-ordering task tests exactly one thing here: <b>which slot does 越 go in?</b> Three rules solve every item:</p>
<h3>1 · 越来越 is ONE word — it sits directly before the adjective/verb</h3>
<p class="zh" style="font-size:1.15rem">✓ 天气<b class="hl">越来越</b>冷了 &nbsp;&nbsp; ✗ <s>越来越天气</s>冷了 &nbsp;&nbsp; ✗ 天气越来<s>冷</s>越了</p>
<p>Nothing may squeeze between 越来越 and its adjective — no 很, no 地, nothing.</p>
<h3>2 · In 越 A 越 B, each 越 hugs its own verb — the subject stays outside</h3>
<p class="zh" style="font-size:1.15rem">✓ 雨<b class="hl">越</b>下<b class="hl">越</b>大 &nbsp;&nbsp; ✗ <s>越雨下</s>越大 &nbsp;&nbsp; ✗ 雨越下大<s>越</s></p>
<p>Unlike full conjunctions (如果/虽然 can stand before OR after the subject), <b>越 is an adverb</b> — and adverbs in Chinese always come <b>after the subject, before the verb</b>. Same family as 就, 才, 都, 也, 却.</p>
<h3>3 · Two subjects → each clause is its own mini-sentence</h3>
<p class="zh" style="font-size:1.15rem">✓ <b class="hl">你</b>越说，<b class="hl">我</b>越糊涂 &nbsp;&nbsp; ✗ 越你说，越我糊涂</p>
<div class="callout tip"><span class="co-title">💡 Ordering-task algorithm</span>
See a 越来越 tile? Glue it immediately in front of the adjective/psych-verb tile, then put the subject in front of the whole thing, 了 at the very end. See two single 越 tiles? Build two [Subj +] 越 + V chunks and join them.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions on the golden bans and the position rules.",
      items: [
        { q: "Which sentence is correct?", choices: ["天气越来越很热了。", "天气越来越热了。", "天气越来越热一点儿了。", "天气很越来越热了。"], a: 1, expl: "Ban 1: no 很 after 越来越. Ban 2: no measured amount (一点儿). 越来越 + bare adjective + 了 is the whole recipe." },
        { q: 'Fill the blank: <span class="zh">雨___大，我们回不去了。</span>', choices: ['<span class="zh">越下越</span>', '<span class="zh">越来越下</span>', '<span class="zh">下越来越</span>', '<span class="zh">越越下</span>'], a: 0, expl: "The change tracks the raining itself → 越 A 越 B: 雨越下越大. 越来越 would need a plain adjective: 雨越来越大 (also fine, but that's not among the choices in this order)." },
        { q: "Which is the correct order?", choices: ["越你说，越我糊涂。", "你越说，我越糊涂。", "你说越，我糊涂越。", "越说你，越糊涂我。"], a: 1, expl: "越 is an adverb: subject first, then 越 + verb, in each clause. 你越说，我越糊涂。" },
        { q: '<span class="zh">今天比昨天___。</span>', choices: ['<span class="zh">越来越冷</span>', '<span class="zh">更冷</span>', '<span class="zh">越冷越</span>', '<span class="zh">冷越来越</span>'], a: 1, expl: "比 makes a snapshot comparison → use 更/还. 越来越 is a trend over time and never combines with 比…: ✗比昨天越来越冷." },
        { q: '<span class="zh">我越来越___这个工作了。</span> Which fits?', choices: ['<span class="zh">非常喜欢</span>', '<span class="zh">喜欢</span>', '<span class="zh">很喜欢</span>', '<span class="zh">喜欢极了</span>'], a: 1, expl: "越来越 replaces the degree word entirely — bare 喜欢. 非常/很/极了 all break Ban 1." },
        { q: "“The sooner the better” =", choices: ['<span class="zh">越来越快好</span>', '<span class="zh">快越好越</span>', '<span class="zh">越快越好</span>', '<span class="zh">更快更好</span>'], a: 2, expl: "越 X 越好 is the productive gem: 越快越好, 越多越好, 越早越好." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One bug per patient. All six are mistakes that German/Spanish/English speakers actually make — diagnose before you peek.",
      items: [
        { wrong: "他的中文越来越很好。", right: "他的中文越来越好了。", py: "Tā de Zhōngwén yuèláiyuè hǎo le.", en: "His Chinese is getting better and better.", expl: "Ban 1: 越来越 already carries the degree — 很 must go. (English 'more and more' never takes 'very' either!)" },
        { wrong: "我的头越来越疼一点儿了。", right: "我的头越来越疼了。", py: "Wǒ de tóu yuèláiyuè téng le.", en: "My headache is getting worse and worse.", expl: "Ban 2: no measured amounts (一点儿/得多) after the adjective. 越来越 is an open-ended trend, not a comparison result." },
        { wrong: "越雨下越大。", right: "雨越下越大。", py: "Yǔ yuè xià yuè dà.", en: "The rain kept getting heavier.", expl: "越 is an adverb: it must follow the subject and hug the verb. Subject 雨 stands outside the whole 越…越 machine." },
        { wrong: "他越来越跑得快了。", right: "他跑得越来越快了。", py: "Tā pǎo de yuèláiyuè kuài le.", en: "He's running faster and faster.", expl: "When the change lives inside a 得-complement, 越来越 moves in there with it: V + 得 + 越来越 + adjective. It modifies 快, not 跑." },
        { wrong: "今天比昨天越来越热。", right: "今天比昨天更热。／天气越来越热了。", py: "Jīntiān bǐ zuótiān gèng rè. / Tiānqì yuèláiyuè rè le.", en: "Today is even hotter than yesterday. / The weather keeps getting hotter.", expl: "比 (two-point snapshot) and 越来越 (ongoing trend) are incompatible. Pick one: 比…更热, or drop 比 and keep 越来越." },
        { wrong: "越多的人开始学汉语了。", right: "越来越多的人开始学汉语了。", py: "Yuè lái yuè duō de rén kāishǐ xué Hànyǔ le.", en: "More and more people are starting to learn Chinese.", expl: "A single 越 can't work alone — 'more and more + noun' is 越来越多(的) + noun. A lone 越 only exists in the paired 越 A 越 B." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Every item hides one position rule — subject outside, 越 hugging its verb, 了 at the end.",
      items: [
        { tiles: ["天气", "越来越", "暖和", "了"], py: "Tiānqì yuèláiyuè nuǎnhuo le.", en: "The weather is getting warmer and warmer.", hint: "Subject + 越来越 + adjective + change-了." },
        { tiles: ["我", "越来越", "习惯", "这里的生活", "了"], py: "Wǒ yuèláiyuè xíguàn zhèlǐ de shēnghuó le.", en: "I'm getting more and more used to life here.", hint: "习惯 is a psych-verb — it follows 越来越 directly." },
        { tiles: ["雨", "越", "下", "越", "大"], py: "Yǔ yuè xià yuè dà.", en: "The rain kept getting heavier.", hint: "Subject first, then 越 + verb, 越 + adjective." },
        { tiles: ["你", "越", "着急", "我", "越", "紧张"], py: "Nǐ yuè zháojí, wǒ yuè jǐnzhāng.", en: "The more anxious you get, the more nervous I get.", hint: "Two subjects — each one stands before its own 越." },
        { tiles: ["他", "跑得", "越来越", "快", "了"], py: "Tā pǎo de yuèláiyuè kuài le.", en: "He's running faster and faster.", hint: "越来越 lives inside the 得-complement, right before 快." },
        { tiles: ["学", "汉语", "的", "人", "越来越", "多", "了"], py: "Xué Hànyǔ de rén yuèláiyuè duō le.", en: "More and more people are learning Chinese.", hint: "Build the big subject (学汉语的人) first, then 越来越多了." },
        { tiles: ["这件事", "你", "越早", "解决", "越好"], py: "Zhè jiàn shì nǐ yuè zǎo jiějué yuè hǎo.", en: "The sooner you solve this, the better.", hint: "Topic first; 越早 grabs the whole verb phrase 解决; 越好 closes.", alt: [["你", "越早", "解决", "这件事", "越好"]] }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 越来越 vs 一天比一天</h3>
<p><span class="zh">一天比一天</span> (“day by day”) is 越来越's poetic cousin — it stacks daily snapshots into a trend: <span class="zh">天气<b class="hl">一天比一天</b>暖和了。</span> Use it when the change is noticeable <i>each day</i> (health, weather, skills). It follows the same bans: ✗<span class="zh">一天比一天<s>很</s>好</span>. Siblings: <span class="zh">一年比一年</span>, <span class="zh">一次比一次</span>. Difference from 越来越: 一天比一天 needs day-sized, observable change — for slow social trends (<span class="zh">学汉语的人越来越多</span>), stick with 越来越.</p>
<h3>2 · 越来越多 + noun vs noun + 越来越多</h3>
<p>Both orders work, different flavor: <span class="zh"><b class="hl">越来越多的</b>人骑车上班</span> (spotlight on the people) vs <span class="zh">骑车上班的人<b class="hl">越来越多</b>了</span> (spotlight on the trend). In everyday speech 多/少 are the usual choices before a noun; written Chinese allows others too (<span class="zh">越来越大的压力 · 越来越激烈的竞争</span>). But ✗<span class="zh">越来越冷的天气来了</span> sounds off — say <span class="zh">天气越来越冷了</span>.</p>
<h3>3 · 越 grabs a whole verb phrase</h3>
<p><span class="zh">你<b class="hl">越</b>不理他，他<b class="hl">越</b>要跟你说话。</span> — 越 can scope over 不理他 and 要跟你说话, negation and modal included. The rule is still “越 right after the subject”.</p>
<h3>4 · 越来越 in the past</h3>
<p>Trends can be narrated in the past — no extra marking needed: <span class="zh">那几年，城市里的车越来越多。</span> Chinese lets context carry the tense; don't try to add 了 after 越来越 itself.</p>
<div class="callout warn"><span class="co-title">⚠️ Don't split 越来越</span>
Learners sometimes produce ✗<span class="zh">越来他越忙</span> trying to insert the subject. 越来越 is a fused unit — the subject always stands completely in front: <span class="zh">他越来越忙了</span>.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Ten questions at real exam difficulty. The wrong options are the exact traps from the clinic — aim for 9+.",
      items: [
        { q: "Pick the correct sentence:", choices: ["最近工作越来越忙了。", "最近工作越来越很忙了。", "最近工作越忙越了。", "最近越来越工作忙了。"], a: 0, expl: "Subject (工作) + 越来越 + bare adjective + 了. No 很, no splitting, 越来越 directly before 忙." },
        { q: '<span class="zh">你别催我了，你越催，我___。</span>', choices: ['<span class="zh">越来越紧张</span>', '<span class="zh">越紧张</span>', '<span class="zh">更紧张了</span>', '<span class="zh">紧张越来越</span>'], a: 1, expl: "The first clause set up 越催 — the second clause must answer with its own 越: 你越催，我越紧张. 越来越 would track time, not your nagging." },
        { q: '<span class="zh">这种手机的价格___便宜。</span>', choices: ['<span class="zh">越来越</span>', '<span class="zh">越越</span>', '<span class="zh">很越来越</span>', '<span class="zh">越来越很</span>'], a: 0, expl: "Plain trend over time = 越来越 + adjective. Options with 很 break Ban 1; 越越 doesn't exist." },
        { q: "Which sentence is WRONG?", choices: ["我越来越了解他了。", "他越说越兴奋。", "问题越来越复杂了。", "天气越来越冷得多了。"], a: 3, expl: "冷得多 is a measured difference ('much colder') — Ban 2. The other three are textbook: psych-verb 了解, paired 越…越, plain adjective trend." },
        { q: 'Arrange: <span class="zh">喜欢 / 我 / 这个地方 / 越来越 / 了</span>', choices: ['<span class="zh">我越来越喜欢这个地方了。</span>', '<span class="zh">我喜欢越来越这个地方了。</span>', '<span class="zh">越来越我喜欢这个地方了。</span>', '<span class="zh">我喜欢这个地方越来越了。</span>'], a: 0, expl: "越来越 must stand immediately before the psych-verb 喜欢, subject in front, 了 at the end." },
        { q: '<span class="zh">别担心，孩子的身体会___好起来的。</span>', choices: ['<span class="zh">一天比一天</span>', '<span class="zh">一天比一天很</span>', '<span class="zh">天比天</span>', '<span class="zh">比一天一天</span>'], a: 0, expl: "一天比一天 + adjective = day-by-day improvement. It obeys the same no-很 ban, and its word order is fixed." },
        { q: '<span class="zh">工作什么时候能完成？——___！</span>', choices: ['<span class="zh">越快越好</span>', '<span class="zh">越来越快好</span>', '<span class="zh">更快更好</span>', '<span class="zh">快得越好</span>'], a: 0, expl: "越 X 越好 answers 'how X should it be?' — 越快越好 'the sooner the better'. 越来越 can't build this." },
        { q: "Which sentence is correct?", choices: ["越他解释，我越不明白。", "他越解释，我越不明白。", "他越解释，越我不明白。", "他解释越，我不明白越。"], a: 1, expl: "Two subjects, each before its own 越; 越 hugs the verb phrase (不明白, negation included)." },
        { q: '<span class="zh">搬到郊区以后，他觉得生活___方便了。</span>', choices: ['<span class="zh">越来越不</span>', '<span class="zh">不越来越</span>', '<span class="zh">越来越没</span>', '<span class="zh">越不越来</span>'], a: 0, expl: "Negative trends: 越来越 + 不方便. The negation follows 越来越 (it belongs to the adjective), and 方便 takes 不, not 没." },
        { q: "In the writing task you get: <span class=\"zh\">越来越 / 城市的 / 空气 / 好 / 了</span>. Correct sentence?", choices: ['<span class="zh">城市的空气越来越好了。</span>', '<span class="zh">越来越城市的空气好了。</span>', '<span class="zh">城市的越来越空气好了。</span>', '<span class="zh">城市的空气好越来越了。</span>'], a: 0, expl: "Assemble the subject 城市的空气, then 越来越 + 好 + 了. The 越来越 tile always glues to the adjective tile." }
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">越来越 & 越…越 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Pattern</th><th>Remember</th></tr>
<tr><td>Trend over time</td><td>Subj + <b class="hl">越来越</b> + Adj/psych-V (+ 了) — 天气越来越冷了</td></tr>
<tr><td>Ban 1</td><td>No 很/非常/太 after 越来越: ✗越来越很好</td></tr>
<tr><td>Ban 2</td><td>No amounts: ✗越来越好一点儿 · ✗越来越冷得多 · never with 比</td></tr>
<tr><td>B tracks A</td><td>Subj + <b class="hl">越</b>A<b class="hl">越</b>B — 雨越下越大; two subjects: 你越说，我越糊涂</td></tr>
<tr><td>Position</td><td>越 = adverb → after subject, before verb: ✗越雨下越大</td></tr>
<tr><td>In 得-complements</td><td>V + 得 + 越来越 + Adj: 跑得越来越快</td></tr>
<tr><td>Productive gem</td><td>越 X 越好: 越快越好 · 越多越好 · 越早越好</td></tr>
<tr><td>Native gems</td><td>越想越气 · 越看越喜欢 · 越吃越想吃</td></tr>
<tr><td>Cousin</td><td>一天比一天 + Adj (day-sized change): 身体一天比一天好</td></tr>
<tr><td>ES / DE</td><td>cada vez más frío · immer kälter — same slot, no extra “very”</td></tr>
</table></div>`
    }
  ]
});
