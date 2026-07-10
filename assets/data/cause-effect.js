/* HSK 4 Grammar Lab — 因果关系 (cause & effect beyond 因为…所以) */
registerPage({
  id: "cause-effect",
  zh: "**因果**关系",
  title: "Cause & effect — beyond 因为…所以",
  subtitle: "You've used 因为…所以 since HSK 2. HSK 4 hands you the full toolbox: formal 由于, written 因此, narrative 于是, argumentative 既然…就 and purpose-marker 为了 — and then tests whether you know which one CAN'T replace which.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: five flavors of <span class="zh hl">“because → so”</span>',
      short: "Big idea",
      html: `
<p>In HSK 3, every cause wore the same uniform: <span class="zh">因为 A，所以 B</span>. Real Chinese — and the HSK 4 reading section — distinguishes <b>what kind</b> of cause-effect link you're making:</p>
<ul>
<li><b>Plain cause</b> (spoken, neutral): <span class="zh">因为…所以…</span></li>
<li><b>Formal cause</b> (written, announcements): <span class="zh"><b class="hl">由于</b>…因此/所以…</span></li>
<li><b>Logical conclusion</b> (written): <span class="zh">…，<b class="hl">因此</b>…</span></li>
<li><b>Narrative “and so then”</b> (storytelling): <span class="zh">…，<b class="hl">于是</b>…</span></li>
<li><b>Shared premise → suggestion</b>: <span class="zh"><b class="hl">既然</b>…就…</span></li>
</ul>
<div class="pattern">(<span class="slot">由于/因为</span> + cause) ，(Subj + <span class="slot">就/才</span>…) or (<span class="slot">因此/所以/于是</span> + result)<small>Conjunctions like 由于/因为/既然 introduce the cause clause; the result clause starts with 所以/因此/于是 — or carries an adverb like 就 AFTER its subject.</small></div>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 Your languages make the same cuts</span>
German: <i>weil</i> (因为) vs <i>da</i> (既然 — reason already known) vs <i>deshalb/daher</i> (因此) vs <i>also/da(rauf)</i> in stories (于是). Spanish: <i>porque</i> (因为) vs <i>ya que/como</i> (既然) vs <i>por lo tanto</i> (因此) vs <i>así que/entonces</i> (于是), plus <i>para</i> (为了). If you can pick between <i>weil/da</i> or <i>porque/ya que</i>, you can pick between 因为/既然 — it's the same instinct.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Reading part 2 (sentence ordering) almost always contains one 因果 pair, and the cloze questions love offering 于是 where only 因此 works. The pairs are also the glue of every listening dialogue.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The family at a glance",
      short: "Family table",
      intro: "Six tools, six job descriptions. The last column is the one the exam checks.",
      head: ["Word", "Register & job", "Pairs with", "Watch out"],
      rows: [
        ['<span class="zh">因为</span> <span class="py-hint">yīnwèi</span>', 'neutral, spoken & written; objective cause', '<span class="zh">所以</span>', 'The only one whose clause may come SECOND: <span class="zh">我没去，因为病了</span> ✓'],
        ['<span class="zh">由于</span> <span class="py-hint">yóuyú</span>', 'formal, written; reports, news, announcements', '<span class="zh">因此 / 所以</span>', 'Its clause normally comes FIRST. In speech, prefer 因为.'],
        ['<span class="zh">所以</span> <span class="py-hint">suǒyǐ</span>', 'neutral “so”; starts the result clause', '<span class="zh">因为 / 由于</span>', 'Fine alone: <span class="zh">下雨了，所以…</span>'],
        ['<span class="zh">因此</span> <span class="py-hint">yīncǐ</span>', 'written “therefore”; logical conclusion', '<span class="zh">由于</span> or stands alone', '✗<span class="zh">因为…因此</span> — 因此 refuses 因为!'],
        ['<span class="zh">于是</span> <span class="py-hint">yúshì</span>', 'narrative “and so then”; what happened next', 'stands alone', 'Tells sequence, NOT reason — it can never answer <span class="zh">为什么</span>.'],
        ['<span class="zh">既然</span> <span class="py-hint">jìrán</span>', '“since (as we both know)”; shared premise → conclusion/suggestion', '<span class="zh">就 / 那么 / 那就</span>', 'Pairs with 就, never with 所以.'],
        ['<span class="zh">为了</span> <span class="py-hint">wèile</span>', 'purpose, not cause — “in order to”', 'starts the sentence', 'Never pairs with 所以: ✗<span class="zh">为了…所以</span>'],
        ['<span class="zh">使 / 让 / 令</span> <span class="py-hint">shǐ / ràng / lìng</span>', 'causatives: “A makes B feel/do X” — cause packed into one clause', '—', '<span class="zh">这件事让大家很高兴</span> — no 所以 needed at all.']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — hear the register shift",
      short: "Examples",
      intro: "Tap 🔊 to listen. Same logical arrow (cause → effect), six different flavors — notice which ones feel like a news report and which like a chat.",
      items: [
        { tag: "因为", cn: "**因为**路上堵车，**所以**我迟到了二十分钟。", py: "Yīnwèi lùshang dǔchē, suǒyǐ wǒ chídào le èrshí fēnzhōng.", en: "I was twenty minutes late because of the traffic jam.", note: "The HSK 3 classic — still correct, still common. Either 因为 or 所以 can be dropped." },
        { tag: "因为②", cn: "我昨天没去上课，**因为**我感冒了。", py: "Wǒ zuótiān méi qù shàngkè, yīnwèi wǒ gǎnmào le.", en: "I didn't go to class yesterday, because I had a cold.", note: "因为 is the ONLY cause word that can trail after the result — 由于/既然 can't do this." },
        { tag: "由于", cn: "**由于**天气原因，今天的航班全部推迟。", py: "Yóuyú tiānqì yuányīn, jīntiān de hángbān quánbù tuīchí.", en: "Due to weather conditions, all of today's flights are delayed.", note: "Airport-announcement register. 由于 + noun phrase works too — like English 'due to'." },
        { tag: "由于…因此", cn: "**由于**他工作认真负责，**因此**公司决定给他涨工资。", py: "Yóuyú tā gōngzuò rènzhēn fùzé, yīncǐ gōngsī juédìng gěi tā zhǎng gōngzī.", en: "Since he works conscientiously, the company decided to give him a raise.", note: "由于…因此 is the formal power couple. 涨工资 = raise a salary." },
        { tag: "因此", cn: "这家饭馆的菜又好吃又便宜，**因此**总是坐满了人。", py: "Zhè jiā fànguǎn de cài yòu hǎochī yòu piányi, yīncǐ zǒngshì zuò mǎn le rén.", en: "This restaurant's food is both tasty and cheap; therefore it's always packed.", note: "因此 alone = 'therefore', drawing a logical conclusion in writing." },
        { tag: "于是", cn: "他听说那部电影特别感人，**于是**马上买了两张票。", py: "Tā tīngshuō nà bù diànyǐng tèbié gǎnrén, yúshì mǎshàng mǎi le liǎng zhāng piào.", en: "He heard the movie was really touching, and so he immediately bought two tickets.", note: "于是 narrates what happened NEXT — story mode, camera rolling. (感人 gǎnrén = touching, moving — HSK5.)" },
        { tag: "于是②", cn: "我发现忘带钥匙了，**于是**只好在门口等妻子回来。", py: "Wǒ fāxiàn wàng dài yàoshi le, yúshì zhǐhǎo zài ménkǒu děng qīzi huílái.", en: "I realized I'd forgotten my key, so I had no choice but to wait at the door for my wife.", note: "Event A, then event B as a consequence — that's 于是's whole job." },
        { tag: "既然", cn: "**既然**你身体不舒服，**就**早点儿回家休息吧。", py: "Jìrán nǐ shēntǐ bù shūfu, jiù zǎodiǎnr huí jiā xiūxi ba.", en: "Since you're not feeling well, go home early and rest.", note: "The premise is already known to both speakers; the second clause draws a suggestion with 就 + 吧." },
        { tag: "既然②", cn: "**既然**大家都同意，**那**我们**就**这么决定了。", py: "Jìrán dàjiā dōu tóngyì, nà wǒmen jiù zhème juédìng le.", en: "Since everyone agrees, then that's what we'll do.", note: "既然…那(么)…就 — very common combo in meetings and dialogues." },
        { tag: "为了", cn: "**为了**提高听力水平，她每天听半个小时的中文广播。", py: "Wèile tígāo tīnglì shuǐpíng, tā měitiān tīng bàn ge xiǎoshí de Zhōngwén guǎngbō.", en: "In order to improve her listening, she listens to Chinese radio for half an hour every day.", note: "为了 marks the GOAL (still in the future), not the cause. It loves the first slot of the sentence." },
        { tag: "让", cn: "这个好消息**让**大家都很兴奋。", py: "Zhège hǎo xiāoxi ràng dàjiā dōu hěn xīngfèn.", en: "This good news got everyone excited.", note: "Cause and effect in ONE clause: A 让 B + feeling. No 所以 needed." },
        { tag: "使", cn: "长时间看手机会**使**眼睛越来越干。", py: "Cháng shíjiān kàn shǒujī huì shǐ yǎnjing yuèláiyuè gān.", en: "Looking at your phone for long periods makes your eyes drier and drier.", note: "使 = formal 让. 令 is even more formal/literary: 令人感动." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "One story, five connectors — feel the nuance shift",
      short: "Story × 5",
      intro: "Same morning disaster — 小李 overslept — retold through each connector. The facts barely change; the flavor completely does.",
      tabs: [
        {
          label: "因为 neutral",
          html: `<p>Plain objective cause, everyday speech. You're simply explaining <b>why</b>.</p>`,
          examples: [
            { cn: "**因为**闹钟没响，**所以**小李今天迟到了。", py: "Yīnwèi nàozhōng méi xiǎng, suǒyǐ Xiǎo Lǐ jīntiān chídào le.", en: "Because his alarm didn't go off, Xiao Li was late today.", note: "Default choice. Also fine reversed: 小李迟到了，因为闹钟没响。" }
          ]
        },
        {
          label: "由于 formal",
          html: `<p>Same fact in a <b>written report</b> — say, the office attendance record. 由于-clause first, 因此 optional but classy.</p>`,
          examples: [
            { cn: "**由于**闹钟出了问题，小李**因此**未能按时到达公司。", py: "Yóuyú nàozhōng chū le wèntí, Xiǎo Lǐ yīncǐ wèi néng ànshí dàodá gōngsī.", en: "Owing to a problem with his alarm clock, Xiao Li was unable to arrive at the company on time.", note: "未能 (wèi néng, 'failed to') is formal flavor — 由于 pulls the whole sentence up a register. (未 is HSK 5; recognize it in written texts.)" }
          ]
        },
        {
          label: "既然 premise",
          html: `<p>Now the lateness is <b>known to both speakers</b>, and we build on it. 既然 doesn't explain — it says “given this fact we both accept, here's the conclusion.”</p>`,
          examples: [
            { cn: "**既然**已经迟到了，**就**先给经理发个短信说明一下吧。", py: "Jìrán yǐjīng chídào le, jiù xiān gěi jīnglǐ fā ge duǎnxìn shuōmíng yíxià ba.", en: "Since you're already late anyway, first send the manager a text to explain.", note: "The conclusion is a suggestion (就…吧) — 既然's favourite follow-up." }
          ]
        },
        {
          label: "于是 story",
          html: `<p>Story mode: what happened <b>next</b>. 于是 links two events on a timeline — it narrates, it doesn't argue.</p>`,
          examples: [
            { cn: "小李一看表，已经八点半了，**于是**他跑出门打了一辆出租车。", py: "Xiǎo Lǐ yí kàn biǎo, yǐjīng bā diǎn bàn le, yúshì tā pǎo chū mén dǎ le yí liàng chūzūchē.", en: "Xiao Li glanced at his watch — half past eight already — and so he ran out and hailed a taxi.", note: "Try answering 他为什么打车？ with 于是… — impossible. 于是 can't answer 为什么; that's the exam's favourite trick." }
          ]
        },
        {
          label: "因此 conclusion",
          html: `<p>The written <b>“therefore”</b>: a conclusion drawn from evidence. Perfect for the last sentence of an essay or a company email.</p>`,
          examples: [
            { cn: "小李这个月迟到了三次，**因此**经理决定和他谈一谈。", py: "Xiǎo Lǐ zhège yuè chídào le sān cì, yīncǐ jīnglǐ juédìng hé tā tán yi tán.", en: "Xiao Li has been late three times this month; therefore the manager decided to have a talk with him.", note: "因此 CAN answer 为什么 — it states a real reason-result link. That's the dividing line with 于是." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: '既然…就 — “since we both know that…”',
      short: "既然…就",
      html: `
<p><span class="zh">因为</span> gives an <b>objective cause</b>. <span class="zh hl">既然</span> points at a fact that is <b>already on the table</b> — known, admitted, or just stated by the other person — and draws a conclusion or suggestion from it.</p>
<div class="pattern"><span class="slot">既然</span> + known fact ，(Subj) + <span class="slot">就 / 那就 / 那么</span> + conclusion/suggestion<small>The second clause is often a suggestion (…吧), a rhetorical question (何必/为什么还…), or a decision.</small></div>
<p>Compare the pair:</p>
<ul>
<li><span class="zh"><b class="hl">因为</b>下雨，我们不去爬山了。</span> — objective report of cause.</li>
<li><span class="zh"><b class="hl">既然</b>下雨了，我们<b class="hl">就</b>在家看电影吧。</span> — “given that (as we can both see) it's raining, let's…”</li>
</ul>
<div class="callout cmp"><span class="co-title">🇩🇪 da vs weil · 🇪🇸 ya que vs porque — an exact match</span>
German <i>„<b>Da</b> es regnet, bleiben wir zu Hause“</i> presents the reason as known — that's 既然. <i>„<b>Weil</b> es regnet…“</i> presents it as information — that's 因为. Spanish is just as clean: <i>“<b>Ya que</b> estás aquí, ayúdame”</i> = <span class="zh">既然你来了，就帮帮我吧</span>, vs <i>“<b>porque</b> estás aquí”</i>. If da or ya que would fit, choose 既然.</div>
<div class="callout warn"><span class="co-title">⚠️ Pairing rules</span>
既然 pairs with <b>就 / 那么 / 那就</b> — never with 所以: ✗<span class="zh">既然你累了，<s>所以</s>休息吧</span> → ✓<span class="zh">既然你累了，就休息吧</span>. And remember 就 is an adverb: it comes <b>after</b> the subject (<span class="zh">我们<b class="hl">就</b>…</span>), never before it.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "Where does the connector sit? The position rules",
      short: "Position",
      html: `
<p>The sentence-ordering task is largely a <b>connector-placement</b> test. Chinese 关联词 come in two species, and they behave completely differently:</p>
<h3>1 · Conjunctions (因为 / 由于 / 既然) — flexible around the subject</h3>
<p>If <b>both clauses share the subject</b>, the conjunction usually comes after it: <span class="zh">他<b class="hl">因为</b>生病，没来上课。</span><br>If the <b>subjects differ</b>, the conjunction must come first, before its subject: <span class="zh"><b class="hl">因为</b>他生病了，我们把会议改到了明天。</span></p>
<h3>2 · Adverbs (就 / 才 / 都) — welded after the subject</h3>
<p class="zh" style="font-size:1.15rem">既然大家都到了，我们<b class="hl">就</b>开始吧。 ✓ &nbsp;&nbsp; ✗ 既然大家都到了，<s>就我们</s>开始吧。</p>
<h3>3 · Result-clause connectors (所以 / 因此 / 于是) — where they stand</h3>
<p><span class="zh">所以</span> and <span class="zh">于是</span> stand at the head of the second clause, before its subject: <span class="zh">…，<b class="hl">所以</b>我们迟到了。</span> <span class="zh">因此</span> is more flexible — clause-initial or right after the subject (<span class="zh">小李<b class="hl">因此</b>未能按时到达</span>), a pattern formal writing likes.</p>
<h3>4 · Clause order</h3>
<ul>
<li><span class="zh">因为</span>-clause: first OR second — <span class="zh">我没去，<b class="hl">因为</b>我病了</span> ✓ (afterthought reason, very spoken).</li>
<li><span class="zh">由于</span>-clause: virtually always <b>first</b>. ✗<span class="zh">我没去，<s>由于</s>我病了</span>.</li>
<li><span class="zh">既然</span>-clause: first (the premise must be on the table before you build on it).</li>
<li><span class="zh">为了</span>-phrase: loves the very front of the sentence.</li>
</ul>
<div class="callout tip"><span class="co-title">💡 Ordering-task algorithm</span>
① Find the cause word → its chunk goes first (unless it's a trailing 因为). ② Find 所以/因此/于是/就 → that chunk goes second. ③ If the second clause has 就/才, make sure a subject (or nothing) stands before it — 就 can never lead the clause.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six questions on the pairing rules — the exact things the exam checks first.",
      items: [
        { q: '<span class="zh">___天气原因，今天的比赛推迟到下周举行。</span>', choices: ['<span class="zh">由于</span>', '<span class="zh">于是</span>', '<span class="zh">既然</span>', '<span class="zh">为了</span>'], a: 0, expl: "Formal announcement + noun-phrase cause = 由于 ('due to'). 于是 narrates events, 既然 needs a shared premise, 为了 marks purpose." },
        { q: "Which pairing is WRONG?", choices: ['<span class="zh">因为…所以…</span>', '<span class="zh">由于…因此…</span>', '<span class="zh">因为…因此…</span>', '<span class="zh">既然…就…</span>'], a: 2, expl: "因此 accepts 由于 but refuses 因为 — ✗因为…因此 is the classic trap. The other three are the legal couples." },
        { q: '<span class="zh">___你已经决定了，我就不再说什么了。</span>', choices: ['<span class="zh">既然</span>', '<span class="zh">因为</span>', '<span class="zh">于是</span>', '<span class="zh">由于</span>'], a: 0, expl: "The other person's decision is a known, accepted fact, and the speaker draws a conclusion (就…) — textbook 既然. 因为 would state an objective cause, which feels off for building on someone's own words." },
        { q: '他为什么没来？——Which answer is grammatical?', choices: ['<span class="zh">于是他病了。</span>', '<span class="zh">因为他病了。</span>', '<span class="zh">就他病了。</span>', '<span class="zh">既然他病了。</span>'], a: 1, expl: "Only 因为 answers 为什么. 于是 narrates sequence and can never state a reason; 既然 and 就 need their partner clauses." },
        { q: '<span class="zh">既然你不喜欢这个工作，___辞职吧。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">所以</span>', '<span class="zh">因此</span>', '<span class="zh">于是</span>'], a: 0, expl: "既然 pairs with 就 (or 那么/那就), never with 所以/因此. The suggestion tone (…吧) fits 就 perfectly." },
        { q: 'Choose the correct position: <span class="zh">既然大家都同意，(A)我们(B)开始(C)准备吧。</span> Where does 就 go?', choices: ["A", "B", "C", "either A or B"], a: 1, expl: "就 is an adverb — after the subject, before the verb: 我们就开始准备吧. Clause-initial 就 (position A) is the #1 learner error." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One disease per patient: a wrong pairing, a wrong position, or the wrong connector for the job.",
      items: [
        { wrong: "因为他经常迟到，因此经理批评了他。", right: "由于他经常迟到，因此经理批评了他。／因为他经常迟到，所以经理批评了他。", py: "Yóuyú tā jīngcháng chídào, yīncǐ jīnglǐ pīpíng le tā.", en: "Because he was often late, the manager criticized him.", expl: "因此 refuses 因为. Keep 因此 and upgrade the first half to 由于, or keep 因为 and use 所以." },
        { wrong: "我很累，由于昨天晚上没睡好。", right: "我很累，因为昨天晚上没睡好。", py: "Wǒ hěn lèi, yīnwèi zuótiān wǎnshang méi shuì hǎo.", en: "I'm really tired, because I slept badly last night.", expl: "Only a 因为-clause may trail after the result. 由于 insists on going first: 由于昨晚没睡好，我很累。" },
        { wrong: "既然明天有考试，所以你今天别玩儿游戏了。", right: "既然明天有考试，你今天就别玩儿游戏了。", py: "Jìrán míngtiān yǒu kǎoshì, nǐ jīntiān jiù bié wánr yóuxì le.", en: "Since you have an exam tomorrow, don't play games today.", expl: "既然's partner is 就 (after the subject), not 所以. 既然…所以 is a pair the exam plants again and again." },
        { wrong: "为了他想家了，所以他给妈妈打了个电话。", right: "因为他想家了，所以他给妈妈打了个电话。", py: "Yīnwèi tā xiǎng jiā le, suǒyǐ tā gěi māma dǎ le ge diànhuà.", en: "Because he was homesick, he called his mom.", expl: "为了 marks a GOAL you're aiming at; 想家 is a cause that already happened → 因为. Purpose looks forward, cause looks back." },
        { wrong: "为了学好口语，所以我每天跟中国朋友聊天儿。", right: "为了学好口语，我每天跟中国朋友聊天儿。", py: "Wèile xué hǎo kǒuyǔ, wǒ měitiān gēn Zhōngguó péngyou liáotiānr.", en: "To improve my spoken Chinese, I chat with Chinese friends every day.", expl: "为了 never takes 所以 — the purpose phrase plugs straight into the main clause. (为了…所以 is a Spanish-speaker favourite: 'para…, por eso…')." },
        { wrong: "天太热了，于是我们别出去了。", right: "天太热了，我们就别出去了。／天太热了，咱们别出去了吧。", py: "Tiān tài rè le, wǒmen jiù bié chūqù le.", en: "It's too hot — let's not go out.", expl: "于是 only reports what DID happen next in a narrative; it can't introduce suggestions or commands. For 'so let's…', use 就 or nothing." },
        { wrong: "这个消息使大家都很高兴，所以大家都很高兴。", right: "这个消息使大家都很高兴。", py: "Zhège xiāoxi shǐ dàjiā dōu hěn gāoxìng.", en: "This news made everyone very happy.", expl: "使/让/令 already contain the whole cause→effect arrow in one clause — adding a 所以-clause just repeats the result. One arrow per sentence." },
        { wrong: "既然大家都这么有耐心，就我们再等一会儿吧。", right: "既然大家都这么有耐心，我们就再等一会儿吧。", py: "Jìrán dàjiā dōu zhème yǒu nàixīn, wǒmen jiù zài děng yíhuìr ba.", en: "Since everyone is being so patient, let's wait a little longer.", expl: "就 is an adverb, welded AFTER the subject: 我们**就**再等… Clause-initial 就 is the #1 position error in 既然…就 sentences — the pairing is right, the seat is wrong." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "由于…因此", cn: "**由于**电动车又便宜又方便，**因此**购买的人越来越多。", py: "Yóuyú diàndòngchē yòu piányi yòu fāngbiàn, yīncǐ gòumǎi de rén yuèláiyuè duō.", en: "Because electric scooters are cheap and convenient, more and more people are buying them.", note: "**由于…因此** is the formal pairing — swap in 因为 and 因此 refuses to cooperate. 购买 is the written cousin of 买." },
        { tag: "于是", cn: "我路过公园时看见一只小猫，样子特别可怜，**于是**把它带回了家。", py: "Wǒ lùguò gōngyuán shí kànjiàn yì zhī xiǎomāo, yàngzi tèbié kělián, yúshì bǎ tā dài huí le jiā.", en: "Passing the park I saw a kitten that looked so pitiful, so I took it home.", note: "Story mode: an event, then **于是** + what I did next. It narrates sequence — it could never answer 为什么." },
        { tag: "让", cn: "这次难忘的旅行**让**我们的友谊变得更深了。", py: "Zhè cì nánwàng de lǚxíng ràng wǒmen de yǒuyì biàn de gèng shēn le.", en: "That unforgettable trip deepened our friendship.", note: "**让** packs cause and effect into ONE clause — no 所以 needed. In formal writing, upgrade 让 to 使." },
        { tag: "为了", cn: "**为了**给学生提供更好的阅读环境，学校决定扩大图书馆的规模。", py: "Wèile gěi xuéshēng tígōng gèng hǎo de yuèdú huánjìng, xuéxiào juédìng kuòdà túshūguǎn de guīmó.", en: "To give students a better reading environment, the school decided to expand the library.", note: "**为了** states the goal up front; the main clause then follows directly — never add 所以 after a 为了-phrase." },
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Watch two slots: the connector's position relative to the subject, and 就 after the subject.",
      items: [
        { tiles: ["他", "因为", "感冒了", "没来", "上课"], py: "Tā yīnwèi gǎnmào le méi lái shàngkè.", en: "He didn't come to class because he had a cold.", hint: "Same subject in both halves → 因为 slips in AFTER 他.", alt: [["因为", "他", "感冒了", "没来", "上课"]] },
        { tiles: ["由于", "天气", "不好", "运动会", "改到", "下周了"], py: "Yóuyú tiānqì bù hǎo, yùndònghuì gǎi dào xià zhōu le.", en: "Because of the bad weather, the sports meet was moved to next week.", hint: "Different subjects (天气 / 运动会) → 由于 leads the whole sentence." },
        { tiles: ["既然", "你不舒服", "就", "早点儿", "回家", "吧"], py: "Jìrán nǐ bù shūfu, jiù zǎodiǎnr huí jiā ba.", en: "Since you're not feeling well, go home early.", hint: "既然 + known fact, then 就 + suggestion + 吧." },
        { tiles: ["为了", "通过", "考试", "他", "每天", "都", "复习", "两个小时"], py: "Wèile tōngguò kǎoshì, tā měitiān dōu fùxí liǎng ge xiǎoshí.", en: "In order to pass the exam, he reviews for two hours every day.", hint: "Purpose phrase 为了… takes the very front seat.", alt: [["他", "为了", "通过", "考试", "每天", "都", "复习", "两个小时"]] },
        { tiles: ["他", "没带", "雨伞", "于是", "在商店门口", "等", "雨停"], py: "Tā méi dài yǔsǎn, yúshì zài shāngdiàn ménkǒu děng yǔ tíng.", en: "He hadn't brought an umbrella, and so he waited at the shop entrance for the rain to stop.", hint: "Event one, then 于是 + what he did next." },
        { tiles: ["这个", "消息", "让", "大家", "都", "很", "高兴"], py: "Zhège xiāoxi ràng dàjiā dōu hěn gāoxìng.", en: "This news made everyone very happy.", hint: "Cause 让 person + feeling — the one-clause causative." },
        { tiles: ["既然", "大家", "都", "累了", "我们", "就", "休息", "一会儿", "吧"], py: "Jìrán dàjiā dōu lèi le, wǒmen jiù xiūxi yíhuìr ba.", en: "Since everyone's tired, let's rest for a bit.", hint: "Two subjects: 大家 in the premise, 我们 + 就 in the conclusion.", alt: [["大家", "既然", "都", "累了", "我们", "就", "休息", "一会儿", "吧"]] }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · Purpose vs cause — the 为了/因为 fork</h3>
<p>Ask: is the second half something you're <b>trying to achieve</b> (purpose → <span class="zh">为了</span>) or something that <b>already pushed you</b> (cause → <span class="zh">因为</span>)?</p>
<ul>
<li><span class="zh"><b class="hl">为了</b>健康，他戒烟了。</span> — goal ahead of him. (<span class="zh">戒烟 jièyān</span> = quit smoking, HSK 5, worth knowing)</li>
<li><span class="zh"><b class="hl">因为</b>健康出了问题，他戒烟了。</span> — cause behind him.</li>
</ul>
<h3>2 · 使 / 让 / 令 — the compressed cause</h3>
<p>Result clauses often hide inside causatives: <span class="zh">这次经历<b class="hl">使</b>我明白了很多。</span> Register ladder: <span class="zh">让</span> (spoken) &lt; <span class="zh">使</span> (written) &lt; <span class="zh">令</span> (literary; mostly in <span class="zh">令人+感动/失望/满意</span>). The exam swaps them into cloze blanks: after a formal subject like 这项研究, prefer 使.</p>
<h3>3 · 之所以…是因为 — the reversed spotlight</h3>
<p>Formal writing sometimes states the result first, then spotlights the reason: <span class="zh">他<b class="hl">之所以</b>成功，<b class="hl">是因为</b>他从不放弃。</span> You only need to <b>recognize</b> it at HSK 4 — if you see 之所以, the reason follows 是因为.</p>
<h3>4 · Dropping one half</h3>
<p>Native speech routinely keeps only one connector: <span class="zh">因为堵车，我迟到了</span> ✓ / <span class="zh">堵车，所以我迟到了</span> ✓. What you can't drop is logic: 于是 without a preceding event, or 既然 without a shared premise, sounds broken.</p>
<div class="callout warn"><span class="co-title">⚠️ The 于是/因此 litmus test</span>
Both translate as “so”. Ask: does clause 2 merely happen <b>after and because of</b> clause 1 in a story? → 于是. Is clause 2 a <b>conclusion you could defend in an argument</b>? → 因此. Quick check: if you could restate it as “为什么？——因为…”, then 因此 fits and 于是 might not.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "The distractors are taken straight from the clinic. Aim to miss at most one.",
      items: [
        { q: '<span class="zh">___大家都到了，我们就出发吧。</span>', choices: ['<span class="zh">既然</span>', '<span class="zh">由于</span>', '<span class="zh">于是</span>', '<span class="zh">因此</span>'], a: 0, expl: "Shared, visible premise + 就 + suggestion = 既然. 由于 would state a formal cause and doesn't pair with a 吧-suggestion; 于是/因此 head result clauses." },
        { q: '<span class="zh">昨天晚上停电了，我看不了书，___很早就睡了。</span>', choices: ['<span class="zh">于是</span>', '<span class="zh">既然</span>', '<span class="zh">为了</span>', '<span class="zh">由于</span>'], a: 0, expl: "A chain of events in a little story — 'and so I went to bed early'. Narrative sequence = 于是." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">由于时间关系，今天就谈到这里。</span>', '<span class="zh">因为下雨，因此活动取消了。</span>', '<span class="zh">既然你知道错了，就改吧。</span>', '<span class="zh">他病了，所以没来。</span>'], a: 1, expl: "✗因为…因此 — 因此 only partners with 由于 (or stands alone). Everything else is a legal pairing." },
        { q: '<span class="zh">___能看懂中文小说，他每天都坚持学习两个小时。</span>', choices: ['<span class="zh">为了</span>', '<span class="zh">因为</span>', '<span class="zh">由于</span>', '<span class="zh">既然</span>'], a: 0, expl: "Reading novels is the goal he's working toward, not a cause that already happened → 为了 + purpose, sentence-initial." },
        { q: '<span class="zh">你为什么选择这个专业？——___我对历史感兴趣。</span>', choices: ['<span class="zh">于是</span>', '<span class="zh">因为</span>', '<span class="zh">既然</span>', '<span class="zh">因此</span>'], a: 1, expl: "为什么 can only be answered by 因为. 于是 narrates, 因此 concludes, 既然 presupposes — none of them can follow the question directly." },
        { q: 'Choose the best word: <span class="zh">这次失败___他明白了：光有热情是不够的。</span>', choices: ['<span class="zh">使</span>', '<span class="zh">所以</span>', '<span class="zh">于是</span>', '<span class="zh">为了</span>'], a: 0, expl: "One-clause causative: event + 使 + person + realization. 所以/于是 would need a clause boundary before them." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">既然你来了，就我们开始上课。</span>', '<span class="zh">既然你来了，我们就开始上课吧。</span>', '<span class="zh">既然你来了，所以我们开始上课。</span>', '<span class="zh">你来了既然，我们就开始上课。</span>'], a: 1, expl: "既然 before (or after) its subject at the head of clause 1; 就 AFTER 我们 in clause 2. Clause-initial 就 and 既然…所以 are both illegal." },
        { q: 'Order these chunks: <span class="zh">今天的会议取消了 / 由于 / 经理出差了</span>', choices: ['<span class="zh">由于经理出差了，今天的会议取消了。</span>', '<span class="zh">今天的会议取消了，由于经理出差了。</span>', '<span class="zh">经理由于出差了今天的会议取消了。</span>', '<span class="zh">今天的会议由于取消了，经理出差了。</span>'], a: 0, expl: "由于-clause comes first — it can't trail like 因为. And with different subjects (经理/会议), the conjunction stands before its own subject." },
        { q: '<span class="zh">房价越来越高，___，很多年轻人选择住在郊区。</span>', choices: ['<span class="zh">因此</span>', '<span class="zh">既然</span>', '<span class="zh">为了</span>', '<span class="zh">因为</span>'], a: 0, expl: "Written-style conclusion from a stated fact = 因此, standing alone at the head of the result clause." },
        { q: "Which is the odd one out — the sentence where the connector does NOT give a reason?", choices: ['<span class="zh">他饿了，于是煮了一碗面。</span>', '<span class="zh">因为他饿了，他吃了一碗面。</span>', '<span class="zh">他没吃早饭，因此上午一直没力气。</span>', '<span class="zh">由于他没吃早饭，他很饿。</span>'], a: 0, expl: "于是 tells you what happened NEXT, not WHY — it's sequence, not reason. The other three all mark genuine cause-effect and could answer 为什么." },
        { q: "<span class=\"zh\">___这家店最近降低了价格，因此来购买的人多了不少。</span>", choices: ["<span class=\"zh\">由于</span>", "<span class=\"zh\">因为</span>", "<span class=\"zh\">既然</span>", "<span class=\"zh\">于是</span>"], a: 0, expl: "The second clause opens with 因此, and 因此 partners only with **由于** (or stands alone) — ✗因为…因此 is the planted trap. 既然 would demand 就, and 于是 heads a result clause, never a cause." },
        { q: "<span class=\"zh\">他最近很少外出，___天气实在太热了。</span>", choices: ["<span class=\"zh\">由于</span>", "<span class=\"zh\">因为</span>", "<span class=\"zh\">于是</span>", "<span class=\"zh\">既然</span>"], a: 1, expl: "The reason clause TRAILS after the result — only a **因为**-clause may do that. 由于 insists on coming first, 既然 needs its shared premise up front, and 于是 introduces what happened next, never a reason." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">因果关系 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Tool</th><th>Job & rules</th></tr>
<tr><td>因为…所以</td><td>Neutral cause. 因为-clause may come first OR trail: 我没去，因为病了 ✓</td></tr>
<tr><td>由于…因此/所以</td><td>Formal, written. 由于-clause always FIRST. Also 由于 + noun (由于天气原因)</td></tr>
<tr><td>因此</td><td>Written “therefore”. Partners: 由于 ✓ · alone ✓ · 因为 ✗✗</td></tr>
<tr><td>于是</td><td>Narrative “and so then” — sequence, not reason. Can NEVER answer 为什么</td></tr>
<tr><td>既然…就/那么</td><td>Shared premise → conclusion/suggestion. Never with 所以. ≈ DE “da”, ES “ya que”</td></tr>
<tr><td>为了</td><td>PURPOSE, sentence-initial: 为了健康，他戒烟了。 Never ✗为了…所以</td></tr>
<tr><td>使/让/令</td><td>One-clause cause: 这件事让大家很高兴。 让 spoken &lt; 使 written &lt; 令 literary</td></tr>
<tr><td>Position</td><td>Conjunctions (因为/由于/既然): before subject if subjects differ, after if shared. Adverbs (就/才): ALWAYS after subject. 所以/因此/于是: clause-initial</td></tr>
<tr><td>Litmus test</td><td>Could you answer 为什么 with it? 因为/由于/因此 yes · 于是 no · 为了 = goal, not cause</td></tr>
</table></div>`
    }
  ]
});
