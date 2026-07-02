/* HSK 4 Grammar Lab — 综合演练 (mixed exam practice: the grand finale) */
registerPage({
  id: "exam-practice",
  zh: "**综合**演练",
  title: "Mixed exam practice — the grammar gym",
  subtitle: "No new grammar on this page — only reps. Everything you trained across this site comes back mixed, disguised, and at real exam speed: sentence ordering, word arranging, error hunting, and a 24-question grand quiz. Treat it like exam day: timer on, no peeking.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: "How HSK 4 actually tests grammar",
      short: "The exam map",
      html: `
<p>HSK 4 never asks "what is a potential complement?" — it hides grammar inside three task types. Know the task, and you know where your points are:</p>
<h3>1 · Reading part 2: 排列顺序 — order the clauses</h3>
<p>You get three clauses (A/B/C) and arrange them into one logical sentence-or-two. Ten items, pure grammar radar. Your search order:</p>
<ul>
<li><b class="hl">Connector pairs</b> — find the half that can't start: <span class="zh">但是·却·所以·就·才·反而·而且·也</span> never open a passage. Their partners (<span class="zh">虽然·因为·既然·只要·不但·无论</span>) usually do.</li>
<li><b class="hl">Full noun before pronoun</b> — <span class="zh">小王</span> appears before <span class="zh">他</span>. A clause starting with a bare pronoun or with no subject rarely goes first.</li>
<li><b class="hl">Time & logic flow</b> — background/time first (<span class="zh">…的时候</span>, <span class="zh">上个月</span>), event second, comment/result (<span class="zh">于是·因此·最后</span>) third.</li>
</ul>
<h3>2 · Writing part 1: 完成句子 — arrange the words</h3>
<p>Word chunks → one correct sentence. This is where the 把/被 machines, complements and 得-phrases earn their keep. Full algorithm in the strategy box below the ordering drill.</p>
<h3>3 · Writing part 2: 看图用词造句 — picture + word</h3>
<p>You see a photo and one word; you write any correct sentence using it. Grammar strategy: <b>keep it short and armor-plated</b>. One subject, one pattern you own completely: a 把-sentence for action photos (<span class="zh">她把房间打扫得很干净</span>), a 得-complement for skills (<span class="zh">他网球打得真好</span>), 正在 for ongoing scenes. Nobody gets bonus points for risky sentences — but you lose points for broken ones.</p>
<div class="callout tip"><span class="co-title">💡 The 关联词 subject rule — free points in ordering items</span>
Same subject in both clauses → subject sits BEFORE the connector, once: <span class="zh"><b class="hl">他</b>不但会开车，而且开得很好</span>. Different subjects → each clause keeps its own, after the connector: <span class="zh">不但<b class="hl">他</b>会，<b class="hl">他妹妹</b>也会</span>. Ordering items exploit this constantly.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "mcq",
      title: "排列顺序 — order the clauses (10 items)",
      short: "Ordering drill",
      intro: "Real exam format: arrange A, B, C into the natural order. Hunt connectors first, subjects second, time-logic third.",
      items: [
        { q: '<span class="zh">A 他不但没有生气<br>B 反而笑着安慰了我<br>C 我不小心把他的杯子打碎了</span>', choices: ["C → A → B", "A → B → C", "C → B → A", "A → C → B"], a: 0, expl: "Event first (C sets the scene, and it's the only clause with a full setup). Then the reversal pair does the rest: 不但没… (A) must precede 反而… (B). — 'I broke his cup; not only did he not get angry, he even comforted me with a smile.'" },
        { q: '<span class="zh">A 那就好好儿准备明年的比赛吧<br>B 既然你已经决定再试一次<br>C 别再为这次的失败难过了</span>', choices: ["A → B → C", "B → A → C", "C → B → A", "B → C → A"], a: 1, expl: "既然 (B) opens and 那就 (A) answers it — the pair 既然…那就 is glued. The stand-alone advice C closes. — 'Since you've decided to try again, prepare well for next year's competition, and stop feeling bad about this failure.'" },
        { q: '<span class="zh">A 因此推迟到下个星期五举行<br>B 原来定在这个星期五的运动会<br>C 由于天气原因</span>', choices: ["C → B → A", "B → C → A", "A → C → B", "B → A → C"], a: 1, expl: "B is the topic (a full noun phrase — nothing to refer back to). 由于 gives the reason (C), 因此 draws the result (A) — 因此 can never open. — 'The sports meet originally set for this Friday has, due to weather, been postponed to next Friday.'" },
        { q: '<span class="zh">A 汉语的声调一开始很难掌握<br>B 但是只要每天坚持练习<br>C 就一定能说得越来越标准</span>', choices: ["B → C → A", "A → C → B", "A → B → C", "C → B → A"], a: 2, expl: "A states the difficulty; 但是 (B) turns; 只要…就 chains B to C. Two paired clues in one item — 就 confirms C can't stand first. — 'Tones are hard at first, but if you practice daily, you'll speak more and more accurately.'" },
        { q: '<span class="zh">A 他把收件人的地址写错了<br>B 所以包裹又被寄回来了<br>C 第一次寄包裹的时候</span>', choices: ["A → C → B", "C → A → B", "C → B → A", "A → B → C"], a: 1, expl: "Time frame first (C: …的时候), cause second (A: the 把-machine reports what he did to the address), 所以-result last (B: the 被-machine reports what happened to the parcel). — 'The first time he mailed a parcel, he wrote the address wrong, so it got sent back.'" },
        { q: '<span class="zh">A 无论遇到什么困难<br>B 最后终于成了一名医生<br>C 她都没有放弃自己的梦想</span>', choices: ["A → C → B", "C → A → B", "A → B → C", "B → A → C"], a: 0, expl: "无论 (A) must precede its 都 (C) — that pair is unbreakable. 最后终于 (B) is the story's ending. — 'No matter what difficulties she met, she never gave up her dream, and finally became a doctor.'" },
        { q: '<span class="zh">A 连最简单的西红柿炒鸡蛋都做不好<br>B 更别说做一桌菜请客人了<br>C 我弟弟很少进厨房</span>', choices: ["C → B → A", "A → B → C", "C → A → B", "A → C → B"], a: 2, expl: "C introduces the subject (full noun 我弟弟 — must come before the subject-less A and B). Then the escalation: 连…都 (A) sets the bottom, 更别说 (B) climbs from it. — 'My brother rarely cooks; he can't even manage tomato-egg, let alone a dinner party.'" },
        { q: '<span class="zh">A 其实是去年才搬过来的<br>B 很多人以为他是本地人<br>C 他普通话说得跟北京人一样好</span>', choices: ["B → C → A", "C → B → A", "A → B → C", "C → A → B"], a: 1, expl: "C gives the evidence, B the (wrong!) conclusion people draw — 以为 promises a correction, and 其实 (A) delivers it. 其实 can't open a passage; it needs something to correct. — 'His Mandarin is as good as a Beijinger's; many assume he's local — actually he only moved here last year.'" },
        { q: '<span class="zh">A 于是决定明年春天再去一次<br>B 可惜那时候花已经谢了<br>C 我们上个月去南方看花</span>', choices: ["C → B → A", "C → A → B", "B → C → A", "A → C → B"], a: 0, expl: "Story order: trip (C, has the time phrase 上个月), disappointment (B: 可惜 comments on something already told; 那时候 points back), decision (A: 于是 draws the consequence, and 再去一次 needs a first visit). — 'Last month we went south to see the blossoms; sadly they'd already fallen, so we decided to go again next spring.' (谢 xiè here = wilt — nice HSK5 bonus.)" },
        { q: '<span class="zh">A 就得先把基础打好<br>B 想要取得好成绩<br>C 不管学什么专业</span>', choices: ["B → C → A", "C → B → A", "A → B → C", "C → A → B"], a: 1, expl: "不管 (C) opens the widest frame, the condition 想要… (B) narrows it, and 就得 (A) — which can never start — states the requirement. — 'Whatever your major, if you want good grades, you have to build your foundation first.'" }
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "concept",
      title: "The 完成句子 algorithm — five moves, every item",
      short: "Writing strategy",
      html: `
<p>Writing part 1 gives you 4–6 chunks. Run these moves in order, and the sentence assembles itself:</p>
<ol>
<li><b class="hl">Find the verb engine.</b> Look for verb + complement chunks (<span class="zh">翻译成 · 骑走 · 打扫得 · 听得见</span>). That's your sentence's heart — everything else orbits it.</li>
<li><b class="hl">Check for a machine word: 把 / 被 / 比.</b> 把 → object before verb, ending after verb. 被 → victim + 被 + doer + verb + result. 比 → A 比 B + adjective (+得多/多了), and remember: no 很/非常 near the adjective.</li>
<li><b class="hl">Stack the front-loaders.</b> Time words, modals, negation, adverbs like 已经/不小心 all pile up BEFORE 把/被/the main verb: <span class="zh">我<b class="hl">已经</b>把行李收拾好了</span>.</li>
<li><b class="hl">Marry the connector pairs.</b> A tile with 不但/只有/连 promises a partner tile (而且/才/都). Place the pair first, fill the middle after.</li>
<li><b class="hl">Read it aloud in your head.</b> If your inner voice stumbles, two chunks are swapped — usually the 得-phrase or the duration (duration goes AFTER the verb: 学了<b>三年</b>, not 三年学了).</li>
</ol>
<div class="callout warn"><span class="co-title">⚠️ Chunk sizes are traps</span>
The exam pre-glues characters into chunks of 2–4 — and gluing is information! A chunk like <span class="zh">学了</span> (verb+了) wants a duration right behind it; a chunk like <span class="zh">是去年九月</span> screams for a <span class="zh">的</span> tile somewhere at the end (是…的). Read the glue, not just the words.</div>`
    },

    /* ------------------------------------------------ 4 */
    {
      type: "builder",
      title: "完成句子 — arrange the words (12 items)",
      short: "Arranging drill",
      intro: "Twelve exam-style items, chunked exactly the way HSK chunks them. Each one runs a different machine from this site.",
      items: [
        { tiles: ["请把", "这些句子", "翻译成", "英语"], py: "Qǐng bǎ zhèxiē jùzi fānyì chéng Yīngyǔ.", en: "Please translate these sentences into English.", hint: "把-machine: object before the verb, 成 + result after it." },
        { tiles: ["我的自行车", "被弟弟", "骑走", "了"], py: "Wǒ de zìxíngchē bèi dìdi qí zǒu le.", en: "My bike was ridden off by my little brother.", hint: "被-machine: victim + 被 + doer + verb + complement. Never a bare verb after 被." },
        { tiles: ["坐地铁", "比开车", "快", "得多"], py: "Zuò dìtiě bǐ kāichē kuài de duō.", en: "Taking the subway is much faster than driving.", hint: "比 + adjective + 得多 — the degree gap goes AFTER the adjective." },
        { tiles: ["他", "学太极拳", "学了", "三年"], py: "Tā xué tàijíquán xué le sān nián.", en: "He's been doing tai chi for three years.", hint: "Duration with an object → repeat the verb: V + O, V + 了 + duration." },
        { tiles: ["这个字", "太难了", "连老师", "都不认识"], py: "Zhège zì tài nán le, lián lǎoshī dōu bú rènshi.", en: "This character is so hard even the teacher doesn't know it.", hint: "连 X 都 — the extreme case, with 都 glued after it." },
        { tiles: ["他是", "去年九月", "来中国", "的"], py: "Tā shì qùnián jiǔyuè lái Zhōngguó de.", en: "It was last September that he came to China.", hint: "是…的 spotlight on the time — the lonely 的 tile ends the sentence." },
        { tiles: ["只有", "多听多说", "才能", "提高口语水平"], py: "Zhǐyǒu duō tīng duō shuō, cái néng tígāo kǒuyǔ shuǐpíng.", en: "Only by listening and speaking a lot can you improve your spoken Chinese.", hint: "只有…才 — the necessary condition pair; 才 opens clause two." },
        { tiles: ["他昨晚", "只睡了", "五个小时的", "觉"], py: "Tā zuówǎn zhǐ shuì le wǔ gè xiǎoshí de jiào.", en: "He only got five hours of sleep last night.", hint: "睡觉 is separable — the duration (＋的) wedges in between 睡 and 觉." },
        { tiles: ["坐在后面的", "同学", "听得见", "我说话吗"], py: "Zuò zài hòumiàn de tóngxué tīng de jiàn wǒ shuōhuà ma?", en: "Can the students in the back hear me?", hint: "Potential complement 听得见 = 'able to hear' — one unbreakable unit." },
        { tiles: ["坚持锻炼以后", "他的身体", "越来越", "好了"], py: "Jiānchí duànliàn yǐhòu, tā de shēntǐ yuèláiyuè hǎo le.", en: "Since he started exercising regularly, his health keeps getting better.", hint: "越来越 + bare adjective + 了 — no 很 allowed in between." },
        { tiles: ["他不但", "会说汉语", "而且", "说得很流利"], py: "Tā búdàn huì shuō Hànyǔ, érqiě shuō de hěn liúlì.", en: "He not only speaks Chinese, he speaks it fluently.", hint: "Same subject → 他 stands BEFORE 不但, once, for both clauses." },
        { tiles: ["外面太冷了", "你们", "快进", "屋里来吧"], py: "Wàimiàn tài lěng le, nǐmen kuài jìn wūli lái ba.", en: "It's freezing outside — come on into the house.", hint: "Place object (屋里) squeezes in BEFORE the directional 来." }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "clinic",
      title: "改错 — find & fix (10 cross-topic bugs)",
      short: "Error hunt",
      intro: "One classic disease per sentence, drawn from ten different topics. Name the topic, then the cure.",
      items: [
        { wrong: "幸好出租车开得快，我差点儿赶上了飞机。", right: "幸好出租车开得快，我差点儿没赶上飞机。", py: "Xìnghǎo chūzūchē kāi de kuài, wǒ chàdiǎnr méi gǎnshàng fēijī.", en: "Luckily the taxi was fast — I almost missed my flight (but made it).", expl: "With DESIRED outcomes, 差点儿 + V means you failed (almost caught it… didn't). 'Barely made it' = 差点儿没 + V. (see: attitude adverbs)" },
        { wrong: "哥哥比我很高。", right: "哥哥比我高得多。", py: "Gēge bǐ wǒ gāo de duō.", en: "My brother is much taller than me.", expl: "比-sentences ban 很/非常/太. To size the gap, use 得多/多了/一点儿 AFTER the adjective. (see: comparisons)" },
        { wrong: "她的男朋友一边高一边帅。", right: "她的男朋友又高又帅。", py: "Tā de nánpéngyou yòu gāo yòu shuài.", en: "Her boyfriend is tall and handsome.", expl: "一边…一边 links simultaneous ACTIONS (一边吃一边聊). Parallel qualities take 又…又. (see: addition & sequencing)" },
        { wrong: "他跑的很快，我追不上。", right: "他跑得很快，我追不上。", py: "Tā pǎo de hěn kuài, wǒ zhuī bu shàng.", en: "He runs really fast — I can't catch up.", expl: "After a verb, before a description → 得, the complement-de. 的 belongs between attribute and noun. (see: the three de)" },
        { wrong: "这么多菜，我们把它吃不完。", right: "这么多菜，我们吃不完。", py: "Zhème duō cài, wǒmen chī bu wán.", en: "So much food — we can't finish it.", expl: "Potential complements (吃不完) never enter the 把-machine: 把 needs a controlled outcome, 吃不完 reports lack of ability. Drop 把 or topicalize. (see: 把 + potential complements)" },
        { wrong: "他昨天不睡得好。", right: "他昨天睡得不好。", py: "Tā zuótiān shuì de bù hǎo.", en: "He slept badly last night.", expl: "With state complements, negation lives INSIDE the complement: V得 + 不 + adj. Negating the verb itself (不睡) means refusing to sleep at all. (see: degree & state complements)" },
        { wrong: "他今天早上十点才到了公司。", right: "他今天早上十点才到公司。", py: "Tā jīntiān zǎoshang shí diǎn cái dào gōngsī.", en: "He didn't get to the office until ten this morning.", expl: "才 ('as late as') rejects 了 — lateness is presented as bare fact. Its twin 就 happily takes 了: 八点就到了. (see: 就 vs 才)" },
        { wrong: "这个电影真好看，我想明天又看一遍。", right: "这个电影真好看，我想明天再看一遍。", py: "Zhège diànyǐng zhēn hǎokàn, wǒ xiǎng míngtiān zài kàn yí biàn.", en: "This movie is great — I want to watch it again tomorrow.", expl: "Future repetition (not yet happened) → 再. 又 stamps repetitions that already happened: 昨天又看了一遍. (see: 又·再·还)" },
        { wrong: "无论天气怎么样，他每天跑步。", right: "无论天气怎么样，他每天都跑步。", py: "Wúlùn tiānqì zěnmeyàng, tā měitiān dōu pǎobù.", en: "No matter the weather, he runs every day.", expl: "无论/不管 clauses must be answered by 都/也 in the main clause — the pair is grammar, not decoration. (see: conditionals & indefinites)" },
        { wrong: "我的钱包被小偷偷。", right: "我的钱包被小偷偷走了。", py: "Wǒ de qiánbāo bèi xiǎotōu tōu zǒu le.", en: "My wallet was stolen by a pickpocket.", expl: "Same golden rule as 把: after 被 the verb can't stand bare — it needs a result (偷走了/偷了). (see: passives with 被)" }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "Trap radar — the ten red flags, 30 seconds before the quiz",
      short: "Trap radar",
      html: `
<p>Scan any exam sentence for these flags. Each one triggers a single mechanical check:</p>
<ul>
<li><span class="pill">把 / 被</span> → is there something AFTER the verb? Bare verb = wrong.</li>
<li><span class="pill">比</span> → any 很/非常/太 near the adjective? Kill it. Gap words (得多/一点儿) go after.</li>
<li><span class="pill">得</span> → verb before it? Then it's the complement-de; negation goes after 得.</li>
<li><span class="pill">才</span> → no 了 after the verb. <span class="pill">就</span> → 了 welcome.</li>
<li><span class="pill">又 vs 再</span> → already happened → 又; still to come → 再.</li>
<li><span class="pill">无论 / 不管 / 连</span> → hunt for the mandatory 都/也.</li>
<li><span class="pill">越来越 / 一天比一天</span> → bare adjective only, no 很.</li>
<li><span class="pill">是…的</span> → past event + spotlight on time/place/manner? The 的 must close it.</li>
<li><span class="pill">以为</span> → the belief is WRONG. If the sentence confirms it, the word should be 认为.</li>
<li><span class="pill">verb + duration</span> → object present? Repeat the verb (学汉语学了三年) or hug the duration inside a separable verb (睡了五个小时的觉).</li>
</ul>
<div class="callout tip"><span class="co-title">💡 On distractors</span>
Every wrong option in the quiz below is a real learner error — the same ones from the error clinics across this site. If an option feels comfortable, that's exactly why it's there. Trust the checks, not the comfort.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Grand mixed quiz 🏁 — 24 questions, every topic",
      short: "Grand quiz",
      intro: "The whole site in one sweep. Real exam difficulty or a notch above. 20+ correct = you're ready for test day.",
      items: [
        { q: '<span class="zh">这道题你又做___了，再检查一遍吧。</span>', choices: ['<span class="zh">完</span>', '<span class="zh">错</span>', '<span class="zh">到</span>', '<span class="zh">会</span>'], a: 1, expl: "再检查一遍 implies something's wrong → 做错 'did it wrong'. 做完 only says it's finished — no reason to re-check. (see: result complements)" },
        { q: '<span class="zh">春天了，天气慢慢暖和___了。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">下去</span>', '<span class="zh">出来</span>', '<span class="zh">过去</span>'], a: 0, expl: "起来 = a state beginning and building: 暖和起来 'starting to warm up'. 下去 continues an existing state; 出来 is for emerging results (看出来). (see: directional complements)" },
        { q: '<span class="zh">声音太小了，坐在后面的人都听___。</span>', choices: ['<span class="zh">不见</span>', '<span class="zh">得见</span>', '<span class="zh">见了</span>', '<span class="zh">得懂</span>'], a: 0, expl: "太小了 → inability → negative potential 听不见. 听得见 says they CAN hear (contradiction); 听得懂 is about understanding, not volume. (see: potential complements)" },
        { q: '<span class="zh">听到这个消息，他高兴___跳了起来。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>', '<span class="zh">了</span>'], a: 2, expl: "跳了起来 describes HOW happy → state complement → 得. 地 would need the order 高兴地跳 (adverb before verb) — here 高兴 comes first, so 得 it is. (see: the three de)" },
        { q: "Which sentence is correct?", choices: ['<span class="zh">我学了三年汉语。</span>', '<span class="zh">我学汉语了三年。</span>', '<span class="zh">我三年学了汉语。</span>', '<span class="zh">我学了汉语三年。</span>'], a: 0, expl: "Duration slides between verb and object: 学了 + 三年(的) + 汉语. Alternative: 学汉语学了三年 — but never duration dangling at the end. (see: duration complements)" },
        { q: '<span class="zh">请大家___课本翻到第五十页。</span>', choices: ['<span class="zh">把</span>', '<span class="zh">被</span>', '<span class="zh">对</span>', '<span class="zh">给</span>'], a: 0, expl: "You're doing something TO the textbook, with a result (翻到第五十页) → the 把-machine. 被 would make the textbook the victim of an unknown force. (see: the 把 construction)" },
        { q: '<span class="zh">生日蛋糕___妹妹一个人吃光了。</span>', choices: ['<span class="zh">把</span>', '<span class="zh">被</span>', '<span class="zh">对</span>', '<span class="zh">向</span>'], a: 1, expl: "Subject = the cake = the victim → 被 + doer + verb + result (吃光了). With 把 the cake would have to be doing the eating. (see: passives with 被)" },
        { q: '<span class="zh">这家店的咖啡比那家___。</span>', choices: ['<span class="zh">好喝多了</span>', '<span class="zh">很好喝</span>', '<span class="zh">太好喝了</span>', '<span class="zh">最好喝</span>'], a: 0, expl: "In a 比-sentence, degree adverbs (很/太/最) are banned — gaps are measured after the adjective: 好喝多了 / 好喝得多. (see: comparisons)" },
        { q: '<span class="zh">电影八点开始，他七点半___到了。</span>', choices: ['<span class="zh">才</span>', '<span class="zh">就</span>', '<span class="zh">再</span>', '<span class="zh">还</span>'], a: 1, expl: "Earlier than needed → 就 ('as early as'). 才 would complain he was late — but he beat the clock by 30 minutes. (see: 就 vs 才)" },
        { q: '<span class="zh">火车九点开，他八点五十九分___跑进车站，差点儿没赶上。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">又</span>', '<span class="zh">都</span>'], a: 1, expl: "One minute before departure = later than it should be → 才. Note 差点儿没赶上 confirms: he DID catch it, barely. (see: 就 vs 才 + attitude adverbs)" },
        { q: '<span class="zh">这本书太好看了，我想___看一遍。</span>', choices: ['<span class="zh">又</span>', '<span class="zh">也</span>', '<span class="zh">再</span>', '<span class="zh">才</span>'], a: 2, expl: "想 + future repetition → 再. 又 is reserved for repetitions already on the record (昨天又看了一遍). (see: 又·再·还)" },
        { q: '<span class="zh">他上星期迟到了两次，今天___迟到了。</span>', choices: ['<span class="zh">再</span>', '<span class="zh">又</span>', '<span class="zh">还</span>', '<span class="zh">就</span>'], a: 1, expl: "Today's lateness already happened (迟到了) → 又. 再 would promise a future repeat — grim, but grammatically different. (see: 又·再·还)" },
        { q: '<span class="zh">___明天下大雨，比赛___会按时举行。</span>', choices: ['<span class="zh">因为…所以</span>', '<span class="zh">即使…也</span>', '<span class="zh">只有…才</span>', '<span class="zh">不但…而且</span>'], a: 1, expl: "Hypothetical extreme + unchanged result = concession → 即使…也. 因为…所以 would claim rain CAUSES punctuality. (see: contrast & concession)" },
        { q: '<span class="zh">___你已经决定了，___别再犹豫了。</span>', choices: ['<span class="zh">既然…就</span>', '<span class="zh">虽然…但是</span>', '<span class="zh">尽管…却</span>', '<span class="zh">因为…于是</span>'], a: 0, expl: "Accepting a known fact and drawing the natural conclusion → 既然…就. 虽然/尽管 expect a contrast, but there's no contradiction here. (see: cause & effect)" },
        { q: "Which sentence is correct?", choices: ['<span class="zh">我是坐飞机来的。</span>', '<span class="zh">我是坐飞机来了。</span>', '<span class="zh">我坐飞机是来的。</span>', '<span class="zh">我是坐飞机的来。</span>'], a: 0, expl: "是…的 brackets the spotlighted means (坐飞机) and the verb; 的 comes last. 了 and 是…的 don't mix — the event is already known, only the HOW is news. (see: emphasis with 是…的)" },
        { q: '<span class="zh">这个问题太简单了，___小学生___会回答。</span>', choices: ['<span class="zh">因为…所以</span>', '<span class="zh">除了…以外</span>', '<span class="zh">连…都</span>', '<span class="zh">只有…才</span>'], a: 2, expl: "Extreme-case emphasis ('even a primary schooler') → 连…都. 只有…才 would absurdly claim ONLY schoolkids can answer. (see: 连…都/也)" },
        { q: '<span class="zh">他刚搬来，这里的人他___都不认识。</span>', choices: ['<span class="zh">谁</span>', '<span class="zh">什么</span>', '<span class="zh">哪儿</span>', '<span class="zh">怎么</span>'], a: 0, expl: "The unknowns are PEOPLE → 谁都不认识 'doesn't know anyone'. Question words + 都/也 + negation = total indefinites; pick the word matching the category. (see: question words as indefinites)" },
        { q: "Which sentence is correct?", choices: ['<span class="zh">我想见面他。</span>', '<span class="zh">我想跟他见面。</span>', '<span class="zh">我想见面跟他。</span>', '<span class="zh">我想他见面。</span>'], a: 1, expl: "见面 is separable — 面 is already the object, so ✗见面他. The partner arrives via 跟: 跟他见面. (see: separable verbs)" },
        { q: '<span class="zh">___天气变冷，来公园锻炼的人越来越少了。</span>', choices: ['<span class="zh">随着</span>', '<span class="zh">关于</span>', '<span class="zh">对于</span>', '<span class="zh">按照</span>'], a: 0, expl: "Two things changing in step ('as the weather cools…') → 随着. 关于/对于 mark topics, 按照 marks standards followed. (see: prepositions & coverbs)" },
        { q: '<span class="zh">教室里大概有___学生。</span>', choices: ['<span class="zh">三十来个</span>', '<span class="zh">三十个来</span>', '<span class="zh">来三十个</span>', '<span class="zh">三来十个</span>'], a: 0, expl: "来 slots between a round ten and the measure word: 三十 + 来 + 个. Every other position is scrambled. (see: numbers & approximation)" },
        { q: '<span class="zh">他的表演___了观众的欢迎。</span>', choices: ['<span class="zh">受到</span>', '<span class="zh">得到</span>', '<span class="zh">感到</span>', '<span class="zh">收到</span>'], a: 0, expl: "欢迎 belongs to the 受到 collocation list (受到欢迎/影响/批评). 收到 takes parcels and emails; 感到 takes emotions. (see: confusable pairs)" },
        { q: '<span class="zh">今天路上特别堵，我___迟到了。</span>', choices: ['<span class="zh">差点儿</span>', '<span class="zh">到底</span>', '<span class="zh">千万</span>', '<span class="zh">顺便</span>'], a: 0, expl: "差点儿 + bad thing = it nearly happened but didn't — I was NOT late. 到底 demands answers, 千万 gives warnings, 顺便 does things in passing. (see: attitude adverbs)" },
        { q: '<span class="zh">无论工作多忙，他___坚持每天锻炼。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">都</span>', '<span class="zh">才</span>', '<span class="zh">却</span>'], a: 1, expl: "无论 must be answered by 都/也 — the pair is non-negotiable. 就/才 answer conditions (只要/只有), not 无论. (see: conditionals)" },
        { q: '<span class="zh">他认真___回答了老师___问题。</span>', choices: ['<span class="zh">地 / 的</span>', '<span class="zh">的 / 地</span>', '<span class="zh">得 / 的</span>', '<span class="zh">地 / 得</span>'], a: 0, expl: "认真 modifies the verb ahead of it → 地; 老师 modifies the noun 问题 → 的. Adverb-de before the verb, noun-de before the noun, 得 only after verbs. (see: the three de)" }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "cheatsheet",
      title: "Night-before checklist — 20 killer rules 📋",
      short: "Checklist",
      html: `
<h3 class="zh">考前一晚 — one rule per topic</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Topic</th><th>The one rule that scores</th></tr>
<tr><td>Result complements</td><td>好 = usable outcome, 完 = merely finished: 修好了 ≠ 修完了</td></tr>
<tr><td>Directional complements</td><td>Place object BEFORE 来/去: 进屋里来 · abstract 起来 = starting up</td></tr>
<tr><td>Potential complements</td><td>V得C / V不C — and they never enter 把/被 sentences</td></tr>
<tr><td>Degree & state complements</td><td>Negation inside: 睡得不好, never ✗不睡得好</td></tr>
<tr><td>Duration & frequency</td><td>Object? Repeat the verb: 学汉语学了三年 · separable: 睡了五个小时的觉</td></tr>
<tr><td>把</td><td>Verb never last: 把作业做<b class="hl">完了</b> · negation/modals BEFORE 把 · definite object only</td></tr>
<tr><td>被</td><td>Victim + 被 (+doer) + V + result — bare verb after 被 is dead on arrival</td></tr>
<tr><td>Comparisons</td><td>✗比他很高 → 比他高<b class="hl">得多</b> · not-as-good: 不如 / 没有…那么</td></tr>
<tr><td>就 vs 才</td><td>就 = earlier/easier (+了 OK) · 才 = later/harder (no 了!)</td></tr>
<tr><td>又·再·还</td><td>又 = happened again · 再 = will happen again · 还 = still/also (还没…呢)</td></tr>
<tr><td>Time adverbs</td><td>刚 + V (just did) vs 刚才 = noun "a moment ago" · 按时 on schedule, 及时 in the nick of time</td></tr>
<tr><td>Attitude adverbs</td><td>差点儿迟到 = wasn't late · 差点儿没赶上 = did catch it · 千万 + 别/要</td></tr>
<tr><td>越来越</td><td>越来越 + bare adjective — no 很, no 非常, ever</td></tr>
<tr><td>Cause & effect</td><td>既然…就 accepts a fact; 因为…所以 explains one · 于是 = and so (next event)</td></tr>
<tr><td>Conditionals</td><td>只要…就 (enough) vs 只有…才 (necessary) vs 除非 (only if)</td></tr>
<tr><td>Contrast</td><td>虽然/尽管 pairs with 但是/却 — but 却 stays INSIDE clause 2, after the subject</td></tr>
<tr><td>Addition</td><td>不但…而且: same subject → subject before 不但 · qualities: 又…又</td></tr>
<tr><td>的·地·得</td><td>的 + noun · 地 + verb · verb + 得 + description — check what FOLLOWS the blank</td></tr>
<tr><td>是…的</td><td>Past event, spotlight on time/place/how: 是 before it, 的 at the end, no 了</td></tr>
<tr><td>连…都 / 无论…都</td><td>连 and 无论 both demand 都/也 — a missing 都 is a wrong sentence</td></tr>
</table></div>
<p style="text-align:center"><b>Now close the book, sleep well — 祝你考试顺利！🎉</b></p>`
    }
  ]
});
