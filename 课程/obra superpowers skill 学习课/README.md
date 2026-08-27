# obra superpowers skill 学习课

> 原始仓库：[obra/superpowers](https://github.com/obra/superpowers)
> 回到课程索引：[课程/README.md](../README.md)

这门课围绕 `obra/superpowers` 展开，目标不是一次性把十几张 `SKILL.md` 全背下来，而是先建立三层地图：

- 这个仓库在结构上由什么组成
- 它的基本工作流怎样把多个 skill 串成一条主线
- 第一批最值得精读的 skill 分别承担什么职责

课程包沿用 `teach` skill 的教学工作区思路，除了 `lessons/`、`reference/`、`assets/`，还额外保留：

- `MISSION.md`：这门课为什么学
- `RESOURCES.md`：可信资料清单
- `NOTES.md`：教学偏好与工作备注

## Lessons

- [0001 · 仓库地图与基本工作流](./lessons/0001-repo-map-and-basic-workflow.html) - 先把 `superpowers` 看成“skills 库 + 多 harness 接线层 + 七步开发流程”，抓住第一批该优先读的技能卡。
- [0002 · 功能做出来以后，工作流怎么真正收口](./lessons/0002-how-the-workflow-actually-finishes.html) - 重点讲后半程：`subagent-driven-development` 是什么、`executing-plans` 什么时候接、为什么 review 不是可选项，以及 `finishing-a-development-branch` 怎样把工作正式收口。
- [0003 · 实现跑偏时，补任务、改计划，还是回到 spec](./lessons/0003-when-implementation-drifts-from-spec.html) - 专门讲“agent 说 done 了，但 reviewer 或人验收发现跑偏/漏实现”时怎么分流：实现缺口、plan 缺口、spec 缺口分别该怎么处理。
- [0004 · 人验收发现 bug 后怎么切线，以及 worktree 到底在流程里的哪一层](./lessons/0004-qa-bug-flow-and-where-worktrees-fit.html) - 把最后一段现实工作流走圆：验收 bug 时如何切到 `systematic-debugging -> verification-before-completion`，以及为什么 `using-git-worktrees` 是实现 / 修 bug 的环境底座，而不是收尾彩蛋。

## Reference

- [superpowers 项目地图与工作流速查](./reference/superpowers-project-and-flow-map.html)
- [实现后半程与收口速查](./reference/implementation-loop-and-finish.html)
- [实现跑偏与 spec 分流速查](./reference/implementation-drift-decision-map.html)
- [验收 bug 流与 worktree 位置速查](./reference/qa-bug-flow-and-worktree-positioning.html)

## 当前收尾

这门课当前先收在 `0004`。

前四课已经把这套主线闭合成一个完整心智模型：

- 先建立仓库与流程地图
- 再看实现后的收口
- 再分清跑偏时该回 spec、plan 还是实现
- 最后补上验收 bug 的 debug 流，以及 worktree 的环境层位置

如果以后再补，更可能是附录式扩写，例如多 harness 接线差异，而不是再往主线里硬塞新课。
