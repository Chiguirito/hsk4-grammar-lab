/* HSK 4 Grammar Lab — 可能补语 (potential complements) */
registerPage({
  id: "potential-complements",
  zh: "**可能**补语",
  title: "Potential complements — can & can't, built into the verb",
  subtitle: "You've just learned that verb + complement is a welded unit with exactly one seam. Now we crack it open: slip 得 or 不 into any result or directional complement and 'happened' becomes 'can/can't happen'. HSK 4 tests this daily-life machinery relentlessly — 听不懂, 买不起, 来不及 are survival vocabulary.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: <span class="zh hl">得</span> = achievable, <span class="zh hl">不</span> = not achievable',
      short: "Big idea",
      html: `
<p>Take any verb + complement you now own — <span class="zh">听懂 看见 做完 找到 上去 出来</span> — and open the seam:</p>
<div class="pattern">Verb + <span class="slot">得 / 不</span> + Complement<small>听<b>得</b>懂 = can understand · 听<b>不</b>懂 = can't understand. Both 得 and 不 are toneless here: tīng de dǒng, tīng bu dǒng.</small></div>
<p>The meaning is precise: <b>is the result reachable, given the circumstances?</b> Too noisy → <span class="zh">听不见</span>. Too expensive → <span class="zh">买不起</span>. Too much food → <span class="zh">吃不完</span>. Not “may I”, not “am I allowed” — just: will the result physically, mentally, financially <i>happen</i>?</p>
<p>In real speech the <b>negative form does most of the work</b>; the positive (V得C) lives mainly in questions and reassuring answers: <span class="zh">——看得懂吗？——看得懂！</span></p>
<div class="callout cmp"><span class="co-title">🇪🇸 🇬🇧 Real parallels</span>
Spanish impersonal <i>“no se puede”</i> matches the flavor exactly: <i>no se puede entrar</i> ≈ <span class="zh">进不去</span>, <i>no se puede leer</i> (letra ilegible) ≈ <span class="zh">看不清楚</span> — feasibility, not permission. And English hides lexicalized potentials in special verbs: <i>can't <b>afford</b></i> = 买不起, <i>can't <b>stand</b></i> = 受不了, <i>can't <b>make it in time</b></i> = 来不及. Where English needs a whole new verb, Chinese just flips 得→不.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The vocabulary list is full of frozen potentials (来不及、受不了、看不起、舍不得…), Listening hinges on 得/不 in fast speech, and the classic grammar trap — 把/被 with a potential complement — appears almost every session.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "Building potentials from complements you already know",
      short: "Building kit",
      intro: "Every result and directional complement you've learned has a potential twin. Plus two specialists (动, 下) and one universal joker (了 liǎo) that mostly live in this construction.",
      head: ["Base unit", "Can — V得C", "Can't — V不C", "Typical trigger"],
      rows: [
        ['<span class="zh">听懂</span> <span class="py-hint">tīng dǒng</span>', '<span class="zh">听<b class="hl">得</b>懂</span>', '<span class="zh">听<b class="hl">不</b>懂</span>', 'too fast, dialect, jargon'],
        ['<span class="zh">看见</span> <span class="py-hint">kàn jiàn</span>', '<span class="zh">看得见</span>', '<span class="zh">看不见</span>', 'too dark, too far'],
        ['<span class="zh">做完</span> <span class="py-hint">zuò wán</span>', '<span class="zh">做得完</span>', '<span class="zh">做不完</span>', 'too much, too little time'],
        ['<span class="zh">找到</span> <span class="py-hint">zhǎo dào</span>', '<span class="zh">找得到</span>', '<span class="zh">找不到</span>', 'lost, hidden, sold out'],
        ['<span class="zh">记住</span> <span class="py-hint">jì zhù</span>', '<span class="zh">记得住</span>', '<span class="zh">记不住</span>', 'too long, too many'],
        ['<span class="zh">上去</span> <span class="py-hint">shàngqù</span>', '<span class="zh">上得去</span>', '<span class="zh">上不去</span>', 'too steep, too crowded'],
        ['<span class="zh">看出来</span> <span class="py-hint">kàn chūlái</span>', '<span class="zh">看得出来</span>', '<span class="zh">看不出来</span>', 'can you tell?'],
        ['<span class="zh">+ 动</span> move', '<span class="zh">拿得动 走得动</span>', '<span class="zh">拿不动 走不动</span>', 'too heavy, too tired'],
        ['<span class="zh">+ 下</span> fit', '<span class="zh">坐得下 住得下</span>', '<span class="zh">坐不下 吃不下</span>', 'capacity: room, stomach'],
        ['<span class="zh">+ 了 (liǎo!)</span> manage', '<span class="zh">受得了 吃得了 去得了</span>', '<span class="zh">受不了 吃不了 去不了</span>', 'universal “able to happen” — careful: read 了 as <b>liǎo</b> here, never le']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — feasibility in the wild",
      short: "Examples",
      intro: "In every sentence, find the circumstance that blocks (or allows) the result. That circumstance is why a potential complement — not 能 — is the natural choice.",
      items: [
        { tag: "懂", cn: "老师说得太快了，我听**不懂**。", py: "Lǎoshī shuō de tài kuài le, wǒ tīng bu dǒng.", en: "The teacher speaks too fast — I can't understand.", note: "Blocking circumstance: speed. 我不能听懂 is what the exam wants you to STOP saying." },
        { tag: "完", cn: "你放心，这点儿作业我今天做**得完**。", py: "Nǐ fàngxīn, zhè diǎnr zuòyè wǒ jīntiān zuò de wán.", en: "Don't worry — this bit of homework I can finish today.", note: "Positive form in a reassurance: its favourite habitat." },
        { tag: "见", cn: "后面的同学看**得见**黑板上的字吗？", py: "Hòumiàn de tóngxué kàn de jiàn hēibǎn shàng de zì ma?", en: "Can the students in the back see the writing on the board?", note: "Question with V得C + 吗 — the standard classroom check." },
        { tag: "动", cn: "这个箱子太重了，我一个人搬**不动**。", py: "Zhège xiāngzi tài zhòng le, wǒ yí ge rén bān bu dòng.", en: "This suitcase is too heavy — I can't move it alone.", note: "动 = (make it) move. Strength-based feasibility." },
        { tag: "起", cn: "北京的房子太贵了，我们买**不起**。", py: "Běijīng de fángzi tài guì le, wǒmen mǎi bu qǐ.", en: "Housing in Beijing is too expensive — we can't afford it.", note: "起 = lift (financially). 买不起 = can't afford; 买不到 would mean 'sold out'." },
        { tag: "上", cn: "快点儿，再不走就赶**不上**最后一班地铁了！", py: "Kuài diǎnr, zài bù zǒu jiù gǎn bu shàng zuìhòu yì bān dìtiě le!", en: "Hurry — if we don't leave now we'll miss the last subway!", note: "赶不上 = can't catch (transport, progress, others' level)." },
        { tag: "着", cn: "昨晚我喝了两杯咖啡，怎么也睡**不着**。", py: "Zuówǎn wǒ hē le liǎng bēi kāfēi, zěnme yě shuì bu zháo.", en: "I had two coffees last night and just couldn't fall asleep.", note: "着 zháo = succeed in reaching the state. 怎么也 + V不C = no matter what, no luck." },
        { tag: "及", cn: "别急，离上课还有半个小时，来**得及**。", py: "Bié jí, lí shàngkè hái yǒu bàn ge xiǎoshí, lái de jí.", en: "Relax — class starts in half an hour, there's still time.", note: "来得及／来不及 — the time-pressure pair. Usually stands alone or before a verb: 来不及吃早饭了." },
        { tag: "了", cn: "这么多菜，我们两个人吃**不了**。", py: "Zhème duō cài, wǒmen liǎng ge rén chī bu liǎo.", en: "This much food — the two of us can't possibly eat it all.", note: "了 = liǎo! Quantity overwhelms ability. Compare 吃不下 (stomach full) below." },
        { tag: "出来", cn: "他一开口，我就听**得出来**他是北方人。", py: "Tā yì kāikǒu, wǒ jiù tīng de chūlái tā shì běifāng rén.", en: "The moment he speaks, I can tell he's a northerner.", note: "Directional 出来 (detect) opened with 得 — the two systems compose." },
        { tag: "下", cn: "房间太小，住**不下**这么多人。", py: "Fángjiān tài xiǎo, zhù bu xià zhème duō rén.", en: "The room is too small to fit this many people.", note: "下 = capacity. 坐不下 / 放不下 / 吃不下 — same logic, different containers." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "Three lookalikes to keep apart",
      short: "Lookalikes",
      intro: "The exam never asks 'form a potential complement' — it makes you choose between this and 能, or this and the state complement, or tests the word-order bans. One tab each.",
      tabs: [
        {
          label: "vs 能/可以",
          html: `<p><span class="zh">能/可以</span> = <b>permission, rules, offers, circumstances granted from outside</b>. Potential complement = <b>inherent feasibility</b>: does the world let the result happen?</p>
<ul>
<li>Rule: <span class="zh">图书馆里<b class="hl">不能</b>大声说话。</span> — someone forbids it.</li>
<li>Feasibility: <span class="zh">太吵了，我<b class="hl">听不见</b>。</span> — physics forbids it.</li>
</ul>
<p>When feasibility is the point, the potential complement isn't just preferred — <span class="zh">✗我不能听懂</span> is simply wrong; say <span class="zh">我听不懂</span>. And frozen forms never switch: <i>can't afford</i> is 买不起, never ✗不能买得起.</p>`,
          examples: [
            { cn: "这里**不能**停车，会罚款的。", py: "Zhèlǐ bù néng tíngchē, huì fákuǎn de.", en: "You can't park here — you'll get fined.", note: "External rule → 能. A potential complement (停不下?) would absurdly claim the car doesn't fit." },
            { cn: "字太小了，我**看不清楚**。", py: "Zì tài xiǎo le, wǒ kàn bu qīngchu.", en: "The print is too small — I can't read it clearly.", note: "Physical limitation → potential complement. 不能看清楚 sounds like a rule against reading clearly." }
          ]
        },
        {
          label: "vs 说得好",
          html: `<p>Danger: <span class="zh">V + 得 + adjective</span> has TWO readings. <span class="zh">他说得好</span> can be a <b>state complement</b> (“he speaks well” — a habitual quality) or, rarely, a potential (“he can manage to say it well”). Three tests break the tie:</p>
<ul>
<li><b>Insert 很:</b> <span class="zh">说得<b class="hl">很</b>好</span> — only the state complement accepts degree adverbs. If 很/非常/真 fits, it's state.</li>
<li><b>Negate:</b> state → <span class="zh">说得<b class="hl">不</b>好</span> (speaks badly); potential → <span class="zh">说<b class="hl">不</b>好</span> (can't manage to say it well). The 得 vanishes in the potential negative!</li>
<li><b>Object:</b> state must copy the verb: <span class="zh">他<b class="hl">说</b>汉语<b class="hl">说</b>得很好</span>. The potential takes the object directly: <span class="zh">我说不好汉语</span>.</li>
</ul>`,
          examples: [
            { cn: "他网球打**得很好**，是我们学校的第一名。", py: "Tā wǎngqiú dǎ de hěn hǎo, shì wǒmen xuéxiào de dì-yī míng.", en: "He plays tennis really well — best in our school.", note: "很 present → state complement, describing his general level." },
            { cn: "这个问题太复杂了，我怕说**不好**。", py: "Zhège wèntí tài fùzá le, wǒ pà shuō bu hǎo.", en: "This issue is really complicated — I'm afraid I won't be able to explain it well.", note: "No 得 in the negative → potential: feasibility of doing it well this time." }
          ]
        },
        {
          label: "Questions & bans",
          html: `<p><b>Question forms:</b> <span class="zh">看得懂<b class="hl">吗</b>？</span> or the affirmative-negative sandwich <span class="zh">看<b class="hl">得</b>懂看<b class="hl">不</b>懂？</span> (repeat the whole V得C V不C — never ✗看得懂不懂).</p>
<p><b>Objects:</b> follow the complement (<span class="zh">听不懂<b class="hl">中文</b></span>) or move up front as topic (<span class="zh"><b class="hl">中文</b>我听不懂</span>) — long objects prefer the front.</p>
<p><b>The big ban:</b> potential complements refuse <span class="zh">把</span> and <span class="zh">被</span>. 把/被 report what WAS done to something; potentials discuss what CAN happen — the two logics can't share a verb:</p>
<p class="zh" style="font-size:1.15rem">✗ 我<s>把</s>这本书看不完 → ✓ <b class="hl">这本书</b>我看不完<br>✗ 作业<s>被</s>我做不完 → ✓ 作业我做不完</p>`,
          examples: [
            { cn: "黑板上的字你看**得**清楚看**不**清楚？", py: "Hēibǎn shàng de zì nǐ kàn de qīngchu kàn bu qīngchu?", en: "Can you see the board clearly or not?", note: "Full sandwich: V得C + V不C, object topicalized in front." },
            { cn: "这么厚的小说，我一个星期**看不完**。", py: "Zhème hòu de xiǎoshuō, wǒ yí ge xīngqī kàn bu wán.", en: "A novel this thick — I can't finish it in a week.", note: "Topic + subject + potential. Note what's absent: no 把 anywhere." },
            { cn: "中文菜单你看**得懂**吗？", py: "Zhōngwén càidān nǐ kàn de dǒng ma?", en: "Can you read a Chinese menu?", note: "The simpler 吗-question — equally correct, more colloquial." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: "The lexicalized set — learn these as words",
      short: "Frozen set",
      intro: "These potentials fossilized into everyday vocabulary. HSK 4 tests them as words — no assembly required, but knowing the logic makes them unforgettable.",
      head: ["Expression", "Literal logic", "Actually means", "Example"],
      rows: [
        ['<span class="zh">来得及 / 来不及</span> <span class="py-hint">lái de jí / lái bu jí</span>', 'can(not) arrive in time', 'there is / isn\'t time', '<span class="zh">还来得及买票。／来不及吃早饭了！</span> <span class="py-hint">Hái lái de jí mǎi piào. / Lái bu jí chī zǎofàn le!</span>'],
        ['<span class="zh">买得起 / 买不起</span> <span class="py-hint">mǎi de qǐ / mǎi bu qǐ</span>', 'can(not) lift the price', 'can / can\'t afford', '<span class="zh">这个牌子太贵了，我买不起。</span> <span class="py-hint">Zhège páizi tài guì le, wǒ mǎi bu qǐ.</span>'],
        ['<span class="zh">看不起</span> <span class="py-hint">kàn bu qǐ</span>', 'can\'t look up at', '<b>look down on</b> — pure idiom!', '<span class="zh">别看不起人，他很有经验。</span> <span class="py-hint">Bié kàn bu qǐ rén, tā hěn yǒu jīngyàn.</span> (看得起 = respect)'],
        ['<span class="zh">受不了</span> <span class="py-hint">shòu bu liǎo</span>', 'can\'t endure-manage', 'can\'t stand it', '<span class="zh">这么热的天，我真受不了。</span> <span class="py-hint">Zhème rè de tiān, wǒ zhēn shòu bu liǎo.</span>'],
        ['<span class="zh">吃不下</span> <span class="py-hint">chī bu xià</span>', 'can\'t fit it down', 'too full to eat more', '<span class="zh">我饱了，一口也吃不下了。</span> <span class="py-hint">Wǒ bǎo le, yì kǒu yě chī bu xià le.</span>'],
        ['<span class="zh">睡不着</span> <span class="py-hint">shuì bu zháo</span>', 'can\'t reach sleep', 'can\'t fall asleep', '<span class="zh">我一紧张就睡不着。</span> <span class="py-hint">Wǒ yì jǐnzhāng jiù shuì bu zháo.</span>'],
        ['<span class="zh">记不住</span> <span class="py-hint">jì bu zhù</span>', 'memory won\'t hold it', 'it won\'t stick', '<span class="zh">这些生词我总是记不住。</span> <span class="py-hint">Zhèxiē shēngcí wǒ zǒngshì jì bu zhù.</span>'],
        ['<span class="zh">听不懂</span> <span class="py-hint">tīng bu dǒng</span>', 'can\'t listen-understand', 'can\'t understand (audio)', '<span class="zh">他说方言，我完全听不懂。</span> <span class="py-hint">Tā shuō fāngyán, wǒ wánquán tīng bu dǒng.</span>'],
        ['<span class="zh">看不见</span> <span class="py-hint">kàn bu jiàn</span>', 'can\'t look-perceive', 'can\'t see it', '<span class="zh">太黑了，什么都看不见。</span> <span class="py-hint">Tài hēi le, shénme dōu kàn bu jiàn.</span>'],
        ['<span class="zh">找不到</span> <span class="py-hint">zhǎo bu dào</span>', 'search won\'t attain', 'can\'t find', '<span class="zh">糟糕，我找不到登机牌了！</span> <span class="py-hint">Zāogāo, wǒ zhǎo bu dào dēngjīpái le!</span>'],
        ['<span class="zh">赶不上</span> <span class="py-hint">gǎn bu shàng</span>', 'can\'t chase onto', 'miss (bus) / can\'t keep up', '<span class="zh">再等就赶不上火车了。</span> <span class="py-hint">Zài děng jiù gǎn bu shàng huǒchē le.</span>'],
        ['<span class="zh">想不到</span> <span class="py-hint">xiǎng bu dào</span>', 'thought can\'t reach it', 'unexpected!', '<span class="zh">真想不到会在这儿见到你！</span> <span class="py-hint">Zhēn xiǎng bu dào huì zài zhèr jiàn dào nǐ!</span> (≈ 没想到)'],
        ['<span class="zh">舍不得</span> <span class="py-hint">shě bu de</span>', 'can\'t bear to part', 'hate to (leave/spend/throw)', '<span class="zh">她舍不得离开父母。</span> <span class="py-hint">Tā shě bu de líkāi fùmǔ.</span>'],
        ['<span class="zh">对不起</span> <span class="py-hint">duì bu qǐ</span>', 'can\'t face you (with raised head)', 'sorry — a fossilized potential!', '<span class="zh">对不起！——没关系。</span> Flip it: <span class="zh">要对得起父母。</span> = be worthy of your parents.']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — form and choice",
      short: "Checkpoint",
      intro: "Six questions: can you build the form and pick it over 能?",
      items: [
        { q: '<span class="zh">音乐太大声了，我___你说什么。</span>', choices: ['<span class="zh">听不见</span>', '<span class="zh">不能听见</span>', '<span class="zh">听得见不</span>', '<span class="zh">不听见</span>'], a: 0, expl: "Feasibility blocked by noise → potential complement 听不见. 不能听见 imposes a weird rule; 不 alone can't negate a result." },
        { q: '<span class="zh">门太小了，这架钢琴___。</span>', choices: ['<span class="zh">搬不进去</span>', '<span class="zh">不能搬进去</span>', '<span class="zh">没搬进去</span>', '<span class="zh">不搬得进去</span>'], a: 0, expl: "The door's size makes it infeasible → 搬不进去. 没搬进去 just reports it didn't happen; 不能 suggests it's forbidden." },
        { q: "Which question form is correct?", choices: ['<span class="zh">你看得懂看不懂？</span>', '<span class="zh">你看得懂不懂？</span>', '<span class="zh">你看得懂看得不懂？</span>', '<span class="zh">你不看得懂吗？</span>'], a: 0, expl: "The sandwich repeats the complete unit: V得C + V不C. No shortcuts, no 得+不 hybrid." },
        { q: '<span class="zh">这台电脑太贵了，我___。</span>', choices: ['<span class="zh">不买得起</span>', '<span class="zh">买得不起</span>', '<span class="zh">买不起</span>', '<span class="zh">不能买得起</span>'], a: 2, expl: "To negate a potential, 不 REPLACES 得 inside the seam: 买不起. It never stacks outside (不买得起) or after 得 (买得不起)." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">这本小说我看不完。</span>', '<span class="zh">我把这本小说看不完。</span>', '<span class="zh">我看不完这本小说。</span>', '<span class="zh">这么厚的小说谁看得完？</span>'], a: 1, expl: "把 and potential complements never mix — 把 reports handling, potentials discuss possibility. Topicalize instead: 这本小说我看不完." },
        { q: '<span class="zh">电影三点开始，现在才两点，我们还___。</span>', choices: ['<span class="zh">来不及</span>', '<span class="zh">来得及</span>', '<span class="zh">来得上</span>', '<span class="zh">来不了</span>'], a: 1, expl: "An hour to spare → 来得及 'there's still time'. 来不及 and 来不了 contradict the situation — there's plenty of time; 来得上 doesn't exist (来 pairs with 及, never 上)." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One bug each — usually a 能 that sneaked in, a 得 that survived negation, or a 把 that has no business here.",
      items: [
        { wrong: "我不能看懂这本中文书。", right: "我看不懂这本中文书。", py: "Wǒ kàn bu dǒng zhè běn Zhōngwén shū.", en: "I can't read this Chinese book.", expl: "Skill-based feasibility lives INSIDE the verb: 看不懂. 不能 is for permission and rules — the number-one transfer error from English can/Spanish poder." },
        { wrong: "他把这个箱子搬不动。", right: "这个箱子他搬不动。", py: "Zhège xiāngzi tā bān bu dòng.", en: "He can't move this suitcase.", expl: "把 is banned with potential complements. Promote the object to topic instead — same emphasis, legal grammar." },
        { wrong: "你说得太快，我听得不懂。", right: "你说得太快，我听不懂。", py: "Nǐ shuō de tài kuài, wǒ tīng bu dǒng.", en: "You speak too fast — I can't understand.", expl: "In the negative, 不 replaces 得: 听不懂. 听得不懂 mixes the positive and negative forms into a monster." },
        { wrong: "这个字太小，我看见不。", right: "这个字太小，我看不见。", py: "Zhège zì tài xiǎo, wǒ kàn bu jiàn.", en: "The characters are too small — I can't see them.", expl: "The infix goes INTO the seam, not after the unit: 看 + 不 + 见. V+C+不 is never a word order." },
        { wrong: "他是有名的大老板，这辆车他当然买不起。", right: "他是有名的大老板，这辆车他当然买得起。", py: "Tā shì yǒumíng de dà lǎobǎn, zhè liàng chē tā dāngrán mǎi de qǐ.", en: "He's a famous big boss — of course he can afford this car.", expl: "Logic check: 当然 + rich boss → the affirmative 买得起. Learners drill 买不起 so hard they forget its positive twin exists." },
        { wrong: "我看不起这篇文章，语法太难了。", right: "我看不懂这篇文章，语法太难了。", py: "Wǒ kàn bu dǒng zhè piān wénzhāng, yǔfǎ tài nán le.", en: "I can't understand this article — the grammar is too hard.", expl: "看不起 is the frozen idiom 'to look down on'. Comprehension failure is 看不懂. Mixing them insults the article." },
        { wrong: "别等我了，我可能来得不及。", right: "别等我了，我可能来不及。", py: "Bié děng wǒ le, wǒ kěnéng lái bu jí.", en: "Don't wait for me — I might not make it in time.", expl: "Frozen forms follow the same rule: negative = 来不及, with 不 replacing 得. 来得不及 doesn't exist." },
        { wrong: "房间里坐得下不下十个人？", right: "房间里坐得下坐不下十个人？", py: "Fángjiān lǐ zuò de xià zuò bu xià shí ge rén?", en: "Can the room seat ten people or not?", expl: "The affirmative-negative question repeats the ENTIRE V得C / V不C: 坐得下坐不下. You can't clip the second verb." },
        { wrong: "网络太慢了，这个网页我没打得开。", right: "网络太慢了，这个网页我打不开。", py: "Wǎngluò tài màn le, zhège wǎngyè wǒ dǎ bu kāi.", en: "The internet is too slow — I can't get this webpage to open.", expl: "没 negates what HAPPENED; feasibility is negated inside the seam, with 不 replacing 得: 打不开. 没打得开 welds the two systems together — and even plain 没打开 would only report one past failure, while the ongoing 'too slow' problem demands the potential form." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "了", cn: "童年的那些快乐的回忆，我永远忘**不了**。", py: "Tóngnián de nàxiē kuàilè de huíyì, wǒ yǒngyuǎn wàng bu liǎo.", en: "Those happy childhood memories — I'll never be able to forget them.", note: "了 here is **liǎo**, the universal 'manage' complement. Long object promoted to topic up front — no 把 needed or allowed." },
        { tag: "出", cn: "笔试的最后一道题，我想了半天也想**不出**答案。", py: "Bǐshì de zuìhòu yí dào tí, wǒ xiǎng le bàntiān yě xiǎng bu chū dá'àn.", en: "The last question on the written test — I thought about it forever and still couldn't come up with the answer.", note: "想**不出**(来) = can't produce an idea from scratch; 想不起来 = can't recall something you once knew. The exam loves this pair." },
        { tag: "进去", cn: "这个车位太窄了，我的车怎么停也停**不进去**。", py: "Zhège chēwèi tài zhǎi le, wǒ de chē zěnme tíng yě tíng bu jìnqù.", en: "This parking spot is too narrow — no matter how I maneuver, I can't get the car in.", note: "Blocking circumstance: width. The compound keeps its whole tail: 停 + **不** + 进去, never 停进不去." },
        { tag: "上去", cn: "地铁里乘客太多了，后面的人根本挤**不上去**。", py: "Dìtiě lǐ chéngkè tài duō le, hòumiàn de rén gēnběn jǐ bu shàngqù.", en: "The subway car is packed with passengers — the people behind simply can't squeeze on.", note: "挤 jǐ (HSK 5) = to squeeze in — subway survival vocab. Crowding blocks the directional result: 挤 + **不** + 上去, infix right after the verb." },
        { tag: "完", cn: "放心吧，就这几瓶饮料，我们肯定喝**得完**，别再买了。", py: "Fàngxīn ba, jiù zhè jǐ píng yǐnliào, wǒmen kěndìng hē de wán, bié zài mǎi le.", en: "Relax — it's just these few bottles of drinks, we can definitely finish them. Don't buy any more.", note: "Positive V**得**C in a reassurance — its favourite habitat. 得 is toneless: hē de wán." },
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — feasibility, assembled",
      short: "Builder",
      intro: "Watch for the topicalized objects — they're the legal replacement for the 把 you're not allowed to use.",
      items: [
        { tiles: ["老师说的话", "你", "都", "听得懂", "吗"], py: "Lǎoshī shuō de huà nǐ dōu tīng de dǒng ma?", en: "Can you understand everything the teacher says?", hint: "Long object up front as topic, 都 before the verb." },
        { tiles: ["这么多作业", "我", "今天", "肯定", "做不完"], py: "Zhème duō zuòyè wǒ jīntiān kěndìng zuò bu wán.", en: "This much homework — I definitely can't finish it today.", hint: "Topic + time + adverb + potential. No 把 anywhere!", alt: [["我", "今天", "肯定", "做不完", "这么多作业"], ["今天", "我", "肯定", "做不完", "这么多作业"]] },
        { tiles: ["再不出发", "我们", "就", "赶不上", "飞机", "了"], py: "Zài bù chūfā wǒmen jiù gǎn bu shàng fēijī le.", en: "If we don't leave now, we'll miss the flight.", hint: "再不…就… frames the threat; 赶不上 takes 飞机 directly.", alt: [["我们", "再不出发", "就", "赶不上", "飞机", "了"]] },
        { tiles: ["我", "怎么也", "想不起来", "他的名字"], py: "Wǒ zěnme yě xiǎng bu qǐlái tā de míngzi.", en: "I just can't recall his name, no matter what.", hint: "怎么也 + negative potential = total failure. Directional 起来 opened by 不.", alt: [["他的名字", "我", "怎么也", "想不起来"]] },
        { tiles: ["她", "舍不得", "扔掉", "这些旧照片"], py: "Tā shě bu de rēng diào zhèxiē jiù zhàopiàn.", en: "She can't bring herself to throw away these old photos.", hint: "Frozen 舍不得 acts like a verb 'hate to' + full verb phrase.", alt: [["这些旧照片", "她", "舍不得", "扔掉"]] },
        { tiles: ["声音", "太小了", "后面的人", "听不见"], py: "Shēngyīn tài xiǎo le, hòumiàn de rén tīng bu jiàn.", en: "The volume is too low — the people in the back can't hear.", hint: "Cause first, then who + can't-hear." },
        { tiles: ["这个房间", "住得下", "四个人", "吗"], py: "Zhège fángjiān zhù de xià sì ge rén ma?", en: "Can this room accommodate four people?", hint: "Capacity 下 in a 吗-question; the place is the subject." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 了 is liǎo here — and it's the universal complement</h3>
<p><span class="zh">受不了 吃不了 去不了 忘不了 来得了</span> — this 了 means “able to be carried through” and is read <b>liǎo</b>. If you read <span class="zh">吃不了</span> as “chī bu le”, the sentence collapses. <span class="zh">吃不<b class="hl">了</b></span> (too much food) vs <span class="zh">吃不<b class="hl">下</b></span> (stomach already full) — quantity vs capacity.</p>
<h3>2 · 对不起 is grammar wearing a trench coat</h3>
<p>对 (face) + 不 + 起 (hold your head up): “I cannot face you.” Hence the flip side <span class="zh">对<b class="hl">得</b>起</span>: <span class="zh">我们要对得起自己的努力。</span> Same skeleton as 看不起／看得起 (despise/respect) and 买不起／买得起.</p>
<h3>3 · 差不多 is a fossil too — don't confuse it with 差点儿</h3>
<p><span class="zh">差<b class="hl">不</b>多</span> = “can't differ much” → almost the same, roughly: <span class="zh">时间差不多了。</span> But <span class="zh">差点儿</span> (no potential inside!) = “almost happened — and didn't”: <span class="zh">我差点儿迟到。</span> I was ALMOST late (I made it). <span class="zh">差点儿没赶上</span> = almost missed it (caught it, phew).</p>
<h3>4 · The positive form is rarer — and that's a test point</h3>
<p>Statements prefer the negative (<span class="zh">听不懂</span>); positives cluster in questions (<span class="zh">听得懂吗？</span>), answers (<span class="zh">听得懂！</span>), and reassurances (<span class="zh">放心，来得及</span>). If you're writing 我听得懂 in a neutral statement, 我能听懂 or plain 我懂 often sounds more natural — but in the exam's blanks, feasibility contexts want the potential form.</p>
<h3>5 · Double complements welcome</h3>
<p>Directional compounds keep their whole tail: <span class="zh">看<b class="hl">得</b>出来 · 想<b class="hl">不</b>起来 · 说<b class="hl">不</b>下去 · 答<b class="hl">不</b>上来</span>. The infix always sits right after the verb, before the entire tail.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
See 得/不 sandwiched inside a verb? Instantly check: ① is there a 把/被 nearby? (then it's wrong) ② is it feasibility or permission? ③ if 得 + adjective, run the 很-test to separate potential from state. These three checks solve nearly every potential-complement item ever printed.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "The frozen set, the near-twins, and the word-order bans — everything the real paper throws at you.",
      items: [
        { q: '<span class="zh">外面一点儿灯都没有，我什么都___。</span>', choices: ['<span class="zh">看不见</span>', '<span class="zh">看不懂</span>', '<span class="zh">看不住</span>', '<span class="zh">看不光</span>'], a: 0, expl: "No light blocks perception itself → 看不见. 看不懂 needs something readable that you saw fine but couldn't decode." },
        { q: '<span class="zh">他说的是上海话，我一句也___。</span>', choices: ['<span class="zh">听不到</span>', '<span class="zh">听不懂</span>', '<span class="zh">听不起</span>', '<span class="zh">听不住</span>'], a: 1, expl: "The audio arrived fine — the dialect blocks comprehension → 听不懂. 听不到 would mean the sound never reached you." },
        { q: '<span class="zh">这一课有五十个生词，我今天肯定___。</span>', choices: ['<span class="zh">记不着</span>', '<span class="zh">记不下去</span>', '<span class="zh">记不住</span>', '<span class="zh">记不见</span>'], a: 2, expl: "Memory failing to hold → 记不住. 住 = fixation, exactly the result 记 wants." },
        { q: '<span class="zh">我最近压力很大，晚上总是___。</span>', choices: ['<span class="zh">睡不住</span>', '<span class="zh">睡不着</span>', '<span class="zh">睡不下</span>', '<span class="zh">睡不见</span>'], a: 1, expl: "Can't reach the state of sleep → 睡不着 (zháo). 睡不下 would blame the bed's size; 睡不住 isn't a thing." },
        { q: '<span class="zh">你别___人！他虽然年轻，但是特别有经验。</span>', choices: ['<span class="zh">看不见</span>', '<span class="zh">看不懂</span>', '<span class="zh">看不出</span>', '<span class="zh">看不起</span>'], a: 3, expl: "The idiom: 看不起 = look down on. The other three are literal vision/comprehension fails — wrong register entirely." },
        { q: '<span class="zh">谢谢，真的太饱了，一口也___了。</span>', choices: ['<span class="zh">吃不下</span>', '<span class="zh">吃不起</span>', '<span class="zh">吃不见</span>', '<span class="zh">吃不住</span>'], a: 0, expl: "太饱 = capacity full → 吃不下. 吃不起 would complain the meal is too expensive — awkward at a dinner party." },
        { q: '<span class="zh">真___，他们俩居然是亲兄弟！</span>', choices: ['<span class="zh">想不起</span>', '<span class="zh">想不到</span>', '<span class="zh">想不出</span>', '<span class="zh">想不住</span>'], a: 1, expl: "想不到 = thought couldn't reach it = who would have guessed! 想不起(来) is failed recall; 想不出(来) is failed invention." },
        { q: '<span class="zh">师傅，麻烦您开快一点儿，我怕___飞机。</span>', choices: ['<span class="zh">来不及</span>', '<span class="zh">赶不上</span>', '<span class="zh">追不到</span>', '<span class="zh">走不动</span>'], a: 1, expl: "With 飞机 as the object, use 赶不上 + noun (miss the flight). 来不及 takes a verb or stands alone: 来不及了 / 来不及吃饭." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">这道题我做不出来。</span>', '<span class="zh">我把这道题做不出来。</span>', '<span class="zh">这道题被我做不出来。</span>', '<span class="zh">我不把这道题做得出来。</span>'], a: 0, expl: "Potential complements reject both 把 and 被. Topic + subject + V不C is the only legal frame here." },
        { q: '——<span class="zh">他做的菜怎么样？</span><br>Which answer says his cooking is (habitually) bad?', choices: ['<span class="zh">他做得不好。</span>', '<span class="zh">他做不好。</span>', '<span class="zh">他没做好。</span>', '<span class="zh">他做不了。</span>'], a: 0, expl: "State complement negative 得不好 = his general level is poor. 做不好 = can't manage it; 没做好 = botched it this once; 做不了 = can't do it at all." },
        { q: 'A: <span class="zh">这么多行李你一个人拿___吗？</span> B: <span class="zh">没问题，我力气大！</span>', choices: ['<span class="zh">得起</span>', '<span class="zh">得住</span>', '<span class="zh">得动</span>', '<span class="zh">得及</span>'], a: 2, expl: "力气 (strength) is the resource in question → 拿得动 'can physically move it'. 拿得起 is about lifting/affording; 拿得住 about grip." },
        { q: '<span class="zh">别担心，火车八点才开，现在出发还___。</span>', choices: ['<span class="zh">来得上</span>', '<span class="zh">来不及</span>', '<span class="zh">赶不上</span>', '<span class="zh">来得及</span>'], a: 3, expl: "才八点开 + 还 = reassurance → 来得及 'there's still time'. 来不及/赶不上 contradict 别担心; 来得上 doesn't exist." },
        { q: "<span class=\"zh\">他咳嗽得这么厉害，我估计明天的大赛他___了。</span>", choices: ["<span class=\"zh\">参加不了</span>", "<span class=\"zh\">参加得不了</span>", "<span class=\"zh\">不能参加得了</span>", "<span class=\"zh\">没参加</span>"], a: 0, expl: "Illness blocks feasibility → 参加**不了** (liǎo, the universal 'can manage' complement). In the negative, 不 REPLACES 得 — 参加得不了 keeps both; 不能参加得了 stacks a second 'can' outside the verb; 没参加 reports a past non-event, but this is about tomorrow." },
        { q: "<span class=\"zh\">这个塑料袋太小了，___这么多东西。</span>", choices: ["<span class=\"zh\">放不下</span>", "<span class=\"zh\">放不动</span>", "<span class=\"zh\">放不到</span>", "<span class=\"zh\">不放得下</span>"], a: 0, expl: "The blocker is capacity → 下 'fit': 放**不下**. 放不动 blames your strength, 放不到 means you can't reach the spot, and 不放得下 hangs the negation outside the seam — 不 must replace 得 inside the verb-complement unit." },
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">可能补语 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Piece</th><th>Remember</th></tr>
<tr><td>Formula</td><td>V + <b class="hl">得</b>/<b class="hl">不</b> + complement (result or directional) — 得/不 toneless; 不 REPLACES 得 in the negative</td></tr>
<tr><td>Meaning</td><td>result (not) achievable given circumstances — noise, money, time, space, skill</td></tr>
<tr><td>vs 能/可以</td><td>能 = permission & rules · V得/不C = feasibility. Feasibility → potential is obligatory: 听不懂, never ✗不能听懂</td></tr>
<tr><td>vs state 得</td><td>说得<b class="hl">很</b>好 (很 fits) = state · negative 说得不好 = state, 说<b class="hl">不</b>好 = potential</td></tr>
<tr><td>Questions</td><td>V得C吗？ · V得C V不C？ (repeat the whole unit)</td></tr>
<tr><td>Bans</td><td>NO 把, NO 被 — topicalize instead: 这本书我看不完</td></tr>
<tr><td>Object</td><td>after the complement (听不懂中文) or as topic up front (中文我听不懂)</td></tr>
<tr><td>了 = liǎo</td><td>受不了 吃不了 去不了 忘不了 — universal “can manage”; never read it le</td></tr>
<tr><td>Frozen stars</td><td class="zh">来得及/来不及 · 买得起/买不起 · 看不起(!) · 受不了 · 吃不下 · 睡不着 · 记不住 · 找不到 · 赶不上 · 想不到 · 舍不得 · 对不起/对得起</td></tr>
<tr><td>Fossil alert</td><td>差<b class="hl">不</b>多 = roughly (frozen potential) ≠ 差点儿 = almost happened (but didn't)</td></tr>
</table></div>`
    }
  ]
});
