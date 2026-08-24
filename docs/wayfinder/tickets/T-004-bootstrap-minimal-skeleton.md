---
type: task
status: closed
hitch: AFK
blocked_by:
  - T-001
  - T-002
  - T-003
assignee: codex
---

# T-004 初始化最小仓库骨架

## Question

在关键结构决策明确后，按约定把第一版最小骨架真正落到仓库里。

这张票要完成：

- 建立已决的顶层目录；
- 写出根 `README.md` 与 `AGENTS.md`；
- 写出 `docs/conventions.md`；
- 给第一版已确认的对象目录补上 `README.md` 索引入口；
- 保持仓库为空骨架而不是预填大量内容。

## Resolution

已在仓库内完成第一版最小骨架初始化：

- 建立顶层对象目录：`书籍/`、`演讲/`、`技能/`
- 建立横切目录：`playbook/`、`assets/`
- 写出根入口文件：[README.md](../../README.md) 与 [AGENTS.md](../../AGENTS.md)
- 写出结构与记录规范：[docs/conventions.md](../../docs/conventions.md)
- 给 `书籍/`、`演讲/`、`技能/`、`playbook/`、`assets/` 补上 `README.md`
- 保持仓库为轻量空骨架，只提供说明、约定和占位小节，不预填大量真实内容
