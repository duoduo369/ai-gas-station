# wait-what 学习拆解

> 原始 skill：[wait-what](https://github.com/mattpocock/skills/blob/main/skills/productivity/wait-what/SKILL.md)
> 目录索引：[技能拆解/README.md](./README.md)
> 快速跳转：[跳到原文附录](#skill-source-md) · [跳到中文附录](#skill-source-zh)

## 这是什么

`wait-what` 是一个很小但很锋利的 user-invoked skill：当上一条回复没有讲明白、没有讲到位，立刻触发一次“重讲”，而不是带着误解继续往下跑。

## 我抓到的核心机制

### 1. 它解决的是“消息没落地”，不是“任务变了”

这个 skill 针对的是理解失败：用户知道 agent 在说什么方向，但没有真正听懂。它不是重做任务，也不是补充更多信息，而是重新组织解释方式。

### 2. 约束极少，但都打在关键点上

正文只有三件事：

- 补一点上下文。
- 用 ASD-STE100 Simplified Technical English。
- 使用 `CONTEXT.md` 里的 ubiquitous language。

它没有写很长的步骤，但三个约束都直指“为什么刚才没讲明白”。

### 3. 共享词汇表比更多术语更重要

这里最关键的是引用 `CONTEXT.md`。这意味着澄清不是简单降难度，而是把表达重新对齐到当前项目已经约定好的词汇体系里。

### 4. 这是一个很好的中断技能

很多 skill 都在教 agent 怎么继续推进，`wait-what` 则是在提醒：如果沟通已经失真，第一优先级不是继续推进，而是先停下来修复理解。

## 适用边界

适合：

- 回复方向没错，但表述太跳、太抽象、太密。
- 项目里明明有固定术语，但回复没有沿用。
- 需要把一段技术解释重讲成更容易吸收的版本。

不适合：

- 需求本身发生变化。
- 用户其实是在反对结论，而不是没听懂表述。
- 需要新增事实调查，而不是重写解释。

## 对我的启发

- “没讲明白”值得被单独做成 skill，因为它是高频故障点。
- 好的澄清不是无限加细节，而是补最少上下文、换更稳的表达、回到共享词汇。
- 这类 skill 很像沟通里的急停按钮，能避免错误理解一路传递下去。

<a id="skill-source-md"></a>
## 附录 A：原始 SKILL.md

````md
---
name: wait-what
description: "Stop. That last message did not land: re-pitch it."
disable-model-invocation: true
---

Wait, I don't understand where you've got to here. Re-pitch that: give me a little bit of context, talk in ASD-STE100 Simplified Technical English, and use the ubiquitous language from `CONTEXT.md` (follow `CONTEXT-MAP.md` to the right one if the repo has more than one).
````

<a id="skill-source-zh"></a>
## 附录 B：中文翻译

````md
---
name: wait-what
description: "停一下。上一条消息没有讲明白：请重新讲一遍。"
disable-model-invocation: true
---

等等，我没理解你现在讲到哪里了。请重新讲一遍：先给我一点上下文，使用 ASD-STE100 Simplified Technical English 来表达，并沿用 `CONTEXT.md` 里的 ubiquitous language（如果仓库里有多个，就跟着 `CONTEXT-MAP.md` 找到正确的那个）。
````
