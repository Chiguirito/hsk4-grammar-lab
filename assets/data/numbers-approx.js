/* HSK 4 Grammar Lab — 数字表达 (numbers, multiples & approximation) */
registerPage({
  id: "numbers-approx",
  zh: "**数字**表达",
  title: "Numbers, multiples & approximation",
  subtitle: "In HSK 3 you counted things: 三本书, 五点半. HSK 4 makes numbers do grammar: multiplying (倍), slicing (分之), and — the exam's favourite — being deliberately vague (左右, 大约, 十来个, 三四个). Each fuzziness word has ONE legal slot, and the Reading section checks whether you know it.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: numbers that <span class="zh hl">scale</span> and numbers that <span class="zh hl">blur</span>',
      short: "Big idea",
      html: `
<p>HSK 4 adds two toolkits to your HSK 3 counting skills. Toolkit one <b>scales</b> a number up or down precisely: <span class="zh"><b class="hl">倍</b></span> multiplies (<span class="zh">三倍</span> = 3×), <span class="zh"><b class="hl">分之</b></span> slices (<span class="zh">三分之一</span> = ⅓). Toolkit two <b>blurs</b> a number on purpose: <span class="zh">三十岁<b class="hl">左右</b></span>, <span class="zh"><b class="hl">大约</b>三十岁</span>, <span class="zh">十<b class="hl">来</b>个</span>, <span class="zh">三<b class="hl">四</b>个</span> — "thirty-ish", "ten or so", "three or four".</p>
<div class="pattern">exact number + <span class="slot">scaling word</span> (倍 · 分之) &nbsp;·&nbsp; <span class="slot">blur word</span> + number <b>or</b> number + <span class="slot">blur word</span><small>Every blur word is glued to ONE side of the number. Learning the side = learning the grammar.</small></div>
<p>Before the fun starts, one mindshift you can't skip: <b>big numbers group by four zeros, not three</b>.</p>
<ul>
<li><span class="zh">万</span> <span class="py-hint">wàn</span> = 10,000 &nbsp;·&nbsp; <span class="zh">十万</span> = 100,000 &nbsp;·&nbsp; <span class="zh">一百万</span> = 1,000,000 &nbsp;·&nbsp; <span class="zh">一千万</span> = 10,000,000</li>
<li><span class="zh">亿</span> <span class="py-hint">yì</span> = 100,000,000 — "a hundred million", not "a billion"! 1 billion = <span class="zh">十亿</span>.</li>
<li>Conversion trick: split the digits from the right in <b>groups of four</b>: 123,456,789 → 1|2345|6789 → <span class="zh">一亿 两千三百四十五万 六千七百八十九</span>.</li>
</ul>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 🇪🇸 All three of your languages mislead you equally</span>
English <i>thousand</i>, German <i>Tausend</i>, Spanish <i>mil</i> — all group by <b>three</b> zeros, so "500,000" instantly reads as "500 thousand". Chinese has no word for "hundred thousand": you must re-chunk it as <span class="zh">五十万</span> "50 ten-thousands". This never becomes automatic without drilling — say prices and populations out loud when you read them.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Listening loves prices and ages (<span class="zh">一百多块</span>, <span class="zh">三十来岁</span>); Reading loves 倍 and 百分之 in statistics-flavoured passages; and the cloze task loves asking WHERE 左右/大约/多 belongs. Slots, slots, slots.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: 'Multiplying with <span class="zh hl">倍</span> — and the famous +1 trap',
      short: "倍 multiples",
      html: `
<p>Three patterns cover everything the exam does with <span class="zh">倍</span>:</p>
<div class="pattern">A 是 B 的 + <span class="slot">N倍</span><small>A = N × B. &nbsp;今年的收入是去年的三倍 = this year is 3× last year.</small></div>
<div class="pattern">A 比 B + 多/大/贵… + <span class="slot">N倍</span><small>A = B × (N+1)! &nbsp;比去年多一倍 = twice as much as last year.</small></div>
<div class="pattern">增加/提高 + <span class="slot">了</span> N倍 &nbsp;vs&nbsp; 增加/提高 + <span class="slot">到</span> N倍<small>了 = grew BY N times (result: N+1 ×). &nbsp;到 = grew TO N times (result: N ×).</small></div>
<div class="callout warn"><span class="co-title">⚠️ The +1 trap — worth a whole exam question</span>
<span class="zh">增加了两倍</span> does NOT mean "doubled". It means the <b>increase itself</b> equals 2× the original — so the new value is the original <b>plus</b> two originals = <b class="hl">tripled</b>. 1000 → <span class="zh">增加了一倍</span> → 2000; 1000 → <span class="zh">增加了两倍</span> → 3000; 1000 → <span class="zh">增加<b>到</b>两倍</span> → 2000. When you read 倍, always ask: 是…的 (direct ×), or 比/了 (add one)?</div>
<div class="callout rule"><span class="co-title">倍 only goes UP</span>
Chinese never shrinks with 倍: ✗<span class="zh">减少了两倍</span>. Decreases use fractions or 一半: <span class="zh">减少了<b class="hl">一半</b></span> (halved), <span class="zh">减少了<b class="hl">三分之二</b></span> (down by ⅔).</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "concept",
      title: 'Slicing with <span class="zh hl">分之</span> — read the denominator first',
      short: "分之 fractions",
      html: `
<p>Fractions and percentages are one single pattern:</p>
<div class="pattern"><span class="slot">denominator</span> + 分之 + <span class="slot">numerator</span><small>三分之一 = "of 3 parts, 1" = ⅓ · 四分之三 = ¾ · 百分之三十 = 30/100 = 30%</small></div>
<p>Percent is just the fraction with denominator 100: <span class="zh"><b class="hl">百分之</b>三十</span> = 30%, <span class="zh">百分之百</span> = 100%, guaranteed. In sentences the fraction sits where any number would: <span class="zh"><b class="hl">三分之二的</b>同学都通过了考试</span>, <span class="zh">价格提高了<b class="hl">百分之十</b></span>.</p>
<div class="callout cmp"><span class="co-title">🇬🇧 🇩🇪 🇪🇸 Chinese reads fractions backwards (from your point of view)</span>
"Three quarters", „drei Viertel", "tres cuartos" — all three of your languages say the <b>numerator first</b>. Chinese flips it: <span class="zh">四分之三</span> starts with the 4. When you hear <span class="zh">五分之一</span>, resist the reflex to write 5⁄1 — the first number is the bottom. Mnemonic: <span class="zh">四<b class="hl">分</b>之三</span> = "of four <b>parts</b>, three".</div>
<h3>Quick ordinal review: 第</h3>
<p>You know <span class="zh">第</span> from HSK 3: <span class="zh">第 + number (+ measure)</span> makes ordinals — <span class="zh">第三次</span> "the third time", <span class="zh">第一名</span> "first place". HSK 4 likes mixing it with the new toolkit: <span class="zh">他<b class="hl">第二次</b>考试的分数是<b class="hl">第一次</b>的<b class="hl">两倍</b></span> — "his second-test score was double his first." Keep the jobs separate: <span class="zh">第三</span> = third in a sequence, <span class="zh">三倍</span> = 3×, <span class="zh">三分之一</span> = ⅓. Three different animals wearing the same 三.</p>`
    },

    /* ------------------------------------------------ 4 */
    {
      type: "examples",
      title: "Model sentences — the whole toolkit in action",
      short: "Examples",
      intro: "Tap to listen. For each sentence, name the tool being used (scaling or blurring?) and its slot.",
      items: [
        { tag: "倍", cn: "今年的收入是去年的**三倍**。", py: "Jīnnián de shōurù shì qùnián de sān bèi.", en: "This year's income is three times last year's.", note: "是…的 N倍 = direct multiplication, no +1 games." },
        { tag: "倍+1", cn: "我们学校的学生比十年前**增加了一倍**。", py: "Wǒmen xuéxiào de xuésheng bǐ shí nián qián zēngjiā le yí bèi.", en: "Our school has twice as many students as ten years ago.", note: "增加了一倍 = grew BY 1× = doubled. 了, not 到!" },
        { tag: "分之", cn: "这次考试，班里**三分之二**的同学都得了九十分以上。", py: "Zhè cì kǎoshì, bān li sān fēn zhī èr de tóngxué dōu dé le jiǔshí fēn yǐshàng.", en: "On this test, two thirds of the class scored above 90.", note: "Denominator 三 first: of 3 parts, 2." },
        { tag: "percent", cn: "这家店打八折，等于便宜了**百分之二十**。", py: "Zhè jiā diàn dǎ bā zhé, děngyú piányi le bǎi fēn zhī èrshí.", en: "This shop gives 20% off — 打八折 means you pay 80%.", note: "折 counts what you PAY: 八折 = 80% of the price. Classic listening trap." },
        { tag: "左右", cn: "那位新老师看起来**三十岁左右**。", py: "Nà wèi xīn lǎoshī kàn qǐlái sānshí suì zuǒyòu.", en: "The new teacher looks about thirty.", note: "左右 = AFTER number + measure. Never 左右三十岁." },
        { tag: "大约", cn: "从我家到公司**大约**需要四十分钟。", py: "Cóng wǒ jiā dào gōngsī dàyuē xūyào sìshí fēnzhōng.", en: "It takes about forty minutes from my home to the office.", note: "大约 = BEFORE the number. Mirror image of 左右." },
        { tag: "来", cn: "教室里只坐着**十来个**学生。", py: "Jiàoshì li zhǐ zuòzhe shí lái ge xuésheng.", en: "There are only ten or so students sitting in the classroom.", note: "来 after a round ten, before the measure word." },
        { tag: "多", cn: "我在北京住了**两年多**了。", py: "Wǒ zài Běijīng zhù le liǎng nián duō le.", en: "I've lived in Beijing for over two years now.", note: "两 is not a round ten → 多 goes AFTER the measure: 两年多 = 2 years + a bit." },
        { tag: "多", cn: "爷爷**八十多**岁了，身体还很好。", py: "Yéye bāshí duō suì le, shēntǐ hái hěn hǎo.", en: "Grandpa is over eighty and still in great health.", note: "八十 IS a round ten → 多 before the measure: 80–89." },
        { tag: "邻数", cn: "每天有**五六十**个人来这家小饭馆吃饭。", py: "Měitiān yǒu wǔ-liùshí ge rén lái zhè jiā xiǎo fànguǎn chīfàn.", en: "Fifty or sixty people eat at this little restaurant every day.", note: "Adjacent numbers 五六 = 'five-or-six(-ty)'. No extra word needed." },
        { tag: "好几", cn: "他去过**好几次**上海，对那儿很熟悉。", py: "Tā qù guo hǎo jǐ cì Shànghǎi, duì nàr hěn shúxī.", en: "He's been to Shanghai quite a few times and knows it well.", note: "好几 = 'a good few' — more than the listener might expect." },
        { tag: "一天比一天", cn: "春天到了，天气**一天比一天**暖和。", py: "Chūntiān dào le, tiānqì yìtiān bǐ yìtiān nuǎnhuo.", en: "Spring is here — it's getting warmer by the day.", note: "Built from 比, so NO degree words: ✗一天比一天很暖和." }
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "table",
      title: "The position table — every blur word and its one legal slot",
      short: "Position table",
      intro: "This is the money table. The exam tests exactly one thing: which side of the number each word lives on.",
      head: ["Word", "Slot", "Example", "Watch out"],
      rows: [
        ['<span class="zh">大约 / 大概</span> <span class="py-hint">dàyuē / dàgài</span>', '<b>BEFORE</b> the number', '<span class="zh">大约<b class="hl">五十个</b>人</span> <span class="py-hint">dàyuē wǔshí ge rén</span>', '大概 also = "probably": <span class="zh">他大概忘了</span>'],
        ['<span class="zh">差不多</span> <span class="py-hint">chàbuduō</span>', '<b>BEFORE</b> the number', '<span class="zh">差不多<b class="hl">一百块</b></span> <span class="py-hint">chàbuduō yìbǎi kuài</span>', 'Also an adjective: <span class="zh">我们水平差不多</span> "about the same"'],
        ['<span class="zh">左右</span> <span class="py-hint">zuǒyòu</span>', '<b>AFTER</b> number + measure', '<span class="zh"><b class="hl">三十岁</b>左右</span> <span class="py-hint">sānshí suì zuǒyòu</span>', 'Never combine: ✗大约三十岁左右'],
        ['<span class="zh">上下</span> <span class="py-hint">shàngxià</span>', '<b>AFTER</b> number + measure', '<span class="zh"><b class="hl">五十岁</b>上下</span> <span class="py-hint">wǔshí suì shàngxià</span>', 'Mostly for age and weight; 左右 is the all-rounder'],
        ['<span class="zh">多</span> <span class="py-hint">duō</span>', 'round number + <b>多</b> + measure', '<span class="zh">二十<b class="hl">多</b>个</span> = 21–29 <span class="py-hint">èrshí duō ge</span>', 'Non-round number → after the measure: <span class="zh">一块<b class="hl">多</b></span> = 1.x yuan'],
        ['<span class="zh">来</span> <span class="py-hint">lái</span>', 'round ten/百/千 + <b>来</b> + measure', '<span class="zh">十<b class="hl">来</b>个 · 二十<b class="hl">来</b>岁</span> <span class="py-hint">shí lái ge · èrshí lái suì</span>', '✗九来个 — 来 refuses non-round numbers'],
        ['<span class="zh">几</span> <span class="py-hint">jǐ</span>', 'replaces one digit', '<span class="zh">十<b class="hl">几</b>个</span> = 11–19 · <span class="zh"><b class="hl">几</b>十个</span> = some tens', 'Position changes meaning: 十几 ≠ 几十!'],
        ['adjacent numbers', 'two digits side by side', '<span class="zh">三四个 · 五六十岁</span> <span class="py-hint">sān-sì ge · wǔ-liùshí suì</span>', '九+十 is banned (九十 = 90) — say <span class="zh">十来个</span>'],
        ['<span class="zh">好几</span> <span class="py-hint">hǎo jǐ</span>', 'before measure/number', '<span class="zh">好几年 · 好几百人</span> <span class="py-hint">hǎo jǐ nián · hǎo jǐ bǎi rén</span>', '"quite a few" — subjective emphasis, not just "several"']
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "tabs",
      title: "Deep dives — each blur word up close",
      short: "Deep dives",
      intro: "Six mini-lessons. The 多/来/几 tabs are the ones the exam milks hardest.",
      tabs: [
        {
          label: "大约·左右·差不多",
          html: `<p>Same meaning, opposite slots. <span class="zh">大约/大概/差不多</span> stand <b>in front</b> like adverbs; <span class="zh">左右/上下</span> hang <b>behind</b> like a tail. Pick one — using both (✗<span class="zh">大约三十岁左右</span>) is the redundancy error the 改错-style questions love.</p>
<p>Bonus life of <span class="zh">差不多</span>: as an adjective it means "about the same": <span class="zh">我们俩的水平<b class="hl">差不多</b></span>. And <span class="zh">大概</span> doubles as "probably": <span class="zh">他<b class="hl">大概</b>还在路上</span>.</p>`,
          examples: [
            { cn: "我**大概**八点半能到，你们先点菜吧。", py: "Wǒ dàgài bā diǎn bàn néng dào, nǐmen xiān diǎn cài ba.", en: "I'll arrive around 8:30 — go ahead and order.", note: "大概 before the time expression." },
            { cn: "这次活动来了**一百人左右**。", py: "Zhè cì huódòng lái le yìbǎi rén zuǒyòu.", en: "About a hundred people came to the event.", note: "左右 after number + measure." },
            { cn: "那位经理**五十岁上下**，说话很客气。", py: "Nà wèi jīnglǐ wǔshí suì shàngxià, shuōhuà hěn kèqi.", en: "That manager is around fifty and very polite.", note: "上下 = same slot as 左右, typical with ages." }
          ]
        },
        {
          label: "多 — two slots!",
          html: `<p><span class="zh">多</span> is the only blur word with <b>two</b> positions, and the choice is mechanical:</p>
<ul>
<li>Number ends in <b>zero</b> (10, 20, 100…) → 多 <b>before</b> the measure: <span class="zh">十<b class="hl">多</b>块</span> = 11–19 yuan, <span class="zh">一百<b class="hl">多</b>本</span> = 101–199 books. The surplus is <b>whole units</b>.</li>
<li>Number is <b>1–9</b> (or ends 1–9) → 多 <b>after</b> the measure: <span class="zh">一块<b class="hl">多</b></span> = 1.x yuan, <span class="zh">三年<b class="hl">多</b></span> = 3 years and a bit. The surplus is a <b>fraction of one unit</b>.</li>
</ul>
<p>So <span class="zh">十多块</span> ≈ 15 yuan, but <span class="zh">十块多</span> ≈ 10.50 — both exist, and they are different amounts! The exam usually just checks you don't write ✗<span class="zh">一多块</span>.</p>`,
          examples: [
            { cn: "我们在门口等了**一个多**小时。", py: "Wǒmen zài ménkǒu děng le yí ge duō xiǎoshí.", en: "We waited at the entrance for over an hour.", note: "一 is not round → 多 after the measure 个: one hour plus a fraction." },
            { cn: "这本旧书才卖**十多块**钱。", py: "Zhè běn jiù shū cái mài shí duō kuài qián.", en: "This old book only costs ten-something yuan.", note: "Round 十 → 多 before 块: 11–19 whole yuan." },
            { cn: "行李箱**二十多**公斤，超重了。", py: "Xínglixiāng èrshí duō gōngjīn, chāozhòng le.", en: "The suitcase is over twenty kilos — overweight.", note: "超重 chāozhòng = over the limit (airport word, worth knowing)." },
            { cn: "这条鱼**三公斤多**，够我们全家吃了。", py: "Zhè tiáo yú sān gōngjīn duō, gòu wǒmen quánjiā chī le.", en: "This fish is a bit over three kilos — enough for the whole family.", note: "三 not round → 多 after 公斤: 3.x kilos." }
          ]
        },
        {
          label: "来 vs 几",
          html: `<p><span class="zh"><b class="hl">来</b></span> attaches only to <b>round tens</b> (and 百/千): <span class="zh">十来个、二十来岁、三十来块</span> — "around, often a touch under". It refuses everything else: ✗<span class="zh">九来个</span>, ✗<span class="zh">二十五来个</span>.</p>
<p><span class="zh"><b class="hl">几</b></span> is a wildcard digit. Where it stands is what it replaces: <span class="zh">十<b class="hl">几</b>个</span> = 1X (11–19), <span class="zh">二十<b class="hl">几</b>岁</span> = 2X (21–29), but <span class="zh"><b class="hl">几</b>十个</span> = X0 (some tens: 20–90ish), <span class="zh">几百、几千</span> = hundreds, thousands.</p>
<p>Size cheat: around 10 → <span class="zh">十来个</span>; clearly 11–19 → <span class="zh">十几个</span> or <span class="zh">十多个</span>; a fuzzy "dozens" → <span class="zh">几十个</span>.</p>`,
          examples: [
            { cn: "车上只有**十来个**人，很空。", py: "Chē shang zhǐ yǒu shí lái ge rén, hěn kōng.", en: "There are only ten or so people on the bus — really empty.", note: "来 after round 十." },
            { cn: "她女儿今年**十几**岁了，已经比妈妈高了。", py: "Tā nǚ'ér jīnnián shí jǐ suì le, yǐjīng bǐ māma gāo le.", en: "Her daughter is in her early-to-mid teens and already taller than her mom.", note: "十几 = 11–19: the digit after 十 is unknown." },
            { cn: "这条街上有**几十**家小商店。", py: "Zhè tiáo jiē shang yǒu jǐ shí jiā xiǎo shāngdiàn.", en: "There are dozens of little shops on this street.", note: "几十 = the TENS digit is unknown. Compare 十几!" }
          ]
        },
        {
          label: "三四个 — adjacent numbers",
          html: `<p>Put two neighbouring digits together and you get a range: <span class="zh">三四个</span> "three or four", <span class="zh">七八百人</span> "seven or eight hundred", <span class="zh">五六十岁</span> "in his/her fifties or sixties". Works at any scale — the digits just have to be neighbours (✗<span class="zh">三五个</span>… actually 三五 survives in set phrases, but the productive rule is neighbours).</p>
<div class="callout warn"><span class="co-title">⚠️ Why you can't say "nine or ten" this way</span>
<span class="zh">九十个人</span> can only mean <b>ninety</b> people — the reader has no way to hear "9-or-10" in it. So the pair 九+十 is banned from this pattern. For "nine or ten", switch tools: <span class="zh"><b class="hl">十来个</b>人</span> or spell it out, <span class="zh">九个或者十个</span>.</div>`,
          examples: [
            { cn: "我在机场买了**三四本**杂志，路上看。", py: "Wǒ zài jīchǎng mǎi le sān-sì běn zázhì, lùshang kàn.", en: "I bought three or four magazines at the airport to read on the way.", note: "Adjacent digits + measure word, nothing else needed." },
            { cn: "他爷爷**七八十**岁了，还天天打太极拳。", py: "Tā yéye qī-bāshí suì le, hái tiāntiān dǎ tàijíquán.", en: "His grandpa is in his seventies or eighties and still does tai chi every day.", note: "Works with tens too: 七八十 = 70–80ish." },
            { cn: "办公室里只剩下**九个或者十个**人了。", py: "Bàngōngshì li zhǐ shèngxià jiǔ ge huòzhě shí ge rén le.", en: "Only nine or ten people are left in the office.", note: "The 9–10 workaround: 或者, because ✗九十个 = 90." }
          ]
        },
        {
          label: "好几",
          html: `<p><span class="zh">好几</span> = "a good few / quite a few" — it's <span class="zh">几</span> with feelings. Use it when the amount feels <b>large to you</b>: <span class="zh">好几年</span> "years and years (too long!)", <span class="zh">好几百人</span> "hundreds of people (wow)". Slot: directly before the measure word or before 十/百/千.</p>`,
          examples: [
            { cn: "我**好几天**没看见他了，他去哪儿了？", py: "Wǒ hǎo jǐ tiān méi kànjiàn tā le, tā qù nǎr le?", en: "I haven't seen him for days — where has he gone?", note: "好几天 = several days, and the speaker notices the gap." },
            { cn: "为了这次面试，他准备了**好几个**星期。", py: "Wèile zhè cì miànshì, tā zhǔnbèi le hǎo jǐ ge xīngqī.", en: "He spent a good few weeks preparing for this interview.", note: "好几 + 个 + noun — the 个 stays." }
          ]
        },
        {
          label: "一天比一天",
          html: `<p><span class="zh">一天比一天 + adjective</span> = "more … by the day". It's a compressed <span class="zh">比</span> sentence (today vs yesterday, every day), so it inherits the 比-rule you know: <b>no degree adverbs</b> — ✗<span class="zh">一天比一天很冷</span>. Variants scale up: <span class="zh">一年比一年</span>, <span class="zh">一次比一次</span>.</p>
<p>Versus <span class="zh">越来越</span>: both mean gradual change, and often both fit. But <span class="zh">一天比一天</span> insists on the <b>time-unit-by-time-unit</b> rhythm, while <span class="zh">越来越</span> is neutral about how the change happens — and only 越来越 can pair with a verb of feeling (<span class="zh">越来越喜欢</span>). Neither tolerates 很/非常 after it.</p>`,
          examples: [
            { cn: "入冬以后，天气**一天比一天**冷。", py: "Rùdōng yǐhòu, tiānqì yìtiān bǐ yìtiān lěng.", en: "Since winter set in, it's been getting colder by the day.", note: "No 很, no 了 needed — the pattern itself is the change." },
            { cn: "奶奶的身体**一年比一年**好。", py: "Nǎinai de shēntǐ yì nián bǐ yì nián hǎo.", en: "Grandma's health gets better year by year.", note: "Same machine, bigger time unit." },
            { cn: "他**越来越**喜欢中国菜了。", py: "Tā yuèláiyuè xǐhuan Zhōngguó cài le.", en: "He likes Chinese food more and more.", note: "喜欢 is a feeling verb → only 越来越 works here, not 一天比一天." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — slots and scales",
      short: "Checkpoint",
      intro: "Six quick questions. If the position table is in your head, this takes two minutes.",
      items: [
        { q: '<span class="zh">B公司有五十个人，A公司的人数是B公司的三倍。</span> How many people work at company A?', choices: ["100", "150", "200", "53"], a: 1, expl: "是…的三倍 = plain multiplication: 3 × 50 = 150. No +1 here — that only happens with 比 and 增加了." },
        { q: '<span class="zh">这个学校原来有一千个学生，现在增加了两倍。</span> Now it has…', choices: ["2000", "1000", "3000", "1500"], a: 2, expl: "增加了两倍 = grew BY 2× the original → 1000 + 2000 = 3000. The +1 trap in its natural habitat. 增加到两倍 would be 2000." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">他大约三十岁。</span>', '<span class="zh">他三十岁大约。</span>', '<span class="zh">他大约三十岁左右。</span>', '<span class="zh">大约他三十岁。</span>'], a: 0, expl: "大约 stands before the number, inside the predicate. Option C stacks 大约 AND 左右 — redundant, a classic error-spotting item." },
        { q: "How do you write ¼?", choices: ['<span class="zh">四分之一</span>', '<span class="zh">一分之四</span>', '<span class="zh">四分一</span>', '<span class="zh">一四分之</span>'], a: 0, expl: "Denominator first: 四分之一 = 'of 4 parts, 1'. Your English/Spanish/German reflex says numerator first — override it." },
        { q: '<span class="zh">那家公司有___员工，大概五六十个吧。</span>', choices: ['<span class="zh">十几个</span>', '<span class="zh">几十个</span>', '<span class="zh">十来个</span>', '<span class="zh">好几千个</span>'], a: 1, expl: "五六十 = dozens → 几十个 (unknown TENS digit). 十几个 would be 11–19, 十来个 around ten — both far too small." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">天气一天比一天冷。</span>', '<span class="zh">天气一天比一天很冷。</span>', '<span class="zh">天气很一天比一天冷。</span>', '<span class="zh">天气一天比一天非常冷。</span>'], a: 0, expl: "一天比一天 is a 比 structure — degree adverbs (很/非常) are banned, exactly like ✗比我很高." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — number diseases",
      short: "Error clinic",
      intro: "One bug per sentence: a wrong slot, a wrong scale, or one blur word too many. Diagnose before you peek.",
      items: [
        { wrong: "他大约三十岁左右。", right: "他大约三十岁。／他三十岁左右。", py: "Tā dàyuē sānshí suì. / Tā sānshí suì zuǒyòu.", en: "He's about thirty.", expl: "大约 (front) and 左右 (back) do the same job — use one, never both. Redundant approximation is a standard exam error." },
        { wrong: "我妈妈今年五十上下岁。", right: "我妈妈今年五十岁上下。", py: "Wǒ māma jīnnián wǔshí suì shàngxià.", en: "My mom is around fifty this year.", expl: "上下 (like 左右) hangs after the COMPLETE number + measure phrase: 五十岁 + 上下, not inside it." },
        { wrong: "这瓶水一多块钱。", right: "这瓶水一块多钱。", py: "Zhè píng shuǐ yí kuài duō qián.", en: "This bottle of water costs a bit over one yuan.", expl: "一 is not a round ten, so the surplus is a fraction of a yuan → 多 goes after the measure: 一块多. 多 before 块 needs a round number (十多块)." },
        { wrong: "我的工资从五千涨到了一万，增加了两倍。", right: "我的工资从五千涨到了一万，增加了一倍。", py: "Wǒ de gōngzī cóng wǔqiān zhǎng dào le yíwàn, zēngjiā le yí bèi.", en: "My salary went from 5000 to 10,000 — it doubled.", expl: "Doubling = the increase equals 1× the original → 增加了一倍. 增加了两倍 would mean 15,000. The +1 trap, direction two." },
        { wrong: "今年的花费比去年减少了一倍。", right: "今年的花费比去年减少了一半。", py: "Jīnnián de huāfèi bǐ qùnián jiǎnshǎo le yíbàn.", en: "This year's spending is half of last year's.", expl: "倍 only multiplies upward — decreases take 一半 or a fraction (减少了三分之一). ✗减少 X 倍 is always wrong." },
        { wrong: "海洋占了地球表面的七分之十。", right: "海洋占了地球表面的十分之七。", py: "Hǎiyáng zhàn le dìqiú biǎomiàn de shí fēn zhī qī.", en: "Oceans cover about seven tenths of the earth's surface.", expl: "Denominator first! 7/10 = 十分之七. 七分之十 would be 10/7 — more ocean than planet. (占 zhàn = to occupy/take up, useful HSK5 preview.)" },
        { wrong: "他的汉语一天比一天很流利。", right: "他的汉语一天比一天流利。", py: "Tā de Hànyǔ yìtiān bǐ yìtiān liúlì.", en: "His Chinese gets more fluent by the day.", expl: "一天比一天 is built on 比, and 比 sentences reject degree adverbs. Bare adjective only." },
        { wrong: "屋里只有九来个人。", right: "屋里只有八九个人。／屋里只有十来个人。", py: "Wū li zhǐ yǒu bā-jiǔ ge rén. / Wū li zhǐ yǒu shí lái ge rén.", en: "There are only eight or nine (ten or so) people in the room.", expl: "来 attaches only to round tens/hundreds: 十来个 ✓, 九来个 ✗. For single digits use adjacent numbers (八九个)." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — put the numbers in their place",
      short: "Builder",
      intro: "Arrange the tiles. Every item hides one slot rule from this page.",
      items: [
        { tiles: ["今年的收入", "是", "去年的", "两倍"], py: "Jīnnián de shōurù shì qùnián de liǎng bèi.", en: "This year's income is double last year's.", hint: "The 是…的 N倍 frame: A 是 B 的 + multiple." },
        { tiles: ["我们班", "三分之二的", "同学", "都通过了", "考试"], py: "Wǒmen bān sān fēn zhī èr de tóngxué dōu tōngguò le kǎoshì.", en: "Two thirds of our class passed the exam.", hint: "The fraction + 的 works like any quantity phrase before the noun." },
        { tiles: ["他", "每天", "要工作", "十多个", "小时"], py: "Tā měitiān yào gōngzuò shí duō ge xiǎoshí.", en: "He works more than ten hours every day.", hint: "Round 十 → 多 before the measure 个." },
        { tiles: ["参加活动的人", "有", "两百个", "左右"], py: "Cānjiā huódòng de rén yǒu liǎngbǎi ge zuǒyòu.", en: "About two hundred people took part in the activity.", hint: "左右 tails the complete number phrase." },
        { tiles: ["这个城市的人口", "增加了", "百分之十五"], py: "Zhège chéngshì de rénkǒu zēngjiā le bǎi fēn zhī shíwǔ.", en: "The city's population grew by fifteen percent.", hint: "百分之 + number sits where any amount would, after 增加了." },
        { tiles: ["天气", "一天比一天", "暖和了"], py: "Tiānqì yìtiān bǐ yìtiān nuǎnhuo le.", en: "The weather is getting warmer day by day.", hint: "一天比一天 slides in right before the adjective — no 很!" },
        { tiles: ["我", "认识他", "好几年了"], py: "Wǒ rènshi tā hǎo jǐ nián le.", en: "I've known him for a good few years.", hint: "好几年 works exactly like 三年 — a duration after the verb phrase." },
        { tiles: ["妹妹", "大概", "五点", "就能到家"], py: "Mèimei dàgài wǔ diǎn jiù néng dào jiā.", en: "My little sister should be home by around five.", hint: "大概 in front of the time; 就 signals 'that early'." }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 三十多岁 vs 三十来岁 — not twins</h3>
<p><span class="zh">三十<b class="hl">多</b>岁</span> = strictly above 30 (31–39). <span class="zh">三十<b class="hl">来</b>岁</span> = hovering around 30 — could be 28. 多 only goes up; 来 can dip below. If a listening speaker is coy about being "almost thirty", 来 is their word.</p>
<h3>2 · 大概 has a second job</h3>
<p>Before a number it approximates (<span class="zh">大概十天</span>); before a verb phrase it means <b>probably</b>: <span class="zh">他<b class="hl">大概</b>还没起床</span>. 大约 mostly sticks to numbers. If the blank is followed by a verb, 大概 wins.</p>
<h3>3 · 差不多 the adjective</h3>
<p><span class="zh">我们俩的水平<b class="hl">差不多</b>。</span> — "our levels are about the same." No number in sight. It even takes 都…: <span class="zh">大家差不多都到了</span> "pretty much everyone is here". Don't parse that as "everyone is mediocre"!</p>
<h3>4 · 万 shorthand: 一万二</h3>
<p>Spoken Chinese clips trailing units: <span class="zh">一万二</span> = 12,000 (not 10,002!), <span class="zh">两千五</span> = 2,500, <span class="zh">一百八</span> = 180. The clipped digit re-uses the NEXT unit down. Listening section gold.</p>
<h3>5 · 两 vs 二 refresher, HSK 4 edition</h3>
<p>Before measures and 百/千/万: <span class="zh"><b class="hl">两</b>个、<b class="hl">两</b>千、<b class="hl">两</b>万</span>. But inside compound numbers and after 十: <span class="zh">十<b class="hl">二</b>、<b class="hl">二</b>十二、第<b class="hl">二</b></span>. And fractions/percent read digits as 二: <span class="zh">三分之<b class="hl">二</b>、百分之<b class="hl">二</b>十</span>.</p>
<h3>6 · 增加到 vs 增加了 — spot the preposition</h3>
<p>One character decides the math: <span class="zh">到</span> lands ON the target (<span class="zh">增加到两倍</span> = ×2), <span class="zh">了</span> measures the JUMP (<span class="zh">增加了两倍</span> = ×3). The same 到/了 contrast works with 提高, 涨, 减少 (<span class="zh">减少到一半</span> vs <span class="zh">减少了一半</span> — same result here, but only by luck of the math).</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
When a cloze blank touches a number, run the slot check in order: ① before the number? (大约/大概/差不多/好几) ② after number+measure? (左右/上下/多-fraction) ③ inside the number? (来/几/多-whole/adjacent digits). One of the three always settles it.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "Twelve questions at exam difficulty. The 倍 items are worth double-checking with actual arithmetic.",
      items: [
        { q: '<span class="zh">这家饭馆的客人比去年多了一倍，去年每天有四十位。</span> How many now?', choices: ["40", "60", "80", "120"], a: 2, expl: "比…多(了)一倍 = twice as many: 40 × 2 = 80. Remember: with 比 the multiple counts the EXTRA part." },
        { q: '<span class="zh">今年报名的人数减少了___，从两百人变成了一百人。</span>', choices: ['<span class="zh">一倍</span>', '<span class="zh">一半</span>', '<span class="zh">两倍</span>', '<span class="zh">百分之百</span>'], a: 1, expl: "200 → 100 is a halving → 减少了一半. 倍 never describes decreases, and 百分之百 would mean nobody signed up." },
        { q: "How do you say 30%?", choices: ['<span class="zh">三十百分之</span>', '<span class="zh">百分三十</span>', '<span class="zh">百分之三十</span>', '<span class="zh">三十分之百</span>'], a: 2, expl: "百分之 + number, as one unbreakable machine: 百分之三十. 三十分之百 would be 100/30 — an impressive but wrong fraction." },
        { q: '<span class="zh">我跟他学汉语的时间___，都是两年半。</span>', choices: ['<span class="zh">左右</span>', '<span class="zh">差不多</span>', '<span class="zh">大约</span>', '<span class="zh">上下</span>'], a: 1, expl: "No number follows the blank — this is 差不多 the ADJECTIVE: 'about the same'. 大约/左右/上下 all need a number to lean on." },
        { q: '<span class="zh">我们在医院等了___才见到医生。</span>', choices: ['<span class="zh">一个多小时</span>', '<span class="zh">一多个小时</span>', '<span class="zh">多一个小时</span>', '<span class="zh">一个小时多多</span>'], a: 0, expl: "一 is not round → 多 after the measure: 一个多小时 = an hour and a bit. ✗一多个 is the classic wrong slot." },
        { q: "Which phrase is WRONG?", choices: ['<span class="zh">十来个人</span>', '<span class="zh">二十来岁</span>', '<span class="zh">九来个人</span>', '<span class="zh">三十来块钱</span>'], a: 2, expl: "来 only follows round tens (and 百/千). 九 is a single digit → say 八九个 or 十来个 instead." },
        { q: '<span class="zh">教室里只有___学生，很安静。</span> (you mean: nine or ten)', choices: ['<span class="zh">九十个</span>', '<span class="zh">八九个</span>', '<span class="zh">九来个</span>', '<span class="zh">几九个</span>'], a: 1, expl: "九十个 = ninety! The 9+10 pair is banned from adjacent-number approximation, so shift down a step: 八九个 'eight or nine' (or use 十来个)." },
        { q: '<span class="zh">这是我___来哈尔滨，前两次都是冬天。</span>', choices: ['<span class="zh">三次</span>', '<span class="zh">第三次</span>', '<span class="zh">三第次</span>', '<span class="zh">第三个次</span>'], a: 1, expl: "Ordinal = 第 + number + measure: 第三次 'the third time'. 三次 = three times (a count, not a position); 第 never takes 个 before another measure." },
        { q: "100,000 in Chinese is…", choices: ['<span class="zh">一百千</span>', '<span class="zh">十万</span>', '<span class="zh">百万</span>', '<span class="zh">一万十</span>'], a: 1, expl: "No word for 'hundred thousand' exists — re-chunk by 10,000s: 100,000 = 10 × 万 = 十万. 百万 is a million." },
        { q: '<span class="zh">一亿</span> means…', choices: ["1 million", "10 million", "100 million", "1 billion"], a: 2, expl: "亿 = 10⁸ = 100 million (万万 = 亿, as the old saying goes). A billion is 十亿." },
        { q: "Which sentence is correct?", choices: ['<span class="zh">他上下四十岁。</span>', '<span class="zh">他四十岁上下。</span>', '<span class="zh">他四十上下岁。</span>', '<span class="zh">上下他四十岁。</span>'], a: 1, expl: "上下, like 左右, tails the complete number+measure phrase: 四十岁 + 上下. It never leads and never splits the phrase." },
        { q: "Which sentence is WRONG?", choices: ['<span class="zh">他的成绩越来越好。</span>', '<span class="zh">天气一天比一天热。</span>', '<span class="zh">雨越下越大。</span>', '<span class="zh">他跑得越来越很快。</span>'], a: 3, expl: "越来越 and 一天比一天 both refuse degree adverbs — ✗越来越很快. Strip the 很: 越来越快. (see: 越来越 & 越…越)" }
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">数字表达 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Tool</th><th>Remember</th></tr>
<tr><td>A 是 B 的 N倍</td><td>A = N × B, no surprises</td></tr>
<tr><td>比…多一倍 / 增加了一倍</td><td>+1 trap: the multiple counts the EXTRA → doubled. 增加了两倍 = tripled!</td></tr>
<tr><td>增加<b class="hl">到</b> vs 增加<b class="hl">了</b></td><td>到 = lands ON target (×N) · 了 = the jump itself (×N+1)</td></tr>
<tr><td>Decrease</td><td>Never 倍: 减少了一半 · 减少了三分之一</td></tr>
<tr><td>分之</td><td>Denominator FIRST: 四分之三 = ¾ · 百分之三十 = 30%</td></tr>
<tr><td>Before the number</td><td>大约 · 大概 · 差不多 · 好几 (大概 also = probably; 差不多 also = about the same)</td></tr>
<tr><td>After number + measure</td><td>左右 · 上下 · fractional 多 (一块多) — never stack with 大约!</td></tr>
<tr><td>Inside the number</td><td>round + 多/来 + M (十多个 · 二十来岁) · 几 as wildcard digit (十几 ≠ 几十)</td></tr>
<tr><td>Adjacent digits</td><td>三四个 · 五六十岁 — but 9+10 banned: use 八九个 / 十来个</td></tr>
<tr><td>一天比一天 + adj</td><td>No 很/非常 (it's a 比 sentence) · feelings prefer 越来越喜欢</td></tr>
<tr><td>第 + num + M</td><td>Ordinals: 第三次 · 第一名 — don't confuse 第三 / 三倍 / 三分之一</td></tr>
<tr><td>Big numbers</td><td>Group by FOUR zeros: 万 10⁴ · 亿 10⁸ · 100,000 = 十万 · 1 billion = 十亿</td></tr>
<tr><td>Spoken shorthand</td><td>一万二 = 12,000 · 两千五 = 2,500 (clipped digit = next unit down)</td></tr>
</table></div>`
    }
  ]
});
