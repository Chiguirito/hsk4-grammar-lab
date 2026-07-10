/* HSK 4 Grammar Lab — 语气副词 (attitude & tone adverbs) */
registerPage({
  id: "attitude-adverbs",
  zh: "语气副词",
  title: "Attitude adverbs — the speaker steps into the sentence",
  subtitle: "HSK 3 sentences report facts. HSK 4 sentences have opinions: surprise (竟然), impatience (到底), urgency (千万), worry (恐怕), near-misses (差点儿). One little adverb changes what the listening question calls 'the speaker's attitude' — and that IS the question.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: adverbs that carry feelings, not facts',
      short: "Big idea",
      html: `
<p>Take a plain fact: <span class="zh">他忘了我的生日。</span> Now watch one adverb change everything the speaker feels about it:</p>
<ul>
<li><span class="zh">他<b class="hl">竟然</b>忘了我的生日。</span> — “He actually forgot my birthday?!” (disbelief)</li>
<li><span class="zh">他<b class="hl">恐怕</b>忘了我的生日。</span> — “I'm afraid he's forgotten my birthday.” (worry)</li>
<li><span class="zh">他<b class="hl">差点儿</b>忘了我的生日。</span> — “He nearly forgot my birthday.” (close call — he didn't!)</li>
</ul>
<p>Same event, three sentences, three feelings. That's the whole family: <b>the facts stay put; the speaker steps in.</b></p>
<div class="pattern">Subject + <span class="slot">attitude adverb</span> + verb phrase<small>Default seat: after the subject, before the verb. A few (恐怕, 到底, 千万) may also front the sentence — noted per word.</small></div>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 You do this at home too</span>
German particles work the same magic: 竟然 ≈ <i>doch tatsächlich</i>, 到底 ≈ <i>denn (nun) eigentlich</i>, 千万 ≈ <i>bloß/ja</i> („Vergiss das <b>bloß</b> nicht!“), 恐怕 ≈ <i>ich fürchte</i>. Spanish leans on phrases: 竟然 ≈ <i>resulta que…</i>, 恐怕 ≈ <i>me temo que…</i>, 差点儿 = <i>por poco / casi</i> — and Spanish “¡<b>por poco</b> me caigo!” even uses a present verb for a past near-miss, just like 差点儿摔倒.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Listening asks 说话人是什么意思/态度 ("what does the speaker mean/feel") — the answer is usually smuggled inside one of these adverbs. Reading cloze tests them against each other. Learn each word's feeling + seat + one trap.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: 'The cast — ten adverbs, ten attitudes',
      short: "The cast",
      intro: "Your reference table. Each row: the feeling it injects, where it sits, and a signature line.",
      head: ["Adverb", "Injects…", "Seat & pattern", "Signature line"],
      rows: [
        ['<span class="zh hl">竟然 / 居然</span> <span class="py-hint">jìngrán / jūrán</span>', 'surprise, disbelief', 'after subject; loves <span class="zh">没想到…</span>', '<span class="zh">他<b class="hl">竟然</b>不认识我了。</span> <span class="py-hint">Tā jìngrán bú rènshi wǒ le.</span>'],
        ['<span class="zh hl">到底 / 究竟</span> <span class="py-hint">dàodǐ / jiūjìng</span>', 'impatient “what on earth”', 'in questions — but NEVER with <span class="zh">吗</span>', '<span class="zh">你<b class="hl">到底</b>去不去？</span> <span class="py-hint">Nǐ dàodǐ qù bu qù?</span>'],
        ['<span class="zh hl">千万</span> <span class="py-hint">qiānwàn</span>', 'urgent warning', '+ <span class="zh">别/不要/要/记住</span>, imperatives only', '<span class="zh"><b class="hl">千万</b>别忘了带护照！</span> <span class="py-hint">Qiānwàn bié wàng le dài hùzhào!</span>'],
        ['<span class="zh hl">恐怕</span> <span class="py-hint">kǒngpà</span>', 'speaker\'s worried guess', 'before subject or verb; ≠ 害怕!', '<span class="zh"><b class="hl">恐怕</b>要下雨了。</span> <span class="py-hint">Kǒngpà yào xià yǔ le.</span>'],
        ['<span class="zh hl">差点儿</span> <span class="py-hint">chàdiǎnr</span>', 'phew, a near-miss', 'before verb; the 没-flip — full section below', '<span class="zh">我<b class="hl">差点儿</b>摔倒。</span> <span class="py-hint">Wǒ chàdiǎnr shuāidǎo.</span>'],
        ['<span class="zh hl">几乎</span> <span class="py-hint">jīhū</span>', 'almost (cool, statistical)', '+ <span class="zh">都/没/所有</span>; quantities & states', '<span class="zh"><b class="hl">几乎</b>所有人都同意。</span> <span class="py-hint">Jīhū suǒyǒu rén dōu tóngyì.</span>'],
        ['<span class="zh hl">甚至</span> <span class="py-hint">shènzhì</span>', 'escalation — “even”', '<span class="zh">甚至(连)…都/也</span>; can link clauses', '<span class="zh">他<b class="hl">甚至</b>连周末都在工作。</span> <span class="py-hint">Tā shènzhì lián zhōumò dōu zài gōngzuò.</span>'],
        ['<span class="zh hl">顺便</span> <span class="py-hint">shùnbiàn</span>', '“while you\'re at it”', 'before the piggyback action', '<span class="zh">回来时<b class="hl">顺便</b>买点儿牛奶。</span> <span class="py-hint">Huílái shí shùnbiàn mǎi diǎnr niúnǎi.</span>'],
        ['<span class="zh hl">专门</span> <span class="py-hint">zhuānmén</span>', 'on purpose, specially', '<span class="zh">专门为/给…</span> + V; dedicated trips', '<span class="zh">我<b class="hl">专门</b>为你做了蛋糕。</span> <span class="py-hint">Wǒ zhuānmén wèi nǐ zuò le dàngāo.</span>'],
        ['<span class="zh hl">尤其(是)</span> <span class="py-hint">yóuqí (shì)</span>', 'spotlight within a set', 'after the general statement: <span class="zh">…，尤其是 + X</span>', '<span class="zh">我爱四川菜，<b class="hl">尤其是</b>火锅。</span> <span class="py-hint">Wǒ ài Sìchuān cài, yóuqí shì huǒguō.</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: 'Model sentences — hear the attitude',
      short: "Examples",
      intro: "One sentence per adverb. Tap 🔊 to listen and name the feeling before checking the note.",
      items: [
        { tag: "竟然", cn: "没想到他**竟然**把这件事忘得干干净净。", py: "Méi xiǎngdào tā jìngrán bǎ zhè jiàn shì wàng de gāngānjìngjìng.", en: "I never expected him to forget the whole thing completely.", note: "没想到 + 竟然 = the standard surprise sandwich." },
        { tag: "居然", cn: "这么重要的会议，他**居然**没参加。", py: "Zhème zhòngyào de huìyì, tā jūrán méi cānjiā.", en: "Such an important meeting — and he actually didn't show up.", note: "居然 = 竟然 with the eyebrows slightly higher (more indignant)." },
        { tag: "到底", cn: "你**到底**去不去？大家都在等你呢！", py: "Nǐ dàodǐ qù bu qù? Dàjiā dōu zài děng nǐ ne!", en: "Are you going or not?! Everyone's waiting for you!", note: "到底 + V不V — impatience needs an open question, never 吗." },
        { tag: "究竟", cn: "这里**究竟**发生了什么事？", py: "Zhèli jiūjìng fāshēng le shénme shì?", en: "What on earth happened here?", note: "究竟 = formal 到底. Reading passages prefer it; speech prefers 到底." },
        { tag: "千万", cn: "明天的面试很重要，你**千万**别迟到。", py: "Míngtiān de miànshì hěn zhòngyào, nǐ qiānwàn bié chídào.", en: "Tomorrow's interview matters — whatever you do, don't be late.", note: "千万 + 别: urgent warning to someone else. Literally 'a thousand times ten thousand'!" },
        { tag: "恐怕", cn: "天这么黑，**恐怕**要下大雨了。", py: "Tiān zhème hēi, kǒngpà yào xià dà yǔ le.", en: "The sky is so dark — I'm afraid it's going to pour.", note: "恐怕 = the speaker's pessimistic estimate. Nobody is scared of anything." },
        { tag: "差点儿", cn: "路上太滑了，我**差点儿**摔倒。", py: "Lùshang tài huá le, wǒ chàdiǎnr shuāidǎo.", en: "The road was so slippery I almost fell.", note: "差点儿 + bad event = it did NOT happen. Phew." },
        { tag: "几乎", cn: "这次考试太难了，**几乎**没有人得满分。", py: "Zhè cì kǎoshì tài nán le, jīhū méiyǒu rén dé mǎnfēn.", en: "The exam was so hard that almost nobody got full marks.", note: "几乎 + quantity/negation — the cool, statistical 'almost'." },
        { tag: "甚至", cn: "他忙得**甚至**连午饭都忘了吃。", py: "Tā máng de shènzhì lián wǔfàn dōu wàng le chī.", en: "He was so busy he even forgot to eat lunch.", note: "甚至连…都 — escalate to the most extreme example." },
        { tag: "顺便", cn: "你去超市的时候，**顺便**帮我买瓶牛奶吧。", py: "Nǐ qù chāoshì de shíhou, shùnbiàn bāng wǒ mǎi píng niúnǎi ba.", en: "When you go to the supermarket, pick up a bottle of milk for me while you're at it.", note: "Main trip + 顺便 + piggyback errand." },
        { tag: "专门", cn: "这些饺子是妈妈**专门**为你包的。", py: "Zhèxiē jiǎozi shì māma zhuānmén wèi nǐ bāo de.", en: "Mom made these dumplings specially for you.", note: "专门为/给 + person + V — the whole action existed for this purpose." },
        { tag: "尤其", cn: "我喜欢中国菜，**尤其是**火锅。", py: "Wǒ xǐhuan Zhōngguó cài, yóuqí shì huǒguō.", en: "I love Chinese food — especially hotpot.", note: "State the set first (中国菜), then 尤其是 spotlights one member." },
        { tag: "竟然", cn: "他是第一次参赛，没想到**竟然**赢得了第一名。", py: "Tā shì dì yī cì cānsài, méi xiǎngdào jìngrán yíngdé le dì yī míng.", en: "It was his first time competing, and against all expectations he took first place.", note: "第一次参赛 sets the low expectation; 没想到…**竟然** delivers the surprise — the standard sandwich." },
        { tag: "千万", cn: "前面一百公里都没有加油站，你**千万**记得先把油加满。", py: "Qiánmiàn yìbǎi gōnglǐ dōu méiyǒu jiāyóuzhàn, nǐ qiānwàn jìde xiān bǎ yóu jiā mǎn.", en: "There's no gas station for the next hundred kilometers — make absolutely sure you fill up first.", note: "**千万** + 记得: the positive urgent reminder, same family as 千万别 — it only lives in warnings aimed at the listener." },
        { tag: "恐怕", cn: "假日路上车太多，**恐怕**要晚两个小时才能到目的地。", py: "Jiàrì lùshang chē tài duō, kǒngpà yào wǎn liǎng ge xiǎoshí cái néng dào mùdìdì.", en: "Holiday traffic is terrible — I'm afraid we'll reach our destination two hours late.", note: "**恐怕** fronts the second clause and colors the whole estimate. The worry is the speaker's; nobody is scared of anything." },
        { tag: "尤其", cn: "爷爷对谁都很有耐心，**尤其是**教孙女写字的时候。", py: "Yéye duì shéi dōu hěn yǒu nàixīn, yóuqí shì jiāo sūnnǚ xiě zì de shíhou.", en: "Grandpa is patient with everyone — especially when he's teaching his granddaughter to write.", note: "Set first (对谁都有耐心), then **尤其是** spotlights the standout case — here a whole 的时候 phrase, not just a noun." },
        { tag: "甚至", cn: "他为了做生意，**甚至**把房子都卖了。", py: "Tā wèile zuò shēngyi, shènzhì bǎ fángzi dōu mài le.", en: "To go into business, he even sold his house.", note: "**甚至**…都 escalates to the most extreme proof — selling the house. It rides happily in front of a 把-phrase." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: 'Deep dive I: surprise, interrogation, warning, worry',
      short: "竟然·到底…",
      intro: "The four with the strongest personalities — each with meaning, seat, and its one classic trap.",
      tabs: [
        {
          label: "竟然 / 居然",
          html: `<p><b>Meaning:</b> the outcome broke your expectations — “actually, unbelievably”. Works for good and bad surprises.</p>
<p><b>Seat:</b> after the subject, before the verb phrase. Setup phrase <span class="zh">没想到…</span> in front is near-obligatory in exam sentences.</p>
<p><b>Trap:</b> don't front it before the subject (✗<span class="zh">竟然他忘了</span> → ✓<span class="zh">他竟然忘了</span>). And it marks genuine surprise — not for expected results, however pleasing.</p>`,
          examples: [
            { cn: "他才学了三个月汉语，**竟然**通过了HSK四级。", py: "Tā cái xué le sān ge yuè Hànyǔ, jìngrán tōngguò le HSK sì jí.", en: "He'd studied Chinese for only three months, yet actually passed HSK 4.", note: "才 + 竟然: small input, shocking output — two topics teaming up." },
            { cn: "都十二月了，**居然**还这么暖和。", py: "Dōu shí'èr yuè le, jūrán hái zhème nuǎnhuo.", en: "It's already December, yet it's still unbelievably warm.", note: "Works on states too, not just actions." }
          ]
        },
        {
          label: "到底 / 究竟",
          html: `<p><b>Meaning in questions:</b> “what ON EARTH” — the question has dragged on and you want the final answer. 究竟 is the written twin.</p>
<p><b>Grammar law:</b> the question must be OPEN — a question word (什么/谁/哪儿/为什么) or V不V. <b class="hl">Never with 吗.</b> Why? 到底 demands the bottom line, and 吗 politely offers yes/no — the moods collide.</p>
<p><b>Meaning in statements:</b> “in the end / after all”: <span class="zh">他<b class="hl">到底</b>还是来了。</span> — after all the drama, he came.</p>`,
          examples: [
            { cn: "你**到底**想说什么？", py: "Nǐ dàodǐ xiǎng shuō shénme?", en: "What are you actually trying to say?", note: "Open question with 什么 → legal." },
            { cn: "这个问题**究竟**应该怎么解决？", py: "Zhège wèntí jiūjìng yīnggāi zěnme jiějué?", en: "How exactly should this problem be solved?", note: "究竟 + 怎么 — formal register, same rule." },
            { cn: "商量了半天，他**到底**还是同意了。", py: "Shāngliang le bàntiān, tā dàodǐ háishi tóngyì le.", en: "After endless discussion, he agreed in the end.", note: "Statement 到底(还是) = 'finally, after all'. No question needed here." }
          ]
        },
        {
          label: "千万",
          html: `<p><b>Meaning:</b> “whatever you do…” — maximal urgency aimed at the LISTENER.</p>
<p><b>Seat:</b> before <span class="zh">别 / 不要 / 要 / 记住 / 注意</span>. It exists only in commands and warnings.</p>
<p><b>Trap:</b> you cannot 千万 yourself into determination. For “I really must…”, use <span class="zh">一定</span>: ✗<span class="zh">我千万要努力</span> → ✓<span class="zh">我一定要努力</span>. Mirror rule: 千万 warns others, 一定 commits anyone.</p>`,
          examples: [
            { cn: "过马路的时候**千万**要小心。", py: "Guò mǎlù de shíhou qiānwàn yào xiǎoxīn.", en: "Be extremely careful crossing the road.", note: "千万 + 要: positive urgent advice." },
            { cn: "这件事你**千万**别告诉我妈。", py: "Zhè jiàn shì nǐ qiānwàn bié gàosu wǒ mā.", en: "Whatever you do, do NOT tell my mom about this.", note: "千万 + 别: the prototype. Say it with feeling." }
          ]
        },
        {
          label: "恐怕",
          html: `<p><b>Meaning:</b> “I'm afraid that…” — the speaker predicts something unwelcome or inconvenient. It softens bad news.</p>
<p><b>Seat:</b> flexible — sentence-initial (<span class="zh">恐怕来不及了</span>) or after the subject (<span class="zh">他恐怕不知道</span>). Either way it colors the whole clause.</p>
<p><b>Trap — the big one:</b> 恐怕 is NOT the verb “to fear”. For being afraid of things, use <span class="zh">怕/害怕</span>: ✗<span class="zh">我恐怕狗</span> → ✓<span class="zh">我怕狗</span>. 恐怕 never takes a noun object.</p>`,
          examples: [
            { cn: "已经九点了，**恐怕**来不及了，我们打车去吧。", py: "Yǐjīng jiǔ diǎn le, kǒngpà láibují le, wǒmen dǎchē qù ba.", en: "It's already nine — I'm afraid we won't make it. Let's take a taxi.", note: "Sentence-initial 恐怕, softening the bad estimate." },
            { cn: "他**恐怕**还不知道这个消息。", py: "Tā kǒngpà hái bù zhīdào zhège xiāoxi.", en: "I'm afraid he doesn't know the news yet.", note: "After the subject — note the worry belongs to the SPEAKER, not to 他." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: 'The 差点儿 matrix — the most famous trap in HSK',
      short: "差点儿(没)",
      intro: "差点儿 means the event did NOT quite happen. But 差点儿没 sometimes means it DID. The key is one question: did the speaker WANT the event? Here is the whole logic in four cells — memorize the table, own the trap.",
      head: ["Is the event desirable?", "差点儿 + V", "差点儿没 + V"],
      rows: [
        ['<b>Undesirable</b> (falling, being late, breaking things)', '<span class="zh">我<b class="hl">差点儿</b>摔倒。</span> <span class="py-hint">Wǒ chàdiǎnr shuāidǎo.</span><br>Almost fell — <b>didn\'t fall</b>. Relief.', '<span class="zh">我<b class="hl">差点儿没</b>摔倒。</span> <span class="py-hint">Wǒ chàdiǎnr méi shuāidǎo.</span><br><b>Same meaning!</b> Almost fell — didn\'t. The 没 is a fake, an echo of the relief ("luckily NOT").'],
        ['<b>Desirable</b> (passing the exam, catching the train, buying the last ticket)', '<span class="zh">他<b class="hl">差点儿</b>就考上了。</span> <span class="py-hint">Tā chàdiǎnr jiù kǎoshàng le.</span><br>SO close to passing — <b>failed</b>. Regret. (often with 就…了)', '<span class="zh">他<b class="hl">差点儿没</b>考上。</span> <span class="py-hint">Tā chàdiǎnr méi kǎoshàng.</span><br>Nearly DIDN\'T pass — <b>passed</b>, barely. Cold sweat + relief.'],
        ['<b>The rule in one line</b>', '差点儿 + V: the event never happened (regret if you wanted it, relief if you didn\'t).', '差点儿没 + V: ask if V is desirable. Desirable → V happened (barely). Undesirable → 没 is decorative, V still didn\'t happen.']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "tabs",
      title: 'Deep dive II: almost, even, by-the-way, on-purpose, especially',
      short: "几乎·甚至…",
      intro: "The quieter five. Less drama, equally testable — mostly on position and collocation.",
      tabs: [
        {
          label: "几乎",
          html: `<p><b>Meaning:</b> “almost, nearly” — cooler and more formal than 差点儿, at home with <b>quantities and states</b>: <span class="zh">几乎所有 · 几乎都 · 几乎没</span>.</p>
<p><b>vs 差点儿:</b> 差点儿 narrates single near-miss EVENTS with emotion; 几乎 measures how close a quantity/state gets to 100% or 0%. And 几乎's 没 is usually literal — 几乎没 mostly means “hardly/almost none”. (The relief reading 几乎没赶上 = “barely made it” does occur, but that flip is really 差点儿's specialty.)</p>`,
          examples: [
            { cn: "会议室里**几乎**所有的人都举手同意了。", py: "Huìyìshì li jīhū suǒyǒu de rén dōu jǔ shǒu tóngyì le.", en: "Almost everyone in the meeting room raised their hand in agreement.", note: "几乎所有…都 — the signature chain." },
            { cn: "这个月太忙了，我**几乎**没休息过。", py: "Zhège yuè tài máng le, wǒ jīhū méi xiūxi guo.", en: "This month has been so busy I've hardly rested at all.", note: "几乎没 = hardly any — no hidden flip, unlike 差点儿没." }
          ]
        },
        {
          label: "甚至",
          html: `<p><b>Meaning:</b> “even” — climbs to the most extreme item to prove the point.</p>
<p><b>Patterns:</b> <span class="zh">甚至 + 连 + X + 都/也</span> (fixed order!), or clause-linking: <span class="zh">…，甚至…</span>. Plays beautifully with the 连…都 topic.</p>
<p><b>Trap:</b> the order is 甚至连…都 — learners scramble it into ✗连甚至…都.</p>`,
          examples: [
            { cn: "这道题太难了，**甚至连**老师**都**做错了。", py: "Zhè dào tí tài nán le, shènzhì lián lǎoshī dōu zuò cuò le.", en: "The problem was so hard that even the teacher got it wrong.", note: "The teacher = most extreme case → maximal escalation." },
            { cn: "他每天都学到很晚，**甚至**周末也不休息。", py: "Tā měitiān dōu xué dào hěn wǎn, shènzhì zhōumò yě bù xiūxi.", en: "He studies late every day — he doesn't even rest on weekends.", note: "Clause-linking 甚至, with 也 echoing it." }
          ]
        },
        {
          label: "顺便",
          html: `<p><b>Meaning:</b> “while you're at it / on the way” — action B rides on trip A with zero extra cost.</p>
<p><b>Seat:</b> before the piggyback verb (the SECOND action). The main trip must already be in the sentence or context.</p>
<p><b>Bonus idiom:</b> <span class="zh">顺便问一下…</span> — “by the way, may I ask…” — polite question-opener worth memorizing whole.</p>`,
          examples: [
            { cn: "我去邮局寄信，**顺便**买了几张明信片。", py: "Wǒ qù yóujú jì xìn, shùnbiàn mǎi le jǐ zhāng míngxìnpiàn.", en: "I went to the post office to mail a letter and picked up a few postcards while I was there.", note: "Trip A stated first, 顺便 + B second — the order never flips." },
            { cn: "**顺便**问一下，附近有没有地铁站？", py: "Shùnbiàn wèn yíxià, fùjìn yǒu méiyǒu dìtiězhàn?", en: "By the way, is there a subway station nearby?", note: "The fixed conversational opener." }
          ]
        },
        {
          label: "专门",
          html: `<p><b>Meaning:</b> “specially, expressly” — the action was undertaken FOR this exact purpose. The exact opposite of 顺便.</p>
<p><b>Patterns:</b> <span class="zh">专门为/给 + person + V</span>; <span class="zh">专门 + 去/来/跑到… + V</span> (dedicated trips).</p>
<p><b>Trap:</b> if the errand was incidental, 专门 is a lie — choose by asking “was this the WHOLE point of the trip?”</p>`,
          examples: [
            { cn: "爸爸**专门**请了一天假，来看我的比赛。", py: "Bàba zhuānmén qǐng le yì tiān jià, lái kàn wǒ de bǐsài.", en: "Dad took a day off specially to watch my match.", note: "The day off existed only for the match → 专门." },
            { cn: "这是我**专门**给你买的礼物。", py: "Zhè shì wǒ zhuānmén gěi nǐ mǎi de lǐwù.", en: "This is a gift I bought just for you.", note: "专门给你 + V — maximum thoughtfulness points." }
          ]
        },
        {
          label: "尤其(是)",
          html: `<p><b>Meaning:</b> “especially” — spotlights the standout member of a set <b>already mentioned</b>.</p>
<p><b>Seat:</b> second clause, after the general statement: <span class="zh">…，尤其是 + noun</span> or <span class="zh">…，尤其 + V/adj</span>.</p>
<p><b>Trap:</b> no set, no 尤其. It can't open a text from silence (✗<span class="zh">尤其我喜欢火锅</span>) — state the set first: <span class="zh">我喜欢中国菜，尤其是火锅。</span> For a free-standing “very”, that's 特别.</p>`,
          examples: [
            { cn: "他各门课的成绩都不错，**尤其是**数学。", py: "Tā gè mén kè de chéngjì dōu búcuò, yóuqí shì shùxué.", en: "His grades are good in every subject — especially math.", note: "Set = all subjects; spotlight = math." },
            { cn: "上海的夏天很热，**尤其**到了七八月。", py: "Shànghǎi de xiàtiān hěn rè, yóuqí dào le qī-bā yuè.", en: "Summer in Shanghai is hot, especially come July and August.", note: "尤其 without 是, followed by a verb phrase — also legal." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — name the feeling, pick the word",
      short: "Checkpoint",
      intro: "Six blanks. First identify the speaker's emotion, then the adverb chooses itself.",
      items: [
        { q: '<span class="zh">他平时学习一般，这次___考了第一名。</span>', choices: ['<span class="zh">竟然</span>', '<span class="zh">千万</span>', '<span class="zh">顺便</span>', '<span class="zh">恐怕</span>'], a: 0, expl: "平时一般 sets a low expectation; first place smashes it → surprise → 竟然. 恐怕 would absurdly make first place a feared outcome." },
        { q: '<span class="zh">你___在担心什么？跟我说说吧。</span>', choices: ['<span class="zh">到底</span>', '<span class="zh">千万</span>', '<span class="zh">几乎</span>', '<span class="zh">专门</span>'], a: 0, expl: "An open question (什么) that has clearly dragged on → 到底 'what on earth'. Note there's no 吗 anywhere — there never can be." },
        { q: '<span class="zh">这条路晚上很黑，你___要注意安全。</span>', choices: ['<span class="zh">千万</span>', '<span class="zh">竟然</span>', '<span class="zh">差点儿</span>', '<span class="zh">尤其</span>'], a: 0, expl: "Urgent advice to the listener → 千万 + 要. 千万's only habitat is warnings and commands." },
        { q: '<span class="zh">已经八点半了，___赶不上九点的火车了。</span>', choices: ['<span class="zh">恐怕</span>', '<span class="zh">到底</span>', '<span class="zh">专门</span>', '<span class="zh">顺便</span>'], a: 0, expl: "A pessimistic estimate delivered with a sigh → 恐怕. The speaker isn't scared — just braced for bad news." },
        { q: '<span class="zh">今天早上路上太堵了，我___迟到。</span>', choices: ['<span class="zh">差点儿</span>', '<span class="zh">千万</span>', '<span class="zh">到底</span>', '<span class="zh">尤其</span>'], a: 0, expl: "A near-miss that did NOT happen (he made it!) → 差点儿 + undesirable event." },
        { q: '<span class="zh">我很喜欢运动，___是游泳和爬山。</span>', choices: ['<span class="zh">尤其</span>', '<span class="zh">甚至</span>', '<span class="zh">几乎</span>', '<span class="zh">专门</span>'], a: 0, expl: "Set stated (运动), then a spotlight on two members → 尤其是. 甚至 would need an extreme, surprising example, not just favorites." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — attitude malpractice",
      short: "Error clinic",
      intro: "Eight patients, one disease each: a banned combination, a wrong seat, or a feeling pointed the wrong way.",
      items: [
        { wrong: "你到底喜欢她吗？", right: "你到底喜欢不喜欢她？", py: "Nǐ dàodǐ xǐhuan bu xǐhuan tā?", en: "Do you like her or not?!", expl: "到底 never coexists with 吗 — it demands an open question. Switch to V不V (or a question word)." },
        { wrong: "我恐怕狗，别让它过来。", right: "我怕狗，别让它过来。", py: "Wǒ pà gǒu, bié ràng tā guòlái.", en: "I'm scared of dogs — keep it away from me.", expl: "恐怕 = 'I'm afraid THAT…' (a worried guess about a clause). Fear of a thing is 怕/害怕 + noun. 恐怕 can't take an object." },
        { wrong: "我千万要通过这次考试。", right: "我一定要通过这次考试。", py: "Wǒ yídìng yào tōngguò zhè cì kǎoshì.", en: "I absolutely must pass this exam.", expl: "千万 urges the LISTENER; it can't power your own resolve. Self-determination is 一定's job." },
        { wrong: "太好了，我差点儿通过了考试！", right: "太好了，我差点儿没通过考试！", py: "Tài hǎo le, wǒ chàdiǎnr méi tōngguò kǎoshì!", en: "Thank goodness — I only just scraped through the exam!", expl: "The matrix: passing is desirable, so 差点儿通过 = failed (nothing to celebrate!), while 差点儿没通过 = barely passed. The 太好了 forces the second." },
        { wrong: "尤其我喜欢秋天的北京。", right: "我尤其喜欢秋天的北京。", py: "Wǒ yóuqí xǐhuan qiūtiān de Běijīng.", en: "I especially love Beijing in autumn.", expl: "尤其 sits inside the clause, before the verb — never in front of the subject. (Ideally the set '北京' or 'seasons' was mentioned just before.)" },
        { wrong: "他专门去超市的时候帮我买了咖啡。", right: "他去超市的时候顺便帮我买了咖啡。", py: "Tā qù chāoshì de shíhou shùnbiàn bāng wǒ mǎi le kāfēi.", en: "He picked up coffee for me while he was at the supermarket.", expl: "The coffee rode along on an existing trip → 顺便. 专门 would claim he went to the supermarket solely for your coffee." },
        { wrong: "他连甚至自己的生日都忘了。", right: "他甚至连自己的生日都忘了。", py: "Tā shènzhì lián zìjǐ de shēngrì dōu wàng le.", en: "He even forgot his own birthday.", expl: "Fixed order: 甚至 + 连 + X + 都. 甚至 introduces the escalation, 连 clamps onto the extreme item — they don't swap." },
        { wrong: "竟然他把我的名字忘了。", right: "他竟然把我的名字忘了。", py: "Tā jìngrán bǎ wǒ de míngzi wàng le.", en: "He actually forgot my name.", expl: "竟然/居然 take the standard adverb seat: after the subject, before the verb phrase (here, before the whole 把-machine)." },
        { wrong: "这次比赛，差点儿所有参赛的同学都拿到了奖。", right: "这次比赛，几乎所有参赛的同学都拿到了奖。", py: "Zhè cì bǐsài, jīhū suǒyǒu cānsài de tóngxué dōu ná dào le jiǎng.", en: "In this competition, almost every student who entered won a prize.", expl: "差点儿 narrates one near-miss EVENT with emotion; quantities creeping toward 100% (所有…都) are 几乎's territory — ✗差点儿所有人. Swap in 几乎 and the headcount reads correctly." },
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — seat the attitude correctly",
      short: "Builder",
      intro: "Arrange the tiles. The attitude adverb almost always slots right after the subject — but watch 千万, 恐怕 and the fixed chains.",
      items: [
        { tiles: ["你", "千万", "别", "把", "护照", "弄丢", "了"], py: "Nǐ qiānwàn bié bǎ hùzhào nòng diū le.", en: "Whatever you do, don't lose your passport.", hint: "千万 + 别 + the 把-machine." },
        { tiles: ["他", "竟然", "忘了", "妻子的", "生日"], py: "Tā jìngrán wàng le qīzi de shēngrì.", en: "He actually forgot his wife's birthday.", hint: "Subject + 竟然 + verb phrase." },
        { tiles: ["你", "到底", "同意", "不同意", "这个", "计划"], py: "Nǐ dàodǐ tóngyì bu tóngyì zhège jìhuà?", en: "Do you agree with this plan or not?!", hint: "到底 + V不V — and notice: no 吗 tile exists." },
        { tiles: ["今天", "恐怕", "要", "加班", "到", "很晚"], py: "Jīntiān kǒngpà yào jiābān dào hěn wǎn.", en: "I'm afraid I'll have to work overtime till late today.", hint: "恐怕 colors the whole clause — right after the time word here.", alt: [["恐怕", "今天", "要", "加班", "到", "很晚"]] },
        { tiles: ["我", "差点儿", "把", "这件事", "忘了"], py: "Wǒ chàdiǎnr bǎ zhè jiàn shì wàng le.", en: "I almost forgot about this.", hint: "差点儿 before the 把-phrase; forgetting = undesirable, so it didn't happen." },
        { tiles: ["回来的路上", "顺便", "买", "一点儿", "水果", "吧"], py: "Huílái de lùshang shùnbiàn mǎi yìdiǎnr shuǐguǒ ba.", en: "Pick up some fruit on your way back.", hint: "Trip first, 顺便 + errand second." },
        { tiles: ["这个蛋糕", "是", "我", "专门", "为你", "做的"], py: "Zhège dàngāo shì wǒ zhuānmén wèi nǐ zuò de.", en: "This cake — I made it specially for you.", hint: "是…的 spotlight + 专门为你 + verb." },
        { tiles: ["他", "甚至", "连", "周末", "都", "在", "工作"], py: "Tā shènzhì lián zhōumò dōu zài gōngzuò.", en: "He works even on weekends.", hint: "The fixed escalation chain: 甚至 + 连 + X + 都." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 到底 in statements: “after all / in the end”</h3>
<p><span class="zh">他<b class="hl">到底</b>还是原谅了我。</span> — after everything, he forgave me. And <span class="zh"><b class="hl">到底</b>是老师，一下子就发现了问题。</span> — “a teacher, after all — spotted the problem instantly.” No question, no 吗-problem.</p>
<h3>2 · 恐怕 about yourself is fine</h3>
<p><span class="zh">我<b class="hl">恐怕</b>去不了了。</span> — “I'm afraid I can't make it.” The ban is only on noun objects (✗恐怕狗), not on first-person subjects.</p>
<h3>3 · 差点儿 vs 几乎 head-to-head</h3>
<p>For dramatic single events both work: <span class="zh">差点儿哭了 ≈ 几乎哭了</span>. But the 没-flip is 差点儿's home game (<span class="zh">差点儿没赶上 = 赶上了</span>; you'll occasionally hear 几乎没 flipped the same way), and only 几乎 handles quantities (<span class="zh">几乎所有人</span>, ✗差点儿所有人). When an MCQ offers both, look for a quantity word or a 没-flip — that's the tiebreaker.</p>
<h3>4 · 千万 + 要/记住 is positive</h3>
<p>千万 isn't only for 别: <span class="zh"><b class="hl">千万</b>记住，密码别告诉任何人。</span> Positive urgent reminders are equally at home.</p>
<h3>5 · 竟然 vs 居然</h3>
<p>Interchangeable in nearly every sentence; 居然 carries slightly more indignation and is a touch more spoken-dramatic. The exam never forces you to choose between them — it tests them against OTHER adverbs.</p>
<h3>6 · 尤其(是) vs 特别(是)</h3>
<p>Both spotlight; 特别 doubles as a plain intensifier (<span class="zh">特别好吃</span> = very tasty), 尤其 doesn't (✗<span class="zh">尤其好吃</span> as a standalone “very tasty”). If the sentence needs simple “very”, 尤其 is wrong.</p>
<div class="callout tip"><span class="co-title">💡 Listening radar</span>
Hear 竟然/居然 → answer choice mentions surprise. Hear 恐怕 → worry/estimate. Hear 差点儿 → the event did NOT happen (unless it's 差点儿没 + something desirable). These three mappings alone are worth several listening points per exam.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve items, including the interpretation traps that real exams love. Slow down on anything with 差点儿.",
      items: [
        { q: '<span class="zh">他才学了一年汉语，___能看懂中文小说了。</span>', choices: ['<span class="zh">竟然</span>', '<span class="zh">到底</span>', '<span class="zh">千万</span>', '<span class="zh">恐怕</span>'], a: 0, expl: "One year → reading novels is astonishing → 竟然. 才 sets up the surprise; 竟然 delivers it." },
        { q: '<span class="zh">你___想去哪儿？我们已经讨论一个小时了！</span>', choices: ['<span class="zh">到底</span>', '<span class="zh">顺便</span>', '<span class="zh">专门</span>', '<span class="zh">几乎</span>'], a: 0, expl: "Impatience + open question (哪儿) → 到底. The hour of discussion is the impatience license." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">你到底去不去？</span>', '<span class="zh">你到底去吗？</span>', '<span class="zh">你究竟什么时候回来？</span>', '<span class="zh">他到底还是来了。</span>'], a: 1, expl: "到底 + 吗 is the banned combination — 到底 demands an open question (V不V or question word) or a statement reading ('in the end'), never a yes/no 吗." },
        { q: '<span class="zh">这种药很重要，你___要记得按时吃。</span>', choices: ['<span class="zh">千万</span>', '<span class="zh">竟然</span>', '<span class="zh">差点儿</span>', '<span class="zh">尤其</span>'], a: 0, expl: "Urgent positive reminder to the listener → 千万 + 要. Bonus: 按时 from the Time adverbs page doing its job." },
        { q: '<span class="zh">看这天气，比赛___得改时间了。</span>', choices: ['<span class="zh">恐怕</span>', '<span class="zh">千万</span>', '<span class="zh">专门</span>', '<span class="zh">居然</span>'], a: 0, expl: "A reluctant prediction of inconvenience → 恐怕. The speaker regrets the likely rescheduling; nobody is 'daring' or 'urging' anything." },
        { q: '<span class="zh">“我差点儿没赶上火车。”</span> — What actually happened?', choices: ["I missed the train.", "I caught the train (barely).", "The train hasn't left yet.", "I decided not to take the train."], a: 1, expl: "Catching a train is DESIRABLE → 差点儿没赶上 = nearly failed to catch it = caught it, just barely. The matrix's most-tested cell." },
        { q: '<span class="zh">“他差点儿就考上北京大学了。”</span> — Did he get in?', choices: ["Yes, easily.", "Yes, barely.", "No — but he was very close.", "He didn't take the exam."], a: 2, expl: "Getting in is desirable → 差点儿(就)考上了 = so close, but NO. To say 'barely got in' you'd need 差点儿没考上." },
        { q: '<span class="zh">会议室里___所有的人都反对这个计划。</span>', choices: ['<span class="zh">几乎</span>', '<span class="zh">差点儿</span>', '<span class="zh">千万</span>', '<span class="zh">顺便</span>'], a: 0, expl: "A quantity approaching 100% (所有…都) → 几乎. 差点儿 narrates events, not headcounts — ✗差点儿所有人." },
        { q: '<span class="zh">今年冬天特别冷，___南方也下雪了。</span>', choices: ['<span class="zh">甚至</span>', '<span class="zh">尤其</span>', '<span class="zh">恐怕</span>', '<span class="zh">专门</span>'], a: 0, expl: "Snow in the south = the extreme example proving the cold → 甚至…也. 尤其 would merely spotlight a member of a set, without the shock value." },
        { q: '<span class="zh">你去图书馆还书的时候，___帮我借一本词典吧。</span>', choices: ['<span class="zh">顺便</span>', '<span class="zh">专门</span>', '<span class="zh">竟然</span>', '<span class="zh">几乎</span>'], a: 0, expl: "The dictionary rides along on the book-returning trip → 顺便. 专门 would mean making the trip just for the dictionary — contradicting 还书的时候." },
        { q: '<span class="zh">为了见你一面，他___从广州飞过来了。</span>', choices: ['<span class="zh">专门</span>', '<span class="zh">顺便</span>', '<span class="zh">差点儿</span>', '<span class="zh">到底</span>'], a: 0, expl: "为了见你一面 declares the sole purpose → 专门. 顺便 would need some other main trip — there is none." },
        { q: '<span class="zh">北京的秋天很舒服，___是十月。</span>', choices: ['<span class="zh">尤其</span>', '<span class="zh">甚至</span>', '<span class="zh">千万</span>', '<span class="zh">居然</span>'], a: 0, expl: "General statement (秋天很舒服) → spotlight one part (十月) → 尤其是. 甚至 would need October to be a surprising extreme, but it's just the best bit." },
        { q: "<span class=\"zh\">他平时做作业很马虎，没想到这次___一个错都没有。</span>", choices: ["<span class=\"zh\">竟然</span>", "<span class=\"zh\">到底</span>", "<span class=\"zh\">千万</span>", "<span class=\"zh\">专门</span>"], a: 0, expl: "平时很马虎 sets a low expectation; a flawless homework smashes it → 没想到…**竟然**, the surprise sandwich. 到底 needs an open question, 千万 lives only in warnings, and 专门 would claim he made zero mistakes 'on purpose'." },
        { q: "<span class=\"zh\">这几天都是高温天气，___阳台上的植物活不了了。</span>", choices: ["<span class=\"zh\">恐怕</span>", "<span class=\"zh\">千万</span>", "<span class=\"zh\">居然</span>", "<span class=\"zh\">究竟</span>"], a: 0, expl: "A pessimistic prediction of an unwelcome outcome → **恐怕**, one of the few attitude adverbs allowed to front the whole clause. 居然 is tempting but must sit AFTER the subject (植物居然…), and it marks surprise at a known fact, not a guess. 千万 needs a command, 究竟 an open question." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">语气副词 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Word</th><th>Feeling</th><th>Frame</th><th>Trap</th></tr>
<tr><td class="zh">竟然/居然</td><td>surprise</td><td class="zh">没想到…竟然…</td><td>after subject, never before it</td></tr>
<tr><td class="zh">到底/究竟</td><td>“what on earth”</td><td class="zh">到底+V不V/question word</td><td><b>never with 吗</b>; statement 到底 = “after all”</td></tr>
<tr><td class="zh">千万</td><td>urgent warning</td><td class="zh">千万别/要/记住</td><td>can't state own resolve — that's 一定</td></tr>
<tr><td class="zh">恐怕</td><td>worried guess</td><td class="zh">恐怕 + clause</td><td>≠ 害怕: ✗恐怕狗</td></tr>
<tr><td class="zh">差点儿</td><td>near-miss</td><td class="zh">差点儿(没)+V</td><td>bad event: 差点儿V＝差点儿没V (didn't happen) · good event: 差点儿V=failed, 差点儿没V=barely made it</td></tr>
<tr><td class="zh">几乎</td><td>statistical almost</td><td class="zh">几乎所有/都/没</td><td>no 没-flip; quantities, not drama</td></tr>
<tr><td class="zh">甚至</td><td>escalation “even”</td><td class="zh">甚至连…都/也</td><td>order fixed: 甚至→连→都</td></tr>
<tr><td class="zh">顺便</td><td>piggyback errand</td><td class="zh">trip A，顺便+B</td><td>needs an existing trip; opposite of 专门</td></tr>
<tr><td class="zh">专门</td><td>sole purpose</td><td class="zh">专门为/给…V</td><td>if it rode along, it's 顺便</td></tr>
<tr><td class="zh">尤其(是)</td><td>spotlight</td><td class="zh">set，尤其是X</td><td>needs the set stated first; “very” = 特别, not 尤其</td></tr>
</table></div>`
    }
  ]
});
