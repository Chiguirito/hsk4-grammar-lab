/* HSK 4 Grammar Lab — 程度与状态补语 (degree & state complements) */
registerPage({
  id: "degree-state-complements",
  zh: "程度与状态**补语**",
  title: "Degree & state complements — turning adjectives up to 11",
  subtitle: "In HSK 3 you intensified adjectives from the front: 很累, 非常好, 太贵了. HSK 4 flips the direction — the intensity now hangs off the BACK (累死了, 好得很), and a whole new machine, V + 得 + description, lets you grade how an action was performed. The exam adores both.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: intensity and evaluation move <span class="zh hl">behind</span> the word',
      short: "Big idea",
      html: `
<p>You already own the HSK 3 toolkit: put a degree adverb <b>in front</b> of the adjective — <span class="zh">很累、非常好、真贵</span>. HSK 4 adds two new tails that hang <b>behind</b>:</p>
<div class="pattern">Adj + <span class="slot">degree complement</span><small>累<b>死了</b> · 好<b>极了</b> · 多<b>得很</b> — how INTENSE it is</small></div>
<div class="pattern">V/Adj + <span class="slot">得</span> + description<small>说<b>得很流利</b> · 忙<b>得没时间吃饭</b> — how the action turned out / how far the state goes</small></div>
<p>Mental model: the front slot (<span class="zh">很/非常</span>) is a volume knob you set <b>before</b> speaking; the back slot is a <b>verdict</b> you deliver after the fact — "…and it was THAT intense" / "…and it went THAT well".</p>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 🇬🇧 You already say 死了</span>
German <i>tod<b>müde</b></i>, Spanish <i>muerto de cansancio</i> / <i>me muero de hambre</i>, English <i>bored to death</i> — all three of your languages use "death" as an intensifier, exactly like <span class="zh">累<b class="hl">死了</b>、饿<b class="hl">死了</b></span>. And English <i>"so tired <b>that</b> he couldn't stand up"</i> is precisely <span class="zh">累<b class="hl">得</b>站不起来</span> — 得 plays the role of "so … that".</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The Writing section loves dictating a 得-sentence with a full object (说汉语说得…), and Reading distractors constantly swap 得/地, stack 很 onto 死了, or park the negation on the wrong side of 得.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "The intensity catalog — seven ways to say “SO …”",
      short: "Intensity menu",
      intro: "Ranked roughly from strong to nuclear. Register matters: the exam's reading texts prefer 极了 and 得很; dialogues love 死了 and 得要命.",
      head: ["Pattern", "Strength & register", "Positive / negative?", "Example"],
      rows: [
        ['<span class="zh">Adj + 得很</span>', 'strong · matter-of-fact, a little assertive ("…alright, very!")', 'both', '<span class="zh">放心，他身体好<b class="hl">得很</b>。</span> <span class="py-hint">Fàngxīn, tā shēntǐ hǎo de hěn.</span>'],
        ['<span class="zh">Adj + 极了</span>', 'very strong · neutral, safe everywhere', 'both: 好极了 / 难极了', '<span class="zh">这个主意好<b class="hl">极了</b>！</span> <span class="py-hint">Zhège zhǔyi hǎo jí le!</span>'],
        ['<span class="zh">Adj + 死了</span>', 'extreme · colloquial', 'both! 累死了 and 高兴死了 are equally fine', '<span class="zh">我饿<b class="hl">死了</b>。</span> <span class="py-hint">Wǒ è sǐ le.</span>'],
        ['<span class="zh">Adj + 坏了</span>', 'extreme · colloquial, often shock or excitement', 'mostly negative, but 乐坏了 / 高兴坏了 = overjoyed', '<span class="zh">孩子们饿<b class="hl">坏了</b>。</span> <span class="py-hint">Háizimen è huài le.</span>'],
        ['<span class="zh">Adj + 透了</span>', 'extreme · emphatic (透 tòu = "through and through")', '<b>negative ONLY</b>: 糟透了、伤心透了', '<span class="zh">今天的天气糟<b class="hl">透了</b>。</span> <span class="py-hint">Jīntiān de tiānqì zāo tòu le.</span>'],
        ['<span class="zh">Adj + 得不得了</span>', 'extreme · colloquial (不得了 bùdéliǎo = "unbelievable")', 'both', '<span class="zh">春节的车站人多<b class="hl">得不得了</b>。</span> <span class="py-hint">Chūnjié de chēzhàn rén duō de bùdéliǎo.</span>'],
        ['<span class="zh">Adj + 得要命</span>', 'extreme · very colloquial, loves complaints (要命 yàomìng = "life-threatening")', 'usually unpleasant: 疼得要命、热得要命', '<span class="zh">我牙疼<b class="hl">得要命</b>。</span> <span class="py-hint">Wǒ yá téng de yàomìng.</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — read, listen, absorb",
      short: "Examples",
      intro: "Tap to listen. Watch where the intensity sits: always AFTER the adjective or verb, never both front and back at once.",
      items: [
        { tag: "极了", cn: "今天的天气好**极了**，我们出去走走吧。", py: "Jīntiān de tiānqì hǎo jí le, wǒmen chūqù zǒuzou ba.", en: "The weather today is fantastic — let's go out for a walk.", note: "极了 glues directly onto the adjective. No 得, no 很." },
        { tag: "死了", cn: "我饿**死了**，咱们赶快点菜吧。", py: "Wǒ è sǐ le, zánmen gǎnkuài diǎn cài ba.", en: "I'm starving — let's order right away.", note: "Nobody is dying. 死了 is pure intensity, like English 'starving to death'." },
        { tag: "死了", cn: "听说考试取消了，她高兴**死了**。", py: "Tīngshuō kǎoshì qǔxiāo le, tā gāoxìng sǐ le.", en: "When she heard the exam was cancelled, she was thrilled to bits.", note: "死了 works with GOOD feelings too — 高兴死了、乐死了 are completely normal." },
        { tag: "坏了", cn: "孩子们踢了一下午球，饿**坏了**。", py: "Háizimen tī le yí xiàwǔ qiú, è huài le.", en: "The kids played football all afternoon and got terribly hungry.", note: "坏了 = 'to a terrible degree'. Also 吓坏了 (scared stiff), 急坏了 (worried sick)." },
        { tag: "透了", cn: "这部电影糟**透了**，我看了一半就走了。", py: "Zhè bù diànyǐng zāo tòu le, wǒ kàn le yíbàn jiù zǒu le.", en: "That movie was absolutely awful — I left halfway through.", note: "糟 zāo = terrible. 透了 only amplifies BAD things: 糟透了、坏透了、失望透了." },
        { tag: "得很", cn: "放心吧，爷爷的身体好**得很**。", py: "Fàngxīn ba, yéye de shēntǐ hǎo de hěn.", en: "Don't worry — Grandpa is in great health.", note: "得很 sounds confident, almost 'better than you think'. Common in reassurances." },
        { tag: "不得了", cn: "春节的火车站，人多**得不得了**。", py: "Chūnjié de huǒchēzhàn, rén duō de bùdéliǎo.", en: "At Spring Festival the train stations are unbelievably crowded.", note: "不得了 bùdéliǎo — note the pinyin: bù + dé (2nd tone), so no tone change on 不." },
        { tag: "要命", cn: "我牙疼**得要命**，得马上去看医生。", py: "Wǒ yá téng de yàomìng, děi mǎshàng qù kàn yīshēng.", en: "My tooth hurts like crazy — I need to see a doctor right now.", note: "得要命 is the complaint champion: 疼、热、冷、忙、吵 all love it." },
        { tag: "V得", cn: "她汉语说**得**很流利。", py: "Tā Hànyǔ shuō de hěn liúlì.", en: "She speaks Chinese very fluently.", note: "The state complement: verb + 得 + evaluation. Note the object 汉语 moved in FRONT of the verb." },
        { tag: "V得", cn: "昨天晚上你睡**得**好不好？", py: "Zuótiān wǎnshang nǐ shuì de hǎo bu hǎo?", en: "Did you sleep well last night?", note: "To ask about a state complement: 得 + 好不好, or 得 + 怎么样." },
        { tag: "Adj得", cn: "我最近忙**得**没有时间锻炼。", py: "Wǒ zuìjìn máng de méiyǒu shíjiān duànliàn.", en: "Lately I've been so busy I have no time to exercise.", note: "After an adjective, 得 + clause = 'so Adj that…'. The clause states the consequence." },
        { tag: "Adj得", cn: "听到这个消息，他高兴**得**跳了起来。", py: "Tīngdào zhège xiāoxi, tā gāoxìng de tiào le qǐlái.", en: "Hearing the news, he jumped up with joy.", note: "The classic exam sentence: emotion + 得 + what it made you do." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "concept",
      title: 'The state complement machine: <span class="zh hl">V + 得 + description</span>',
      short: "V得 machine",
      html: `
<p>The state complement evaluates a <b>completed or habitual</b> action: <span class="zh">他跑<b class="hl">得</b>很快</span> — "he runs fast (that's my verdict)". Three rules run this machine:</p>
<h3>1 · 得 must touch the verb — so the object has to move</h3>
<p>You cannot say ✗<span class="zh">他说汉语<s>得</s>很流利</span> — the object 汉语 blocks 得. Two escapes:</p>
<div class="pattern">Repeat the verb: Subj + V + O + <span class="slot">V + 得</span> + description<small><span class="zh">他<b>说</b>汉语<b>说得</b>很流利。</span></small></div>
<div class="pattern">Topicalize the object: (Subj) + O + <span class="slot">V + 得</span> + description<small><span class="zh">他汉语<b>说得</b>很流利。</span> / <span class="zh">汉语他<b>说得</b>很流利。</span></small></div>
<h3>2 · Negation goes AFTER 得, inside the description</h3>
<p class="zh" style="font-size:1.15rem">✓ 他说得<b class="hl">不</b>流利 &nbsp;&nbsp; ✗ 他<s>不</s>说得流利 &nbsp;&nbsp; (and it is 不, never 没 — you are judging, not denying an event)</p>
<h3>3 · Questions ask about the description slot</h3>
<p class="zh" style="font-size:1.15rem">他考<b class="hl">得怎么样</b>？ &nbsp;&nbsp; 她唱<b class="hl">得好不好</b>？ &nbsp;&nbsp; 你睡<b class="hl">得好吗</b>？</p>
<div class="callout warn"><span class="co-title">⚠️ The description usually needs its own 很</span>
A bare adjective after 得 sounds unfinished or contrastive: <span class="zh">他说得好</span> invites "…but she speaks better". Default to <span class="zh">说得<b class="hl">很</b>好</span>, <span class="zh">写得<b class="hl">非常</b>漂亮</span> — some adverb fills the slot.</div>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 Why the verb gets copied</span>
English and German keep the object glued to the verb: "speaks <b>Chinese</b> fluently", „spricht fließend <b>Chinesisch</b>“. Chinese can't hang 得 after an object — so it copies the verb instead: <span class="zh">说汉语<b class="hl">说</b>得很流利</span>. There is no equivalent in your languages; this rule must simply be drilled.</div>`
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "Three look-alikes — 地, potential 得, and Adj + 得",
      short: "Look-alikes",
      intro: "All pronounced de, all near the verb. The exam's favourite trap zone — learn what each one is doing.",
      tabs: [
        {
          label: "地 vs 得",
          html: `<p><span class="zh">地</span> sets the manner <b>before</b> the action happens (an instruction to the verb); <span class="zh">得</span> delivers the verdict <b>after</b> it happened (an evaluation of the verb).</p>
<div class="pattern">manner + <span class="slot">地</span> + V &nbsp;&nbsp;·&nbsp;&nbsp; V + <span class="slot">得</span> + evaluation<small>很流利<b>地</b>说 = to say (it) fluently · 说<b>得</b>很流利 = spoke, and fluently at that</small></div>`,
          examples: [
            { cn: "她很认真**地**准备了这次面试。", py: "Tā hěn rènzhēn de zhǔnbèi le zhè cì miànshì.", en: "She prepared very conscientiously for the interview.", note: "认真 describes HOW she went about it → 地 before the verb." },
            { cn: "面试的时候，她回答**得**非常好。", py: "Miànshì de shíhou, tā huídá de fēicháng hǎo.", en: "In the interview, she answered extremely well.", note: "A verdict on the finished performance → 得 after the verb." }
          ]
        },
        {
          label: "state vs potential",
          html: `<p><span class="zh">说得好</span> is ambiguous: state reading "speaks well" or potential reading "can speak (it) well". Two disambiguators:</p>
<ul>
<li><b>Add 很:</b> <span class="zh">说得<b class="hl">很</b>好</span> can only be the state complement — potential complements never take degree adverbs.</li>
<li><b>Negate:</b> state → <span class="zh">说得<b class="hl">不</b>好</span> (speaks badly); potential → <span class="zh">说<b class="hl">不</b>好</span>, no 得 (isn't able to say it well).</li>
</ul>`,
          examples: [
            { cn: "他写字写**得很**好。", py: "Tā xiě zì xiě de hěn hǎo.", en: "He writes characters very well.", note: "很 forces the state reading — this is an evaluation of his handwriting." },
            { cn: "这么难的字，我写**不**好。", py: "Zhème nán de zì, wǒ xiě bù hǎo.", en: "Characters this hard — I just can't write them well.", note: "No 得 in the negative = potential complement: ability, not evaluation." }
          ]
        },
        {
          label: "Adj + 得 + clause",
          html: `<p>State complements attach to <b>adjectives</b> too. Then the 得-slot holds a whole consequence — English "so … that …":</p>
<div class="pattern">Adj + <span class="slot">得</span> + consequence clause<small>忙得没时间吃饭 · 累得站不起来 · 高兴得跳了起来</small></div>
<p>The consequence can be a verb phrase, a negative clause, even a small sentence. This is the pattern behind half the emotional sentences in HSK 4 reading texts.</p>`,
          examples: [
            { cn: "我累**得**一句话都不想说。", py: "Wǒ lèi de yí jù huà dōu bù xiǎng shuō.", en: "I'm so tired I don't want to say a single word.", note: "得 + (一…都不 clause). Two HSK4 patterns in one sentence!" },
            { cn: "她感动**得**眼泪都流下来了。", py: "Tā gǎndòng de yǎnlèi dōu liú xiàlái le.", en: "She was so moved that tears ran down her face.", note: "感动得… = the emotion, then what it physically caused." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions before the deep end. First-try answers count toward your topic score.",
      items: [
        { q: "Which sentence is correct?", choices: ['<span class="zh">我很累死了。</span>', '<span class="zh">我累死了。</span>', '<span class="zh">我累很死了。</span>', '<span class="zh">我很死累了。</span>'], a: 1, expl: "死了 already turns the volume to maximum — a degree adverb like 很 can NEVER stack on a degree complement. 很累 or 累死了, pick one." },
        { q: '<span class="zh">他汉语___很流利。</span>', choices: ['<span class="zh">说得</span>', '<span class="zh">说地</span>', '<span class="zh">地说</span>', '<span class="zh">说的</span>'], a: 0, expl: "Evaluation AFTER the action → V + 得. 地 would mark manner before a verb; 的 links to nouns. Same sound, three different jobs." },
        { q: "“He doesn't run fast.” Which is right?", choices: ['<span class="zh">他不跑得快。</span>', '<span class="zh">他跑得不快。</span>', '<span class="zh">他跑不得快。</span>', '<span class="zh">他没跑得快。</span>'], a: 1, expl: "Negation lives AFTER 得, inside the description: 跑得不快. Negating the verb (不跑) means he refuses to run at all!" },
        { q: "Which ending can ONLY amplify something negative?", choices: ['<span class="zh">极了</span>', '<span class="zh">死了</span>', '<span class="zh">透了</span>', '<span class="zh">得不得了</span>'], a: 2, expl: "透了 ('through and through') is reserved for bad things: 糟透了、失望透了. 死了/极了/得不得了 happily amplify joy too (高兴死了!)." },
        { q: "Which sentence handles the full object correctly?", choices: ['<span class="zh">他说汉语得很流利。</span>', '<span class="zh">他说汉语说得很流利。</span>', '<span class="zh">他得说汉语很流利。</span>', '<span class="zh">他说得汉语很流利。</span>'], a: 1, expl: "得 must glue directly to the verb, so with an object you repeat the verb: 说汉语说得很流利. (Or topicalize: 他汉语说得很流利.)" },
        { q: '<span class="zh">她高兴___跳了起来。</span>', choices: ['<span class="zh">得</span>', '<span class="zh">地</span>', '<span class="zh">的</span>', '<span class="zh">极</span>'], a: 0, expl: "The jumping is the RESULT of her happiness — 'so happy that she jumped up' → Adj + 得 + consequence clause." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One disease per patient. Diagnose before you reveal — every bug here is a real HSK distractor.",
      items: [
        { wrong: "今天我很累死了。", right: "今天我累死了。", py: "Jīntiān wǒ lèi sǐ le.", en: "I'm dead tired today.", expl: "No 很-stacking: the degree complement 死了 replaces the degree adverb, it doesn't combine with it. 很累 ✓ or 累死了 ✓ — never both." },
        { wrong: "他说汉语得很流利。", right: "他说汉语说得很流利。／他汉语说得很流利。", py: "Tā shuō Hànyǔ shuō de hěn liúlì.", en: "He speaks Chinese very fluently.", expl: "The object 汉语 may not stand between verb and 得. Repeat the verb (说…说得) or move the object up front." },
        { wrong: "她跑得没快。", right: "她跑得不快。", py: "Tā pǎo de bú kuài.", en: "She doesn't run fast.", expl: "Inside the 得-description you are judging a quality, not denying a past event — so the negation is 不, never 没." },
        { wrong: "今天热得极了。", right: "今天热极了。", py: "Jīntiān rè jí le.", en: "It's boiling hot today.", expl: "极了 attaches DIRECTLY to the adjective — no 得. Only 很/不得了/要命 take the 得 bridge: 热得很、热得要命." },
        { wrong: "拿到奖学金，我高兴透了。", right: "拿到奖学金，我高兴极了。／我高兴死了。", py: "Nádào jiǎngxuéjīn, wǒ gāoxìng jí le.", en: "I was overjoyed to get the scholarship.", expl: "透了 only amplifies negative feelings (糟透了、伤心透了). For joy use 极了、死了、坏了 or 得不得了 — all fine with happiness." },
        { wrong: "他慢慢得走进了教室。", right: "他慢慢地走进了教室。", py: "Tā mànmān de zǒu jìn le jiàoshì.", en: "He walked slowly into the classroom.", expl: "Manner set BEFORE the verb takes 地, not 得. Rule of thumb: description-VERB → 地; VERB-得-description → 得." },
        { wrong: "我说得不流利汉语。", right: "我汉语说得不流利。", py: "Wǒ Hànyǔ shuō de bù liúlì.", en: "I don't speak Chinese fluently.", expl: "Nothing may follow the 得-description — the object can't dangle at the end. Park it before the verb: 我汉语说得不流利." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Every item hides one rule from this page — find it before you drag.",
      items: [
        { tiles: ["他", "汉语", "说得", "很", "流利"], py: "Tā Hànyǔ shuō de hěn liúlì.", en: "He speaks Chinese very fluently.", hint: "Topicalized object: park 汉语 before the verb, then V得 + 很 + Adj.", alt: [["汉语", "他", "说得", "很", "流利"]] },
        { tiles: ["今天", "的", "考试", "难", "极了"], py: "Jīntiān de kǎoshì nán jí le.", en: "Today's exam was insanely hard.", hint: "极了 glues straight onto the adjective — nothing in between." },
        { tiles: ["我", "昨天晚上", "睡得", "不太好"], py: "Wǒ zuótiān wǎnshang shuì de bú tài hǎo.", en: "I didn't sleep very well last night.", hint: "Negation after 得: 睡得 + 不太好." },
        { tiles: ["她", "高兴", "得", "跳了", "起来"], py: "Tā gāoxìng de tiào le qǐlái.", en: "She was so happy she jumped up.", hint: "Adj + 得 + consequence clause." },
        { tiles: ["最近", "天气", "热得", "要命"], py: "Zuìjìn tiānqì rè de yàomìng.", en: "The weather has been unbearably hot lately.", hint: "得要命 is one chunk that follows the adjective." },
        { tiles: ["这里", "的", "东西", "贵得", "不得了"], py: "Zhèli de dōngxi guì de bùdéliǎo.", en: "Things here are outrageously expensive.", hint: "Adj + 得不得了 — the whole 不得了 is the complement." },
        { tiles: ["妹妹", "唱歌", "唱得", "好听", "极了"], py: "Mèimei chàng gē chàng de hǎotīng jí le.", en: "My little sister sings wonderfully.", hint: "Full object → repeat the verb: 唱歌唱得…. The evaluation itself can carry 极了." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · Feelings: which intensifier is allowed?</h3>
<p><span class="zh">死了</span> and <span class="zh">极了</span> take <b>any</b> feeling: <span class="zh">高兴死了、气死了、无聊死了</span>. <span class="zh">坏了</span> prefers shock and excitement (<span class="zh">吓坏了、乐坏了、急坏了</span>). <span class="zh">透了</span> is negative-only. If in doubt on the exam, <span class="zh">极了</span> is always safe.</p>
<h3>2 · 有点儿 is the opposite corner</h3>
<p>Mild discomfort goes in FRONT: <span class="zh"><b class="hl">有点儿</b>累</span> "a bit tired". Extreme intensity goes in BACK: <span class="zh">累<b class="hl">死了</b></span>. They never combine: ✗<span class="zh">有点儿累死了</span>.</p>
<h3>3 · The verdict inside 得 can itself be intensified</h3>
<p><span class="zh">他跑得<b class="hl">快极了</b></span>、<span class="zh">她写得<b class="hl">漂亮死了</b></span> — a degree complement nesting inside a state complement. Only the plain front-adverb 很/非常 or one back-intensifier, never two backs: ✗<span class="zh">快极了死了</span>.</p>
<h3>4 · Habits and repeated actions use V得 too</h3>
<p>Not just past events: <span class="zh">他每天都起得很早。</span> — "he gets up early every day". The state complement grades typical performance, which is why it refuses 了 directly after the verb: ✗<span class="zh">起了得很早</span>.</p>
<h3>5 · Register in the writing task</h3>
<p>If the exam asks you to <i>write</i> a sentence for a neutral context, prefer <span class="zh">非常 / 极了 / 得很</span>. Save <span class="zh">死了 / 得要命</span> for dialogues — they are spoken-flavour.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
See a <span class="zh">得</span> tile in the ordering task? First find the verb it belongs to (V得 is usually one tile or two adjacent ones), then ask: is the rest an evaluation (→ after 得) or an object (→ before the verb, possibly forcing a verb copy)? That decision solves the item.</div>`
    },

    /* ------------------------------------------------ 10 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Eleven questions at real exam difficulty. Aim for 9+.",
      items: [
        { q: '<span class="zh">今天我们玩___真开心。</span>', choices: ['<span class="zh">得</span>', '<span class="zh">地</span>', '<span class="zh">的</span>', '<span class="zh">了</span>'], a: 0, expl: "玩 happened, and now you evaluate it: 玩得真开心. 地 would need the description BEFORE the verb." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">我饿死了。</span>', '<span class="zh">他高兴死了。</span>', '<span class="zh">今天很热死了。</span>', '<span class="zh">我累得不得了。</span>'], a: 2, expl: "很 + Adj + 死了 double-intensifies — illegal. Note that 高兴死了 is perfectly fine: 死了 doesn't care whether the feeling is good or bad." },
        { q: "Which is NOT correct?", choices: ['<span class="zh">他唱歌唱得很好。</span>', '<span class="zh">他歌唱得很好。</span>', '<span class="zh">他唱歌得很好。</span>', '<span class="zh">他唱得很好。</span>'], a: 2, expl: "✗唱歌得很好 leaves the object 歌 between verb and 得 — the one forbidden layout. Repeat the verb, topicalize the object, or drop it." },
        { q: "“I was so busy that I forgot to eat.”", choices: ['<span class="zh">我忙得忘了吃饭。</span>', '<span class="zh">我很忙地忘了吃饭。</span>', '<span class="zh">我忙得很忘了吃饭。</span>', '<span class="zh">我忙极了忘吃饭。</span>'], a: 0, expl: "'So Adj that…' = Adj + 得 + consequence clause: 忙得忘了吃饭. 得很 is a closed intensifier — it can't take a clause after it." },
        { q: "Which sentence UNAMBIGUOUSLY evaluates his speaking (state complement)?", choices: ['<span class="zh">他说得很好。</span>', '<span class="zh">他说得好。</span>', '<span class="zh">他说好。</span>', '<span class="zh">他很说得好。</span>'], a: 0, expl: "Bare 说得好 could also be a potential complement ('can say it well'). Adding 很 forces the state reading — potential complements never take degree adverbs." },
        { q: "How do you ask “How did he do on the HSK exam?”", choices: ['<span class="zh">他考得怎么样？</span>', '<span class="zh">他考试得怎么样？</span>', '<span class="zh">他怎么样考得？</span>', '<span class="zh">他考得吗？</span>'], a: 0, expl: "Question word sits in the description slot: 考得 + 怎么样. In choice B the object 试 blocks 得 from the verb (you'd need 考试考得怎么样)." },
        { q: '<span class="zh">老师慢慢___把这个语法解释清楚了。</span>', choices: ['<span class="zh">地</span>', '<span class="zh">得</span>', '<span class="zh">的</span>', '<span class="zh">很</span>'], a: 0, expl: "慢慢 sets the manner BEFORE the action → 地. If the sentence judged afterwards it would be 解释得很清楚." },
        { q: '<span class="zh">他唱得___好听，大家都不想听了。</span>', choices: ['<span class="zh">不</span>', '<span class="zh">没</span>', '<span class="zh">别</span>', '<span class="zh">无</span>'], a: 0, expl: "After 得 you judge a quality → 不好听. 没 negates completed events, 别 is prohibition — neither fits inside a description." },
        { q: "“She was so moved that she cried.”", choices: ['<span class="zh">她感动得哭了。</span>', '<span class="zh">她感动地哭了。</span>', '<span class="zh">她哭得感动了。</span>', '<span class="zh">她感动很哭了。</span>'], a: 0, expl: "The crying is the CONSEQUENCE of the emotion → 感动 + 得 + 哭了. 感动地哭了 would describe the crying style, not the cause." },
        { q: "Which sentence suits a formal written report?", choices: ['<span class="zh">客户对我们的服务满意得要命。</span>', '<span class="zh">客户对我们的服务非常满意。</span>', '<span class="zh">客户对我们的服务满意死了。</span>', '<span class="zh">客户对我们的服务满意得不得了。</span>'], a: 1, expl: "得要命 / 死了 / 得不得了 are spoken-register intensity. Formal writing keeps the plain degree adverb: 非常满意." },
        { q: '<span class="zh">这里的冬天冷___，你要多带几件厚衣服。</span>', choices: ['<span class="zh">得很</span>', '<span class="zh">很得</span>', '<span class="zh">极</span>', '<span class="zh">死</span>'], a: 0, expl: "冷得很 ✓. Bare 极 / 死 are incomplete — those complements need 了: 冷极了、冷死了. And 很得 reverses the bridge." }
      ]
    },

    /* ------------------------------------------------ 11 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">程度・状态补语 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Pattern</th><th>Remember</th></tr>
<tr><td>Direct attach</td><td>Adj + <b class="hl">极了 / 死了 / 坏了 / 透了</b> — no 得, no 很 in front (✗很累死了)</td></tr>
<tr><td>Via 得</td><td>Adj + <b class="hl">得很 / 得不得了 / 得要命</b></td></tr>
<tr><td>Polarity</td><td>死了・极了 = any feeling (高兴死了 ✓) · 坏了 = shock/excitement · <b>透了 = negative only</b></td></tr>
<tr><td>Register</td><td>formal: 非常 / 极了 / 得很 · spoken: 死了 / 得要命 / 得不得了</td></tr>
<tr><td>State compl.</td><td>V + <b class="hl">得</b> + 很 + evaluation: 说得很流利</td></tr>
<tr><td>Full object</td><td>repeat verb: 说汉语<b class="hl">说</b>得很流利 · or topicalize: (他)汉语说得很流利 · ✗说汉语得…</td></tr>
<tr><td>Negation</td><td>AFTER 得, with 不: 说得<b class="hl">不</b>流利 · ✗不说得流利 · ✗说得没流利</td></tr>
<tr><td>Questions</td><td>V得<b class="hl">怎么样</b>？ · V得<b class="hl">好不好</b>？</td></tr>
<tr><td>So…that</td><td>Adj + 得 + clause: 忙得没时间吃饭 · 高兴得跳了起来</td></tr>
<tr><td>地 vs 得</td><td>description + <b class="hl">地</b> + V (manner first) · V + <b class="hl">得</b> + description (verdict after)</td></tr>
<tr><td>vs potential</td><td>说得<b class="hl">很</b>好 = state for sure · negatives: 说得不好 (state) ≠ 说不好 (can't)</td></tr>
</table></div>`
    }
  ]
});
