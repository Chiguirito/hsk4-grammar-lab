/* HSK 4 Grammar Lab — 结果补语 (result complements) */
registerPage({
  id: "result-complements",
  zh: "**结果**补语",
  title: "Result complements — saying what actually happened",
  subtitle: "In HSK 3 you met 吃完 and 看见 as vocabulary. HSK 4 reveals the system behind them: a Chinese verb only names the action — a second syllable must report the result. Master ten little tails and half the listening section unlocks.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: Chinese verbs are <span class="zh hl">action only</span> — the result is a separate word',
      short: "Big idea",
      html: `
<p>Here is the secret that English hides from you: <span class="zh">找</span> does not mean “to find”. It means <b>“to search”</b>. <span class="zh">看</span> means “to direct your eyes at”, not “to see”. <span class="zh">买</span> means “to try to purchase” — the shop might be sold out! To say the action <b>succeeded</b>, Chinese welds a result morpheme onto the verb:</p>
<div class="pattern">Verb + <span class="slot">Result</span> <small>找<b>到</b> = search-and-obtain · 看<b>见</b> = look-and-perceive · 听<b>懂</b> = listen-and-understand. The two syllables fuse into one unbreakable unit.</small></div>
<p>The result slot takes either a <b>verb-like morpheme</b> (<span class="pill">完</span> <span class="pill">好</span> <span class="pill">到</span> <span class="pill">见</span> <span class="pill">住</span> <span class="pill">懂</span> <span class="pill">开</span> <span class="pill">上</span> <span class="pill">掉</span> <span class="pill">光</span> <span class="pill">成</span>) or an <b>adjective</b> (<span class="pill">干净</span> <span class="pill">清楚</span> <span class="pill">饱</span> <span class="pill">错</span> <span class="pill">对</span>).</p>
<div class="callout cmp"><span class="co-title">🇩🇪 🇬🇧 You already own this pattern</span>
German builds result verbs constantly: <i>essen → <b>auf</b>essen</i> (吃 → 吃<b>光</b>), <i>machen → <b>kaputt</b>machen</i> (弄 → 弄<b>坏</b>), <i>schreiben → <b>fertig</b>schreiben</i> (写 → 写<b>完</b>). English does it with particles: <i>eat <b>up</b>, write <b>down</b>, tear <b>apart</b></i>. The Chinese twist: this isn't a quirk of some verbs — it's the <b>default machinery for every completed action</b>, and the exam knows you'll forget the tail.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Listening loves minimal pairs (<span class="zh">买了</span> “went shopping” vs <span class="zh">买到了</span> “actually got it”). Writing needs result complements as 把-sentence endings. And Reading distractors constantly swap 完/好, 到/见, 不/没.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'The mechanics: one welded unit, and everything hangs off the <span class="zh hl">end</span>',
      short: "Mechanics",
      html: `
<p>Four rules run the whole show:</p>
<h3>1 · Verb + Result is one word — nothing squeezes in between</h3>
<p class="zh" style="font-size:1.15rem">✓ 我做<b class="hl">完</b>了作业。 &nbsp;&nbsp; ✗ 我做<s>了</s>完作业。</p>
<p>The only things that will ever be allowed inside are <span class="zh">得/不</span> — that creates the <i>potential</i> complement (<span class="zh">听得懂／听不懂</span>), the next topic. Everything else waits outside.</p>
<h3>2 · <span class="zh">了</span> and <span class="zh">过</span> attach after the complement</h3>
<p class="zh" style="font-size:1.15rem">看完<b class="hl">了</b> · 听懂<b class="hl">了</b> · 我看见<b class="hl">过</b>他一次。</p>
<h3>3 · The object comes after the whole unit</h3>
<p class="zh" style="font-size:1.15rem">我看完<b class="hl">了那本书</b>。 ／ 我看完<b class="hl">那本书</b>了。 ／ <b class="hl">那本书</b>我看完了。(topic first — very natural)</p>
<h3>4 · Negate with <span class="zh">没</span>, never <span class="zh">不</span></h3>
<p>A result either happened or it didn't — that's <span class="zh">没</span> territory: <span class="zh">我<b class="hl">没</b>听懂。</span> The complement <b>stays</b> in the negative: ✗<span class="zh">没听</span> when you mean ✓<span class="zh">没听懂</span>.</p>
<div class="callout warn"><span class="co-title">⚠️ The one legal 不: conditionals</span>
In “if…then” threats and promises, 不 + V + C is correct and extremely common: <span class="zh"><b class="hl">不</b>做完作业<b class="hl">就</b>不能玩儿游戏。</span> “If you don't finish your homework, no games.” Also: <span class="zh">不说清楚我就不走。</span> Spot the 就 — it's the signature of this exception.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — the ten tails in action",
      short: "Examples",
      intro: "Tap 🔊 to listen. In each one, ask yourself: what does the sentence claim beyond the bare action?",
      items: [
        { tag: "完", cn: "作业我已经写**完**了，可以出去玩儿了吧？", py: "Zuòyè wǒ yǐjīng xiě wán le, kěyǐ chūqù wánr le ba?", en: "I've already finished my homework — can I go out and play now?", note: "完 = the quantity is used up: nothing left to write." },
        { tag: "好", cn: "饭做**好**了，大家快来吃吧！", py: "Fàn zuò hǎo le, dàjiā kuài lái chī ba!", en: "Dinner is ready — everyone come eat!", note: "做好 = done AND ready to use. 做完 would only say the cooking activity ended." },
        { tag: "到", cn: "我等了半个小时，终于买**到**了两张票。", py: "Wǒ děng le bàn ge xiǎoshí, zhōngyú mǎi dào le liǎng zhāng piào.", en: "I waited half an hour and finally got two tickets.", note: "买 = try to buy; 买到 = mission accomplished. 到 marks attainment." },
        { tag: "见", cn: "你听**见**了吗？好像有人在敲门。", py: "Nǐ tīng jiàn le ma? Hǎoxiàng yǒu rén zài qiāo mén.", en: "Did you hear that? It sounds like someone is knocking.", note: "听 = have your ears open; 听见 = the sound actually registered." },
        { tag: "住", cn: "请大家记**住**这个日期，考试会考。", py: "Qǐng dàjiā jì zhù zhège rìqī, kǎoshì huì kǎo.", en: "Everyone please memorize this date — it'll be on the exam.", note: "住 = fixed in place. 记住 = it stays in your memory instead of slipping away." },
        { tag: "懂", cn: "老师说得很慢，所以我都听**懂**了。", py: "Lǎoshī shuō de hěn màn, suǒyǐ wǒ dōu tīng dǒng le.", en: "The teacher spoke slowly, so I understood everything.", note: "听见 = heard the sound; 听懂 = decoded the meaning. Different results!" },
        { tag: "错", cn: "不好意思，我打**错**电话了。", py: "Bù hǎoyìsi, wǒ dǎ cuò diànhuà le.", en: "Sorry, I dialed the wrong number.", note: "The action happened, but with the wrong result. 打错电话 — set phrase, learn it whole." },
        { tag: "掉", cn: "搬家的时候，我把旧沙发卖**掉**了。", py: "Bānjiā de shíhou, wǒ bǎ jiù shāfā mài diào le.", en: "When I moved, I sold off the old sofa.", note: "掉 = off, away, gone from your life. Notice it sitting in a 把 sentence — its natural habitat." },
        { tag: "光", cn: "孩子们把饼干都吃**光**了，一块也没剩。", py: "Háizimen bǎ bǐnggān dōu chī guāng le, yí kuài yě méi shèng.", en: "The kids ate up ALL the cookies — not one left.", note: "光 = bare, zero remaining. Stronger than 完." },
        { tag: "成", cn: "请把这段话翻译**成**德语。", py: "Qǐng bǎ zhè duàn huà fānyì chéng Déyǔ.", en: "Please translate this paragraph into German.", note: "成 + X = the object turns into X. The X is obligatory." },
        { tag: "adj", cn: "出门以前，妈妈把厨房收拾**干净**了。", py: "Chūmén yǐqián, māma bǎ chúfáng shōushi gānjìng le.", en: "Before going out, Mom tidied the kitchen until it was clean.", note: "A two-syllable adjective works as the result: tidied → with the result 'clean'." },
        { tag: "没", cn: "我没听**清楚**，您能再说一遍吗？", py: "Wǒ méi tīng qīngchu, nín néng zài shuō yí biàn ma?", en: "I didn't catch that clearly — could you say it again?", note: "Negation with 没, and the complement 清楚 survives. Never drop it." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "The essential set — one tab per result",
      short: "The set",
      intro: "These are the results HSK 4 actually tests. Each pairs with a small family of verbs — learn the combinations as units.",
      tabs: [
        {
          label: "完 vs 好",
          html: `<p>The classic trap. <span class="zh hl">完</span> = <b>finished</b>, the quantity is used up. <span class="zh hl">好</span> = <b>done properly, ready for use</b>. You can 写完 an essay that is terrible; 写好 promises it's in good shape. <span class="zh">饭做好了</span> = come and eat; <span class="zh">饭做完了</span> just means the cook stopped cooking.</p><p>Quick test: if the next step is “now we can use it / start”, you want <span class="zh">好</span>: <span class="zh">准备好了吗？票买好了。行李收拾好了。</span></p>`,
          examples: [
            { cn: "票我已经买**好**了，你直接来电影院吧。", py: "Piào wǒ yǐjīng mǎi hǎo le, nǐ zhíjiē lái diànyǐngyuàn ba.", en: "I've got the tickets sorted — just come straight to the cinema.", note: "买好 = bought and ready, plan can proceed." },
            { cn: "这本书我看**完**了，可以还给你了。", py: "Zhè běn shū wǒ kàn wán le, kěyǐ huán gěi nǐ le.", en: "I've finished this book — I can give it back to you now.", note: "Pages used up → 完." },
            { cn: "都十二点了，你的报告还没写**完**吗？", py: "Dōu shí'èr diǎn le, nǐ de bàogào hái méi xiě wán ma?", en: "It's already twelve — you still haven't finished your report?", note: "Negative: 没 + 写完, complement intact." }
          ]
        },
        {
          label: "到 & 见",
          html: `<p><span class="zh hl">到</span> = <b>attainment</b>: the action reached its goal. <span class="zh">买到 找到 收到 借到 见到 等到 想到</span>. <span class="zh hl">见</span> = <b>perception registered</b>: <span class="zh">看见 听见 梦见 遇见</span>. For seeing/hearing, <span class="zh">看到／听到</span> and <span class="zh">看见／听见</span> are interchangeable.</p>`,
          examples: [
            { cn: "你寄的包裹我昨天收**到**了。", py: "Nǐ jì de bāoguǒ wǒ zuótiān shōu dào le.", en: "I received the package you sent yesterday.", note: "收到 = it arrived in your hands. Standard in emails: 收到！= got it!" },
            { cn: "我在地铁里好像看**见**你们老师了。", py: "Wǒ zài dìtiě lǐ hǎoxiàng kàn jiàn nǐmen lǎoshī le.", en: "I think I saw your teacher in the subway.", note: "Perception happened to you — you weren't searching." },
            { cn: "我找了半天，也没找**到**我的眼镜。", py: "Wǒ zhǎo le bàntiān, yě méi zhǎo dào wǒ de yǎnjìng.", en: "I searched forever but couldn't find my glasses.", note: "找了 = searched (action done); 没找到 = no success. Both halves in one sentence!" }
          ]
        },
        {
          label: "住 & 懂",
          html: `<p><span class="zh hl">住</span> = <b>fixed, held firm</b> — the object stops moving or stays put: <span class="zh">记住</span> (memory holds it), <span class="zh">抓住</span> (grip holds it), <span class="zh">停住</span> (motion halts), <span class="zh">站住！</span> (“Freeze!”). <span class="zh hl">懂</span> = <b>comprehension</b>, and it only follows input verbs: <span class="zh">听懂 看懂</span>.</p>`,
          examples: [
            { cn: "快抓**住**我的手，别松开！", py: "Kuài zhuā zhù wǒ de shǒu, bié sōngkāi!", en: "Quick, grab my hand — don't let go!", note: "抓住 = grabbed AND holding. 抓 alone is just the grabbing motion." },
            { cn: "前面有只猫，车突然停**住**了。", py: "Qiánmiàn yǒu zhī māo, chē tūrán tíng zhù le.", en: "There was a cat ahead — the car suddenly came to a stop.", note: "停住 = came fully to rest." },
            { cn: "这部电影是上海话的，我一句也没看**懂**。", py: "Zhè bù diànyǐng shì Shànghǎihuà de, wǒ yí jù yě méi kàn dǒng.", en: "The movie was in Shanghainese — I didn't understand a single line.", note: "看懂 = watch and get it. 上海话 = Shanghai dialect." }
          ]
        },
        {
          label: "错 & 对",
          html: `<p>Adjectives <span class="zh hl">错</span> (wrong) and <span class="zh hl">对</span> (right) grade the result: <span class="zh">写错 说错 打错 坐错 走错 认错</span> · <span class="zh">猜对 答对 说对</span>. Hugely frequent in daily apologies and exam listening.</p>`,
          examples: [
            { cn: "我们好像走**错**路了，快看看地图。", py: "Wǒmen hǎoxiàng zǒu cuò lù le, kuài kànkan dìtú.", en: "I think we took the wrong road — check the map, quick.", note: "走错路 / 坐错车 / 拿错包 — the everyday-disaster family." },
            { cn: "你猜**对**了，我就是四川人。", py: "Nǐ cāi duì le, wǒ jiùshì Sìchuān rén.", en: "You guessed right — I am indeed from Sichuan.", note: "猜对 / 答对 — quiz-show verbs." },
            { cn: "对不起，我认**错**人了，我以为你是我同学。", py: "Duìbuqǐ, wǒ rèn cuò rén le, wǒ yǐwéi nǐ shì wǒ tóngxué.", en: "Sorry, I mistook you for someone else — I thought you were my classmate.", note: "认错人 = recognize-wrongly. Note 以为 = wrongly think, a perfect partner." }
          ]
        },
        {
          label: "开 & 上",
          html: `<p>A yin-yang pair. <span class="zh hl">开</span> = <b>open / apart</b>: <span class="zh">打开 拉开 切开 分开 离开</span>. <span class="zh hl">上</span> = <b>closed / attached / goal reached</b>: <span class="zh">关上 穿上 戴上 写上 考上 爱上</span>. Yes, 上 does both “shut the window” and “get into university” — the shared idea is <b>contact achieved</b>.</p>`,
          examples: [
            { cn: "请打**开**书，看第三十页。", py: "Qǐng dǎ kāi shū, kàn dì sānshí yè.", en: "Please open your books to page thirty.", note: "打开 works for books, doors, windows, boxes, apps, lights." },
            { cn: "外面太吵了，把窗户关**上**吧。", py: "Wàimiàn tài chǎo le, bǎ chuānghu guān shàng ba.", en: "It's too noisy outside — close the window.", note: "关上 = shut tight, sealed. 上 = contact made." },
            { cn: "她努力了一年，终于考**上**了理想的大学。", py: "Tā nǔlì le yì nián, zhōngyú kǎo shàng le lǐxiǎng de dàxué.", en: "After a year of hard work, she finally got into her dream university.", note: "考上 = tested-and-got-in. Abstract 'attach': you now belong to the school." }
          ]
        },
        {
          label: "掉 & 光",
          html: `<p>The disposal duo, both beloved by 把. <span class="zh hl">掉</span> = <b>off / away / out of your life</b>: <span class="zh">扔掉 卖掉 忘掉 擦掉 脱掉 关掉</span>. <span class="zh hl">光</span> = <b>completely gone, zero left</b>: <span class="zh">吃光 用光 花光 卖光</span>.</p>`,
          examples: [
            { cn: "这些旧报纸没用了，扔**掉**吧。", py: "Zhèxiē jiù bàozhǐ méi yòng le, rēng diào ba.", en: "These old newspapers are useless — throw them out.", note: "扔掉 = throw so that it's gone." },
            { cn: "还没到月底，我的工资就已经花**光**了。", py: "Hái méi dào yuèdǐ, wǒ de gōngzī jiù yǐjīng huā guāng le.", en: "It's not even the end of the month and my salary is already all spent.", note: "花光 = spent down to zero. Painfully useful word." },
            { cn: "把那些不愉快的事都忘**掉**吧。", py: "Bǎ nàxiē bù yúkuài de shì dōu wàng diào ba.", en: "Just forget all those unpleasant things.", note: "掉 works on abstract things too — memories can be thrown away." }
          ]
        },
        {
          label: "成",
          html: `<p><span class="zh hl">成</span> = <b>into a new form</b>, and the new form must be named: <span class="zh">变成 换成 看成 当成 翻译成 写成</span>. It covers both deliberate transformation (translate into German) and mistakes (read 找 as 我).</p>`,
          examples: [
            { cn: "我太累了，把“找”看**成**“我”了。", py: "Wǒ tài lèi le, bǎ “zhǎo” kàn chéng “wǒ” le.", en: "I'm so tired I read 找 as 我.", note: "V + 成 + the wrong thing = classic mistake report. Compare 看错了 (no new form named)." },
            { cn: "请把人民币换**成**欧元。", py: "Qǐng bǎ rénmínbì huàn chéng ōuyuán.", en: "Please change the RMB into euros.", note: "换成 = exchange into. Banks, SIM cards, seats — all 换成." }
          ]
        },
        {
          label: "Adjectives",
          html: `<p>Any fitting adjective can be the result. The HSK 4 core four: <span class="zh hl">干净</span> (clean: 洗干净 打扫干净 擦干净), <span class="zh hl">清楚</span> (clear: 说清楚 看清楚 听清楚 写清楚), <span class="zh hl">饱</span> (full: 吃饱), <span class="zh hl">会</span> (mastered: 学会).</p>`,
          examples: [
            { cn: "衣服都洗**干净**了，晾在阳台上呢。", py: "Yīfu dōu xǐ gānjìng le, liàng zài yángtái shàng ne.", en: "The clothes are all washed clean — they're drying on the balcony.", note: "洗 = the scrubbing; 干净 = the outcome you were after. (晾 liàng = to hang out to dry — HSK6, just recognize it.)" },
            { cn: "吃**饱**了吗？没吃饱再来一碗。", py: "Chī bǎo le ma? Méi chī bǎo zài lái yì wǎn.", en: "Are you full? If not, have another bowl.", note: "饱 describes the eater, not the food — the object is usually dropped." },
            { cn: "我只用了一个月就学**会**骑摩托车了。", py: "Wǒ zhǐ yòng le yí ge yuè jiù xué huì qí mótuōchē le.", en: "It only took me a month to learn to ride a motorbike.", note: "学 = study; 学会 = studied with the result 'can now do it'." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: 'Word order: questions, objects, and the <span class="zh hl">把</span> connection',
      short: "Word order",
      html: `
<h3>1 · Asking whether the result happened</h3>
<p class="zh" style="font-size:1.15rem">你做完作业<b class="hl">了吗</b>？ · 作业做完<b class="hl">了没有</b>？ · 你听<b class="hl">没</b>听懂？</p>
<p>All three work; <span class="zh">…了没有？</span> is the exam's favourite. The answer keeps the complement: <span class="zh">做完了。／还没做完。</span></p>
<h3>2 · Where the object lives</h3>
<p>After the unit (<span class="zh">我看完了那本书</span>), or hoisted to the front as topic (<span class="zh">那本书我看完了</span>). Long objects love the topic position.</p>
<h3>3 · Result complements are the classic 把-endings</h3>
<p>Remember the golden rule from the 把 topic — the verb can't be last? Result complements are the number-one way to satisfy it:</p>
<p class="zh" style="font-size:1.15rem">把房间打扫<b class="hl">干净</b> · 把门关<b class="hl">上</b> · 把这句话翻译<b class="hl">成</b>英文 · 把垃圾扔<b class="hl">掉</b></p>
<h3>4 · Sneak preview: crack the unit open with 得/不</h3>
<p>The welded unit has exactly one seam. Insert <span class="zh">得</span> or <span class="zh">不</span> and you get the <b>potential complement</b>: <span class="zh">听<b class="hl">得</b>懂</span> “can understand” / <span class="zh">听<b class="hl">不</b>懂</span> “can't understand”. Full story two topics from now.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
When a Listening dialogue hinges on success vs failure, the complement carries ALL the information: <span class="zh">我去买票了</span> (went to buy) vs <span class="zh">我买到票了</span> (got them!) vs <span class="zh">没买到</span> (sold out). Train your ear on the tail, not the verb.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions on the mechanics. First-try answers count toward your topic score.",
      items: [
        { q: "Which sentence is correct?", choices: ['<span class="zh">我做了完作业。</span>', '<span class="zh">我了做完作业。</span>', '<span class="zh">我做完了作业。</span>', '<span class="zh">我做完作业了了。</span>'], a: 2, expl: "Verb + result is one welded unit — 了 attaches AFTER it: 做完了. Nothing (except 得/不) goes between 做 and 完." },
        { q: '<span class="zh">对不起，我___听懂你的意思。</span>', choices: ['<span class="zh">不</span>', '<span class="zh">没</span>', '<span class="zh">别</span>', '<span class="zh">没有了</span>'], a: 1, expl: "A result that failed to happen is negated with 没. 不 + result complement only survives in the conditional 不…就 pattern." },
        { q: '<span class="zh">晚饭已经___了，快来吃吧！</span>', choices: ['<span class="zh">做完</span>', '<span class="zh">做好</span>', '<span class="zh">做到</span>', '<span class="zh">做住</span>'], a: 1, expl: "The next step is eating, so the food must be ready for use → 做好. 做完 only says the cooking activity ended — the dish might be a disaster." },
        { q: '<span class="zh">太好了！我的钥匙找___了，原来在沙发下面。</span>', choices: ['<span class="zh">见</span>', '<span class="zh">完</span>', '<span class="zh">到</span>', '<span class="zh">住</span>'], a: 2, expl: "找 = search; success = attainment 到: 找到. 看见/听见 use 见, but 找 pairs with 到." },
        { q: '<span class="zh">这个网站的密码太长了，我总是记不___。</span> (Which result fits?)', choices: ['<span class="zh">住</span>', '<span class="zh">见</span>', '<span class="zh">光</span>', '<span class="zh">成</span>'], a: 0, expl: "住 = fixed in place. 记住 = the memory holds. (You just previewed a potential complement: 记不住 = can't make it stick.)" },
        { q: "Which question form is correct?", choices: ['<span class="zh">你听懂了没有？</span>', '<span class="zh">你听了懂吗？</span>', '<span class="zh">你听懂了没有吗？</span>', '<span class="zh">你不听懂吗？</span>'], a: 0, expl: "V+C+了没有？ is the standard form. 了 never splits the unit (B), 没有 and 吗 don't stack (C), and 不 doesn't negate results (D)." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One disease per patient. Diagnose before you reveal — every bug here is a real HSK distractor.",
      items: [
        { wrong: "我做了完今天的作业。", right: "我做完了今天的作业。", py: "Wǒ zuò wán le jīntiān de zuòyè.", en: "I finished today's homework.", expl: "了 can never split verb + result. The unit 做完 stays welded; 了 hangs on after it." },
        { wrong: "我不看懂这个句子。", right: "我没看懂这个句子。", py: "Wǒ méi kàn dǒng zhège jùzi.", en: "I didn't understand this sentence.", expl: "Failed results take 没, not 不. (不看懂 could only survive in a conditional: 不看懂就别做题.)" },
        { wrong: "他找了一个小时，终于找了他的钱包。", right: "他找了一个小时，终于找到了他的钱包。", py: "Tā zhǎo le yí ge xiǎoshí, zhōngyú zhǎo dào le tā de qiánbāo.", en: "He searched for an hour and finally found his wallet.", expl: "找了 only repeats the searching. 终于 announces success, so you need the attainment tail: 找到了." },
        { wrong: "你说得太快，我没听见懂。", right: "你说得太快，我没听懂。", py: "Nǐ shuō de tài kuài, wǒ méi tīng dǒng.", en: "You speak too fast — I didn't understand.", expl: "One verb, ONE result. 见 (sound registered) and 懂 (meaning decoded) can't stack. Speed is a comprehension problem → 懂." },
        { wrong: "请把房间打扫。", right: "请把房间打扫干净。", py: "Qǐng bǎ fángjiān dǎsǎo gānjìng.", en: "Please clean the room (till it's clean).", expl: "把 forbids a bare final verb — and a result complement is the classic fix. 打扫干净 tells us the state the room must end in." },
        { wrong: "我吃饭饱了。", right: "我吃饱了。", py: "Wǒ chī bǎo le.", en: "I'm full.", expl: "吃饱 is a welded unit and 饱 describes YOU, not the rice — the generic object 饭 is simply dropped. (Topic version 饭我吃饱了 exists but is rare.)" },
        { wrong: "我在门口等了他两个小时，可是没等。", right: "我在门口等了他两个小时，可是没等到。", py: "Wǒ zài ménkǒu děng le tā liǎng ge xiǎoshí, kěshì méi děng dào.", en: "I waited for him at the door for two hours, but he never showed.", expl: "You DID wait (等了), what failed is the attainment — 没等到. The complement must appear in the negative to say what didn't succeed." },
        { wrong: "我听见了你的意思，可是不同意。", right: "我听懂了你的意思，可是不同意。", py: "Wǒ tīng dǒng le nǐ de yìsi, kěshì bù tóngyì.", en: "I understood what you mean, but I don't agree.", expl: "意思 (meaning) is decoded, not heard — comprehension is 懂. 听见 pairs with sounds: 听见敲门声." },
        { wrong: "弟弟今天早上穿袜子错了，一只是黑的，一只是蓝的。", right: "弟弟今天早上穿错袜子了，一只是黑的，一只是蓝的。", py: "Dìdi jīntiān zǎoshang chuān cuò wàzi le, yì zhī shì hēi de, yì zhī shì lán de.", en: "My little brother put on the wrong socks this morning — one black, one blue.", expl: "The result welds onto the VERB, never onto the object: 穿**错**袜子, not 穿袜子错. V+C is one unit and the object always follows the whole thing — same skeleton as 打错电话、走错路." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "好", cn: "她在镜子前面打扮了半个小时，打扮**好**了才出门。", py: "Tā zài jìngzi qiánmiàn dǎban le bàn ge xiǎoshí, dǎban hǎo le cái chūmén.", en: "She spent half an hour in front of the mirror getting ready, and only left once she was all done up.", note: "打扮**好** = styled AND ready — the next step (出门) can start. 打扮完 would only say she stopped fussing." },
        { tag: "住", cn: "小狗一看见我回家，就跑过来抱**住**我的腿不放。", py: "Xiǎogǒu yí kànjiàn wǒ huí jiā, jiù pǎo guòlai bào zhù wǒ de tuǐ bú fàng.", en: "The moment the puppy sees me come home, it runs over and hugs my leg, refusing to let go.", note: "抱 is just the hugging motion; **住** locks the grip in place — same family as 记住、抓住." },
        { tag: "光", cn: "牙膏用**光**了，你去超市的时候帮我带一支新的吧。", py: "Yágāo yòng guāng le, nǐ qù chāoshì de shíhou bāng wǒ dài yì zhī xīn de ba.", en: "The toothpaste is all used up — grab me a new tube when you go to the supermarket.", note: "**光** = zero left. 用完 just ends the using; 用光 reports the tube is empty — which is exactly why you need a new one." },
        { tag: "错", cn: "这次考试我太粗心了，把两道题的答案都写**错**了。", py: "Zhè cì kǎoshì wǒ tài cūxīn le, bǎ liǎng dào tí de dá'àn dōu xiě cuò le.", en: "I was so careless on this exam — I got the answers to two whole questions wrong.", note: "写**错** = the writing happened but with the wrong result. And spot the 把: it demands this result tail — bare 把…写 is illegal." },
        { tag: "adj", cn: "网上买东西的时候，一定要把地址填写**清楚**，不然快递会送**错**地方。", py: "Wǎngshàng mǎi dōngxi de shíhou, yídìng yào bǎ dìzhǐ tiánxiě qīngchu, bùrán kuàidì huì sòng cuò dìfang.", en: "When you shop online, be sure to fill in your address clearly, or the courier will deliver to the wrong place.", note: "Two tails in one line: the adjective result **清楚** closes the 把-clause, and 送**错** names the wrong outcome you're avoiding." },
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — weld the units",
      short: "Builder",
      intro: "Arrange-the-words, exam style. In every item, find the V+C unit first and treat it as one tile in your head.",
      items: [
        { tiles: ["我", "终于", "找到", "工作", "了"], py: "Wǒ zhōngyú zhǎo dào gōngzuò le.", en: "I finally found a job.", hint: "终于 before the verb; the object follows the welded 找到.", alt: [["我", "终于", "找到", "了", "工作"]] },
        { tiles: ["外面", "太吵了", "请", "把", "窗户", "关上"], py: "Wàimiàn tài chǎo le, qǐng bǎ chuānghu guān shàng.", en: "It's too noisy outside — please close the window.", hint: "Reason first, then the 把-machine with 关上 as its ending." },
        { tiles: ["你", "听懂", "老师的话", "了", "吗"], py: "Nǐ tīng dǒng lǎoshī de huà le ma?", en: "Did you understand what the teacher said?", hint: "V+C + object + 了 + 吗.", alt: [["老师的话", "你", "听懂", "了", "吗"]] },
        { tiles: ["我", "还", "没", "写完", "今天的作业"], py: "Wǒ hái méi xiě wán jīntiān de zuòyè.", en: "I still haven't finished today's homework.", hint: "还没 + the intact unit 写完.", alt: [["今天的作业", "我", "还", "没", "写完"], ["我", "今天的作业", "还", "没", "写完"]] },
        { tiles: ["他", "把", "这句话", "翻译成", "英文", "了"], py: "Tā bǎ zhè jù huà fānyì chéng Yīngwén le.", en: "He translated this sentence into English.", hint: "成 needs the new form right after it.", alt: [["他", "把", "这句话", "翻译成", "了", "英文"]] },
        { tiles: ["弟弟", "把", "蛋糕", "都", "吃光", "了"], py: "Dìdi bǎ dàngāo dōu chī guāng le.", en: "Little brother ate up all the cake.", hint: "都 slots in after the object, before the verb — 把 topic déjà vu." },
        { tiles: ["妹妹", "去年", "考上", "了", "有名的大学"], py: "Mèimei qùnián kǎo shàng le yǒumíng de dàxué.", en: "My little sister got into a famous university last year.", hint: "Time word before the verb; 考上 stays welded.", alt: [["去年", "妹妹", "考上", "了", "有名的大学"]] },
        { tiles: ["我", "没", "看清楚", "黑板上的字"], py: "Wǒ méi kàn qīngchu hēibǎn shàng de zì.", en: "I didn't see the characters on the blackboard clearly.", hint: "没 + 看清楚 — the adjective result rides along in the negative.", alt: [["黑板上的字", "我", "没", "看清楚"]] }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 好 beyond “nicely”: agreed & ready</h3>
<p><span class="zh">我们<b class="hl">说好</b>七点见面。</span> — “We agreed to meet at seven.” <span class="zh">说好</span> = talked-until-settled. Likewise <span class="zh">准备<b class="hl">好</b>了吗？</span> — “Ready?”</p>
<h3>2 · Abstract 上: falling in love with universities</h3>
<p><span class="zh">考<b class="hl">上</b>大学</span>, <span class="zh">爱<b class="hl">上</b>了一个人</span>, <span class="zh">穿<b class="hl">上</b>外套</span> — physical or emotional, 上 means contact achieved and now sticking.</p>
<h3>3 · 见 without looking</h3>
<p><span class="zh">梦<b class="hl">见</b></span> (see in a dream) and <span class="zh">遇<b class="hl">见</b></span> (run into) show that 见 marks passive registration — no effort, it just hits you. That's exactly why perception verbs refuse 把.</p>
<h3>4 · 过 stacks after the complement</h3>
<p><span class="zh">我在电视上看<b class="hl">见过</b>这个人。</span> — experience marker 过 follows the whole unit, just like 了.</p>
<h3>5 · Some units are already dictionary words</h3>
<p><span class="zh">完成、打开、离开、记住、觉得</span> started life as verb + result and fused so hard they're now vocabulary entries. Good news: same grammar, no extra rules.</p>
<h3>6 · 弄 — the universal stand-in verb</h3>
<p>Can't remember which verb broke the cup? <span class="zh"><b class="hl">弄</b></span> + result covers it: <span class="zh">弄坏 弄丢 弄脏 弄湿 弄错</span>. You met it in the 把 topic; it lives here.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the word-ordering task, tiles like <span class="zh">翻译成 / 打扫干净 / 关上</span> are pre-welded for you — never try to insert 了 or the object into them. Object goes after, 了 goes after, negation goes way up front.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Real exam difficulty. The distractors are the mistakes your classmates actually make.",
      items: [
        { q: '<span class="zh">房间里太黑了，我什么都没看___。</span>', choices: ['<span class="zh">懂</span>', '<span class="zh">见</span>', '<span class="zh">完</span>', '<span class="zh">错</span>'], a: 1, expl: "Darkness blocks perception itself → 看见. 看懂 would mean you saw fine but couldn't interpret." },
        { q: '<span class="zh">她学了六年汉语，现在能看___中文小说了。</span>', choices: ['<span class="zh">见</span>', '<span class="zh">住</span>', '<span class="zh">懂</span>', '<span class="zh">光</span>'], a: 2, expl: "Novels are decoded, not merely spotted → 看懂. Years of study point at comprehension." },
        { q: '<span class="zh">我等了他一个上午，可是没等___他，只好回家了。</span>', choices: ['<span class="zh">到</span>', '<span class="zh">见</span>', '<span class="zh">住</span>', '<span class="zh">完</span>'], a: 0, expl: "等到 = wait until the person materializes — attainment 到. 等见 doesn't exist; 等完 would treat him like a TV episode." },
        { q: '<span class="zh">外面风很大，快把门关___。</span>', choices: ['<span class="zh">开</span>', '<span class="zh">掉</span>', '<span class="zh">上</span>', '<span class="zh">成</span>'], a: 2, expl: "关上 = shut tight (contact achieved). 关掉 exists too — but for switching OFF devices (关掉电视), not sealing doors against wind." },
        { q: '<span class="zh">这瓶牛奶过期了，快___吧。</span>', choices: ['<span class="zh">扔光</span>', '<span class="zh">扔掉</span>', '<span class="zh">扔见</span>', '<span class="zh">扔住</span>'], a: 1, expl: "掉 = away, out of your life — the disposal result. 光 means 'none left' and needs a quantity to deplete (吃光、卖光)." },
        { q: '<span class="zh">妹妹把我们买的葡萄都吃___了，一个也没给我留。</span>', choices: ['<span class="zh">上</span>', '<span class="zh">到</span>', '<span class="zh">光</span>', '<span class="zh">开</span>'], a: 2, expl: "一个也没留 = zero remaining → 光. This is 光's entire job description." },
        { q: '<span class="zh">他不小心把“休息”的“休”写___了“体”。</span>', choices: ['<span class="zh">成</span>', '<span class="zh">错</span>', '<span class="zh">到</span>', '<span class="zh">给</span>'], a: 0, expl: "The wrong RESULT is named (体), so you need 成 + new form. 写错了 is fine alone, but it can't take the new character as its object." },
        { q: '<span class="zh">妈妈说：___作业就不能看电视。</span>', choices: ['<span class="zh">写没完</span>', '<span class="zh">不写完</span>', '<span class="zh">写不完</span>', '<span class="zh">别写完</span>'], a: 1, expl: "The conditional threat pattern: 不 + V完 + 就…. This is the one place 不 legally negates a result complement. 写不完 means 'can't possibly finish' — different grammar (potential); 写没完 is illegal — 没 may never enter the verb–complement seam (it stays outside: 没写完, which would also work here)." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">我没看清楚那个字。</span>', '<span class="zh">他把杯子打破了。</span>', '<span class="zh">她听懂了老师的话。</span>', '<span class="zh">我看没清楚那个字。</span>'], a: 3, expl: "没 negates from OUTSIDE the unit: 没看清楚. Nothing but 得/不 may enter the verb–complement seam." },
        { q: '<span class="zh">哥哥高中毕业后考___了北京大学。</span>', choices: ['<span class="zh">到</span>', '<span class="zh">上</span>', '<span class="zh">见</span>', '<span class="zh">好</span>'], a: 1, expl: "考上 = tested and got in — the fixed collocation for admission. 考到 is heard for scores/certificates, but universities take 上." },
        { q: '<span class="zh">你放心，你说的话我都记___了。</span>', choices: ['<span class="zh">完</span>', '<span class="zh">见</span>', '<span class="zh">住</span>', '<span class="zh">开</span>'], a: 2, expl: "记住 = it stays fixed in memory. 记完 would mean you finished a note-taking task, not that it stuck." },
        { q: '<span class="zh">这篇文章我看了两遍，可是还是没看___。</span>', choices: ['<span class="zh">见</span>', '<span class="zh">懂</span>', '<span class="zh">住</span>', '<span class="zh">好</span>'], a: 1, expl: "Two read-throughs happened, so seeing isn't the issue — understanding is: 没看懂. Classic 见 vs 懂 trap." },
        { q: "<span class=\"zh\">明天就要去度假了，行李我都准备___了，随时可以出发。</span>", choices: ["<span class=\"zh\">完</span>", "<span class=\"zh\">好</span>", "<span class=\"zh\">到</span>", "<span class=\"zh\">上</span>"], a: 1, expl: "随时可以出发 = the plan can proceed, so the luggage must be ready for use → 准备**好**, the fixed 'ready' collocation. 准备完 would only claim the preparing activity stopped (maybe half the bag is a mess); 准备到 and 准备上 aren't combinations at all." },
        { q: "<span class=\"zh\">车突然停了，站着的乘客马上抓___了旁边的椅子，才没摔倒。</span>", choices: ["<span class=\"zh\">住</span>", "<span class=\"zh\">到</span>", "<span class=\"zh\">上</span>", "<span class=\"zh\">开</span>"], a: 0, expl: "What saves the passenger from 摔倒 (shuāidǎo, to fall over) is a grip that HOLDS — that's **住** = fixed, held firm: 抓住. 抓到 is attainment — catching something you were chasing (抓到小偷 = catch the thief) — not hanging on; 抓上 and 抓开 don't exist as combos." },
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">结果补语 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Result</th><th>Means</th><th>Star combos</th></tr>
<tr><td class="zh">完</td><td>finished, used up</td><td class="zh">吃完 写完 看完 做完</td></tr>
<tr><td class="zh">好</td><td>done properly, ready</td><td class="zh">做好 准备好 说好 买好</td></tr>
<tr><td class="zh">到</td><td>attained, reached</td><td class="zh">买到 找到 收到 等到 想到</td></tr>
<tr><td class="zh">见</td><td>perceived</td><td class="zh">看见 听见 梦见 遇见</td></tr>
<tr><td class="zh">住</td><td>fixed, held firm</td><td class="zh">记住 抓住 停住 站住</td></tr>
<tr><td class="zh">懂</td><td>understood</td><td class="zh">听懂 看懂</td></tr>
<tr><td class="zh">错 / 对</td><td>wrongly / rightly</td><td class="zh">写错 打错 走错 · 猜对 答对</td></tr>
<tr><td class="zh">开 / 上</td><td>open·apart / shut·attached·achieved</td><td class="zh">打开 离开 · 关上 穿上 考上 爱上</td></tr>
<tr><td class="zh">掉 / 光</td><td>off·away / all gone</td><td class="zh">扔掉 忘掉 卖掉 · 吃光 花光</td></tr>
<tr><td class="zh">成</td><td>into X (name the X!)</td><td class="zh">变成 换成 翻译成 看成</td></tr>
<tr><td>adjectives</td><td>resulting state</td><td class="zh">洗干净 说清楚 吃饱 学会</td></tr>
<tr><td>Rules</td><td colspan="2">V+C is welded (only 得/不 may enter) · 了/过 after C · object after C or topicalized · negate with <b class="hl">没</b> (except 不…就 conditionals) · questions: V C 了吗 / 了没有 · 把 sentences love a result as ending</td></tr>
</table></div>`
    }
  ]
});
