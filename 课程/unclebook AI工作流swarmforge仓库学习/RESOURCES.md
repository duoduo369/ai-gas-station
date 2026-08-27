# SwarmForge Resources

## Knowledge

- [README: SwarmForge](https://github.com/unclebob/swarm-forge/blob/main/README.md)
  系统总入口。Use for: `main` vs pack、Getting Started、仪表盘操作、`swarmforge.conf`、handoff 概要。
- [`two-pack` swarmforge/](https://github.com/unclebob/swarm-forge/tree/two-pack/swarmforge)
  最小可运行工作流。Use for: 0002 整台闭环；conf、两份角色 prompt、`project.prompt`。
- [two-pack swarmforge.conf](https://github.com/unclebob/swarm-forge/blob/two-pack/swarmforge/swarmforge.conf)
  两行拓扑。Use for: master、batch、`--yolo`。
- [two-pack coder.prompt](https://github.com/unclebob/swarm-forge/blob/two-pack/swarmforge/roles/coder.prompt)
  实现岗原文。Use for: TDD、不碰质量工具、来自 cleaner 时禁止再转发。
- [two-pack cleaner.prompt](https://github.com/unclebob/swarm-forge/blob/two-pack/swarmforge/roles/cleaner.prompt)
  清理岗原文。Use for: batch、CRAP/DRY/架构/变异、回传 coder。
- [two-pack project.prompt](https://github.com/unclebob/swarm-forge/blob/two-pack/swarmforge/constitution/articles/project.prompt)
  pack 本地宪法。Use for: 禁 Gherkin、cleaner 回传后 coder 只验证。
- [`four-pack` swarmforge/](https://github.com/unclebob/swarm-forge/tree/four-pack/swarmforge)
  紧凑规格工作流。Use for: 0003；人闸、refactorer vs architect。
- [four-pack local-workflow.prompt](https://github.com/unclebob/swarm-forge/blob/four-pack/swarmforge/constitution/articles/local-workflow.prompt)
  末棒防环。Use for: 来自 architect 的交接禁止再转发。
- [`six-pack` swarmforge/](https://github.com/unclebob/swarm-forge/tree/six-pack/swarmforge)
  全量工作流。Use for: 0004；QA 规格 vs QA 执行、hardender。
- [six-pack QA.prompt](https://github.com/unclebob/swarm-forge/blob/six-pack/swarmforge/roles/QA.prompt)
  验收岗原文。Use for: UI 端到端、向其余五人广播。
- [six-pack local-engineering.prompt](https://github.com/unclebob/swarm-forge/blob/six-pack/swarmforge/constitution/articles/local-engineering.prompt)
  交接前测试纪律。Use for: 除 specifier 外必须跑单测和验收。
- [`swarmforge/` on `main`](https://github.com/unclebob/swarm-forge/tree/main/swarmforge)
  共享运行时目录。Use for: constitution 文章、`handoff-protocol.md`、scripts 清单。
- [handoff-protocol.md](https://github.com/unclebob/swarm-forge/blob/main/swarmforge/handoff-protocol.md)
  交接协议全文。Use for: outbox/inbox、`handoffd`、audit 闸、task vs batch。
- [engineering.prompt](https://github.com/unclebob/swarm-forge/blob/main/swarmforge/constitution/articles/engineering.prompt)
  共享工程宪法。Use for: TDD/验收管线、CRAP·mutation·DRY、工具安装纪律。
- [four-pack specifier.prompt](https://github.com/unclebob/swarm-forge/blob/four-pack/swarmforge/roles/specifier.prompt)
  规格角色原文。Use for: specifier 到底拥有什么、何时交给 coder。
- [four-pack coder.prompt](https://github.com/unclebob/swarm-forge/blob/four-pack/swarmforge/roles/coder.prompt)
  实现角色原文。Use for: TDD、验收管线、不跑哪些质量工具。
- [six-pack hardender.prompt](https://github.com/unclebob/swarm-forge/blob/six-pack/swarmforge/roles/hardender.prompt)
  加固角色原文。Use for: 变异测试与软 Gherkin 变异的职责边界。
- [six-pack QA.prompt](https://github.com/unclebob/swarm-forge/blob/six-pack/swarmforge/roles/QA.prompt)
  验收角色原文。Use for: UI 端到端、末棒全员交接。
- [handoffs.prompt](https://github.com/unclebob/swarm-forge/blob/main/swarmforge/constitution/articles/handoffs.prompt)
  给 agent 看的交接操作说明。Use for: draft 格式、`swarm_handoff.sh` / `ready_for_next.sh` / `done_with_current.sh`。
- [workflow.prompt](https://github.com/unclebob/swarm-forge/blob/main/swarmforge/constitution/articles/workflow.prompt)
  共享工作流宪法。Use for: worktree 边界、commit byline、`./tmp/`。
- [get-swarm-forge](https://github.com/unclebob/swarm-forge/blob/main/get-swarm-forge)
  合成脚本。Use for: 如何从 `main` 抽共享件再叠 pack 分支。
- [AGENTS.md](https://github.com/unclebob/swarm-forge/blob/main/AGENTS.md)
  仓库维护约束。Use for: 不要用自动化测试去钉 prompt 措辞。

## Wisdom (Communities)

- [unclebob/swarm-forge Issues](https://github.com/unclebob/swarm-forge/issues)
  上游问题与设计讨论。Use for: 行为是否过时、已知坑。
- [Clean Coders / Uncle Bob 相关讨论场](https://github.com/unclebob)
  作者其他仓库（mutation、CRAP、DRY、Acceptance Pipeline）。Use for: 宪法里点名的工具从哪来。

## Gaps

- 仓库 README 没有单独的“为什么用 swarm 而不是单 session”论文；意图要从 Intent 段和 pack 角色切分里自己抽。
- 可运行细节只在 pack 分支（`two-pack` / `four-pack` / `six-pack`）上完整出现；`main` 上没有 `swarmforge.conf` 和 `roles/*.prompt`。
