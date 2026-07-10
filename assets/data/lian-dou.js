/* HSK 4 Grammar Lab — 连…都/也 (“even”) */
registerPage({
  id: "lian-dou",
  zh: "**连**……都/也",
  title: "连…都/也 — “even”: the extreme-case spotlight",
  subtitle: "You already emphasize with 都 (“all”) and 也 (“also”) from HSK 3. HSK 4 bolts them onto 连 to build the “even” machine: pick the most extreme example on a scale, and let the listener deduce everything else. Small pattern, huge exam presence.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: name the <span class="zh hl">most extreme case</span> — imply the rest',
      short: "Big idea",
      html: `
<p><span class="zh">连…都/也</span> takes one extreme example, shines a light on it, and lets logic do the talking: <span class="zh"><b class="hl">连</b>我奶奶<b class="hl">都</b>会用手机付钱。</span> “Even my grandma pays by phone.” If grandma can, then obviously everyone younger can too — you said one sentence, the listener heard ten.</p>
<div class="pattern">(Subj) + <span class="slot">连</span> + extreme X + <span class="slot">都/也</span> + V …<small>连 grabs the extreme case; 都 or 也 (interchangeable here) closes the clamp. 连 can even drop — 都/也 cannot!</small></div>
<div class="callout cmp"><span class="co-title">🇩🇪 🇪🇸 Exact matches in your languages</span>
German: <i>„<b>Sogar</b> meine Oma…“</i> / <i>„nicht <b>einmal</b> Wasser“</i>. Spanish: <i>“<b>hasta/incluso</b> mi abuela…”</i> / <i>“<b>ni siquiera</b> agua”</i>. Positive 连…都 = sogar/hasta; negative 连…都不/没 = nicht einmal/ni siquiera. If your inner German or Spanish would say one of those words, reach for 连…都.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
连…都 tests three things at once: word order (the object jumps in front of the verb!), the 都/也 clamp, and reading logic (what does the extreme case imply?). Listening and reading both use it to hide the author's real point.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "concept",
      title: "The invisible scale — and the inference flip",
      short: "The scale",
      html: `
<p>Every 连-sentence stands on an invisible <b>scale of likelihood</b>. 连 always picks the <b>least likely</b> end, and the listener fills in the rest:</p>
<p style="text-align:center"><span class="pill">least likely to know it</span> → 我奶奶 → 我 → 同学们 → <span class="pill">most likely</span> 老师</p>
<ul>
<li><span class="zh">连<b class="hl">老师</b>都不会</span> — even the TEACHER (most likely to know) can't → <b>nobody can → it's hard</b>.</li>
<li><span class="zh">连<b class="hl">我奶奶</b>都会</span> — even GRANDMA (least likely) can → <b>everyone can → it's easy</b>.</li>
</ul>
<h3>The inference flip</h3>
<p>Same skeleton, opposite conclusions — the polarity of the verb flips what the sentence proves:</p>
<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th>Positive verb</th><th>Negative verb</th></tr>
<tr><td><span class="zh">连他都…</span></td><td><span class="zh">连他都会</span> → so easy <i>(he's the weakest case)</i></td><td><span class="zh">连他都不会</span> → so hard <i>(he's the strongest case)</i></td></tr>
<tr><td>Implies</td><td>everyone above him on the scale: yes</td><td>everyone below him on the scale: no</td></tr>
</table></div>
<p>Reading questions LOVE asking “what does this sentence tell us?” — answer by finding the scale and the flip, never by translating word-for-word.</p>
<div class="callout tip"><span class="co-title">💡 One-second test</span>
Ask: is X the <i>best</i> candidate or the <i>worst</i> candidate for this verb? 连 + best + 不 = nobody. 连 + worst + ✓ = everybody.</div>`
    },

    /* ------------------------------------------------ 3 */
    {
      type: "examples",
      title: "Model sentences — even this, even that",
      short: "Examples",
      intro: "Tap 🔊 to listen. For each one, find the invisible scale: what else does the sentence quietly claim?",
      items: [
        { tag: "subject", cn: "这首歌太流行了，**连**我爸爸**都**会唱。", py: "Zhè shǒu gē tài liúxíng le, lián wǒ bàba dōu huì chàng.", en: "This song is so popular that even my dad can sing it.", note: "Dad = least likely pop fan → everyone can sing it." },
        { tag: "object", cn: "他**连**咖啡**都**不喝，更别说酒了。", py: "Tā lián kāfēi dōu bù hē, gèng bié shuō jiǔ le.", en: "He doesn't even drink coffee, let alone alcohol.", note: "The object 咖啡 moves BEFORE the verb — the signature 连 word order. 更别说 'let alone' rides the same scale." },
        { tag: "object", cn: "我紧张得**连**自己的名字**也**忘了。", py: "Wǒ jǐnzhāng de lián zìjǐ de míngzi yě wàng le.", en: "I was so nervous I even forgot my own name.", note: "也 works exactly like 都 after 连 — pick either." },
        { tag: "time", cn: "他忙得**连**周末**都**要加班。", py: "Tā máng de lián zhōumò dōu yào jiābān.", en: "He's so busy he has to work overtime even on weekends.", note: "Time words front nicely: 连周末/连晚上/连春节都…" },
        { tag: "amount", cn: "刚来的时候，我**连**一句汉语**都**不会说。", py: "Gāng lái de shíhou, wǒ lián yí jù Hànyǔ dōu bú huì shuō.", en: "When I first arrived, I couldn't speak even one sentence of Chinese.", note: "连 + 一 + measure + noun + 都不/没 = absolute zero." },
        { tag: "amount", cn: "那时候他**连**一分钱**都**没有，现在有了自己的公司。", py: "Nà shíhou tā lián yì fēn qián dōu méiyǒu, xiànzài yǒu le zìjǐ de gōngsī.", en: "Back then he didn't have a single cent — now he has his own company.", note: "一分钱 = the smallest possible amount → total zero." },
        { tag: "V都不V", cn: "他**连**看**都**没看，就把我的报告放在一边了。", py: "Tā lián kàn dōu méi kàn, jiù bǎ wǒ de bàogào fàng zài yìbiān le.", en: "He put my report aside without even looking at it.", note: "连 + V + 都 + 没/不 + V: repeat the same verb. 'Didn't even LOOK.'" },
        { tag: "V都不V", cn: "她生气了，**连**想**都**不想就拒绝了我。", py: "Tā shēngqì le, lián xiǎng dōu bù xiǎng jiù jùjué le wǒ.", en: "She was angry — she refused me without even thinking.", note: "拒绝 jùjué = to refuse. The 连V都不V + 就 combo = 'without even X-ing, immediately Y'." },
        { tag: "place", cn: "这个地方**连**地图上**都**找不到。", py: "Zhège dìfang lián dìtú shàng dōu zhǎo bu dào.", en: "You can't find this place even on a map.", note: "If even the MAP (best tool for finding places) fails → seriously remote." },
        { tag: "clause", cn: "**连**孩子**都**懂的道理，难道你不懂吗？", py: "Lián háizi dōu dǒng de dàolǐ, nándào nǐ bù dǒng ma?", en: "Even a child understands this — don't tell me you don't?", note: "连…都 nests inside a 的-phrase and teams up with 难道 for maximum rhetorical damage." },
      ]
    },

    /* ------------------------------------------------ 4 */
    {
      type: "table",
      title: "What can be fronted after 连",
      short: "What fronts",
      intro: "Almost anything can be the extreme case — but each type has its own parking spot. Note especially row 2: the object leaves its home after the verb.",
      head: ["Fronted element", "Word order", "Example"],
      rows: [
        ['Subject', '<span class="zh">连 + Subj + 都 + V</span>', '<span class="zh"><b class="hl">连老师</b>都不认识这个字。</span> <span class="py-hint">Lián lǎoshī dōu bú rènshi zhège zì.</span>'],
        ['Object ⚠️', 'Subj + <span class="zh">连 + Obj + 都 + V</span> — object moves BEFORE the verb', '<span class="zh">他<b class="hl">连早饭</b>都没吃就走了。</span> <span class="py-hint">Tā lián zǎofàn dōu méi chī jiù zǒu le.</span>'],
        ['Time', 'Subj + <span class="zh">连 + time + 都 + V</span>', '<span class="zh">她<b class="hl">连春节</b>都没回家。</span> <span class="py-hint">Tā lián Chūnjié dōu méi huíjiā.</span>'],
        ['Amount (一 + M)', '<span class="zh">连 + 一M(N) + 都 + 不/没</span>', '<span class="zh">我<b class="hl">连一次</b>都没迟到过。</span> <span class="py-hint">Wǒ lián yí cì dōu méi chídào guo.</span>'],
        ['The verb itself', '<span class="zh">连 + V + 都 + 不/没 + V</span>', '<span class="zh">他<b class="hl">连问</b>都没问就同意了。</span> <span class="py-hint">Tā lián wèn dōu méi wèn jiù tóngyì le.</span>'],
        ['Place', 'Subj + <span class="zh">连 + place + 都 + V</span>', '<span class="zh">他<b class="hl">连医院</b>都不愿意去。</span> <span class="py-hint">Tā lián yīyuàn dōu bú yuànyì qù.</span>']
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "concept",
      title: "Word order surgery: where everything goes",
      short: "Word order",
      html: `
<h3>1 · The object may NOT stay behind the verb</h3>
<p class="zh" style="font-size:1.15rem">✗ 他连都不喝<s>咖啡</s>。 &nbsp; ✗ 他都不喝连咖啡。 &nbsp;&nbsp;→&nbsp;&nbsp; ✓ 他<b class="hl">连咖啡</b>都不喝。</p>
<p>连 must physically hold its extreme case, and the pair stands before the verb. This is the same “object jumps forward” move you met with 把 — Chinese loves pre-verb spotlights.</p>
<h3>2 · The 连-phrase stays after the subject (usually)</h3>
<p><span class="zh">他连咖啡都不喝</span> — subject first, then 连+object. Fronting the whole thing (<span class="zh">连咖啡他都不喝</span>) is possible for extra drama, but subject-first is the safe exam answer. When the extreme case IS the subject, 连 simply starts the sentence: <span class="zh">连小孩子都知道。</span></p>
<h3>3 · 都/也 hugs the verb</h3>
<p>Nothing separates 都/也 from the verb phrase except negation: <span class="zh">连一口水<b class="hl">都没</b>喝</span>. Order: 连 X + 都/也 + 不/没 + V. Never ✗<span class="zh">连X不都V</span>.</p>
<h3>4 · Negation goes AFTER 都/也</h3>
<p class="zh" style="font-size:1.15rem">✓ 连他也<b class="hl">不</b>知道。 &nbsp;&nbsp; ✗ 连他<s>不</s>也知道。</p>
<h3>5 · Dropping 连 — the shortcut</h3>
<p>With 一 + measure word, native speakers often drop 连: <span class="zh">（连）一分钱都没有</span> → <span class="zh">一分钱都没有</span>. Both correct; 都/也 alone still carries the “even” meaning. But you can never drop 都/也: ✗<span class="zh">连一分钱没有</span>.</p>
<div class="callout warn"><span class="co-title">⚠️ 都 here ≠ “all”</span>
In <span class="zh">连他都会</span>, 都 doesn't mean “all” — 他 is one person! After 连 (or after 一+M), 都 is pure emphasis glue. Don't translate it; just check it's there.</div>`
    },

    /* ------------------------------------------------ 6 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — do you have the rules?",
      short: "Checkpoint",
      intro: "Six quick questions: clamp, word order, and the inference flip.",
      items: [
        { q: '“He doesn\'t even drink tea.” Which is correct?', choices: ['他连不喝茶。', '他连茶都不喝。', '他连都不喝茶。', '他不喝连茶都。'], a: 1, expl: "连 grabs the extreme object (茶), the pair moves before the verb, 都 closes the clamp: 连茶都不喝. Without 都/也 the pattern collapses (✗连不喝茶)." },
        { q: '<span class="zh">这个字**连**老师___不认识。</span>', choices: ['<span class="zh">还</span>', '<span class="zh">都</span>', '<span class="zh">就</span>', '<span class="zh">才</span>'], a: 1, expl: "连 needs its partner 都 or 也 — no substitutes. 还/就/才 have other jobs." },
        { q: '<span class="zh">连他都会做这道题。</span> What does this imply?', choices: ["The problem is very hard.", "The problem is very easy.", "Only he can solve it.", "He is the smartest student."], a: 1, expl: "The inference flip: 他 is picked as the LEAST likely to manage, and even he succeeds → everyone can → easy. With 不会 it would prove the opposite." },
        { q: 'Which sentence means “She left without even saying goodbye”?', choices: ['她再见连都没说就走了。', '她连再见都没说就走了。', '她没连说再见都就走了。', '她连没说再见都就走了。'], a: 1, expl: "连 + object (再见) + 都 + 没 + verb (说): 连再见都没说. 连 sits right before the fronted object, negation lives after 都, and the verb keeps its place." },
        { q: '<span class="zh">我一点儿___不饿，你自己吃吧。</span>', choices: ['<span class="zh">也</span>', '<span class="zh">还</span>', '<span class="zh">很</span>', '<span class="zh">就</span>'], a: 0, expl: "一点儿也不 + adjective = 'not even a little'. It's the little sister of 连…都: the extreme amount 一点儿 + the clamp 也 + negation." },
        { q: 'Where does <span class="zh">都</span> go? <span class="zh">① 他 ② 连 电影院 ③ 没 去过 ④。</span>', choices: ["①", "②", "③", "④"], a: 2, expl: "The clamp closes right before the negation: 他连电影院都没去过 'he has never even been to a cinema'. 都 stands directly in front of 没 + verb." }
      ]
    },

    /* ------------------------------------------------ 7 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — real learner mistakes",
      short: "Error clinic",
      intro: "One bug per patient. Most 连-diseases are word-order diseases — diagnose the position first.",
      items: [
        { wrong: "他连不喝咖啡。", right: "他连咖啡都不喝。", py: "Tā lián kāfēi dōu bù hē.", en: "He doesn't even drink coffee.", expl: "Two problems solved with one move: 连 must hold the extreme case (咖啡), and the clamp needs 都/也. 连 alone before the verb is illegal." },
        { wrong: "他连喝都不咖啡。", right: "他连咖啡都不喝。", py: "Tā lián kāfēi dōu bù hē.", en: "He doesn't even drink coffee.", expl: "If you front the VERB, you must repeat it (连喝都不喝). Fronting the verb and stranding the object gives word salad — front the object instead." },
        { wrong: "连一本中文书都我没看过。", right: "我连一本中文书都没看过。", py: "Wǒ lián yì běn Zhōngwén shū dōu méi kàn guo.", en: "I haven't read even one Chinese book.", expl: "When the fronted element is the OBJECT, the subject still leads the sentence: Subj + 连 + Obj + 都 + 没 + V." },
        { wrong: "我一点儿也知道这件事。", right: "我一点儿也不知道这件事。", py: "Wǒ yìdiǎnr yě bù zhīdào zhè jiàn shì.", en: "I don't know anything about this.", expl: "一点儿也/都 is negative-polarity: it must be followed by 不/没. For the positive idea, say 我知道一点儿." },
        { wrong: "他连看没看就买了。", right: "他连看都没看就买了。", py: "Tā lián kàn dōu méi kàn jiù mǎi le.", en: "He bought it without even looking.", expl: "The clamp is 连…都/也 — drop 都 and the machine stalls. Pattern: 连 + V + 都 + 没 + V." },
        { wrong: "这个问题很容易，连老师都不会。", right: "这个问题很难，连老师都不会。", py: "Zhège wèntí hěn nán, lián lǎoshī dōu bú huì.", en: "This problem is really hard — even the teacher can't do it.", expl: "The inference flip: 连 + strongest candidate + 不会 proves difficulty, not ease. Match the frame to the conclusion." },
        { wrong: "他连甚至早饭都没吃。", right: "他甚至连早饭都没吃。／他连早饭都没吃。", py: "Tā shènzhì lián zǎofàn dōu méi chī.", en: "He didn't even eat breakfast.", expl: "甚至 may reinforce 连 but must come BEFORE it: 甚至连…都. Sandwiching 甚至 inside the 连-phrase breaks the clamp." },
        { wrong: "去应聘的时候，她紧张得连一句话不都敢说。", right: "去应聘的时候，她紧张得连一句话都不敢说。", py: "Qù yìngpìn de shíhou, tā jǐnzhāng de lián yí jù huà dōu bù gǎn shuō.", en: "At the job interview she was so nervous she didn't dare say even a single word.", expl: "Negation lives AFTER the clamp: 连 + X + 都/也 + 不/没 + V. ✗不都敢说 puts 不 before 都 — first close the clamp with 都, then negate, then the verb: 都不敢说." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "amount", cn: "他年轻的时候穷得**连**一个馒头**都**买不起。", py: "Tā niánqīng de shíhou qióng de lián yí ge mántou dōu mǎi bu qǐ.", en: "When he was young he was so poor he couldn't even afford a steamed bun.", note: "得-bridge + clamp: 穷得 + **连**一个馒头**都**买不起. 一 + measure names the cheapest possible thing — if he can't buy THAT, he can buy nothing." },
        { tag: "subject", cn: "这个法律问题太复杂了，**连**有经验的律师**也**回答不了。", py: "Zhège fǎlǜ wèntí tài fùzá le, lián yǒu jīngyàn de lǜshī yě huídá bu liǎo.", en: "This legal question is so complicated that even an experienced lawyer can't answer it.", note: "有经验的律师 = the strongest candidate on the scale. Even he fails → nobody can answer → the question is extremely hard. 也 works like 都." },
        { tag: "VP", cn: "这个小伙子很害羞，**连**跟女孩子说话**都**会脸红。", py: "Zhège xiǎohuǒzi hěn hàixiū, lián gēn nǚháizi shuōhuà dōu huì liǎnhóng.", en: "This young guy is so shy he even blushes when he talks to girls.", note: "A whole verb phrase can front: **连**跟女孩子说话**都**…. Talking is the mildest contact on the scale — even that makes him blush (脸红 liǎnhóng = to blush, literally 'face reddens')." },
        { tag: "time", cn: "为了准备高考，姐姐**连**暑假**都**在学习。", py: "Wèile zhǔnbèi gāokǎo, jiějie lián shǔjià dōu zài xuéxí.", en: "To get ready for the gaokao, my older sister studies even during summer vacation.", note: "Time fronted: 暑假 is when you'd LEAST expect studying. If even then she studies, she studies all year round." },
        { tag: "object", cn: "期末考试快到了，我忙得**连**打羽毛球的时间**也**没有了。", py: "Qīmò kǎoshì kuài dào le, wǒ máng de lián dǎ yǔmáoqiú de shíjiān yě méiyǒu le.", en: "Finals are almost here — I'm so busy I don't even have time to play badminton anymore.", note: "The extreme case can be a full noun phrase: 打羽毛球的时间 — the first bit of free time a busy person gives up." },
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — HSK Writing, part 1 style",
      short: "Builder",
      intro: "Build the clamp: 连 + extreme case + 都/也 (+ 不/没) + verb. Find the extreme case first, then everything snaps into place.",
      items: [
        { tiles: ["他", "连", "咖啡", "都", "不喝"], py: "Tā lián kāfēi dōu bù hē.", en: "He doesn't even drink coffee.", hint: "Object jumps before the verb." },
        { tiles: ["这个字", "连", "老师", "也", "不认识"], py: "Zhège zì lián lǎoshī yě bú rènshi.", en: "Even the teacher doesn't know this character.", hint: "Topic first, then 连 + the strongest candidate.", alt: [["连", "老师", "也", "不认识", "这个字"]] },
        { tiles: ["我", "忙得", "连", "午饭", "都", "没时间", "吃"], py: "Wǒ máng de lián wǔfàn dōu méi shíjiān chī.", en: "I'm so busy I don't even have time for lunch.", hint: "忙得 + consequence; the clamp lives inside the consequence." },
        { tiles: ["他", "连", "看", "都", "没看", "就", "把信", "扔了"], py: "Tā lián kàn dōu méi kàn jiù bǎ xìn rēng le.", en: "He threw the letter away without even looking at it.", hint: "连V都没V + 就 — and a 把 at the end for old times' sake." },
        { tiles: ["那时候", "她", "连", "一分钱", "都", "没有"], py: "Nà shíhou tā lián yì fēn qián dōu méiyǒu.", en: "Back then she didn't have a single cent.", hint: "连 + 一 + measure = absolute zero.", alt: [["她", "那时候", "连", "一分钱", "都", "没有"]] },
        { tiles: ["这件事", "连", "我妈妈", "都", "知道了"], py: "Zhè jiàn shì lián wǒ māma dōu zhīdào le.", en: "Even my mom knows about this already.", hint: "Positive polarity: even the least-informed person knows → everyone knows." },
        { tiles: ["他", "累得", "连", "眼睛", "都", "睁不开", "了"], py: "Tā lèi de lián yǎnjing dōu zhēng bu kāi le.", en: "He's so tired he can't even keep his eyes open.", hint: "睁 zhēng = to open (eyes); potential complement 睁不开 inside the clamp." }
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "tabs",
      title: "The family: 一点儿也不, 甚至, and bare 都",
      short: "The family",
      intro: "Three relatives share the “even” business. Knowing who does what saves you on the reading section.",
      tabs: [
        {
          label: "一点儿也/都不",
          html: `<p>The fixed phrase for “not even a little”: <span class="zh">一点儿 + 也/都 + 不/没</span>. It's really a 连-sentence with 连 dropped: (连)一点儿也不. <b>Negative only</b> — there is no ✗一点儿也很好.</p>`,
          examples: [
            { cn: "这个电影**一点儿**也**不**好看。", py: "Zhège diànyǐng yìdiǎnr yě bù hǎokàn.", en: "This movie isn't the least bit good.", note: "Total negation of a quality." },
            { cn: "昨天的事，我**一点儿**都**不**知道。", py: "Zuótiān de shì, wǒ yìdiǎnr dōu bù zhīdào.", en: "I know nothing at all about what happened yesterday.", note: "也 and 都 are interchangeable here too." }
          ]
        },
        {
          label: "甚至 — “even” for lists",
          html: `<p><span class="zh">甚至</span> is an adverb/connector meaning “even; so much so that”. Unlike 连, it doesn't need 都 and can introduce a whole clause — often the last, most extreme item of a list. The power combo <span class="zh">甚至连…都</span> stacks both.</p>`,
          examples: [
            { cn: "他会说很多语言，**甚至**会说阿拉伯语。", py: "Tā huì shuō hěn duō yǔyán, shènzhì huì shuō Ālābóyǔ.", en: "He speaks many languages — he even speaks Arabic.", note: "甚至 escalates a list; no 都 needed. 阿拉伯语 = Arabic." },
            { cn: "他忙得**甚至连**给妈妈打电话的时间**都**没有。", py: "Tā máng de shènzhì lián gěi māma dǎ diànhuà de shíjiān dōu méiyǒu.", en: "He's so busy he doesn't even have time to call his mom.", note: "甚至 + 连…都 = double emphasis, exam-favourite in reading texts." }
          ]
        },
        {
          label: "Bare 都/也 as “even”",
          html: `<p>Colloquial Chinese often lets 都/也 carry “even” alone, especially with 一 + measure or question words: <span class="zh">一口都没吃</span>, <span class="zh">谁都知道</span>. Grammatically the 连 is invisible but still felt. This bridges into the next topic — question words + 都 (谁都/什么都) run on exactly this engine.</p>`,
          examples: [
            { cn: "他一句话**也**没说就走了。", py: "Tā yí jù huà yě méi shuō jiù zǒu le.", en: "He left without saying a single word.", note: "= 连一句话也没说. Dropping 连 costs nothing." },
            { cn: "这么大的新闻，谁**都**知道了。", py: "Zhème dà de xīnwén, shéi dōu zhīdào le.", en: "News this big — everyone knows already.", note: "谁都 = 'even/any-who' → everyone. Full story in the question-words topic." }
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
<h3>1 · 都 vs 也 — is there any difference?</h3>
<p>After 连: practically none; 都 is a bit stronger and more common, 也 slightly softer. Both are always correct in this pattern — never lose a point agonizing over it.</p>
<h3>2 · 连 + pronoun questions the person's role</h3>
<p><span class="zh">连<b class="hl">你</b>也不相信我？</span> — “Even YOU don't believe me?” — the extreme case is chosen for emotional effect: of all people, you.</p>
<h3>3 · 更别说 / 更不用说 — riding the same scale</h3>
<p>After a 连-sentence, the scale is open — slide down it: <span class="zh">他连自行车都买不起，<b class="hl">更别说</b>汽车了。</span> “He can't even afford a bike, let alone a car.” Spot the pair 连…都…，更别说…了 in reading: it's a two-step scale argument.</p>
<h3>4 · The 得-bridge: 忙得/累得/紧张得 + 连…都</h3>
<p>State complement + 连-clamp is a beloved combo: <span class="zh">他激动得连话都说不出来了。</span> “He was so excited he couldn't even speak.” The 连-phrase describes HOW 忙/累/激动.</p>
<h3>5 · Rhetorical question + 连 = double fire</h3>
<p><span class="zh">连这个都不知道，你上课听什么了？</span> — sarcasm engine at full power. In the listening section, tone + 连 tells you the speaker is annoyed, even if every word is polite.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
Word-arrangement: see a 连 tile? Find the extreme case (noun/verb/一+M) to glue after it, find 都/也 to close the clamp, park negation after the clamp, verb last. The sentence assembles itself.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final exam drill 📝 — HSK 4 level",
      short: "Final drill",
      intro: "A mixed set including inference items — the exam's way of testing whether you feel the scale. Aim for at least four out of five.",
      items: [
        { q: '<span class="zh">他刚来北京的时候，___汉语都不会说。</span>', choices: ['<span class="zh">连一句</span>', '<span class="zh">一句连</span>', '<span class="zh">连很多</span>', '<span class="zh">甚至一句都</span>'], a: 0, expl: "连 + 一句 (extreme minimal amount) + 汉语…都不会说. 连 must directly precede the extreme case; 很多 isn't an extreme minimum; D doubles 都." },
        { q: '<span class="zh">她难过得连饭___。</span>', choices: ['<span class="zh">都不想吃</span>', '<span class="zh">不都想吃</span>', '<span class="zh">想都不吃</span>', '<span class="zh">都想不吃</span>'], a: 0, expl: "Clamp order: 连 + 饭 + 都 + 不 + V: negation follows 都, verb phrase stays intact — 都不想吃." },
        { q: '<span class="zh">这道菜太难做了，连饭馆的师傅都做不好。</span> This implies:', choices: ["Ordinary people definitely can't make it well.", "The chef is not skilled.", "Everyone can make it.", "The restaurant is bad."], a: 0, expl: "Scale logic: the chef is the MOST likely to succeed; if even he fails, everyone below him on the scale fails too. Nothing is claimed about the chef's general skill." },
        { q: 'Which sentence is WRONG?', choices: ['<span class="zh">他连自己的生日都忘了。</span>', '<span class="zh">连小学生都懂这个道理。</span>', '<span class="zh">我连一次也没去过上海。</span>', '<span class="zh">他连吃了早饭都没。</span>'], a: 3, expl: "D scrambles the clamp: correct is 他连早饭都没吃. Negation after 都, verb after negation — always." },
        { q: '<span class="zh">房间里安静得___一点儿声音都没有。</span>', choices: ['<span class="zh">连</span>', '<span class="zh">都</span>', '<span class="zh">还</span>', '<span class="zh">也</span>'], a: 0, expl: "The clamp already has 都 (一点儿声音都没有); the blank before the extreme case takes 连: 安静得连一点儿声音都没有." },
        { q: '“Everyone knows he got married — even his old classmates abroad.” Which fits?', choices: ['<span class="zh">连国外的老同学都知道了。</span>', '<span class="zh">国外的老同学连都知道了。</span>', '<span class="zh">连国外的老同学知道了。</span>', '<span class="zh">国外的连老同学都知道了。</span>'], a: 0, expl: "连 + full noun phrase + 都 + verb. B and D split 连 from its case; C forgot the clamp's second half." },
        { q: '<span class="zh">A：你借他钱了吗？ B：我自己___，怎么借给他？</span>', choices: ['<span class="zh">连一分钱都没有</span>', '<span class="zh">一分钱连没有</span>', '<span class="zh">连一分钱没有</span>', '<span class="zh">都一分钱没有</span>'], a: 0, expl: "连一分钱都没有 — the full clamp. 连一分钱没有 is the tempting one: dropping 都 is illegal (you may only drop 连, never 都)." },
        { q: '<span class="zh">他连想都没想就答应了。</span> How did he agree?', choices: ["after long thought", "instantly, without thinking", "reluctantly", "he didn't agree"], a: 1, expl: "连V都没V + 就 = 'without even V-ing, immediately…'. He said yes on the spot. The exam tests whether you read the pattern as manner, not as refusal." },
        { q: '<span class="zh">这次考试很难，___小明___没考好。</span> 小明 is the best student. Choose:', choices: ['<span class="zh">连 / 都</span>', '<span class="zh">甚至 / 就</span>', '<span class="zh">因为 / 所以</span>', '<span class="zh">虽然 / 但是</span>'], a: 0, expl: "Best student + hard exam → extreme-case proof: 连小明都没考好. 甚至 would need 都 as well, not 就." },
        { q: 'Which two sentences mean the SAME? ① <span class="zh">他一口水都没喝。</span> ② <span class="zh">他连一口水都没喝。</span> ③ <span class="zh">他没喝一口水就走了。</span>', choices: ["① and ②", "② and ③", "① and ③", "all three"], a: 0, expl: "① is ② with 连 dropped — identical meaning, both 'didn't drink even a sip'. ③ says he left after not drinking — a sequence, not pure emphasis." },
        { q: '<span class="zh">她激动得连话___说不出来了。</span>', choices: ['<span class="zh">都</span>', '<span class="zh">还</span>', '<span class="zh">就</span>', '<span class="zh">才</span>'], a: 0, expl: "连话都说不出来 — the clamp closes with 都 before the (potential-complement) verb phrase 说不出来." },
        { q: 'Reading logic: <span class="zh">这里的夏天，连晚上都有三十多度。</span> The writer wants to say:', choices: ["Nights here are cool.", "Summers here are extremely hot.", "Thirty degrees is comfortable.", "It's hotter at night than by day."], a: 1, expl: "Night = the coolest part of the day (the extreme case). If even nights hit 30°+, the days are worse → the point is the overall heat. Classic implied-scale reading item." },
        { q: "<span class=\"zh\">今年冬天极其寒冷，连很少下雪的南方都下了大雪。</span> The writer wants to say:", choices: ["This winter is unusually cold everywhere in the country.", "It only snowed in the south this year.", "The south is colder than the north.", "It rarely snows anywhere in China."], a: 0, expl: "Scale logic: the south is the place LEAST likely to get heavy snow. If even the south got it, the north certainly did → the point is nationwide extreme cold. C misreads the extreme case as a comparison; B and D ignore the implied rest of the scale." },
        { q: "<span class=\"zh\">那个人真没礼貌，撞了我一下，___就走了。</span>", choices: ["<span class=\"zh\">连一句抱歉都没说</span>", "<span class=\"zh\">连一句抱歉没说都</span>", "<span class=\"zh\">一句抱歉连都没说</span>", "<span class=\"zh\">连没说一句抱歉都</span>"], a: 0, expl: "Clamp order: 连 + extreme case (一句抱歉) + 都 + 没 + verb → 连一句抱歉都没说. 都 may never trail the verb (B), 连 may never stand apart from its case (C), and negation comes after 都, not glued to 连 (D)." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">连……都/也 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Rule</th><th>Remember</th></tr>
<tr><td>Frame</td><td>(Subj) + <b class="hl">连</b> + extreme X + <b class="hl">都/也</b> (+不/没) + V</td></tr>
<tr><td>Object fronts</td><td>他<b class="hl">连咖啡都</b>不喝 — object jumps before the verb, like with 把</td></tr>
<tr><td>Verb doubles</td><td>连 + V + 都 + 不/没 + V: 连看都没看 “without even looking”</td></tr>
<tr><td>Absolute zero</td><td>连 + 一 + M (+N) + 都 + 不/没: 连一分钱都没有 — 连 droppable, 都 never</td></tr>
<tr><td>Inference flip</td><td>连 + weakest + ✓ → easy/everyone · 连 + strongest + ✗ → hard/nobody</td></tr>
<tr><td>Negation slot</td><td>AFTER 都/也: 连他也<b class="hl">不</b>知道 · ✗连他不也知道</td></tr>
<tr><td>Family</td><td>一点儿也不 (mini-连, negative only) · 甚至(连)…都 · …，更别说…了</td></tr>
<tr><td>Languages</td><td>positive = sogar / hasta · negative = nicht einmal / ni siquiera</td></tr>
<tr><td>☠️ Traps</td><td>missing 都 ✗连他不会 · object after verb ✗连都不喝咖啡 · flip misread</td></tr>
</table></div>`
    }
  ]
});
