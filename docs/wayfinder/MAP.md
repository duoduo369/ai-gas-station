---
labels: wayfinder:map
---

# AI加油站 · 决策地图（Wayfinder Map）

## Destination

建立一个适合 Obsidian 与 GitHub 协作的 AI 学习知识库最小骨架：顶层结构、索引/正文契约、命名与链接规范、人类入口与 AI 入口都明确，并准备好可继续扩展的仓库脚手架。

## Notes

- 本 effort 的目标不是批量录入内容，而是先把“怎么长期沉淀”定清楚。
- 本 effort **包含第一轮最小脚手架落地**：关键决策明确后，允许通过 task ticket 建目录、初始化说明文档与协作入口。
- 顶层采用“对象类型为主 + 横切目录补充”的混合结构。
- 内容目录以中文为主；`skills/` 因直接对应 agent skills 保留英文，少数术语也保留英文，如 `playbook/`、`assets/`。
- 每个对象目录以 `README.md` 作为索引入口，风格参考 awesome 项目；同目录允许放更深入的学习文档，并由索引回链。
- 当前明确不设 `plans/`；学习计划不作为第一版主轴。
- 本 effort 的协作方式采用 `wayfinder + grilling + domain-modeling`。

## Decisions so far

<!-- the index — one line per closed ticket -->

- [T-001 顶层目录结构与边界](./tickets/T-001-top-level-structure.md) — 第一版采用“对象目录 + 横切目录”混合结构；对象目录仅 `书籍/`、`演讲/`、`skills/`，横切目录保留 `playbook/`、`assets/`、`docs/`，不建 `资源/`、`收件箱/`、`主题/`
- [T-002 对象目录的索引与正文契约](./tickets/T-002-index-and-note-contract.md) — 每个对象目录用 `README.md` 做主题化索引，条目最小字段为名称/可选原始链接/一句话注释/可选本地笔记链接；只有产生明确沉淀时才单开同目录深度笔记
- [T-003 命名、链接与附件规范](./tickets/T-003-naming-linking-and-assets.md) — 正文文件默认用自然中文标题、索引固定 `README.md`、本地引用统一标准 Markdown 相对路径；不存在目标不预链接，`assets/` 保留英文并采用日期加英文短语命名
- [T-004 初始化最小仓库骨架](./tickets/T-004-bootstrap-minimal-skeleton.md) — 已落地第一版空骨架：根入口、AI 入口、规范文档、`书籍/`、`演讲/`、`skills/`、`playbook/`、`assets/` 的目录与 `README.md` 均已建立
- [T-005 在当前目录初始化 Git 并接入 Gitee 远端](./tickets/T-005-init-git-and-gitee-remote.md) — 已在 `D:\live\AI加油站` 初始化 Git、绑定 `origin`、建立首个提交并成功推送 `master` 到 Gitee
- [T-006 为概念性知识点新增顶层对象目录](./tickets/T-006-concepts-directory-for-knowledge-notes.md) — 新增 `概念/` 作为第四个对象目录，用于承接不依附于单一本资源或 skill 的概念解释、术语拆解与机制理解
- [T-007 `skills/` 学习文档的自包含附录契约](./tickets/T-007-skill-learning-note-self-contained-appendix-contract.md) — 具体 skill 学习文档默认采用“顶部导航 + 主体拆解 + 底部附录”的自包含结构，文末保留原始 `SKILL.md` 与中文翻译，并用显式锚点支持文内跳转

## Not yet specified

- 当前为空。第一版最小骨架已经完成；后续若要扩对象类型、结构化数据格式、展示层或自动化入口，建议另开新 effort。

## Out of scope

- 大规模录入书籍、演讲、agent skill 实际内容；本 effort 只做骨架与机制。
- 完整学习计划体系或 `plans/` 目录设计；当前明确不作为第一版主轴。
- 自动化抓取、联网同步、发布网站等实现工作；除非后续 destination 重画，不纳入本轮。
