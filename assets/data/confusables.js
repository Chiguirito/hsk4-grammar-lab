/* HSK 4 Grammar Lab — 近义词辨析 (confusable pairs) */
registerPage({
  id: "confusables",
  zh: "**近义词**辨析",
  title: "Confusable pairs — ten duels, ten winners",
  subtitle: "At HSK 3 one English word usually mapped to one Chinese word. HSK 4 breaks that comfort: suddenly there are two words for 'suddenly', two for 'suit', three for 'certainly'. The Reading cloze task (选词填空) lives on these pairs — and every pair is decided by grammar, not by translation.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: "The big idea: near-synonyms are separated by grammar, not meaning",
      short: "Big idea",
      html: `
<p>When the exam offers you <span class="zh">适合</span> and <span class="zh">合适</span>, both translate as "suitable" — so translation can't save you. What decides the duel is always one of three things:</p>
<ul>
<li><b class="hl">Part of speech</b> — one is a verb, the other an adjective (<span class="zh">适合/合适</span>), or one is only an adverb while the other moonlights as an adjective (<span class="zh">忽然/突然</span>).</li>
<li><b class="hl">Collocation</b> — which nouns it legally marries: <span class="zh">通过<b>考试</b></span> but <span class="zh">经过<b>努力</b></span>; <span class="zh">受到<b>批评</b></span> but <span class="zh">得到<b>帮助</b></span>.</li>
<li><b class="hl">Built-in attitude</b> — <span class="zh">以为</span> secretly means "…and I was wrong"; <span class="zh">往往</span> secretly means "…based on what's been observed".</li>
</ul>
<div class="pattern">meaning ≈ same &nbsp;→&nbsp; ask: <span class="slot">POS?</span> + <span class="slot">collocations?</span> + <span class="slot">hidden attitude?</span><small>Run these three checks and nine of the ten pairs on this page fall over instantly.</small></div>
<div class="callout cmp"><span class="co-title">🇪🇸 🇩🇪 You already live with this</span>
Spanish splits "to know" into <i>saber/conocer</i>; German into <i>wissen/kennen</i> — and English speakers pick wrong constantly. Chinese now does the same thing to YOU, ten times over. The fix is the same one you used for saber/conocer: don't learn the translation, learn the <b>frame</b> each word sits in.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Reading part 1 (选词填空) hands you a word bank and blanks — near-synonym pairs are its favourite ammunition. Listening also drops 以为 on you and expects you to infer that the speaker was WRONG. This page is pure point-farming.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The ten duels at a glance",
      short: "Overview",
      intro: "Your map for this page. Each row is one duel; the litmus test alone decides most exam items.",
      head: ["Pair", "Core difference", "Litmus test"],
      rows: [
        ['<span class="zh">适合 / 合适</span>', 'verb "to suit sth" vs adjective "suitable"', 'Noun right after the blank? → 适合. Sentence ends (or 很___)? → 合适'],
        ['<span class="zh">常常 / 往往</span>', 'personal habit vs observed pattern', 'Future / wish / invitation? → only 常常. Condition stated + regularity? → 往往'],
        ['<span class="zh">一定 / 肯定 / 确定</span>', 'must (modal) vs certainly (also verb: affirm) vs confirm (verb)', '"Pin down / affirm" as an action? → 确定 / 肯定. Pure "must/will surely"? → 一定'],
        ['<span class="zh">以为 / 认为</span>', 'wrongly thought vs neutrally consider', 'Did reality prove the thought wrong? → 以为'],
        ['<span class="zh">忽然 / 突然</span>', 'adverb only vs adverb + adjective', '很/太/得 nearby? → must be 突然'],
        ['<span class="zh">反而 / 相反</span>', 'counter-to-expectation adverb vs "on the contrary" linker', 'Inside one clause, after 不但没? → 反而. Starting a new sentence / 正好___? → 相反'],
        ['<span class="zh">经过 / 通过</span>', 'passing through (place/process/time) vs passing (a test) / by means of', '考试? → 通过. "After a period of…"? → 经过'],
        ['<span class="zh">举行 / 进行</span>', 'hold an event vs carry on a process', 'Object = 会议/比赛/晚会? → 举行. Object = 讨论/研究/检查? → 进行'],
        ['<span class="zh">感到 / 觉得</span>', 'feel + emotion word vs think + opinion clause', 'Whole opinion sentence after the blank? → 觉得'],
        ['<span class="zh">受到 / 得到</span>', 'receive treatment (passive flavour) vs obtain something wanted', '影响/欢迎/批评? → 受到. 帮助/机会/支持? → 得到']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "tabs",
      title: "Duels 1–5: the identity crises",
      short: "Duels 1–5",
      intro: "These five pairs differ mainly in part of speech or hidden attitude. One tab per duel — read the rule, then check it against every example.",
      tabs: [
        {
          label: "适合 vs 合适",
          html: `<p><span class="zh"><b class="hl">适合</b></span> <span class="py-hint">shìhé</span> is a <b>verb</b> and demands an object: <span class="zh">适合<b>你</b></span>, <span class="zh">适合<b>孩子</b></span>, <span class="zh">适合<b>放在客厅</b></span>. <span class="zh"><b class="hl">合适</b></span> <span class="py-hint">héshì</span> is an <b>adjective</b> — it takes 很/太/不 and then the sentence stops: <span class="zh">很合适</span>, <span class="zh">不太合适</span>. ✗<span class="zh">很合适<s>你</s></span> is the single most common learner error in this family.</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
Something follows → <span class="zh">适合</span>. Nothing follows → <span class="zh">合适</span>. (很适合你 is fine — 很 modifies the whole verb phrase.)</div>`,
          examples: [
            { cn: "这双鞋很**适合**你，大小也正**合适**。", py: "Zhè shuāng xié hěn shìhé nǐ, dàxiǎo yě zhèng héshì.", en: "These shoes really suit you, and the size is just right.", note: "Both in one sentence: 适合 + object, 合适 sentence-final." },
            { cn: "他觉得这份工作不**适合**自己。", py: "Tā juéde zhè fèn gōngzuò bú shìhé zìjǐ.", en: "He feels this job isn't right for him.", note: "Object 自己 follows → must be 适合." },
            { cn: "如果你觉得价格**合适**，就把它买下来吧。", py: "Rúguǒ nǐ juéde jiàgé héshì, jiù bǎ tā mǎi xiàlái ba.", en: "If you think the price is right, go ahead and buy it.", note: "价格合适 — adjective as predicate, no object anywhere." }
          ]
        },
        {
          label: "常常 vs 往往",
          html: `<p><span class="zh"><b class="hl">常常</b></span> <span class="py-hint">chángcháng</span> = "often" as a simple frequency: my habits, your habits, hopes for the future. <span class="zh"><b class="hl">往往</b></span> <span class="py-hint">wǎngwǎng</span> = "tends to" — a <b>law you've noticed</b> in how the world works. That's why 往往 needs the circumstances spelled out (when? where? who?) and refuses three things:</p>
<ul>
<li>No future or wishes: ✗<span class="zh">明年我往往去游泳</span> → <span class="zh">常常</span></li>
<li>No commands/invitations: ✗<span class="zh">请往往来</span> → <span class="zh">常常来</span></li>
<li>No ✗<span class="zh">不往往</span> — negation goes after: <span class="zh">往往<b>不</b>是这样</span></li>
</ul>
<div class="callout rule"><span class="co-title">Mini-rule</span>
往往 = "in situation X, it's regularly so" — pattern + stated condition, past/present only. Everything else → 常常.</div>`,
          examples: [
            { cn: "我**常常**去那家咖啡馆坐一下午。", py: "Wǒ chángcháng qù nà jiā kāfēiguǎn zuò yí xiàwǔ.", en: "I often go to that café and sit there all afternoon.", note: "Personal habit, no conditions attached → 常常." },
            { cn: "下雨天，出租车**往往**特别难打。", py: "Xià yǔ tiān, chūzūchē wǎngwǎng tèbié nán dǎ.", en: "On rainy days it tends to be really hard to get a taxi.", note: "Condition (下雨天) + observed regularity → 往往." },
            { cn: "欢迎你以后**常常**来我们家做客。", py: "Huānyíng nǐ yǐhòu chángcháng lái wǒmen jiā zuòkè.", en: "You're welcome to come visit us often.", note: "Invitation about the future — 往往 is impossible here." },
            { cn: "他遇到问题，**往往**先自己想办法。", py: "Tā yùdào wèntí, wǎngwǎng xiān zìjǐ xiǎng bànfǎ.", en: "When he runs into problems, he usually tries to solve them himself first.", note: "遇到问题 is the condition; the tendency is observed, not planned." }
          ]
        },
        {
          label: "一定·肯定·确定",
          html: `<p>Three degrees of certainty, three different grammars:</p>
<ul>
<li><span class="zh"><b class="hl">一定</b></span> <span class="py-hint">yídìng</span> — adverb "must / definitely", loves modal partners: <span class="zh">一定<b>要</b>来</span>, <span class="zh">一定<b>会</b>成功</span>. Bonus: attributive "a certain amount of": <span class="zh">有了<b>一定的</b>经验</span>.</li>
<li><span class="zh"><b class="hl">肯定</b></span> <span class="py-hint">kěndìng</span> — adverb "certainly, I'm sure" (speaker's confident guess): <span class="zh">他<b>肯定</b>还没睡</span>. AND a verb "to affirm/approve": <span class="zh">老师<b>肯定</b>了我们的成绩</span>.</li>
<li><span class="zh"><b class="hl">确定</b></span> <span class="py-hint">quèdìng</span> — verb "to confirm, pin down": <span class="zh"><b>确定</b>时间和地点</span>, <span class="zh">还不能<b>确定</b></span>.</li>
</ul>
<div class="callout rule"><span class="co-title">Mini-rule</span>
Blank is THE VERB of the sentence? → 确定 (fix) or 肯定 (praise/affirm). Blank modifies another verb? → 一定/肯定 as adverbs — 一定 leans "must", 肯定 leans "I bet".</div>`,
          examples: [
            { cn: "明天的会议很重要，你**一定**要参加。", py: "Míngtiān de huìyì hěn zhòngyào, nǐ yídìng yào cānjiā.", en: "Tomorrow's meeting is important — you absolutely must attend.", note: "一定 + 要: obligation, not a guess." },
            { cn: "灯还亮着，他**肯定**还没睡。", py: "Dēng hái liàngzhe, tā kěndìng hái méi shuì.", en: "The light's still on — he's definitely not asleep yet.", note: "Confident deduction → 肯定 (一定 also possible, but 肯定 is the natural 'I bet')." },
            { cn: "老师**肯定**了我们小组的努力。", py: "Lǎoshī kěndìng le wǒmen xiǎozǔ de nǔlì.", en: "The teacher recognized our group's hard work.", note: "肯定 as a VERB (+了+object) — 一定 can never do this." },
            { cn: "旅行的日期还没**确定**下来。", py: "Lǚxíng de rìqī hái méi quèdìng xiàlái.", en: "The travel dates haven't been fixed yet.", note: "确定 = pin down; 下来 complement = settle into place." }
          ]
        },
        {
          label: "以为 vs 认为",
          html: `<p><span class="zh"><b class="hl">认为</b></span> <span class="py-hint">rènwéi</span> is a neutral, slightly formal "consider / be of the opinion". <span class="zh"><b class="hl">以为</b></span> <span class="py-hint">yǐwéi</span> looks identical but carries a bomb: it <b>presupposes the thought was wrong</b>. Saying <span class="zh">我以为你走了</span> automatically means "…but you didn't". The exam loves testing whether you hear that bomb.</p>
<div class="callout cmp"><span class="co-title">🇪🇸 The "creía que" flavour</span>
Spanish <i>"creía que venías"</i> (imperfect!) already whispers "…y no viniste". 以为 is that whisper turned into an explicit rule. German gets there with a particle: <i>„Ich dachte <b>doch</b>, du kommst"</i>. English "I thought you were coming" only implies it — Chinese 以为 guarantees it.</div>
<div class="callout rule"><span class="co-title">Mini-rule</span>
原来/其实/没想到 nearby, or reality contradicts the belief → 以为. Formal opinion, still held → 认为.</div>`,
          examples: [
            { cn: "我**以为**今天不会下雨，就没带伞。", py: "Wǒ yǐwéi jīntiān bú huì xià yǔ, jiù méi dài sǎn.", en: "I thought it wouldn't rain today, so I didn't bring an umbrella.", note: "Implication: it IS raining. Classic 以为 setup." },
            { cn: "大家都**认为**他的建议很有道理。", py: "Dàjiā dōu rènwéi tā de jiànyì hěn yǒu dàolǐ.", en: "Everyone thinks his suggestion makes a lot of sense.", note: "Opinion still valid → 认为. Swap in 以为 and the suggestion becomes nonsense!" },
            { cn: "对不起，我还**以为**你早就知道了呢。", py: "Duìbuqǐ, wǒ hái yǐwéi nǐ zǎo jiù zhīdào le ne.", en: "Sorry — I thought you already knew.", note: "还以为…呢: the standard apology frame for a wrong assumption." }
          ]
        },
        {
          label: "忽然 vs 突然",
          html: `<p>Both mean "suddenly", and in front of a verb they're interchangeable: <span class="zh">天忽然／突然下起雨来</span>. The difference is job flexibility: <span class="zh"><b class="hl">忽然</b></span> <span class="py-hint">hūrán</span> is <b>only an adverb</b>. <span class="zh"><b class="hl">突然</b></span> <span class="py-hint">tūrán</span> is also an <b>adjective</b> — so only 突然 can do these:</p>
<ul>
<li><span class="zh">很突然 · 太突然了 · 这么突然</span> — degree words</li>
<li><span class="zh">事情发生得很<b class="hl">突然</b></span> — inside a 得-complement</li>
<li><span class="zh">突然的变化</span> — before a noun with 的</li>
</ul>
<div class="callout rule"><span class="co-title">Mini-rule</span>
See 很/太/得/的 touching the blank? 突然, no contest. Bare position before a verb? Either one — the exam won't make you choose there.</div>`,
          examples: [
            { cn: "走着走着，天**忽然**下起雨来。", py: "Zǒuzhe zǒuzhe, tiān hūrán xià qǐ yǔ lái.", en: "As we were walking along, it suddenly started to rain.", note: "Adverb slot before the verb — 突然 would be equally fine here." },
            { cn: "他的决定太**突然**了，谁都没想到。", py: "Tā de juédìng tài tūrán le, shéi dōu méi xiǎngdào.", en: "His decision was so sudden — nobody saw it coming.", note: "太…了 needs an adjective → only 突然." },
            { cn: "电话**突然**响了，把我吓了一跳。", py: "Diànhuà tūrán xiǎng le, bǎ wǒ xià le yí tiào.", en: "The phone suddenly rang and made me jump.", note: "吓了一跳 = startled — a set phrase worth stealing." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "tabs",
      title: "Duels 6–10: the collocation battles",
      short: "Duels 6–10",
      intro: "These five are decided by what the word is allowed to combine with. Memorize the collocation lists — they ARE the answer key.",
      tabs: [
        {
          label: "反而 vs 相反",
          html: `<p><span class="zh"><b class="hl">反而</b></span> <span class="py-hint">fǎn'ér</span> is an adverb INSIDE a clause: things developed opposite to what you'd expect <b>in this very situation</b>. Its favourite home is the frame <span class="zh">不但没/不仅没 A，反而 B</span>. <span class="zh"><b class="hl">相反</b></span> <span class="py-hint">xiāngfǎn</span> links or describes: sentence-initial <span class="zh">相反，…</span> ("on the contrary, …"), the set phrase <span class="zh">正好<b>相反</b></span> ("exactly the opposite"), or adjective use <span class="zh">相反的方向</span>.</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
After 不但没, before the verb → 反而. After 正好／跟…, or starting its own sentence with a comma → 相反.</div>`,
          examples: [
            { cn: "吃了药以后，他的病不但没好，**反而**更重了。", py: "Chī le yào yǐhòu, tā de bìng búdàn méi hǎo, fǎn'ér gèng zhòng le.", en: "After taking the medicine, his illness didn't get better — on the contrary, it got worse.", note: "The signature frame: 不但没 A，反而 B." },
            { cn: "我的看法跟你的正好**相反**。", py: "Wǒ de kànfǎ gēn nǐ de zhènghǎo xiāngfǎn.", en: "My view is exactly the opposite of yours.", note: "正好相反 — set phrase, 反而 can't replace it." },
            { cn: "批评没有让他难过；**相反**，他觉得自己进步得更快了。", py: "Pīpíng méiyǒu ràng tā nánguò; xiāngfǎn, tā juéde zìjǐ jìnbù de gèng kuài le.", en: "The criticism didn't upset him; on the contrary, he felt he was improving faster.", note: "相反 + comma bridges two full sentences." }
          ]
        },
        {
          label: "经过 vs 通过",
          html: `<p><span class="zh"><b class="hl">经过</b></span> <span class="py-hint">jīngguò</span> = to pass <b>through</b>: a place (<span class="zh">经过银行</span>), a stretch of time/effort (<span class="zh">经过三年的努力</span>), a procedure (<span class="zh">经过讨论</span>). The result comes <i>after the journey</i>. <span class="zh"><b class="hl">通过</b></span> <span class="py-hint">tōngguò</span> = to get <b>through successfully</b> (<span class="zh">通过考试</span> — pass the exam!) or to achieve something <b>by means of</b> a channel (<span class="zh">通过朋友介绍</span>, <span class="zh">通过网络</span>).</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
考试/检查 to be PASSED → 通过. Duration or effort to be LIVED THROUGH → 经过. A tool or channel → 通过. Bonus: 经过 is also a noun — 事情的经过 "how it all happened".</div>`,
          examples: [
            { cn: "**经过**几个月的练习，他的发音标准多了。", py: "Jīngguò jǐ ge yuè de liànxí, tā de fāyīn biāozhǔn duō le.", en: "After months of practice, his pronunciation is much more standard.", note: "A stretch of effort passed through → 经过." },
            { cn: "她顺利地**通过**了这次考试。", py: "Tā shùnlì de tōngguò le zhè cì kǎoshì.", en: "She passed the exam without a hitch.", note: "通过考试 — THE collocation. ✗经过了考试 in this meaning." },
            { cn: "我们是**通过**一个朋友认识的。", py: "Wǒmen shì tōngguò yí ge péngyou rènshi de.", en: "We met through a friend.", note: "By means of a channel → 通过. Note the 是…的 spotlight on the means." },
            { cn: "去学校的路上会**经过**一家书店。", py: "Qù xuéxiào de lùshang huì jīngguò yì jiā shūdiàn.", en: "On the way to school you pass a bookstore.", note: "Physically passing a place → 经过." }
          ]
        },
        {
          label: "举行 vs 进行",
          html: `<p><span class="zh"><b class="hl">举行</b></span> <span class="py-hint">jǔxíng</span> = to <b>hold an event</b> — something with a date and an audience: <span class="zh">会议、比赛、晚会、婚礼、考试</span>. <span class="zh"><b class="hl">进行</b></span> <span class="py-hint">jìnxíng</span> = to <b>carry on a process</b> — its object is an activity-noun, usually two syllables and verb-flavoured: <span class="zh">进行<b>讨论／研究／调查／检查／比较</b></span>. It also means "to be in progress": <span class="zh">比赛正在<b>进行</b></span>.</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
Could you put it on a poster with a date? → 举行. Is it something you DO for a while? → 进行. (进行 is formal — in speech you'd just say 讨论一下.)</div>`,
          examples: [
            { cn: "学校下星期五晚上**举行**新年音乐会。", py: "Xuéxiào xià xīngqīwǔ wǎnshang jǔxíng xīnnián yīnyuèhuì.", en: "The school is holding a New Year's concert next Friday evening.", note: "音乐会 = poster-able event → 举行." },
            { cn: "我们先对这个问题**进行**讨论。", py: "Wǒmen xiān duì zhège wèntí jìnxíng tǎolùn.", en: "Let's discuss this issue first.", note: "进行 + 讨论: the formal 'carry out' + activity-noun frame, often with 对…." },
            { cn: "比赛正在**进行**，请大家安静。", py: "Bǐsài zhèngzài jìnxíng, qǐng dàjiā ānjìng.", en: "The match is in progress — please keep quiet.", note: "进行 without object = 'be underway'. 举行 can't do this." }
          ]
        },
        {
          label: "感到 vs 觉得",
          html: `<p><span class="zh"><b class="hl">感到</b></span> <span class="py-hint">gǎndào</span> takes an <b>emotion word</b>: <span class="zh">感到高兴／失望／吃惊／骄傲</span>. It's the formal, written-flavour "feel". <span class="zh"><b class="hl">觉得</b></span> <span class="py-hint">juéde</span> takes a whole <b>opinion clause</b>: <span class="zh">觉得<b>这本书不错</b></span>, <span class="zh">觉得<b>他不会来</b></span> — and also handles casual feelings: <span class="zh">觉得有点儿冷</span>.</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
One emotion word after the blank → both work, 感到 sounds formal. A full opinion sentence after the blank → 觉得 (✗感到这个电影很有意思). 感到 does accept short feeling-clauses (感到自己错了), but opinions and judgments belong to 觉得.</div>`,
          examples: [
            { cn: "听到这个消息，大家都**感到**非常吃惊。", py: "Tīngdào zhège xiāoxi, dàjiā dōu gǎndào fēicháng chījīng.", en: "Everyone was very surprised to hear the news.", note: "感到 + degree + emotion word — the formal frame." },
            { cn: "我**觉得**这家饭馆的菜有点儿咸。", py: "Wǒ juéde zhè jiā fànguǎn de cài yǒudiǎnr xián.", en: "I think the food at this restaurant is a bit salty.", note: "A full opinion clause follows → only 觉得." },
            { cn: "第一次站在长城上，他**感到**十分骄傲。", py: "Dì-yī cì zhàn zài Chángchéng shang, tā gǎndào shífēn jiāo'ào.", en: "Standing on the Great Wall for the first time, he felt extremely proud.", note: "骄傲 = emotion word; 十分 = 非常 in formal dress." }
          ]
        },
        {
          label: "受到 vs 得到",
          html: `<p>Both mean "receive", but the direction of luck differs. <span class="zh"><b class="hl">受到</b></span> <span class="py-hint">shòudào</span> = treatment lands ON you (you're the target — good or bad): <span class="zh">受到<b>欢迎／影响／批评／表扬／重视</b></span>. <span class="zh"><b class="hl">得到</b></span> <span class="py-hint">dédào</span> = you END UP WITH something (usually wanted): <span class="zh">得到<b>帮助／支持／机会／消息／提高／锻炼</b></span>.</p>
<div class="callout rule"><span class="co-title">Mini-rule</span>
Learn them as fixed phrases — the exam only ever tests the lists above. Overlap exists (受到支持 ✓ 得到支持 ✓), but 影响/批评/欢迎 insist on 受到, and 帮助/机会 insist on 得到.</div>`,
          examples: [
            { cn: "这位作家的新书**受到**了读者的欢迎。", py: "Zhè wèi zuòjiā de xīn shū shòudào le dúzhě de huānyíng.", en: "The writer's new book has been well received by readers.", note: "受到…的欢迎 — set phrase, the welcome lands ON the book." },
            { cn: "他因为上班迟到，**受到**了批评。", py: "Tā yīnwèi shàngbān chídào, shòudào le pīpíng.", en: "He was criticized for being late to work.", note: "Bad treatment also lands ON you → 受到批评, never 得到批评." },
            { cn: "他**得到**了一个去国外学习的机会。", py: "Tā dédào le yí ge qù guówài xuéxí de jīhuì.", en: "He got an opportunity to study abroad.", note: "A wanted thing ends up in his hands → 得到机会." },
            { cn: "**通过**这次活动，孩子们**得到**了锻炼。", py: "Tōngguò zhè cì huódòng, háizimen dédào le duànliàn.", en: "Through this activity, the kids got some good exercise (in life skills).", note: "Two duels in one sentence: 通过 (channel) + 得到 (gain)." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "examples",
      title: "Mixed model sentences — one winner per duel",
      short: "Examples",
      intro: "Ten sentences, ten duels. For each, say out loud WHY the twin word would lose.",
      items: [
        { tag: "适合", cn: "这种游戏不**适合**三岁以下的孩子。", py: "Zhè zhǒng yóuxì bú shìhé sān suì yǐxià de háizi.", en: "This kind of game isn't suitable for children under three.", note: "Object follows → 适合. ✗不合适三岁以下的孩子." },
        { tag: "往往", cn: "周末的商场**往往**人很多。", py: "Zhōumò de shāngchǎng wǎngwǎng rén hěn duō.", en: "Malls tend to be crowded on weekends.", note: "Condition (周末) + observed pattern → 往往." },
        { tag: "肯定", cn: "别担心，他**肯定**会同意的。", py: "Bié dānxīn, tā kěndìng huì tóngyì de.", en: "Don't worry — he'll definitely agree.", note: "Confident prediction: 肯定会…的. 确定 would need to be the main verb." },
        { tag: "以为", cn: "我**以为**你是南方人呢，原来你是北京人。", py: "Wǒ yǐwéi nǐ shì nánfāngrén ne, yuánlái nǐ shì Běijīngrén.", en: "I thought you were from the south — turns out you're from Beijing!", note: "原来 reveals the truth → the earlier belief must be 以为." },
        { tag: "突然", cn: "事情发生得太**突然**了。", py: "Shìqing fāshēng de tài tūrán le.", en: "It all happened so suddenly.", note: "得 + 太…了 → adjective slot → 突然 only." },
        { tag: "反而", cn: "风不但没停，**反而**越刮越大了。", py: "Fēng búdàn méi tíng, fǎn'ér yuè guā yuè dà le.", en: "The wind didn't stop — on the contrary, it blew harder and harder.", note: "不但没…反而… — the frame in its pure form." },
        { tag: "通过", cn: "**通过**学习太极拳，爷爷的身体好多了。", py: "Tōngguò xuéxí tàijíquán, yéye de shēntǐ hǎo duō le.", en: "Through practicing tai chi, Grandpa's health has improved a lot.", note: "太极拳 is the means/channel → 通过." },
        { tag: "进行", cn: "医生正在给病人**进行**检查。", py: "Yīshēng zhèngzài gěi bìngrén jìnxíng jiǎnchá.", en: "The doctor is examining the patient.", note: "检查 = process noun → 进行. 举行检查 would sound like a checking festival." },
        { tag: "觉得", cn: "我**觉得**坐火车比坐飞机更方便。", py: "Wǒ juéde zuò huǒchē bǐ zuò fēijī gèng fāngbiàn.", en: "I think taking the train is more convenient than flying.", note: "Opinion clause follows → 觉得, not 感到." },
        { tag: "受到", cn: "这部电影**受到**了年轻人的欢迎。", py: "Zhè bù diànyǐng shòudào le niánqīngrén de huānyíng.", en: "This movie is popular with young people.", note: "欢迎 belongs to the 受到 list. 得到欢迎 fails the collocation check." }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "The three litmus tests — how to decide in 5 seconds",
      short: "Litmus tests",
      html: `
<p>Under exam pressure you won't recall paragraphs. Recall three tests instead:</p>
<h3>1 · The object test — "does a noun follow the blank?"</h3>
<p>Verbs eat objects; adjectives don't. <span class="zh">适合<b class="hl">＋你</b></span> ✓, <span class="zh">合适＋你</span> ✗. <span class="zh">通过<b class="hl">＋考试</b></span> ✓. <span class="zh">确定<b class="hl">＋时间</b></span> ✓, <span class="zh">一定＋时间</span> ✗ (一定 is an adverb — it can't be the sentence's verb).</p>
<h3>2 · The 很-test — "can 很/太/得 touch it?"</h3>
<p>Only adjectives accept degree words: <span class="zh">很<b class="hl">合适</b></span> ✓, <span class="zh">太<b class="hl">突然</b></span> ✓, <span class="zh">发生得很<b class="hl">突然</b></span> ✓. But ✗<span class="zh">很忽然</span>, ✗<span class="zh">很往往</span>, ✗<span class="zh">太反而</span> — adverbs melt under 很.</p>
<h3>3 · The time test — "does it survive the future?"</h3>
<p>Some words are chained to the past or to observed reality: <span class="zh">往往</span> (no future, no wishes), <span class="zh">以为</span> (the thought already proved wrong). Their partners are free: <span class="zh">常常</span> and <span class="zh">认为</span> go anywhere. If the sentence says 明天/以后/希望 — cross out 往往 and 以为 immediately.</p>
<div class="callout tip"><span class="co-title">💡 Word-bank strategy for 选词填空</span>
Don't read the passage first. Read the WORD BANK, tag each word's POS and its two favourite collocations, and only then scan the blanks. You'll place half the words before "reading" at all.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — first blood in each duel",
      short: "Checkpoint",
      intro: "Six blanks, six duels. Use the litmus tests, not your translation reflex.",
      items: [
        { q: '<span class="zh">这个房间不大不小，用来开会很___。</span>', choices: ['<span class="zh">适合</span>', '<span class="zh">合适</span>', '<span class="zh">适应</span>', '<span class="zh">合格</span>'], a: 1, expl: "Nothing follows the blank → adjective 合适. (适合 would demand an object; 适应 = adapt to; 合格 = qualified/up to standard.)" },
        { q: '<span class="zh">希望你以后___来我们家玩儿。</span>', choices: ['<span class="zh">往往</span>', '<span class="zh">常常</span>', '<span class="zh">忽然</span>', '<span class="zh">到底</span>'], a: 1, expl: "希望 + 以后 = a wish about the future — 往往 dies instantly (time test). 常常 is the free-range 'often'." },
        { q: '<span class="zh">会议的时间和地点还没___。</span>', choices: ['<span class="zh">肯定</span>', '<span class="zh">一定</span>', '<span class="zh">确定</span>', '<span class="zh">认为</span>'], a: 2, expl: "The blank IS the main verb, meaning 'pin down' → 确定. 一定 is an adverb (object test fails); 肯定-as-verb means 'affirm/praise', not 'fix a date'." },
        { q: '<span class="zh">我___他是老师，原来他是医生。</span>', choices: ['<span class="zh">认为</span>', '<span class="zh">以为</span>', '<span class="zh">觉得</span>', '<span class="zh">知道</span>'], a: 1, expl: "原来 reveals the belief was wrong → 以为, the built-in-mistake verb. 认为/觉得 don't self-destruct like that." },
        { q: '<span class="zh">都四月了，天气___更冷了。</span>', choices: ['<span class="zh">反而</span>', '<span class="zh">相反</span>', '<span class="zh">因此</span>', '<span class="zh">于是</span>'], a: 0, expl: "April should be warm; reality flips the expectation inside one clause → adverb 反而. 相反 would need to start its own sentence with a comma." },
        { q: '<span class="zh">学校下个月要___一场篮球比赛。</span>', choices: ['<span class="zh">进行</span>', '<span class="zh">发生</span>', '<span class="zh">举行</span>', '<span class="zh">出现</span>'], a: 2, expl: "比赛 is a poster-able event → 举行. 进行 wants a process noun (进行比赛 exists but means 'proceed with', odd with 一场…要); 发生/出现 aren't organized by anyone." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — twin-swap surgery",
      short: "Error clinic",
      intro: "Each sentence picked the wrong twin. Identify the duel, apply the mini-rule, swap.",
      items: [
        { wrong: "这条裤子很合适你。", right: "这条裤子很适合你。", py: "Zhè tiáo kùzi hěn shìhé nǐ.", en: "These pants really suit you.", expl: "Object 你 follows → verb 适合. 合适 is an adjective and can never take an object — the #1 error in this family." },
        { wrong: "欢迎你以后往往来我家做客。", right: "欢迎你以后常常来我家做客。", py: "Huānyíng nǐ yǐhòu chángcháng lái wǒ jiā zuòkè.", en: "You're welcome to come visit me often.", expl: "Invitation + future → 往往 fails the time test. It only describes patterns already observed." },
        { wrong: "我认为今天是星期六，原来已经星期天了。", right: "我以为今天是星期六，原来已经星期天了。", py: "Wǒ yǐwéi jīntiān shì xīngqīliù, yuánlái yǐjīng xīngqītiān le.", en: "I thought it was Saturday — turns out it's already Sunday.", expl: "原来 exposes the belief as wrong → 以为. 认为 states an opinion you still stand behind." },
        { wrong: "他的离开太忽然了。", right: "他的离开太突然了。", py: "Tā de líkāi tài tūrán le.", en: "His departure was very sudden.", expl: "太…了 needs an adjective, and 忽然 is adverb-only. Degree words (很/太/得) always point to 突然." },
        { wrong: "我们下午要进行一个会议。", right: "我们下午要举行一个会议。", py: "Wǒmen xiàwǔ yào jǔxíng yí ge huìyì.", en: "We're holding a meeting this afternoon.", expl: "会议 is an event with a time and a room → 举行. 进行 pairs with process nouns: 进行讨论/研究/检查." },
        { wrong: "他经过了这次汉语考试，特别高兴。", right: "他通过了这次汉语考试，特别高兴。", py: "Tā tōngguò le zhè cì Hànyǔ kǎoshì, tèbié gāoxìng.", en: "He passed the Chinese exam and was thrilled.", expl: "Passing an exam = 通过考试, the fixed collocation. 经过 would just mean he walked past the exam room." },
        { wrong: "遇到困难时，他受到了朋友们的帮助。", right: "遇到困难时，他得到了朋友们的帮助。", py: "Yùdào kùnnan shí, tā dédào le péngyoumen de bāngzhù.", en: "When he ran into difficulties, he got help from his friends.", expl: "帮助 lives on the 得到 list (things you gain). 受到 takes treatment that lands on you: 影响/批评/欢迎." },
        { wrong: "问题不但没解决，而且更复杂了。", right: "问题不但没解决，反而更复杂了。", py: "Wèntí búdàn méi jiějué, fǎn'ér gèng fùzá le.", en: "Not only wasn't the problem solved — it actually got more complicated.", expl: "After 不但没 the second clause reverses expectation → 反而. 而且 only stacks same-direction information." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — build with the right twin",
      short: "Builder",
      intro: "Arrange the tiles. The chosen twin is already in there — notice which frame it drags along.",
      items: [
        { tiles: ["这种运动", "不适合", "年纪大的", "人"], py: "Zhè zhǒng yùndòng bú shìhé niánjì dà de rén.", en: "This sport isn't suitable for older people.", hint: "适合 needs its object right behind it." },
        { tiles: ["放假的时候", "火车票", "往往", "很难买"], py: "Fàngjià de shíhou, huǒchēpiào wǎngwǎng hěn nán mǎi.", en: "During the holidays, train tickets tend to be hard to get.", hint: "Condition first, then 往往 before the predicate.", alt: [["火车票", "放假的时候", "往往", "很难买"]] },
        { tiles: ["我以为", "你早就", "回国了", "呢"], py: "Wǒ yǐwéi nǐ zǎo jiù huíguó le ne.", en: "I thought you'd gone back home ages ago!", hint: "以为 + wrong belief + 呢 — the classic surprised apology." },
        { tiles: ["学校", "下个月", "要举行", "运动会"], py: "Xuéxiào xià ge yuè yào jǔxíng yùndònghuì.", en: "The school is holding a sports meet next month.", hint: "Time phrase before the verb; 举行 + event.", alt: [["下个月", "学校", "要举行", "运动会"]] },
        { tiles: ["他的建议", "得到了", "大家的", "支持"], py: "Tā de jiànyì dédào le dàjiā de zhīchí.", en: "His suggestion won everyone's support.", hint: "得到 + 支持: gaining something wanted." },
        { tiles: ["通过", "这件事", "我明白了", "很多道理"], py: "Tōngguò zhè jiàn shì, wǒ míngbai le hěn duō dàolǐ.", en: "Through this experience I came to understand a lot.", hint: "通过 + channel sits up front, before the subject." },
        { tiles: ["这个消息", "来得", "太突然了"], py: "Zhège xiāoxi lái de tài tūrán le.", en: "This news came out of nowhere.", hint: "得-complement + 太…了 → the adjective twin." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 肯定 wearing its verb costume</h3>
<p><span class="zh">经理<b class="hl">肯定</b>了大家的工作。</span> — "the manager gave everyone's work a thumbs-up." Object + 了 = verb, meaning approve/affirm. Also the adjective: <span class="zh">他给了我一个<b class="hl">肯定的</b>回答</span> "a positive answer". 一定 owns neither of these jobs.</p>
<h3>2 · 经过 the noun</h3>
<p><span class="zh">请你把事情的<b class="hl">经过</b>说一遍。</span> — "tell me how it all happened." 的 + 经过 = the course of events. If the blank follows 的, only the noun-capable twin survives.</p>
<h3>3 · 一定 the adjective: "a certain amount of"</h3>
<p><span class="zh">他在这方面有了<b class="hl">一定的</b>经验。</span> — "he's got a fair amount of experience in this area." Not "definite experience"! This attributive 一定 is a Reading-passage regular.</p>
<h3>4 · 还以为…呢 — the politeness machine</h3>
<p>Spoken Chinese uses <span class="zh">我还以为…呢</span> to laugh off your own mistake: <span class="zh">我还以为你生气了呢！</span> "Oh, I thought you were mad at me!" The 还…呢 sandwich softens it. 认为 in that sandwich sounds like a robot lawyer.</p>
<h3>5 · 进行 + 得: process verbs love state complements</h3>
<p><span class="zh">讨论<b class="hl">进行得</b>很顺利。</span> — "the discussion went smoothly." Because 进行 means "to proceed", it happily takes 得-complements. 举行 prefers plain reporting: <span class="zh">运动会上个月举行了</span>.</p>
<h3>6 · Shared collocations — when both twins are legal</h3>
<p><span class="zh">支持</span> and <span class="zh">教育</span> accept both: <span class="zh">得到支持</span> (you gained backing) vs <span class="zh">受到教育</span> (the educating landed on you) vs <span class="zh">得到很好的教育</span> (you ended up with a good education). The exam avoids these grey zones in the answer key — but a distractor may sit in one to tempt you. When both seem fine, check what the OTHER blank needs first.</p>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — fourteen cloze duels",
      short: "Final drill",
      intro: "Real HSK-style cloze sentences, one per duel plus rematches. Aim for 12+.",
      items: [
        { q: '<span class="zh">这个电影不___孩子看，里面有太多打斗。</span>', choices: ['<span class="zh">合适</span>', '<span class="zh">适合</span>', '<span class="zh">适应</span>', '<span class="zh">满意</span>'], a: 1, expl: "孩子看 follows the blank → verb 适合 + object. 合适 can't carry an object. (打斗 dǎdòu = fighting — HSK5 word, free gift.)" },
        { q: '<span class="zh">取得成功的人，___是那些坚持到最后的人。</span>', choices: ['<span class="zh">往往</span>', '<span class="zh">常常</span>', '<span class="zh">永远</span>', '<span class="zh">一直</span>'], a: 0, expl: "A general law observed about the world ('those who succeed tend to be…') → 往往. 常常 counts repetitions of an action, but this sentence states a pattern of identity, not a habit." },
        { q: '<span class="zh">老师在会上___了我们小组的想法。</span>', choices: ['<span class="zh">认为</span>', '<span class="zh">一定</span>', '<span class="zh">肯定</span>', '<span class="zh">觉得</span>'], a: 2, expl: "The blank is the main verb with 了 + object, meaning 'affirmed/approved' → 肯定 the VERB. 一定 is only an adverb; 认为/觉得 need an opinion clause, not applause." },
        { q: '<span class="zh">我们先把见面的时间和地点___下来。</span>', choices: ['<span class="zh">确定</span>', '<span class="zh">肯定</span>', '<span class="zh">一定</span>', '<span class="zh">决心</span>'], a: 0, expl: "把…＋verb＋下来: pin the details down → 确定下来. 肯定 affirms opinions, not calendars; 一定 is an adverb (object test fails)." },
        { q: '<span class="zh">天这么黑，我还___已经到晚上了呢，原来才下午四点。</span>', choices: ['<span class="zh">以为</span>', '<span class="zh">认为</span>', '<span class="zh">感到</span>', '<span class="zh">发现</span>'], a: 0, expl: "还___…呢 + 原来 = the full wrong-assumption sandwich → 以为. 发现 would mean the discovery, not the mistaken belief." },
        { q: '<span class="zh">他走得太___了，我们都没来得及说再见。</span>', choices: ['<span class="zh">忽然</span>', '<span class="zh">马上</span>', '<span class="zh">突然</span>', '<span class="zh">立刻</span>'], a: 2, expl: "太…了 demands an adjective → 突然. 忽然/马上/立刻 are adverbs and melt under degree words (the 很-test)." },
        { q: '<span class="zh">雨不但没停，___下得更大了。</span>', choices: ['<span class="zh">而且</span>', '<span class="zh">反而</span>', '<span class="zh">相反</span>', '<span class="zh">于是</span>'], a: 1, expl: "不但没 A，反而 B — the reversal frame. 而且 is the trap: it stacks same-direction facts and can't flip expectations. 相反 would need its own sentence." },
        { q: '<span class="zh">我的想法跟你的正好___。</span>', choices: ['<span class="zh">反而</span>', '<span class="zh">相反</span>', '<span class="zh">反对</span>', '<span class="zh">相同</span>'], a: 1, expl: "正好相反 = 'exactly opposite', a set phrase. 反而 is an adverb, not a predicate; 反对 = to oppose (verb); 相同 = identical — opposite meaning!" },
        { q: '<span class="zh">___三年的努力，他的汉语终于达到了四级水平。</span>', choices: ['<span class="zh">通过</span>', '<span class="zh">经过</span>', '<span class="zh">进行</span>', '<span class="zh">举行</span>'], a: 1, expl: "三年的努力 is a stretch of time/effort lived through → 经过. 通过 wants a test to pass or a channel to use, not a duration." },
        { q: '<span class="zh">她第一次就___了汉语水平考试。</span>', choices: ['<span class="zh">经过</span>', '<span class="zh">得到</span>', '<span class="zh">通过</span>', '<span class="zh">受到</span>'], a: 2, expl: "Pass the exam = 通过考试, non-negotiable collocation. 经过了考试 just means the exam happened along your route." },
        { q: '<span class="zh">关于这个计划，我们下午再___进一步的讨论。</span>', choices: ['<span class="zh">举行</span>', '<span class="zh">进行</span>', '<span class="zh">举办</span>', '<span class="zh">发生</span>'], a: 1, expl: "讨论 is a process noun → 进行讨论, the formal 'carry out' frame. 举行/举办 hold events with dates; 发生 just happens by itself." },
        { q: '<span class="zh">我___这次旅行安排得特别好。</span>', choices: ['<span class="zh">感到</span>', '<span class="zh">觉得</span>', '<span class="zh">以为</span>', '<span class="zh">受到</span>'], a: 1, expl: "A full opinion clause follows → 觉得. 感到 only accepts single emotion words (感到高兴), and nothing here says the opinion was wrong, so no 以为." },
        { q: '<span class="zh">由于大雪，机场的航班___了很大影响。</span>', choices: ['<span class="zh">得到</span>', '<span class="zh">受到</span>', '<span class="zh">感到</span>', '<span class="zh">遇到</span>'], a: 1, expl: "影响 is on the 受到 list — the influence lands ON the flights. 得到影响 fails the collocation check; 遇到 meets people/problems, not 影响." },
        { q: '<span class="zh">在老师的帮助下，他的口语___了很大的提高。</span>', choices: ['<span class="zh">受到</span>', '<span class="zh">得到</span>', '<span class="zh">通过</span>', '<span class="zh">经过</span>'], a: 1, expl: "提高 is a gain you end up with → 得到提高 (like 得到帮助/机会). 受到 would make the improvement sound like an attack." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">近义词辨析 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Duel</th><th>Winner-picker</th></tr>
<tr><td>适合 / 合适</td><td>object after? → 适合 · sentence ends? → 合适 (✗很合适你)</td></tr>
<tr><td>常常 / 往往</td><td>future·wish·command → 常常 · condition + observed pattern → 往往 · never 不往往</td></tr>
<tr><td>一定 / 肯定 / 确定</td><td>must (adverb) / I bet + VERB "affirm" (肯定了成绩) / VERB "pin down" (确定时间)</td></tr>
<tr><td>以为 / 认为</td><td>proved wrong (原来…!) → 以为 · opinion still held → 认为</td></tr>
<tr><td>忽然 / 突然</td><td>很·太·得·的 nearby → 突然 (adj) · bare pre-verb slot → either</td></tr>
<tr><td>反而 / 相反</td><td>不但没 A，反而 B · 正好相反 / new sentence → 相反</td></tr>
<tr><td>经过 / 通过</td><td>duration·effort·place → 经过 · exam·channel → 通过 (通过考试!) · noun 事情的经过</td></tr>
<tr><td>举行 / 进行</td><td>poster-able event → 举行会议/比赛 · process → 进行讨论/研究/检查 · in progress → 正在进行</td></tr>
<tr><td>感到 / 觉得</td><td>+ emotion word → 感到高兴 (formal) · + opinion clause → 觉得…不错</td></tr>
<tr><td>受到 / 得到</td><td>受到影响·欢迎·批评·表扬 (lands on you) · 得到帮助·机会·支持·提高 (you gain)</td></tr>
</table></div>`
    }
  ]
});
