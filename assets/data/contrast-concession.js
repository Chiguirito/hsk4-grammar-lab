/* HSK 4 Grammar Lab — 转折与让步 (contrast & concession) */
registerPage({
  id: "contrast-concession",
  zh: "**转折**与让步",
  title: "Contrast & concession — but, yet, even if",
  subtitle: "HSK 3 gave you one 'but': 但是. HSK 4 hands you a whole ladder — 不过, 可是, 然而 — plus the adverbs 却 and 倒 that live INSIDE the clause, and the concession machines 尽管, 即使…也, 就算…也. The exam's favourite question: which of these can start a clause, and which must hide behind the subject?",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: a <span class="zh hl">ladder of “but”</span> + a family of “even if”',
      short: "Big idea",
      html: `
<p>Contrast words all mark the same logical turn — <b>clause 2 goes against the expectation set by clause 1</b>. What changes is the register and the strength:</p>
<div class="pattern"><span class="slot">不过</span> → <span class="slot">可是</span> → <span class="slot">但是</span> → <span class="slot">然而</span><small>softest & chattiest → spoken “but” → neutral standard → formal written “however”. All four stand at the head of clause 2.</small></div>
<ul>
<li><span class="zh">这家店有点儿远，<b class="hl">不过</b>菜很好吃。</span> — gentle afterthought, almost “though”.</li>
<li><span class="zh">我想帮你，<b class="hl">可是</b>我现在没时间。</span> — everyday spoken “but”.</li>
<li><span class="zh">他很努力，<b class="hl">但是</b>成绩一直不理想。</span> — the neutral default you already know.</li>
<li><span class="zh">大家都以为他会同意，<b class="hl">然而</b>他拒绝了。</span> — written; essays, news, novels.</li>
</ul>
<p>Then there's <b>concession</b> — “granted A, still B”: <span class="zh">虽然/尽管…但是/还是</span> for <b>facts</b>, and <span class="zh">即使/就算/哪怕…也</span> for <b>hypotheticals</b>. That fact-vs-hypothesis split is the deepest idea on this page — and your Spanish already makes it perfectly (see the tabs section).</p>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 The ladder exists in your languages too</span>
German: <i>allerdings</i> (不过) — <i>aber</i> (但是) — <i>jedoch/dennoch</i> (然而). Spanish: <i>aunque</i>-afterthought (不过) — <i>pero</i> (可是/但是) — <i>sin embargo</i> (然而). You'd never write <i>sin embargo</i> in a text message to a friend — same with 然而.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Cloze questions test the register ladder; the sentence-ordering task tests one thing relentlessly: 却 and 倒 are ADVERBS and can never stand where 但是 stands. That single fact decides several points per exam.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: '却 — the “but” that hides <span class="zh hl">behind the subject</span>',
      short: "却",
      html: `
<p><span class="zh hl">却</span> means “yet / but contrary to expectation” — with a stronger flavor of surprise or disappointment than 但是. But grammatically it is an <b>adverb</b>, family of 就/才/都/也: it must stand <b>after the subject, before the verb</b>.</p>
<div class="pattern">Clause 1 ，Subj + <span class="slot">却</span> + V …<small>却 can NOT link clauses from the front. ✗却他没来 — the slot before the subject belongs to 但是/可是.</small></div>
<p class="zh" style="font-size:1.15rem">✓ 我等了他两个小时，他<b class="hl">却</b>没来。 &nbsp;&nbsp; ✗ 我等了他两个小时，<s>却他</s>没来。</p>
<p>Because 却 and 但是 occupy different slots, they <b>combine</b> happily — and the triple stack is beloved by the exam:</p>
<p class="zh" style="font-size:1.15rem">虽然他家很有钱，<b class="hl">但是</b>他<b class="hl">却</b>过得很简单。</p>
<p>却 also carries a subtle emotional charge: things did NOT go as they should have. <span class="zh">春天到了，天气<b class="hl">却</b>还是很冷。</span> — the weather is breaking the rules.</p>
<div class="callout warn"><span class="co-title">⚠️ One more trap: 却 + 是</span>
Before a noun predicate you'll see <span class="zh">却是</span> (<span class="zh">说起来容易，做起来<b class="hl">却是</b>另一回事</span>) — that's just 却 + the verb 是. Don't copy it in front of ordinary verbs: ✗<span class="zh">他<s>却是</s>不同意</span> → ✓<span class="zh">他<b class="hl">却</b>不同意</span>.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — the whole family in action",
      short: "Examples",
      intro: "Tap to listen. Track two things: which word starts the clause vs hides behind the subject, and whether the concession is a fact or a hypothesis.",
      items: [
        { tag: "不过", cn: "这个房间不太大，**不过**很干净。", py: "Zhège fángjiān bú tài dà, búguò hěn gānjìng.", en: "The room isn't very big, but it's nice and clean.", note: "不过 = the softest 'but'; perfect for gentle corrections and reviews." },
        { tag: "可是", cn: "我真的很想去，**可是**我得加班。", py: "Wǒ zhēn de hěn xiǎng qù, kěshì wǒ děi jiābān.", en: "I really want to go, but I have to work overtime.", note: "可是 — the everyday spoken 'but'." },
        { tag: "然而", cn: "很多人觉得这个计划不可能成功，**然而**事实正好相反。", py: "Hěn duō rén juéde zhège jìhuà bù kěnéng chénggōng, rán'ér shìshí zhènghǎo xiāngfǎn.", en: "Many thought this plan couldn't succeed; however, the facts proved exactly the opposite.", note: "然而 = written register. In a casual chat it would sound like reading the news aloud." },
        { tag: "却", cn: "我给他打了好几次电话，他**却**一直不接。", py: "Wǒ gěi tā dǎ le hǎo jǐ cì diànhuà, tā què yìzhí bù jiē.", en: "I called him several times, yet he just wouldn't pick up.", note: "却 after 他, before 一直不接 — and feel the annoyance it adds." },
        { tag: "虽然…但是", cn: "**虽然**这次考试很难，**但是**她**却**考得不错。", py: "Suīrán zhè cì kǎoshì hěn nán, dànshì tā què kǎo de búcuò.", en: "Although the exam was hard, she actually did quite well.", note: "The legal triple stack: 虽然…但是…却 — three different slots, no conflict." },
        { tag: "尽管", cn: "**尽管**遇到了很多困难，他**还是**没有放弃。", py: "Jǐnguǎn yùdào le hěn duō kùnnan, tā háishi méiyǒu fàngqì.", en: "Despite running into many difficulties, he still didn't give up.", note: "尽管 = a stronger 虽然; partners: 但是/可是/还是/却." },
        { tag: "尽管②", cn: "你有什么问题，**尽管**问。", py: "Nǐ yǒu shénme wèntí, jǐnguǎn wèn.", en: "If you have any questions, feel free to ask.", note: "Same characters, second meaning: 尽管 + verb = 'go ahead, don't hold back'. Context decides." },
        { tag: "即使…也", cn: "**即使**明天下大雨，比赛**也**不会取消。", py: "Jíshǐ míngtiān xià dàyǔ, bǐsài yě bú huì qǔxiāo.", en: "Even if it pours tomorrow, the match won't be cancelled.", note: "Hypothetical concession — the rain hasn't happened; we concede it in advance." },
        { tag: "就算…也", cn: "**就算**你不告诉我，我**也**猜得到。", py: "Jiùsuàn nǐ bú gàosu wǒ, wǒ yě cāi de dào.", en: "Even if you don't tell me, I can guess.", note: "就算 = colloquial 即使. 猜得到 = potential complement." },
        { tag: "哪怕", cn: "**哪怕**只有一点儿希望，我们**也**不能放弃。", py: "Nǎpà zhǐyǒu yìdiǎnr xīwàng, wǒmen yě bù néng fàngqì.", en: "Even if there's only a sliver of hope, we can't give up.", note: "哪怕 (nǎpà) = emphatic 'even if', loves tiny extremes: 哪怕一分钟/一块钱." },
        { tag: "倒", cn: "外面雨**倒**停了，可是风更大了。", py: "Wàimiàn yǔ dào tíng le, kěshì fēng gèng dà le.", en: "The rain has actually stopped, but the wind has picked up.", note: "倒 = 'contrary to what you'd expect' — here a pleasant surprise. Adverb: after subject." },
        { tag: "倒②", cn: "你说得**倒**容易，你自己来试试！", py: "Nǐ shuō de dào róngyì, nǐ zìjǐ lái shìshi!", en: "Easy for YOU to say — come try it yourself!", note: "倒 as mild reproach: 'oh sure, AS IF it were that easy'. A very native flavor." },
        { tag: "而", cn: "他喜欢安静，**而**我喜欢热闹。", py: "Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.", en: "He likes peace and quiet, whereas I like a lively scene.", note: "而 = written 'whereas/while' — balanced A-vs-B contrast, no drama." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "虽然 vs 即使 — fact vs hypothesis",
      short: "虽然 vs 即使",
      intro: "Both concede something before the 'but'. The question is whether that something is real. Your Spanish makes this exact cut with one word and two moods.",
      tabs: [
        {
          label: "虽然…但是 fact",
          html: `<p><b>The concession is TRUE.</b> It happened / is happening, and clause 2 holds anyway.</p>
<div class="pattern"><span class="slot">虽然</span> + real fact ，<span class="slot">但是/可是</span> + Subj (+<span class="slot">却/还是</span>) + …<small>Chinese requires the second half's marker even where English drops “but”: although…, (but)….</small></div>
<div class="callout cmp"><span class="co-title">🇪🇸 aunque + indicativo · 🇩🇪 obwohl</span>
<i>“Aunque <b>llueve</b>, vamos”</i> (indicative — it IS raining) = <span class="zh">虽然下雨，我们还是去</span>. German <i>obwohl</i>: <i>„Obwohl es regnet…“</i>. Real rain, real concession.</div>`,
          examples: [
            { cn: "**虽然**他才学了一年汉语，**但是**说得已经很流利了。", py: "Suīrán tā cái xué le yì nián Hànyǔ, dànshì shuō de yǐjīng hěn liúlì le.", en: "Although he's only studied Chinese for a year, he already speaks fluently.", note: "One real year of study — fact." },
            { cn: "**虽然**票很贵，我们**还是**买了两张。", py: "Suīrán piào hěn guì, wǒmen háishi mǎi le liǎng zhāng.", en: "Even though the tickets were expensive, we still bought two.", note: "还是 ('nevertheless') can replace 但是 — it sits after the subject." }
          ]
        },
        {
          label: "即使…也 hypothesis",
          html: `<p><b>The concession is IMAGINED.</b> It may never happen — you concede it in advance, and clause 2 still stands.</p>
<div class="pattern"><span class="slot">即使/就算/哪怕</span> + hypothesis ，Subj + <span class="slot">也</span> + …<small>The partner is 也, welded after the subject. ✗即使…但是 — wrong couple.</small></div>
<div class="callout cmp"><span class="co-title">🇪🇸 aunque + subjuntivo — a PERFECT match</span>
<i>“Aunque <b>llueva</b>, vamos”</i> (subjunctive — rain merely possible) = <span class="zh">即使下雨，我们也去</span>. One Spanish conjunction, two moods = two Chinese conjunctions. German splits it too: <i>obwohl</i> (虽然) vs <i>selbst wenn / auch wenn</i> (即使). If you'd use subjunctive/selbst wenn, you want 即使…也.</div>`,
          examples: [
            { cn: "**即使**失败了，这次经历**也**很有价值。", py: "Jíshǐ shībài le, zhè cì jīnglì yě hěn yǒu jiàzhí.", en: "Even if we fail, this experience will still be valuable.", note: "Failure hasn't happened — pure hypothesis, conceded in advance." },
            { cn: "**即使**大家都反对，我**也**要试一试。", py: "Jíshǐ dàjiā dōu fǎnduì, wǒ yě yào shì yi shì.", en: "Even if everyone objects, I still want to give it a try." }
          ]
        },
        {
          label: "就算 & 哪怕",
          html: `<p>Two colloquial members of the 即使 family — same grammar, same partner 也:</p>
<ul>
<li><span class="zh"><b>就算</b></span> — casual, slightly defiant: “even supposing”.</li>
<li><span class="zh"><b>哪怕</b></span> — emphatic, loves minimal extremes: even one minute, even one yuan.</li>
</ul>`,
          examples: [
            { cn: "**就算**没有人支持我，我**也**要坚持下去。", py: "Jiùsuàn méiyǒu rén zhīchí wǒ, wǒ yě yào jiānchí xiàqù.", en: "Even if nobody backs me, I'll keep going.", note: "坚持下去 — directional complement 下去 = 'keep on'." },
            { cn: "**哪怕**每天只睡五个小时，他**也**要把小说写完。", py: "Nǎpà měitiān zhǐ shuì wǔ ge xiǎoshí, tā yě yào bǎ xiǎoshuō xiě wán.", en: "Even if it means sleeping just five hours a night, he's determined to finish the novel.", note: "哪怕 + extreme sacrifice; a 把-sentence rides in the second clause." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: '尽管 has two jobs · 倒 flips expectations · 而 balances',
      short: "尽管·倒·而",
      html: `
<h3>1 · 尽管 — concession AND permission</h3>
<p><b>Job A (conjunction)</b> = a beefed-up 虽然, for facts: <span class="zh"><b class="hl">尽管</b>天气很冷，他<b class="hl">还是</b>坚持晨跑。</span> Partners: 但是/可是/还是/却.<br>
<b>Job B (adverb before a verb)</b> = “feel free to, go right ahead”: <span class="zh">有什么想吃的，<b class="hl">尽管</b>点。</span> / <span class="zh">你<b class="hl">尽管</b>放心。</span> No partner word, no contrast — just generous permission. The exam checks whether you can tell the two apart from context.</p>
<h3>2 · 倒 — “contrary to what you'd think” (softer than 却)</h3>
<p><span class="zh">倒</span> is an adverb (after subject!) marking a mismatch with expectation. Its two moods:</p>
<ul>
<li><b>Pleasant surprise:</b> <span class="zh">这个办法听起来简单，用起来<b class="hl">倒</b>很有效。</span> — better than expected.</li>
<li><b>Mild reproach</b> (often with 说得/想得): <span class="zh">你想得<b class="hl">倒</b>美！</span> — “dream on!”; <span class="zh">你说得<b class="hl">倒</b>轻松。</span> — “easy for you to say.”</li>
</ul>
<p>却 signals a genuine clash (often disappointment); 倒 raises an eyebrow. <span class="zh">雨<b class="hl">倒</b>停了</span> — “well, look at that, the rain actually stopped.”</p>
<h3>3 · 而 — the written hinge</h3>
<p><span class="zh">而</span> links two balanced clauses: contrast (“whereas”) or smooth addition (“and/while”), always bookish: <span class="zh">南方潮湿，<b class="hl">而</b>北方干燥。</span> Don't confuse it with <span class="zh">而且</span> (“moreover” — pure addition, no contrast): <span class="zh">他喜欢安静，<b class="hl">而</b>我喜欢热闹</span> ≠ ✗<span class="zh">…而且我喜欢热闹</span>.</p>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "Where does each word sit? The position rules",
      short: "Position",
      html: `
<p>This is where the sentence-ordering task makes its money. Three species:</p>
<h3>1 · Clause-2 connectors — 但是 / 可是 / 不过 / 然而 / 而</h3>
<p>Head of the second clause, <b>before its subject</b>: <span class="zh">…，<b class="hl">但是</b>他不同意。</span></p>
<h3>2 · Adverbs — 却 / 倒 / 也 / 还是</h3>
<p><b>After the subject, before the verb.</b> Never clause-initial:</p>
<p class="zh" style="font-size:1.1rem">✓ 他<b class="hl">却</b>不同意 &nbsp; ✗ <s>却他</s>不同意 &nbsp;&nbsp; ✓ 我们<b class="hl">还是</b>去了 &nbsp; ✗ <s>还是我们</s>去了</p>
<h3>3 · Clause-1 conjunctions — 虽然 / 尽管 / 即使 / 就算 / 哪怕</h3>
<p>Flexible around the subject of clause 1: <span class="zh"><b class="hl">虽然</b>他很忙</span> ✓ = <span class="zh">他<b class="hl">虽然</b>很忙</span> ✓. Rule of thumb: subjects of the two clauses <b>differ</b> → conjunction first (<span class="zh"><b class="hl">即使</b>票再贵，我也买</span>); subject <b>shared</b> → after it is smoother (<span class="zh">他<b class="hl">虽然</b>累，但还是来了</span>).</p>
<h3>4 · Stacking order</h3>
<p>When several combine, the slots never fight: <span class="zh">虽然…，<b class="hl">但是</b> + Subj + <b class="hl">却/还是</b> + V</span>. 但是 takes the doorway, 却 takes the hallway.</p>
<div class="callout tip"><span class="co-title">💡 Ordering-task algorithm</span>
① A 却/倒 tile? It must snap BETWEEN a subject and a verb — find that subject. ② A 但是/不过/然而 tile? It opens clause 2. ③ A 虽然/尽管/即使 tile? It opens clause 1 (or follows the shared subject). ④ Check the couples: 即使↔也, 尽管↔还是/但是, 虽然↔但是.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six questions on slots and couples — the two things this topic is really about.",
      items: [
        { q: "Which sentence is correct?", choices: ["我等了很久，却他没来。", "我等了很久，他却没来。", "我等了很久，他没来却。", "我却等了很久，他没来。"], a: 1, expl: "却 is an adverb: after the subject 他, before 没来. Clause-initial 却 (option A) is THE classic trap." },
        { q: '<span class="zh">___明天下雪，我___要去看你。</span>', choices: ['<span class="zh">即使 / 也</span>', '<span class="zh">虽然 / 但是</span>', '<span class="zh">尽管 / 才</span>', '<span class="zh">即使 / 都</span>'], a: 0, expl: "Tomorrow's snow is hypothetical → 即使, whose fixed partner is 也 after the subject. 虽然 needs a real fact; 才 belongs to 只有." },
        { q: '<span class="zh">这道菜看起来一般，味道___很不错。</span>', choices: ['<span class="zh">倒</span>', '<span class="zh">但是</span>', '<span class="zh">然而</span>', '<span class="zh">就算</span>'], a: 0, expl: "The slot is after the subject 味道 — only an adverb fits, and the meaning is 'better than expected' → 倒. 但是/然而 would need to stand before 味道." },
        { q: '<span class="zh">别客气，有什么困难___跟我说。</span>', choices: ['<span class="zh">尽管</span>', '<span class="zh">虽然</span>', '<span class="zh">即使</span>', '<span class="zh">不过</span>'], a: 0, expl: "This is 尽管's second job: 'feel free to' + verb. No contrast anywhere in sight — 虽然/即使 would leave their partner clauses hanging." },
        { q: "Pick the formal written 'however' for an essay:", choices: ['<span class="zh">然而</span>', '<span class="zh">不过</span>', '<span class="zh">可是</span>', '<span class="zh">就算</span>'], a: 0, expl: "Register ladder: 不过 (softest, chatty) < 可是 (spoken) < 但是 (neutral) < 然而 (written). In an essay, 然而." },
        { q: '<span class="zh">虽然他年纪最小，___。</span> Which continuation is WRONG?', choices: ['<span class="zh">但是他跑得最快</span>', '<span class="zh">他却跑得最快</span>', '<span class="zh">但他却跑得最快</span>', '<span class="zh">所以他跑得最快</span>'], a: 3, expl: "虽然 sets up a contrast — 所以 delivers a cause-effect and breaks the logic. 但是, 却, and even the stack 但…却 are all legal partners." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "Seven patients, one bug each: a word in the wrong slot, the wrong partner, or the wrong family member.",
      items: [
        { wrong: "我等了他很久，却他没来。", right: "我等了他很久，他却没来。", py: "Wǒ děng le tā hěn jiǔ, tā què méi lái.", en: "I waited a long time, yet he didn't come.", expl: "却 is an adverb (family of 就/才/都) — it must follow the subject. The pre-subject doorway belongs to 但是/可是." },
        { wrong: "即使你说什么，我也不会改变主意。", right: "不管你说什么，我都不会改变主意。", py: "Bùguǎn nǐ shuō shénme, wǒ dōu bú huì gǎibiàn zhǔyi.", en: "No matter what you say, I won't change my mind.", expl: "什么 is an open variable — that's 不管/无论's territory. 即使 concedes ONE hypothetical case: 即使你反对，我也不会改变主意 ✓." },
        { wrong: "虽然天气不好，所以我们取消了比赛。", right: "因为天气不好，所以我们取消了比赛。／虽然天气不好，但是比赛照常进行。", py: "Yīnwèi tiānqì bù hǎo, suǒyǐ wǒmen qǔxiāo le bǐsài.", en: "Because of the bad weather, we cancelled the match. / Although the weather was bad, the match went ahead.", expl: "虽然…所以 mixes a contrast head with a cause tail. Decide what you mean: cause → 因为…所以; contrast → 虽然…但是. (照常 zhàocháng = as usual, HSK 5.)" },
        { wrong: "即使失败了很多次，他不想放弃。", right: "即使失败了很多次，他也不想放弃。", py: "Jíshǐ shībài le hěn duō cì, tā yě bù xiǎng fàngqì.", en: "Even having failed many times, he doesn't want to give up.", expl: "即使 can't work alone — its partner 也 must appear after the subject of clause 2. Missing-也 is a favourite cloze blank." },
        { wrong: "不过他很累，他还是把工作做完了。", right: "他很累，不过还是把工作做完了。", py: "Tā hěn lèi, búguò háishi bǎ gōngzuò zuò wán le.", en: "He was tired, but he still finished the work.", expl: "不过/但是/可是 head the SECOND clause — the turn comes after the setup. Clause 1 states the fact plainly." },
        { wrong: "雨停倒了，我们出去走走吧。", right: "雨倒停了，我们出去走走吧。", py: "Yǔ dào tíng le, wǒmen chūqù zǒuzou ba.", en: "Oh look, the rain's stopped — let's go out for a walk.", expl: "倒 is an adverb: after the subject 雨, BEFORE the verb 停. Slipping it after the verb is a direct transfer from English 'stopped, though'." },
        { wrong: "他喜欢安静，而且我喜欢热闹。", right: "他喜欢安静，而我喜欢热闹。", py: "Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.", en: "He likes quiet, whereas I like lively places.", expl: "而且 stacks MORE of the same (moreover); 而 pivots between two different things (whereas). Contrast between him and me → 而." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Watch the slots: conjunctions at the door, 却/也/还是 behind the subject.",
      items: [
        { tiles: ["虽然", "这道菜", "有点儿", "辣", "但是", "味道", "很不错"], py: "Suīrán zhè dào cài yǒudiǎnr là, dànshì wèidào hěn búcuò.", en: "Although this dish is a bit spicy, it tastes great.", hint: "虽然 opens clause 1; 但是 opens clause 2.", alt: [["这道菜", "虽然", "有点儿", "辣", "但是", "味道", "很不错"]] },
        { tiles: ["我", "给他", "发了", "三条短信", "他", "却", "一直", "没回"], py: "Wǒ gěi tā fā le sān tiáo duǎnxìn, tā què yìzhí méi huí.", en: "I sent him three texts, yet he never replied.", hint: "却 snaps between 他 and 一直没回." },
        { tiles: ["尽管", "工作", "很忙", "他", "还是", "每天", "坚持", "跑步"], py: "Jǐnguǎn gōngzuò hěn máng, tā háishi měitiān jiānchí pǎobù.", en: "Even though work is busy, he still runs every day.", hint: "尽管 + fact; 还是 after the subject 他." },
        { tiles: ["即使", "大家", "都", "反对", "我", "也", "要", "试一试"], py: "Jíshǐ dàjiā dōu fǎnduì, wǒ yě yào shì yi shì.", en: "Even if everyone objects, I still want to try.", hint: "即使's partner 也 lives after 我." },
        { tiles: ["有", "什么", "需要", "帮忙的", "你", "尽管", "开口"], py: "Yǒu shénme xūyào bāngmáng de, nǐ jǐnguǎn kāikǒu.", en: "If there's anything you need help with, don't hesitate to say so.", hint: "尽管 meaning 2: 'feel free to' + verb — after the subject 你.", alt: [["你", "有", "什么", "需要", "帮忙的", "尽管", "开口"]] },
        { tiles: ["就算", "考试", "没考好", "也", "别", "太", "难过"], py: "Jiùsuàn kǎoshì méi kǎo hǎo, yě bié tài nánguò.", en: "Even if the exam didn't go well, don't be too sad.", hint: "Imperative second clause: 也 + 别 + adjective, no subject needed." },
        { tiles: ["他", "个子", "不高", "而", "他哥哥", "却", "特别高"], py: "Tā gèzi bù gāo, ér tā gēge què tèbié gāo.", en: "He's not tall, whereas his older brother is really tall.", hint: "而 at the door of clause 2, 却 behind the new subject 他哥哥 — both at once." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 再…也 — concession's little brother</h3>
<p>From the conditionals topic: <span class="zh">再 + Adj/V + 也</span> = “no matter how X, still…”. It's really a compact concession: <span class="zh">工作<b class="hl">再</b>难，我<b class="hl">也</b>要完成。</span> If a blank is followed by an adjective and later 也, think 再 before 即使.</p>
<h3>2 · 但(是) can shrink, 虽然 can move</h3>
<p>In writing you'll meet <span class="zh">虽然…，<b class="hl">但</b>…</span> and <span class="zh">虽…但…</span> — same machine, compressed. And remember 虽然 may follow the shared subject: <span class="zh">他<b class="hl">虽然</b>没上过大学，但是懂得很多。</span></p>
<h3>3 · 还是 vs 却 in the second clause</h3>
<p><span class="zh">还是</span> = “still went ahead and did it” (stubborn persistence); <span class="zh">却</span> = “contrary to expectation” (surprise/clash). <span class="zh">虽然很贵，我<b class="hl">还是</b>买了</span> (I bought it anyway) vs <span class="zh">虽然很便宜，他<b class="hl">却</b>没买</span> (surprisingly, he didn't). Both sit after the subject; 但是 can stand in front of either.</p>
<h3>4 · 不过 as “no more than”</h3>
<p>Occasionally 不过 isn't “but” at all: <span class="zh">他<b class="hl">不过</b>是个孩子。</span> = “he's only a child.” Position gives it away — after the subject it means “merely”; at the head of clause 2 it means “but”.</p>
<h3>5 · Rhetorical 倒是 softener</h3>
<p><span class="zh">倒(是)</span> often cushions disagreement: <span class="zh">这个主意<b class="hl">倒是</b>不错，就是有点儿贵。</span> — “the idea's actually not bad, it's just a bit pricey.” Pair it with <span class="zh">就是</span> for the native-speaker one-two punch.</p>
<div class="callout warn"><span class="co-title">⚠️ Couples audit before you answer</span>
虽然/尽管 ↔ 但是·可是·还是·却 (facts) &nbsp;·&nbsp; 即使/就算/哪怕 ↔ 也 (hypotheses) &nbsp;·&nbsp; ✗虽然…所以 &nbsp;·&nbsp; ✗即使…但是 &nbsp;·&nbsp; ✗clause-initial 却/倒. Run this checklist and half the reading section pays out.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Ten questions at exam difficulty. Every distractor is a slot violation or a broken couple — hunt them down.",
      items: [
        { q: '<span class="zh">这家宾馆不算便宜，___离机场特别近。</span>', choices: ['<span class="zh">不过</span>', '<span class="zh">即使</span>', '<span class="zh">尽管</span>', '<span class="zh">哪怕</span>'], a: 0, expl: "A soft redeeming 'but' opening clause 2 = 不过. 即使/尽管/哪怕 all open clause 1 and would leave their partners stranded." },
        { q: '<span class="zh">大家都说这部电影好看，我看完以后___觉得一般。</span>', choices: ['<span class="zh">却</span>', '<span class="zh">但是</span>', '<span class="zh">然而</span>', '<span class="zh">而</span>'], a: 0, expl: "The blank sits after the subject phrase 我看完以后 and directly before 觉得 — an adverb slot. Only 却 fits; the other three demand the clause-front position." },
        { q: '<span class="zh">这个箱子___重，我也搬得动。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">很</span>', '<span class="zh">太</span>', '<span class="zh">更</span>'], a: 0, expl: "再 + Adj + 也 = 'no matter how Adj, still…' — a compact concession. 很/太/更 state a real degree and have no license to pair with 也 this way." },
        { q: '<span class="zh">虽然他们认识的时间不长，___互相非常了解。</span>', choices: ['<span class="zh">却</span>', '<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">于是</span>'], a: 0, expl: "虽然 needs a contrast partner. With the subject omitted (still 他们), 却 + verb is the natural fill; 就/才/于是 all mark the wrong logic." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">尽管很累，他还是来了。</span>', '<span class="zh">虽然很累，但是他来了。</span>', '<span class="zh">即使很累，他也会来。</span>', '<span class="zh">即使很累，但是他来了。</span>'], a: 3, expl: "即使's only legal partner is 也. ✗即使…但是 welds a hypothesis head onto a fact tail — the exam's favourite Franken-sentence." },
        { q: '<span class="zh">你放心去做吧，出了问题___来找我。</span>', choices: ['<span class="zh">尽管</span>', '<span class="zh">虽然</span>', '<span class="zh">然而</span>', '<span class="zh">倒</span>'], a: 0, expl: "'Feel free to come to me' — 尽管's permission meaning, directly before the verb 来找. 虽然/然而 would need full contrast clauses." },
        { q: 'Order these chunks: <span class="zh">他 / 都不同意 / 即使 / 我也要去 / 父母</span>', choices: ['<span class="zh">即使他父母都不同意，我也要去。</span>', '<span class="zh">他父母即使都不同意，我也要去。</span>', '<span class="zh">即使他父母都不同意，也我要去。</span>', '<span class="zh">他父母都不同意即使，我也要去。</span>'], a: 0, expl: "Different subjects (他父母 / 我) → 即使 stands before its subject; 也 stays welded after 我. Option C breaks the adverb rule; B is possible in speech but with different subjects the conjunction-first version is the standard answer." },
        { q: 'From a written essay: <span class="zh">大家都很失望，___生活还要继续。</span>', choices: ['<span class="zh">然而</span>', '<span class="zh">不过</span>', '<span class="zh">就算</span>', '<span class="zh">哪怕</span>'], a: 0, expl: "Written narration + full contrast = 然而. 不过 is too chatty for essay register; 就算/哪怕 open concessive clause 1, not clause 2." },
        { q: '<span class="zh">你说得___轻松，这些工作三天怎么做得完？</span>', choices: ['<span class="zh">倒</span>', '<span class="zh">却</span>', '<span class="zh">但</span>', '<span class="zh">也</span>'], a: 0, expl: "The mild-reproach flavor ('easy for you to say!') is 倒's specialty, tucked inside 说得___轻松. 却 marks clashes, not sarcasm; 但 can't live in that slot." },
        { q: "Which sentence uses 而 correctly?", choices: ['<span class="zh">他常常运动，而身体很好。</span>', '<span class="zh">南方人爱吃米饭，而北方人爱吃面条。</span>', '<span class="zh">而他很聪明，他不努力。</span>', '<span class="zh">这本书很贵，而且我不买。</span>'], a: 1, expl: "而 balances two mirrored clauses: south vs north. A states cause-effect (use 所以), C puts 而 sentence-initial with no clause 1, D misuses 而且 (addition) for contrast." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">转折与让步 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Tool</th><th>Job & rules</th></tr>
<tr><td>Register ladder</td><td>不过 (soft, chatty) → 可是 (spoken) → 但是 (neutral) → 然而 (written) — all clause-2-initial</td></tr>
<tr><td>却</td><td>ADVERB “yet”: after subject, before verb. ✗却他… · stacks fine: 但是他却…</td></tr>
<tr><td>倒</td><td>ADVERB “contrary to expectation”: 雨倒停了 (nice surprise) · 你说得倒容易 (reproach) · 倒是…就是… softener</td></tr>
<tr><td>虽然…但是/还是/却</td><td>FACT concession. ✗虽然…所以 · 虽然 may follow a shared subject</td></tr>
<tr><td>尽管 ①</td><td>= strong 虽然: 尽管很难，他还是做到了</td></tr>
<tr><td>尽管 ②</td><td>“feel free to” + V: 有问题尽管问 — no partner, no contrast</td></tr>
<tr><td>即使/就算/哪怕…也</td><td>HYPOTHETICAL concession. Partner is 也, only 也. ES: aunque+subj. DE: selbst wenn</td></tr>
<tr><td>虽然 vs 即使</td><td>aunque llueve = 虽然下雨 · aunque llueva = 即使下雨 — mood = the choice</td></tr>
<tr><td>而</td><td>Written “whereas”: 他喜欢安静，而我喜欢热闹 · ≠ 而且 (addition)</td></tr>
<tr><td>再…也</td><td>“No matter how”: 再贵也要买 — compact concession</td></tr>
<tr><td>Slots</td><td>Clause-front: 但是族 + 虽然族 · After subject: 却 倒 也 还是 · Never mix the slots</td></tr>
</table></div>`
    }
  ]
});
