/* HSK 4 Grammar Lab — 趋向补语 (directional complements & extended meanings) */
registerPage({
  id: "directional-complements",
  zh: "**趋向**补语",
  title: "Directional complements — and their second lives",
  subtitle: "From HSK 3 you know 进来 and 回去. HSK 4 tests the full grid — and then the plot twist: 起来, 下来, 下去, 出来, 过来 all have abstract second meanings, and THOSE are what the exam actually asks. This is the richest complement topic; take your time.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: every motion verb gets a <span class="zh hl">GPS tail</span> — computed from where YOU stand',
      short: "Big idea",
      html: `
<p>Chinese motion is radically honest about geometry. A verb tells you the manner (<span class="zh">走</span> walk, <span class="zh">跑</span> run, <span class="zh">拿</span> carry), and a tail tells you the path — always ending in one of two words:</p>
<div class="pattern">Verb + <span class="slot">Path (上/下/进/出/回/过/起)</span> + <span class="slot">来 or 去</span><small>来 = toward the speaker · 去 = away from the speaker. The path syllable is optional; the 来/去 perspective is the soul of the system.</small></div>
<p>Same event, two sentences: you're <b>inside</b> the room → <span class="zh">他走<b class="hl">进来</b>了</span> (he walked in, toward me). You're <b>outside</b> → <span class="zh">他走<b class="hl">进去</b>了</span> (he walked in, away from me). The room didn't change — you did.</p>
<div class="callout cmp"><span class="co-title">🇪🇸 This is exactly ir/venir and traer/llevar</span>
Spanish already forces you to compute the speaker's position: <i><b>ven</b>ir</i> = toward me (<span class="zh">来</span>), <i><b>ir</b></i> = away (<span class="zh">去</span>); <i><b>traer</b></i> = <span class="zh">拿来</span>, <i><b>llevar</b></i> = <span class="zh">拿去</span>. If you can choose between <i>tráemelo</i> and <i>llévaselo</i>, you can choose between 拿来 and 拿去 — it is literally the same calculation. (German <i>her-/hin-</i> — <i>herein! / hinein</i> — encodes it too.)</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Two reasons. Literal: the word-ordering task loves 走进教室去-type chains. Abstract: Reading and Listening lean hard on 看起来, 停下来, 说下去, 想出来, 醒过来 — direction words recycled as pure ideas. Both live on this page.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The full grid — 7 paths × 2 perspectives",
      short: "The grid",
      intro: "Thirteen compounds (not fourteen — 起去 doesn't exist). Read each cell as: path + where the speaker stands.",
      head: ["Path", "+ 来 (toward me)", "+ 去 (away from me)"],
      rows: [
        ['<span class="zh">上</span> up', '<span class="zh">上来</span> <span class="py-hint">shànglái</span> — 快<b class="hl">上来</b>！我在楼上等你。', '<span class="zh">上去</span> <span class="py-hint">shàngqù</span> — 把行李搬<b class="hl">上去</b>吧。'],
        ['<span class="zh">下</span> down', '<span class="zh">下来</span> <span class="py-hint">xiàlái</span> — 你在树上干什么？快<b class="hl">下来</b>！', '<span class="zh">下去</span> <span class="py-hint">xiàqù</span> — 电梯坏了，我们走<b class="hl">下去</b>吧。'],
        ['<span class="zh">进</span> in', '<span class="zh">进来</span> <span class="py-hint">jìnlái</span> — 门开着呢，<b class="hl">进来</b>吧。', '<span class="zh">进去</span> <span class="py-hint">jìnqù</span> — 电影开始了，我们快<b class="hl">进去</b>。'],
        ['<span class="zh">出</span> out', '<span class="zh">出来</span> <span class="py-hint">chūlái</span> — 你躲在哪儿？快<b class="hl">出来</b>！', '<span class="zh">出去</span> <span class="py-hint">chūqù</span> — 我<b class="hl">出去</b>买点儿东西。'],
        ['<span class="zh">回</span> back', '<span class="zh">回来</span> <span class="py-hint">huílái</span> — 爸爸还没<b class="hl">回来</b>。', '<span class="zh">回去</span> <span class="py-hint">huíqù</span> — 太晚了，我该<b class="hl">回去</b>了。'],
        ['<span class="zh">过</span> across / over', '<span class="zh">过来</span> <span class="py-hint">guòlái</span> — 你<b class="hl">过来</b>一下，我给你看个东西。', '<span class="zh">过去</span> <span class="py-hint">guòqù</span> — 老师叫你，快<b class="hl">过去</b>吧。'],
        ['<span class="zh">起</span> up off (the ground)', '<span class="zh">起来</span> <span class="py-hint">qǐlái</span> — 都九点了，快<b class="hl">起来</b>！', '✗ <span class="zh"><s>起去</s></span> — does not exist. 起 only pairs with 来.']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — literal direction first",
      short: "Examples",
      intro: "For each sentence, locate the speaker before you read the translation. The 来/去 will tell you where they are.",
      items: [
        { tag: "进来", cn: "外面下雨了，快**进来**吧！", py: "Wàimiàn xià yǔ le, kuài jìnlái ba!", en: "It's raining out there — come in, quick!", note: "来 → the speaker is inside, pulling you toward them." },
        { tag: "上去", cn: "老板在楼上等你，你快**上去**吧。", py: "Lǎobǎn zài lóushàng děng nǐ, nǐ kuài shàngqù ba.", en: "The boss is waiting for you upstairs — hurry up there.", note: "The speaker stays downstairs → 去." },
        { tag: "split obj", cn: "他从包里拿**出**一瓶水**来**。", py: "Tā cóng bāo lǐ ná chū yì píng shuǐ lái.", en: "He took a bottle of water out of his bag.", note: "The thing (一瓶水) can sit between the path and 来. 拿出来一瓶水 also works." },
        { tag: "回来", cn: "妈妈从国外带**回来**了很多巧克力。", py: "Māma cóng guówài dài huílái le hěn duō qiǎokèlì.", en: "Mom brought back lots of chocolate from abroad.", note: "带回来 = carried along a homeward path, toward the family (= the speaker)." },
        { tag: "place obj", cn: "上课了，老师走**进**教室**去**了。", py: "Shàngkè le, lǎoshī zǒu jìn jiàoshì qù le.", en: "Class started — the teacher walked into the classroom.", note: "PLACE words must stand before 来/去: 走进教室去, never ✗走进去教室. The narrator is outside → 去." },
        { tag: "起来", cn: "请大家站**起来**，我们先做个游戏。", py: "Qǐng dàjiā zhàn qǐlái, wǒmen xiān zuò ge yóuxì.", en: "Everyone please stand up — let's play a game first.", note: "起来 = up off the seat. Remember: no 起去." },
        { tag: "上去", cn: "山顶的风景特别美，我们爬**上去**看看吧。", py: "Shāndǐng de fēngjǐng tèbié měi, wǒmen pá shàngqù kànkan ba.", en: "The view from the summit is gorgeous — let's climb up and take a look.", note: "Both speaker and listener are at the bottom, moving away from here → 去." },
        { tag: "下来", cn: "小心！书从桌子上掉**下来**了。", py: "Xiǎoxīn! Shū cóng zhuōzi shàng diào xiàlái le.", en: "Careful! A book fell off the table.", note: "掉下来 = fell down toward where we are." },
        { tag: "回去", cn: "天太晚了，我们回**家去**吧。", py: "Tiān tài wǎn le, wǒmen huí jiā qù ba.", en: "It's really late — let's head home.", note: "家 is a place word → it slips in before 去: 回家去, not ✗回去家." },
        { tag: "把", cn: "请把这些椅子搬**过来**，那边不够坐。", py: "Qǐng bǎ zhèxiē yǐzi bān guòlái, nàbiān bú gòu zuò.", en: "Please move these chairs over here — there aren't enough seats over there.", note: "Definite object? 把 + V + directional is the cleanest order." },
        { tag: "出去/回来", cn: "我**出去**买点儿东西，一会儿就**回来**。", py: "Wǒ chūqù mǎi diǎnr dōngxi, yíhuìr jiù huílái.", en: "I'm going out to buy a few things — I'll be right back.", note: "Watch the perspective flip mid-sentence: away (去), then back toward home base (来)." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: 'Word order: where does the object go?',
      short: "Object rules",
      html: `
<p>Three object types, three behaviours — this IS the word-ordering question:</p>
<h3>1 · Place words: ALWAYS before 来/去</h3>
<p class="zh" style="font-size:1.15rem">走进<b class="hl">教室</b>去 · 回<b class="hl">家</b>来 · 爬上<b class="hl">山</b>去 · 跑回<b class="hl">宿舍</b>去<br>✗ 走进去<s>教室</s> &nbsp; ✗ 回来<s>家</s></p>
<p>No exceptions. The place is part of the path, so it rides inside the tail.</p>
<h3>2 · Indefinite things: either slot</h3>
<p class="zh" style="font-size:1.15rem">他拿出<b class="hl">一本书</b>来。 ＝ 他拿出来<b class="hl">一本书</b>。</p>
<p>New, unidentified stuff (一瓶水、几个朋友、很多礼物) may sit before 来/去 or after the whole tail.</p>
<h3>3 · Definite things: promote them with 把</h3>
<p class="zh" style="font-size:1.15rem">请<b class="hl">把</b>那把椅子搬<b class="hl">过来</b>。 · <b class="hl">把</b>你的照片拿<b class="hl">出来</b>给我们看看。</p>
<p>You know the rule from the 把 topic: known object + what happened to it. Directional complements are prime 把-endings.</p>
<h3>4 · Where 了 goes</h3>
<p>After the complement (<span class="zh">拿出来<b class="hl">了</b></span>) or at sentence end (<span class="zh">他走进教室去<b class="hl">了</b></span>). Never between verb and path.</p>
<div class="callout tip"><span class="co-title">📞 The phone-call rule: Chinese sides with English, not Spanish</span>
Someone calls you over. English: “I'm <b>coming</b>!” Spanish: <i>“¡Ya <b>voy</b>!”</i> (going!). Chinese says <span class="zh">我马上就<b class="hl">来</b>！</span> — like English, it adopts the listener's position as the target of 来. So: moving toward the person you're talking to = 来, even though you're moving away from where you stand.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "Second lives — the abstract meanings (the real HSK 4 content)",
      short: "Abstract uses",
      intro: "Direction words recycled as ideas: starting, settling, continuing, producing, coming to. One tab per tail — these are tested far more than the literal uses.",
      tabs: [
        {
          label: "起来",
          html: `<p>The busiest of them all — four jobs:</p>
<ul>
<li><b>① Starting</b> (often suddenly): <span class="zh">哭起来 笑起来 唱起来 下起雨来</span>. ⚠️ The object splits the tail: <span class="zh">下<b class="hl">起</b>雨<b class="hl">来</b></span>, <span class="zh">聊起天来</span>.</li>
<li><b>② Gathering / storing</b>: <span class="zh">收起来 存起来 包起来 藏起来</span> — scattered → together, out → put away.</li>
<li><b>③ Evaluation frame</b>: <span class="zh"><b class="hl">看起来</b>很年轻 · <b class="hl">听起来</b>不错 · <b class="hl">说起来</b>容易，做起来难</span> — “judging by looking/hearing…”. No 了 on this use, ever.</li>
<li><b>④ Recall</b>: <span class="zh">想<b class="hl">起来</b></span> — a memory rises back up. 我想起来了！ = Now I remember!</li>
</ul>`,
          examples: [
            { cn: "听到这个笑话，大家都笑了**起来**。", py: "Tīng dào zhège xiàohuà, dàjiā dōu xiào le qǐlái.", en: "Hearing the joke, everyone burst out laughing.", note: "① start. 了 slips in before 起来 in this pattern: 笑了起来." },
            { cn: "我们刚到公园，就下**起**大雨**来**了。", py: "Wǒmen gāng dào gōngyuán, jiù xià qǐ dàyǔ lái le.", en: "We had just reached the park when it started pouring.", note: "① start, with the object 大雨 splitting 起…来. Exam favourite!" },
            { cn: "考试开始了，请把手机收**起来**。", py: "Kǎoshì kāishǐ le, qǐng bǎ shǒujī shōu qǐlái.", en: "The exam has started — please put your phones away.", note: "② store: from out-in-the-world into a pocket." },
            { cn: "你今天看**起来**很累，昨晚没睡好吗？", py: "Nǐ jīntiān kàn qǐlái hěn lèi, zuówǎn méi shuì hǎo ma?", en: "You look really tired today — didn't sleep well last night?", note: "③ evaluation: 'judging by appearance'. 看起来 + description." },
            { cn: "我想**起来**了！他就是我们以前的邻居。", py: "Wǒ xiǎng qǐlái le! Tā jiùshì wǒmen yǐqián de línjū.", en: "Now I remember! He's our old neighbor.", note: "④ recall: the memory was in there and floated back up." }
          ]
        },
        {
          label: "下来",
          html: `<p>Core image: motion downward → <b>coming to rest</b>. Four jobs:</p>
<ul>
<li><b>① Settling / calming</b>: <span class="zh">停下来 安静下来 慢下来 冷静下来</span> — activity decreases until still.</li>
<li><b>② Recording</b>: <span class="zh">记下来 写下来 拍下来 录下来</span> — fleeting information lands on paper/camera and stays.</li>
<li><b>③ Detaching</b>: <span class="zh">脱下来 摘下来 撕下来</span> — off the body, off the wall, downward and away.</li>
<li><b>④ Surviving until now</b>: <span class="zh">坚持<b class="hl">下来</b></span> — carried through from the past up to the present.</li>
</ul>`,
          examples: [
            { cn: "看到红灯，车慢慢停了**下来**。", py: "Kàn dào hóngdēng, chē mànmàn tíng le xiàlái.", en: "Seeing the red light, the car slowly came to a stop.", note: "① settle: motion → rest." },
            { cn: "老师说的重点，我都记**下来**了。", py: "Lǎoshī shuō de zhòngdiǎn, wǒ dōu jì xiàlái le.", en: "I wrote down all the key points the teacher mentioned.", note: "② record: sound → notebook, where it stays. Compare 记住 (stays in your head)." },
            { cn: "进门请把鞋脱**下来**。", py: "Jìn mén qǐng bǎ xié tuō xiàlái.", en: "Please take your shoes off when you come in.", note: "③ detach: off the body. Also 把帽子摘下来." },
            { cn: "学汉语的人很多，但坚持**下来**的不多。", py: "Xué Hànyǔ de rén hěn duō, dàn jiānchí xiàlái de bù duō.", en: "Lots of people start learning Chinese, but few see it through.", note: "④ past → now: they made it all the way to the present." }
          ]
        },
        {
          label: "下去",
          html: `<p>One job, huge frequency: <b>continue onward into the future</b>. <span class="zh">说下去 听下去 看下去 学下去 坚持下去 活下去</span>.</p>
<p>Mirror logic with 下来: <span class="zh">坚持<b class="hl">下来</b></span> = made it through (looking back) · <span class="zh">坚持<b class="hl">下去</b></span> = keep at it (looking forward). 来 pulls toward now; 去 pushes away from now.</p>`,
          examples: [
            { cn: "你别停，说**下去**，我们都听着呢。", py: "Nǐ bié tíng, shuō xiàqù, wǒmen dōu tīngzhe ne.", en: "Don't stop — go on, we're all listening.", note: "Continue the current activity into the next minutes." },
            { cn: "汉语越学越有意思，我要一直学**下去**。", py: "Hànyǔ yuè xué yuè yǒu yìsi, wǒ yào yìzhí xué xiàqù.", en: "Chinese gets more interesting the more I learn — I'm going to keep studying it.", note: "Future-facing commitment → 下去." },
            { cn: "这部电视剧太无聊了，我实在看不**下去**了。", py: "Zhè bù diànshìjù tài wúliáo le, wǒ shízài kàn bu xiàqù le.", en: "This series is so boring I really can't keep watching.", note: "看不下去 — a potential complement (next topic) wrapped around 下去: can't continue." }
          ]
        },
        {
          label: "出来",
          html: `<p>Core image: from hidden → into the open. Two abstract jobs:</p>
<ul>
<li><b>① Producing</b>: <span class="zh">想出来 做出来 写出来 画出来</span> — something that didn't exist emerges. <span class="zh">想<b class="hl">出来</b></span> = think UP (new idea!), totally different from 想起来 (recall).</li>
<li><b>② Detecting</b>: <span class="zh">看出来 听出来 认出来 尝出来</span> — hidden information becomes visible to you: you can <i>tell</i>.</li>
</ul>`,
          examples: [
            { cn: "这个好办法是谁想**出来**的？", py: "Zhège hǎo bànfǎ shì shéi xiǎng chūlái de?", en: "Who came up with this great idea?", note: "① produce: the idea didn't exist before — it was thought UP." },
            { cn: "十年没见，我差点儿没认**出**你**来**。", py: "Shí nián méi jiàn, wǒ chàdiǎnr méi rèn chū nǐ lái.", en: "Ten years — I almost didn't recognize you.", note: "② detect. The object 你 splits 出…来, same as the 起…来 split." },
            { cn: "我一听就听**出来**了，这是你的声音。", py: "Wǒ yì tīng jiù tīng chūlái le, zhè shì nǐ de shēngyīn.", en: "I could tell right away — it's your voice.", note: "② detect: identity extracted from sound." }
          ]
        },
        {
          label: "过来",
          html: `<p>Literal: over here. Abstract: <b>back to the normal, healthy, aware state</b> — as if “normal” were where we all stand: <span class="zh">醒过来</span> (wake / come to), <span class="zh">反应过来</span> (it clicks), <span class="zh">缓过来</span> (recover), <span class="zh">改过来</span> (correct a bad habit back to right).</p>`,
          examples: [
            { cn: "手术很成功，病人已经醒**过来**了。", py: "Shǒushù hěn chénggōng, bìngrén yǐjīng xǐng guòlái le.", en: "The operation went well — the patient has come round.", note: "Unconscious → conscious = back over to our side." },
            { cn: "等我反应**过来**，公共汽车已经开走了。", py: "Děng wǒ fǎnyìng guòlái, gōnggòng qìchē yǐjīng kāi zǒu le.", en: "By the time it clicked, the bus had already left.", note: "反应过来 = the penny drops. (反应 fǎnyìng = reaction — HSK 5 word, worth knowing early.)" }
          ]
        },
        {
          label: "过去",
          html: `<p>The mirror: <b>away from the normal state</b> — <span class="zh">晕过去</span> (faint), <span class="zh">昏过去</span> (pass out), <span class="zh">睡过去</span> (drift off). Consciousness leaves the shared “here”.</p>
<p>Bonus: time itself uses this tail — <span class="zh">冬天过去了，春天来了。</span> Past events drift away from now, which is why “the past” is <span class="zh">过去</span>.</p>`,
          examples: [
            { cn: "天太热了，他站着站着突然晕**过去**了。", py: "Tiān tài rè le, tā zhànzhe zhànzhe tūrán yūn guòqù le.", en: "It was so hot that he suddenly fainted where he stood.", note: "晕 yūn = dizzy/faint. Consciousness exits → 过去. He'll 醒过来 later, we hope." },
            { cn: "最困难的日子已经过去了，别担心。", py: "Zuì kùnnan de rìzi yǐjīng guòqù le, bié dānxīn.", en: "The hardest days are already behind us — don't worry.", note: "Time flowing away from 'now' takes the same tail." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — grid and perspective",
      short: "Checkpoint",
      intro: "Six questions on the literal system before we drill the abstract senses.",
      items: [
        { q: 'You are IN your room; a friend knocks. What do you call out?', choices: ['<span class="zh">进去吧！</span>', '<span class="zh">进来吧！</span>', '<span class="zh">出来吧！</span>', '<span class="zh">上去吧！</span>'], a: 1, expl: "The friend will move toward you, the speaker → 来. 进去 would send them into some OTHER room away from you." },
        { q: 'Watching from the corridor, you saw the teacher enter the classroom. <span class="zh">他走___了。</span>', choices: ['<span class="zh">进教室去</span>', '<span class="zh">进去教室</span>', '<span class="zh">教室进去</span>', '<span class="zh">进教室来</span>'], a: 0, expl: "Place words must stand before 来/去: 走进教室去. And you stayed outside, so he moved away from you → 去, not 来." },
        { q: "Which compound does NOT exist?", choices: ['<span class="zh">起来</span>', '<span class="zh">回去</span>', '<span class="zh">起去</span>', '<span class="zh">过来</span>'], a: 2, expl: "起 only pairs with 来 — you always rise toward the world of the standing. 起去 is the grid's one empty cell." },
        { q: '<span class="zh">你___很高兴，有什么好事？</span>', choices: ['<span class="zh">看起来</span>', '<span class="zh">看出来</span>', '<span class="zh">看下去</span>', '<span class="zh">看过来</span>'], a: 0, expl: "Judging by appearance = evaluation frame 看起来 + description. 看出来 = 'can tell / detect', and it doesn't take a description directly like this." },
        { q: 'You are downstairs with your friend; the bedroom is upstairs. <span class="zh">请把行李搬___。</span>', choices: ['<span class="zh">上来</span>', '<span class="zh">下来</span>', '<span class="zh">上去</span>', '<span class="zh">进来</span>'], a: 2, expl: "The luggage moves up and away from where you both stand → 上去. 上来 would need you waiting upstairs." },
        { q: '<span class="zh">我突然想___了那个词怎么说。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">下去</span>', '<span class="zh">过去</span>', '<span class="zh">回去</span>'], a: 0, expl: "You knew the word before; it resurfaced → recall 想起来. If you invented a brand-new word, that would be 想出来." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "table",
      title: "The four killer contrasts",
      short: "Contrasts",
      intro: "HSK 4 doesn't ask 'what does 起来 mean' — it makes you choose between these near-twins. Nail the difference in one line each.",
      head: ["Pair", "This one…", "That one…"],
      rows: [
        ['<span class="zh"><b class="hl">想起来</b> vs <b class="hl">想出来</b> (vs 想到)</span>', '<span class="zh">想起来</span> = <b>recall</b> what was already in your head: 我想起来他的名字了。 <span class="py-hint">Wǒ xiǎng qǐlái tā de míngzi le.</span>', '<span class="zh">想出来</span> = <b>invent</b> something new: 他想出来一个好办法。 <span class="py-hint">Tā xiǎng chūlái yí ge hǎo bànfǎ.</span> — And <span class="zh">想到</span> = it crossed your mind at all: 没想到你也来了！'],
        ['<span class="zh"><b class="hl">看起来</b> vs <b class="hl">看出来</b></span>', '<span class="zh">看起来</span> = <b>seems</b>, an impression: 他看起来只有二十岁。 <span class="py-hint">Tā kàn qǐlái zhǐyǒu èrshí suì.</span>', '<span class="zh">看出来</span> = <b>can tell</b>, you detected a hidden fact: 我看出来他不高兴了。 <span class="py-hint">Wǒ kàn chūlái tā bù gāoxìng le.</span>'],
        ['<span class="zh"><b class="hl">坚持下来</b> vs <b class="hl">坚持下去</b></span>', '<span class="zh">下来</span> = made it through, <b>past → now</b>: 这三年我坚持下来了。 <span class="py-hint">Zhè sān nián wǒ jiānchí xiàlái le.</span>', '<span class="zh">下去</span> = keep going, <b>now → future</b>: 别放弃，坚持下去！ <span class="py-hint">Bié fàngqì, jiānchí xiàqù!</span>'],
        ['<span class="zh"><b class="hl">拿出来</b> vs <b class="hl">拿起来</b></span>', '<span class="zh">出来</span> = out of a <b>container</b>: 把护照拿出来。 <span class="py-hint">Bǎ hùzhào ná chūlái.</span> (from the bag)', '<span class="zh">起来</span> = up off a <b>surface</b>: 把地上的书拿起来。 <span class="py-hint">Bǎ dìshàng de shū ná qǐlái.</span> (pick it up)'],
        ['<span class="zh"><b class="hl">醒过来</b> vs <b class="hl">晕过去</b></span>', '<span class="zh">过来</span> = <b>back to</b> normal/conscious: 他醒过来了。 <span class="py-hint">Tā xǐng guòlái le.</span>', '<span class="zh">过去</span> = <b>away from</b> normal: 他晕过去了。 <span class="py-hint">Tā yūn guòqù le.</span> — “Normal” is home base; 来 returns, 去 departs.']
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One directional disease per patient. The word-order bugs here are the exact traps of the writing section.",
      items: [
        { wrong: "他走进去了教室。", right: "他走进教室去了。", py: "Tā zǒu jìn jiàoshì qù le.", en: "He walked into the classroom.", expl: "Place words go BEFORE 来/去 — always. The path is 进…去 and 教室 rides inside it." },
        { wrong: "天下雨起来了。", right: "天下起雨来了。", py: "Tiān xià qǐ yǔ lái le.", en: "It started to rain.", expl: "The object 雨 must split the start-meaning tail: 下起雨来, never ✗下雨起来. (Bonus rule: don't add 开始 either — this 起来 already contains 'begin'.)" },
        { wrong: "别停，请你继续说下来。", right: "别停，请你继续说下去。", py: "Bié tíng, qǐng nǐ jìxù shuō xiàqù.", en: "Don't stop — please go on.", expl: "Continuing into the future = 下去. 下来 points backward (made it to now) or means settle/record." },
        { wrong: "他看起来了很不高兴。", right: "他看起来很不高兴。", py: "Tā kàn qǐlái hěn bù gāoxìng.", en: "He looks quite upset.", expl: "The evaluation frame 看起来/听起来 never takes 了 — it's a judgment, not an event." },
        { wrong: "病人晕过来了，大家都很担心。", right: "病人晕过去了，大家都很担心。", py: "Bìngrén yūn guòqù le, dàjiā dōu hěn dānxīn.", en: "The patient fainted, and everyone was worried.", expl: "Fainting moves AWAY from consciousness → 晕过去. Coming back is 醒过来. The worry gives the direction away." },
        { wrong: "我想起来了一个特别好的新办法。", right: "我想出来了一个特别好的新办法。", py: "Wǒ xiǎng chūlái le yí ge tèbié hǎo de xīn bànfǎ.", en: "I came up with a really good new idea.", expl: "新办法 = it never existed before, so it's produced, not recalled: 想出来. 想起来 needs an old memory." },
        { wrong: "你快回来家吧，晚饭做好了。", right: "你快回家来吧，晚饭做好了。", py: "Nǐ kuài huí jiā lái ba, wǎnfàn zuò hǎo le.", en: "Come on home — dinner's ready.", expl: "家 is a place word → before 来: 回家来. (Speaker is at home cooking, so 来 is right.)" },
        { wrong: "请大家从书包里把课本拿起来。", right: "请大家从书包里把课本拿出来。", py: "Qǐng dàjiā cóng shūbāo lǐ bǎ kèběn ná chūlái.", en: "Everyone take your textbooks out of your bags.", expl: "Out of a container = 出来. 拿起来 is for picking things up off a surface. 从书包里 forces 出来." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — assemble the paths",
      short: "Builder",
      intro: "Find the verb, find the tail, then decide: does anything (a place? an object?) belong inside the tail?",
      items: [
        { tiles: ["外面", "很冷", "你", "快", "进来", "吧"], py: "Wàimiàn hěn lěng, nǐ kuài jìnlái ba.", en: "It's cold out there — come in quickly.", hint: "The speaker is inside → 来." },
        { tiles: ["他", "从", "书包里", "拿出", "一本词典", "来"], py: "Tā cóng shūbāo lǐ ná chū yì běn cídiǎn lái.", en: "He took a dictionary out of his schoolbag.", alt: [["他", "从", "书包里", "拿出", "来", "一本词典"]], hint: "An indefinite object may split 出…来 — or follow the whole tail." },
        { tiles: ["请", "把", "黑板上的字", "记下来"], py: "Qǐng bǎ hēibǎn shàng de zì jì xiàlái.", en: "Please copy down what's on the blackboard.", hint: "Record-meaning 下来, driven by 把." },
        { tiles: ["天", "突然", "下起", "大雨", "来"], py: "Tiān tūrán xià qǐ dàyǔ lái.", en: "It suddenly started to pour.", hint: "Start-meaning 起来 with the rain splitting the tail." },
        { tiles: ["十年没见", "我", "差点儿", "没", "认出", "你", "来"], py: "Shí nián méi jiàn, wǒ chàdiǎnr méi rèn chū nǐ lái.", en: "Ten years since we met — I almost didn't recognize you.", hint: "Detect-meaning 出来; the person splits the tail: 认出你来." },
        { tiles: ["别", "难过", "一切", "都", "会", "好起来", "的"], py: "Bié nánguò, yíqiè dōu huì hǎo qǐlái de.", en: "Don't be sad — everything will get better.", hint: "好起来 = start improving; 会…的 wraps the prediction." },
        { tiles: ["老师", "一", "进来", "教室里", "就", "安静", "下来", "了"], py: "Lǎoshī yí jìnlái, jiàoshì lǐ jiù ānjìng xiàlái le.", en: "The moment the teacher came in, the classroom quieted down.", hint: "一…就…, then settle-meaning 下来 on 安静." },
        { tiles: ["你", "看起来", "很累", "早点儿", "休息", "吧"], py: "Nǐ kàn qǐlái hěn lèi, zǎo diǎnr xiūxi ba.", en: "You look exhausted — get some rest early.", hint: "Evaluation frame first, advice second." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · The split rule, one more time</h3>
<p>Start-<span class="zh">起来</span> and detect-<span class="zh">出来</span> wrap around their objects: <span class="zh">唱<b class="hl">起</b>歌<b class="hl">来</b> · 聊<b class="hl">起</b>天<b class="hl">来</b> · 认<b class="hl">出</b>你<b class="hl">来</b></span>. If the tile set gives you 起/出 and 来 separately, something belongs in between.</p>
<h3>2 · 起来 vs 上来 vs 出来 after 站/坐</h3>
<p><span class="zh">站起来</span> = stand up (off the seat). <span class="zh">坐下来</span>? No — plain <span class="zh">坐下</span> is enough for “sit down”; <span class="zh">坐下来</span> adds “and settle”. Tiny nuance, favourite distractor.</p>
<h3>3 · Weather and emotions love the start-起来</h3>
<p><span class="zh">下起雨来 · 刮起风来 · 哭了起来 · 大家都鼓起掌来</span>. In stories (Reading part 3), a sudden 起来 marks the plot turning.</p>
<h3>4 · Preview: the potential infix works here too</h3>
<p>Just like result complements, directional tails crack open with 得/不: <span class="zh">看<b class="hl">得</b>出来／看<b class="hl">不</b>出来</span> (can/can't tell), <span class="zh">想不起来</span> (name on the tip of your tongue), <span class="zh">上不去</span> (can't get up there), <span class="zh">吃不下去</span> (can't keep eating). Full system in the next topic — but the exam happily mixes them in here.</p>
<h3>5 · 过去 = the past, 下去 with speeches, 上来 with answers</h3>
<p>Fossils worth collecting: <span class="zh">过去</span> as a noun (the past), <span class="zh">说不下去了</span> (too emotional to continue), <span class="zh">答不上来</span> (called on, mind blank — the answer won't 'come up').</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Word-ordering algorithm: ① verb + path tile first; ② any PLACE glues before 来/去; ③ 把 + definite object stacks before the verb; ④ 了 goes last. For meaning questions, ask: old memory (起来)? new product (出来)? toward now (下来)? into future (下去)? back to normal (过来)?</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions, mostly on the abstract senses — exactly where the real exam puts its weight.",
      items: [
        { q: '<span class="zh">我们在山顶等你呢，你快___吧！</span>', choices: ['<span class="zh">上去</span>', '<span class="zh">上来</span>', '<span class="zh">下来</span>', '<span class="zh">出来</span>'], a: 1, expl: "The speakers are at the summit; the listener moves toward them → 上来. 上去 would mean the speakers are below." },
        { q: '<span class="zh">这个办法不是老师教的，是他自己想___的。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">下来</span>', '<span class="zh">出来</span>', '<span class="zh">过来</span>'], a: 2, expl: "A method he created himself = produced from nothing → 想出来. 想起来 would mean he'd merely remembered it." },
        { q: '<span class="zh">他的电话号码我忘了，怎么也想不___。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">出来</span>', '<span class="zh">下去</span>', '<span class="zh">过去</span>'], a: 0, expl: "The number was once in your memory — retrieval failing = 想不起来. 想不出来 is for failing to invent something new." },
        { q: '<span class="zh">这个讲座太没意思了，我实在听不___了。</span>', choices: ['<span class="zh">下来</span>', '<span class="zh">起来</span>', '<span class="zh">下去</span>', '<span class="zh">出来</span>'], a: 2, expl: "Can't CONTINUE listening into the future → 下去. 下来 looks backward; it can't follow 听不 here." },
        { q: '<span class="zh">要下课了，请大家把书收___，准备考试。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">上来</span>', '<span class="zh">出去</span>', '<span class="zh">过去</span>'], a: 0, expl: "Books go from desks into bags = gather/store 收起来. The storing sense of 起来 — nothing is rising." },
        { q: '<span class="zh">听到这个消息，她突然哭了___。</span>', choices: ['<span class="zh">下来</span>', '<span class="zh">起来</span>', '<span class="zh">出去</span>', '<span class="zh">回来</span>'], a: 1, expl: "Sudden onset of an action = start-起来: 哭了起来. 哭下来 doesn't exist; tears may 流下来, but crying starts up." },
        { q: '<span class="zh">虽然遇到了很多困难，但这三年他都坚持___了。</span>', choices: ['<span class="zh">下去</span>', '<span class="zh">起来</span>', '<span class="zh">下来</span>', '<span class="zh">出来</span>'], a: 2, expl: "这三年…了 — looking back from now at a completed stretch → 坚持下来. 坚持下去 would be advice about the future." },
        { q: '<span class="zh">这份工作虽然累，但我打算继续做___。</span>', choices: ['<span class="zh">下来</span>', '<span class="zh">起来</span>', '<span class="zh">过去</span>', '<span class="zh">下去</span>'], a: 3, expl: "打算 + 继续 = future plan → 做下去. The now→future twin of the previous question." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">他跑回宿舍去了。</span>', '<span class="zh">他跑回去宿舍了。</span>', '<span class="zh">他跑宿舍回去了。</span>', '<span class="zh">他回跑宿舍去了。</span>'], a: 0, expl: "Verb (跑) + path (回) + place (宿舍) + perspective (去): the place always precedes 去." },
        { q: '<span class="zh">她一说话，大家就听___她很紧张。</span>', choices: ['<span class="zh">起来</span>', '<span class="zh">出来</span>', '<span class="zh">下来</span>', '<span class="zh">进去</span>'], a: 1, expl: "Hidden information (her nervousness) extracted from her voice = detect 听出来. 听起来 would give an impression: 听起来很紧张." },
        { q: '<span class="zh">病人还没醒___，医生让我们在外面等。</span>', choices: ['<span class="zh">过去</span>', '<span class="zh">出来</span>', '<span class="zh">过来</span>', '<span class="zh">上来</span>'], a: 2, expl: "Returning to consciousness = back to normal → 醒过来. 过去 is the direction of fainting, not waking." },
        { q: '<span class="zh">这双鞋看___不错，多少钱？</span>', choices: ['<span class="zh">下来</span>', '<span class="zh">出来</span>', '<span class="zh">过去</span>', '<span class="zh">起来</span>'], a: 3, expl: "Impression from looking = evaluation frame 看起来 + 不错. (看上去 is a synonym you'll meet in reading — same slot, same meaning.)" }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">趋向补语 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Piece</th><th>Remember</th></tr>
<tr><td>Frame</td><td>V + 上/下/进/出/回/过/起 + <b class="hl">来</b>(toward me) / <b class="hl">去</b>(away) — ✗起去</td></tr>
<tr><td>Place object</td><td><b>Before 来/去, always</b>: 走进教室去 · 回家来</td></tr>
<tr><td>Thing object</td><td>indefinite: 拿出一本书来 ＝ 拿出来一本书 · definite: <b class="hl">把</b>书拿出来</td></tr>
<tr><td class="zh">起来</td><td>① start 哭起来／下起雨来 (splits!) ② store 收起来 ③ seems 看起来·听起来 (no 了) ④ recall 想起来</td></tr>
<tr><td class="zh">下来</td><td>① settle 停下来·安静下来 ② record 记下来·写下来 ③ detach 脱下来 ④ made it to now 坚持下来</td></tr>
<tr><td class="zh">下去</td><td>continue into the future: 说下去 学下去 坚持下去</td></tr>
<tr><td class="zh">出来</td><td>① produce 想出来·做出来 ② detect 看出来·听出来·认出来</td></tr>
<tr><td class="zh">过来 / 过去</td><td>back to normal 醒过来·反应过来 / away from normal 晕过去 · time: 过去了</td></tr>
<tr><td>Killer pairs</td><td>想<b class="hl">起来</b> recall ≠ 想<b class="hl">出来</b> invent · 看<b class="hl">起来</b> seems ≠ 看<b class="hl">出来</b> can tell · 坚持<b class="hl">下来</b> past ≠ 坚持<b class="hl">下去</b> future · 拿<b class="hl">出来</b> container ≠ 拿<b class="hl">起来</b> surface</td></tr>
<tr><td>Preview</td><td>infix 得/不 → potential: 看得出来 / 想不起来 / 上不去 (next topic)</td></tr>
</table></div>`
    }
  ]
});
