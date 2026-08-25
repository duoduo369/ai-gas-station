# grilling 学习拆解

> 原始 skill：[grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)
> 目录索引：[skills/README.md](./README.md)
> 快速跳转：[跳到原文附录](#skill-source-md) · [跳到中文附录](#skill-source-zh)

## 这是什么

`grilling` 不是泛泛地“多问几个问题”，而是把一个计划、决策或想法显式建成一棵 `design tree`，再把隐藏分支一层层问干净。

## 我抓到的核心机制

### 1. 先看树，不先看答案

skill 要求把讨论对象映射成 `design tree`。意思不是马上给建议，而是先判断：现在到底有哪些决策节点，哪些节点依赖别的节点先定下来。

### 2. 只问 frontier

`frontier` 是“前置条件都已经满足、现在就能问”的那一圈问题。这个约束很强，因为它直接限制了问题顺序：

- 依赖上游答案的问题，不能混到这一轮里。
- 能并行问的问题，应该一次问完。

这样可以避免来回拉扯，也能减少用户回答完一个问题后，才发现还有三个本来可以一起问的问题。

### 3. 以 round 推进，而不是无限追问

每一轮都把当前 frontier 编号列出，并给出推荐答案。用户回答后再重算 frontier，进入下一轮。

这个设计把“高压追问”变成了一个可控循环：

- 一轮只处理当前可决策的问题。
- 每轮结束都能看到树被推进到了哪里。
- 终点也明确：frontier 为空，且双方确认已经形成 shared understanding。

### 4. 事实归 agent，决策归用户

skill 里最值得记的一句机制不是提问格式，而是分工：

- 需要查环境、查代码、查事实的部分，agent 自己去找。
- 真正的取舍和偏好，才交给用户决定。

这让“提问”不至于退化成把脏活都甩给用户。

## 适用边界

适合：

- 方案还没定，担心有隐含假设没翻出来。
- 需要把一个模糊想法拆成可讨论的决策树。
- 需要用户做取舍，但不希望把事实调研也推给用户。

不适合：

- 纯信息查询。
- 已经确定要直接执行的小改动。
- 只是想要一个快速建议，不打算把分支问全的场景。

## 对我的启发

- 好的追问不是“更凶”，而是“更会排依赖”。
- 一次问完整个 frontier，比单线程一问一答更尊重用户时间。
- “frontier 为空”是很好的 completion criterion，它把“我们聊得差不多了”变成了更可判断的结束条件。

<a id="skill-source-md"></a>
## 附录 A：原始 SKILL.md

````md
---
name: grilling
description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.
---

Interview the user relentlessly until you reach a shared understanding. Map this as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled: the questions you can ask _now_ without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round.

Format a round like so:

```
❓ **Q1** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>

---

❓ **Q2** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>
```

Each round the user answers reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a _later_ round, not this one.

Finding _facts_ is your job, never the user's. When a frontier question needs a fact from the environment (filesystem, tools, etc.), dispatch a sub-agent to find it; don't ask the user for anything you could look up yourself. Don't block on it: a running exploration is an unsettled prerequisite, so only the questions downstream of it wait for the sub-agent to report; ask the rest of the frontier now. The _decisions_ are the user's: put each to them and wait.

The session is done when the frontier is empty: every branch of the design tree visited, nothing left silently assumed. Do not act on it until the user confirms you have reached a shared understanding.
````

<a id="skill-source-zh"></a>
## 附录 B：中文翻译

````md
---
name: grilling
description: 围绕一个计划、决策或想法持续追问，强力帮用户做压力测试。适用于用户想要严密审视自己的思路，或明确使用任何 “grill” 类触发词时。
---

持续访谈用户，直到你们达到共享理解。把讨论内容映射成一棵 **design tree**：每个决策都会分叉出依赖它的后续决策。

按 **rounds** 推进这棵树。**frontier** 是所有前置条件已经满足的决策：也就是你现在就能问、而不需要猜测尚未得到答案的问题。每一轮要把整个 frontier 一次问完：给每个问题编号，并写出你的推荐答案。然后等待用户回答，再进入下一轮。

每一轮的格式如下：

```
❓ **Q1** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>

---

❓ **Q2** - **<question title>**: <question body, might be multiple paragraphs, including multiple choices>

➡️ <your recommended answer>
```

用户在每一轮的回答都会重塑这棵树：已经定下来的决策会把 frontier 向外推进，并解锁依赖它们的问题。重新计算 frontier，再问下一轮。若一个问题的答案依赖于本轮中另一个尚未解决的问题，那么它应该放到后续轮次，而不是这一轮。

查找 **事实** 是你的工作，不是用户的工作。当 frontier 中的问题需要环境事实（文件系统、工具等）时，派一个 sub-agent 去查；不要让用户回答你本可以自己查到的事。也不要因此卡住：正在进行中的探索仍然算作未解决的前置条件，因此只有依赖它的下游问题需要等待 sub-agent 回报；frontier 中其他问题现在就可以问。真正的 **决策** 归用户：把每个决策交给用户，并等待用户决定。

当 frontier 为空时，这个会话才算结束：设计树的每一条分支都被走过，不再有任何被默默假定的内容。在用户确认你们已经达成共享理解之前，不要开始执行。
````
