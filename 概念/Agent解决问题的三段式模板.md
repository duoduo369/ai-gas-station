# Agent 解决问题的三段式模板

## 这是什么

这篇记录一种很实用的 prompt 结构模板：把 agent 要解决的问题，稳定地拆成三段来写：

1. `Problem`
2. `Supporting Information`
3. `Steps To Complete`

它的价值不在于“格式好看”，而在于能强迫写 prompt 的人把三件本来很容易混在一起的东西拆开：

- 到底要解决什么问题；
- agent 完成任务需要知道什么；
- agent 应该按什么步骤去做。

## 三段分别在做什么

### 1. Problem

`Problem` 是对“这条 prompt 到底要解决什么问题”的直接描述。

这段最重要的作用是定焦。它不是背景故事，不是实现细节，也不是长篇解释，而是先把任务本身钉住。

如果这一段写不好，后面信息再多，agent 也可能只是努力做错事。

你给的截图里这句解释很准确：`Problem` 本质上就是 “the problem that this prompt is designed to solve”。

### 2. Supporting Information

`Supporting Information` 是 agent 完成任务所需的全部支持信息。

它负责回答的是：

- agent 需要知道哪些上下文；
- 有哪些约束、背景、资料、路径、规则；
- 哪些现成信息不能靠它自己猜。

这一段的关键不是“塞越多越好”，而是把真正必要的信息补全。少了，agent 会瞎猜；多到失焦，又会让主线被淹没。

### 3. Steps To Complete

`Steps To Complete` 是 agent 按部就班需要做的具体步骤。

这一段最重要的作用，是把“怎么完成”显式化，而不是让 agent 自己在目标和上下文之间随意跳。

如果说：

- `Problem` 定义“要解决什么”
- `Supporting Information` 提供“做这件事需要知道什么”

那 `Steps To Complete` 就是在定义“按什么路径完成它”。

## 为什么这三段对 agent 特别有用

这三个顶层标题的价值，在于它们同时服务了 prompt 写作和 agent 执行：

- 对写 prompt 的人来说，它能避免把目标、背景、步骤混成一坨。
- 对 agent 来说，它能更清楚地区分主问题、补充信息和执行顺序。

也正因为如此，这个结构很适合那些：

- 不只是问一个问题，而是要让 agent 真正完成任务的 prompt；
- 会跨 session、跨成员被重复使用的任务模板；
- 需要后来继续维护的 Markdown prompt 文件。

## 一张截图能说明的重点

你给的最后一张截图很有代表性：一个 Markdown 文件里只有三个清晰的二级标题：

- `## Problem`
- `## Supporting Information`
- `## Steps To Complete`

这说明这套方法并不复杂。它不是一大堆花哨提示词技巧，而是一个非常朴素、但对聚焦写作和 prompt 设计都很有帮助的骨架。

## 一个可直接复用的骨架

```md
## Problem

描述这条 prompt 要解决的核心问题。

## Supporting Information

- 背景信息
- 相关约束
- 已知上下文
- 参考资料或路径

## Steps To Complete

1. 第一步要做什么
2. 第二步要做什么
3. 完成后如何交付或验证
```

## 什么时候适合用

比较适合：

- 让 agent 执行一个完整任务，而不是只回答一个短问题。
- 想把 prompt 沉成文档，供后续重复使用。
- 任务本身有明显的目标、上下文和步骤区分。

不那么适合：

- 纯闲聊。
- 单句就能说清的小问题。
- 还在模糊 brainstorming、连问题本身都没定下来的阶段。

## 和仓库里其他概念的关系

这套三段式模板，本质上也是在帮助 external environment 变清晰：

- `Problem` 让目标留在文档里。
- `Supporting Information` 让关键上下文不只存在于某个 session。
- `Steps To Complete` 让执行路径可复用、可移交、可维护。

所以它和前面这些概念是能接起来的：

- [什么是 agent](<./什么是 agent.md>)
- [session 的 scope 与 dumb zone](<./session 的 scope 与 dumb zone.md>)
- [AI 开发 feature 流程](<./AI 开发 feature 流程.md>)

## 对我的启发

- 好的 prompt 结构，首先是在帮人把思路拆清楚。
- 三段式最有价值的地方，是把“问题、信息、步骤”从一开始就分栏处理。
- 对 agent 来说，清晰的结构本身就是一种约束，也是一种降噪。
