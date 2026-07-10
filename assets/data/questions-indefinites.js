/* HSK 4 Grammar Lab — 疑问词活用 (question words as indefinites & quantifiers) */
registerPage({
  id: "questions-indefinites",
  zh: "**疑问词**活用",
  title: "Question words off duty — every-, any-, some-, whatever",
  subtitle: "Since HSK 1 you've used 谁/什么/哪儿/怎么 to ask questions. HSK 4 reveals their secret second life: with 都/也 they mean “everyone/anything/everywhere”, alone they can mean “someone/something”, and doubled they build “whatever you want” sentences. One word, four jobs.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: a question word is a <span class="zh hl">blank</span> — grammar decides how to fill it',
      short: "Big idea",
      html: `
<p>Think of <span class="zh">谁 / 什么 / 哪儿 / 什么时候 / 怎么 / 哪个</span> not as “question words” but as <b>blanks</b>. What fills the blank depends on the machinery around them:</p>
<ul>
<li><b>Question:</b> <span class="zh">你想吃<b class="hl">什么</b>？</span> — the blank asks to be filled. (HSK 1, old news)</li>
<li><b>ALL fillers:</b> <span class="zh"><b class="hl">什么</b>都想吃。</span> — 都/也 fills the blank with every possible value: “anything/everything”.</li>
<li><b>SOME filler:</b> <span class="zh">想吃点儿<b class="hl">什么</b>。</span> — no question intonation, no 都: an unspecified “something”.</li>
<li><b>Matched blanks:</b> <span class="zh">想吃<b class="hl">什么</b>就吃<b class="hl">什么</b>。</span> — two copies of the blank, same value: “whatever you want”.</li>
</ul>
<div class="pattern">QW + <span class="slot">都/也</span> + V … = every-/any-<small>谁都知道 · 什么都行 · 哪儿都不想去</small></div>
<div class="callout cmp"><span class="co-title">🇬🇧 🇪🇸 🇩🇪 The mapping you already own</span>
English does the same trick with one family: who → any<b>one</b>/every<b>one</b>/some<b>one</b>/who<b>ever</b>. That's exactly 谁 → 谁都 / 谁… / 谁…谁…. Spanish <i>“<b>quienquiera</b>”</i>, <i>“<b>donde sea</b>”</i> and German <i>“<b>egal wer/wo</b>”</i>, <i>“<b>irgendwo</b>”</i> cover the same ground. When you'd say “any-”, “some-” or “egal…”, a Chinese question word is on duty.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Listening loves 什么都没… (did he eat or not?); reading loves 谁都/哪儿都 as quiet “everyone/everywhere”; writing loves arranging 想去哪儿就去哪儿. You'll meet all four jobs on one exam paper.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The universal-quantifier catalog: QW + 都/也",
      short: "QW + 都 catalog",
      intro: "Every question word can pair with 都/也. Positive sentences prefer 都; negative ones happily use 也 or 都 + 不/没.",
      head: ["Pattern", "Meaning", "Example"],
      rows: [
        ['<span class="zh">谁都/也</span>', 'everyone / (neg.) nobody', '<span class="zh"><b class="hl">谁都</b>知道这件事。</span> <span class="py-hint">Shéi dōu zhīdào zhè jiàn shì.</span>'],
        ['<span class="zh">什么都/也</span>', 'everything / nothing', '<span class="zh">他饿了，<b class="hl">什么都</b>想吃。</span> <span class="py-hint">Tā è le, shénme dōu xiǎng chī.</span>'],
        ['<span class="zh">哪儿都/也</span>', 'everywhere / nowhere', '<span class="zh">周末我<b class="hl">哪儿都</b>不想去。</span> <span class="py-hint">Zhōumò wǒ nǎr dōu bù xiǎng qù.</span>'],
        ['<span class="zh">什么时候都</span>', 'any time at all', '<span class="zh">你<b class="hl">什么时候</b>来<b class="hl">都</b>可以。</span> <span class="py-hint">Nǐ shénme shíhou lái dōu kěyǐ.</span>'],
        ['<span class="zh">哪个都</span>', 'any one of them', '<span class="zh">这几个颜色，<b class="hl">哪个都</b>行。</span> <span class="py-hint">Zhè jǐ ge yánsè, nǎge dōu xíng.</span>'],
        ['<span class="zh">怎么 + V + 都</span>', 'no matter how one V-s', '<span class="zh">这个词我<b class="hl">怎么</b>记<b class="hl">都</b>记不住。</span> <span class="py-hint">Zhège cí wǒ zěnme jì dōu jì bu zhù.</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — the four jobs at work",
      short: "Examples",
      intro: "Tap 🔊 to listen. For each sentence, name the job: question, every-/any-, some-, or whatever-pair?",
      items: [
        { tag: "every", cn: "这个消息**谁都**知道了，你不用保密。", py: "Zhège xiāoxi shéi dōu zhīdào le, nǐ búyòng bǎomì.", en: "Everyone knows this news already — no need to keep it secret.", note: "谁都 + positive verb = everyone. 保密 bǎomì = keep a secret." },
        { tag: "nothing", cn: "他今天心情不好，**什么也**没说就回房间了。", py: "Tā jīntiān xīnqíng bù hǎo, shénme yě méi shuō jiù huí fángjiān le.", en: "He was in a bad mood today — he went back to his room without saying anything.", note: "Negative sentences like 也: 什么也没说 = said nothing at all." },
        { tag: "nowhere", cn: "外面下大雨，我**哪儿都**不想去。", py: "Wàimiàn xià dàyǔ, wǒ nǎr dōu bù xiǎng qù.", en: "It's pouring outside — I don't want to go anywhere.", note: "哪儿都不 = nowhere. The QW-phrase stands before 都 + negation." },
        { tag: "anytime", cn: "有问题就给我打电话，**什么时候都**可以。", py: "Yǒu wèntí jiù gěi wǒ dǎ diànhuà, shénme shíhou dōu kěyǐ.", en: "Call me if you have questions — any time is fine.", note: "什么时候都可以 — the polite all-access pass." },
        { tag: "anywhere", cn: "这种手机**哪儿都**买得到，别担心。", py: "Zhè zhǒng shǒujī nǎr dōu mǎi de dào, bié dānxīn.", en: "You can buy this kind of phone anywhere — don't worry.", note: "哪儿都 + potential complement 买得到: available everywhere." },
        { tag: "how-ever", cn: "这道题我**怎么**做**都**不对，你帮我看看吧。", py: "Zhè dào tí wǒ zěnme zuò dōu bú duì, nǐ bāng wǒ kànkan ba.", en: "No matter how I do this problem it comes out wrong — take a look for me?", note: "怎么 + V + 都: every method fails. The verb appears once after 怎么." },
        { tag: "some", cn: "你饿不饿？想不想吃**点儿什么**？", py: "Nǐ è bu è? Xiǎng bu xiǎng chī diǎnr shénme?", en: "Are you hungry? Want to eat a little something?", note: "什么 as 'something' — an offer, not a question about WHAT. 点儿 softens it." },
        { tag: "some", cn: "我**好像**在**哪儿**见过你，咱们认识吗？", py: "Wǒ hǎoxiàng zài nǎr jiàn guo nǐ, zánmen rènshi ma?", en: "I feel like I've seen you somewhere — do we know each other?", note: "哪儿 = 'somewhere'. 好像 signals vagueness → the blank stays unspecified." },
        { tag: "some", cn: "他想说**什么**，可是最后**什么也**没说出来。", py: "Tā xiǎng shuō shénme, kěshì zuìhòu shénme yě méi shuō chūlái.", en: "He wanted to say something, but in the end nothing came out.", note: "Both jobs in one sentence: bare 什么 = something; 什么也没 = nothing." },
        { tag: "whatever", cn: "放假了，你想去**哪儿**就去**哪儿**。", py: "Fàngjià le, nǐ xiǎng qù nǎr jiù qù nǎr.", en: "It's the holidays — go wherever you want.", note: "The matched-blank pattern: same QW twice, same value. Full section below." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: "Negatives: QW + 也/都 + 不/没 — total zero",
      short: "Negation",
      html: `
<p>Flip the quantifier negative and you get English “no-”: nobody, nothing, nowhere, never. The frame is rigid:</p>
<div class="pattern">QW (+ phrase) + <span class="slot">也/都</span> + <span class="slot">不/没</span> + V<small>谁也不认识我 · 什么都没买 · 哪儿也不去</small></div>
<ul>
<li><span class="zh">昨天的会，<b class="hl">谁也没</b>迟到。</span> — nobody was late (past → 没).</li>
<li><span class="zh">商店都关门了，我<b class="hl">什么都没</b>买到。</span> — I couldn't buy anything.</li>
<li><span class="zh">今天我<b class="hl">哪儿也不</b>去，就想在家休息。</span> — I'm going nowhere today (refusal → 不).</li>
</ul>
<h3>Three positioning rules</h3>
<ol>
<li><b>The QW-phrase precedes 都/也</b> — it's the fronted extreme case, exactly like 连: in fact 谁都不知道 = (连)谁都不知道. Same engine as the 连…都 topic!</li>
<li><b>Negation comes after 都/也</b>, never before: ✗<span class="zh">谁不都知道</span>.</li>
<li><b>The subject (if any) leads:</b> <span class="zh">我哪儿都不想去</span>, not ✗<span class="zh">哪儿都我不想去</span>.</li>
</ol>
<div class="callout warn"><span class="co-title">⚠️ 都 or 也 in negatives?</span>
Both are correct; negatives lean toward 也 (谁也不…, 什么也没…) and it sounds a touch more absolute. In the positive, 都 rules (谁都知道). If you must gamble on the exam: 都 with positive, 也 with negative — you'll never be wrong enough to lose the point.</div>
<div class="callout cmp"><span class="co-title">🇪🇸 Double negation feels familiar</span>
Spanish stacks negatives happily: <i>“<b>no</b> vi a <b>nadie</b>”</i>. Chinese QW + 也不 has the same flavour — the question word plus negation together mean “no one”. German speakers: careful, <i>“niemand”</i> is one word, but Chinese needs BOTH the QW and 也/都 and 不/没 — dropping 也/都 is the classic error.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "“Some-” uses — the quiet indefinites",
      short: "Some- uses",
      intro: "No 都, no question tone: the blank stays politely unfilled. Three natural habitats — memorize these, don't invent your own.",
      tabs: [
        {
          label: "Offers: 点儿什么",
          html: `<p>The friendliest one: offering food, drink, help. <span class="zh">V + 点儿 + 什么</span> inside a yes/no question:</p>
<p class="zh" style="font-size:1.1rem">你想喝<b class="hl">点儿什么</b>吗？ — “Would you like something to drink?”</p>
<p>Note the 吗! With 吗 (or 想不想), the sentence asks IF you want something. Without 吗, 你想喝什么？ asks WHAT you want. One little particle flips the job of 什么.</p>`,
          examples: [
            { cn: "大家先坐，我去买**点儿什么**喝的。", py: "Dàjiā xiān zuò, wǒ qù mǎi diǎnr shénme hē de.", en: "Everyone sit down first — I'll go buy something to drink.", note: "Statement, not question: 什么 = an unspecified something." },
            { cn: "你怎么不高兴？发生**什么**事了吗？", py: "Nǐ zěnme bù gāoxìng? Fāshēng shénme shì le ma?", en: "Why are you upset? Did something happen?", note: "什么事 + 吗 = 'something' — the 吗 carries the question so 什么 doesn't have to." }
          ]
        },
        {
          label: "Vague memory: 哪儿 / 谁",
          html: `<p>With <span class="zh">好像 / 记得 / 忘了</span>, question words mark half-remembered details — “somewhere”, “someone or other”:</p>`,
          examples: [
            { cn: "这首歌我**好像**在**哪儿**听过。", py: "Zhè shǒu gē wǒ hǎoxiàng zài nǎr tīng guo.", en: "I feel like I've heard this song somewhere before.", note: "哪儿 = somewhere-I-can't-recall. No question intended, no 吗 needed — it's a statement." },
            { cn: "他刚才说他要找**谁**帮忙，我没听清楚。", py: "Tā gāngcái shuō tā yào zhǎo shéi bāngmáng, wǒ méi tīng qīngchu.", en: "He just said he was going to ask someone for help — I didn't catch who.", note: "谁 = some person the speaker can't identify. Reported, fuzzy information." }
          ]
        },
        {
          label: "Incomplete actions",
          html: `<p>When an intention never lands, the object stays a blank: <span class="zh">想 + V + 什么，可是…</span></p>`,
          examples: [
            { cn: "他张开嘴想说**什么**，可是没说出来。", py: "Tā zhāngkāi zuǐ xiǎng shuō shénme, kěshì méi shuō chūlái.", en: "He opened his mouth as if to say something, but nothing came out.", note: "张开嘴 = open one's mouth (张 zhāng glossed: to open). The 什么 was never specified — that's the point." },
            { cn: "我总觉得今天忘了**什么**，想不起来了。", py: "Wǒ zǒng juéde jīntiān wàng le shénme, xiǎng bu qǐlái le.", en: "I keep feeling I forgot something today — I just can't recall what.", note: "忘了什么 = forgot some-thing. 想不起来 = can't call it to mind." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six questions on jobs one to three. The whatever-pairs get their own workout after this.",
      items: [
        { q: '<span class="zh">这件事很简单，___都能做好。</span>', choices: ['<span class="zh">谁</span>', '<span class="zh">什么</span>', '<span class="zh">怎么</span>', '<span class="zh">哪儿</span>'], a: 0, expl: "The doer is a person → 谁都 'anyone'. 什么都 would need a thing-slot, 哪儿都 a place-slot. Match the blank's type first." },
        { q: '“I didn\'t eat anything this morning.” Which is correct?', choices: ['我早上什么没吃。', '我早上什么都没吃。', '我早上都什么没吃。', '我早上没吃什么都。'], a: 1, expl: "The full frame is QW + 都/也 + 没 + V: 什么都没吃. Dropping 都 (A) is THE classic learner error; C and D scramble the order." },
        { q: '<span class="zh">A：你想吃点儿什么吗？</span> — A is asking:', choices: ["what exactly B wants to eat", "whether B wants to eat something", "why B is hungry", "where to eat"], a: 1, expl: "什么 + 吗 = 'something' inside a yes/no offer. Without 吗 it would ask WHAT. The 吗-test is the fastest way to tell the two jobs apart." },
        { q: '<span class="zh">这个箱子太重了，我___搬___搬不动。</span>', choices: ['<span class="zh">怎么 / 都</span>', '<span class="zh">什么 / 都</span>', '<span class="zh">怎么 / 就</span>', '<span class="zh">哪儿 / 也</span>'], a: 0, expl: "Method-blank: 怎么搬都搬不动 'no matter how I lift it, it won't budge'. The frame is 怎么 + V + 都 + V不C." },
        { q: 'Which sentence means “Nobody told me”?', choices: ['<span class="zh">谁也没告诉我。</span>', '<span class="zh">谁没也告诉我。</span>', '<span class="zh">也谁没告诉我。</span>', '<span class="zh">谁没告诉我也。</span>'], a: 0, expl: "QW first, then 也, then 没, then verb: 谁也没告诉我. The clamp order never changes." },
        { q: '<span class="zh">我好像在哪儿见过这个词。</span> Here 哪儿 means:', choices: ["where? (a question)", "everywhere", "somewhere (vague memory)", "nowhere"], a: 2, expl: "好像 + 过 + no question mark → vague-memory 'somewhere'. No 都 (so not 'everywhere'), no interrogative force (so not a question)." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One bug each. Most patients suffer from a missing 都/也 or a blank filled with the wrong word.",
      items: [
        { wrong: "我什么不想吃。", right: "我什么都不想吃。", py: "Wǒ shénme dōu bù xiǎng chī.", en: "I don't want to eat anything.", expl: "The quantifier reading NEEDS 都/也. Without it, 我什么不想吃 just sounds like a broken question." },
        { wrong: "谁知道都这个消息。", right: "谁都知道这个消息。", py: "Shéi dōu zhīdào zhège xiāoxi.", en: "Everyone knows this news.", expl: "都 attaches directly after the question word and before the verb: 谁都知道. It can't chase the verb." },
        { wrong: "你想去哪儿就去那儿。", right: "你想去哪儿就去哪儿。", py: "Nǐ xiǎng qù nǎr jiù qù nǎr.", en: "Go wherever you want.", expl: "The matched-blank pattern repeats the SAME question word: 哪儿…哪儿. Swapping in 那儿 'there' breaks the mirror — a beloved exam distractor, since they sound nearly identical." },
        { wrong: "哪儿都我不想去。", right: "我哪儿都不想去。", py: "Wǒ nǎr dōu bù xiǎng qù.", en: "I don't want to go anywhere.", expl: "The subject still leads the sentence; the QW-phrase parks between subject and 都: 我 + 哪儿都 + 不想去." },
        { wrong: "这个词我怎么都学不会怎么学。", right: "这个词我怎么学都学不会。", py: "Zhège cí wǒ zěnme xué dōu xué bu huì.", en: "No matter how I study this word, I can't master it.", expl: "Frame: 怎么 + V + 都 + V不C. The first verb follows 怎么, the potential complement follows 都 — one verb per slot." },
        { wrong: "昨天的聚会，谁都没来了。", right: "昨天的聚会，谁都没来。", py: "Zuótiān de jùhuì, shéi dōu méi lái.", en: "Nobody came to yesterday's get-together.", expl: "没 already marks non-occurrence — adding 了 double-marks it. 没…了 only works for 'no longer', which isn't the meaning here." },
        { wrong: "想吃什么就吃了什么吧。", right: "想吃什么就吃什么吧。", py: "Xiǎng chī shénme jiù chī shénme ba.", en: "Eat whatever you feel like.", expl: "The second half mirrors the first exactly — same verb, same bare question word. 了 has no business inside a hypothetical whatever-frame." },
        { wrong: "我的邮件发出去两天了，谁没也回复我。", right: "我的邮件发出去两天了，谁也没回复我。", py: "Wǒ de yóujiàn fā chūqù liǎng tiān le, shéi yě méi huífù wǒ.", en: "I sent my email two days ago and nobody has replied.", expl: "The clamp order is fixed: QW + 也/都 + 不/没 + V. Negation comes AFTER 也/都, never before it — 谁也没回复我 = nobody replied. Same frame as 谁也没迟到." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "every", cn: "小王获奖了，公司里**谁都**想祝贺他。", py: "Xiǎo Wáng huòjiǎng le, gōngsī lǐ shéi dōu xiǎng zhùhè tā.", en: "Xiao Wang won an award — everyone in the company wants to congratulate him.", note: "Same frame as the news sentence, positive polarity: 谁都想 = everyone wants to. Flip it to 谁都不想 and it snaps to nobody. 获奖 huòjiǎng = win a prize, 祝贺 zhùhè = congratulate." },
        { tag: "nothing", cn: "他肚子疼得厉害，医生说他暂时**什么都**不能吃。", py: "Tā dùzi téng de lìhai, yīshēng shuō tā zànshí shénme dōu bù néng chī.", en: "His stomach hurts badly — the doctor says he can't eat anything for now.", note: "什么都 + 不能 = a total ban: not anything at all. 暂时 zànshí = for the time being — total, but temporary." },
        { tag: "anywhere", cn: "现在**哪儿都**能用手机结账，带零钱的人越来越少了。", py: "Xiànzài nǎr dōu néng yòng shǒujī jiézhàng, dài língqián de rén yuè lái yuè shǎo le.", en: "These days you can pay by phone anywhere — fewer and fewer people carry small change.", note: "哪儿都 + 能 = possible everywhere. 结账 jiézhàng = settle the bill, 零钱 língqián = small change." },
        { tag: "whatever", cn: "去机场的大巴和地铁，**哪个**快就坐**哪个**。", py: "Qù jīchǎng de dàbā hé dìtiě, nǎge kuài jiù zuò nǎge.", en: "Coach or subway to the airport — take whichever is faster.", note: "哪个…哪个 matched blanks: whatever fills slot 1 fills slot 2. The predicates may differ (快/坐) — the question word may not." },
        { tag: "some", cn: "刚才**好像**有**谁**在敲门，你去看看吧。", py: "Gāngcái hǎoxiàng yǒu shéi zài qiāo mén, nǐ qù kànkan ba.", en: "I think someone just knocked at the door — go take a look.", note: "Bare 谁 = some unidentified person; 好像 keeps it vague — a statement, not a question. 敲门 qiāo mén = knock at the door." },
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Find the question word, decide its job (every-, no-, some-, whatever), then let the frame assemble.",
      items: [
        { tiles: ["这件事", "谁", "都", "知道"], py: "Zhè jiàn shì shéi dōu zhīdào.", en: "Everyone knows about this.", hint: "Topic + 谁都 + verb.", alt: [["谁", "都", "知道", "这件事"]] },
        { tiles: ["他", "今天", "什么", "都", "不想", "吃"], py: "Tā jīntiān shénme dōu bù xiǎng chī.", en: "He doesn't feel like eating anything today.", hint: "QW + 都 + negation + verb.", alt: [["今天", "他", "什么", "都", "不想", "吃"]] },
        { tiles: ["周末", "我", "哪儿", "也", "不想去"], py: "Zhōumò wǒ nǎr yě bù xiǎng qù.", en: "On the weekend I don't want to go anywhere.", hint: "Negative prefers 也 — subject before the QW-phrase.", alt: [["我", "周末", "哪儿", "也", "不想去"]] },
        { tiles: ["你", "想", "吃", "什么", "就", "吃", "什么"], py: "Nǐ xiǎng chī shénme jiù chī shénme.", en: "Eat whatever you want.", hint: "Matched blanks: same 什么 twice, 就 in the middle." },
        { tiles: ["谁", "想", "去", "谁", "就", "去"], py: "Shéi xiǎng qù shéi jiù qù.", en: "Whoever wants to go, goes.", hint: "The second 谁 is the subject of the second half." },
        { tiles: ["我", "好像", "在", "哪儿", "见过", "你"], py: "Wǒ hǎoxiàng zài nǎr jiàn guo nǐ.", en: "I feel like I've seen you somewhere before.", hint: "好像 + 哪儿 = vague 'somewhere' — no 都 anywhere." },
        { tiles: ["这个", "问题", "我", "怎么", "想", "都", "想不明白"], py: "Zhège wèntí wǒ zěnme xiǎng dōu xiǎng bu míngbai.", en: "No matter how I think about this problem, I can't figure it out.", hint: "怎么 + V + 都 + V不C — verb appears in both slots." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "tabs",
      title: "The whatever-machine: QW … 就 … QW",
      short: "Whatever-pairs",
      intro: "The most elegant pattern in this topic: say the question word twice, and both blanks receive the SAME value. This section is all it needs — and the exam always includes one.",
      tabs: [
        {
          label: "The core pattern",
          html: `<p>Two clauses, same question word in both, usually linked by <span class="zh">就</span>. Whatever fills blank #1 automatically fills blank #2:</p>
<div class="pattern">…QW… + <span class="slot">就</span> + …QW…<small>想吃<b>什么</b>就吃<b>什么</b> — whatever value you pick for slot 1, slot 2 copies it</small></div>
<p>English needs a special word (“whatever, wherever, whoever”); Chinese just reuses the blank. Crucial rule: <b>same word twice, same referent</b> — never 什么…那个, never 哪儿…那儿.</p>`,
          examples: [
            { cn: "菜单在这儿，你想吃**什么**就点**什么**。", py: "Càidān zài zhèr, nǐ xiǎng chī shénme jiù diǎn shénme.", en: "Here's the menu — order whatever you feel like eating.", note: "The verbs may differ (吃/点); the question word may not." },
            { cn: "你想**什么时候**来就**什么时候**来。", py: "Nǐ xiǎng shénme shíhou lái jiù shénme shíhou lái.", en: "Come whenever you like.", note: "Works with every question word, even the long ones." }
          ]
        },
        {
          label: "谁…谁… — whoever",
          html: `<p>With 谁, the pattern picks a person: <span class="zh"><b class="hl">谁</b>想去<b class="hl">谁</b>就去。</span> “Whoever wants to go, goes.” Both 谁 point to the SAME person — this is what makes it different from a question with two people.</p>`,
          examples: [
            { cn: "咱们别客气了，**谁**先到**谁**先吃。", py: "Zánmen bié kèqi le, shéi xiān dào shéi xiān chī.", en: "Let's not stand on ceremony — whoever arrives first eats first.", note: "Rules, games and family logistics run on 谁…谁…" },
            { cn: "**谁**做错了，**谁**就应该道歉。", py: "Shéi zuò cuò le, shéi jiù yīnggāi dàoqiàn.", en: "Whoever made the mistake should apologize.", note: "就 hooks the second clause to the first — same culprit, same apologizer." }
          ]
        },
        {
          label: "怎么…怎么…",
          html: `<p>With 怎么 the copied value is a METHOD: <span class="zh">你想<b class="hl">怎么</b>办就<b class="hl">怎么</b>办。</span> “Handle it however you see fit.” Extremely common when giving someone free rein — or washing your hands of a decision.</p>`,
          examples: [
            { cn: "这是你的房间，你想**怎么**布置就**怎么**布置。", py: "Zhè shì nǐ de fángjiān, nǐ xiǎng zěnme bùzhì jiù zěnme bùzhì.", en: "It's your room — decorate it however you like.", note: "布置 bùzhì = to arrange/decorate." },
            { cn: "老师**怎么**教，我们就**怎么**练。", py: "Lǎoshī zěnme jiāo, wǒmen jiù zěnme liàn.", en: "However the teacher teaches it, that's how we practice.", note: "Subjects can differ across the halves — only the METHOD is copied." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · The 吗-test (your best friend in listening)</h3>
<p><span class="zh">你想喝什么？</span> = WHAT would you like? · <span class="zh">你想喝点儿什么<b class="hl">吗</b>？</span> = would you like SOMETHING? A question word plus 吗 in the same simple clause forces the indefinite reading — the two question engines can't both fire in one clause. One exception: in embedded questions after verbs like 知道 / 记得 / 告诉, the QW keeps its asking job — <span class="zh">你知道他是谁<b class="hl">吗</b>？</span> = “Do you know WHO he is?” (吗 asks about 知道, 谁 still asks “who”).</p>
<h3>2 · 什么 as dismissal</h3>
<p>Spoken Chinese uses 什么 to wave things away: <span class="zh">什么呀！根本不是这样。</span> “Nonsense! It's not like that at all.” Also <span class="zh">谢什么呀</span> “oh please, no need to thank me” — the QW mocks the previous word. You only need to recognize it in listening; don't produce it in the exam essay.</p>
<h3>3 · 哪儿啊 / 哪里哪里 — polite denial</h3>
<p>Same family: <span class="zh">——你汉语说得真好！——<b class="hl">哪里哪里</b>。</span> Literally “where, where?!”, actually “oh, you flatter me”. A fossilized politeness — recognize and smile.</p>
<h3>4 · 不 + QW + 都: partial vs total negation</h3>
<p>Position changes everything: <span class="zh">谁<b class="hl">都不</b>来</span> = NOBODY comes (total); <span class="zh"><b class="hl">不是</b>谁都能来</span> = NOT everyone can come (partial). When 不(是) outranks the quantifier, it only dents it. The exam tests this with 不是什么都… “not just anything…”.</p>
<h3>5 · 也 reaches where 都 sounds heavy</h3>
<p>With single-instance minimums, use 也: <span class="zh">他一句话也没说</span> — same engine as 连…也 from the previous topic. QW + 都 and (连)一 + M + 也 are cousins; the exam happily swaps one for the other between the question and the choices.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Arrangement task with a duplicated question word tile (two 什么, two 哪儿…)? That's ALWAYS the whatever-pattern: build V1 + QW + 就 + V2 + QW. And if you see 都/也 next to a single QW tile, snap them together before anything else.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "A drill across all four jobs. Distractors are the errors from the clinic — see if they still fool you. Aim for at least four out of five correct.",
      items: [
        { q: '<span class="zh">冰箱里___都没有，我们出去吃吧。</span>', choices: ['<span class="zh">什么</span>', '<span class="zh">谁</span>', '<span class="zh">哪儿</span>', '<span class="zh">怎么</span>'], a: 0, expl: "The blank is a THING (food in the fridge) → 什么都没有 'there's nothing at all'. Match the blank type: person/thing/place/method." },
        { q: '<span class="zh">他的电话号码___都不知道，你去问谁？</span>', choices: ['<span class="zh">谁</span>', '<span class="zh">什么</span>', '<span class="zh">哪个</span>', '<span class="zh">怎么</span>'], a: 0, expl: "谁都不知道 = nobody knows it. The second 谁 (去问谁) is a true question word — both jobs in one sentence, classic exam move." },
        { q: '“You can put it anywhere.” Which is correct?', choices: ['<span class="zh">你放哪儿都行。</span>', '<span class="zh">你都放哪儿行。</span>', '<span class="zh">你放都哪儿行。</span>', '<span class="zh">哪儿你放都行。</span>'], a: 0, expl: "放哪儿都行: the QW-phrase (放哪儿) precedes 都, and 行 closes. 都 can never squeeze between verb and its question-word object." },
        { q: '<span class="zh">你想什么时候出发___什么时候出发。</span>', choices: ['<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">都</span>', '<span class="zh">还</span>'], a: 0, expl: "Matched blanks link with 就: whenever you choose to leave, that's when we leave. 才 would add 'not until'; 都 belongs to the quantifier pattern, not the pair pattern." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">谁想参加谁就报名。</span>', '<span class="zh">你想买哪个就买哪个。</span>', '<span class="zh">你想去哪儿就去那儿。</span>', '<span class="zh">想吃什么就点什么。</span>'], a: 2, expl: "The pair must repeat the SAME question word: 去哪儿…去哪儿. Sneaky 那儿 'there' fails the mirror test — even though it sounds almost identical." },
        { q: '<span class="zh">A：你周末想去公园还是商场？ B：___，你决定吧。</span>', choices: ['<span class="zh">哪儿都行</span>', '<span class="zh">哪儿都不行</span>', '<span class="zh">谁都行</span>', '<span class="zh">怎么都去</span>'], a: 0, expl: "'Anywhere works for me' = 哪儿都行 — the all-filler applied to places. B hands the choice back with 你决定吧." },
        { q: '<span class="zh">他刚搬来的时候，这里的人他___。</span>', choices: ['<span class="zh">谁都不认识</span>', '<span class="zh">谁都认识</span>', '<span class="zh">不认识谁都</span>', '<span class="zh">都谁不认识</span>'], a: 0, expl: "Just moved in → knew NOBODY: 谁都不认识. Note the object (这里的人) is topicalized up front, and the QW-quantifier handles the rest." },
        { q: '<span class="zh">这里的冬天冷得很，我怎么穿___觉得冷。</span>', choices: ['<span class="zh">都</span>', '<span class="zh">就</span>', '<span class="zh">才</span>', '<span class="zh">也不</span>'], a: 0, expl: "怎么 + V + 都: no matter how I dress, I still feel cold. 就 would make it a whatever-pair, which needs the QW repeated." },
        { q: '<span class="zh">——你怎么了？——没什么，就是有点儿累。</span> Here 没什么 means:', choices: ["I lost something.", "It's nothing / no big deal.", "I don't know what.", "Nothing is missing."], a: 1, expl: "没什么 is the fossilized 'it's nothing' — 什么 as a dismissive indefinite. Listening loves it as the key to the speaker's real state." },
        { q: 'Which sentence says the speaker CAN\'T sleep, no matter the method?', choices: ['<span class="zh">我怎么都睡不着。</span>', '<span class="zh">我怎么就睡不着？</span>', '<span class="zh">我什么都睡不着。</span>', '<span class="zh">我睡什么都不着。</span>'], a: 0, expl: "怎么…都 + V不C: every method fails → 怎么都睡不着. B is a genuine puzzled question ('why on earth can't I sleep?'); C uses a thing-blank for a method; D is scrambled. 睡不着 shuì bu zháo = can't fall asleep." },
        { q: '<span class="zh">不是谁都能当翻译的。</span> The sentence means:', choices: ["Nobody can be a translator.", "Anyone can be a translator.", "Not everyone can be a translator.", "Translators don't know anyone."], a: 2, expl: "不是 + 谁都能… = partial negation: 'it's not the case that just anyone can'. Total negation would be 谁都不能. Position of 不(是) decides — the exam's favourite fine print." },
        { q: 'Arrange: <span class="zh">就 / 谁 / 谁 / 先来 / 先吃</span>', choices: ['<span class="zh">谁先来谁就先吃。</span>', '<span class="zh">谁就先来谁先吃。</span>', '<span class="zh">先来谁就谁先吃。</span>', '<span class="zh">谁先吃谁就先来。</span>'], a: 0, expl: "Whoever-pattern: 谁 + condition (先来) + 谁 + 就 + result (先吃). D is grammatical but reverses cause and effect — read for logic, not just structure." },
        { q: "“The security check is strict — you can't take any drinks in.” Which is correct?", choices: ["<span class=\"zh\">安检很严格，什么饮料都不能带进去。</span>", "<span class=\"zh\">安检很严格，什么饮料不能带进去。</span>", "<span class=\"zh\">安检很严格，什么都饮料不能带进去。</span>", "<span class=\"zh\">安检很严格，不能带什么饮料都进去。</span>"], a: 0, expl: "什么 + noun makes ONE QW-phrase (什么饮料), and the whole phrase stands before 都: 什么饮料都不能带进去. B drops 都 — and without it the sentence snaps back into a genuine question (“which drinks can't be taken in?”), not the ban we want; C wedges 都 inside the phrase; D parks 都 after the verb, which it never does." },
        { q: "<span class=\"zh\">这个公园很干净，___有垃圾桶。</span>", choices: ["<span class=\"zh\">哪儿都</span>", "<span class=\"zh\">那儿都</span>", "<span class=\"zh\">哪儿就</span>", "<span class=\"zh\">都哪儿</span>"], a: 0, expl: "Place-blank + 都: 哪儿都有垃圾桶 = a bin everywhere you look. 那儿 'there' is a pointer, not a blank — the beloved 哪儿/那儿 sound-alike trap; 就 links whatever-PAIRS, not a single QW; and 都 never precedes the question word." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">疑问词活用 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Job</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Every-/any-</td><td>QW + <b class="hl">都</b> + V</td><td>谁都知道 · 什么时候都可以 · 哪个都行</td></tr>
<tr><td>No-/none</td><td>QW + <b class="hl">也/都</b> + <b class="hl">不/没</b> + V</td><td>谁也不认识 · 什么都没吃 · 哪儿也不去</td></tr>
<tr><td>No matter how</td><td><b class="hl">怎么</b> + V + <b class="hl">都</b> + (V不C)</td><td>怎么记都记不住</td></tr>
<tr><td>Some-</td><td>bare QW (+吗 / 好像 / 点儿)</td><td>吃点儿什么吗？· 好像在哪儿见过</td></tr>
<tr><td>Whatever-pair</td><td>…QW… + <b class="hl">就</b> + …<b class="hl">same QW</b>…</td><td>想吃什么就吃什么 · 谁先来谁先吃</td></tr>
<tr><td>Dismissal (recognize)</td><td>什么呀 · 没什么 · 哪里哪里</td><td>“nonsense” · “it's nothing” · “you flatter me”</td></tr>
<tr><td>吗-test</td><td>QW + 吗 in one simple clause → QW = “some-” (exception: embedded questions after 知道/记得/告诉 keep the QW asking)</td><td>想喝什么吗? = want something? · but 你知道他是谁吗? = do you know WHO he is?</td></tr>
<tr><td>Partial vs total</td><td><b class="hl">不是</b>谁都… = not everyone · 谁<b class="hl">都不</b>… = nobody</td><td>position of 不 decides</td></tr>
<tr><td>☠️ Traps</td><td colspan="2">missing 都/也 (✗什么不想吃) · 哪儿…那儿 in pairs ✗ · 都 after the verb ✗</td></tr>
</table></div>`
    }
  ]
});
