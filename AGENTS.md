# AGENTS.md

> 给 AI 读的渐进式加载入口。给人看的总说明在 [README.md](./README.md)。
> 本文件只放路由和不变量，正文沉到对应目录与规范文件里。

## 项目是什么

这是一个面向 AI 学习沉淀的个人知识库，不围绕固定学习计划展开，而是围绕“看到值得留的内容后，如何持续沉淀”来组织。

AI 在这里的职责不是替代学习，而是：

- 快速读到正确的背景和约定；
- 帮助归类、整理、补充结构；
- 在已有沉淀上继续总结、对比、提炼出可复用打法。

## 全局不变量

- 第一版结构采用“对象目录 + 横切目录”混合方式。
- 第一版对象目录只有：`书籍/`、`演讲/`、`技能/`。
- 第一版横切目录保留：`playbook/`、`assets/`、`docs/`。
- 不建 `资源/`、`主题/`、`plans/`、`收件箱/`。
- 对象目录与正文文件中文优先；少数机制目录保留英文，如 `playbook/`、`assets/`、`docs/`。
- 每个对象目录都以 `README.md` 作为索引入口，索引风格参考 awesome 项目。
- 索引条目最小字段 = 名称 + 一句话注释；原始链接与本地笔记链接都可选。
- 只有当已经形成明确学习收获、摘录或实践记录时，才单开深度笔记。
- 本地引用统一使用标准 Markdown 相对路径，不依赖 Obsidian 双链承载关键结构。
- 不对不存在的目标预先加链接，避免 Obsidian 误建空文件。
- 附件统一放 `assets/`，文件名采用“日期 + 英文短语”。
- 长期结构决策放在 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)；新增结构分歧时，优先补决策票而不是直接拍脑袋扩目录。

## 路由表

| 用户意图 | 先读 |
| --- | --- |
| 想看整体结构、仓库入口 | [README.md](./README.md) |
| 想继续结构决策、推进 ticket | [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md) |
| 想确认术语是什么意思 | [CONTEXT.md](./CONTEXT.md) |
| 想看记录规则、命名、链接、附件规范 | [docs/conventions.md](./docs/conventions.md) |
| 想收录一本书或补书籍笔记 | [书籍/README.md](./书籍/README.md) |
| 想收录一场演讲、播客或分享 | [演讲/README.md](./演讲/README.md) |
| 想记录某个 skill 或工具能力的学习过程 | [技能/README.md](./技能/README.md) |
| 想沉淀已验证的方法、流程、套路 | [playbook/README.md](./playbook/README.md) |
| 想放截图、PDF、讲义等功能性材料 | `assets/` |

## 默认加载链

本文件 → 命中的对象目录 `README.md` 或 [docs/conventions.md](./docs/conventions.md) → 最相关的 1–2 个正文文件 → 涉及长期结构问题时再看 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)。

## 高频工作流

- **收录内容**：先判断属于 `书籍/`、`演讲/`、`技能/` 还是 `playbook/` → 在对应 `README.md` 追加索引条目 → 若已经产生明确沉淀，再补同目录正文文件。
- **整理结构**：先对照 [docs/conventions.md](./docs/conventions.md) → 若只是局部补充，直接改；若涉及顶层结构或机制变化，先回到 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)。
- **沉淀打法**：只有当某种方法已经重复验证、值得复用时，才进入 `playbook/`。

## 维护

- 结构文档允许逐步演化，但冲突时以已关闭 ticket 的结论为准。
- 同类内容如果连续出现且现有目录明显容纳不顺，再考虑新增对象目录。
- 不要为了“可能以后会用”预建很多空目录。
