# mattpocock-skills 仓库学习课

[![mattpocock-skills 仓库学习课封面](./assets/cover/cover.jpg)](./lessons/homepage.html)

> 原始仓库：[mattpocock/skills](https://github.com/mattpocock/skills)
> 回到课程索引：[课程/README.md](../README.md)
> 教学状态：[MISSION.md](./MISSION.md) · [RESOURCES.md](./RESOURCES.md)
> 课程首页：[homepage.html](./lessons/homepage.html)

这门课拆 `mattpocock/skills`。你先画仓库地图，再沿最关键的流程和 skill 往下读，不用一口气把所有 `SKILL.md` 背完。

课内已经按 [teach-embed-authoritative-zh](../../skills/in-process/teach-embed-authoritative-zh/SKILL.md) 把本课要对照的权威正文嵌成中文（原文只留 GitHub 外链）；正文默认折叠，点开即可看完整 prompt，复习时不必再翻上游仓库。

课程包做成自包含结构：

- `lessons/` 放可直接打开的 HTML 课件
- `reference/` 放回看时用的速查页
- `assets/` 放这门课自己的样式和脚本

课件中引用源码的位置已经尽量改成 GitHub 链接，所以这门课被移动到别的电脑或别的仓库位置时，主资料链接仍然可用。

HTML 课件顶部有相对路径导航：六课互跳、速查页、课程入口；lesson 页另有上一课 / 下一课。

## Lessons

- [0001 · 项目结构与 Skill 地图](./lessons/0001-repo-structure-and-skill-map.html) - 地图课；嵌 `CLAUDE.md` 中文；`ask-matt` 全文留给 0002。
- [0002 · ask-matt 主流程与上坡入口](./lessons/0002-ask-matt-main-flow-and-onramps.html) - 嵌 `ask-matt` 与 `PHASE-BOUNDARIES` 中文全文。
- [0003 · grilling、grill-with-docs 与 wayfinder](./lessons/0003-grilling-vs-grill-with-docs-vs-wayfinder.html) - 嵌三者加 `domain-modeling` 中文；`ask-matt` 链 0002。
- [0004 · handoff 与上下文交接](./lessons/0004-handoff-and-phase-boundaries.html) - 嵌 `handoff` 中文；phase boundary 链 0002。
- [0005 · 所有 ticket 做完后怎么验收](./lessons/0005-post-implement-qa-and-branch-review.html) - 嵌 `code-review` 全文，再补 seam / implement / spec 快照 / triage 这些本课要用的小节。
- [0006 · Issue tracker 是一份配置文档](./lessons/0006-issue-tracker-is-config.html) - 嵌 setup 四选一、本地 markdown 模板全文和 GitLab 同形节。

## Reference

- [项目结构速查地图](./reference/project-map.html)
- [ask-matt 流程速查](./reference/ask-matt-flow-map.html)
- [grilling / grill-with-docs / wayfinder 对照表](./reference/grilling-vs-grill-with-docs-vs-wayfinder.html)
- [handoff 与 phase boundary 速查](./reference/handoff-and-phase-boundaries.html)
- [整分支验收速查](./reference/post-implement-qa-and-branch-review.html)
- [Issue tracker 接线速查](./reference/issue-tracker-is-config.html)

## 后续可扩展方向

- 用具体工程案例判断“该用 grill-with-docs 还是直接上 wayfinder”
- 把 `Continue / clear / handoff / subagent / compact` 这棵顺序树单独练熟
- 把飞书 Base / Drive 写成一份可粘贴的 `docs/agents/issue-tracker.md` 草稿
- 单独拆 `to-tickets` 的 vertical slice 与 blocking edges
- 把 `code-review` 的 Standards / Spec 两轴用一份真实 diff 练一遍（0005 已讲清两轴，练习可以另做）
