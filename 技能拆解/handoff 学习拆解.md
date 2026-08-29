# handoff 学习拆解

> 原始 skill：[handoff](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md)
> 目录索引：[技能拆解/README.md](./README.md)
> 快速跳转：[跳到原文附录](#skill-source-md) · [跳到中文附录](#skill-source-zh)

## 这是什么

`handoff` 是一个明确面向“下一位 agent”的压缩动作：把当前会话整理成交接文档，让新的上下文窗口可以继续干活，而不是从头翻聊天记录。

## 我抓到的核心机制

### 1. handoff 不是总结一切，而是为下一跳压缩上下文

它的目标不是形成完整归档，而是让下一个 session 低成本接上。所以文档内容应该围绕“下一位 agent 继续工作最需要知道什么”来选材。

### 2. 不重复已有产物，只做索引和桥接

skill 明确要求：如果规格、计划、ADR、issue、commit、diff 里已经有内容，不要再复制一份进 handoff，而是直接引用路径或 URL。

这点很重要，因为 handoff 本质上是会话缓存，不该和正式产物抢单一事实源。

### 3. 明确写 suggested skills

它不是只交代背景，还要求顺手告诉下一位 agent：后续更适合调用哪些 skill。

这相当于把“工作继续怎么开局”也一起打包了，减少下一位 agent 的冷启动成本。

### 4. 默认写到系统临时目录

这个细节说明 handoff 更偏临时协作工件，不默认把噪音写进当前仓库。只有当交接内容本身已经变成长期资产时，才值得转存到正式文档。

### 5. 先脱敏，再传递

skill 明确要求删掉 API key、密码、PII 等敏感信息。也就是说，handoff 的优先级是“可继续”与“可安全共享”同时成立，而不是只求完整。

## 适用边界

适合：

- 当前任务做了一半，要换一个新 agent 继续。
- 上下文已经很长，需要主动压缩。
- 需要把“现在做到哪了、下一步干什么、参考什么材料”一次性交接出去。

不适合：

- 仓库里已经有完整、最新、结构化的正式文档，而且下一位 agent 直接看那个就够。
- 只是想留长期知识沉淀，此时更应该写到正式笔记或项目级 skill。

## 对我的启发

- handoff 最有价值的不是“多写”，而是“少但够接手”。
- 会话类文档应当默认承认自己是缓存，而不是冒充单一事实源。
- “建议下一个 skill 是什么”这个字段很值得借鉴，它把交接从状态报告升级成了下一步路由。

<a id="skill-source-md"></a>
## 附录 A：原始 SKILL.md

````md
---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to the temporary directory of the user's OS - not the current workspace.

Include a "suggested skills" section in the document, naming which skills the next agent should call the Skill tool for.

Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
````

<a id="skill-source-zh"></a>
## 附录 B：中文翻译

````md
---
name: handoff
description: 把当前对话压缩成一份交接文档，供另一位 agent 接手。
argument-hint: "下一次会话将主要用来做什么？"
disable-model-invocation: true
---

写一份 handoff 文档，总结当前对话，让一个全新的 agent 可以继续这项工作。把文件保存到用户操作系统的临时目录，而不是当前工作区。

文档中要包含一个 “suggested skills” 小节，说明下一位 agent 应该通过 Skill tool 调用哪些 skill。

不要重复其他产物里已经记录过的内容（例如 specs、plans、ADRs、issues、commits、diffs）。改为用路径或 URL 引用它们。

删去任何敏感信息，例如 API key、密码或可识别个人身份的信息。

如果用户传入了参数，就把它当作“下一次会话将聚焦什么”的描述，并据此调整这份文档。
````
