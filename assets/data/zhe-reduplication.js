/* HSK 4 Grammar Lab — 着・重叠・是否 (durative 着, reduplication, formal whether) */
registerPage({
  id: "zhe-reduplication",
  zh: "**着**・重叠・是否",
  title: "着, reduplication & 是否 — the small machines",
  subtitle: "You've parroted 等着 and 看看 since HSK 3 without being told the rules. HSK 4 tests the systems behind them: 着 that freezes a state, doubled verbs that soften a request, doubled adjectives that paint a picture — and the written-Chinese 是否 that reading passages love.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: <span class="zh hl">着</span> keeps the camera on the state',
      short: "Big idea",
      html: `
<p>Chinese has two ways to look at 开门 “open the door”. <span class="zh">门开<b class="hl">了</b></span> is a <b>snapshot of the change</b>: it was closed, now it isn't — click, done. <span class="zh">门开<b class="hl">着</b></span> keeps the camera <b>rolling on the result</b>: the door stands open, and keeps standing open.</p>
<div class="pattern">Verb + <span class="slot">着</span> = the resulting state holds<small>门开着 · 灯亮着 · 他穿着西装 · 墙上挂着画 — nothing is happening; something IS a certain way.</small></div>
<p>That's why 着 is the tool for <b>descriptions</b>: what someone is wearing, what's on the table, what posture you're in while doing something else. Action in progress is a different machine — that's <span class="zh">在/正在 + V</span>.</p>
<div class="callout cmp"><span class="co-title">🇪🇸 Spanish nails this one</span>
<span class="zh">他坐<b class="hl">着</b></span> = <i>está sent<b>ado</b></i> (state), <span class="zh">他正在坐下</span> = <i>se está sent<b>ando</b></i> (action). Spanish -ado/-ando is almost a perfect copy of 着 vs 正在. German uses state adjectives the same way: <i>„Die Tür ist <b>offen</b>“</i> = 门开着. English <i>-ing</i> covers both jobs — which is exactly why EN speakers mix them up and the exam tests it.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Listening plants minimal pairs (<span class="zh">开着</span> vs <span class="zh">开了</span>), reading uses existential 着-sentences (<span class="zh">墙上挂着…</span>) in every description, and the picture-writing task practically begs for <span class="zh">穿着/拿着/坐着</span>.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: 'The five jobs of 着',
      short: "着's jobs",
      intro: "One particle, five frames. The first two describe scenes; the middle two run two things at once; the last one is a command to hold.",
      head: ["Job", "Frame", "Example"],
      rows: [
        ['<b>State holds</b>', '<span class="zh">V着(呢)</span>', '<span class="zh">门开<b class="hl">着</b>呢，请进。</span> <span class="py-hint">Mén kāizhe ne, qǐng jìn.</span> The door is open — come in.'],
        ['<b>Existential scene</b>', '<span class="zh">Place + V着 + thing</span>', '<span class="zh">墙上挂<b class="hl">着</b>一张地图。</span> <span class="py-hint">Qiáng shàng guàzhe yì zhāng dìtú.</span> On the wall hangs a map.'],
        ['<b>Manner / posture</b>', '<span class="zh">V1着 + V2</span>', '<span class="zh">他喜欢躺<b class="hl">着</b>看书。</span> <span class="py-hint">Tā xǐhuan tǎngzhe kàn shū.</span> He likes reading lying down.'],
        ['<b>Gradual slide</b>', '<span class="zh">V着V着，…</span>', '<span class="zh">她说<b class="hl">着</b>说<b class="hl">着</b>就哭了。</span> <span class="py-hint">Tā shuōzhe shuōzhe jiù kū le.</span> As she talked, she started to cry.'],
        ['<b>Hold it!</b>', '<span class="zh">V着！(command)</span>', '<span class="zh">你拿<b class="hl">着</b>，别丢了。</span> <span class="py-hint">Nǐ názhe, bié diū le.</span> Hold on to it — don\'t lose it.']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: 'Model sentences — 着 in the wild',
      short: "着 examples",
      intro: "Tap 🔊 to listen. In each one ask: is anything HAPPENING, or is something simply BEING a certain way?",
      items: [
        { tag: "状态", cn: "教室的门开**着**，可是里面一个人也没有。", py: "Jiàoshì de mén kāizhe, kěshì lǐmiàn yí ge rén yě méiyǒu.", en: "The classroom door is open, but there's nobody inside.", note: "Nobody is opening anything right now — 开着 reports the standing state." },
        { tag: "状态", cn: "外面下**着**大雨，你就别出去了。", py: "Wàimiàn xiàzhe dà yǔ, nǐ jiù bié chūqù le.", en: "It's raining hard outside — don't go out.", note: "Weather as ongoing background: 下着雨 sets the scene for the advice." },
        { tag: "穿戴", cn: "他今天穿**着**一件蓝衬衫，看起来很精神。", py: "Tā jīntiān chuānzhe yí jiàn lán chènshān, kàn qǐlái hěn jīngshen.", en: "He's wearing a blue shirt today — he looks sharp.", note: "穿着 = has it ON (state). 穿了 would narrate the act of putting it on. (精神 jīngshen here = 'sharp, energetic' — HSK5.)" },
        { tag: "存现", cn: "桌子上放**着**一杯热茶，还冒**着**热气呢。", py: "Zhuōzi shàng fàngzhe yì bēi rè chá, hái màozhe rèqì ne.", en: "On the table sits a cup of hot tea, still steaming.", note: "Existential frame: Place + V着 + thing. The place is the topic; the thing is new information. (冒热气 mào rèqì = to give off steam.)" },
        { tag: "存现", cn: "墙上挂**着**几张全家的照片。", py: "Qiáng shàng guàzhe jǐ zhāng quánjiā de zhàopiàn.", en: "A few family photos hang on the wall.", note: "The reading section describes every room this way — train your eye on 地方 + V着." },
        { tag: "方式", cn: "他躺**着**看手机，眼睛越来越不舒服。", py: "Tā tǎngzhe kàn shǒujī, yǎnjing yuèláiyuè bù shūfu.", en: "He looks at his phone lying down, and his eyes feel worse and worse.", note: "V1着 = the posture held; V2 = the real action. The 着 always goes on verb one." },
        { tag: "方式", cn: "她笑**着**跟大家打招呼。", py: "Tā xiàozhe gēn dàjiā dǎ zhāohu.", en: "She greeted everyone with a smile.", note: "笑着 + action = doing it while smiling. A picture-description superstar." },
        { tag: "方式", cn: "别站**着**说话，快坐下吧。", py: "Bié zhànzhe shuōhuà, kuài zuò xià ba.", en: "Don't talk standing up — sit down.", note: "Negative command targets the posture: 别 + V1着 + V2." },
        { tag: "V着V着", cn: "孩子看电视，看**着**看**着**就睡着了。", py: "Háizi kàn diànshì, kànzhe kànzhe jiù shuìzháo le.", en: "The kid was watching TV, and as he watched on, he gradually fell asleep.", note: "Same character, two readings: 看着 kànzhe (durative) but 睡着 shuìzháo — 着 zháo is a result complement 'succeed in falling asleep'." },
        { tag: "正…着呢", cn: "小声点儿，孩子正睡**着**觉**呢**。", py: "Xiǎo shēng diǎnr, háizi zhèng shuìzhe jiào ne.", en: "Keep it down — the child is sleeping.", note: "正 + V着 + 呢: the full 'right now' sandwich. Any piece can drop; the meaning stays." },
        { tag: "命令", cn: "这把伞你拿**着**，外面还下**着**雨呢。", py: "Zhè bǎ sǎn nǐ názhe, wàimiàn hái xiàzhe yǔ ne.", en: "Take this umbrella — it's still raining out there.", note: "拿着! = take it AND keep holding it. The 着 makes the holding part explicit." },
        { tag: "否定", cn: "商店的灯没开**着**，大概已经关门了。", py: "Shāngdiàn de dēng méi kāizhe, dàgài yǐjīng guānmén le.", en: "The shop's lights aren't on — it's probably closed already.", note: "Negate with 没, and 着 survives: 没 + V着. (✗不开着)" },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: '着 vs 在 vs 了 — three cameras, one scene',
      short: "着·在·了",
      html: `
<h3>1 · 在/正在 films the ACTION, 着 films the RESULT</h3>
<p class="zh" style="font-size:1.15rem">他<b class="hl">在</b>穿外套。(putting it on — arms in sleeves) &nbsp;&nbsp;·&nbsp;&nbsp; 他穿<b class="hl">着</b>外套。(has it on — done and holding)</p>
<p>Rule of thumb: if you could freeze the scene and take a photo of it, it's <span class="zh">着</span>. If the photo would come out blurry because something is moving, it's <span class="zh">在/正在</span>.</p>
<h3>2 · 了 marks the change, 着 marks the after-state</h3>
<p class="zh" style="font-size:1.15rem">灯开<b class="hl">了</b>。(someone switched it on — event) &nbsp;&nbsp;·&nbsp;&nbsp; 灯开<b class="hl">着</b>。(it is on — description)</p>
<div class="callout warn"><span class="co-title">⚠️ 着 and 了 never stack</span>
One slot, one particle: ✗<span class="zh">挂着了</span>, ✗<span class="zh">开着了</span>. Decide what you're filming — the change (了) or the standing state (着) — and use exactly one.</div>
<h3>3 · Negation: 没 + V着</h3>
<p><span class="zh">窗户<b class="hl">没</b>关<b class="hl">着</b>。</span> — “the window isn't closed.” 没 negates, 着 stays. 不 is reserved for refusals and habits, not for states that simply don't hold.</p>
<h3>4 · Verbs that refuse 着</h3>
<p>Pure stative verbs are <b>already</b> states with nothing left to stretch — 知道, 认识, 是 refuse 着: ✗<span class="zh">知道着</span>, ✗<span class="zh">是着</span>. (Written Chinese does allow 有着 + abstract noun: 有着悠久的历史.) Same for instant verbs like 到, 死, 结束 — there is no stretchable middle to hold. But don't over-ban: verbs the mind can actively hold take it happily — <span class="zh">想着你</span> “keep thinking of you”, <span class="zh">记着这件事</span> “keep it in mind”.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
The classic listening trap: 门开着 (it's open) vs 门开了 (it just opened) vs 正在开门 (someone is opening it). Three sounds, three pictures — the question hinges on which picture matches the dialogue.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — state or action?",
      short: "Checkpoint",
      intro: "Six quick decisions. Photo-still (着), action rolling (在), or click of change (了)?",
      items: [
        { q: '<span class="zh">别___吃饭，对胃不好，坐下吧。</span>', choices: ['<span class="zh">站着</span>', '<span class="zh">站了</span>', '<span class="zh">站在</span>', '<span class="zh">站过</span>'], a: 0, expl: "Posture held while doing something else → V1着 + V2: 站着吃饭. 站在 would need a place after it, and 站了/站过 narrate past events." },
        { q: '<span class="zh">他___衣服呢，你在门口等他一下。</span>', choices: ['<span class="zh">正在换</span>', '<span class="zh">换着</span>', '<span class="zh">换过</span>', '<span class="zh">换完</span>'], a: 0, expl: "Mid-action, blurry photo → 正在 + V. 换着衣服 sounds wrong because 换 is a change, not a holdable state." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">门开着呢。</span>', '<span class="zh">他穿着一件蓝衬衫。</span>', '<span class="zh">他很喜欢着中国菜。</span>', '<span class="zh">外面下着雨。</span>'], a: 2, expl: "喜欢 is already a state — plain 很喜欢 says it all, and there's nothing here for 着 to stretch. Pure stative verbs (是、知道、认识) refuse 着 outright. The other three are textbook 着 frames." },
        { q: '<span class="zh">她___跟我说了这件事，好像不太难过。</span>', choices: ['<span class="zh">笑着</span>', '<span class="zh">笑了</span>', '<span class="zh">笑的</span>', '<span class="zh">在笑</span>'], a: 0, expl: "Manner frame: 笑着 + 说 = said it while smiling. 笑了 would be a separate completed event, not a manner." },
        { q: '<span class="zh">孩子看电视，看___看___就睡着了。</span>', choices: ['<span class="zh">着…着</span>', '<span class="zh">了…了</span>', '<span class="zh">过…过</span>', '<span class="zh">完…完</span>'], a: 0, expl: "V着V着 = 'and as the action went on…' — the gradual-slide frame. The final 睡着 (shuìzháo) is a different 着 altogether: a result complement." },
        { q: '<span class="zh">你先拿___这些照片，我一会儿再看。</span>', choices: ['<span class="zh">着</span>', '<span class="zh">了</span>', '<span class="zh">过</span>', '<span class="zh">到</span>'], a: 0, expl: "拿着! = take it and KEEP holding it — the imperative hold. 拿了/拿到 would just mark taking, with no 'hold on to it' instruction." }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Reduplication — say it twice, mean it lightly',
      short: "Doubling",
      html: `
<p>Doubling a verb doesn't intensify it — it <b>shrinks and softens</b> it: “a quick look”, “give it a try”, “no big deal”. Doubling an adjective does the opposite job: it makes the description <b>vivid and warm</b>.</p>
<div class="pattern">V V · V<span class="slot">一</span>V · V<span class="slot">了</span>V<small>看看 = 看一看 “have a look” · 想了想 “thought for a moment” (past). Two-syllable verbs go ABAB: 休息休息 · 商量商量</small></div>
<h3>Verb doubling — three flavors, one feel</h3>
<ul>
<li><b>Suggestion / request softener:</b> <span class="zh">你尝尝</span> feels friendlier than <span class="zh">你尝</span> — like English “have a taste” vs “taste it”.</li>
<li><b>Give it a try:</b> <span class="zh">试试</span>, <span class="zh">问问</span>, <span class="zh">找找</span> — low stakes, quick attempt.</li>
<li><b>Past quick action:</b> the 了 goes <b>inside</b>: <span class="zh">他想<b class="hl">了</b>想</span> “he thought for a second”. Never after the pair: ✗<span class="zh">想想了</span>.</li>
</ul>
<h3>Adjective doubling — painting, not measuring</h3>
<ul>
<li><b>AA</b> for one syllable: <span class="zh">慢慢(儿)</span>, <span class="zh">好好儿</span>, <span class="zh">远远</span>.</li>
<li><b>AABB</b> for two syllables: <span class="zh">高高兴兴</span>, <span class="zh">干干净净</span>, <span class="zh">舒舒服服</span> — as adverbial with 地, or after 得 as a state complement.</li>
</ul>
<div class="callout warn"><span class="co-title">⚠️ The two bans the exam tests</span>
1 · Reduplicated adjectives are already vivid — <b>no degree adverbs</b>: ✗<span class="zh">很高高兴兴</span>, ✗<span class="zh">非常干干净净</span>.<br>
2 · Doubled verbs take <b>no tails</b>: no duration, no complements — ✗<span class="zh">看看两个小时</span>, ✗<span class="zh">试试完</span>. And VV never stacks with 一下 (they're the same softener): say <span class="zh">尝尝</span> or <span class="zh">尝一下</span>, not ✗<span class="zh">尝尝一下</span>.</div>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 You do this too</span>
German <i>mal</i> is VV in one word: <i>„Schau <b>mal</b>“</i> = <span class="zh">看看</span>. Spanish softens the same way with a diminutive or “un poco”: <i>“espera un poquito”</i> = <span class="zh">等等</span>. The three de's page (的地得) already showed you AABB + 地 — this is where those chunks come from.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "examples",
      title: 'Model sentences — doubling in action',
      short: "Doubling examples",
      intro: "Tap 🔊 to listen. Feel how the doubled verb makes requests gentle, and the doubled adjective makes scenes vivid.",
      items: [
        { tag: "VV", cn: "这是我新买的茶，你**尝尝**吧。", py: "Zhè shì wǒ xīn mǎi de chá, nǐ chángchang ba.", en: "This is tea I just bought — have a taste.", note: "尝尝 + 吧 = maximally gentle offer. The doubled syllable is toneless." },
        { tag: "V一V", cn: "这个词是什么意思？我**查一查**词典。", py: "Zhège cí shì shénme yìsi? Wǒ chá yi chá cídiǎn.", en: "What does this word mean? Let me look it up.", note: "V一V = VV with a visible seam. The 一 is toneless too." },
        { tag: "V了V", cn: "他**想了想**，说：“我们坐地铁去吧。”", py: "Tā xiǎng le xiǎng, shuō: “Wǒmen zuò dìtiě qù ba.”", en: "He thought for a moment and said, “Let's take the subway.”", note: "Past quick action: 了 wedges INSIDE the pair — 想了想, never ✗想想了." },
        { tag: "ABAB", cn: "这个问题我们得**商量商量**再决定。", py: "Zhège wèntí wǒmen děi shāngliang shāngliang zài juédìng.", en: "We need to talk this over before deciding.", note: "Two-syllable verbs double whole: AB→ABAB (商量商量), never ✗AABB (商商量量)." },
        { tag: "ABAB", cn: "你周末别学习了，在家好好儿**休息休息**。", py: "Nǐ zhōumò bié xuéxí le, zài jiā hǎohāor xiūxi xiūxi.", en: "Don't study this weekend — get some proper rest at home.", note: "好好儿 hǎohāor (tone shift with 儿) + ABAB: the caring-parent combo." },
        { tag: "ABAB", cn: "放暑假了，你先把房间**收拾收拾**，再跟朋友出去游玩。", py: "Fàng shǔjià le, nǐ xiān bǎ fángjiān shōushi shōushi, zài gēn péngyou chūqù yóuwán.", en: "Summer vacation has started — tidy your room up a bit first, then go out and have fun with your friends.", note: "ABAB inside a 把-sentence: 把 + thing + **收拾收拾** = give it a quick once-over. The doubling keeps the parental order light." },
        { tag: "VV", cn: "你去**问问**服务员，火车几点开。", py: "Nǐ qù wènwen fúwùyuán, huǒchē jǐ diǎn kāi.", en: "Go ask the attendant when the train leaves.", note: "问问 = just ask, quick and casual. Perfect for errands." },
        { tag: "AA", cn: "路上有冰，你**慢慢**开。", py: "Lùshang yǒu bīng, nǐ mànmàn kāi.", en: "There's ice on the road — drive slowly.", note: "AA adverbial; after reduplication the 地 is optional: 慢慢(地)开." },
        { tag: "AABB", cn: "他把房间打扫得**干干净净**，像新的一样。", py: "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng, xiàng xīn de yíyàng.", en: "He cleaned the room spotless — like new.", note: "得 + AABB = state complement. No 很 anywhere near it!" },
        { tag: "AABB", cn: "孩子们**高高兴兴**地回家去了。", py: "Háizimen gāogāoxìngxìng de huí jiā qù le.", en: "The kids went home happy as can be.", note: "AABB + 地 + verb — the HSK writing section's favorite chunk." },
        { tag: "try", cn: "吃完饭我们去楼下**走一走**，怎么样？", py: "Chī wán fàn wǒmen qù lóuxià zǒu yi zǒu, zěnmeyàng?", en: "How about a little walk downstairs after dinner?", note: "走一走 / 走走 / 散散步 — all the same friendly smallness." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "tabs",
      title: '是否 — “whether” in a suit and tie',
      short: "是否",
      intro: "One written word the reading section adores. Spoken Chinese says 是不是 / 能不能; written Chinese compresses the A-not-A into 否.",
      tabs: [
        {
          label: "是否 basics",
          html: `<p><span class="zh hl">是否</span> = <span class="zh">是不是</span> in formal, written register: “whether / if”. It stands <b>right before the verb or adjective</b>, and because it already contains the question, it <b>never takes 吗</b>. Home turf: indirect questions after <span class="pill">知道</span> <span class="pill">告诉</span> <span class="pill">确定</span> <span class="pill">问</span>, and formal notices.</p>`,
          examples: [
            { cn: "我不知道他**是否**收到了我的邮件。", py: "Wǒ bù zhīdào tā shìfǒu shōudào le wǒ de yóujiàn.", en: "I don't know whether he received my email.", note: "知道/不知道 + S + 是否 + V — the standard indirect question." },
            { cn: "请在周五以前告诉我们你**是否**参加。", py: "Qǐng zài zhōuwǔ yǐqián gàosu wǒmen nǐ shìfǒu cānjiā.", en: "Please let us know by Friday whether you'll take part.", note: "Formal invitation language — you'll meet this exact frame in HSK reading." },
            { cn: "会议**是否**推迟，还没有决定。", py: "Huìyì shìfǒu tuīchí, hái méiyǒu juédìng.", en: "Whether the meeting will be postponed hasn't been decided yet.", note: "The 是否-clause can be the topic of the whole sentence." },
            { cn: "这种药**是否**安全，医生也说不清楚。", py: "Zhè zhǒng yào shìfǒu ānquán, yīshēng yě shuō bu qīngchu.", en: "Even the doctors can't say clearly whether this medicine is safe.", note: "是否 + adjective works too — anything A-not-A-able." },
            { cn: "参赛之前，你最好先问清楚比赛**是否**限制年龄。", py: "Cānsài zhīqián, nǐ zuìhǎo xiān wèn qīngchu bǐsài shìfǒu xiànzhì niánlíng.", en: "Before entering the competition, you'd better find out whether there's an age limit.", note: "Indirect question after 问清楚: S + **是否** + verb (限制). It already contains the 是不是 — so no 吗 at the end, ever." }
          ]
        },
        {
          label: "能否 & friends",
          html: `<p>否 compresses other A-not-A questions the same way: <span class="zh hl">能否</span> = 能不能 (a very polite “could you…?”), <span class="zh">可否</span> = 可不可以. Rule of thumb: <b>speak</b> 是不是/能不能, <b>write</b> 是否/能否 — and when the exam's reading passage asks <span class="zh">作者是否同意…？</span>, that's your cue word.</p>`,
          examples: [
            { cn: "你**能否**帮我把这份材料翻译成中文？", py: "Nǐ néngfǒu bāng wǒ bǎ zhè fèn cáiliào fānyì chéng Zhōngwén?", en: "Could you possibly translate this document into Chinese for me?", note: "能否 = white-glove 能不能. Perfect for emails to your teacher." },
            { cn: "面试的时候，他们会问你**是否**有工作经验。", py: "Miànshì de shíhou, tāmen huì wèn nǐ shìfǒu yǒu gōngzuò jīngyàn.", en: "At the interview they'll ask whether you have work experience.", note: "问 + 是否: reporting a yes/no question without quoting it." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — one bug per patient",
      short: "Error clinic",
      intro: "Each sentence has exactly one disease from this page. Diagnose before you reveal.",
      items: [
        { wrong: "墙上挂着了一张地图。", right: "墙上挂着一张地图。", py: "Qiáng shàng guàzhe yì zhāng dìtú.", en: "A map hangs on the wall.", expl: "One slot, one particle: 着 (standing state) and 了 (change) never stack. The scene is a description → keep 着, drop 了." },
        { wrong: "别站说话，坐下吧。", right: "别站着说话，坐下吧。", py: "Bié zhànzhe shuōhuà, zuò xià ba.", en: "Don't talk standing up — sit down.", expl: "Two actions at once need the manner frame: the held posture takes 着 (站着), then the main verb follows." },
        { wrong: "你尝尝一下这个菜。", right: "你尝尝这个菜。", py: "Nǐ chángchang zhège cài.", en: "Have a taste of this dish.", expl: "VV and 一下 are the same softener — they never stack. Say 尝尝 or 尝一下, not both." },
        { wrong: "他把房间打扫得很干干净净。", right: "他把房间打扫得干干净净。", py: "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng.", en: "He cleaned the room spotless.", expl: "AABB is already at full volume — degree adverbs are banned: ✗很干干净净. Delete the 很." },
        { wrong: "他想想了，同意了我们的建议。", right: "他想了想，同意了我们的建议。", py: "Tā xiǎng le xiǎng, tóngyì le wǒmen de jiànyì.", en: "He thought it over for a moment and agreed to our suggestion.", expl: "Past quick action: the 了 wedges INSIDE the doubled verb — 想了想. After the pair (✗想想了) it's illegal." },
        { wrong: "我不知道他是否会来吗。", right: "我不知道他是否会来。", py: "Wǒ bù zhīdào tā shìfǒu huì lái.", en: "I don't know whether he'll come.", expl: "是否 already contains the question (它 = 是不是). Adding 吗 double-marks it — one question marker per clause." },
        { wrong: "这张地图挂着在墙上。", right: "这张地图挂在墙上。", py: "Zhè zhāng dìtú guà zài qiáng shàng.", en: "This map hangs on the wall.", expl: "V着 can't take 在 + place behind it — the one bug is the stacked 着. Either the location result (挂在墙上) or the existential frame (墙上挂着一张地图) — never 挂着在." },
        { wrong: "我知道着这家店的网址，发给你吧。", right: "我知道这家店的网址，发给你吧。", py: "Wǒ zhīdào zhè jiā diàn de wǎngzhǐ, fā gěi nǐ ba.", en: "I know this shop's web address — let me send it to you.", expl: "知道 is already a state with nothing left to stretch — pure stative verbs (知道、认识、是) refuse 着. Delete it; the verb alone does the job. (Don't over-apply the ban: 想着 and 记着 are perfectly normal, because the mind can actively hold those.)" },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "存现", cn: "他家的客厅里摆**着**很多绿色的植物，看起来特别舒服。", py: "Tā jiā de kètīng li bǎizhe hěn duō lǜsè de zhíwù, kàn qǐlái tèbié shūfu.", en: "His living room is full of green plants — it feels wonderful in there.", note: "Existential frame: Place + V**着** + thing. The room is the topic, the plants are the news — nothing is happening, the scene just holds." },
        { tag: "方式", cn: "赢得了比赛以后，他得意地笑**着**说：“我早就说过我们能赢！”", py: "Yíngdé le bǐsài yǐhòu, tā déyì de xiàozhe shuō: “Wǒ zǎo jiù shuō guo wǒmen néng yíng!”", en: "After winning the match, he said with a smug smile, “I told you we could win!”", note: "Manner frame: 笑**着** + 说 = the smile holds while he speaks. The 着 clings to the posture verb, never to the main verb 说." },
        { tag: "V着V着", cn: "我昨天晚上做了一个奇怪的梦：在树林里走**着**走**着**，忽然看见一只老虎。", py: "Wǒ zuótiān wǎnshang zuò le yí ge qíguài de mèng: zài shùlín li zǒuzhe zǒuzhe, hūrán kànjiàn yì zhī lǎohǔ.", en: "Last night I had a strange dream: I was walking through a forest when suddenly I saw a tiger.", note: "V**着**V**着** + 忽然/就 = the action rolls on until the story slides into a surprise. Dreams and anecdotes love this frame." },
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — arrange the tiles",
      short: "Builder",
      intro: "HSK Writing part 1 format. Watch for the existential frame (place first!) and where 了 hides in doubled verbs.",
      items: [
        { tiles: ["墙上", "挂着", "一张", "中国地图"], py: "Qiáng shàng guàzhe yì zhāng Zhōngguó dìtú.", en: "A map of China hangs on the wall.", hint: "Existential scene: Place + V着 + thing." },
        { tiles: ["他", "喜欢", "躺着", "听", "音乐"], py: "Tā xǐhuan tǎngzhe tīng yīnyuè.", en: "He likes listening to music lying down.", hint: "Posture verb + 着 comes before the main action." },
        { tiles: ["外面", "下着", "大雨", "呢"], py: "Wàimiàn xiàzhe dà yǔ ne.", en: "It's raining hard outside.", hint: "State + 呢 to make it vivid." },
        { tiles: ["你", "去", "问问", "老师", "这个问题"], py: "Nǐ qù wènwen lǎoshī zhège wèntí.", en: "Go ask the teacher about this question.", hint: "Doubled verb + person + thing.", alt: [["这个问题", "你", "去", "问问", "老师"]] },
        { tiles: ["我们", "先", "商量商量", "再", "做决定"], py: "Wǒmen xiān shāngliang shāngliang zài zuò juédìng.", en: "Let's talk it over first and then decide.", hint: "先…再… carries the doubled verb in the first slot." },
        { tiles: ["她", "想了想", "才", "回答", "我的问题"], py: "Tā xiǎng le xiǎng cái huídá wǒ de wèntí.", en: "She thought for a moment before answering my question.", hint: "想了想 is one tile — the 了 already sits inside.", alt: [["我的问题", "她", "想了想", "才", "回答"]] },
        { tiles: ["请", "告诉我", "你", "是否", "同意", "这个安排"], py: "Qǐng gàosu wǒ nǐ shìfǒu tóngyì zhège ānpái.", en: "Please tell me whether you agree with this arrangement.", hint: "是否 stands right before the verb 同意.", alt: [["你", "是否", "同意", "这个安排", "请", "告诉我"]] }
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "A full lap across all three machines. The distractors are the real mistakes — aim for four out of five or better.",
      items: [
        { q: '<span class="zh">书架上___很多中文书，都是他这几年买的。</span>', choices: ['<span class="zh">放着</span>', '<span class="zh">在放</span>', '<span class="zh">放过</span>', '<span class="zh">放完</span>'], a: 0, expl: "Describing what's there → existential Place + V着. 在放 would mean someone is actively placing books right now." },
        { q: '<span class="zh">他正打___电话呢，你等一会儿再进去。</span>', choices: ['<span class="zh">着</span>', '<span class="zh">了</span>', '<span class="zh">过</span>', '<span class="zh">完</span>'], a: 0, expl: "正 + V着 + 呢 — the full 'right now' sandwich. 了/过/完 all end the call; the sentence needs it ongoing." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">她笑着说：“没关系。”</span>', '<span class="zh">他穿着西装去面试了。</span>', '<span class="zh">我昨天着看了一个电影。</span>', '<span class="zh">桌上摆着两个杯子。</span>'], a: 2, expl: "着 attaches to a verb (看着), never floats before one — ✗昨天着看. The other three are the manner, state and existential frames working correctly." },
        { q: '<span class="zh">你别急着回答，先___再说。</span>', choices: ['<span class="zh">想一想</span>', '<span class="zh">想着</span>', '<span class="zh">在想</span>', '<span class="zh">想完了</span>'], a: 0, expl: "A gentle 'think it over a bit' → V一V. 想着 holds a thought in mind; 在想 reports an ongoing action — neither is a suggestion." },
        { q: '<span class="zh">他把自己的房间收拾得___。</span>', choices: ['<span class="zh">干干净净</span>', '<span class="zh">很干干净净</span>', '<span class="zh">干净干净</span>', '<span class="zh">净净干干</span>'], a: 0, expl: "Adjectives double as AABB (干干净净) — ABAB (干净干净) is the verb pattern, and 很 + AABB is banned." },
        { q: '<span class="zh">周末我常去公园___，放松放松。</span>', choices: ['<span class="zh">走走</span>', '<span class="zh">走着</span>', '<span class="zh">走了</span>', '<span class="zh">走完</span>'], a: 0, expl: "A casual little activity → VV: 走走. Note the sentence's own 放松放松 doing the same ABAB job." },
        { q: '<span class="zh">路上有雪，你___开车。</span>', choices: ['<span class="zh">慢慢</span>', '<span class="zh">很慢慢</span>', '<span class="zh">慢了</span>', '<span class="zh">慢着</span>'], a: 0, expl: "AA adverbial: 慢慢(地)开. 很慢慢 breaks the no-degree-adverb ban; 慢着 is the interjection 'hold it!'." },
        { q: '<span class="zh">我不确定明天___下雨，你还是带着伞吧。</span>', choices: ['<span class="zh">是否会</span>', '<span class="zh">会是否</span>', '<span class="zh">是否吗</span>', '<span class="zh">吗会</span>'], a: 0, expl: "是否 stands before the whole verb phrase: 是否会下雨. It can't follow the modal, and it never combines with 吗." },
        { q: '<span class="zh">他跑___跑___，突然停了下来。</span>', choices: ['<span class="zh">着…着</span>', '<span class="zh">了…了</span>', '<span class="zh">完…完</span>', '<span class="zh">过…过</span>'], a: 0, expl: "V着V着 + sudden event: 'as he ran and ran, suddenly…'. The frame sets up exactly this kind of surprise." },
        { q: 'Which sentence is correct?', choices: ['<span class="zh">他手里拿着一束花。</span>', '<span class="zh">他手里拿着着一束花。</span>', '<span class="zh">他手里拿了着一束花。</span>', '<span class="zh">他手里着拿一束花。</span>'], a: 0, expl: "One verb, one 着, right after the verb: 拿着. Doubling it, stacking it with 了, or fronting it are all illegal." },
        { q: '<span class="zh">老师让我们回家___今天学的生词。</span>', choices: ['<span class="zh">复习复习</span>', '<span class="zh">复习着</span>', '<span class="zh">在复习</span>', '<span class="zh">复习复习了</span>'], a: 0, expl: "A light instruction → ABAB: 复习复习. 复习着 would hold a state, and doubled verbs never take a trailing 了." },
        { q: '<span class="zh">请在报名表上写清楚你___需要学校的宿舍。</span>', choices: ['<span class="zh">是否</span>', '<span class="zh">是吗</span>', '<span class="zh">否是</span>', '<span class="zh">吗</span>'], a: 0, expl: "Formal written register (报名表 = application form) → 是否 + verb. It's the A-not-A question folded into one written word." },
        { q: "<span class=\"zh\">我敲___敲门，等了半天也没有人来开。</span>", choices: ["<span class=\"zh\">了</span>", "<span class=\"zh\">一</span>", "<span class=\"zh\">着</span>", "<span class=\"zh\">过</span>"], a: 0, expl: "A completed quick action in the past → V**了**V: 敲了敲. The 了 wedges INSIDE the pair. 敲一敲 is the suggestion flavor (“give it a knock”) and can't narrate a finished event; 着 and 过 never sit inside a doubled verb." },
        { q: "<span class=\"zh\">前面的十字路口___一辆大车，我们从旁边过去吧。</span>", choices: ["<span class=\"zh\">停着</span>", "<span class=\"zh\">在停</span>", "<span class=\"zh\">停了停</span>", "<span class=\"zh\">停过</span>"], a: 0, expl: "You're describing a frozen scene → existential Place + V**着** + thing: 十字路口停着一辆大车. 在停 films someone actively parking right now; 停了停 is the V了V “paused for a moment” (the truck would have to be mid-story); 停过 just says it once stopped there." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">着・重叠・是否 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Machine</th><th>Pattern</th><th>Example</th></tr>
<tr><td>State holds</td><td>V + <b class="hl">着</b>(呢)</td><td>门开<b class="hl">着</b>呢 · 他穿<b class="hl">着</b>西装</td></tr>
<tr><td>Existential</td><td>Place + V<b class="hl">着</b> + thing</td><td>墙上挂<b class="hl">着</b>一张地图</td></tr>
<tr><td>Manner</td><td>V1<b class="hl">着</b> + V2</td><td>躺<b class="hl">着</b>看书 · 笑<b class="hl">着</b>说</td></tr>
<tr><td>Gradual slide</td><td>V<b class="hl">着</b>V<b class="hl">着</b>，…</td><td>说<b class="hl">着</b>说<b class="hl">着</b>就哭了</td></tr>
<tr><td>Negation</td><td><b class="hl">没</b> + V着</td><td>灯<b class="hl">没</b>开着</td></tr>
<tr><td>Verb doubling</td><td>VV · V一V · V<b class="hl">了</b>V · ABAB</td><td>看看 · 查一查 · 想<b class="hl">了</b>想 · 商量商量</td></tr>
<tr><td>Adj doubling</td><td>AA · AABB (no 很!)</td><td>慢慢开 · 打扫得干干净净</td></tr>
<tr><td>Whether (written)</td><td>是否 / 能否 + V — no 吗</td><td>请告诉我你<b class="hl">是否</b>参加</td></tr>
<tr><td>Top traps</td><td colspan="2">✗着了 stacked · ✗很 + AABB · ✗想想<b class="hl">了</b> (了 goes inside) · ✗是否…吗 · 知道/认识/是 refuse 着 (but 想着/记着 are fine)</td></tr>
</table></div>`
    }
  ]
});
