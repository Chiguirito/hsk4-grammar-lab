/* HSK 4 Grammar Lab — 比较句 level 2 (comparisons) */
registerPage({
  id: "comparisons",
  zh: "**比较**句",
  title: "Comparisons, level 2 — how much more, exactly?",
  subtitle: "In HSK 3 you learned the basic A比B + adjective. HSK 4 upgrades the whole system: saying HOW MUCH more, negating comparisons correctly, comparing verb phrases, and choosing between 比 / 没有 / 不如 / 跟…一样 — plus the trap that fails more students than any other.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: 比 states a difference — then <span class="zh hl">measures</span> it',
      short: "Big idea",
      html: `
<p>Your HSK 3 sentence <span class="zh">他比我高</span> says only that a difference exists. HSK 4 asks the grown-up question: <b>by how much?</b> The answer always goes <b>after the adjective</b> — that position is the heart of this whole topic.</p>
<div class="pattern">A + <span class="slot">比</span> + B + Adj + <span class="slot">difference</span><small>difference = 一点儿 (a bit) / 得多・多了 (a lot) / an exact amount (三岁, 五十块, 十分钟)</small></div>
<p><span class="zh">他比我高<b class="hl">一点儿</b>。</span> — a bit taller. <span class="zh">他比我高<b class="hl">得多</b>。</span> — much taller. <span class="zh">他比我高<b class="hl">五厘米</b>。</span> — exactly 5&nbsp;cm taller. Same frame, three levels of precision.</p>
<div class="callout cmp"><span class="co-title">🇪🇸 🇩🇪 Mind the order!</span>
Spanish and German put the degree <i>before</i> the adjective: <i>“<b>mucho</b> más alto”</i>, <i>“<b>viel</b> größer”</i>. Chinese does the opposite — the degree comes <b>after</b>: <span class="zh">高<b class="hl">得多</b></span>, never ✗<span class="zh">得多高</span>. And here is a gift: German distinguishes <i>„größer <b>als</b> er“</i> (unequal) from <i>„so groß <b>wie</b> er“</i> (equal) — that is exactly <span class="zh">比</span> vs <span class="zh">跟…一样</span>. If you would say <i>als</i>, use 比; if <i>wie</i>, use 跟…一样.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
The exam loves comparison sentences because one misplaced word ruins them. Expect them in the word-arrangement task and in “find the wrong sentence” reading items.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'Trap #1: no <span class="zh hl">很</span> before the adjective. Ever.',
      short: "The 很 trap",
      html: `
<p>This is the single most common learner error in all of HSK 4. In a 比 sentence, the adjective may NOT take <span class="zh">很 / 非常 / 太 / 真 / 特别</span>:</p>
<p style="text-align:center" class="zh" style="font-size:1.2rem">✗ 他比我<b class="hl">很</b>高。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 他比我高。 ／ 他比我高<b class="hl">得多</b>。</p>
<p>Why? <span class="zh">很</span> measures against a general standard (“tall for a person”), but 比 already measures against B. Two measuring sticks can't fit in one sentence. If you want intensity, put it <b>after</b> the adjective: <span class="zh">高得多 / 高多了</span>.</p>
<h3>The only two intensifiers allowed in front: 更 and 还</h3>
<p><span class="zh">更</span> and <span class="zh">还</span> are special because they <i>build on the comparison</i> instead of replacing it:</p>
<ul>
<li><span class="zh">我很高，但是他比我<b class="hl">更</b>高。</span> — “even taller (than already-tall me)”. Implies B already has the quality.</li>
<li><span class="zh">今天比昨天<b class="hl">还</b>热。</span> — “even hotter than yesterday” — with a flavour of surprise: yesterday was already extreme.</li>
</ul>
<div class="callout warn"><span class="co-title">⚠️ Memorize the slot map</span>
Before the adjective: only <span class="pill">更</span> <span class="pill">还</span>. After the adjective: <span class="pill">一点儿</span> <span class="pill">得多</span> <span class="pill">多了</span> <span class="pill">exact amounts</span>. Everything HSK 4 tests about 比 lives in these two slots.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — the full comparison toolkit",
      short: "Examples",
      intro: "Tap to listen. Watch the position of every degree word: always after the adjective, never before.",
      items: [
        { tag: "一点儿", cn: "这家店的咖啡比那家好喝**一点儿**。", py: "Zhè jiā diàn de kāfēi bǐ nà jiā hǎohē yìdiǎnr.", en: "This shop's coffee is a little better than that one's.", note: "一点儿 = small difference. It NEVER moves in front of 好喝." },
        { tag: "得多", cn: "坐地铁比开车方便**得多**。", py: "Zuò dìtiě bǐ kāichē fāngbiàn de duō.", en: "Taking the subway is much more convenient than driving.", note: "得多 = big difference, neutral tone of voice." },
        { tag: "多了", cn: "吃了药以后，我感觉好**多了**。", py: "Chī le yào yǐhòu, wǒ gǎnjué hǎo duō le.", en: "After taking the medicine I feel much better.", note: "多了 = big difference with a feeling of change — perfect for improvements. The 比-part (比以前) is understood." },
        { tag: "exact", cn: "我弟弟比我小**三岁**。", py: "Wǒ dìdi bǐ wǒ xiǎo sān suì.", en: "My younger brother is three years younger than me.", note: "Exact difference = number + measure word, straight after the adjective." },
        { tag: "exact", cn: "这件衬衫比那件贵**五十块**。", py: "Zhè jiàn chènshān bǐ nà jiàn guì wǔshí kuài.", en: "This shirt is fifty kuai more expensive than that one.", note: "贵五十块 — 'expensive by 50'. English needs 'by'; Chinese just states the amount." },
        { tag: "更", cn: "上海很大，但是北京比上海**更**大。", py: "Shànghǎi hěn dà, dànshì Běijīng bǐ Shànghǎi gèng dà.", en: "Shanghai is big, but Beijing is even bigger.", note: "更 concedes that Shanghai is already big — then tops it." },
        { tag: "还", cn: "昨天已经很冷了，今天比昨天**还**冷。", py: "Zuótiān yǐjīng hěn lěng le, jīntiān bǐ zuótiān hái lěng.", en: "Yesterday was already cold — today is even colder.", note: "还 adds surprise: 'colder than THAT?!'" },
        { tag: "verb", cn: "他跑**得**比我快，可是我游**得**比他快。", py: "Tā pǎo de bǐ wǒ kuài, kěshì wǒ yóu de bǐ tā kuài.", en: "He runs faster than me, but I swim faster than him.", note: "Comparing how someone does something: V得 + 比 + B + adj." },
        { tag: "time", cn: "他今天比平时早到了**十分钟**。", py: "Tā jīntiān bǐ píngshí zǎo dào le shí fēnzhōng.", en: "Today he arrived ten minutes earlier than usual.", note: "早/晚 + verb + amount: the 'how much earlier' comes after the verb." },
        { tag: "quantity", cn: "这个月他比我**多**看了两本书。", py: "Zhège yuè tā bǐ wǒ duō kàn le liǎng běn shū.", en: "This month he read two more books than I did.", note: "Comparing amounts done: 多/少 + verb + amount. 多 goes BEFORE the verb here." }
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "table",
      title: "The degree catalog — what goes after the adjective",
      short: "Degree catalog",
      intro: "Five ways to measure a difference. The first column is the only thing that changes — the 比-frame stays identical.",
      head: ["Degree", "Size of difference", "Example"],
      rows: [
        ['<span class="zh">Adj + 一点儿</span>', 'small — “a bit”', '<span class="zh">今天比昨天暖和<b class="hl">一点儿</b>。</span> <span class="py-hint">Jīntiān bǐ zuótiān nuǎnhuo yìdiǎnr.</span>'],
        ['<span class="zh">Adj + 得多</span>', 'big — “much”', '<span class="zh">飞机比火车快<b class="hl">得多</b>。</span> <span class="py-hint">Fēijī bǐ huǒchē kuài de duō.</span>'],
        ['<span class="zh">Adj + 多了</span>', 'big + change over time', '<span class="zh">他的身体比以前好<b class="hl">多了</b>。</span> <span class="py-hint">Tā de shēntǐ bǐ yǐqián hǎo duō le.</span>'],
        ['<span class="zh">Adj + amount</span>', 'exact number', '<span class="zh">我比他大<b class="hl">两岁</b>。</span> <span class="py-hint">Wǒ bǐ tā dà liǎng suì.</span>'],
        ['<span class="zh">早/晚/多/少 + V + amount</span>', 'exact, with a verb', '<span class="zh">我比他<b class="hl">早</b>来了<b class="hl">十分钟</b>。</span> <span class="py-hint">Wǒ bǐ tā zǎo lái le shí fēnzhōng.</span>'],
        ['<span class="zh">更/还 + Adj</span>', '“even more” (before adj!)', '<span class="zh">这个办法比那个<b class="hl">更</b>好。</span> <span class="py-hint">Zhège bànfǎ bǐ nàge gèng hǎo.</span>']
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "Saying “less than” — the negation family",
      short: "Negation family",
      intro: "Three ways to negate a comparison — and they do NOT mean the same thing. This is prime HSK 4 exam material.",
      tabs: [
        {
          label: "没有…(这么/那么)",
          html: `<p><b>The true opposite of 比.</b> <span class="zh">A没有B高</span> = A doesn't reach B's height → <b>B wins</b>. Add <span class="zh">这么/那么</span> for “as … as that”: <span class="zh">A没有B<b class="hl">那么</b>高</span>. This is the answer the exam usually wants when English says “not as … as”.</p>`,
          examples: [
            { cn: "今年夏天**没有**去年**那么**热。", py: "Jīnnián xiàtiān méiyǒu qùnián nàme rè.", en: "This summer isn't as hot as last year." },
            { cn: "我说汉语说得**没有**他**那么**流利。", py: "Wǒ shuō Hànyǔ shuō de méiyǒu tā nàme liúlì.", en: "I don't speak Chinese as fluently as he does.", note: "Works inside V得 comparisons too — just swap 比 for 没有." }
          ]
        },
        {
          label: "不比 — the subtle one",
          html: `<p><span class="zh">A不比B高</span> does <b>NOT</b> mean “A is shorter than B”! It means “A is <b>not taller</b> than B” — so they're <b>about the same</b>, or A is a little less. You use 不比 to <b>push back against something someone claimed</b>:</p>
<p class="zh" style="font-size:1.1rem">— 他比你高吧？<br>— 我<b class="hl">不比</b>他矮！我们俩差不多高。</p>
<p>“I'm not shorter than him! We're about the same.” If you want plain “A is shorter”, say <span class="zh">A没有B高</span> — never 不比.</p>`,
          examples: [
            { cn: "这儿的东西**不比**大商场便宜，你别白跑一趟。", py: "Zhèr de dōngxi bù bǐ dà shāngchǎng piányi, nǐ bié bái pǎo yí tàng.", en: "Things here are no cheaper than at the big mall — don't make the trip for nothing.", note: "不比…便宜 = same price or more. It corrects the assumption 'markets are cheaper'." }
          ]
        },
        {
          label: "不如 — B wins",
          html: `<p><span class="zh">A不如B(+Adj)</span> = “A can't match B” → <b>B wins</b>, just like 没有. Two special powers: ① the adjective can be dropped, and then it defaults to <span class="zh">好</span>; ② it sounds a bit more written/judgmental — great for opinions and advice.</p>
<div class="pattern">A + <span class="slot">不如</span> + B (+ Adj)<small>no Adj → “A is not as good as B”</small></div>`,
          examples: [
            { cn: "我的口语**不如**他，可是我的听力比他好。", py: "Wǒ de kǒuyǔ bùrú tā, kěshì wǒ de tīnglì bǐ tā hǎo.", en: "My spoken Chinese isn't as good as his, but my listening is better.", note: "No adjective after 他 → '…not as good as his'." },
            { cn: "这么堵车，开车**不如**骑自行车快。", py: "Zhème dǔchē, kāichē bùrú qí zìxíngchē kuài.", en: "With traffic like this, driving isn't as fast as cycling.", note: "不如 + adjective works exactly like 没有…那么." }
          ]
        },
        {
          label: "跟…一样",
          html: `<p>Equality has its own machine: <span class="zh">A<b class="hl">跟</b>B<b class="hl">一样</b>(+Adj)</span>. Without an adjective it means “the same”; with one, “equally Adj”. Negation attaches to 一样: <span class="zh">跟…<b class="hl">不一样</b></span>.</p>`,
          examples: [
            { cn: "这个房间**跟**那个房间**一样**大。", py: "Zhège fángjiān gēn nàge fángjiān yíyàng dà.", en: "This room is just as big as that one." },
            { cn: "我的意见**跟**你的**不一样**。", py: "Wǒ de yìjiàn gēn nǐ de bù yíyàng.", en: "My opinion is different from yours.", note: "不 negates 一样, not 跟: ✗不跟你的一样 sounds wrong here." }
          ]
        },
        {
          label: "像…一样",
          html: `<p><span class="zh">像…一样</span> is the simile cousin — not measuring, but painting: “like a …”. It often follows <span class="zh">得</span> to describe how something is done.</p>`,
          examples: [
            { cn: "他高兴得**像**孩子**一样**跳了起来。", py: "Tā gāoxìng de xiàng háizi yíyàng tiào le qǐlái.", en: "He jumped up happily like a child." },
            { cn: "这里的冬天**像**春天**一样**暖和。", py: "Zhèlǐ de dōngtiān xiàng chūntiān yíyàng nuǎnhuo.", en: "Winter here is as warm as spring.", note: "像 compares by image; 跟…一样 compares by measurement. Often interchangeable, but 像 keeps the poetry." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: "Comparing actions: where does 比 go with 得?",
      short: "V得 + 比",
      html: `
<p>To compare how people <b>do</b> things, you combine 比 with the state complement <span class="zh">V得…</span> you know from HSK 3. Chinese gives you <b>two equally correct word orders</b>:</p>
<div class="pattern">A + V + <span class="slot">得</span> + 比 + B + Adj<small>他跑<b>得</b>比我快。</small></div>
<div class="pattern">A + 比 + B + V + <span class="slot">得</span> + Adj<small>他比我跑<b>得</b>快。</small></div>
<p>Both mean “He runs faster than me.” The 比-phrase simply parks either before the verb or after 得 — pick whichever, but don't mix the pieces (✗<span class="zh">他跑比我得快</span>).</p>
<h3>If the verb has an object, repeat the verb</h3>
<p><span class="zh">她<b class="hl">说</b>汉语<b class="hl">说</b>得比我流利。</span> — object (汉语) after the first verb, 得-comparison after the second. Same rule you learned for plain V得 sentences.</p>
<h3>Comparing quantities of action: 多/少 + V + amount</h3>
<p><span class="zh">他比我<b class="hl">多</b>看了两本书。</span> — “read two books MORE than me”. <span class="zh">我今天比昨天<b class="hl">少</b>睡了一个小时。</span> — “slept one hour LESS”. Note that 多/少 stand <b>before the verb</b> — unlike adjective comparisons, where the amount trails behind. The pattern is: 比 + B + <span class="pill">多/少/早/晚</span> + V + <span class="pill">amount</span>.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
In the word-arrangement task, a 得 tile plus a 比 tile means a verb comparison. Build the verb chunk first (跑得快), then insert 比+B either before the verb or before the adjective.</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions before the deep water. First-try answers count toward your score.",
      items: [
        { q: 'Which sentence is correct?', choices: ['他比我很高。', '他比我非常高。', '他比我更高。', '他比我太高了。'], a: 2, expl: "很/非常/太 are banned before the adjective in 比 sentences. Only 更 and 还 may stand there, because they build on the comparison instead of replacing it." },
        { q: '“This one is a bit more expensive than that one.” Where does <span class="zh">一点儿</span> go?<br><span class="zh">这个 ___ 比 那个 ___ 贵 ___ 。</span>', choices: ["first blank", "second blank", "third blank", "before 比"], a: 2, expl: "Degree words follow the adjective: 这个比那个贵一点儿。 Putting 一点儿 before 贵 is the classic Spanish/German-order mistake." },
        { q: '<span class="zh">我妹妹比我___两岁。</span>', choices: ['<span class="zh">小</span>', '<span class="zh">年轻得</span>', '<span class="zh">更小</span>', '<span class="zh">小得</span>'], a: 0, expl: "Exact differences attach directly to the bare adjective: 小两岁. No 得, and 更 can't combine with an exact amount." },
        { q: '<span class="zh">他不比我高。</span> What do you actually know?', choices: ["He is shorter than me.", "He is about my height, or at most not taller.", "He is much taller than me.", "He refuses to compare."], a: 1, expl: "不比…高 only denies 'taller' — it leaves 'equal' open and usually means 'about the same'. For plain 'shorter', Chinese says 他没有我高." },
        { q: '“I don\'t speak as well as she does.” Best translation?', choices: ['我说得不比她好。', '我说得没有她那么好。', '我不说得她好。', '我说得比她不好。'], a: 1, expl: "'Not as … as' = 没有…(那么). Option A (不比) means 'roughly the same'; D puts 不 in an impossible slot." },
        { q: 'Pick the correct order: <span class="zh">快 / 得 / 跑 / 比我 / 他</span>', choices: ['<span class="zh">他跑得比我快。</span>', '<span class="zh">他比跑我得快。</span>', '<span class="zh">他跑比我得快。</span>', '<span class="zh">他得跑比我快。</span>'], a: 0, expl: "V + 得 stays glued together: 跑得. The 比-phrase slots in after it: 跑得比我快. (他比我跑得快 would also be right — but it's not among the choices.)" }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "Each patient has exactly one comparison disease. Diagnose before you reveal — every one of these mirrors a real HSK distractor.",
      items: [
        { wrong: "他比我很高。", right: "他比我高。／他比我高得多。", py: "Tā bǐ wǒ gāo. / Tā bǐ wǒ gāo de duō.", en: "He is taller than me. / He is much taller than me.", expl: "The #1 trap: 很 may not modify the adjective in a 比 sentence. Intensity goes AFTER the adjective (得多/多了)." },
        { wrong: "这本书比那本一点儿贵。", right: "这本书比那本贵一点儿。", py: "Zhè běn shū bǐ nà běn guì yìdiǎnr.", en: "This book is a bit more expensive than that one.", expl: "一点儿 is a degree tail, not a pre-adjective adverb. Adjective first, difference second — the mirror image of Spanish 'un poco más caro'." },
        { wrong: "今天比昨天冷很多了。", right: "今天比昨天冷多了。", py: "Jīntiān bǐ zuótiān lěng duō le.", en: "Today is much colder than yesterday.", expl: "The set phrases are 得多 and 多了 — there is no ✗很多了 tail. Pick one: 冷得多 or 冷多了." },
        { wrong: "我不比他高，他比我高多了。", right: "我没有他高，他比我高多了。", py: "Wǒ méiyǒu tā gāo, tā bǐ wǒ gāo duō le.", en: "I'm not as tall as he is — he's much taller.", expl: "不比他高 claims 'about the same height' — which the second half contradicts. For a clear 'less than', use 没有…高." },
        { wrong: "今天没有昨天很冷。", right: "今天没有昨天那么冷。", py: "Jīntiān méiyǒu zuótiān nàme lěng.", en: "Today isn't as cold as yesterday.", expl: "很 is just as illegal in 没有-comparisons. The optional filler before the adjective is 这么/那么, nothing else." },
        { wrong: "他比我看了多两本书。", right: "他比我多看了两本书。", py: "Tā bǐ wǒ duō kàn le liǎng běn shū.", en: "He read two more books than I did.", expl: "In quantity-of-action comparisons, 多/少 stands BEFORE the verb: 多看了两本. The amount trails after the object." },
        { wrong: "我的手机跟你的一样不。", right: "我的手机跟你的不一样。", py: "Wǒ de shǒujī gēn nǐ de bù yíyàng.", en: "My phone is different from yours.", expl: "Negation attaches in front of 一样: 跟…不一样. Nothing may follow 一样 except an adjective." },
        { wrong: "坐火车不如坐飞机得快。", right: "坐火车不如坐飞机快。", py: "Zuò huǒchē bùrú zuò fēijī kuài.", en: "Taking the train isn't as fast as flying.", expl: "不如 takes a bare adjective: 不如B快. The 得 belongs to V得 comparisons (跑得快), not here — one machine at a time." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Arrange the tiles. Every item hides one comparison rule — say the rule to yourself as you build.",
      items: [
        { tiles: ["今天", "比", "昨天", "冷", "多了"], py: "Jīntiān bǐ zuótiān lěng duō le.", en: "Today is much colder than yesterday.", hint: "Degree tail after the adjective." },
        { tiles: ["这家", "饭馆的菜", "比", "那家", "好吃", "一点儿"], py: "Zhè jiā fànguǎn de cài bǐ nà jiā hǎochī yìdiǎnr.", en: "This restaurant's food is a bit tastier than that one's.", hint: "一点儿 goes last." },
        { tiles: ["我", "弟弟", "比", "我", "小", "三岁"], py: "Wǒ dìdi bǐ wǒ xiǎo sān suì.", en: "My little brother is three years younger than me.", hint: "Exact difference: bare adjective + amount." },
        { tiles: ["他", "跑得", "比", "我", "快"], py: "Tā pǎo de bǐ wǒ kuài.", en: "He runs faster than I do.", hint: "Two orders are correct — this builder accepts both.", alt: [["他", "比", "我", "跑得", "快"]] },
        { tiles: ["今年", "冬天", "没有", "去年", "那么", "冷"], py: "Jīnnián dōngtiān méiyǒu qùnián nàme lěng.", en: "This winter isn't as cold as last year.", hint: "没有…那么 + adjective = 'not as … as'." },
        { tiles: ["堵车的时候", "开车", "不如", "坐地铁", "方便"], py: "Dǔchē de shíhou, kāichē bùrú zuò dìtiě fāngbiàn.", en: "When traffic is bad, driving isn't as convenient as taking the subway.", hint: "A 不如 B + adjective — B wins." },
        { tiles: ["他", "今天", "比", "平时", "早", "到了", "十分钟"], py: "Tā jīntiān bǐ píngshí zǎo dào le shí fēnzhōng.", en: "Today he arrived ten minutes earlier than usual.", hint: "早 + verb + amount: 'earlier by ten minutes'." },
        { tiles: ["这个", "房间", "跟", "那个", "一样", "大"], py: "Zhège fángjiān gēn nàge yíyàng dà.", en: "This room is just as big as that one.", hint: "Equality machine: 跟…一样 + adjective." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 不比 as a comeback</h3>
<p>不比 almost always answers a spoken or implied claim. <span class="zh">— 你们家乡很小吧？ — 我们家乡<b class="hl">不比</b>北京小！</span> “My hometown is no smaller than Beijing!” Reading passages use it to signal disagreement — if you translate it as “smaller than”, the whole paragraph flips.</p>
<h3>2 · 更 + verbs of liking</h3>
<p>更 isn't just for adjectives: <span class="zh">我喜欢茶，但是我<b class="hl">更</b>喜欢咖啡。</span> — “I like tea, but I like coffee even more.” Also with 想, 希望, 愿意.</p>
<h3>3 · The missing B</h3>
<p>When context makes B obvious, it disappears but the grammar stays: <span class="zh">还是这个好，那个贵<b class="hl">多了</b>。</span> — “…that one is much more expensive (than this one).” Spot the invisible 比这个.</p>
<h3>4 · 跟…差不多</h3>
<p>“About the same” has its own tile: <span class="zh">我的水平跟他<b class="hl">差不多</b>。</span> No 一样 needed — 差不多 replaces it. With an adjective: <span class="zh">跟他差不多高</span>.</p>
<h3>5 · Choosing the right machine — a decision path</h3>
<ul>
<li>A wins → <span class="zh">A比B + Adj (+ difference)</span></li>
<li>B wins → <span class="zh">A没有B(那么) + Adj</span> or <span class="zh">A不如B (+ Adj)</span></li>
<li>Tie → <span class="zh">A跟B一样 (+ Adj)</span> / <span class="zh">A跟B差不多</span></li>
<li>Pushing back on a claim → <span class="zh">A不比B + Adj</span></li>
</ul>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
When two options differ only by 没有 vs 不比, re-read the context: is the speaker plainly ranking things (→ 没有) or contradicting someone (→ 不比)? That one question solves the item.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions at real exam difficulty. Every distractor is a mistake someone actually makes. Aim for 10+.",
      items: [
        { q: '<span class="zh">这次考试比上次___。</span>', choices: ['<span class="zh">很难</span>', '<span class="zh">难多了</span>', '<span class="zh">多难了</span>', '<span class="zh">非常难</span>'], a: 1, expl: "Degree after the adjective: 难多了 'much harder'. 很/非常 are banned; ✗多难了 reverses the set phrase." },
        { q: '<span class="zh">哥哥比我___喜欢运动。</span>', choices: ['<span class="zh">很</span>', '<span class="zh">最</span>', '<span class="zh">更</span>', '<span class="zh">太</span>'], a: 2, expl: "Before the compared word only 更/还 are allowed — and 更 works with verbs of liking too: 更喜欢." },
        { q: 'Which sentence means “The exam was easier than I expected”?', choices: ['<span class="zh">考试比我想的容易一点儿。</span>', '<span class="zh">考试比我想的一点儿容易。</span>', '<span class="zh">考试比我想的很容易。</span>', '<span class="zh">考试一点儿比我想的容易。</span>'], a: 0, expl: "Frame: 比 + B + Adj + 一点儿. The other options misplace the degree word — the single most-tested error." },
        { q: '<span class="zh">这双鞋比那双便宜___。</span> Which does NOT fit the blank?', choices: ['<span class="zh">一点儿</span>', '<span class="zh">得多</span>', '<span class="zh">二十块</span>', '<span class="zh">非常</span>'], a: 3, expl: "After the adjective you may put a small degree, a big degree, or an exact amount — but 非常 belongs before ordinary adjectives, never in a 比 sentence at all." },
        { q: '<span class="zh">他妹妹今年十八岁，他比妹妹大两岁，他多大？</span>', choices: ["16", "18", "20", "22"], a: 2, expl: "比妹妹大两岁 = two years OLDER than his 18-year-old sister → 20. The exam loves hiding arithmetic inside 比 sentences." },
        { q: '“My spoken Chinese isn\'t as good as my classmates\'.” Best sentence?', choices: ['<span class="zh">我的口语不比同学的好。</span>', '<span class="zh">我的口语不如同学的。</span>', '<span class="zh">我的口语比同学的不好。</span>', '<span class="zh">我的口语跟同学的不一样好。</span>'], a: 1, expl: "不如 + B = 'not as good as B' (好 can drop). 不比 would claim 'about the same'; C puts 不 in an illegal slot; D scrambles the equality machine." },
        { q: '<span class="zh">她游泳游得___。</span> Pick the correct completion:', choices: ['<span class="zh">比我好得多</span>', '<span class="zh">比我很好</span>', '<span class="zh">得比我好</span>', '<span class="zh">比我好很多了</span>'], a: 0, expl: "游得 + 比我 + 好得多. B smuggles in 很; C doubles 得; D invents ✗好很多了 — the tails are 得多 OR 多了, never mixed with 很." },
        { q: '<span class="zh">今天我起晚了，比平时___起了半个小时。</span>', choices: ['<span class="zh">晚</span>', '<span class="zh">更晚</span>', '<span class="zh">晚得</span>', '<span class="zh">很晚</span>'], a: 0, expl: "Exact-amount pattern: 比 + B + 晚 + V + amount → 比平时晚起了半个小时. Bare 晚 — no 得, no intensifier." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">北京的冬天比上海冷得多。</span>', '<span class="zh">我家离公司没有你家那么远。</span>', '<span class="zh">这个菜跟那个菜一样好吃。</span>', '<span class="zh">他比我唱歌得好。</span>'], a: 3, expl: "In a V得 comparison the verb must carry 得 directly: 他比我唱得好 or 他唱歌唱得比我好. ✗唱歌得好 breaks the verb–得 bond." },
        { q: '<span class="zh">A：听说你的新手机特别贵。 B：其实___，是同一个价钱。</span>', choices: ['<span class="zh">不比旧的贵</span>', '<span class="zh">没有旧的贵</span>', '<span class="zh">比旧的便宜</span>', '<span class="zh">不如旧的贵</span>'], a: 0, expl: "B is contradicting a claim and then says 'same price' — exactly the job of 不比: 不比旧的贵 'no more expensive than the old one'. 没有/比…便宜 would contradict 同一个价钱." },
        { q: '<span class="zh">妈妈做的饺子___饭馆的好吃。</span> The speaker prefers mom\'s. Which fits?', choices: ['<span class="zh">没有</span>', '<span class="zh">不如</span>', '<span class="zh">比</span>', '<span class="zh">跟</span>'], a: 2, expl: "Mom wins → A比B好吃. 没有/不如 would make the restaurant win; 跟 would need 一样 and declare a tie." },
        { q: 'Arrange: <span class="zh">两个小时 / 比我 / 他 / 多 / 工作了</span>', choices: ['<span class="zh">他比我多工作了两个小时。</span>', '<span class="zh">他比我工作了多两个小时。</span>', '<span class="zh">他多比我工作了两个小时。</span>', '<span class="zh">他比我工作了两个小时多。</span>'], a: 0, expl: "Quantity-of-action: 比 + B + 多 + V + amount. 多 stands before the verb — the same skeleton as 多看了两本书." }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">比较句 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Job</th><th>Pattern</th><th>Example</th></tr>
<tr><td>A wins</td><td>A + <b class="hl">比</b> + B + Adj</td><td>他比我高。</td></tr>
<tr><td>…a bit</td><td>Adj + <b class="hl">一点儿</b></td><td>贵一点儿</td></tr>
<tr><td>…a lot</td><td>Adj + <b class="hl">得多 / 多了</b></td><td>快得多 · 好多了</td></tr>
<tr><td>…exactly</td><td>Adj + <b class="hl">amount</b></td><td>大三岁 · 贵五十块</td></tr>
<tr><td>…even more</td><td><b class="hl">更/还</b> + Adj (before!)</td><td>比我更高</td></tr>
<tr><td>B wins</td><td>A + <b class="hl">没有</b> + B + (那么) Adj / A + <b class="hl">不如</b> + B (+Adj)</td><td>没有他高 · 不如他</td></tr>
<tr><td>“No more than” (rebuttal)</td><td>A + <b class="hl">不比</b> + B + Adj → about the same!</td><td>我不比他矮！</td></tr>
<tr><td>Tie</td><td>A + <b class="hl">跟</b> + B + <b class="hl">一样</b> (+Adj) · 跟…差不多</td><td>跟那个一样大</td></tr>
<tr><td>Simile</td><td><b class="hl">像</b> + B + <b class="hl">一样</b></td><td>像春天一样暖和</td></tr>
<tr><td>Compare actions</td><td>V得 + 比B + Adj ／ 比B + V得 + Adj</td><td>跑得比我快 = 比我跑得快</td></tr>
<tr><td>Compare amounts</td><td>比B + <b class="hl">多/少/早/晚</b> + V + amount</td><td>多看了两本 · 早到了十分钟</td></tr>
<tr><td>☠️ Forbidden</td><td>很/非常/太 before the Adj · degree before the Adj</td><td>✗比我很高 · ✗一点儿贵</td></tr>
</table></div>`
    }
  ]
});
