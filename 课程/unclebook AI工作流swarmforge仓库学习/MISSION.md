# Mission: SwarmForge 工作流

## Why

你已经在用单 agent + skills 的编排（例如 `mattpocock/skills`）。现在要读懂 Uncle Bob 的 SwarmForge：它怎么用 **多角色、多 worktree、tmux + 仪表盘** 把一群 agent 管成可交接的软件工程流水线。学完后，你能对照自己的 AI 开发流程，判断哪些纪律值得搬过来。

## Success looks like

- 能画出 `main` 与 pack 分支的分工：共享脚本 / 共享宪法 vs 可运行工作流。
- 能解释一次任务如何从 New Task 走到 Done：master agent、git_handoff、人类闸门。
- 能对照 `two-pack` / `four-pack` / `six-pack` 说出各自适用的任务规模，不默认上满六角色。
- 能指认 `swarmforge/` 里三样东西各自管什么：constitution 文章、handoff 协议、scripts。

## Constraints

- 课程包放在本知识库的 `课程/` 下，课件用 HTML，源码引用走 GitHub，保证换机器仍能打开。
- 先建立地图，再把一条 pack **整台走完**；交接协议跟着 pack 一起讲。第一课不做安装。
- 学习者在 `D:\work\codeup\swarm-forge` 有本地克隆，允许切分支备课；课件引用必须用 GitHub URL，不用本地路径。
- 你在 Windows 上学习；SwarmForge 文档偏 macOS/Linux + zsh。安装与终端适配放到后面的课，第一课不阻塞。

## Out of scope

- 现在不部署、不改 fork、不把 SwarmForge 接到本仓库的 playbook。
- 不精读 `pack_web.bb` 仪表盘实现细节，直到至少走完一个 pack 的完整闭环。
- 不展开 Uncle Bob 的 CRAP / mutation / DRY 工具链实现，只先知道它们被写进共享 engineering 宪法。
