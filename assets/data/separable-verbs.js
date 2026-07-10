/* HSK 4 Grammar Lab — 离合词 (separable verbs) */
registerPage({
  id: "separable-verbs",
  zh: "**离合**词",
  title: "Separable verbs — the verbs that split open",
  subtitle: "Since HSK 1 you've said 见面, 睡觉 and 帮忙 as if they were single verbs. HSK 4 reveals the secret: they're verb + object compounds, and everything — 了, 过, durations, even the person you're angry at — climbs INSIDE. Get this wrong and you produce the #1 foreigner error: ✗见面朋友.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: <span class="zh hl">见面</span> is secretly “see + face”',
      short: "Big idea",
      html: `
<p><span class="zh">离合词</span> (líhécí, “separate-combine words”) look like ordinary two-syllable verbs, but they are really a <b>mini verb + object pair</b>: <span class="zh">见面</span> = see + face, <span class="zh">睡觉</span> = sleep + a-sleep, <span class="zh">帮忙</span> = help + busyness. Since the object slot is <b>already occupied</b>, two consequences follow:</p>
<ul>
<li>Grammar bits (<span class="zh">了/过</span>, durations, counts, targets) don't trail behind the verb — they <b class="hl">wedge into the crack</b>: <span class="zh">见<b class="hl">过两次</b>面</span>.</li>
<li>You can never hang another object on the back: ✗<span class="zh">见面朋友</span>, ✗<span class="zh">结婚她</span> — the seat is taken.</li>
</ul>
<div class="pattern">V<span class="slot">←了/过·duration·次数·的+person·个</span>O<small>The compound opens in the middle; the extras sit between verb half and object half.</small></div>
<div class="callout cmp"><span class="co-title">🇩🇪 German separable verbs — the perfect twin</span>
German <i>anrufen</i> looks like one verb, until you use it: <i>„Ich rufe dich <b>an</b>“</i> — it splits, and the grammar (dich, heute, zweimal) moves into the gap. 离合词 behave exactly like that: <span class="zh">打电话</span> splits into <span class="zh">打<b class="hl">了一个</b>电话</span> the same way <i>anrufen</i> splits around its sentence. If you've survived <i>aufstehen → ich stehe früh auf</i>, you already have the mental slot for <span class="zh">睡觉 → 睡了八个小时觉</span>.</div>
<div class="callout tip"><span class="co-title">💡 How to detect a 离合词</span>
Three quick tests: ① Does the second syllable feel like a NOUN (面 face, 觉 sleep, 忙 busyness, 假 leave, 队 queue)? ② Does the dictionary write it with a dot or slash (jiàn//miàn)? ③ Try saying <span class="zh">V了O</span>: if 见了面 sounds right but 见面了她 sounds broken, it's separable. When in doubt, treat it as separable — that guess is usually safe.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The HSK 4 separable-verb catalog",
      short: "Catalog",
      intro: "The twenty you must recognize on sight. Cover the last column and split each one yourself.",
      head: ["Verb", "Literally", "Means", "Split in action"],
      rows: [
        ['<span class="zh">见面</span> <span class="py-hint">jiànmiàn</span>', 'see + face', 'to meet', '<span class="zh">见<b class="hl">过两次</b>面</span> <span class="py-hint">jiàn guo liǎng cì miàn</span>'],
        ['<span class="zh">帮忙</span> <span class="py-hint">bāngmáng</span>', 'help + busyness', 'to help', '<span class="zh">帮<b class="hl">个</b>忙 · 帮<b class="hl">我的</b>忙</span> <span class="py-hint">bāng ge máng</span>'],
        ['<span class="zh">结婚</span> <span class="py-hint">jiéhūn</span>', 'tie + marriage', 'to marry', '<span class="zh">结<b class="hl">过</b>婚</span> <span class="py-hint">jié guo hūn</span>'],
        ['<span class="zh">请假</span> <span class="py-hint">qǐngjià</span>', 'request + leave', 'to take leave', '<span class="zh">请<b class="hl">了三天</b>假</span> <span class="py-hint">qǐng le sān tiān jià</span>'],
        ['<span class="zh">聊天（儿）</span> <span class="py-hint">liáotiān(r)</span>', 'chat + sky', 'to chat', '<span class="zh">聊<b class="hl">了一会儿</b>天</span> <span class="py-hint">liáo le yíhuìr tiān</span>'],
        ['<span class="zh">睡觉</span> <span class="py-hint">shuìjiào</span>', 'sleep + a-sleep', 'to sleep', '<span class="zh">睡<b class="hl">了八个小时</b>觉</span> <span class="py-hint">shuì le bā ge xiǎoshí jiào</span>'],
        ['<span class="zh">洗澡</span> <span class="py-hint">xǐzǎo</span>', 'wash + bath', 'to bathe', '<span class="zh">洗<b class="hl">个</b>澡</span> <span class="py-hint">xǐ ge zǎo</span>'],
        ['<span class="zh">游泳</span> <span class="py-hint">yóuyǒng</span>', 'swim + a-swim', 'to swim', '<span class="zh">游<b class="hl">了一个小时</b>泳</span> <span class="py-hint">yóu le yí ge xiǎoshí yǒng</span>'],
        ['<span class="zh">生气</span> <span class="py-hint">shēngqì</span>', 'produce + anger', 'to get angry', '<span class="zh">生<b class="hl">他的</b>气</span> <span class="py-hint">shēng tā de qì</span>'],
        ['<span class="zh">毕业</span> <span class="py-hint">bìyè</span>', 'finish + studies', 'to graduate', '<span class="zh">毕<b class="hl">了</b>业</span>（从大学毕业）<span class="py-hint">bì le yè</span>'],
        ['<span class="zh">上课</span> <span class="py-hint">shàngkè</span>', 'attend + class', 'to have class', '<span class="zh">上<b class="hl">了一天</b>课</span> <span class="py-hint">shàng le yì tiān kè</span>'],
        ['<span class="zh">报名</span> <span class="py-hint">bàomíng</span>', 'report + name', 'to sign up', '<span class="zh">报<b class="hl">个</b>名 · 报<b class="hl">了</b>名</span> <span class="py-hint">bào ge míng</span>'],
        ['<span class="zh">排队</span> <span class="py-hint">páiduì</span>', 'line up + queue', 'to queue', '<span class="zh">排<b class="hl">了半个小时</b>队</span> <span class="py-hint">pái le bàn ge xiǎoshí duì</span>'],
        ['<span class="zh">打折</span> <span class="py-hint">dǎzhé</span>', 'strike + discount', 'to give a discount', '<span class="zh">打<b class="hl">八</b>折</span>（20% off!）<span class="py-hint">dǎ bā zhé</span>'],
        ['<span class="zh">加班</span> <span class="py-hint">jiābān</span>', 'add + shift', 'to work overtime', '<span class="zh">加<b class="hl">了三个小时</b>班</span> <span class="py-hint">jiā le sān ge xiǎoshí bān</span>'],
        ['<span class="zh">出差</span> <span class="py-hint">chūchāi</span>', 'go out + errand', 'to go on a business trip', '<span class="zh">出<b class="hl">过两次</b>差</span> <span class="py-hint">chū guo liǎng cì chāi</span>'],
        ['<span class="zh">吵架</span> <span class="py-hint">chǎojià</span>', 'quarrel + fight', 'to argue', '<span class="zh">吵<b class="hl">了一</b>架</span> <span class="py-hint">chǎo le yí jià</span>'],
        ['<span class="zh">散步</span> <span class="py-hint">sànbù</span>', 'scatter + steps', 'to take a walk', '<span class="zh">散<b class="hl">散</b>步 · 散<b class="hl">个</b>步</span> <span class="py-hint">sànsan bù</span>'],
        ['<span class="zh">开玩笑</span> <span class="py-hint">kāi wánxiào</span>', 'open + joke', 'to joke', '<span class="zh">开<b class="hl">个</b>玩笑 · 开<b class="hl">他的</b>玩笑</span> <span class="py-hint">kāi ge wánxiào</span>'],
        ['<span class="zh">发脾气</span> <span class="py-hint">fā píqi</span>', 'emit + temper', 'to lose one\'s temper', '<span class="zh">发<b class="hl">了一顿</b>脾气</span> <span class="py-hint">fā le yí dùn píqi</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "tabs",
      title: "What climbs inside the crack",
      short: "Inside the crack",
      intro: "Six kinds of stuffing. In every case the formula is the same: verb half + stuffing + object half.",
      tabs: [
        {
          label: "了 / 过",
          html: `<p>Aspect markers attach to the <b>verb half</b>, not to the whole compound: <span class="zh">见<b class="hl">过</b>面、结<b class="hl">过</b>婚、洗<b class="hl">了</b>澡</span>. A sentence-final 了 (new situation) may still appear after everything: <span class="zh">他去睡觉<b class="hl">了</b></span> — that one is fine, because it belongs to the sentence, not the verb.</p>`,
          examples: [
            { cn: "我们**见过面**，可是我忘了他的名字。", py: "Wǒmen jiàn guo miàn, kěshì wǒ wàng le tā de míngzi.", en: "We've met before, but I forgot his name.", note: "过 goes between 见 and 面 — never ✗见面过." },
            { cn: "他**结过**一次**婚**。", py: "Tā jié guo yí cì hūn.", en: "He has been married once before.", note: "过 + count both inside. Gossip-grade grammar." },
            { cn: "我**洗了澡**就睡了。", py: "Wǒ xǐ le zǎo jiù shuì le.", en: "I showered and went straight to bed.", note: "洗了澡 — verb-了 inside; the final 了 belongs to 睡." }
          ]
        },
        {
          label: "Duration",
          html: `<p>How long you did it goes inside, usually with an optional <span class="zh">的</span>: <span class="zh">睡了八个小时<b class="hl">（的）</b>觉</span>. Compare the duration-complements topic: same rule as 学了三年（的）汉语 — the time phrase sits before the object.</p>`,
          examples: [
            { cn: "我昨天**游了一个小时泳**。", py: "Wǒ zuótiān yóu le yí ge xiǎoshí yǒng.", en: "I swam for an hour yesterday.", note: "游 + 了 + duration + 泳. Saying ✗游泳了一个小时 is THE classic slip." },
            { cn: "她向公司**请了三天假**。", py: "Tā xiàng gōngsī qǐng le sān tiān jià.", en: "She took three days off from the company.", note: "三天 wedges between 请 and 假." },
            { cn: "昨晚我只**睡了五个小时觉**。", py: "Zuówǎn wǒ zhǐ shuì le wǔ ge xiǎoshí jiào.", en: "I only slept five hours last night." }
          ]
        },
        {
          label: "Frequency",
          html: `<p>Counts (<span class="zh">次、遍、顿、架</span>) also live inside: <span class="zh">见过<b class="hl">两次</b>面、吵过<b class="hl">一次</b>架</span>. Same slot as duration — right after 了/过.</p>`,
          examples: [
            { cn: "我跟他只**见过两次面**，不太熟悉。", py: "Wǒ gēn tā zhǐ jiàn guo liǎng cì miàn, bú tài shúxī.", en: "I've only met him twice; we're not close.", note: "两次 inside; the partner goes up front with 跟." },
            { cn: "他们结婚以后只**吵过一次架**。", py: "Tāmen jiéhūn yǐhòu zhǐ chǎo guo yí cì jià.", en: "They've only had one fight since getting married." }
          ]
        },
        {
          label: "的 + person",
          html: `<p>For 生气, 帮忙 and 开玩笑, the person affected slips in with <span class="zh">的</span>: <span class="zh">生<b class="hl">我的</b>气</span> “be angry at me”, <span class="zh">帮<b class="hl">你的</b>忙</span>, <span class="zh">开<b class="hl">他的</b>玩笑</span>. For a favour, natives usually prefer the even lighter <span class="zh">帮我<b class="hl">一个</b>忙</span> / <span class="zh">帮我<b class="hl">个</b>忙</span>.</p>`,
          examples: [
            { cn: "别**生我的气**了，我不是故意的。", py: "Bié shēng wǒ de qì le, wǒ bú shì gùyì de.", en: "Stop being mad at me — I didn't do it on purpose.", note: "The target of the anger is INSIDE: 生+我的+气. ✗生气我 doesn't exist." },
            { cn: "你能**帮我一个忙**吗？", py: "Nǐ néng bāng wǒ yí ge máng ma?", en: "Could you do me a favour?", note: "帮我一个忙 — person + measure phrase both inside. More natural than 帮我的忙 for requests." },
            { cn: "同学们都喜欢**开他的玩笑**。", py: "Tóngxuémen dōu xǐhuan kāi tā de wánxiào.", en: "The classmates all like teasing him." }
          ]
        },
        {
          label: "个 & friends",
          html: `<p>A tiny <span class="zh">个</span> (sometimes with an adjective) softens the action: <span class="zh">帮<b class="hl">个</b>忙、开<b class="hl">个</b>玩笑、洗<b class="hl">个</b>澡、睡<b class="hl">个好</b>觉</span> — “do a quick X / have a nice X”. Pure spoken-Chinese charm, and HSK 4 listening loves it.</p>`,
          examples: [
            { cn: "我先去**洗个澡**，你们等我一下。", py: "Wǒ xiān qù xǐ ge zǎo, nǐmen děng wǒ yíxià.", en: "Let me grab a quick shower — wait for me.", note: "洗个澡 = casual 'take a shower'." },
            { cn: "祝你**睡个好觉**！", py: "Zhù nǐ shuì ge hǎo jiào!", en: "Sleep well!", note: "Even an adjective (好) fits inside: sleep + a good sleep." }
          ]
        },
        {
          label: "Reduplication",
          html: `<p>Normal verbs double as V一V (<span class="zh">看一看</span>). Separable verbs double <b>only the verb half</b>: V<b class="hl">V</b>O — <span class="zh">聊<b class="hl">聊</b>天、散<b class="hl">散</b>步、见<b class="hl">见</b>面</span>. ✗聊天聊天 is the give-away error of someone who never learned the V+O secret.</p>`,
          examples: [
            { cn: "吃完饭我们去公园**散散步**吧。", py: "Chī wán fàn wǒmen qù gōngyuán sànsan bù ba.", en: "Let's take a little walk in the park after dinner.", note: "散散步, never ✗散步散步." },
            { cn: "有空来我家**聊聊天**。", py: "Yǒu kòng lái wǒ jiā liáoliao tiān.", en: "Come over for a chat when you're free." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "examples",
      title: "Model sentences — separable verbs at work",
      short: "Examples",
      intro: "Tap 🔊 to listen. In each one, find the crack: what got wedged in, or which preposition rescued the extra person?",
      items: [
        { tag: "个", cn: "我们好久没见了，这个周末**见个面**吧！", py: "Wǒmen hǎojiǔ méi jiàn le, zhège zhōumò jiàn ge miàn ba!", en: "We haven't seen each other for ages — let's meet up this weekend!", note: "见个面 = casual 'meet up'. The 个 softens it." },
        { tag: "跟", cn: "他去年**跟**一个中学同学**结婚**了。", py: "Tā qùnián gēn yí ge zhōngxué tóngxué jiéhūn le.", en: "Last year he married a middle-school classmate.", note: "The partner arrives via 跟, BEFORE the verb. ✗结婚了一个同学 is impossible." },
        { tag: "duration", cn: "我昨天**游了一个小时泳**，今天胳膊疼得抬不起来。", py: "Wǒ zuótiān yóu le yí ge xiǎoshí yǒng, jīntiān gēbo téng de tái bu qǐlái.", en: "I swam for an hour yesterday — today my arms are too sore to lift.", note: "Duration inside 游…泳; bonus 得-complement at the end." },
        { tag: "向", cn: "她**向**经理**请了两天假**，回老家看父母。", py: "Tā xiàng jīnglǐ qǐng le liǎng tiān jià, huí lǎojiā kàn fùmǔ.", en: "She asked the manager for two days off to visit her parents back home.", note: "Person you ask = 向/跟 + person + 请假; the days go inside." },
        { tag: "的+person", cn: "你还在**生我的气**吗？", py: "Nǐ hái zài shēng wǒ de qì ma?", en: "Are you still mad at me?", note: "生…的气 — the person is possessive-marked inside the compound." },
        { tag: "个", cn: "这个箱子太重了，你能**帮我个忙**吗？", py: "Zhège xiāngzi tài zhòng le, nǐ néng bāng wǒ ge máng ma?", en: "This suitcase is too heavy — can you give me a hand?", note: "帮 + 我 + 个 + 忙: person AND measure word inside the crack." },
        { tag: "frequency", cn: "我**跟**他只**见过两次面**，不算朋友。", py: "Wǒ gēn tā zhǐ jiàn guo liǎng cì miàn, bú suàn péngyou.", en: "I've only met him twice — I wouldn't call us friends.", note: "跟 rescues the partner; 过两次 stuffs the crack. Full machinery in one sentence." },
        { tag: "VVO", cn: "吃完晚饭，我们去湖边**散散步**吧。", py: "Chī wán wǎnfàn, wǒmen qù hú biān sànsan bù ba.", en: "After dinner, let's stroll by the lake.", note: "Reduplication = double the verb half only." },
        { tag: "打折", cn: "这家店今天**打八折**，我们进去看看吧。", py: "Zhè jiā diàn jīntiān dǎ bā zhé, wǒmen jìnqù kànkan ba.", en: "This shop has 20% off today — let's take a look.", note: "Even the discount number goes inside! 打八折 = pay 80%." },
        { tag: "frequency", cn: "他这个月**出了两次差**，累坏了。", py: "Tā zhège yuè chū le liǎng cì chāi, lèi huài le.", en: "He's been on two business trips this month — completely worn out.", note: "出差 splits around 了两次 like any other 离合词." },
        { tag: "个+adj", cn: "我昨晚**做了个奇怪的梦**，梦见一只老虎在超市排队。", py: "Wǒ zuówǎn zuò le ge qíguài de mèng, mèngjiàn yì zhī lǎohǔ zài chāoshì páiduì.", en: "I had a weird dream last night — I dreamt a tiger was queuing at the supermarket.", note: "做梦 is secretly do + a-dream: 了, 个 AND the adjective all wedge inside — 做**了个奇怪的**梦, same slot as 睡个好觉." },
        { tag: "duration", cn: "假日的时候想吃这家的小吃，至少得**排一个小时队**。", py: "Jiàrì de shíhou xiǎng chī zhè jiā de xiǎochī, zhìshǎo děi pái yí ge xiǎoshí duì.", en: "On holidays, if you want this place's snacks, you have to queue at least an hour.", note: "Even without 了, a bare duration still goes inside: 排 + **一个小时** + 队. ✗排队一个小时 leaves it stranded outside." },
        { tag: "着", cn: "我正**洗着澡**呢，突然有人敲门，你说烦不烦！", py: "Wǒ zhèng xǐ zhe zǎo ne, tūrán yǒu rén qiāo mén, nǐ shuō fán bu fán!", en: "I was right in the middle of a shower when someone knocked on the door — how annoying is that!", note: "着 obeys the same rule as 了/过: it sticks to the verb half — 洗**着**澡, never ✗洗澡着." },
        { tag: "一+measure", cn: "为了最后一块月饼，两个孩子**吵了一架**，大人看了都觉得好笑。", py: "Wèile zuìhòu yí kuài yuèbǐng, liǎng ge háizi chǎo le yí jià, dàren kàn le dōu juéde hǎoxiào.", en: "The two kids had a fight over the last mooncake — the grown-ups couldn't help finding it funny.", note: "吵架 counts its fights with 架, and the measure sits inside the crack: 吵 + 了 + **一架**." },
        { tag: "frequency", cn: "毕业之后大家都很忙，这五年我们只**见过一次面**，可是友谊一点儿都没变。", py: "Bìyè zhīhòu dàjiā dōu hěn máng, zhè wǔ nián wǒmen zhǐ jiàn guo yí cì miàn, kěshì yǒuyì yìdiǎnr dōu méi biàn.", en: "Everyone's been busy since graduation — we've only met once in five years, but our friendship hasn't changed a bit.", note: "过 + count both wedge in: 见**过一次**面. And 毕业 up front is another 离合词, traveling intact here." },
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: 'What separable verbs <span class="zh hl">refuse</span> to do',
      short: "Forbidden moves",
      html: `
<p>Because the object seat is taken, three moves are permanently off the table:</p>
<h3>1 · No direct object — ever</h3>
<p class="zh" style="font-size:1.15rem">✗ 他想<b class="hl">结婚她</b>。 → ✓ 他想<b class="hl">跟她结婚</b>。<br>✗ 我明天<b class="hl">见面朋友</b>。 → ✓ 我明天<b class="hl">跟朋友见面</b>。</p>
<p>English lets you “meet <i>someone</i>” and “marry <i>someone</i>” — Chinese physically has no slot for that noun. The extra person must be introduced <b>before the verb</b> by a preposition (next section) or wedged inside with 的 (生我的气).</p>
<h3>2 · No 把, no 被</h3>
<p>离合词 are grammatically <b>intransitive</b> — there is no free object for 把 to grab or 被 to promote: ✗<span class="zh">把觉睡了</span>, ✗<span class="zh">他被生气了</span>. In standard (exam) grammar, a 离合词 after 把/被 is wrong. You will hear colloquial exceptions in real life (把澡洗了、把婚结了) — but never pick them on the HSK.</p>
<h3>3 · Nothing attaches to the whole compound</h3>
<p>了/过/counts never follow the object half: ✗<span class="zh">见面<b class="hl">过</b></span>, ✗<span class="zh">游泳<b class="hl">了一个小时</b></span>. Suffixes attach to the <b>verb half</b>: <span class="zh">见<b class="hl">过</b>面、游<b class="hl">了</b>一个小时泳</span>.</p>
<div class="callout warn"><span class="co-title">⚠️ The English trap in one line</span>
Every time your brain proposes <i>verb + person</i> (“meet her”, “marry him”, “help them out with…”), pause and ask: is this verb secretly V+O? If yes → person goes BEFORE the verb (跟/向/给) or inside with 的.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "table",
      title: "The preposition rescue — verb → partner-word map",
      short: "Rescue map",
      intro: "The person a separable verb 'points at' enters through the front door. Memorize the verb→preposition pairs — HSK 4 tests them directly.",
      head: ["Separable verb", "Rescue pattern", "Example"],
      rows: [
        ['<span class="zh">见面</span>', '<span class="zh"><b class="hl">跟/和</b>…见面</span>', '<span class="zh">我明天跟客户见面。</span> <span class="py-hint">Wǒ míngtiān gēn kèhù jiànmiàn.</span>'],
        ['<span class="zh">结婚</span>', '<span class="zh"><b class="hl">跟/和</b>…结婚</span>', '<span class="zh">他想跟她结婚。</span> <span class="py-hint">Tā xiǎng gēn tā jiéhūn.</span>'],
        ['<span class="zh">吵架</span>', '<span class="zh"><b class="hl">跟/和</b>…吵架</span>', '<span class="zh">别跟弟弟吵架！</span> <span class="py-hint">Bié gēn dìdi chǎojià!</span>'],
        ['<span class="zh">聊天</span>', '<span class="zh"><b class="hl">跟/和</b>…聊天</span>', '<span class="zh">我喜欢跟出租车司机聊天。</span> <span class="py-hint">Wǒ xǐhuan gēn chūzūchē sījī liáotiān.</span>'],
        ['<span class="zh">请假</span>', '<span class="zh"><b class="hl">向/跟</b>…请假</span>', '<span class="zh">我得向老师请假。</span> <span class="py-hint">Wǒ děi xiàng lǎoshī qǐngjià.</span>'],
        ['<span class="zh">道歉</span>', '<span class="zh"><b class="hl">向/跟</b>…道歉</span>', '<span class="zh">你应该向她道歉。</span> <span class="py-hint">Nǐ yīnggāi xiàng tā dàoqiàn.</span>'],
        ['<span class="zh">帮忙</span>', '<span class="zh">帮 + person +（个/一个）忙</span>', '<span class="zh">谢谢你帮了我这么大的忙。</span> <span class="py-hint">Xièxie nǐ bāng le wǒ zhème dà de máng.</span>'],
        ['<span class="zh">生气</span>', '<span class="zh">生 + person + 的气</span>', '<span class="zh">她还在生男朋友的气。</span> <span class="py-hint">Tā hái zài shēng nánpéngyou de qì.</span>'],
        ['<span class="zh">开玩笑</span>', '<span class="zh"><b class="hl">跟</b>…开玩笑 / 开…的玩笑</span>', '<span class="zh">我是跟你开玩笑的，别当真。</span> <span class="py-hint">Wǒ shì gēn nǐ kāi wánxiào de, bié dàngzhēn.</span>'],
        ['<span class="zh">毕业</span>', '<span class="zh"><b class="hl">从</b>…毕业</span>', '<span class="zh">她去年从北京大学毕业了。</span> <span class="py-hint">Tā qùnián cóng Běijīng Dàxué bìyè le.</span>'],
        ['<span class="zh">打电话</span>', '<span class="zh"><b class="hl">给</b>…打电话</span>', '<span class="zh">到了以后请给我打个电话。</span> <span class="py-hint">Dào le yǐhòu qǐng gěi wǒ dǎ ge diànhuà.</span>']
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — has the crack opened?",
      short: "Checkpoint",
      intro: "Six questions on the core mechanics. All distractors are real learner productions.",
      items: [
        { q: '“I want to meet her.” Which is correct?', choices: ['<span class="zh">我想见面她。</span>', '<span class="zh">我想跟她见面。</span>', '<span class="zh">我想见面跟她。</span>', '<span class="zh">我想她见面。</span>'], a: 1, expl: "见面 already contains its object (面). The person enters BEFORE the verb with 跟: 跟她见面." },
        { q: '“He has been married before.”', choices: ['<span class="zh">他结婚过。</span>', '<span class="zh">他结过婚。</span>', '<span class="zh">他过结婚。</span>', '<span class="zh">他结婚了过。</span>'], a: 1, expl: "过 attaches to the verb HALF: 结过婚. After the full compound (结婚过) it's ungrammatical." },
        { q: '“I swam for an hour.”', choices: ['<span class="zh">我游泳了一个小时。</span>', '<span class="zh">我游了一个小时泳。</span>', '<span class="zh">我一个小时游泳了。</span>', '<span class="zh">我游泳一个小时了。</span>'], a: 1, expl: "Duration wedges inside: 游 + 了 + 一个小时 + 泳. 我游泳了一个小时 is the classic English-order slip." },
        { q: '“Don\'t be mad at me!”', choices: ['<span class="zh">别生气我！</span>', '<span class="zh">别我生气！</span>', '<span class="zh">别生我的气！</span>', '<span class="zh">别生气我的！</span>'], a: 2, expl: "The target of 生气 slips inside with 的: 生+我的+气. ✗生气我 hangs an object where no seat exists." },
        { q: 'Which of these is NOT separable?', choices: ['<span class="zh">帮忙</span>', '<span class="zh">帮助</span>', '<span class="zh">见面</span>', '<span class="zh">请假</span>'], a: 1, expl: "帮助 is a regular transitive verb — 帮助我 ✓. Its twin 帮忙 is V+O, so ✗帮忙我 → 帮我的忙/帮我个忙. Knowing which twin you're holding is the whole game." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">我们见了个面。</span>', '<span class="zh">他把婚结了。</span>', '<span class="zh">她请了半天假。</span>', '<span class="zh">我们聊了一会儿天。</span>'], a: 1, expl: "In exam grammar 离合词 are intransitive — 把 has nothing to grab, so ✗把婚结了 fails (colloquial speech allows it, but the HSK doesn't). The others all stuff the crack correctly." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — the ✗见面朋友 ward",
      short: "Error clinic",
      intro: "Eight patients, one disease each — usually an object stuck to the back, or stuffing left outside the crack.",
      items: [
        { wrong: "昨天我见面了我的女朋友。", right: "昨天我跟我的女朋友见了面。", py: "Zuótiān wǒ gēn wǒ de nǚpéngyou jiàn le miàn.", en: "Yesterday I met up with my girlfriend.", expl: "见面 can't take an object — the person moves up front with 跟, and 了 slips inside: 见了面." },
        { wrong: "他结婚了一个漂亮的医生。", right: "他跟一个漂亮的医生结婚了。", py: "Tā gēn yí ge piàoliang de yīshēng jiéhūn le.", en: "He married a beautiful doctor.", expl: "婚 already fills the object seat. The spouse arrives via 跟…结婚 — never behind the verb." },
        { wrong: "我们聊天了一个多小时。", right: "我们聊了一个多小时天。", py: "Wǒmen liáo le yí ge duō xiǎoshí tiān.", en: "We chatted for over an hour.", expl: "Duration goes INSIDE: 聊 + 了 + 一个多小时 + 天. Attaching 了+duration to the whole compound is the standard slip." },
        { wrong: "她生气我了。", right: "她生我的气了。", py: "Tā shēng wǒ de qì le.", en: "She got angry at me.", expl: "The person you're angry at is marked with 的 inside the compound: 生+我的+气." },
        { wrong: "我想请假三天。", right: "我想请三天假。", py: "Wǒ xiǎng qǐng sān tiān jià.", en: "I'd like to take three days off.", expl: "三天 belongs between 请 and 假 — the leave-duration is stuffing, not a trailer." },
        { wrong: "昨晚我只睡觉了五个小时。", right: "昨晚我只睡了五个小时觉。", py: "Zuówǎn wǒ zhǐ shuì le wǔ ge xiǎoshí jiào.", en: "I only slept five hours last night.", expl: "睡觉 splits: 睡 + 了 + duration + 觉. The compound never stays glued when a duration arrives." },
        { wrong: "老师帮忙了我很多。", right: "老师帮了我很多忙。", py: "Lǎoshī bāng le wǒ hěn duō máng.", en: "The teacher helped me a lot.", expl: "帮忙 opens up: 帮 + 了 + 我 + 很多 + 忙. Person and amount both live inside the crack." },
        { wrong: "我们见过面两次。", right: "我们见过两次面。", py: "Wǒmen jiàn guo liǎng cì miàn.", en: "We've met twice.", expl: "The count 两次 must sit before the object half 面, not after it. 见过两次面 — stuffing stays inside." },
        { wrong: "经理没有耐心，昨天又对大家发脾气了一顿。", right: "经理没有耐心，昨天又对大家发了一顿脾气。", py: "Jīnglǐ méiyǒu nàixīn, zuótiān yòu duì dàjiā fā le yí dùn píqi.", en: "The manager has no patience — yesterday he blew up at everyone again.", expl: "发脾气 is V+O: 了 and the burst-measure 一顿 must wedge between 发 and 脾气 — 发了一顿脾气. Hanging 了一顿 behind the full compound glues the crack shut. (对大家 up front is already correct.)" },
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — split them yourself",
      short: "Builder",
      intro: "Find the separable verb, decide what goes inside and what goes up front — then build.",
      items: [
        { tiles: ["我", "跟他", "见过", "两次", "面"], py: "Wǒ gēn tā jiàn guo liǎng cì miàn.", en: "I've met him twice.", hint: "Partner up front with 跟, count inside the crack." },
        { tiles: ["请", "你", "帮", "我", "一个", "忙"], py: "Qǐng nǐ bāng wǒ yí ge máng.", en: "Please do me a favour.", hint: "Person + measure phrase both wedge between 帮 and 忙." },
        { tiles: ["她", "向老师", "请了", "两天", "假"], py: "Tā xiàng lǎoshī qǐng le liǎng tiān jià.", en: "She asked the teacher for two days off.", hint: "向 + person before the verb; days inside." },
        { tiles: ["昨晚", "我", "只", "睡了", "五个小时", "觉"], py: "Zuówǎn wǒ zhǐ shuì le wǔ ge xiǎoshí jiào.", en: "I only slept five hours last night.", hint: "睡 and 觉 frame the duration.", alt: [["我", "昨晚", "只", "睡了", "五个小时", "觉"]] },
        { tiles: ["别", "生", "我的", "气", "了"], py: "Bié shēng wǒ de qì le.", en: "Stop being angry at me.", hint: "的 + person inside; 别…了 wraps the whole thing." },
        { tiles: ["吃完饭", "我们", "去", "散散步", "吧"], py: "Chī wán fàn wǒmen qù sànsan bù ba.", en: "Let's take a little walk after eating.", hint: "Reduplicated verb half: 散散 + 步.", alt: [["我们", "吃完饭", "去", "散散步", "吧"]] },
        { tiles: ["他", "跟", "女朋友", "吵了", "一架"], py: "Tā gēn nǚpéngyou chǎo le yí jià.", en: "He had a fight with his girlfriend.", hint: "跟 + partner up front; 一架 (one round) inside." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 打折 hides a NUMBER in the crack</h3>
<p><span class="zh">打<b class="hl">八</b>折</span> = you pay 80% → <b>20% off</b>. <span class="zh">打<b class="hl">五</b>折</span> = half price. The discount digit is inside the compound, and the math runs backwards for English speakers — a double trap the Listening section adores.</p>
<h3>2 · 睡懒觉 — an adjective moves in</h3>
<p><span class="zh">睡<b class="hl">懒</b>觉</span> “sleep in” (lit. sleep a lazy sleep), <span class="zh">睡<b class="hl">个好</b>觉</span> “sleep well”, <span class="zh">帮<b class="hl">个大</b>忙</span> “do a big favour” — descriptions of the object half settle inside like any other stuffing.</p>
<h3>3 · Look-alikes that do NOT split</h3>
<p><span class="zh">帮助、参加、访问、通知、学习、结束</span> are ordinary transitive verbs — they WANT a direct object: <span class="zh">帮助<b class="hl">我</b>、参加<b class="hl">会议</b></span>. The killer pair: <span class="zh">帮忙</span> (splits, no object) vs <span class="zh">帮助</span> (never splits, takes object). If you learn only one contrast from this page, learn that one.</p>
<h3>4 · 毕业 takes 从, never an object</h3>
<p>✗<span class="zh">毕业大学</span> → ✓<span class="zh"><b class="hl">从</b>大学毕业</span> or <span class="zh">大学毕业</span> as a set phrase: <span class="zh">我是2020年大学毕业的。</span></p>
<h3>5 · 报名 + activity = two verbs, not verb + object</h3>
<p>“Sign up for the marathon” is <span class="zh">报名<b class="hl">参加</b>马拉松</span> — 报名 stays intact and a second verb carries the activity. Or split it plain: <span class="zh">我报了名</span>.</p>
<h3>6 · 一 + measure inside = one intense burst</h3>
<p><span class="zh">发了<b class="hl">一顿</b>脾气</span> “threw a fit”, <span class="zh">吵了<b class="hl">一架</b></span> “had a blow-up” — the measure words 顿 and 架 turn emotion into a countable event.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the ordering task, a lone tile like 面/觉/澡/假/泳 is a flashing sign: it's the object half of a 离合词. Find its verb half, then slot 了/过/duration/次数 between them — the sentence solves itself.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Eleven questions, exam difficulty. Every distractor is a sentence some learner has actually said.",
      items: [
        { q: '<span class="zh">这双鞋原来五百，现在___，只要四百。</span>', choices: ['<span class="zh">打二折</span>', '<span class="zh">打八折</span>', '<span class="zh">打折八</span>', '<span class="zh">八打折</span>'], a: 1, expl: "400/500 = you pay 80% → 打八折. The digit names what you PAY, not what you save — and it goes inside the compound." },
        { q: '“She graduated from Peking University.”', choices: ['<span class="zh">她毕业了北京大学。</span>', '<span class="zh">她从北京大学毕业了。</span>', '<span class="zh">她北京大学被毕业了。</span>', '<span class="zh">她毕业从北京大学了。</span>'], a: 1, expl: "毕业 is V+O ('finish studies') — no object slot. The school enters with 从…毕业." },
        { q: '<span class="zh">周末我想___，十点才起床。</span>', choices: ['<span class="zh">睡懒觉</span>', '<span class="zh">睡觉懒</span>', '<span class="zh">懒睡觉</span>', '<span class="zh">睡觉得懒</span>'], a: 0, expl: "The adjective 懒 moves inside: 睡懒觉 'sleep a lazy sleep' = sleep in." },
        { q: '<span class="zh">经理这周去上海___了。</span>', choices: ['<span class="zh">出差</span>', '<span class="zh">出差上海</span>', '<span class="zh">差出</span>', '<span class="zh">出上海差</span>'], a: 0, expl: "The destination goes before the verb (去上海出差); 出差 itself stays intact here. ✗出差上海 hangs an object on a full compound." },
        { q: '“He worked three hours of overtime yesterday.”', choices: ['<span class="zh">他昨天加班了三个小时。</span>', '<span class="zh">他昨天加了三个小时班。</span>', '<span class="zh">他昨天三个小时加班。</span>', '<span class="zh">他昨天加班三个小时了。</span>'], a: 1, expl: "Duration inside: 加 + 了 + 三个小时 + 班. Same skeleton as 游了一个小时泳." },
        { q: '<span class="zh">别哭了，我只是___。</span>', choices: ['<span class="zh">跟你开个玩笑</span>', '<span class="zh">开玩笑你</span>', '<span class="zh">开你玩笑个</span>', '<span class="zh">对你开玩笑个</span>'], a: 0, expl: "跟…开(个)玩笑 — partner up front, 个 inside. The object slot after 玩笑 stays empty forever." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">我去排个队，你去买饮料。</span>', '<span class="zh">我们排了半个小时队。</span>', '<span class="zh">我们排队了半个小时。</span>', '<span class="zh">前面排队的人太多了。</span>'], a: 2, expl: "Duration must go inside: 排了半个小时队. ✗排队了半个小时 glues the compound shut and dumps the duration behind — the classic error." },
        { q: '<span class="zh">我想___这次汉语比赛。</span>', choices: ['<span class="zh">报名参加</span>', '<span class="zh">报名</span>', '<span class="zh">参加报名</span>', '<span class="zh">报参加名</span>'], a: 0, expl: "报名 can't take the activity as its object — chain a second verb: 报名参加比赛 'sign up to take part in the competition'." },
        { q: '“Dad lost his temper at me.”', choices: ['<span class="zh">爸爸对我发了一顿脾气。</span>', '<span class="zh">爸爸发脾气了我。</span>', '<span class="zh">爸爸把脾气发我了。</span>', '<span class="zh">爸爸发了我一顿脾气给。</span>'], a: 0, expl: "Target with 对/跟 up front, burst-measure 一顿 inside: 对我发了一顿脾气." },
        { q: 'Which is correct?', choices: ['<span class="zh">她被跟他结婚了。</span>', '<span class="zh">她把他结婚了。</span>', '<span class="zh">她跟他结过两次婚。</span>', '<span class="zh">她结婚过两次跟他。</span>'], a: 2, expl: "跟 + partner + 结过两次婚: preposition rescue plus count inside. 把/被 never touch separable verbs — they have no free object." },
        { q: 'Pick the natural sentence for “Let\'s chat a bit”:', choices: ['<span class="zh">我们聊聊天吧。</span>', '<span class="zh">我们聊天聊天吧。</span>', '<span class="zh">我们聊天一下天吧。</span>', '<span class="zh">我们天聊聊吧。</span>'], a: 0, expl: "Reduplicate the verb half only: 聊聊天 (VVO). ✗聊天聊天 doubles the whole compound — the give-away of a missed 离合词." },
        { q: "<span class=\"zh\">这么多茶叶我一个人拿不动，你能___吗？</span>", choices: ["<span class=\"zh\">帮忙我一下</span>", "<span class=\"zh\">帮我个忙</span>", "<span class=\"zh\">帮个我忙</span>", "<span class=\"zh\">把我帮个忙</span>"], a: 1, expl: "帮忙 is V+O — 忙 already fills the object seat, so ✗帮忙我 treats it like its non-splitting twin 帮助. The person slips INSIDE, before the measure: 帮+我+个+忙. And 把 never touches a separable verb — there is no free object for it to grab." },
        { q: "<span class=\"zh\">为了跟南方的公司做生意，经理这个月___。</span>", choices: ["<span class=\"zh\">出差了三次</span>", "<span class=\"zh\">出了三次差</span>", "<span class=\"zh\">出差三次了</span>", "<span class=\"zh\">三次出了差</span>"], a: 1, expl: "出差 splits like every 离合词: 了 attaches to the verb half and the count wedges before the object half — 出+了+三次+差. ✗出差了三次 glues the compound shut and dumps the count behind, the exact same slip as ✗游泳了一个小时." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">离合词 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Rule</th><th>Remember</th></tr>
<tr><td>What they are</td><td>Secret V+O pairs: 见/面 · 睡/觉 · 帮/忙 · 请/假 · 游/泳 · 洗/澡 · 聊/天 · 吵/架…</td></tr>
<tr><td>Stuffing goes inside</td><td>了/过 (见<b class="hl">过</b>面) · duration (请了<b class="hl">三天</b>假) · counts (见过<b class="hl">两次</b>面) · 的+person (生<b class="hl">我的</b>气) · 个(+adj) (睡<b class="hl">个好</b>觉) · 一顿/一架</td></tr>
<tr><td>Reduplication</td><td>VVO only: 聊<b class="hl">聊</b>天 · 散<b class="hl">散</b>步 — never ✗聊天聊天</td></tr>
<tr><td>No object behind</td><td>✗结婚她 ✗见面朋友 ✗毕业大学 — the seat is taken</td></tr>
<tr><td>Preposition rescue</td><td><b class="hl">跟</b>…见面/结婚/吵架/聊天/开玩笑 · <b class="hl">向</b>…请假/道歉 · <b class="hl">从</b>…毕业 · <b class="hl">给</b>…打电话 · 帮+人+(个)忙 · 生+人+的气</td></tr>
<tr><td>No 把 / 被</td><td>Separable verbs are intransitive — 把/被 options are auto-wrong</td></tr>
<tr><td>Twin alert</td><td>帮<b class="hl">忙</b> splits (帮我个忙) · 帮<b class="hl">助</b> doesn't (帮助我) — same for 报名 vs 参加</td></tr>
<tr><td>Fun stuffing</td><td>打<b class="hl">八</b>折 (20% off!) · 睡<b class="hl">懒</b>觉 (sleep in) · 帮<b class="hl">个大</b>忙 (big favour)</td></tr>
<tr><td>German mirror</td><td>anrufen → ich rufe dich an ＝ 打电话 → 给你打个电话</td></tr>
</table></div>`
    }
  ]
});
