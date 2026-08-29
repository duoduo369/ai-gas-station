# writing-for-agents 学习拆解

> 原始 skill：[writing-for-agents](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md)
> 目录索引：[技能拆解/README.md](./README.md)
> 快速跳转：[跳到原文附录](#skill-source-md) · [跳到中文附录](#skill-source-zh)

## 这是什么

`writing-for-agents` 不是一篇“怎么写文档”的泛论，而是一套专门面向 agent 文档的写作杠杆。它关心的不是文笔，而是怎样让 agent 在每次运行里更稳定地走到同一套过程。

## 最值得内化的几个杠杆

### 1. context pointer 的 wording 比目标文件本身更重要

skill 把 `description`、`AGENTS.md` 里的路由语句都视为 `context pointer`。agent 能不能在对的时候读到对的材料，先取决于 pointer 怎么写，而不是目标文档写得多完整。

我理解这里的关键是：

- pointer 要同时说明“这是什么材料”和“什么分支该触发它”。
- 常驻上下文的词特别贵，所以要删掉重复触发词和无效身份描述。

### 2. 所有文档都在花两种负载

它把取舍讲得很清楚：

- `context load`：材料常驻在窗口里，持续消耗 token 和注意力。
- `cognitive load`：人要记得文档存在，并在合适的时候去拿。

这套视角很好，因为很多文档问题本质上不是“写多还是写少”，而是“这段信息该花哪一种负载”。

### 3. 信息层级要保护步骤，不要让参考材料把步骤埋掉

它把文档分成三层：

1. in-file step
2. in-file reference
3. disclosed reference

最强的提醒是 `progressive disclosure`：不是为了省 token 才拆文档，而是为了保护真正要执行的步骤不被大段参考材料淹没。

### 4. completion criteria 要同时清楚且有压力

skill 用 `clarity` 和 `demand` 来定义 completion criterion：

- `clarity` 解决“agent 能不能判断已经完成”。
- `demand` 解决“agent 会不会只做表面工夫”。

这个拆法很实用，因为很多 premature completion 不是 agent 不努力，而是“完成”本身写得太糊。

### 5. leading words 是高压缩的行为锚点

`leading word` 这个概念很强。它不是 slogan，而是复用模型已有先验的短词，让 agent 一看到这个词就调起一整片行为模式。

相比反复写一长串要求，好的 leading word 能同时降低 token 成本和行为方差。

### 6. pruning 是持续对抗 sediment

它提醒得很狠：文档会自然沉积成 `sediment`。所以要不停删：

- 重复单一事实源的句子。
- 环境里一眼就能查到的缓存。
- 对默认行为没有增量影响的 no-op 句子。

这个标准很适合拿来审现有的 agent 文档。

## skill 机制上的补充收获

它引用的 `SKILL-MECHANICS.md` 又补了一层很有用的判断：

- model-invoked skill 用 `description` 换自动发现能力，但要持续支付 context load。
- user-invoked skill 几乎不花 context load，但要求人自己记得它。
- 当 user-invoked skill 多到记不住时，可以用 router skill 降低人的认知负担。

这让我更容易判断一个 skill 到底该做常驻入口，还是做按需工具。

这里我又补上两个更落地的理解：

- user-invoked 的核心机制不是某个具体 UI 动作，而是“必须由人显式触发”。在不同 harness 里，这可能表现为输入 skill 名、斜线命令或别的显式入口；真正稳定的机制是：它不会靠 `description` 被模型自动发现。
- 这类设计对日常工具特别有用。只在我明确需要时才触发，能省掉常驻描述带来的 token 开销，也能避免模型在不该用的时候自己伸手去用。

## 和 scope 的关系

我现在会把两个问题拆开看：

- `scope`：这个 skill 属于 user-level，还是 project-level。
- `invocation`：这个 skill 该 user-invoked，还是 model-invoked。

这两个维度是正交的，不该混成一个判断。

比如一个 skill 完全可能是 project-level 的协作资产，但依然选择 user-invoked，因为它只该在团队成员显式需要时启动；反过来，一个用户侧 skill 也可能因为确实需要自动发现而保留 `description`。

所以更稳的判断顺序是：

1. 先决定它属于谁，放在哪一层维护。
2. 再决定它要不要为 discoverability 持续支付 context load。

## 对我的启发

- agent 文档写作的目标不是“说清楚全部”，而是“把正确过程稳定地召回出来”。
- 先写好 pointer，再补正文，常常比一开始猛堆正文更有效。
- 以后整理 skill、`AGENTS.md` 或说明文档时，可以先用这几个词做自检：pointer、load、hierarchy、completion、leading words、pruning。

<a id="skill-source-md"></a>
## 附录 A：原始 SKILL.md

````md
---
name: writing-for-agents
description: Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md.
---

Reference for writing any document an agent consumes: a skill, an `AGENTS.md` / `CLAUDE.md`, a doc reached by a pointer. The packaging differs; the writing does not: the same levers make each one predictable, since the agent takes the same _process_ every run rather than producing the same output.

When the document you're writing is a skill, read [`SKILL-MECHANICS.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL-MECHANICS.md) for frontmatter, invocation choice, and router skills.

## Context pointers

A **context pointer** is a reference held in the agent's context that names some out-of-context material and encodes the condition for reaching it. A skill's description is one; a line in `AGENTS.md` naming a doc is the same object. The pointer's _wording_, not its target, decides when the agent reaches the material, and how reliably. A must-have target behind a weakly worded pointer is a variance bug: sharpen the wording first, and inline the material only if sharpening fails.

A pointer does two jobs: state what the material is, and list the **branches** that should trigger reaching it (a branch is a distinct case the document handles, so different runs take different paths through it). Every word of an always-loaded pointer costs on every turn, so it earns even harder pruning than the body:

- **Front-load the leading word**: the pointer is where it does its triggering work.
- **One trigger per branch.** Synonyms that rename a single branch are one branch written twice; collapse them and keep only genuinely distinct branches.
- **Cut identity the body already carries.**

## The two loads

Every document and pointer you add spends one of two budgets:

- **Context load** is the cost of always-loaded material on the agent's window: an `AGENTS.md` line, a skill description, anything sitting in context every turn, spending tokens and attention whether or not it fires.
- **Cognitive load** is the cost on the human: which documents exist and when to reach for each. The human is the index. Not a cost to minimise: it is the price of human agency; spend it where human judgement matters, remove it where it does not.

Material reached only through a pointer escapes context load at the price of the pointer's own line; material with no pointer at all rides entirely on cognitive load.

## Information hierarchy

A document is built from two content types: **steps** (the ordered actions the agent performs) and **reference** (definitions, rules, facts consulted on demand). The two mix freely: all steps (a recipe), all reference (a review's rules, this skill), or both. The core decision is where each piece sits on the **information hierarchy**, a ladder ranked by how immediately the agent needs the material:

1. **In-file step** is the primary tier: what the agent does, in order.
2. **In-file reference** is consulted on demand. Often a legitimately flat peer-set (every rule of a review on one rung), which is a fine arrangement, not a smell.
3. **Disclosed reference** is pushed out into a separate file, reached by a context pointer, loaded only when the pointer fires. Spans a sibling file in the same folder through fully external reference that lives anywhere and any document can point at.

Push too little down and the top bloats; push too much and you hide material the agent actually needs. That tension is the whole decision.

**Progressive disclosure** is the move down the ladder (out of the main file and behind a pointer) so the top stays legible. Not primarily a token optimisation: it is how the hierarchy is protected. Branching is the cleanest disclosure test: inline what every branch needs, and push behind a pointer what only some branches reach. When a document has steps, in-file reference that should be disclosed buries them and turns attending to them into a coin-flip: a variance lever, not just a legibility one.

**Co-location** is the within-file companion: where the ladder decides _how far down_ a piece sits, co-location decides _what sits beside it_ once there. Keep a concept's definition, rules, and caveats under one heading rather than scattered, so reading one part brings its neighbours with it. The test: the document should read like documentation written for the agent. Grouped material reads that way; scattered material does not. (Distinct from duplication: that repeats one meaning in two places; scattering fragments one meaning across many.)

**Sprawl** is the failure mode here: a document simply too long, even when every line is live and unique. Attention thins across the excess, and every extra line is one more to keep relevant. The cure is the ladder: disclose reference behind pointers, and split by branch or sequence so each path carries only what it needs.

## Steps and completion criteria

Every step ends on a **completion criterion**, the condition that tells the agent the work is done. Two properties make it a lever:

- **Clarity**: can the agent tell done from not-done? A vague bound ("understanding reached") invites **premature completion**: ending the step before it is genuinely done, attention slipping to _being done_. The visible steps still ahead (the **post-completion steps**) supply the pull; the criterion's clarity is the resistance. Defend in order: **sharpen the bound first** (local and cheap); only if it is irreducibly fuzzy _and_ you observe the rush, hide the later steps by splitting the sequence. Hiding only works across a real context boundary (a hand-off or a subagent dispatch; an inline call leaves the later steps in context and clears nothing).
- **Demand**: how much it requires. "Every modified model accounted for" forces thorough work where "produce a change list" does not. Demand drives **legwork** (the digging the agent does within the work, latent in the wording rather than written as its own step), and it is not step-bound: "every rule applied" binds a body of flat reference just as "every step done" binds a sequence, which is how an all-reference document still carries an exhaustiveness bar.

The strongest criteria are both checkable and exhaustive.

## When to split

Splitting one document into two spends one of the two loads, so split only when the cut earns it:

- **By sequence**: split a run of steps where the post-completion steps tempt the agent to rush the one in front of it. Keeping them out of view drives more legwork on the current task. Beware the reverse: merging sequences exposes each step's later steps to what follows, inviting premature completion.
- **By invocation**, skill-specific: see [`SKILL-MECHANICS.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL-MECHANICS.md).

## Leading words

A **leading word** is a compact concept already living in the model's pretraining that the agent thinks with while running the document (_lesson_, _fog of war_, _tracer bullets_). Repeated as a token, never as a sentence, it accumulates a distributed definition and anchors a whole region of behaviour in the fewest tokens, by recruiting priors the model already holds. Coining your own works if you define it clearly, but a made-up word recruits no priors: you pay in definition tokens what a pretrained word gives free; reach for an existing word first.

It anchors twice. In the body, _execution_: the agent reaches for the same behaviour every time the word appears, and inside flat reference it focuses attention on a class of thing to look for. In a pointer, _invocation_: when the same word lives in your prompts, your docs, and your codebase, the agent links that shared language to the material and reaches it more reliably.

Hunt for opportunities to refactor with leading words. A triad spelled out at three sites, a pointer spending a sentence to gesture at one idea. Each is a passage begging to collapse into a single token:

- "fast, deterministic, low-overhead" → _tight_ (a _tight_ loop).
- "a loop you believe in" → _red_, turning a fuzzy gate into a binary observable state (the loop goes _red_ on the bug, or it doesn't).

You win twice: fewer tokens, and a sharper hook for the agent to hang its thinking on. Assume every document is carrying restatements that leading words retire. Go find them.

**Negation** is the failure mode beside this lever: steering by prohibition drags the forbidden behaviour into context and makes it _more_ available, not less. _Don't think of an elephant_, and the elephant is all there is; the negation is a weak modifier the strongly-activated concept overruns, so the ban half-reads as an instruction to do the thing. Prompt the **positive**: state the target behaviour ("write one-line comments") so the banned one is never spoken. A prohibition earns its place only as a hard guardrail you cannot phrase positively; even then, pair it with the positive target so attention lands on what to do.

## Pruning

- Keep each meaning in a **single source of truth**: one authoritative place, so changing the behaviour is a one-place edit. **Duplication** (the same meaning in more than one place) costs maintenance and tokens, and inflates a meaning's prominence on the ladder past its real rank. (The accidental inverse of a leading word, which repeats a token on purpose, never the meaning.)
- The **environment** is a source of truth too (`package.json` scripts, config files, the directory layout, `--help` output), and a document that restates it is a **cache**: a copy of a lookup, earning its load only when the lookup is expensive. Cache what the agent cannot find by looking: the unwritten convention, the reason behind a choice, the gotcha no config confesses. Leave the one-file, one-command lookups to the environment, where they cannot go stale.
- Check every line for **relevance**: does it still bear on what the document does? A line loses relevance by never bearing on the task (mere exposition, or a branch that should be disclosed) or by going stale as the behaviour or world it describes changes. Shorter documents are easier to keep relevant. Without a pruning discipline the default fate is **sediment**: stale layers that settle because adding feels safe and removing feels risky, until you must core down through them to find what is still live.
- Hunt **no-ops** sentence by sentence: an instruction the model already obeys by default pays load to say nothing. The test (does it change behaviour versus the default?) is model-relative, not reader-relative: two people disagreeing about a no-op disagree about the default, and settle it by running the document, not by debate. When a sentence fails, delete the whole sentence rather than trim words from it. The test also grades leading words: a word too weak to beat the default (_be thorough_ when the agent is already thorough-ish) is a no-op, and the fix is a stronger word (_relentless_), not a different technique.
````

<a id="skill-source-zh"></a>
## 附录 B：中文翻译

````md
---
name: writing-for-agents
description: 为 agent 写文档。适用于创建或编辑 skill，或修改 AGENTS.md、CLAUDE.md 时。
---

这是一份为任何会被 agent 消费的文档而写的参考：包括 skill、`AGENTS.md` / `CLAUDE.md`，以及通过 pointer 抵达的文档。包装形式可以不同；写法本身并不不同：让这些文档可预测的杠杆是同一套，因为 agent 每次运行拿的是同一套 _process_，而不是每次产出完全相同的输出。

当你写的是一个 skill 时，先阅读 [`SKILL-MECHANICS.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL-MECHANICS.md)，了解 frontmatter、invocation 选择，以及 router skill 的写法。

## Context pointers

**context pointer** 是保存在 agent 上下文中的一种引用：它指向某些当前不在上下文中的材料，并编码“在什么条件下应该到达它”。skill 的 description 是一种 context pointer；`AGENTS.md` 里那种点名某份文档的语句，本质上也是同一种对象。真正决定 agent 什么时候会到达这些材料、以及到达得是否稳定的，不是目标文档本身，而是 pointer 的 _措辞_。如果某个目标材料是必须拿到的，但它背后的 pointer 写得很弱，那就是一个 variance bug：先把措辞 sharpen，只有 sharpen 失败时，才考虑把材料直接 inline 进来。

一个 pointer 有两个工作：

- 说明这份材料是什么；
- 列出哪些 **branches** 会触发它（branch 是文档处理的一个独立情形，所以不同运行会走不同路径）。

一个总是常驻的 pointer，其每个词每轮都会付出成本，因此它比正文还更值得被强力 pruning：

- **把 leading word 放在前面**：pointer 正是在这里完成触发工作的。
- **每个 branch 只保留一个 trigger。** 如果几个同义词只是给同一个 branch 换名字，那其实是在把同一个 branch 写两遍；要把它们折叠，只保留真正不同的 branch。
- **删掉正文自己已经承载的身份说明。**

## The two loads

你添加的每一份文档和每一个 pointer，都会消耗两种预算中的一种：

- **Context load**：常驻在 agent 窗口里的材料所带来的成本，比如 `AGENTS.md` 里的一行、skill description，或任何每一轮都挂在上下文里的东西。无论它是否被触发，它都会持续消耗 token 和注意力。
- **Cognitive load**：落在人类身上的成本，也就是“有哪些文档存在、何时该去拿哪一份”。人类就是索引。它不是一个必须极小化的成本；它是人类保有 agency 所付出的代价。该花在人类判断上的地方就花，不该花的地方就去掉。

只通过 pointer 才会被到达的材料，躲开了 context load，但要支付 pointer 那一行本身的成本；完全没有 pointer 的材料，则完全骑在 cognitive load 上。

## Information hierarchy

一份文档由两种内容构成：**steps**（agent 要按顺序执行的动作）和 **reference**（按需查阅的定义、规则、事实）。这两者可以自由混合：可以全是步骤（像食谱），可以全是参考（像评审规则，或者这篇 skill），也可以两者兼有。核心决策是：每一块内容应该放在 **information hierarchy** 的哪一层。这个层级是一架梯子，按“agent 有多快需要这份材料”来排序：

1. **In-file step** 是主层级：也就是 agent 要按顺序做什么。
2. **In-file reference** 是按需查阅的层级。它常常是一个合理的平铺同级集合（比如某次 review 的所有规则都在同一层），这完全没问题，不是坏味道。
3. **Disclosed reference** 是被推到单独文件里的参考材料，通过 context pointer 抵达，只有 pointer 被触发时才加载。它可以是同目录下的兄弟文件，也可以是完全外部的参考，只要任何文档都可以指向它。

往下推得太少，顶部会膨胀；往下推得太多，又会把 agent 实际需要的材料藏起来。这个张力本身就是核心决策。

**Progressive disclosure**，就是把内容沿着这架梯子往下移（移出主文件，放到 pointer 后面），从而保证顶部仍然清晰可读。它首先不是为了省 token，而是为了保护 hierarchy。branching 是最干净的 disclosure 测试：所有 branch 都需要的内容就 inline；只有部分 branch 会触达的内容，就推到 pointer 后面。若一份文档本身有 steps，而某些本该被 disclosure 的 in-file reference 还堆在里面，它们就会把步骤埋掉，让 agent 是否注意到步骤变成抛硬币，这不仅是可读性问题，更是一个 variance lever。

**Co-location** 是同文件内的配套原则：hierarchy 决定一块内容应该放到 _多靠下_ 的一层，而 co-location 决定一旦它放在那里，_应该和什么放在一起_。把一个概念的定义、规则、注意事项都放在同一标题下面，而不是四散在各处，这样读到其中一部分时，就会顺手把它的邻居也一起读到。判断标准是：这份文档应该读起来像是专门写给 agent 的文档。成组聚拢的材料会有这种感觉；到处散落的材料不会。（这和 duplication 不同：duplication 是把同一个意思重复放在两处；scattering 是把一个意思拆碎后散在很多处。）

**Sprawl** 是这里的典型失控方式：文档就是太长了，即使每一行都还算活着、且没有重复。注意力会在过长的文本上变薄，而每多一行，就多一行需要保持相关。解决办法还是这架梯子：把 reference disclose 到 pointer 后面，并按 branch 或 sequence 拆开，让每条路径只携带自己需要的内容。

## Steps and completion criteria

每一步都以一个 **completion criterion** 结束，也就是让 agent 判断“工作完成了”的条件。它之所以是一个杠杆，是因为它有两个性质：

- **Clarity**：agent 能不能分清 done 和 not-done？一个模糊的边界（例如 “understanding reached”）会诱发 **premature completion**：在工作真正完成之前就结束这一步，注意力滑向“赶快完成”。此时仍然可见的后续步骤（即 **post-completion steps**）会形成向前赶的拉力，而 criterion 的 clarity 就是阻力。防守顺序应该是：**先 sharpen 边界**（局部、便宜）；只有当边界本身无法再清晰化，_而且_ 你又真的观察到了这种抢跑，才考虑通过拆分 sequence 来把后续步骤藏起来。这个“隐藏”只有跨过真实的上下文边界才有效（例如 hand-off 或 subagent dispatch；内联调用不会把后续步骤从上下文中拿走，所以什么也没清掉）。
- **Demand**：它到底要求了多少东西。“Every modified model accounted for” 会逼出彻底工作，而 “produce a change list” 不会。Demand 会驱动 **legwork**（agent 在工作内部愿意自己去挖的部分；它潜伏在措辞里，而不一定被写成独立步骤），而且它不只绑定在步骤上：“every rule applied” 可以约束一整块平铺的 reference，就像 “every step done” 约束一个 sequence 一样，这就是为什么一份全是 reference 的文档也能带着完整性门槛。

最强的 criterion，既可检查，又有穷尽性。

## When to split

把一份文档拆成两份，会消耗两种 load 里的其中一种，所以只有当这个切口真的值得时才拆：

- **按 sequence 拆**：当某一串步骤里，post-completion steps 会诱使 agent 抢跑当前这一步时，就按 sequence 拆开。把后面的内容藏出视野，会逼出更多针对当前任务的 legwork。也要小心反方向：把几个 sequence 合并在一起，会让每一步后面的步骤暴露给后续内容，从而诱发 premature completion。
- **按 invocation 拆**：这是 skill 特有的切法，见 [`SKILL-MECHANICS.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL-MECHANICS.md)。

## Leading words

**leading word** 是模型预训练里已经存在的一个紧凑概念，agent 在运行文档时会拿它来思考（例如 _lesson_、_fog of war_、_tracer bullets_）。它以 token 的形式重复出现，而不是以一句解释性句子出现；这样它就能逐步积累出一个分布式定义，并用最少 token 锚定一大片行为区域，因为它调动了模型已经拥有的 priors。你当然也可以自造词，只要定义得足够清楚；但自造词没有先验可借，你必须用额外定义 token 去补上原本预训练词免费提供的东西，所以优先选已有的词。

它会锚定两次。在正文里，它锚定的是 _execution_：每次这个词出现，agent 都更容易调起同一类行为；在平铺 reference 里，它也会把注意力集中到某类需要查找的事物上。在 pointer 里，它锚定的是 _invocation_：当同一个词同时出现在你的 prompts、文档和代码库里时，agent 会把这套共享语言和那份材料关联起来，更可靠地抵达它。

要主动去找可以用 leading words 重构的地方。一个三元组在三处被完整写出，一个 pointer 花了一整句去指向同一个意思；这些都像是在请求你把它们压缩成一个 token：

- “fast, deterministic, low-overhead” → _tight_（一个 _tight_ loop）。
- “a loop you believe in” → _red_，把一个模糊的门槛变成一个二元、可观察的状态（这个 loop 会不会在 bug 上变 _red_，答案是明确的）。

你会赢两次：token 更少，agent 挂载思考的钩子也更锋利。默认假设每份文档里都带着一些本可以被 leading words 退休掉的重述，然后去把它们找出来。

**Negation** 是这个杠杆旁边最常见的失效模式：靠禁止来引导，会把被禁止的行为拖进上下文里，让它变得 _更可用_，而不是更不可用。_Don't think of an elephant_，结果上下文里就全是大象；否定词只是一个很弱的修饰，而被强烈激活的概念会把它盖过去，所以禁令读起来有一半像是在让模型去做那件事。要 prompt **positive**：直接说目标行为是什么（例如 “write one-line comments”），这样被禁止的行为甚至不会被说出来。只有当某条禁令是你无法正向表述的硬护栏时，它才值得保留；即便如此，也要把它和正向目标一起写，让注意力落在“该做什么”上。

## Pruning

- 让每个意思都只落在一个 **single source of truth** 上：只有一个权威位置，这样行为变了，只要改一个地方。**Duplication**（同一个意思出现在多个地方）会带来维护成本和 token 成本，还会让一个意思在 hierarchy 里的显著性被抬高，超过它真正应有的层级。（这和 leading word 恰好相反：leading word 是有意重复 token，而不是重复意思。）
- **Environment** 也是一种 source of truth（例如 `package.json` scripts、配置文件、目录结构、`--help` 输出）。如果文档只是把这些再说一遍，它就成了一个 **cache**：一份 lookup 的副本，只有当原 lookup 很贵时，它才值得付出这份 load。该缓存的是 agent 不能通过查看就发现的东西：未写明的约定、某个选择背后的原因、配置本身不会坦白的坑。至于“一条命令、一份文件就能查到”的东西，就留在环境里，那里不会过时。
- 逐行检查 **relevance**：这行话是否仍然和这份文档要做的事情有关？一行话会失去 relevance，有两种常见原因：它从来就不服务于任务（纯说明性文字，或本该 disclosure 出去的某个 branch），或者它随着行为和外部世界变化而过时。文档越短，越容易保持 relevant。没有 pruning discipline，文档的默认命运就是 **sediment**：陈旧的层层沉积会因为“加内容很安全、删内容很危险”而不断堆起来，直到你必须像取岩芯一样一层层钻下去，才能找到真正还活着的那部分。
- 逐句猎杀 **no-ops**：如果一条指令表达的是模型本来默认就会做的事，那它付出了 load，却没有带来任何额外行为。测试标准是：它和默认相比，是否真的改变了行为？这件事是相对于模型的，不是相对于读者的：如果两个人在某句是否是 no-op 上意见不同，他们其实是在争论默认行为是什么，而应该靠跑文档来验证，而不是靠辩论。若一句话没过测试，就删掉整句，而不是试图修修补补。这个测试也能用来给 leading words 打分：如果一个词弱到压不过默认（例如 agent 本来就有点 thorough，此时再写 _be thorough_ 就是 no-op），修复办法不是换技巧，而是换一个更强的词（例如 _relentless_）。
````
