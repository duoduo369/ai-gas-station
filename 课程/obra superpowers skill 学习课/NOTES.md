# Notes

- 用户要学的是 `superpowers` skill 体系，不是单个安装步骤。
- 本地仓库在 `D:\work\codeup\superpowers`，但课程输出里的源码引用统一使用 GitHub 原地址。
- 先建立仓库地图和工作流地图，再进入单个 skill 的精读。
- lesson 尽量短，小步前进，方便后续继续长成完整课程。
- 0001 已按 `playbook/teach-课件-嵌入权威中文.md` 加厚：课内嵌入 `using-superpowers`、`brainstorming`、`subagent-driven-development`、`test-driven-development` 的中文节选。
- `writing-plans` 在 0001 里先保留角色定位，详细条文留到后续课再嵌入。
- 用户当前更关心“常见主线之后怎么把后半程走完”，不需要再花很多篇幅重讲 `brainstorming -> spec/plan -> subagent implement` 这段最常见流程。
- 0002 开始优先讲少用但关键的 completion-phase skills，并把 prompt 中文直接嵌到课里，减少来回翻上游仓库。
- 用户后续关心顺序：先讲实现跑偏/漏实现与 review 缺口，再讲人验收 bug 的 debug 流，worktree 可以更后。
- 已为 0001 / 0002 补课程导航，并开始用本地 SVG 给流程图上图。
- 当前图示策略：只在“流程关系一眼不容易看懂”的地方上图。已把总流程图、后半程闭环图、跑偏分流图接入对应 lesson / reference；不为纯概念段落强行配图。
- 导航改成与另外两门课一致：由 `assets/course-nav.js` 统一注入“课程入口 + lessons + 速查 + 上下课”，不再在每页手写按钮。
- 用户确认原规划中的 `0004` 与 `0005` 可以合并，作为最后一节来收尾；因此终课同时覆盖验收 bug 的 debug 流与 worktree 的环境层位置。
- 0004 的讲法不把 worktree 硬讲成“最后新加的一步”，而是回应用户真实体验：没显式用过这张卡，也可能已经在 native isolation / harness 隔离里受益。
