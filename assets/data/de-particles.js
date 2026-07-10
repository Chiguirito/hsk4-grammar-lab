/* HSK 4 Grammar Lab — 的・地・得 (the three de) */
registerPage({
  id: "de-particles",
  zh: "**的・地・得**",
  title: "The three de — one sound, three jobs",
  subtitle: "You've been writing 的 since HSK 1 and met 得-complements in HSK 3. HSK 4's Writing section now expects you to pick the right character every time — and its dictation-style items are built precisely on the fact that all three sound identical: de.",
  sections: [

    /* ------------------------------------------------ 1 */
    {
      type: "concept",
      title: 'The big idea: <b class="hl">de</b> is a sound, not a word',
      short: "Big idea",
      html: `
<p>Say <span class="zh">的</span>, <span class="zh">地</span> and <span class="zh">得</span> out loud: all three are the same weak little <i>de</i>. Your ear can't tell them apart — only <b>grammar</b> can. Each one is a signpost pointing at a different neighbour:</p>
<ul>
<li><span class="pill">的</span> points <b>forward at a noun</b>: <span class="zh">漂亮<b class="hl">的</b>裙子</span> — “a pretty <b>dress</b>”.</li>
<li><span class="pill">地</span> points <b>forward at a verb</b>: <span class="zh">认真<b class="hl">地</b>学习</span> — “<b>study</b> carefully”.</li>
<li><span class="pill">得</span> points <b>backward at a verb/adjective</b> and opens a comment on it: <span class="zh">说<b class="hl">得</b>很流利</span> — “speaks (such that it's) fluent”.</li>
</ul>
<div class="pattern">…<span class="slot">的</span> + NOUN &nbsp;·&nbsp; …<span class="slot">地</span> + VERB &nbsp;·&nbsp; VERB/ADJ + <span class="slot">得</span> + comment<small>的 and 地 introduce; 得 follows up. That asymmetry is the whole system.</small></div>
<div class="callout cmp"><span class="co-title">🇬🇧 The adjective/adverb instinct you already have</span>
English splits the same jobs by word shape: <i>a <b>quick</b> answer</i> (adjective before noun → 的) vs <i>he answered <b>quickly</b></i> (adverb, -ly → 地). And <i>“he speaks <b>so fluently that…</b>”</i> — a comment after the verb — is 得-land. German doesn't mark the difference (<i>schnell</i> does both jobs), and colloquial Spanish often lets <i>rápido</i> stand in for <i>rápidamente</i> — so anchor yourself to the English -ly test.</div>
<div class="callout rule"><span class="co-title">Why HSK 4 cares</span>
Native children drill 的/地/得 in school — which tells you it's about rules, not vocabulary. The exam plants the wrong de in Reading, and in Writing you lose marks for 慢慢<s>得</s>走. One algorithm (next sections) fixes all of it.</div>`
    },

    /* ------------------------------------------------ 2 */
    {
      type: "table",
      title: "Side by side: the three de at one glance",
      short: "Compare",
      intro: "Same sound, three addresses. The 'English hook' column is your translation reflex.",
      head: ["Character", "Position", "It marks", "English hook", "Example"],
      rows: [
        ['<span class="zh" style="font-size:1.3rem">的</span>', 'before a <b>noun</b>', 'attribution: whose / what kind of', 'adjective, possessive, relative clause', '<span class="zh">妈妈<b class="hl">的</b>手机 · 新买<b class="hl">的</b>车</span> <span class="py-hint">māma de shǒujī · xīn mǎi de chē</span>'],
        ['<span class="zh" style="font-size:1.3rem">地</span>', 'before a <b>verb</b>', 'manner: how the action is done', 'adverb (-ly)', '<span class="zh">慢慢<b class="hl">地</b>走 · 认真<b class="hl">地</b>听</span> <span class="py-hint">mànmàn de zǒu · rènzhēn de tīng</span>'],
        ['<span class="zh" style="font-size:1.3rem">得</span>', 'after a <b>verb/adjective</b>', 'complement: how it turned out / to what degree / whether it\'s possible', '“so … that”, “can/can\'t”', '<span class="zh">跑<b class="hl">得</b>很快 · 热<b class="hl">得</b>不得了 · 听<b class="hl">得</b>懂</span> <span class="py-hint">pǎo de hěn kuài · rè de bùdéliǎo · tīng de dǒng</span>']
      ]
    },

    /* ------------------------------------------------ 3 */
    {
      type: "concept",
      title: 'The decision algorithm — two questions, zero doubt',
      short: "Algorithm",
      html: `
<p>Every de-question on the exam falls to this two-step check. Run it mechanically:</p>
<h3>Step 1 · What comes <b class="hl">AFTER</b> the blank?</h3>
<div class="pattern">___ + noun → <span class="slot">的</span><small>漂亮__裙子 → dress is a noun → 的</small></div>
<div class="pattern">___ + verb (an action about to be described) → <span class="slot">地</span><small>认真__听课 → 听 is a verb → 地</small></div>
<h3>Step 2 · Nothing noun-y or verb-y after it? Look <b class="hl">BEFORE</b> the blank.</h3>
<div class="pattern">verb/adjective + ___ + comment → <span class="slot">得</span><small>说__很流利 → 说 is a verb, 很流利 comments on it → 得</small></div>
<p>Double-check with the <b>translation reflex</b>: would English use an adjective (→的), an <i>-ly</i> adverb (→地), or “so…that / can” (→得)?</p>
<div class="callout tip"><span class="co-title">💡 The 很-test for 得</span>
After 得 you can usually park a 很: <span class="zh">跑得<b class="hl">很</b>快、写得<b class="hl">很</b>漂亮</span>. If inserting 很 sounds fine, you're in complement territory — 得 it is. Neither 的 nor 地 tolerates a 很 right after it.</div>
<div class="callout warn"><span class="co-title">⚠️ One structural surprise</span>
The word after 地 is a verb, but the word after 的 can ALSO be missing: <span class="zh">这本书是我<b class="hl">的</b>。</span> “mine” — 的 swallows an obvious noun. If the blank ends the sentence and means “one belonging to…”, it's 的.</div>`
    },

    /* ------------------------------------------------ 4 */
    {
      type: "examples",
      title: "Model sentences — all three in the wild",
      short: "Examples",
      intro: "Tap 🔊 to listen. Before reading the note, name which de is used and why.",
      items: [
        { tag: "的", cn: "这是谁**的**伞？拿错**的**人请还给我。", py: "Zhè shì shéi de sǎn? Ná cuò de rén qǐng huán gěi wǒ.", en: "Whose umbrella is this? Whoever took the wrong one, please return it to me.", note: "Two 的: possession (谁的) and a whole clause turned into a noun-modifier (拿错的人)." },
        { tag: "的", cn: "我最喜欢喝妈妈做**的**汤。", py: "Wǒ zuì xǐhuan hē māma zuò de tāng.", en: "I love the soup my mom makes most.", note: "妈妈做 is a mini-sentence stuck onto 汤 — Chinese relative clauses always end in 的." },
        { tag: "地", cn: "她热情**地**欢迎了我们。", py: "Tā rèqíng de huānyíng le wǒmen.", en: "She welcomed us warmly.", note: "热情 describes HOW she welcomed → -ly adverb → 地." },
        { tag: "地", cn: "孩子们高高兴兴**地**跑出了教室。", py: "Háizimen gāogāoxìngxìng de pǎo chū le jiàoshì.", en: "The kids ran happily out of the classroom.", note: "AABB reduplication (高高兴兴) + 地 before the verb — the classic HSK4 writing chunk." },
        { tag: "地", cn: "请你认真**地**想一想再回答。", py: "Qǐng nǐ rènzhēn de xiǎng yi xiǎng zài huídá.", en: "Please think it over carefully before answering.", note: "Disyllabic adjective (认真) + 地 + verb. With two-syllable adjectives, 地 is normally kept." },
        { tag: "得", cn: "他跑**得**比我快多了。", py: "Tā pǎo de bǐ wǒ kuài duō le.", en: "He runs way faster than I do.", note: "Comment after the verb — even a whole comparison can ride on 得." },
        { tag: "得", cn: "昨天我忙**得**连饭都没吃。", py: "Zuótiān wǒ máng de lián fàn dōu méi chī.", en: "Yesterday I was so busy I didn't even eat.", note: "Adjective + 得 + result: 'busy to the point that…'. See the degree-complements topic." },
        { tag: "的+得", cn: "老师说**的**话你都听**得**懂吗？", py: "Lǎoshī shuō de huà nǐ dōu tīng de dǒng ma?", en: "Can you understand everything the teacher says?", note: "Both in one sentence: 说的话 (clause + noun), 听得懂 (potential complement — 'can understand')." },
        { tag: "得", cn: "你汉语说**得**越来越流利了！", py: "Nǐ Hànyǔ shuō de yuèláiyuè liúlì le!", en: "Your Chinese is getting more and more fluent!", note: "State complement: the comment (越来越流利) follows 说得." },
        { tag: "真的", cn: "对不起，我真**的**不是故意**的**。", py: "Duìbuqǐ, wǒ zhēn de bú shì gùyì de.", en: "Sorry — I really didn't do it on purpose.", note: "真的 is a fixed word ('really'), and sentence-final 是…的 also takes 的. Never 地/得 here." },
      ]
    },

    /* ------------------------------------------------ 5 */
    {
      type: "tabs",
      title: "Deep dive: each de, its home turf",
      short: "Deep dive",
      intro: "One tab per character — including the rules about when you may DROP it.",
      tabs: [
        {
          label: "的 + noun",
          html: `<p><span class="zh">的</span> glues any description onto a noun: possession (<span class="zh">我的书</span>), qualities (<span class="zh">安静的地方</span>), whole clauses (<span class="zh">昨天来的那个人</span>).</p>
<ul>
<li><b>Drop it for close relationships & groups:</b> <span class="zh">我妈、我家、我们学校、我朋友</span> — the closer the bond, the lighter the 的.</li>
<li><b>Drop it after single-syllable adjectives:</b> <span class="zh">好朋友、新车、小问题</span> — but keep it once the adjective grows: <span class="zh">漂亮<b class="hl">的</b>裙子、很大<b class="hl">的</b>问题</span>.</li>
<li><b>Don't stack three 的 in a row.</b> <span class="zh">我朋友送<b class="hl">的</b>那本关于中国历史<b class="hl">的</b>书</span> is already the limit — reorganize instead of chaining more.</li>
<li><b>的 can eat its noun:</b> <span class="zh">红的、卖菜的、我的</span> — “the red one / the vegetable seller / mine”.</li>
</ul>`,
          examples: [
            { cn: "我妈是医生，我爸是**中学的**老师。", py: "Wǒ mā shì yīshēng, wǒ bà shì zhōngxué de lǎoshī.", en: "My mom is a doctor; my dad teaches at a middle school.", note: "我妈/我爸 without 的 (family), but 中学的老师 keeps it (institution + role)." },
            { cn: "那个穿红衣服**的**女孩儿是我妹妹。", py: "Nàge chuān hóng yīfu de nǚháir shì wǒ mèimei.", en: "The girl in red is my younger sister.", note: "Verb phrase (穿红衣服) + 的 + noun — English says 'who wears…', Chinese fronts it." },
            { cn: "桌子上**的**那杯咖啡是你**的**吗？", py: "Zhuōzi shàng de nà bēi kāfēi shì nǐ de ma?", en: "Is that cup of coffee on the table yours?", note: "Second 的 stands alone: 你的 = 'yours', noun swallowed." }
          ]
        },
        {
          label: "地 + verb",
          html: `<p><span class="zh">地</span> turns a description into a “how”-marker before the action.</p>
<ul>
<li><b>Disyllabic adjective + 地:</b> <span class="zh">努力地工作、安静地坐着、仔细地检查</span> — keep the 地.</li>
<li><b>Reduplication + 地:</b> AABB for two-syllable adjectives (<span class="zh">高高兴兴地回家</span>), AA for one-syllable ones (<span class="zh">慢慢地吃</span>). <b class="hl">After reduplication, 地 becomes optional</b>: <span class="zh">慢慢走</span> = <span class="zh">慢慢地走</span> — both correct.</li>
<li><b>Bare single-syllable adjectives don't take 地:</b> say <span class="zh">快走！</span> or <span class="zh">快点儿走</span>, not ✗<span class="zh">快地走</span>. Double it first if you want 地: <span class="zh">快快地跑</span>.</li>
<li><b>True adverbs never take 地:</b> <span class="zh">已经、马上、忽然、常常</span> go straight before the verb — they're born adverbs and need no badge.</li>
</ul>`,
          examples: [
            { cn: "她小声**地**告诉我一个秘密。", py: "Tā xiǎo shēng de gàosu wǒ yí ge mìmì.", en: "She quietly told me a secret.", note: "小声 'in a low voice' + 地 + 告诉." },
            { cn: "大家慢慢**（地）**吃，不着急。", py: "Dàjiā mànmàn (de) chī, bù zháojí.", en: "Everyone eat slowly, no rush.", note: "After reduplicated 慢慢, the 地 is optional — with or without, both are exam-safe." },
            { cn: "他很快**地**穿好衣服出门了。", py: "Tā hěn kuài de chuān hǎo yīfu chūmén le.", en: "He got dressed quickly and headed out.", note: "很 + 快 makes the phrase heavy enough to carry 地." }
          ]
        },
        {
          label: "V/Adj + 得",
          html: `<p><span class="zh">得</span> opens a complement — the follow-up comment. Three kinds, all HSK 4 core (each has its own topic in the Complements unit):</p>
<ul>
<li><b>State</b> (how it habitually/actually goes): <span class="zh">他篮球打<b class="hl">得</b>特别好。</span> Note the doubled-verb frame with objects: <span class="zh">说汉语说得…</span> or topic-fronted <span class="zh">汉语说得…</span>.</li>
<li><b>Degree</b> (so … that): <span class="zh">热<b class="hl">得</b>不得了、高兴<b class="hl">得</b>跳了起来</span>.</li>
<li><b>Potential</b> (can/can't): <span class="zh">听<b class="hl">得</b>懂 / 听<b class="hl">不</b>懂</span> — the negative swaps 得 for 不. Full story in the potential-complements topic.</li>
</ul>
<p><b>Negation position:</b> the state complement negates INSIDE the comment: <span class="zh">他说<b class="hl">得不</b>流利</span>, never ✗<span class="zh">他不说得流利</span>.</p>`,
          examples: [
            { cn: "他篮球打**得**特别好。", py: "Tā lánqiú dǎ de tèbié hǎo.", en: "He plays basketball exceptionally well.", note: "Topic (篮球) + V + 得 + comment — the standard state complement." },
            { cn: "我昨晚睡**得**不太好。", py: "Wǒ zuówǎn shuì de bú tài hǎo.", en: "I didn't sleep very well last night.", note: "不 lives after 得, inside the comment." },
            { cn: "这么多菜，我们吃**得**完吗？", py: "Zhème duō cài, wǒmen chī de wán ma?", en: "So much food — can we finish it?", note: "Potential complement: 吃得完 'able to finish eating'." }
          ]
        }
      ]
    },

    /* ------------------------------------------------ 6 */
    {
      type: "concept",
      title: 'Fixed cases & dictation traps: 真的, 觉得, 慢慢(地)',
      short: "Fixed cases",
      html: `
<p>Some de-spellings are frozen — no algorithm needed, just memory:</p>
<h3>1 · 得 hiding INSIDE words</h3>
<p><span class="zh">觉<b class="hl">得</b>（to feel/think）、记<b class="hl">得</b>（to remember）、懂<b class="hl">得</b>（to understand）、显<b class="hl">得</b>（to appear）、值<b class="hl">得</b>（to be worth）</span> — here 得 is part of the verb itself, not a particle. Writing ✗<span class="zh">觉的</span> is one of the most common dictation errors on the planet.</p>
<h3>2 · Words frozen with 的</h3>
<p><span class="zh">真<b class="hl">的</b></span> “really”, <span class="zh">有<b class="hl">的</b></span> “some”, <span class="zh">别<b class="hl">的</b></span> “other”, <span class="zh">…什么<b class="hl">的</b></span> “and stuff”, and the emphasis frame <span class="zh">是…<b class="hl">的</b></span> (its own topic). None of these ever switch spelling.</p>
<h3>3 · 慢慢(地) and friends</h3>
<p>After reduplicated adjectives the 地 is optional: <span class="zh">慢慢(地)说、好好儿(地)休息、早早(地)出发</span>. What is NOT optional is the spelling — if you write it, write <b class="hl">地</b>.</p>
<h3>4 · The dictation strategy</h3>
<p>In listening-based writing, you hear only <i>de</i>. Don't transcribe sound — parse structure: locate the nearest verb/noun, run the algorithm, then write. <span class="zh">Tā mànmàn de zhàn le qǐlái</span> → 站 is a verb after the de → <span class="zh">慢慢<b class="hl">地</b>站了起来</span>.</p>
<div class="callout warn"><span class="co-title">⚠️ 高兴地说 vs 高兴得说不出话</span>
Both exist! <span class="zh">她高兴<b class="hl">地</b>说：“谢谢！”</span> — happily, she said (manner → 地). <span class="zh">她高兴<b class="hl">得</b>说不出话来。</span> — SO happy that she couldn't speak (degree → 得). Ask: is the second part the action being done (地), or the crazy result of the feeling (得)?</div>`
    },

    /* ------------------------------------------------ 7 */
    {
      type: "mcq",
      title: "Checkpoint ✋ — is the algorithm installed?",
      short: "Checkpoint",
      intro: "Six warm-up questions on the rules themselves. The big cloze drill comes later.",
      items: [
        { q: 'Which question do you ask FIRST when choosing a de?', choices: ["What sound does it make?", "What comes after the blank?", "Is the sentence past tense?", "Is the subject a person?"], a: 1, expl: "Step 1 of the algorithm: look AFTER the blank. Noun → 的, verb → 地. Only if that fails, look before (verb/adj → 得). Sound never helps — they're identical." },
        { q: 'Which is spelled correctly?', choices: ['<span class="zh">我觉的很累。</span>', '<span class="zh">我觉地很累。</span>', '<span class="zh">我觉得很累。</span>', '<span class="zh">我决得很累。</span>'], a: 2, expl: "觉得 is one word — the 得 is baked in, not a particle you can swap. Same family: 记得, 懂得, 显得, 值得." },
        { q: '<span class="zh">她高兴___说不出话来。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>', 'nothing'], a: 2, expl: "说不出话来 is the RESULT of being happy — 'so happy that…' → degree complement → 得. 地 would mean she 'happily failed to speak', which makes no sense." },
        { q: 'Which sentence is correct?', choices: ['<span class="zh">请慢慢得说。</span>', '<span class="zh">请慢慢地说。</span>', '<span class="zh">请慢慢的说。</span>', '<span class="zh">请得慢慢说。</span>'], a: 1, expl: "Reduplicated adjective before a verb → 地 (or nothing at all: 慢慢说 ✓). If you write the particle, it must be 地." },
        { q: '<span class="zh">黑板上___字你看___清楚吗？</span>', choices: ['<span class="zh">的 / 得</span>', '<span class="zh">得 / 的</span>', '<span class="zh">地 / 得</span>', '<span class="zh">的 / 地</span>'], a: 0, expl: "黑板上__字: 字 is a noun → 的. 看__清楚: comment/potential after the verb 看 → 得 (看得清楚 'can see clearly')." },
        { q: 'Which word can NEVER take 地?', choices: ['<span class="zh">认真</span>', '<span class="zh">忽然</span>', '<span class="zh">热情</span>', '<span class="zh">安静</span>'], a: 1, expl: "忽然 is already an adverb — born for the pre-verb slot, no badge needed. Adjectives like 认真/热情/安静 need 地 to work as adverbials." }
      ]
    },

    /* ------------------------------------------------ 8 */
    {
      type: "clinic",
      title: "Error clinic 🚑 — spelling surgery",
      short: "Error clinic",
      intro: "Every patient wrote the wrong de (natives do it too — the exam knows). Find it, fix it, name the rule.",
      items: [
        { wrong: "他慢慢的走进了教室。", right: "他慢慢地走进了教室。", py: "Tā mànmàn de zǒu jìn le jiàoshì.", en: "He walked slowly into the classroom.", expl: "走 is a verb, so the marker before it is 地. Writing 的 here is the #1 native sloppy habit — the exam still counts it wrong." },
        { wrong: "她唱歌唱的很好听。", right: "她唱歌唱得很好听。", py: "Tā chàng gē chàng de hěn hǎotīng.", en: "She sings beautifully.", expl: "很好听 is a comment AFTER the verb 唱 → state complement → 得. The 很-test confirms it." },
        { wrong: "这是我妈妈得手机。", right: "这是我妈妈的手机。", py: "Zhè shì wǒ māma de shǒujī.", en: "This is my mom's phone.", expl: "手机 is a noun; possession before a noun → 的. 得 only ever follows a verb or adjective." },
        { wrong: "我觉的这个主意不错。", right: "我觉得这个主意不错。", py: "Wǒ juéde zhège zhǔyi búcuò.", en: "I think this idea is pretty good.", expl: "觉得 is a single verb with 得 built in — never 觉的. Memorize the family: 觉得、记得、懂得、值得." },
        { wrong: "他高兴地说不出话来。", right: "他高兴得说不出话来。", py: "Tā gāoxìng de shuō bu chū huà lái.", en: "He was so happy he couldn't get a word out.", expl: "说不出话来 is the RESULT of the emotion ('so happy that…') → degree complement → 得. 地 would claim 'not speaking' was done happily on purpose." },
        { wrong: "大家都认真得听老师讲课。", right: "大家都认真地听老师讲课。", py: "Dàjiā dōu rènzhēn de tīng lǎoshī jiǎngkè.", en: "Everyone listened carefully to the teacher's lecture.", expl: "认真 describes HOW they listen, and 听 (a verb) follows → 地. 得 would need to come AFTER a verb, not before one." },
        { wrong: "昨天买得那本书很有意思。", right: "昨天买的那本书很有意思。", py: "Zuótiān mǎi de nà běn shū hěn yǒu yìsi.", en: "The book I bought yesterday is really interesting.", expl: "昨天买 modifies the noun 书 — a relative clause always closes with 的. 买得 would start a comment on the buying instead." },
        { wrong: "我们班新来了一个活泼地男孩，大家都喜欢他。", right: "我们班新来了一个活泼的男孩，大家都喜欢他。", py: "Wǒmen bān xīn lái le yí ge huópō de nánhái, dàjiā dōu xǐhuan tā.", en: "A lively new boy joined our class, and everyone likes him.", expl: "男孩 is a noun, and 活泼 describes what KIND of boy → 的. The writer saw a two-syllable adjective and reflexively reached for 地 — but 地 only works when a verb follows (活泼地跑来跑去 ✓). Step 1 of the algorithm: look AFTER the blank first." },
      ]
    },

    /* ------------------------------------------------ consolidation */
    {
      type: "examples",
      title: 'Consolidation — the pattern out in the wild',
      short: "Consolidation",
      intro: "A second lap with fresh vocabulary: every sentence below runs on this topic's machinery. Read each one like exam text — spot the pattern first, then tap any dotted word you don't know.",
      items: [
        { tag: "地", cn: "奶奶耐心**地**教孙女写汉字。", py: "Nǎinai nàixīn de jiāo sūnnǚ xiě Hànzì.", en: "Grandma patiently teaches her granddaughter to write Chinese characters.", note: "Disyllabic adjective 耐心 + **地** + verb 教 — the -ly slot right before the action. With two-syllable adjectives, keep the 地." },
        { tag: "的", cn: "妈妈烤**的**面包软软**的**，很香。", py: "Māma kǎo de miànbāo ruǎnruǎn de, hěn xiāng.", en: "The bread Mom bakes is nice and soft, and it smells wonderful.", note: "Two 的: 妈妈烤**的** is a clause glued onto the noun 面包, and 软软**的** is a reduplicated adjective + 的 used as the predicate." },
        { tag: "得", cn: "这种药苦**得**我喝不下去。", py: "Zhè zhǒng yào kǔ de wǒ hē bu xiàqù.", en: "This medicine is so bitter I can't get it down.", note: "Adjective 苦 + **得** + result — 'so bitter that…'. The comment itself holds a potential form (喝不下去 'can't get it down')." },
        { tag: "得", cn: "他做生意做**得**很成功，朋友们都很尊重他。", py: "Tā zuò shēngyi zuò de hěn chénggōng, péngyoumen dōu hěn zūnzhòng tā.", en: "He runs his business very successfully — his friends all respect him for it.", note: "The object frame: 做生意**做得**很成功 — the verb doubles so 得 can touch it. Never ✗做生意得很成功." },
        { tag: "地", cn: "虽然很害怕，她还是勇敢**地**敲了敲门。", py: "Suīrán hěn hàipà, tā háishi yǒnggǎn de qiāo le qiāo mén.", en: "Even though she was scared, she still bravely knocked on the door.", note: "勇敢 tells HOW she knocked → **地** before the verb 敲. 敲了敲 is the casual V了V pattern — 地 still comes before the whole verb chunk." },
      ]
    },

    /* ------------------------------------------------ 9 */
    {
      type: "builder",
      title: "Sentence builder 🧱 — place the de tiles",
      short: "Builder",
      intro: "Each puzzle contains at least one de tile. Decide its neighbour first, then build outwards.",
      items: [
        { tiles: ["她", "穿着", "一条", "漂亮", "的", "裙子"], py: "Tā chuānzhe yì tiáo piàoliang de qúnzi.", en: "She's wearing a pretty dress.", hint: "的 must land right before the noun 裙子." },
        { tiles: ["他", "高高兴兴", "地", "回家", "去了"], py: "Tā gāogāoxìngxìng de huí jiā qù le.", en: "He went home happily.", hint: "AABB reduplication + 地 + verb." },
        { tiles: ["你", "汉语", "说", "得", "越来越", "流利", "了"], py: "Nǐ Hànyǔ shuō de yuèláiyuè liúlì le.", en: "Your Chinese is getting more and more fluent.", hint: "Topic first (汉语), then V + 得 + comment." },
        { tiles: ["这", "是", "我", "在中国", "买", "的", "茶"], py: "Zhè shì wǒ zài Zhōngguó mǎi de chá.", en: "This is tea I bought in China.", hint: "The whole clause 我在中国买 + 的 modifies 茶." },
        { tiles: ["孩子们", "安安静静", "地", "听", "老师", "讲故事"], py: "Háizimen ān'ānjìngjìng de tīng lǎoshī jiǎng gùshi.", en: "The children listened quietly to the teacher telling a story.", hint: "Reduplicated manner + 地 before the verb 听." },
        { tiles: ["今天", "我", "累", "得", "什么", "都", "不想做"], py: "Jīntiān wǒ lèi de shénme dōu bù xiǎng zuò.", en: "Today I'm so tired I don't want to do anything.", hint: "Adjective 累 + 得 + the extreme result.", alt: [["我", "今天", "累", "得", "什么", "都", "不想做"]] }
      ]
    },

    /* ------------------------------------------------ 10 */
    {
      type: "concept",
      title: "Edge cases the exam loves",
      short: "Edge cases",
      html: `
<h3>1 · 跑得快 is two sentences in one</h3>
<p><span class="zh">他跑得快</span> can mean “he runs fast” (state) or “he CAN run fast” (potential). Context — and especially the negative — splits them: state → <span class="zh">跑<b class="hl">得不</b>快</span> (runs slowly), potential → <span class="zh">跑<b class="hl">不</b>快</span> (can't run fast). The exam checks exactly this negation contrast.</p>
<h3>2 · With an object, the verb doubles — or the object moves up</h3>
<p>✗<span class="zh">他说汉语得很好</span>. Either double the verb: <span class="zh">他说汉语<b class="hl">说</b>得很好</span>, or front the object: <span class="zh">他<b class="hl">汉语</b>说得很好</span>. 得 must touch its verb.</p>
<h3>3 · 是…的 endings are 的, full stop</h3>
<p><span class="zh">我是坐飞机来<b class="hl">的</b>。你会喜欢<b class="hl">的</b>。</span> Emphasis-的 and reassurance-的 close sentences — never spell them 得. Cross-reference the 是…的 topic.</p>
<h3>4 · 的 between verb and object? Only in those separable verbs</h3>
<p><span class="zh">生我<b class="hl">的</b>气、帮你<b class="hl">的</b>忙、开他<b class="hl">的</b>玩笑</span> — 的 slips inside verb-object compounds to mark the target. Full story in the separable-verbs topic; here, just don't “correct” it to 得.</p>
<h3>5 · When natives write it all as 的</h3>
<p>Online you'll see 的 doing all three jobs. Fine for chat — fatal for the HSK Writing section. Exam Chinese = schoolbook Chinese.</p>
<div class="callout tip"><span class="co-title">💡 Exam radar</span>
The dictation task loves four frames: reduplication + <b>地</b> + verb, clause + <b>的</b> + noun, verb + <b>得</b> + 很…, and the frozen words (觉得/真的). If you can spell those four cold, you've covered ~90% of de-items.</div>`
    },

    /* ------------------------------------------------ 11 */
    {
      type: "mcq",
      title: "Final drill 📝 — the big 的/地/得 cloze",
      short: "Cloze drill",
      intro: "Three choices per blank. Run the algorithm every single time: what follows? what precedes? Aim to miss no more than one.",
      items: [
        { q: '<span class="zh">她穿了一条漂亮___裙子。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 0, expl: "裙子 is a noun → 的. Adjective + 的 + noun, the bread-and-butter case." },
        { q: '<span class="zh">他高兴___睡不着觉。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 2, expl: "睡不着觉 is the RESULT of the joy — 'so happy that…' → degree complement → 得." },
        { q: '<span class="zh">同学们安安静静___坐在教室里。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 1, expl: "坐 is a verb; 安安静静 tells HOW they sit → 地." },
        { q: '<span class="zh">你普通话说___真流利！</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 2, expl: "真流利 comments on 说 from behind → state complement → 得. The 很-test: 说得(很)流利 ✓." },
        { q: '<span class="zh">这就是我昨天买___那本书。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 0, expl: "我昨天买 modifies 那本书 (a noun) → relative clause + 的." },
        { q: '<span class="zh">她慢慢___打开了盒子。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 1, expl: "打开 is a verb; reduplicated 慢慢 + 地 + verb. (Dropping the particle entirely would also be fine — but 的/得 are wrong.)" },
        { q: '<span class="zh">今天热___不得了。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 2, expl: "热得不得了 — adjective + 得 + 不得了 is the fixed degree frame 'unbearably…'. " },
        { q: '<span class="zh">他认真___回答了老师的问题。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 1, expl: "回答 is the verb being described → 地. The 的 later in the sentence (老师的问题) is the noun-glue." },
        { q: '<span class="zh">骑自行车___人越来越多了。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 0, expl: "骑自行车 modifies 人 (noun) → 的: 'people who ride bikes'." },
        { q: '<span class="zh">你今天怎么来___这么晚？</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 2, expl: "这么晚 comments on 来 from behind → 来得这么晚. Comment after verb = 得." },
        { q: '<span class="zh">孩子们高高兴兴___回家去了。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 1, expl: "回(家) is the verb; AABB + 地 + verb — the signature 地 frame." },
        { q: '<span class="zh">黑板上的字你看___清楚看不清楚？</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 2, expl: "看得清楚 / 看不清楚 — potential complement pair 'can/can't see clearly' → 得." },
        { q: '<span class="zh">我真___不知道这件事。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 0, expl: "真的 'really' is a frozen word — always 的, even though a verb follows. Fixed cases beat the algorithm." },
        { q: '<span class="zh">她轻轻___关上了门，怕吵醒孩子。</span>', choices: ['<span class="zh">的</span>', '<span class="zh">地</span>', '<span class="zh">得</span>'], a: 1, expl: "关 is a verb; 轻轻 (AA reduplication) tells how → 地. 'She closed the door softly, afraid of waking the child.'" },
        { q: "<span class=\"zh\">他做作业做___太马虎，错___题特别多。</span>", choices: ["<span class=\"zh\">得 / 的</span>", "<span class=\"zh\">的 / 得</span>", "<span class=\"zh\">地 / 的</span>", "<span class=\"zh\">得 / 地</span>"], a: 0, expl: "First blank: 太马虎 is a comment AFTER the doubled verb 做 → state complement → **得** (做作业**做得**太马虎 — the object rule: 得 must touch its verb). Second blank: 题 is a noun, 错**的**题 = 'the questions he got wrong' → clause + 的. 地 fails both blanks — no verb follows either one." },
        { q: "<span class=\"zh\">他得意___说：“明天的比赛，我一定能赢！”</span>", choices: ["<span class=\"zh\">的</span>", "<span class=\"zh\">地</span>", "<span class=\"zh\">得</span>", "nothing — leave it out"], a: 1, expl: "Run the algorithm: 说 is a verb right after the blank → manner → **地** (得意**地**说 'said smugly'). 得 is the trap — 得意**得** exists, but it must open a RESULT (得意得跳了起来); here the speaking IS the action being done proudly. Bare 得意说 isn't idiomatic: 得意 is a disyllabic adjective, so keep the 地." },
      ]
    },

    /* ------------------------------------------------ 12 */
    {
      type: "cheatsheet",
      title: "Pocket cheat sheet — screenshot me 📋",
      short: "Cheat sheet",
      html: `
<h3 class="zh">的·地·得 in one card</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>de</th><th>Frame</th><th>English hook</th><th>Anchor example</th></tr>
<tr><td><b class="hl">的</b></td><td>description + 的 + <b>NOUN</b></td><td>adjective / 's / who-that clause</td><td>妈妈<b>的</b>手机 · 昨天买<b>的</b>书 · 红<b>的</b></td></tr>
<tr><td><b class="hl">地</b></td><td>manner + 地 + <b>VERB</b></td><td>-ly adverb</td><td>认真<b>地</b>听 · 高高兴兴<b>地</b>回家</td></tr>
<tr><td><b class="hl">得</b></td><td><b>VERB/ADJ</b> + 得 + comment</td><td>“so…that” / “can”</td><td>说<b>得</b>很流利 · 累<b>得</b>不想动 · 听<b>得</b>懂</td></tr>
</table></div>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Never forget</th><th>Rule</th></tr>
<tr><td>Algorithm</td><td>① what FOLLOWS? noun→的, verb→地 &nbsp;② else what PRECEDES? verb/adj→得</td></tr>
<tr><td>很-test</td><td>Can you insert 很 after it? → 得 (说得<b>很</b>流利)</td></tr>
<tr><td>Frozen 得</td><td>觉<b>得</b> 记<b>得</b> 懂<b>得</b> 值<b>得</b> — inside the word</td></tr>
<tr><td>Frozen 的</td><td>真<b>的</b> · 有<b>的</b> · 别<b>的</b> · 是…<b>的</b> · …什么<b>的</b></td></tr>
<tr><td>Reduplication</td><td>慢慢(地)走 — 地 optional, but if written it's 地</td></tr>
<tr><td>Negation split</td><td>state: 说得<b>不</b>流利 (不 after 得) · potential: 听<b>不</b>懂 (不 replaces 得)</td></tr>
<tr><td>Object rule</td><td>说汉语<b>说</b>得好 or 汉语说得好 — 得 must touch its verb</td></tr>
</table></div>`
    }
  ]
});
