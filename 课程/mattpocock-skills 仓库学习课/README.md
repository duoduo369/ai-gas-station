# mattpocock-skills 仓库学习课

> 原始仓库：[mattpocock/skills](https://github.com/mattpocock/skills)
> 回到课程索引：[课程/README.md](../README.md)

这门课围绕 `mattpocock/skills` 仓库展开，目标不是一次性背完所有 `SKILL.md`，而是先建立仓库地图，再沿着最关键的流程和 skill 逐步精读。

课程包做成自包含结构：

- `lessons/` 放可直接打开的 HTML 课件
- `reference/` 放回看时用的速查页
- `assets/` 放这门课自己的样式和脚本

课件中引用源码的位置已经尽量改成 GitHub 链接，所以这门课被移动到别的电脑或别的仓库位置时，主资料链接仍然可用。

## Lessons

- [0001 · 项目结构与 Skill 地图](./lessons/0001-repo-structure-and-skill-map.html) - 先建立 `mattpocock-skills` 的地图感：顶层结构、五个 bucket、两条分类轴，以及 `ask-matt` 的主流程位置。
- [0002 · ask-matt 主流程与上坡入口](./lessons/0002-ask-matt-main-flow-and-onramps.html) - 把 `ask-matt` 读成路由器：主线、on-ramp、独立技能，以及 phase boundary 的判断顺序。
- [0003 · grilling、grill-with-docs 与 wayfinder](./lessons/0003-grilling-vs-grill-with-docs-vs-wayfinder.html) - 把三者放在一张分流图里：共同底座、边界、何时接 `to-spec`，以及为什么 `wayfinder` 会成为更重度规划场景的优先入口。
- [0004 · handoff 与上下文交接](./lessons/0004-handoff-and-phase-boundaries.html) - 讲清 `handoff` 为什么默认是“生成交接文档”，而不是自动结束当前 session，以及它和 `/clear`、`/compact`、subagent 的边界。
- [0005 · 所有 ticket 做完后怎么验收](./lessons/0005-post-implement-qa-and-branch-review.html) - 验收课：单票评审为什么不够、`code-review` 两轴跟传统人审差在哪、spec 有缺口时要不要新开，以及本地 `.scratch` 里要不要跑 `triage`。

## Reference

- [项目结构速查地图](./reference/project-map.html)
- [ask-matt 流程速查](./reference/ask-matt-flow-map.html)
- [grilling / grill-with-docs / wayfinder 对照表](./reference/grilling-vs-grill-with-docs-vs-wayfinder.html)
- [handoff 与 phase boundary 速查](./reference/handoff-and-phase-boundaries.html)
- [整分支验收速查](./reference/post-implement-qa-and-branch-review.html)

## 后续可扩展方向

- 用具体工程案例判断“该用 grill-with-docs 还是直接上 wayfinder”
- 把 `Continue / clear / handoff / subagent / compact` 这棵顺序树单独练熟
- 单独拆 `to-tickets` 的 vertical slice 与 blocking edges
- 把 `code-review` 的 Standards / Spec 两轴用一份真实 diff 练一遍（0005 已讲清两轴，练习可以另做）
