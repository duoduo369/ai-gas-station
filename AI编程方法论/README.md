# AI编程方法论

这里收录围绕 AI 编程、agent 协作与相关工程实践的成型解释文档。
它承接的是已经能独立说明一个机制、判断框架或方法选择的内容：比摘录重，但又不必长成课程。
如果你只是想先留住一段好的话、一条评论或一张轻量卡片，更适合先放进 [`../摘录与启发/README.md`](../摘录与启发/README.md)。
如果一篇笔记的重点是解释为什么这样理解、边界在哪里、和别的方法怎样区分，那么更适合放在这里。

## Agent 与协作边界

- [什么是 agent](<./什么是 agent.md>) - 从工程协作视角解释为什么 agent 更适合理解成 `model + harness + external environment`，而不只是 `model + harness`

## 上下文与会话卫生

- [session 的 scope 与 dumb zone](<./session 的 scope 与 dumb zone.md>) - 解释为什么 session 会从 smart zone 逐渐滑进 dumb zone，以及什么时候该压缩上下文、什么时候该 handoff 并开新 session

## Prompt 与协作设计

- [skill 的作用域与放置](<./skill 的作用域与放置.md>) - 从 user-level / project-level 看 skill 应该放哪、谁来维护，以及什么时候值得把方法论参考文档跟着 skill 一起放进去
- [Agent 解决问题的三段式模板](<./Agent解决问题的三段式模板.md>) - 用 `Problem / Supporting Information / Steps To Complete` 解释一种清晰的 agent prompt 结构

## AI 开发流程

- [AI 开发 feature 流程](<./AI 开发 feature 流程.md>) - 用 `Grill -> Spec -> Tickets -> Implement -> Review` 解释 AI feature 从想法到实现再到验收的一条典型链路
- [任务拆分：纵向切片 vs 横向切片](<./任务拆分：纵向切片 vs 横向切片.md>) - 解释为什么 AI 开发里更适合用面向功能的纵向切片，而不是按数据库、API、前端分层横向拆分
