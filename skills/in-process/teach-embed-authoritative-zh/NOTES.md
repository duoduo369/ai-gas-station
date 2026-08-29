# teach-embed-authoritative-zh

## 来源

- 模式：`migrate-playbook`
- 源材料：历史条目 `playbook/teach-课件-嵌入权威中文prompt.md`（已在迁移完成后删除）

## 这条 skill 解决什么

- 给需要精读 prompt / skill 条文的课程，提供一套稳定的“中文嵌入 + 原文外链 + 默认折叠”落地方式。
- 约束 teach 系课程里的权威正文展示形态，减少把整份 Markdown 原样塞进 HTML 的坏体验。

## 这条 skill 不解决什么

- 不决定课程章节骨架；层、流程、地图还是案例，由课程自己的 MISSION 决定。
- 不替代外部 `teach-me` skill 的整课写作覆盖层；这里只管“课内如何嵌权威正文”。
- 不为没有高信任原文的内容编造全文。

## 迁移备注

- 旧 playbook 里“为什么默认折叠、什么时候拆 frontmatter、什么时候只留示例”的经验已经压缩进主 `SKILL.md`。
- 旧文里偏解释、示例和给 agent 的长指令保留在这里，不再塞回调用入口。
- 迁移完成后，仓库里的课程说明统一改到这条候选 skill，不再保留对旧 `playbook/` 路径的引用。

## 试跑记录

- 2026-08-29：用于承接 `mattpocock-skills 仓库学习课`、`Uncle Bob SwarmForge 工作流课`、`Superpowers skill 学习课`、`AI 中文写作去 AI 味` 与 `teach skill 学习课` 里原本指向旧 playbook 的精读课说明。
