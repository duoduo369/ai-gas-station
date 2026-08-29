# 概念

这里收录不依附于单一本书、演讲或单个 skill 的概念解释、术语拆解与机制理解。
它承接的是“值得长期保留，但既不是项目级 `skills/` 的执行文档，也不适合放进 `技能拆解/`”的内容。
如果一篇笔记的重点是解释一个概念、厘清边界、统一词汇，而不是记录某个具体对象，那么更适合放在这里。

## Agent 与协作边界

- [什么是 agent](<./什么是 agent.md>) - 从工程协作视角解释为什么 agent 更适合理解成 `model + harness + external environment`，而不只是 `model + harness`

## Token、上下文与成本

- [session 的 scope 与 dumb zone](<./session 的 scope 与 dumb zone.md>) - 解释为什么 session 会从 smart zone 逐渐滑进 dumb zone，以及什么时候该压缩上下文、什么时候该 handoff 并开新 session

## Skill 与设计机制

- [skill 的作用域与放置](<./skill 的作用域与放置.md>) - 从 user-level / project-level 看 skill 应该放哪、谁来维护，以及什么时候值得把概念文档跟着 skill 一起放进去
- [Agent 解决问题的三段式模板](<./Agent解决问题的三段式模板.md>) - 用 `Problem / Supporting Information / Steps To Complete` 解释一种清晰的 agent prompt 结构

## AI 开发流程

- [AI 开发 feature 流程](<./AI 开发 feature 流程.md>) - 用 `Grill -> Spec -> Tickets -> Implement -> Review` 解释 AI feature 从想法到实现再到验收的一条典型链路
- [任务拆分：纵向切片 vs 横向切片](<./任务拆分：纵向切片 vs 横向切片.md>) - 解释为什么 AI 开发里更适合用面向功能的纵向切片，而不是按数据库、API、前端分层横向拆分
