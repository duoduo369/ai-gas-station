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
- 内容目录优先中文命名；少数术语保留英文，如 `playbook/`、`assets/`。
- 每个对象目录以 `README.md` 作为索引入口，风格参考 awesome 项目；同目录允许放更深入的学习文档，并由索引回链。
- 当前明确不设 `plans/`；学习计划不作为第一版主轴。
- 本 effort 的协作方式采用 `wayfinder + grilling + domain-modeling`。

## Decisions so far

<!-- the index — one line per closed ticket -->

- [T-001 顶层目录结构与边界](./tickets/T-001-top-level-structure.md) — 第一版采用“对象目录 + 横切目录”混合结构；对象目录仅 `书籍/`、`演讲/`、`技能/`，横切目录保留 `playbook/`、`assets/`、`docs/`，不建 `资源/`、`收件箱/`、`主题/`
- [T-002 对象目录的索引与正文契约](./tickets/T-002-index-and-note-contract.md) — 每个对象目录用 `README.md` 做主题化索引，条目最小字段为名称/可选原始链接/一句话注释/可选本地笔记链接；只有产生明确沉淀时才单开同目录深度笔记
- [T-003 命名、链接与附件规范](./tickets/T-003-naming-linking-and-assets.md) — 正文文件默认用自然中文标题、索引固定 `README.md`、本地引用统一标准 Markdown 相对路径；不存在目标不预链接，`assets/` 保留英文并采用日期加英文短语命名
- [T-004 初始化最小仓库骨架](./tickets/T-004-bootstrap-minimal-skeleton.md) — 已落地第一版空骨架：根入口、AI 入口、规范文档、`书籍/`、`演讲/`、`技能/`、`playbook/`、`assets/` 的目录与 `README.md` 均已建立

## Not yet specified

- 第一版之外的对象类型如何扩展，例如课程、文章、工具、案例、提示词；等核心结构跑顺后再决定是否升为独立目录。
- awesome 风格 Markdown 索引之外，后续是否需要更结构化的数据格式（表格、YAML、脚本可读清单）。
- 未来是否需要一个面向发布或浏览的展示层，而不只依赖 Obsidian 与 GitHub。
- 资料采集与沉淀的自动化入口是否要做成脚本或 skill；等手动流程稳定后再说。

## Out of scope

- 大规模录入书籍、演讲、skill 实际内容；本 effort 只做骨架与机制。
- 完整学习计划体系或 `plans/` 目录设计；当前明确不作为第一版主轴。
- 自动化抓取、联网同步、发布网站等实现工作；除非后续 destination 重画，不纳入本轮。
