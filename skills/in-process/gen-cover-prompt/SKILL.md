---
name: gen-cover-prompt
description: 根据课程或书籍信息，调用 jimeng-image-prompt-crafter 生成适合本仓库使用场景的封面 Prompt。
disable-model-invocation: true
---

# gen-cover-prompt

按本仓库的对象语境整理输入，并调用 `jimeng-image-prompt-crafter` 生成可直接用于即梦的中文封面 Prompt。
默认只负责 Prompt，不负责出图，也不默认顺手改 README 或笔记。

## Before you start

- 先确定对象类型：`course` 或 `book`。
- `course` 分支先读 [`./reference/course-cover.md`](./reference/course-cover.md)；`book` 分支先读 [`./reference/book-cover.md`](./reference/book-cover.md)。
- 先确认这次要的是“生成 Prompt”，不是“顺手把图片接回仓库”；只有用户明确要求接回入口时，才额外处理落图和链接。
- 只收齐这一轮真正相关的源材料；不要默认把 `AGENTS.md`、`CONTEXT.md`、`docs/conventions.md` 整坨装进上下文。

## Steps

1. 锁定分支和最小输入。
   完成标准：`course` 分支至少拿到课程名、课程 `README.md`、`MISSION.md`（如果有）和 1-2 个代表视觉语言的现有资产；`book` 分支至少拿到书名，若用户给了作者、版本、已有笔记或气质要求也一并带上。
2. 压缩成封面 brief。
   完成标准：已经能用短句写清这次封面服务的对象、标题策略、画面骨架和负面约束；`course` 额外写清主流程，`book` 额外写清标题主次与整体气质。
3. 调用 `jimeng-image-prompt-crafter`。
   完成标准：明确使用这个 skill，并按封面场景生成可直接用于即梦的中文 Prompt；`course` 默认按 README / 课程索引入口图来写，`book` 默认按单书封面来写。
4. 检查 Prompt 是否贴合对象。
   完成标准：`course` 没有塌成泛 AI 海报，课程类型词没有误当最大字；`book` 没有凭空编造书里场景，信息不足时优先做标题驱动、气质保守的封面。

## Finish

- 输出最终 `Prompt`；只有用户明显还会继续改时，再补简短的 `理解摘要`、`注意事项` 或最小 `carry_forward`。
- 如果这轮额外要求“接回仓库”，再补充落图与链接建议；否则不要把接入步骤塞进主流程。
