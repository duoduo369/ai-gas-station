# obra superpowers skill 学习课

> 原始仓库：[obra/superpowers](https://github.com/obra/superpowers)
> 回到课程索引：[课程/README.md](../README.md)
> 课程首页：[homepage.html](./lessons/homepage.html)

这门课拆 `obra/superpowers`。你先拿到三层地图：

- 这个仓库在结构上由什么组成
- 它的基本工作流怎样把多个 skill 串成一条主线
- 第一批最值得精读的 skill 分别承担什么职责

课件用 `teach-me` skill 生成：中文写作，不写测验、不标课时、不写"接下来学什么"。每篇结尾停在资料清单。课内嵌入的权威正文默认折叠，点“查看完整 prompt”再展开。

课程包沿用教学工作区思路，除了 `lessons/`、`reference/`、`assets/`，还额外保留：

- `MISSION.md`：这门课为什么学
- `RESOURCES.md`：可信资料清单
- `NOTES.md`：教学偏好与工作备注

`assets/` 里放了 `course.css`、`course-nav.js`、`open-links-new-tab.js` 和课程封面，课程目录复制到任何地方都能直接打开。

## Lessons

- [0001 · 仓库地图与基本工作流](./lessons/0001-repo-map-and-basic-workflow.html) - 先把 `superpowers` 看成"skills 库 + 多 harness 接线层 + 七步开发流程"，抓住第一批该优先读的技能卡。课内嵌 `using-superpowers`、`brainstorming`、`subagent-driven-development`、`test-driven-development` 的中文节选。
- [0002 · 功能做出来以后，工作流怎么收口](./lessons/0002-how-the-workflow-actually-finishes.html) - 讲后半程：`subagent-driven-development` 的骨架、`executing-plans` 什么时候接、review 为什么是硬闸门、`finishing-a-development-branch` 怎么收口。
- [0003 · 跑偏时，改实现、改 plan，还是回 spec](./lessons/0003-when-implementation-drifts-from-spec.html) - 讲 agent 报 done 以后还被 reviewer 或人验收抓出跑偏时，怎么区分实现缺口、plan 缺口、spec 缺口。
- [0004 · 验收 bug 流与 worktree 的位置](./lessons/0004-qa-bug-flow-and-where-worktrees-fit.html) - 讲验收 bug 时怎么切到 `systematic-debugging -> verification-before-completion`，也讲 `using-git-worktrees` 为什么一直待在实现 / 修 bug 的环境层。

## Reference

- [superpowers 项目地图与工作流速查](./reference/superpowers-project-and-flow-map.html)
- [实现后半程与收口速查](./reference/implementation-loop-and-finish.html)
- [实现跑偏与 spec 分流速查](./reference/implementation-drift-decision-map.html)
- [验收 bug 流与 worktree 位置速查](./reference/qa-bug-flow-and-worktree-positioning.html)

## 当前收尾

这门课先收在 `0004`。

前四课把主线闭合了：

- 先建立仓库与流程地图
- 再看实现后的收口
- 再分清跑偏时该回 spec、plan 还是实现
- 最后补上验收 bug 的 debug 流，以及 worktree 的环境层位置

如果以后再补，更可能写附录，例如多 harness 接线差异，不往主线上继续加课。
